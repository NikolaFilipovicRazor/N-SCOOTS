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
const sizeOf = (f) => { try { const o = execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", f]).toString().trim().split(","); return { w: +o[0], h: +o[1] }; } catch (e) { return null; } };
for (const brand of fs.readdirSync(src)) {
  const mf = path.join(src, brand, "manifest.json"); if (!fs.existsSync(mf)) continue;
  const m = JSON.parse(fs.readFileSync(mf, "utf8"));
  // Logos werden manuell in data/media.js gepflegt (1:1 von den Herstellerseiten); Agenten-Logos werden ignoriert.
  for (const p of m.products || []) {
    if (!p.images || !p.images.length || p.matchQuality === "none") continue;
    const prod = p.images.filter((i) => i.kind === "product" && fs.existsSync(i.file)).slice(0, 3);
    const life = p.images.filter((i) => i.kind === "lifestyle" && fs.existsSync(i.file)).slice(0, 2);
    const list = [];
    [...prod, ...life].forEach((im, i) => {
      const dst = path.join(root, "assets", "photos", "hersteller", `${p.id}-${i + 1}.jpg`);
      try {
        const isProduct = im.kind === "product";
        // Transparenz auf Weiss legen (sonst schwarz), dann skalieren
        execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", im.file, "-filter_complex", `[0:v]format=rgba,scale='min(${isProduct ? 1200 : 1600},iw)':-2[img];color=white[bg];[bg][img]scale2ref[bg2][img2];[bg2][img2]overlay=format=auto:shortest=1,format=rgb24`, "-q:v", isProduct ? "4" : "5", dst]);
        list.push({ src: `assets/photos/hersteller/${p.id}-${i + 1}.jpg`, alt: `${p.model}, ${isProduct ? "Produktbild" : "Lifestyle-Foto"} ${i + 1}`, status: "hersteller", kind: isProduct ? "produkt" : "lifestyle", credit: "Hersteller", license: `Herstellerbild, ${im.sourceUrl}`, page: p.matchedPageUrl || "", match: p.matchQuality });
      } catch (e) { console.warn("skip", im.file, e.message.split("\n")[0]); }
    });
    if (list.length) { existing.products[p.id] = list; existing.quellen[p.id] = { page: p.matchedPageUrl, match: p.matchQuality, notes: p.notes || "" }; }
  }
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
