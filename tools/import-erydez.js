// Erzeugt data/products.js aus dem gesicherten E-Rydez-Katalog (tools/quellen/erydez-products.json).
// Aufruf: node tools/import-erydez.js
// Alle Angaben sind Händlerangaben von e-rydez.ch (Referenzpreise, keine N SCOOTS-Preise).
const fs = require("fs"), path = require("path");
const src = JSON.parse(fs.readFileSync(path.join(__dirname, "quellen", "erydez-products.json"), "utf8"));
const CHECKED = src.abgerufen;
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
const pretty = (title) => title.replace(/\s*\d+V\s*[\d.,/]+Ah.*$/i, "").replace(/\s*Akku.*$/i, "").trim();

const products = [];
for (const p of src.products) {
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
  const battery = find(/🔋|Akku:|Batterie/);
  const motor = find(/⚙|Antrieb:|Motor\b/);
  const range = find(/⚡|Reichweite/);
  const speed = find(/🕤|Höchstgeschwindigkeit/);
  const weight = (t.match(/Gewicht:\s*ca\.?\s*([\d.,]+)\s*kg/i) || [])[1];
  const load = (t.match(/Zuladung\s*([\d.,]+)\s*kg/i) || [])[1];
  const bV = num((battery || p.title).match(/(\d+)\s*V/i)?.[1]);
  const bAh = num((battery || p.title).match(/([\d.,]+)\s*Ah/i)?.[1]);
  const bWh = num((battery || "").match(/([\d.,']+)\s*Wh/i)?.[1]) || (bV && bAh ? Math.round(bV * bAh) : null);
  const motorsM = (motor || p.title).match(/(\d+)\s*W\s*[x×*]\s*(\d)|(\d)\s*[x×*]\s*(\d+)\s*W/i);
  const motors = motorsM ? 2 : (/dual/i.test(p.tags.join(" ") + (motor || "")) ? 2 : 1);
  const perMotor = motorsM ? Number(motorsM[1] || motorsM[4]) : num((motor || p.title).match(/(\d{3,4})\s*-?\s*W/i)?.[1]);
  const motorW = perMotor ? perMotor * motors : null;
  const peakW = num((motor || "").match(/([\d.']+)\s*W\s*(?:Peak|Spitze)|bis\s+([\d.']+)\s*W/i)?.[1] || (motor || "").match(/bis\s+([\d.']+)\s*W/i)?.[1]);
  const rangeKm = range ? (range.match(/(≤?\s*\d+(?:\s*[-–/]\s*\d+)?)\s*km/i) || [])[1]?.replace(/\s+/g, "") : null;
  const speedKmh = num(speed);
  const abe = /\bABE\b/i.test(p.title) || p.tags.some((x) => /^abe$/i.test(x));
  const limited = abe || /20\s*km\/h|25\s*km\/h/.test(speed || "");
  const offroadTag = p.tags.some((x) => /offroad/i.test(x)) || /Gelände|Offroad/i.test(t);
  let segment = null;
  if (!isPart && !isDirt) segment = limited && motors === 1 ? "alltag" : (bWh && bWh >= 1500) || (motors === 2 && offroadTag) ? "offroad" : motors === 2 || (bWh && bWh >= 900) ? "touren" : "alltag";
  const chLegal = abe ? "nicht ausgewiesen (deutsche ABE, laut E-Rydez keine CH-Zulassung)" : "nicht ausgewiesen (laut E-Rydez)";
  const url = `https://e-rydez.ch/products/${p.handle}`;
  const imgs = p.images.slice(0, 3).map((im, i) => `produkte/${p.handle}-${i + 1}.jpg`); // alle Bilder liegen als JPG vor
  const variants = p.variants.filter((v) => v.title !== "Default Title").map((v) => ({ id: String(v.id), name: v.title, note: `Referenzpreis ${Number(v.price).toFixed(0)} CHF${v.available ? "" : ", laut E-Rydez zurzeit nicht lieferbar"}` }));
  products.push({
    id: p.handle, brand, model: pretty(p.title), fullTitle: p.title,
    category: isPart ? "zubehoer" : isDirt ? "edirtbike" : "escooter", segment,
    summary: isPart ? `Ersatzteile für ${pretty(p.title).replace(/ Ersatzteile$/, "")}: ${p.variants.slice(0, 4).map((v) => v.title).join(", ")}${p.variants.length > 4 ? " und mehr" : ""}.` : lines.filter((l) => !/Vorbestellung|^[🔋🕤⚡⚙️📡📋🏍️🛡️🔑✓]/.test(l) && l.length > 30)[0] || `${pretty(p.title)}: ${battery || ""}${motor ? ", " + motor : ""}.`,
    price: { chf: minPrice, kind: "referenz", source: url, checked: CHECKED, note: isPart || variants.length ? "Referenzpreis ab (günstigste Ausführung), e-rydez.ch. Kein N SCOOTS-Preis." : "Referenzpreis e-rydez.ch. Kein N SCOOTS-Preis.", from: isPart || variants.length > 0 },
    lieferbarkeit: isPart ? { status: available ? "laut E-Rydez lieferbar" : "laut E-Rydez nicht lieferbar", checked: CHECKED } : available ? (preorder ? { status: `Vorbestellung bei E-Rydez${preDate ? ", voraussichtlich " + preDate : ""}`, checked: CHECKED } : { status: "laut E-Rydez lieferbar", checked: CHECKED }) : { status: "laut E-Rydez zurzeit nicht lieferbar", checked: CHECKED },
    specs: isPart ? {} : { motorW, peakW, motors, batteryV: bV, batteryAh: bAh, batteryWh: bWh, rangeKm, speedKmh, weightKg: num(weight), maxLoadKg: num(load), tires: (t.match(/Bereifung:\s*([^\n]+)/) || t.match(/(\d{2}'' [^\n]*reifen)/i) || [])[1] || null, brakes: (t.match(/Bremsen:\s*([^\n]+)/) || t.match(/(Hydraulische Bremsen[^\n|]*)/i) || [])[1] || null, ip: (t.match(/\bIP\d\d\b/) || [])[0] || null, foldable: null, abe, limited },
    variants, chLegal: isPart ? null : chLegal,
    sources: [{ url, checked: CHECKED, note: "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)" }],
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
  dirtbikes: { status: "Erstes Modell gelistet, Sortiment im Aufbau", text: "Mit dem KuKirin X1 ist ein erstes Mini-Dirtbike aus dem E-Rydez-Sortiment gelistet. Weitere E-Dirtbikes und Motocross-Modelle folgen, sobald Daten und Bildrechte gesichert sind. E-Dirtbikes sind für Privatgelände gedacht.", planned: [{ title: "Einsteiger-Dirtbikes", text: "Leichtere Modelle für Privatgelände und Trainingsflächen." }, { title: "Motocross-Klasse", text: "Leistungsstärkere Modelle für Strecke und Gelände." }, { title: "Schutzausrüstung", text: "Helm, Protektoren, Handschuhe. Passend zur Kategorie." }] }
};
const out = `/* N SCOOTS – Produktdaten (automatisch erzeugt aus dem E-Rydez-Katalog)
 * -------------------------------------------------------------
 * Quelle: ${src.quelle} (abgerufen ${CHECKED}), gesichert unter tools/quellen/erydez-products.json.
 * Neu erzeugen: node tools/import-erydez.js
 * Alle Angaben sind HÄNDLERANGABEN von e-rydez.ch. Preise sind REFERENZPREISE
 * (kind "referenz"), keine N SCOOTS-Preise. Reichweiten sind Herstellerangaben.
 * chLegal: E-Rydez weist für kein Modell eine Schweizer Strassenzulassung aus;
 * ABE-Modelle haben eine deutsche Betriebserlaubnis. Vor Verkaufsstart je
 * Ausführung anhand offizieller Schweizer Quellen prüfen.
 * Lieferbarkeit: Stand e-rydez.ch am Prüfdatum, keine Zusage von N SCOOTS.
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
