// Prüft, welche Fotos/Videos aus data/media.js vorhanden und freigegeben sind.
// Aufruf: node tools/check-media.js
const fs = require("fs"), path = require("path");
global.window = {}; require(path.join(__dirname, "..", "data", "media.js")); require(path.join(__dirname, "..", "data", "media-hersteller.js"));
// Symbolische Verweise "hersteller:<id>:<lifestyle|produkt>:<n>" wie in js/media.js auflösen
(() => { const M = window.NSCOOTS_MEDIA; const pick = (id, kind, n) => { const l = (M.products && M.products[id]) || []; const h = l.filter((m) => m.kind === (kind === "lifestyle" ? "lifestyle" : "produkt") && m.status === "hersteller"); return h[n] || h[h.length - 1] || null; };
  const walk = (o) => { if (!o || typeof o !== "object") return; if (typeof o.src === "string" && o.src.startsWith("hersteller:")) { const [, id, kind, n] = o.src.split(":"); const hit = pick(id, kind, Number(n) || 0); if (hit) o.src = hit.src; else o.status = "fehlt"; return; } Object.keys(o).forEach((k) => { if (k !== "products") walk(o[k]); }); }; walk(M); })();
const root = path.join(__dirname, "..");
const rows = [];
const walk = (o, key = "") => { if (!o || typeof o !== "object") return; if (o.src && "status" in o) rows.push({ key, ...o }); else Object.entries(o).forEach(([k, v]) => walk(v, key ? key + "." + k : k)); };
walk(Object.fromEntries(Object.entries(window.NSCOOTS_MEDIA).filter(([k]) => k !== "products")));
let ok = 0;
for (const r of rows) {
  const exists = fs.existsSync(path.join(root, r.src));
  const st = String(r.status || "").trim().toLowerCase();
  const known = ["fehlt", "frei", "freigegeben", "hersteller"].includes(st);
  const freed = exists && (st === "frei" || st === "freigegeben");
  const vendor = exists && st === "hersteller"; // Herstellerbild: Nutzung üblich, schriftliche Freigabe vor Verkaufsstart
  const docs = !!(r.credit && r.license);
  const usable = freed && docs;
  if (usable) ok++;
  const poster = r.poster ? (fs.existsSync(path.join(root, r.poster)) ? "" : "  (Poster fehlt: " + r.poster + ")") : "";
  const state = usable ? "OK   " : vendor ? "HERST" : !exists ? "FEHLT" : "RECHTE?";
  const why = !exists ? "" : !known ? "  (unbekannter status=" + r.status + ")" : vendor ? "  (Herstellerbild, Freigabe vor Verkaufsstart)" : !freed ? "  (Datei da, status=" + r.status + ")" : !docs ? "  (credit/license fehlen)" : "";
  console.log(`${state}  ${r.key.padEnd(18)} ${r.src}${why}${poster}`);
}
console.log(`\n${ok}/${rows.length} Medien frei lizenziert und veröffentlichungsfertig (Herstellerbilder separat als HERST).`);
