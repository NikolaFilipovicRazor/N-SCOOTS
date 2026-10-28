// Erzeugt eindeutig gekennzeichnete SVG-Platzhalter (keine Produktfotos).
// Aufruf: node tools/make-placeholders.js
const fs = require("fs");
const path = require("path");
global.window = {};
require(path.join(__dirname, "..", "data", "products.js"));
const { products, brands } = window.NSCOOTS_DATA;
const out = path.join(__dirname, "..", "assets", "img");
fs.mkdirSync(out, { recursive: true });

const brandName = (id) => (brands.find((b) => b.id === id) || {}).name || "";

// Stilisierte Silhouetten (bewusst abstrakt, keine Modellmerkmale)
const silhouettes = {
  scooter: (v) => `
    <g fill="none" stroke="#1c1f24" stroke-width="14" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="210" cy="520" r="62"/><circle cx="890" cy="520" r="62"/>
      <path d="M272 520 H 820"/>
      <path d="M300 505 L 410 505"/>
      <path d="M 830 500 L 760 240 L 735 160"/>
      <path d="M 690 160 H 790"/>
      ${v === 2 ? '<path d="M 300 460 L 830 460" stroke="#1f4fe0"/>' : ""}
      ${v === 3 ? '<path d="M 760 240 L 700 240" stroke="#1f4fe0"/><circle cx="890" cy="520" r="30" stroke="#1f4fe0"/>' : ""}
    </g>`,
  dirtbike: () => `
    <g fill="none" stroke="#1c1f24" stroke-width="14" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="230" cy="520" r="95"/><circle cx="880" cy="520" r="95"/>
      <path d="M 300 470 L 470 300 L 700 300 L 820 470"/>
      <path d="M 470 300 L 560 430 L 700 300"/>
      <path d="M 760 230 L 700 300"/><path d="M 700 230 H 820"/>
      <path d="M 560 430 L 540 500"/>
    </g>`,
  helm: () => `<g fill="none" stroke="#1c1f24" stroke-width="14" stroke-linecap="round"><path d="M 300 480 A 250 250 0 0 1 800 480 L 800 520 L 300 520 Z"/><path d="M 330 430 H 770" stroke="#1f4fe0"/></g>`,
  schloss: () => `<g fill="none" stroke="#1c1f24" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M 350 300 L 450 230 L 560 300 L 660 230 L 760 300"/><rect x="330" y="300" width="450" height="240" rx="30"/><circle cx="555" cy="420" r="28" stroke="#1f4fe0"/></g>`,
  ladegeraet: () => `<g fill="none" stroke="#1c1f24" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><rect x="330" y="330" width="440" height="200" rx="24"/><path d="M 770 430 H 870"/><path d="M 230 430 H 330"/><circle cx="420" cy="430" r="14" fill="#1f4fe0" stroke="none"/></g>`
};

function svg(title, sub, body, view) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 760" width="1100" height="760" role="img" aria-label="Platzhalter: ${title}">
  <rect width="1100" height="760" fill="#eef0f4"/>
  <rect x="0" y="640" width="1100" height="120" fill="#e3e6ec"/>
  ${body}
  <text x="56" y="88" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" fill="#1c1f24">${title}</text>
  <text x="56" y="126" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#4a5060">${sub}</text>
  <g transform="translate(56 690)">
    <rect width="420" height="44" rx="6" fill="#1c1f24"/>
    <text x="16" y="29" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#ffffff">PLATZHALTER – KEIN PRODUKTFOTO</text>
  </g>
  <text x="1044" y="720" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#4a5060">Ansicht ${view}</text>
</svg>`;
}

let n = 0;
for (const p of products) {
  p.images.forEach((file, i) => {
    const kind = p.category === "zubehoer" ? file.split("-")[1] : "scooter";
    const body = (silhouettes[kind] || silhouettes.scooter)(i + 1);
    const sub = p.category === "zubehoer" ? "Zubehör (geplant)" : brandName(p.brand) + " · Silhouette, nicht massstäblich";
    fs.writeFileSync(path.join(out, file), svg(p.model, sub, body, i + 1));
    n++;
  });
}
fs.writeFileSync(path.join(out, "dirtbike-platzhalter.svg"), svg("E-Dirtbikes", "Sortiment in Vorbereitung", silhouettes.dirtbike(), 1));
fs.writeFileSync(path.join(out, "fehlt.svg"), svg("Bild nicht verfügbar", "Platzhalter wird nachgeliefert", "", 1));
console.log("SVG-Platzhalter erzeugt:", n + 2);
