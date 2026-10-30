// Abnahme der Foto-/Video-/Parallax-Schicht mit Testbildern (tests/fixtures, keine echten Fotos).
// node tests/make-fixtures.js && node tests/abnahme-medien.js   (Server auf :8080 im Projektordner)
const { chromium } = require("playwright"); const fs = require("fs");
const BASE = process.env.BASE || "http://localhost:8080/";
const shots = __dirname + "/screenshots"; fs.mkdirSync(shots, { recursive: true });
const results = []; const ok = (n, c, info = "") => { results.push({ n, c }); console.log((c ? "PASS " : "FAIL ") + n + (info ? "  (" + info + ")" : "")); };
const FX = "tests/fixtures/";
const override = `window.__FX = ${JSON.stringify(FX)};
  document.addEventListener("DOMContentLoaded", () => {}, { once: true });
  Object.defineProperty(window, "NSCOOTS_MEDIA", { configurable: true, set(v) { this.__m = v; }, get() {
    const m = this.__m; if (!m || m.__patched) return m; m.__patched = true;
    const f = (name, kind = "foto") => ({ src: __FX + name + ".jpg", alt: "Testbild " + name, status: "frei", kind, credit: "Fixture", license: "Test" });
    m.hero.image = f("hero-stadt-abend"); m.hero.video = { src: __FX + "hero-ride.mp4", poster: __FX + "hero-stadt-abend.jpg", status: "frei", credit: "Fixture", license: "Test" };
    m.profiles = { alltag: f("profil-alltag"), touren: f("profil-touren"), offroad: f("profil-gelaende", "symbol") };
    m.story = [f("story-1"), f("story-2"), f("story-3")];
    m.brands.kukirin = f("marke-kukirin", "symbol"); m.brands.joyor = f("marke-joyor", "symbol");
    m.dirtbikes = f("dirtbike", "symbol");
    m.products = { "kukirin-g2-master": [f("produkt-a"), f("produkt-b")] };
    return m; } });`;

