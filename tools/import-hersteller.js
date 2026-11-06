// Übernimmt offizielle Herstellerbilder/Logos aus den Agenten-Manifesten in das Repository.
// Aufruf: node tools/import-hersteller.js <ordner-mit-<marke>/manifest.json>
// Schreibt assets/photos/hersteller/<produkt-id>-<n>.jpg, assets/brand/logos/<marke>.(png|svg)
// und data/media-hersteller.js (ergänzt window.NSCOOTS_MEDIA.products / .logos, status "hersteller").
const fs = require("fs"), path = require("path"), { execFileSync } = require("child_process");
const root = path.join(__dirname, ".."); const src = process.argv[2];
if (!src) { console.error("Ordner fehlt"); process.exit(1); }
const outFile = path.join(root, "data", "media-hersteller.js");
let existing = { products: {}, logos: {}, quellen: {} };
if (fs.existsSync(outFile)) { global.window = { NSCOOTS_MEDIA: { products: {}, logos: {} } }; try { require(outFile); existing = window.__HERSTELLER || existing; } catch (e) {} }
// Differenz-Hash (9x8 Graustufen) für Duplikat-Erkennung
const dhash = (f) => { try { const buf = execFileSync("ffmpeg", ["-loglevel", "error", "-i", f, "-vf", "scale=9:8:flags=area,format=gray", "-f", "rawvideo", "-"], { maxBuffer: 1e6 }); if (buf.length < 72) return null; let bits = ""; for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) bits += buf[y * 9 + x] < buf[y * 9 + x + 1] ? "1" : "0"; return bits; } catch (e) { return null; } };
const hamming = (a, b) => { let d = 0; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++; return d; };
const SKIP = new Set(["joyor-s5z-48v-13ah-600w-1", "teverun-blade-mini-ultra-ch-edition-2", "kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike-2"]);
const sizeOf = (f) => { try { const o = execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", f]).toString().trim().split(","); return { w: +o[0], h: +o[1] }; } catch (e) { return null; } };
for (const brand of fs.readdirSync(src)) {
  const mf = path.join(src, brand, "manifest.json"); if (!fs.existsSync(mf)) continue;
  const m = JSON.parse(fs.readFileSync(mf, "utf8"));
  const abs = (f) => (f && !path.isAbsolute(f)) ? path.join(src, brand, f) : f; // relative Pfade im Manifest
  (m.products || []).forEach((p) => (p.images || []).forEach((im) => { im.file = abs(im.file); }));
  // Logos werden manuell in data/media.js gepflegt (1:1 von den Herstellerseiten); Agenten-Logos werden ignoriert.
  for (const p of m.products || []) {
    if (!p.images || !p.images.length || p.matchQuality === "none") continue;
    // Alle offiziellen Bilder übernehmen (Produktbilder zuerst, dann Lifestyle); Duplikate per Bildhash aussortieren
    const prod = p.images.filter((i) => i.kind === "product" && fs.existsSync(i.file));
    const life = p.images.filter((i) => i.kind === "lifestyle" && fs.existsSync(i.file));
    // Lieferantenbilder (E-Rydez-Sortiment, assets/photos/produkte) zuerst als Hauptbilder, danach die offiziellen Herstellerbilder
    const seen = new Set(); const list = [];
    const late = [];
    for (let n = 1; n <= 12; n++) {
      const f = path.join(root, "assets", "photos", "produkte", `${p.id}-${n}.jpg`); if (!fs.existsSync(f)) break;
      if (SKIP.has(`${p.id}-${n}`)) continue; // zeigt ein anderes Modell oder ist eine Dublette
      const h = dhash(f); if (h && [...seen].some((s) => hamming(s, h) <= 6)) continue; if (h) seen.add(h);
      const sz = sizeOf(f); const entry = { src: `assets/photos/produkte/${p.id}-${n}.jpg`, alt: `${p.model}, Ansicht ${n}`, status: "lieferant", kind: p.id.includes("ersatzteile") ? "lifestyle" : "produkt", credit: "", license: "Lieferantenbild (Sortiment)", page: "", match: "" };
      if (sz && sz.w < 1000) late.push(entry); else list.push(entry); // zu kleine Bilder hinter die Herstellerbilder
    }
    const uniq = [];
    for (const im of [...prod, ...life]) { const h = dhash(im.file); if (h && [...seen].some((s) => hamming(s, h) <= 6)) continue; if (h) seen.add(h); uniq.push(im); }
    uniq.forEach((im, i) => {
      const dst = path.join(root, "assets", "photos", "hersteller", `${p.id}-${i + 1}.jpg`);
      try {
        const isProduct = im.kind === "product";
        // Transparenz auf Weiss legen (sonst schwarz), dann skalieren
        execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", im.file, "-filter_complex", `[0:v]format=rgba,scale='min(${isProduct ? 1800 : 1600},iw)':-2[img];color=white[bg];[bg][img]scale2ref[bg2][img2];[bg2][img2]overlay=format=auto:shortest=1,format=rgb24`, "-q:v", isProduct ? "2" : "4", dst]);
        list.push({ src: `assets/photos/hersteller/${p.id}-${i + 1}.jpg`, alt: `${p.model}, ${isProduct ? "Produktbild" : "Lifestyle-Foto"} ${i + 1}`, status: "hersteller", kind: isProduct ? "produkt" : "lifestyle", credit: "Hersteller", license: `Herstellerbild, ${im.sourceUrl}`, page: p.matchedPageUrl || "", match: p.matchQuality });
      } catch (e) { console.warn("skip", im.file, e.message.split("\n")[0]); }
    });
    list.push(...late);
    if (list.length) { existing.products[p.id] = list; existing.quellen[p.id] = { page: p.matchedPageUrl, match: p.matchQuality, notes: p.notes || "" }; }
  }
}
// Freisteller vereinheitlichen (Zuschnitt, Quadrat, Weiss); Bilder mit dunklem Hintergrund werden zu "lifestyle"
{
  const files = []; for (const list of Object.values(existing.products)) for (const m of list) if (m.kind === "produkt") files.push(path.join(root, m.src));
  let flagged = [];
  for (let i = 0; i < files.length; i += 150) { try { flagged.push(...JSON.parse(execFileSync("python3", [path.join(__dirname, "crop-freisteller.py"), ...files.slice(i, i + 150)], { maxBuffer: 1e7 }).toString())); } catch (e) { console.warn("Zuschnitt übersprungen:", e.message.split("\n")[0]); } }
  const flag = new Set(flagged.map((f) => path.relative(root, f)));
  for (const [id, list] of Object.entries(existing.products)) {
    for (const m of list) if (flag.has(m.src)) { m.kind = "lifestyle"; m.alt = m.alt.replace("Produktbild", "Foto"); }
    // Produktbilder zuerst, Szenen danach
    existing.products[id] = [...list.filter((m) => m.kind === "produkt"), ...list.filter((m) => m.kind !== "produkt")];
  }
  console.log(`Freisteller: ${files.length} geprüft, ${flag.size} als Szene eingestuft`);
}
const out = `/* Automatisch erzeugt: node tools/import-hersteller.js – offizielle Herstellerbilder und Logos.
 * status "hersteller": Bilder von den offiziellen Herstellerseiten (Quelle je Bild in "license").
 * Nutzung als Händler üblich, schriftliche Freigabe vor Verkaufsstart einholen (siehe ASSETS.md). */
(function () {
  const H = ${JSON.stringify({ products: existing.products, logos: {} }, null, 1)};
  window.__HERSTELLER = Object.assign({ quellen: ${JSON.stringify(existing.quellen, null, 1)} }, H);
  const M = window.NSCOOTS_MEDIA; if (!M) return;
  M.logos = Object.assign({}, H.logos, M.logos || {}); // manuell gepflegte Logos in data/media.js haben Vorrang
  M.products = Object.assign({}, H.products, M.products || {});
})();
`;
fs.writeFileSync(outFile, out);
console.log(`Hersteller: ${Object.keys(existing.logos).length} Logos, ${Object.keys(existing.products).length} Produkte mit Bildern`);
