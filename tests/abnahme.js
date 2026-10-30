// Browser-Abnahme: node tests/abnahme.js  (erwartet laufenden Server auf :8080)
const { chromium } = require("playwright");
const fs = require("fs");
const BASE = process.env.BASE || "http://localhost:8080/";
const shots = __dirname + "/screenshots"; fs.mkdirSync(shots, { recursive: true });
const results = []; const ok = (name, cond, info = "") => { results.push({ name, pass: !!cond, info }); console.log((cond ? "PASS " : "FAIL ") + name + (info ? "  (" + info + ")" : "")); };

(async () => {
  const browser = await chromium.launch();
  for (const [label, width, height] of [["mobil-390", 390, 844], ["desktop-1440", 1440, 900]]) {
    const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, locale: "de-CH" });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
    page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
    page.on("requestfailed", (r) => { if (!r.url().includes("fonts.g")) errors.push("requestfailed: " + r.url()); });
    const noOverflow = async (name) => { const w = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]); ok(`${label}: kein horizontaler Überlauf (${name})`, w[0] <= w[1], `${w[0]}/${w[1]}`); };
    const shot = (n) => page.screenshot({ path: `${shots}/${label}-${n}.png`, fullPage: true });

    // Start
    await page.goto(BASE + "#/"); await page.waitForSelector("#hero-title");
    await noOverflow("start"); await shot("01-start");
    ok(`${label}: Startseite zeigt Modelle`, (await page.locator('section[aria-labelledby="featured-title"] .card').count()) === 4);
    ok(`${label}: Hero mit Lifestyle-Foto`, (await page.locator(".hero-panel img").count()) === 1);
    ok(`${label}: «Premium Scooter» im Hero`, (await page.locator(".hero h1").textContent()).includes("Premium Scooter"));
    ok(`${label}: Showcase vorhanden`, (await page.locator(".showcase-img").count()) === 3);
    await page.click('.brand-tab[data-brand="joyor"]'); await page.waitForTimeout(150);
    ok(`${label}: Marken-Tab wechselt Auswahl`, (await page.locator("#panel-brands .card-brand").first().textContent()).startsWith("Joyor"));
    await page.focus('.brand-tab[data-brand="joyor"]'); await page.keyboard.press("ArrowRight"); await page.waitForTimeout(150);
    ok(`${label}: Tabs per Pfeiltaste`, (await page.locator('.brand-tab[aria-selected="true"]').getAttribute("data-brand")) === "teverun");
    ok(`${label}: Fahrprofile mit Fotos`, (await page.locator('.profile-media img[src*="assets/photos"]').count()) === 3);
    ok(`${label}: keine Fotoreferenzen am Bild`, (await page.locator(".media-credit:not([hidden]), .media-badge:not([hidden])").filter({ hasText: /\S/ }).count()) === 0);
    ok(`${label}: Galerie vorhanden`, (await page.locator(".mosaic-item").count()) >= 8);
    ok(`${label}: Logo-Leiste mit Markenlogos`, (await page.locator(".brand-pill-logo img").count()) >= 6);
    ok(`${label}: Wortmarke als SVG`, (await page.locator(".site-header .wm-img").count()) === 1);

    // Brand-Einstieg aktiviert Filter
    await page.click('a.brand-chip[href="#/katalog?marke=kukirin"]');
    await page.waitForSelector("#results .card");
    ok(`${label}: Marken-Einstieg aktiviert Filter`, await page.isChecked('input[name="marke"][value="kukirin"]'));
    const brandCount = await page.locator("#results .card").count();
    const kukirinTotal = await page.evaluate(() => window.NSCOOTS_DATA.products.filter((p) => p.brand === "kukirin").length);
    ok(`${label}: nur KuKirin-Modelle (${brandCount})`, brandCount === kukirinTotal && (await page.locator("#results .card-brand").allTextContents()).every((t) => t.startsWith("KuKirin")));
    await noOverflow("katalog"); await shot("02-katalog-kukirin");

    // Suche + leerer Zustand + Reset
    if (width < 900) { await page.click("#filter-toggle"); }
    await page.fill("#f-q", "xyz-nichts"); await page.waitForTimeout(300);
    ok(`${label}: Leerer Zustand sichtbar`, await page.locator("#results .empty").isVisible());
    await shot("03-katalog-leer");
    await page.click('#results [data-action="reset-filters"]'); await page.waitForTimeout(100);
    const total = await page.evaluate(() => window.NSCOOTS_DATA.products.length);
    ok(`${label}: Reset zeigt alle Modelle (${total})`, (await page.locator("#results .card").count()) === total, String(await page.locator("#results .card").count()));
    await page.fill("#f-q", "joyor"); await page.waitForTimeout(300);
    const joyorTotal = await page.evaluate(() => window.NSCOOTS_DATA.products.filter((p) => p.brand === "joyor").length);
    ok(`${label}: Suche «joyor» → ${joyorTotal} Treffer`, (await page.locator("#results .card").count()) === joyorTotal);
    await page.fill("#f-q", ""); await page.waitForTimeout(300);
    // Preisfilter + Sortierung
    await page.fill("#f-max", "600"); await page.waitForTimeout(400);
    const under600 = await page.evaluate(() => window.NSCOOTS_DATA.products.filter((p) => p.price.chf != null && p.price.chf <= 600).length);
    ok(`${label}: Preisfilter bis 600 → ${under600} Modelle`, (await page.locator("#results .card").count()) === under600);
    await page.fill("#f-max", ""); await page.waitForTimeout(400);
    await page.selectOption("#f-sort", "preis-auf"); await page.waitForTimeout(100);
    const cheapest = await page.evaluate(() => window.NSCOOTS_DATA.products.filter((p) => p.price.chf != null).sort((a, b) => a.price.chf - b.price.chf)[0].model);
    ok(`${label}: Sortierung Preis → günstigstes zuerst`, (await page.locator("#results .card-title").first().textContent()).includes(cheapest), cheapest);
    await page.selectOption("#f-sort", "gewicht"); await page.waitForTimeout(100);
    ok(`${label}: URL spiegelt Sortierung`, page.url().includes("sort=gewicht"));

    // Produktseite
    await page.goto(BASE + "#/produkt/kukirin-g2-master"); await page.waitForSelector(".pdp");
    ok(`${label}: PDP Titel`, (await page.locator("h1").textContent()).includes("G2 Master"));
    ok(`${label}: PDP Preis`, (await page.locator(".price-block .price").textContent()).includes("CHF 869.–"));
    ok(`${label}: PDP Lieferstatus sichtbar`, (await page.locator(".pdp-status").textContent()).includes("Vorbestellung"));
    ok(`${label}: PDP ohne Händler-Beschriftung am Bild`, (await page.locator("#gallery-main .media-credit").count()) === 0);
    ok(`${label}: PDP CH-Status`, (await page.locator(".pdp-status .tag-signal").textContent()).includes("Privatgelände"));
    await page.goto(BASE + "#/produkt/teverun-fighter-mini-pro-ekfv"); await page.waitForSelector(".pdp");
    ok(`${label}: eKFV-Modell als strassenzugelassen markiert`, (await page.locator(".pdp-status").textContent()).includes("Strassenzugelassen CH"));
    await page.goto(BASE + "#/katalog?kat=escooter&zulassung=ch"); await page.waitForSelector("#results .card");
    ok(`${label}: Filter strassenzugelassen → 3 Modelle`, (await page.locator("#results .card").count()) === 3);
    await page.goto(BASE + "#/produkt/kukirin-g2-master"); await page.waitForSelector(".pdp");
    await page.click('[data-action="thumb"][data-i="2"]');
    ok(`${label}: Galerie wechselt Bild`, (await page.locator("#gallery-main img").getAttribute("src")).includes("-3.jpg"));
    await noOverflow("pdp"); await shot("04-produkt");
    // Ungültige ID
    await page.goto(BASE + "#/produkt/gibt-es-nicht"); await page.waitForSelector("h1");
    ok(`${label}: Ungültige Produkt-ID → Fehlerseite`, (await page.locator("h1").textContent()).includes("nicht gefunden"));

    // Warenkorb: hinzufügen, Drawer, Escape, Fokus zurück
    await page.goto(BASE + "#/produkt/kukirin-g2-master"); await page.waitForSelector(".pdp");
    await page.focus('.buy-row [data-action="add"]'); await page.keyboard.press("Enter");
    await page.waitForSelector("#cart-drawer[open]");
    ok(`${label}: Drawer öffnet nach Hinzufügen`, await page.locator("#cart-drawer").evaluate((d) => d.open));
    await page.keyboard.press("Escape"); await page.waitForTimeout(100);
    ok(`${label}: Escape schliesst Drawer`, !(await page.locator("#cart-drawer").evaluate((d) => d.open)));
    ok(`${label}: Fokus zurück auf Auslöser`, await page.evaluate(() => document.activeElement?.dataset.action === "add"));
    await page.goto(BASE + "#/produkt/joyor-s5-abe-48v-500w"); await page.waitForSelector(".pdp");
    await page.click('.buy-row [data-action="add"]'); await page.waitForSelector("#cart-drawer[open]"); await page.click('#cart-drawer [data-action="close-dialog"]');
    await page.goto(BASE + "#/warenkorb"); await page.waitForSelector(".cart-layout");
    ok(`${label}: 2 Positionen im Warenkorb`, (await page.locator("#cart-list .cart-item").count()) === 2);
    await page.click('#cart-list .cart-item[data-id="kukirin-g2-master"] [data-action="qty-inc"]'); await page.waitForTimeout(100);
    ok(`${label}: Menge erhöht → 2`, (await page.locator('#cart-list .cart-item[data-id="kukirin-g2-master"] input').inputValue()) === "2");
    const sub = await page.locator(".summary-row").nth(1).locator("span").nth(1).textContent();
    ok(`${label}: Zwischensumme 2×869 + 499 = CHF 2’237.–`, sub === "CHF 2’237.–", sub);
    ok(`${label}: Total = Zwischensumme (alle Preise bekannt)`, (await page.locator(".summary-row.total span").nth(1).textContent()) === "CHF 2’237.–");
    await page.reload(); await page.waitForSelector(".cart-layout");
    ok(`${label}: Warenkorb überlebt Neuladen`, (await page.locator('#cart-list .cart-item[data-id="kukirin-g2-master"] input').inputValue()) === "2");
    await noOverflow("warenkorb"); await shot("05-warenkorb");
    await page.click('[data-action="checkout"]'); await page.waitForSelector("#checkout-dialog[open]");
    ok(`${label}: Checkout-Hinweis sichtbar`, (await page.locator("#checkout-title").textContent()).includes("keine Kasse"));
    await page.keyboard.press("Escape"); await page.waitForTimeout(100);
    ok(`${label}: Fokus nach Checkout-Dialog zurück`, await page.evaluate(() => document.activeElement?.dataset.action === "checkout"));
    await page.click('#cart-list .cart-item[data-id="joyor-s5-abe-48v-500w"] [data-action="remove"]'); await page.waitForTimeout(100);
    ok(`${label}: Entfernen funktioniert`, (await page.locator("#cart-list .cart-item").count()) === 1);
    await page.click('[data-action="cart-clear"]'); await page.waitForTimeout(100);
    ok(`${label}: Leerer Warenkorb mit Rückkehr-Link`, await page.locator('.empty a[href="#/katalog"]').isVisible());

    // Vergleich mit 3 Modellen
    await page.goto(BASE + "#/katalog?kat=escooter"); await page.waitForSelector("#results .card");
    for (const id of ["kukirin-g2-pro", "joyor-s5-abe-48v-500w", "teverun-fighter-mini-pro"]) await page.click(`#results [data-action="compare"][data-id="${id}"]`);
    await page.click(`#results [data-action="compare"][data-id="kukirin-g4"]`); await page.waitForTimeout(100);
    ok(`${label}: Viertes Modell abgelehnt`, (await page.locator("#toast").textContent()).includes("Maximal 3"));
    await page.goto(BASE + "#/vergleich"); await page.waitForSelector(".compare-table");
    ok(`${label}: Vergleich mit 3 Spalten`, (await page.locator(".compare-table thead th").count()) === 4);
    ok(`${label}: Bester Wert markiert`, (await page.locator(".compare-table td.best").count()) >= 2);
    await noOverflow("vergleich"); await shot("06-vergleich");
    await page.click('[data-action="compare-remove"][data-id="joyor-s5-abe-48v-500w"]'); await page.waitForTimeout(100);
    ok(`${label}: Modell aus Vergleich entfernt`, (await page.locator(".slot.filled").count()) === 2);
    await page.click('[data-action="compare-pick"]'); await page.waitForSelector("#pick-dialog[open]");
    await page.click('#pick-list [data-action="pick"][data-id="rovoron-r7"]'); await page.waitForTimeout(150);
    ok(`${label}: Modell per Dialog hinzugefügt`, (await page.locator(".slot.filled").count()) === 3);

    // Dirtbikes + Info + Tastatur
    await page.goto(BASE + "#/dirtbikes"); await page.waitForSelector(".prep-hero"); await noOverflow("dirtbikes"); await shot("07-dirtbikes");
    await page.goto("about:blank"); await page.goto(BASE + "#/"); await page.waitForSelector("#hero-title");
    await page.keyboard.press("Tab");
    ok(`${label}: Erster Tab = Skip-Link`, await page.evaluate(() => document.activeElement?.classList.contains("skip-link")));
    let reached = false; for (let i = 0; i < 25; i++) { await page.keyboard.press("Tab"); if (await page.evaluate(() => document.activeElement?.matches('.hero-cta a'))) { reached = true; break; } }
    ok(`${label}: Hero-CTA per Tastatur erreichbar`, reached);
    if (width < 900) { await page.click("#menu-btn"); ok(`${label}: Mobiles Menü öffnet`, await page.locator("#mobile-nav").isVisible()); await shot("08-menu"); }

    // Kaputte Links prüfen (alle #/-Links der Startseite + Footer)
    const hrefs = await page.evaluate(() => [...document.querySelectorAll('a[href^="#/"]')].map((a) => a.getAttribute("href")));
    let broken = [];
    for (const h of [...new Set(hrefs)]) { await page.goto(BASE + h); await page.waitForSelector("h1"); const t = await page.locator("h1").first().textContent(); if (t.includes("nicht gefunden")) broken.push(h); }
    ok(`${label}: keine kaputten internen Links (${hrefs.length} geprüft)`, broken.length === 0, broken.join(", "));

    ok(`${label}: keine Konsolenfehler`, errors.length === 0, errors.join(" | ").slice(0, 300));
    await ctx.close();
  }
  await browser.close();
  const fails = results.filter((r) => !r.pass);
  console.log(`\n${results.length - fails.length}/${results.length} bestanden`);
  process.exit(fails.length ? 1 : 0);
})();