(async () => {
  const browser = await chromium.launch();
  for (const [label, width, height] of [["mobil-390", 390, 844], ["desktop-1440", 1440, 900]]) {
    const ctx = await browser.newContext({ viewport: { width, height }, locale: "de-CH" });
    await ctx.addInitScript(override);
    const page = await ctx.newPage(); const errors = [];
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); }); page.on("pageerror", (e) => errors.push(e.message));
    const noOverflow = async (n) => { const w = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]); ok(`${label}: kein Überlauf (${n})`, w[0] <= w[1], `${w[0]}/${w[1]}`); };

    await page.goto(BASE + "#/"); await page.waitForSelector("#hero-title");
    ok(`${label}: Hero-Video vorhanden`, (await page.locator("video.hero-video").count()) === 1);
    ok(`${label}: Kein Produktbild neben Video`, (await page.locator(".hero-product, .hero-panel").count()) === 0);
    await page.waitForTimeout(600);
    ok(`${label}: Hero-Video spielt`, await page.locator("video.hero-video").evaluate((v) => !v.paused));
    await page.click('[data-action="video-toggle"]');
    ok(`${label}: Video pausierbar`, await page.locator("video.hero-video").evaluate((v) => v.paused));
    ok(`${label}: Fahrprofile mit Fotos`, (await page.locator('.profile-media img[src*="fixtures"]').count()) === 3);
    ok(`${label}: Symbolbild gekennzeichnet`, (await page.locator(".profile-media .media-badge").allTextContents()).includes("Symbolbild"));
    ok(`${label}: Story-Bilder vorhanden`, (await page.locator('.story-media img[src*="fixtures"]').count()) === 3);
    ok(`${label}: Marken mit Foto`, (await page.locator(".brand-chip.has-photo").count()) >= 2);
    // Parallax: Transform ändert sich beim Scrollen
    await page.waitForLoadState("networkidle"); await page.waitForTimeout(300);
    const before = await page.locator(".story-media img").first().evaluate((i) => i.style.transform);
    await page.locator(".story-media").first().scrollIntoViewIfNeeded(); await page.waitForTimeout(150);
    await page.evaluate(() => window.scrollBy(0, 120)); await page.waitForTimeout(300);
    const after = await page.locator(".story-media img").first().evaluate((i) => i.style.transform);
    ok(`${label}: Parallax bewegt Bild beim Scrollen`, before !== after && /translate3d/.test(after), after);
    ok(`${label}: Sektionen eingeblendet`, (await page.locator("[data-reveal].is-in").count()) >= 2);
    // Keine Lücke: Medium deckt den Rahmen an mehreren Scrollpositionen
    let gaps = [];
    const docH = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
    for (let y = 0; y <= docH; y += Math.max(120, Math.floor(docH / 14))) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(60);
      const g = await page.evaluate(() => [...document.querySelectorAll("[data-parallax]")].map((el) => { const m = el.querySelector("img, video, svg"); if (!m) return null; const a = el.getBoundingClientRect(), b = m.getBoundingClientRect(); if (a.bottom < 0 || a.top > innerHeight) return null; return { top: Math.round(b.top - a.top), bottom: Math.round(a.bottom - b.bottom) }; }).filter(Boolean).filter((r) => r.top > 1 || r.bottom > 1));
      if (g.length) gaps.push({ y, g });
    }
    ok(`${label}: Parallax ohne Lücke (${Math.ceil(docH / Math.max(120, Math.floor(docH / 14)))} Positionen)`, gaps.length === 0, JSON.stringify(gaps).slice(0, 200));
    await page.evaluate(() => window.scrollTo(0, 0));
    await noOverflow("start"); await page.screenshot({ path: `${shots}/${label}-medien-01-start.png`, fullPage: true });

    // Produkt mit Fotos + Lightbox
    await page.goto(BASE + "#/produkt/kukirin-g2-master"); await page.waitForSelector(".pdp");
    ok(`${label}: Produktfoto statt Platzhalter`, (await page.locator("#gallery-main img").getAttribute("src")).includes("fixtures"));
    await page.focus("#gallery-main"); await page.keyboard.press("Enter"); await page.waitForSelector("#lightbox[open]");
    ok(`${label}: Lightbox öffnet`, (await page.locator("#lightbox-count").textContent()) === "1 / 2");
    await page.keyboard.press("ArrowRight");
    ok(`${label}: Pfeiltaste wechselt Bild`, (await page.locator("#lightbox-count").textContent()) === "2 / 2");
    await page.screenshot({ path: `${shots}/${label}-medien-02-lightbox.png` });
    await page.keyboard.press("Escape"); await page.waitForTimeout(100);
    ok(`${label}: Escape schliesst Lightbox, Fokus zurück`, await page.evaluate(() => !document.getElementById("lightbox").open && document.activeElement?.id === "gallery-main"));
    await page.goto(BASE + "#/katalog?marke=kukirin"); await page.waitForSelector("#results .card");
    ok(`${label}: Karte mit Wechselbild`, (await page.locator('.card[data-id="kukirin-g2-master"] .card-media.has-alt').count()) === 1);
    await page.goto(BASE + "#/dirtbikes"); await page.waitForSelector(".prep-hero");
    ok(`${label}: Dirtbike-Foto`, (await page.locator('.prep-media img[src*="fixtures"]').count()) === 1);
    ok(`${label}: Dirtbike-Modell gelistet`, (await page.locator(".product-grid .card").count()) >= 1);
    await noOverflow("dirtbikes");

    // Reduzierte Bewegung
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("about:blank"); await page.goto(BASE + "#/"); await page.waitForSelector("#hero-title"); await page.waitForTimeout(500);
    ok(`${label}: Reduzierte Bewegung → Video pausiert`, await page.locator("video.hero-video").evaluate((v) => v.paused));
    await page.evaluate(() => window.scrollTo(0, 900)); await page.waitForTimeout(250);
    ok(`${label}: Reduzierte Bewegung → kein Parallax`, await page.locator(".story-media img").first().evaluate((i) => !i.style.transform));
    ok(`${label}: Reduzierte Bewegung → alles sichtbar`, (await page.locator("[data-reveal]:not(.is-in)").count()) === 0);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    ok(`${label}: keine Konsolenfehler`, errors.length === 0, errors.join(" | ").slice(0, 300));
    await ctx.close();
  }
  await browser.close();
  const fails = results.filter((r) => !r.c).length;
  console.log(`\n${results.length - fails}/${results.length} bestanden`); process.exit(fails ? 1 : 0);
})();
