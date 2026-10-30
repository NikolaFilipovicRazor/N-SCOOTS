// Erzeugt data/products.js aus dem gesicherten E-Rydez-Katalog (tools/quellen/erydez-products.json).
// Aufruf: node tools/import-erydez.js
// Alle Angaben sind Händlerangaben von e-rydez.ch (Referenzpreise, keine N SCOOTS-Preise).
const fs = require("fs"), path = require("path");
const src = JSON.parse(fs.readFileSync(path.join(__dirname, "quellen", "erydez-products.json"), "utf8"));
const src2 = JSON.parse(fs.readFileSync(path.join(__dirname, "quellen", "swiss-scoots-ekfv.json"), "utf8"));
const CHECKED = src.abgerufen;
const ALL = src.products.map((p) => ({ ...p, _src: "e-rydez", _url: `https://e-rydez.ch/products/${p.handle}`, _checked: src.abgerufen }))
  .concat(src2.products.map((p) => ({ ...p, _src: "swiss-scoots", _url: `https://swiss-scoots.ch/products/${p.handle}`, _checked: src2.abgerufen })));
const BRANDS = [
  { id: "kukirin", name: "KuKirin", featured: true, blurb: "Breites Sortiment vom Pendler-Scooter bis zum Offroad-Modell. Unser prominenter Einstieg." },
  { id: "joyor", name: "Joyor", featured: false, blurb: "Leichte Alltagsmodelle mit Fokus auf Komfort und Reichweite." },
  { id: "teverun", name: "Teverun", featured: false, blurb: "Kompakte Doppelmotor-Modelle mit viel Federweg." },
  { id: "dualtron", name: "Dualtron", featured: false, blurb: "Klassiker aus Korea mit hochwertiger Verarbeitung." },
  { id: "rovoron", name: "Rovoron", featured: false, blurb: "Leichtbau trifft grosse Akkus." },
  { id: "ausom", name: "Ausom", featured: false, blurb: "Preisbewusste Modelle für Stadt und Gelände." }
];
const txt = (h) => String(h || "").replace(/<br\s*\/?>|<\/p>|<\/li>|<\/tr>|<\/h\d>/gi, "\n").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/[ \t]+/g, " ").replace(/\n\s*\n+/g, "\n").trim();
const num = (s) => { if (s == null) return null; const m = String(s).replace(/'/g, "").replace(",", ".").match(/\d+(?:\.\d+)?/); return m ? Number(m[0]) : null; };
const brandOf = (title) => { const t = title.toLowerCase(); for (const b of BRANDS) if (t.startsWith(b.id)) return b.id; return null; };
const pretty = (title) => title.replace(/\s*\d+V\s*[\d.,/]+Ah.*$/i, "").replace(/\s*Akku.*$/i, "").replace(/\(CH[- ]Edition\)/i, "eKFV").trim();

const products = [];
for (const p of ALL) {
  const t = txt(p.body_html);
  const lines = t.split("\n").map((l) => l.trim()).filter(Boolean);
  const find = (re) => { const l = lines.find((x) => re.test(x)); return l ? l.replace(/^[^\wÄÖÜäöü≤]+/, "").trim() : null; };
  const isPart = p.product_type === "Ersatzteile";
  const isDirt = /dirtbike/i.test(p.title) || p.tags.some((x) => /dirtbike/i.test(x));
  const brand = brandOf(p.title);
  const prices = p.variants.map((v) => Number(v.price)).filter((n) => n > 0);
  const minPrice = prices.length ? Math.min(...prices) : null;
  const available = p.variants.some((v) => v.available);
  const preorder = /Vorbestellung/i.test(t);
  const preDate = (t.match(/um den (\d{1,2}\. [A-Za-zä]+ \d{4})/) || [])[1] || null;
  // Fliesstext-Format (swiss-scoots): gezielte Muster statt Zeilen
  const prose = p._src === "swiss-scoots";
  const battery = prose ? ((t.match(/(\d+)\s*V\s*([\d.,]+)\s*Ah[^\n]*/) || [])[0] || null) : find(/🔋|Akku:|Batterie/);
  const motor = prose ? ((t.match(/(\d)\s*[×x]\s*(\d+)\s*W\s*Bosch-Motoren[^\n]*/) || [])[0] || null) : find(/⚙|Antrieb:|Motor\b/);
  const range = prose ? ((t.match(/Bis zu (\d+)\s*km Reichweite/) || t.match(/bis zu (\d+)\s*km/i) || [])[0] || null) : find(/⚡|Reichweite/);
  const speed = prose ? ((t.match(/(\d+)\s*km\/h Höchstgeschwindigkeit/) || [])[0] || null) : find(/🕤|Höchstgeschwindigkeit/);
  const proseWh = prose ? num((t.match(/([\d']+)\s*Wh/) || [])[1]) : null;
  const prosePeak = prose ? num((t.match(/Über\s*([\d']+)\s*W Spitzenleistung/) || [])[1]) : null;
  const proseLoad = prose ? (t.match(/Bis\s*(\d+)\s*kg Zuladung/) || [])[1] : null;
  const proseWeight = prose ? (t.match(/Gewicht\s*\n?\s*(?:ca\.?\s*)?([\d.,]+)\s*kg/i) || [])[1] : null;
  const weight = (t.match(/Gewicht:\s*ca\.?\s*([\d.,]+)\s*kg/i) || [])[1] || proseWeight;
  const load = (t.match(/Zuladung\s*([\d.,]+)\s*kg/i) || [])[1] || proseLoad;
  const bV = num((battery || p.title).match(/(\d+)\s*V/i)?.[1]);
  const bAh = num((battery || p.title).match(/([\d.,]+)\s*Ah/i)?.[1]);
  const bWh = proseWh || num((battery || "").match(/([\d.,']+)\s*Wh/i)?.[1]) || (bV && bAh ? Math.round(bV * bAh) : null);
  const motorsM = (motor || p.title).match(/(\d+)\s*W\s*[x×*]\s*(\d)|(\d)\s*[x×*]\s*(\d+)\s*W/i);
  const motors = motorsM ? 2 : (/dual/i.test(p.tags.join(" ") + (motor || "")) ? 2 : 1);
  const perMotor = motorsM ? Number(motorsM[1] || motorsM[4]) : num((motor || p.title).match(/(\d{3,4})\s*-?\s*W/i)?.[1]);
  const motorW = perMotor ? perMotor * motors : null;
  const peakW = prosePeak || num((motor || "").match(/([\d.']+)\s*W\s*(?:Peak|Spitze)|bis\s+([\d.']+)\s*W/i)?.[1] || (motor || "").match(/bis\s+([\d.']+)\s*W/i)?.[1]);
  const rangeKm = range ? (range.match(/(≤?\s*\d+(?:\s*[-–/]\s*\d+)?)\s*km(?!\/h)/i) || [])[1]?.replace(/\s+/g, "") : null;
  const speedKmh = num(speed);
  const abe = /\bABE\b/i.test(p.title) || p.tags.some((x) => /^abe$/i.test(x));
  const ekfv = /eKFV|CH[- ]Edition/i.test(p.title) || p.tags.some((x) => /strassenzugelassen/i.test(x));
  const limited = abe || /20\s*km\/h|25\s*km\/h/.test(speed || "");
  const offroadTag = p.tags.some((x) => /offroad/i.test(x)) || /Gelände|Offroad/i.test(t);
  let segment = null;
  if (ekfv) segment = "alltag"; else if (!isPart && !isDirt) segment = limited && motors === 1 ? "alltag" : (bWh && bWh >= 1500) || (motors === 2 && offroadTag) ? "offroad" : motors === 2 || (bWh && bWh >= 900) ? "touren" : "alltag";
  const chLegal = ekfv ? "Strassenzugelassen Schweiz (Händlerangabe, 20 km/h-Version)" : abe ? "Deutsche ABE (20–25 km/h), keine Schweizer Zulassung ausgewiesen" : "Nicht strassenzugelassen in der Schweiz, für Privatgelände";
  const url = p._url;
  const imgs = p.images.slice(0, 3).map((im, i) => `produkte/${p.handle}-${i + 1}.jpg`); // alle Bilder liegen als JPG vor
  const variants = p.variants.filter((v) => v.title !== "Default Title").map((v) => ({ id: String(v.id), name: v.title, note: `Referenzpreis ${Number(v.price).toFixed(0)} CHF${v.available ? "" : ", laut E-Rydez zurzeit nicht lieferbar"}` }));
  products.push({
    id: p.handle, brand, model: pretty(p.title), fullTitle: p.title,
    category: isPart ? "zubehoer" : isDirt ? "edirtbike" : "escooter", segment,
    summary: isPart ? `Ersatzteile für ${pretty(p.title).replace(/ Ersatzteile$/, "")}: ${p.variants.slice(0, 4).map((v) => v.title).join(", ")}${p.variants.length > 4 ? " und mehr" : ""}.` : lines.filter((l) => !/Vorbestellung|^[🔋🕤⚡⚙️📡📋🏍️🛡️🔑✓]/.test(l) && l.length > 30)[0] || `${pretty(p.title)}: ${battery || ""}${motor ? ", " + motor : ""}.`,
    /* N SCOOTS-Einführungspreis = Marktpreis des Quell-Händlers (Stand Prüfdatum), unverbindlich bis Verkaufsstart */
    price: { chf: minPrice, kind: "shop", basis: p._src, source: url, checked: p._checked, note: isPart || variants.length ? "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart." : "Einführungspreis, unverbindlich bis Verkaufsstart.", from: isPart || variants.length > 0 },
    lieferbarkeit: isPart ? { status: available ? "lieferbar" : "zurzeit nicht lieferbar", checked: p._checked } : available ? (preorder ? { status: `Vorbestellung${preDate ? ", voraussichtlich " + preDate : ""}`, checked: p._checked } : { status: "lieferbar", checked: p._checked }) : { status: "zurzeit nicht lieferbar", checked: p._checked },
    specs: isPart ? {} : { motorW, peakW, motors, batteryV: bV, batteryAh: bAh, batteryWh: bWh, rangeKm, speedKmh, weightKg: num(weight), maxLoadKg: num(load), ekfv, tires: (t.match(/Bereifung:\s*([^\n]+)/) || t.match(/(\d{2}'' [^\n]*reifen)/i) || [])[1] || null, brakes: (t.match(/Bremsen:\s*([^\n]+)/) || t.match(/(Hydraulische Bremsen[^\n|]*)/i) || [])[1] || null, ip: (t.match(/\bIP\d\d\b/) || [])[0] || null, foldable: null, abe, limited },
    variants, chLegal: isPart ? null : chLegal, streetLegalCH: !!ekfv && !isPart,
    sources: [{ url, checked: p._checked, note: `Händlerseite ${p._src === "swiss-scoots" ? "swiss-scoots.ch" : "e-rydez.ch"} (Preis, Akku, Motor, Reichweite, Lieferstatus${ekfv ? ", Zulassungsangabe" : ""})` }],
    images: imgs
  });
}
// Reihenfolge: KuKirin zuerst, dann nach Marke, Zubehör zuletzt
const order = { kukirin: 0, joyor: 1, teverun: 2, dualtron: 3, rovoron: 4, ausom: 5 };
products.sort((a, b) => (a.category === "zubehoer") - (b.category === "zubehoer") || (order[a.brand] ?? 9) - (order[b.brand] ?? 9) || (a.price.chf || 0) - (b.price.chf || 0));

const head = fs.readFileSync(path.join(__dirname, "..", "data", "products.js"), "utf8");
const metaMatch = head.match(/meta:\s*\{[\s\S]*?\n  \},\n/);
const data = {
  categories: [{ id: "escooter", name: "E-Scooter", short: "Scooter" }, { id: "edirtbike", name: "E-Dirtbikes", short: "Dirtbikes" }, { id: "zubehoer", name: "Ersatzteile & Zubehör", short: "Zubehör" }],
  segments: { alltag: { name: "Alltag", hint: "Pendeln, Stadt, Bahnhof. Kompakte Modelle mit moderater Leistung, teils auf 20–25 km/h begrenzt." }, touren: { name: "Touren", hint: "Grössere Akkus für längere Strecken, mehr Komfort." }, offroad: { name: "Offroad", hint: "Schotter, Feldwege, Privatgelände. Für den Strassenverkehr separat zu prüfen." } },
  brands: BRANDS, products,
  dirtbikes: { status: "Erstes Modell gelistet, Sortiment im Aufbau", text: "Mit dem KuKirin X1 ist ein erstes Mini-Dirtbike gelistet. Weitere E-Dirtbikes und Motocross-Modelle folgen, sobald Daten und Bildrechte gesichert sind. E-Dirtbikes sind für Privatgelände gedacht.", planned: [{ title: "Einsteiger-Dirtbikes", text: "Leichtere Modelle für Privatgelände und Trainingsflächen." }, { title: "Motocross-Klasse", text: "Leistungsstärkere Modelle für Strecke und Gelände." }, { title: "Schutzausrüstung", text: "Helm, Protektoren, Handschuhe. Passend zur Kategorie." }] }
};
const out = `/* N SCOOTS – Produktdaten (automatisch erzeugt aus dem E-Rydez-Katalog)
 * -------------------------------------------------------------
 * Quellen: ${src.quelle} (abgerufen ${CHECKED}) und ${src2.quelle} (nur eKFV-Modelle mit
 * ausgewiesener CH-Strassenzulassung), gesichert unter tools/quellen/.
 * Neu erzeugen: node tools/import-erydez.js
 * Technische Angaben sind Händler-/Herstellerangaben. Preise (kind "shop") sind
 * N SCOOTS-Einführungspreise auf dem Niveau des Quell-Händlers (price.basis,
 * price.source), unverbindlich bis Verkaufsstart. Reichweiten: Herstellerangaben.
 * chLegal: nur eKFV-/CH-Edition-Modelle sind laut Händler in der Schweiz
 * strassenzugelassen; ABE-Modelle haben eine deutsche Betriebserlaubnis; alle
 * anderen sind für Privatgelände. Vor Verkaufsstart je Ausführung anhand
 * offizieller Schweizer Quellen prüfen. Lieferbarkeit: Stand Quell-Händler.
 */
window.NSCOOTS_DATA = {
  ${metaMatch ? metaMatch[0].trim() : ""}
  categories: ${JSON.stringify(data.categories, null, 2)},
  segments: ${JSON.stringify(data.segments, null, 2)},
  brands: ${JSON.stringify(data.brands, null, 2)},
  products: ${JSON.stringify(data.products, null, 2)},
  dirtbikes: ${JSON.stringify(data.dirtbikes, null, 2)}
};
`;
fs.writeFileSync(path.join(__dirname, "..", "data", "products.js"), out);
console.log(`${products.length} Produkte geschrieben (${products.filter((p) => p.category === "escooter").length} E-Scooter, ${products.filter((p) => p.category === "edirtbike").length} Dirtbike, ${products.filter((p) => p.category === "zubehoer").length} Ersatzteile)`);
