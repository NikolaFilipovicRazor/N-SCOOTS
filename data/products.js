/* N SCOOTS – Produktdaten (austauschbar)
 * -------------------------------------------------------------
 * Jede Angabe ist eine HERSTELLER- oder HÄNDLERANGABE aus der
 * genannten Quelle (Prüfdatum pro Eintrag). Reichweiten gelten
 * unter Herstellerbedingungen und sind keine Zusage.
 * price.kind:
 *   "referenz" = Referenzpreis eines fremden Angebots, KEIN N SCOOTS-Preis
 *   "offen"    = Preis noch nicht festgelegt
 * chLegal: Status der Schweizer Strassentauglichkeit je Ausführung.
 *   Solange kein Beleg vorliegt: "nicht bestätigt".
 * Felder mit null = Angabe nicht belegt / offen.
 */
window.NSCOOTS_DATA = {
  meta: {
    shop: "N SCOOTS",
    tagline: "E-Scooter & E-Dirtbikes",
    claim: "Dein nächster Ride.",
    currency: "CHF",
    dataVersion: "2026-10-28",
    disclaimer:
      "Demo-Prototyp. Noch kein Verkauf, keine Bestellung, keine Zahlung. Referenzpreise stammen aus fremden Angeboten und sind keine N SCOOTS-Preise."
  },
  categories: [
    { id: "escooter", name: "E-Scooter", short: "Scooter" },
    { id: "edirtbike", name: "E-Dirtbikes", short: "Dirtbikes" },
    { id: "zubehoer", name: "Zubehör", short: "Zubehör" }
  ],
  segments: {
    alltag: { name: "Alltag", hint: "Pendeln, Stadt, Bahnhof. Kompakte Modelle mit moderater Leistung." },
    touren: { name: "Touren", hint: "Grössere Akkus für längere Strecken, mehr Komfort." },
    offroad: { name: "Offroad", hint: "Schotter, Feldwege, Privatgelände. Für den Strassenverkehr separat zu prüfen." }
  },
  brands: [
    { id: "kukirin", name: "KuKirin", featured: true, blurb: "Breites Sortiment vom Pendler-Scooter bis zum Offroad-Modell. Unser prominenter Einstieg." },
    { id: "joyor", name: "Joyor", featured: false, blurb: "Leichte Alltagsmodelle mit Fokus auf Komfort und Reichweite." },
    { id: "teverun", name: "Teverun", featured: false, blurb: "Kompakte Doppelmotor-Modelle mit viel Federweg." },
    { id: "dualtron", name: "Dualtron", featured: false, blurb: "Klassiker aus Korea mit hochwertiger Verarbeitung." },
    { id: "rovoron", name: "Rovoron", featured: false, blurb: "Leichtbau trifft grosse Akkus." },
    { id: "ausom", name: "Ausom", featured: false, blurb: "Preisbewusste Modelle für Stadt und Gelände." }
  ],
  products: [
    {
      id: "kukirin-g2-pro",
      brand: "kukirin",
      model: "KuKirin G2 Pro",
      category: "escooter",
      segment: "alltag",
      summary: "Der Einstieg in die G2-Serie: ein Motor, 9-Zoll-Reifen, faltbar.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: 600, peakW: 1000, motors: 1, batteryV: 48, batteryAh: 15.6, batteryWh: 749, rangeKm: "bis 58", weightKg: 25, maxLoadKg: 120, tires: "9 Zoll, Vollgummi/Offroad-Profil", brakes: "Scheibenbremse", ip: null, foldable: true },
      variants: [
        { id: "vmp", name: "VMP-Ausführung", note: "Herstellerangabe für EU-Variante. Daten dieser Variante offen." },
        { id: "abe", name: "ABE-Ausführung (DE)", note: "500 W, 20–25 km/h laut Hersteller. Keine CH-Zulassung belegt." }
      ],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://kukirin.it.com/en/blogs/news-kukirin-official-website/kukirin-g2-series-comparison-g2-g2-pro-g2-max-and-g2-master", checked: "2026-10-28", note: "Herstellerblog, Serienvergleich (600 W, 48 V 15.6 Ah, 58 km, 25 kg)" },
        { url: "https://www.kukirin.it.com/en/products/kukirin-g2-pro", checked: "2026-10-28", note: "Herstellershop (120 kg Zuladung)" }
      ],
      images: ["kukirin-g2-pro-1.svg", "kukirin-g2-pro-2.svg", "kukirin-g2-pro-3.svg"]
    },
    {
      id: "kukirin-g2-ultra",
      brand: "kukirin",
      model: "KuKirin G2 Ultra",
      category: "escooter",
      segment: "touren",
      summary: "Mittelklasse der G2-Serie mit mehr Motorleistung als der G2 Pro.",
      price: { chf: 699, kind: "referenz", source: "https://www.tutti.ch/fr/vi/zurich/sport-outdoor/autres-sports/kukirin-g2-ultra-800w-48v-15ah-50km-h-e-scooter-electro/76989941", checked: "2026-10-28", note: "Schweizer Inserat (tutti.ch). Kein N SCOOTS-Preis." },
      specs: { motorW: 800, peakW: null, motors: 1, batteryV: 48, batteryAh: 15, batteryWh: 720, rangeKm: null, weightKg: null, maxLoadKg: null, tires: null, brakes: null, ip: null, foldable: true },
      variants: [{ id: "std", name: "Standard", note: "Weitere Daten offen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://www.tutti.ch/fr/vi/zurich/sport-outdoor/autres-sports/kukirin-g2-ultra-800w-48v-15ah-50km-h-e-scooter-electro/76989941", checked: "2026-10-28", note: "Inserat: 800 W, 48 V 15 Ah, CHF 699" }
      ],
      images: ["kukirin-g2-ultra-1.svg", "kukirin-g2-ultra-2.svg", "kukirin-g2-ultra-3.svg"]
    },
    {
      id: "kukirin-g2-master",
      brand: "kukirin",
      model: "KuKirin G2 Master (2025)",
      category: "escooter",
      segment: "touren",
      summary: "Doppelmotor-Topmodell der G2-Serie mit 52-V-Akku und rund 1 kWh Kapazität.",
      price: { chf: 819, kind: "referenz", source: "https://www.tutti.ch/fr/vi/zurich/sport-outdoor/autres-sports/kukirin-g2-master-2025-2000w-2x1000w-motor-e-scooter/75959957", checked: "2026-10-28", note: "Schweizer Inserat (tutti.ch). Kein N SCOOTS-Preis." },
      specs: { motorW: 2000, peakW: 2400, motors: 2, batteryV: 52, batteryAh: 20.8, batteryWh: 1082, rangeKm: "bis 70", weightKg: 34, maxLoadKg: 120, tires: "10 Zoll Offroad", brakes: "Scheibenbremsen vorne/hinten", ip: null, foldable: true },
      variants: [{ id: "2025", name: "Modelljahr 2025", note: "Gewicht je nach Quelle 33–41.5 kg; 34 kg gemäss Händler übernommen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://www.kukirin.it.com/en/products/kukirin-g2-master", checked: "2026-10-28", note: "Herstellershop (52 V 20.8 Ah, 70 km)" },
        { url: "https://innercityscooters.com/products/kukirin-g2-master-2025-model-electric-scooter", checked: "2026-10-28", note: "Händler (2×1000 W, 34 kg)" }
      ],
      images: ["kukirin-g2-master-1.svg", "kukirin-g2-master-2.svg", "kukirin-g2-master-3.svg"]
    },
    {
      id: "kukirin-g4-max",
      brand: "kukirin",
      model: "KuKirin G4 Max",
      category: "escooter",
      segment: "offroad",
      summary: "Schweres Offroad-Modell mit herausnehmbarem 60-V-Akku und 12-Zoll-Rädern.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: 3200, peakW: null, motors: 2, batteryV: 60, batteryAh: 35.2, batteryWh: 2112, rangeKm: "bis 95", weightKg: 64.5, maxLoadKg: 120, tires: "12 Zoll Offroad", brakes: "Hydraulische Scheibenbremsen", ip: "IP54", foldable: true },
      variants: [{ id: "std", name: "Standard", note: "Zuladung je nach Quelle 120 oder 150 kg; 120 kg gemäss Herstellershop übernommen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://www.kukirin.it.com/en/products/kukirin-g4-max", checked: "2026-10-28", note: "Herstellershop" },
        { url: "https://kukirin.it.com/en/blogs/news-kukirin-official-website/kukirin-g4-series-power-performance-and-adventure-unleashed", checked: "2026-10-28", note: "Herstellerblog (60 V 35.2 Ah, 2×1600 W, 95 km, 64.5 kg)" }
      ],
      images: ["kukirin-g4-max-1.svg", "kukirin-g4-max-2.svg", "kukirin-g4-max-3.svg"]
    },
    {
      id: "joyor-s5",
      brand: "joyor",
      model: "Joyor S5",
      category: "escooter",
      segment: "alltag",
      summary: "Leichter Pendler-Scooter mit 10-Zoll-Reifen und doppelter Scheibenbremse.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: 500, peakW: null, motors: 1, batteryV: 48, batteryAh: 13, batteryWh: 624, rangeKm: "30–45", weightKg: 22.7, maxLoadKg: 120, tires: "10 Zoll", brakes: "Zwei Scheibenbremsen", ip: null, foldable: true },
      variants: [
        { id: "abe", name: "S5-ABE (DE/AT-Zulassung)", note: "20 km/h-Variante mit deutscher ABE. Keine CH-Zulassung belegt." },
        { id: "z", name: "S5-Z", note: "600 W Heckmotor, bis 55 km laut Hersteller. Weitere Daten offen." }
      ],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://joyorprime.com/products/joyor-s5-abe", checked: "2026-10-28", note: "Herstellershop (500 W, 48 V 13 Ah, 30–45 km, 22.7 kg)" }
      ],
      images: ["joyor-s5-1.svg", "joyor-s5-2.svg", "joyor-s5-3.svg"]
    },
    {
      id: "joyor-s5-pro",
      brand: "joyor",
      model: "Joyor S5 Pro",
      category: "escooter",
      segment: "touren",
      summary: "Der S5 mit doppelt so grossem Akku für lange Pendelstrecken.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: 500, peakW: null, motors: 1, batteryV: 48, batteryAh: 26, batteryWh: 1248, rangeKm: "70–100", weightKg: null, maxLoadKg: 120, tires: "10 Zoll", brakes: "Zwei Scheibenbremsen", ip: null, foldable: true },
      variants: [{ id: "abe", name: "S5 Pro ABE", note: "Gewicht offen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://www.decathlon.ie/p/1100832000-5697546-joyor-s5pro-abe-all-terrain-scooter-with-48v-26ah-long-range-battery.html", checked: "2026-10-28", note: "Händler (48 V 26 Ah, 70–100 km)" },
        { url: "https://joyorprime.com/products/joyor-s5-abe-pro-electric-scooter", checked: "2026-10-28", note: "Herstellershop" }
      ],
      images: ["joyor-s5-pro-1.svg", "joyor-s5-pro-2.svg", "joyor-s5-pro-3.svg"]
    },
    {
      id: "teverun-fighter-mini-eco",
      brand: "teverun",
      model: "Teverun Fighter Mini Eco",
      category: "escooter",
      segment: "touren",
      summary: "Kompakter Doppelmotor-Scooter mit viel Federweg und 52-V-Akku.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: 2000, peakW: 2900, motors: 2, batteryV: 52, batteryAh: 20.8, batteryWh: 1082, rangeKm: "60–80", weightKg: 32.5, maxLoadKg: 120, tires: "10 Zoll", brakes: "Scheibenbremsen", ip: null, foldable: true },
      variants: [{ id: "eco", name: "Eco", note: "Gewicht je nach Quelle 29.5–32.5 kg; 32.5 kg übernommen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://www.dualtronnordic.com/en/shop/teverun-fighter-mini-163", checked: "2026-10-28", note: "Händler (Eco ~32.5 kg, 120 kg, bis 80 km)" },
        { url: "https://stormrides.nz/products/teverun-fighter-mini-pro", checked: "2026-10-28", note: "Händler (Eco: 52 V 20.8 Ah, 2×1000 W, 2900 W Spitze, 60 km)" }
      ],
      images: ["teverun-fighter-mini-eco-1.svg", "teverun-fighter-mini-eco-2.svg", "teverun-fighter-mini-eco-3.svg"]
    },
    {
      id: "teverun-fighter-mini-pro",
      brand: "teverun",
      model: "Teverun Fighter Mini Pro (2025)",
      category: "escooter",
      segment: "touren",
      summary: "Grosser Bruder des Eco mit 60-V-Akku und 1.5 kWh.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: null, peakW: null, motors: 2, batteryV: 60, batteryAh: 25, batteryWh: 1500, rangeKm: "bis 90–100", weightKg: 35.5, maxLoadKg: 120, tires: "10 Zoll", brakes: "Hydraulische Scheibenbremsen", ip: null, foldable: true },
      variants: [{ id: "pro-2025", name: "Pro, Modelljahr 2025", note: "Motorleistung je nach Quelle unterschiedlich; nicht übernommen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://riedis-electric.com/teverun-fighter/2767-teverun-fighter-mini-pro-60v-25ah-electric-scooter-2025-model-4774206029892.html", checked: "2026-10-28", note: "Händler (60 V 25 Ah, 100 km)" },
        { url: "https://www.dualtronnordic.com/en/shop/teverun-fighter-mini-163", checked: "2026-10-28", note: "Händler (Pro ~35.5 kg)" }
      ],
      images: ["teverun-fighter-mini-pro-1.svg", "teverun-fighter-mini-pro-2.svg", "teverun-fighter-mini-pro-3.svg"]
    },
    {
      id: "dualtron-mini-special",
      brand: "dualtron",
      model: "Dualtron Mini Special 52V 17.5Ah",
      category: "escooter",
      segment: "alltag",
      summary: "Der kompakte Dualtron: Einzelmotor, 910 Wh, hochwertige Samsung-Zellen.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: null, peakW: 1450, motors: 1, batteryV: 52, batteryAh: 17.5, batteryWh: 910, rangeKm: "bis 55", weightKg: null, maxLoadKg: null, tires: "8.5 Zoll", brakes: "Scheibenbremse", ip: null, foldable: true },
      variants: [{ id: "17ah", name: "Special 52V 17.5Ah", note: "Gewicht und Zuladung offen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://dualtron.uk/products/dualtron-mini-special-17ah", checked: "2026-10-28", note: "Händler (52 V 17.5 Ah)" },
        { url: "https://www.wee-bot.com/en/products/batterie-52v-13ah-trottinette-electrique-dualtron-mini-minimotors", checked: "2026-10-28", note: "Händler (910 Wh, Samsung-Zellen)" }
      ],
      images: ["dualtron-mini-special-1.svg", "dualtron-mini-special-2.svg", "dualtron-mini-special-3.svg"]
    },
    {
      id: "rovoron-kullter-luxury",
      brand: "rovoron",
      model: "Rovoron Kullter Luxury",
      category: "escooter",
      segment: "touren",
      summary: "Ungewöhnlich leicht für seine Akkugrösse: 1.9 kWh bei rund 31 kg.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: 2400, peakW: 3000, motors: 2, batteryV: 60, batteryAh: null, batteryWh: 1890, rangeKm: "bis 104", weightKg: 31, maxLoadKg: null, tires: "10 Zoll Strasse", brakes: "Scheibenbremsen", ip: null, foldable: true },
      variants: [{ id: "std", name: "Standard", note: "Akkukapazität je nach Quelle 24 oder 30 Ah; nur 1890 Wh übernommen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://freshlycharged.com/products/232/rovoron-kullter-luxury", checked: "2026-10-28", note: "Händler-Datenblatt (1890 Wh, 68 lbs, 104 km)" },
        { url: "https://wee-bot.com/en/products/trottinette-electrique-rovoron-kullter-luxury", checked: "2026-10-28", note: "Händler (2×1200 W, 1500 W Spitze)" }
      ],
      images: ["rovoron-kullter-luxury-1.svg", "rovoron-kullter-luxury-2.svg", "rovoron-kullter-luxury-3.svg"]
    },
    {
      id: "ausom-gallop-sr1",
      brand: "ausom",
      model: "Ausom Gallop SR1",
      category: "escooter",
      segment: "offroad",
      summary: "Doppelmotor-Offroader mit 52-V-Akku und doppelter Federung.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: 2000, peakW: null, motors: 2, batteryV: 52, batteryAh: 20.8, batteryWh: 1082, rangeKm: "87–95", weightKg: 31.8, maxLoadKg: null, tires: "10 Zoll schlauchlos", brakes: "Scheibenbremsen", ip: null, foldable: true },
      variants: [{ id: "std", name: "Standard", note: "Zuladung offen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://www.ausomstore.com/pages/compare", checked: "2026-10-28", note: "Herstellervergleich (2×1000 W, 52 V 20.8 Ah, 54–59 mi)" },
        { url: "https://eridehero.com/products/ausom-gallop-sr1/", checked: "2026-10-28", note: "Testportal (1081.6 Wh, 70 lbs)" }
      ],
      images: ["ausom-gallop-sr1-1.svg", "ausom-gallop-sr1-2.svg", "ausom-gallop-sr1-3.svg"]
    },
    {
      id: "ausom-f1-max",
      brand: "ausom",
      model: "Ausom F1 Max",
      category: "escooter",
      segment: "offroad",
      summary: "60-V-Doppelmotor-Modell mit 330-lb-Zuladung laut Hersteller.",
      price: { chf: null, kind: "offen", note: "Preis wird nach B2B-Konditionen festgelegt." },
      specs: { motorW: null, peakW: null, motors: 2, batteryV: 60, batteryAh: 20.8, batteryWh: 1248, rangeKm: "bis 80–100", weightKg: 36, maxLoadKg: 150, tires: "11 Zoll Offroad", brakes: "Hydraulische Scheibenbremsen", ip: null, foldable: true },
      variants: [{ id: "std", name: "Standard", note: "Motorleistung je nach Quelle 2×1400 W oder 2×2800 W; nicht übernommen." }],
      chLegal: "nicht bestätigt",
      sources: [
        { url: "https://eridehero.com/products/ausom-f1-max/", checked: "2026-10-28", note: "Testportal (60 V 1248 Wh, 79.4 lbs, 330 lbs)" },
        { url: "https://freshlycharged.com/articles/376/ausom-electric-scooters-the-full-lineup-part-2", checked: "2026-10-28", note: "Händlerartikel (60 V 20.8 Ah, 2×1400 W)" }
      ],
      images: ["ausom-f1-max-1.svg", "ausom-f1-max-2.svg", "ausom-f1-max-3.svg"]
    },
    {
      id: "zub-helm",
      brand: null,
      model: "Helm (Urban, mit Rücklicht)",
      category: "zubehoer",
      segment: null,
      summary: "Geplantes Zubehör. Marke und Modell noch offen.",
      price: { chf: null, kind: "offen", note: "Sortiment und Preis offen." },
      specs: {}, variants: [], chLegal: null, sources: [],
      images: ["zubehoer-helm-1.svg"]
    },
    {
      id: "zub-schloss",
      brand: null,
      model: "Faltschloss",
      category: "zubehoer",
      segment: null,
      summary: "Geplantes Zubehör. Marke und Modell noch offen.",
      price: { chf: null, kind: "offen", note: "Sortiment und Preis offen." },
      specs: {}, variants: [], chLegal: null, sources: [],
      images: ["zubehoer-schloss-1.svg"]
    },
    {
      id: "zub-ladegeraet",
      brand: null,
      model: "Ersatz-Ladegerät",
      category: "zubehoer",
      segment: null,
      summary: "Geplantes Zubehör, passend je Modell. Noch offen.",
      price: { chf: null, kind: "offen", note: "Sortiment und Preis offen." },
      specs: {}, variants: [], chLegal: null, sources: [],
      images: ["zubehoer-ladegeraet-1.svg"]
    }
  ],
  dirtbikes: {
    status: "Sortiment in Vorbereitung",
    text: "E-Dirtbikes und elektrische Motocross-Modelle sind als zweite Hauptkategorie geplant. Marken, Modelle, Preise und Lieferbarkeit sind noch nicht festgelegt. Wir zeigen hier erst Produkte, wenn Daten und Bildrechte gesichert sind.",
    planned: [
      { title: "Einsteiger-Dirtbikes", text: "Leichtere Modelle für Privatgelände und Trainingsflächen." },
      { title: "Motocross-Klasse", text: "Leistungsstärkere Modelle für Strecke und Gelände." },
      { title: "Schutzausrüstung", text: "Helm, Protektoren, Handschuhe. Passend zur Kategorie." }
    ]
  }
};
