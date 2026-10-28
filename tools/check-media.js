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
  const usable = exists && (r.status === "frei" || r.status === "freigegeben");
  if (usable) ok++;
  console.log(`${usable ? "OK   " : exists ? "RECHTE?" : "FEHLT"}  ${r.key.padEnd(18)} ${r.src}${exists && !usable ? "  (Datei da, status=" + r.status + ")" : ""}`);
}
console.log(`\n${ok}/${rows.length} Medien veröffentlichungsfertig.`);
