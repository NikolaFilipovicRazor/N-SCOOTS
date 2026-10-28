// Prüft, welche Fotos/Videos aus data/media.js vorhanden und freigegeben sind.
// Aufruf: node tools/check-media.js
const fs = require("fs"), path = require("path");
global.window = {}; require(path.join(__dirname, "..", "data", "media.js"));
const root = path.join(__dirname, "..");
const rows = [];
const walk = (o, key = "") => { if (!o || typeof o !== "object") return; if (o.src && "status" in o) rows.push({ key, ...o }); else Object.entries(o).forEach(([k, v]) => walk(v, key ? key + "." + k : k)); };
walk(window.NSCOOTS_MEDIA);
let ok = 0;
for (const r of rows) {
  const exists = fs.existsSync(path.join(root, r.src));
  const st = String(r.status || "").trim().toLowerCase();
  const known = ["fehlt", "frei", "freigegeben"].includes(st);
  const freed = exists && (st === "frei" || st === "freigegeben");
  const docs = !!(r.credit && r.license);
  const usable = freed && docs;
  if (usable) ok++;
  const poster = r.poster ? (fs.existsSync(path.join(root, r.poster)) ? "" : "  (Poster fehlt: " + r.poster + ")") : "";
  const state = usable ? "OK   " : !exists ? "FEHLT" : "RECHTE?";
  const why = !exists ? "" : !known ? "  (unbekannter status=" + r.status + ")" : !freed ? "  (Datei da, status=" + r.status + ")" : !docs ? "  (credit/license fehlen)" : "";
  console.log(`${state}  ${r.key.padEnd(18)} ${r.src}${why}${poster}`);
}
console.log(`\n${ok}/${rows.length} Medien veröffentlichungsfertig.`);
