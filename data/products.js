/* N SCOOTS – Produktdaten (automatisch erzeugt aus dem E-Rydez-Katalog)
 * -------------------------------------------------------------
 * Quellen: https://e-rydez.ch/products.json (abgerufen 2026-10-30) und https://swiss-scoots.ch/products.json (nur eKFV-Modelle mit
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
  meta: {
    shop: "N SCOOTS",
    tagline: "E-Scooter & E-Dirtbikes",
    claim: "Dein nächster Ride.",
    currency: "CHF",
    dataVersion: "2026-10-28",
    /* Kontakt: Platzhalter, bitte eigene Angaben eintragen */
    kontakt: {
      person: "Dein N SCOOTS Ansprechpartner",
      ort: "Rapperswil-Jona",
      abholung: "Abholung in Rapperswil-Jona oder Lieferung schweizweit",
      telefon: "+41 79 460 18 35",
      email: "info@nscoots.ch",
      zeiten: "WhatsApp 24/7 · Antwort meistens innerhalb 1–2 Stunden",
      whatsapp: "+41 79 460 18 35",
      hinweis: ""
    },
    disclaimer:
      "Demo-Prototyp. Noch kein Verkauf, keine Bestellung, keine Zahlung. Referenzpreise stammen aus fremden Angeboten und sind keine N SCOOTS-Preise."
  },
  categories: [
  {
    "id": "escooter",
    "name": "E-Scooter",
    "short": "Scooter"
  },
  {
    "id": "edirtbike",
    "name": "E-Dirtbikes",
    "short": "Dirtbikes"
  },
  {
    "id": "zubehoer",
    "name": "Ersatzteile & Zubehör",
    "short": "Zubehör"
  }
],
  segments: {
  "alltag": {
    "name": "Alltag",
    "hint": "Pendeln, Stadt, Bahnhof. Kompakte Modelle mit moderater Leistung, teils auf 20–25 km/h begrenzt."
  },
  "touren": {
    "name": "Touren",
    "hint": "Grössere Akkus für längere Strecken, mehr Komfort."
  },
  "offroad": {
    "name": "Offroad",
    "hint": "Schotter, Feldwege, Privatgelände. Für den Strassenverkehr separat zu prüfen."
  }
},
  brands: [
  {
    "id": "kukirin",
    "name": "KuKirin",
    "featured": true,
    "blurb": "Breites Sortiment vom Pendler-Scooter bis zum Offroad-Modell. Unser prominenter Einstieg."
  },
  {
    "id": "joyor",
    "name": "Joyor",
    "featured": false,
    "blurb": "Leichte Alltagsmodelle mit Fokus auf Komfort und Reichweite."
  },
  {
    "id": "teverun",
    "name": "Teverun",
    "featured": false,
    "blurb": "Kompakte Doppelmotor-Modelle mit viel Federweg."
  },
  {
    "id": "dualtron",
    "name": "Dualtron",
    "featured": false,
    "blurb": "Klassiker aus Korea mit hochwertiger Verarbeitung."
  },
  {
    "id": "rovoron",
    "name": "Rovoron",
    "featured": false,
    "blurb": "Leichtbau trifft grosse Akkus."
  },
  {
    "id": "ausom",
    "name": "Ausom",
    "featured": false,
    "blurb": "Preisbewusste Modelle für Stadt und Gelände."
  }
],
  products: [
  {
    "id": "kukirin-s1-max-36v-10-4ah-akku-350w",
    "brand": "kukirin",
    "model": "KuKirin S1 Max",
    "fullTitle": "KuKirin S1 Max 36V 10.4Ah Akku, 350W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Die tatsächliche Reichweite hängt unter anderem von Fahrergewicht, Fahrweise, Strecke, Temperatur und Reifendruck ab.",
    "price": {
      "chf": 409,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 350,
      "peakW": null,
      "motors": 1,
      "batteryV": 36,
      "batteryAh": 10.4,
      "batteryWh": 374,
      "rangeKm": "39",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-s1-max-36v-10-4ah-akku-350w-1.jpg",
      "produkte/kukirin-s1-max-36v-10-4ah-akku-350w-2.jpg",
      "produkte/kukirin-s1-max-36v-10-4ah-akku-350w-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-pro-abe",
    "brand": "kukirin",
    "model": "KuKirin G2 Pro ABE",
    "fullTitle": "KuKirin G2 Pro ABE 48V 15.6Ah Akku, 500W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "KuKirin G2 Pro ABE: 48V 15.6Ah Akku, 500W bürstenloser Motor · Single Motor.",
    "price": {
      "chf": 559,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 500,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 15.6,
      "batteryWh": 749,
      "rangeKm": "55",
      "speedKmh": 20,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": true,
      "limited": true
    },
    "variants": [],
    "chLegal": "Deutsche ABE (20–25 km/h), keine Schweizer Zulassung ausgewiesen",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-pro-abe-1.jpg",
      "produkte/kukirin-g2-pro-abe-2.jpg",
      "produkte/kukirin-g2-pro-abe-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-pro",
    "brand": "kukirin",
    "model": "KuKirin G2 Pro",
    "fullTitle": "KuKirin G2 Pro 48V 15.6Ah Akku, 600W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "KuKirin G2 Pro: 48V 15,6Ah Batterie, 600W bürstenloser Motor.",
    "price": {
      "chf": 559,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-pro",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 600,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 15.6,
      "batteryWh": 749,
      "rangeKm": "55",
      "speedKmh": 45,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-pro",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-pro-1.jpg",
      "produkte/kukirin-g2-pro-2.jpg",
      "produkte/kukirin-g2-pro-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-abe",
    "brand": "kukirin",
    "model": "KuKirin G2 ABE",
    "fullTitle": "KuKirin G2 ABE 48V 15.6Ah Akku, 800W (25km/h)",
    "category": "escooter",
    "segment": "alltag",
    "summary": "KuKirin G2 ABE: 48V 15.6Ah Batterie (748.8Wh), 800W Leistungsstarker Motor.",
    "price": {
      "chf": 569,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-abe",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 800,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 15.6,
      "batteryWh": 748.8,
      "rangeKm": "55",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": true,
      "limited": true
    },
    "variants": [],
    "chLegal": "Deutsche ABE (20–25 km/h), keine Schweizer Zulassung ausgewiesen",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-abe",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-abe-1.jpg",
      "produkte/kukirin-g2-abe-2.jpg",
      "produkte/kukirin-g2-abe-3.jpg"
    ]
  },
  {
    "id": "kukirin-t3-2025-48v-15-6-ah-akku-800w",
    "brand": "kukirin",
    "model": "KuKirin T3",
    "fullTitle": "KuKirin T3 48V 15.6Ah Akku, 800W (2025)",
    "category": "escooter",
    "segment": "alltag",
    "summary": "KuKirin T3: 48V 15.6 Ah Batterie (748.8Wh), 800W Bürstenloser Motor.",
    "price": {
      "chf": 579,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 800,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 15.6,
      "batteryWh": 748.8,
      "rangeKm": "58",
      "speedKmh": 45,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-t3-2025-48v-15-6-ah-akku-800w-1.jpg",
      "produkte/kukirin-t3-2025-48v-15-6-ah-akku-800w-2.jpg",
      "produkte/kukirin-t3-2025-48v-15-6-ah-akku-800w-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2",
    "brand": "kukirin",
    "model": "KuKirin G2",
    "fullTitle": "KuKirin G2 48V 15.6Ah Akku, 800W (2026)",
    "category": "escooter",
    "segment": "alltag",
    "summary": "KuKirin G2: 48V 15Ah Batterie, 800W Leistungsstarker Motor.",
    "price": {
      "chf": 579,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 800,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 15,
      "batteryWh": 720,
      "rangeKm": "55",
      "speedKmh": 45,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-1.jpg",
      "produkte/kukirin-g2-2.jpg",
      "produkte/kukirin-g2-3.jpg"
    ]
  },
  {
    "id": "kukirin-m4-max-20255-48v-18ah-akku-800w",
    "brand": "kukirin",
    "model": "KuKirin M4 Max",
    "fullTitle": "KuKirin M4 Max 48V 18Ah Akku, 800W (2025)",
    "category": "escooter",
    "segment": "alltag",
    "summary": "KuKirin M4 Max: 48V 18Ah Batterie, Bürstenloser 800-W-Motor.",
    "price": {
      "chf": 579,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 800,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 18,
      "batteryWh": 864,
      "rangeKm": "65",
      "speedKmh": 45,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-m4-max-20255-48v-18ah-akku-800w-1.jpg",
      "produkte/kukirin-m4-max-20255-48v-18ah-akku-800w-2.jpg",
      "produkte/kukirin-m4-max-20255-48v-18ah-akku-800w-3.jpg"
    ]
  },
  {
    "id": "kukirin-g3",
    "brand": "kukirin",
    "model": "KuKirin G3",
    "fullTitle": "KuKirin G3 52V 18Ah Akku, 1200W",
    "category": "escooter",
    "segment": "touren",
    "summary": "KuKirin G3: 52V 18Ah Batterie (936Wh), 1200W Bürstenloser Motor.",
    "price": {
      "chf": 679,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g3",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 1200,
      "peakW": null,
      "motors": 1,
      "batteryV": 52,
      "batteryAh": 18,
      "batteryWh": 936,
      "rangeKm": "60-70",
      "speedKmh": 50,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g3",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g3-1.jpg",
      "produkte/kukirin-g3-2.jpg",
      "produkte/kukirin-g3-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
    "brand": "kukirin",
    "model": "KuKirin G2 Ultra",
    "fullTitle": "KuKirin G2 Ultra 48V 18Ah Akku, 2x800W",
    "category": "escooter",
    "segment": "touren",
    "summary": "KuKirin G2 Ultra: 48V 18Ah Batterie (864Wh), 2 x 800W Bürstenloser Motor (Dual-Motor).",
    "price": {
      "chf": 699,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 1600,
      "peakW": null,
      "motors": 2,
      "batteryV": 48,
      "batteryAh": 18,
      "batteryWh": 864,
      "rangeKm": "50-55",
      "speedKmh": 55,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor-1.jpg",
      "produkte/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor-2.jpg",
      "produkte/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-max-48v-20ah-akku-1000w",
    "brand": "kukirin",
    "model": "KuKirin G2 Max",
    "fullTitle": "KuKirin G2 Max 48V 20Ah Akku, 1000W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "KuKirin G2 Max: 48V 20Ah Batterie (960Wh), 1000W Bürstenloser Motor (1200W Peak).",
    "price": {
      "chf": 699,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 1000,
      "peakW": 1200,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 20,
      "batteryWh": 960,
      "rangeKm": "80",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-max-48v-20ah-akku-1000w-1.jpg",
      "produkte/kukirin-g2-max-48v-20ah-akku-1000w-2.jpg",
      "produkte/kukirin-g2-max-48v-20ah-akku-1000w-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-master",
    "brand": "kukirin",
    "model": "KuKirin G2 Master",
    "fullTitle": "KuKirin G2 Master 52V 20.8Ah Akku, 2x1000W (Keylock)",
    "category": "escooter",
    "segment": "touren",
    "summary": "KuKirin G2 Master: 52V 20,8Ah Batterie, 1000W*2 Bürstenloser Motor.",
    "price": {
      "chf": 869,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-master",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": null,
      "motors": 2,
      "batteryV": 52,
      "batteryAh": 20.8,
      "batteryWh": 1082,
      "rangeKm": "70",
      "speedKmh": 60,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-master",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-master-1.jpg",
      "produkte/kukirin-g2-master-2.jpg",
      "produkte/kukirin-g2-master-3.jpg"
    ]
  },
  {
    "id": "kukirin-g4",
    "brand": "kukirin",
    "model": "KuKirin G4",
    "fullTitle": "KuKirin G4 60V 20Ah Akku, 2000W (2026)",
    "category": "escooter",
    "segment": "touren",
    "summary": "KuKirin G4: 60V / 20Ah Batterie, 2000 W Bürstenloser Motor.",
    "price": {
      "chf": 879,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g4",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": null,
      "motors": 1,
      "batteryV": 60,
      "batteryAh": 20,
      "batteryWh": 1200,
      "rangeKm": "75",
      "speedKmh": 70,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g4",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g4-1.jpg",
      "produkte/kukirin-g4-2.jpg",
      "produkte/kukirin-g4-3.jpg"
    ]
  },
  {
    "id": "kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
    "brand": "kukirin",
    "model": "KuKirin X1",
    "fullTitle": "KuKirin X1 48V 20.8Ah Akku, 1000W (Mini Dirtbike)",
    "category": "edirtbike",
    "segment": null,
    "summary": "KuKirin X1: 48V 20.8Ah Batterie (herausnehmbar), 1000W Motor (2000W Peak).",
    "price": {
      "chf": 1399,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 1000,
      "peakW": 2000,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 20.8,
      "batteryWh": 998,
      "rangeKm": "40",
      "speedKmh": 50,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": "14'' vorne & 12'' hinten Geländereifen",
      "brakes": "Hydraulische Bremsen vorne & hinten ",
      "ip": "IP65",
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike-1.jpg",
      "produkte/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike-2.jpg",
      "produkte/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike-3.jpg"
    ]
  },
  {
    "id": "joyor-s5-abe-48v-500w",
    "brand": "joyor",
    "model": "Joyor S5 ABE",
    "fullTitle": "Joyor S5 ABE 48V 13Ah/26Ah Akku, 500W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Joyor S5 ABE: 48V 13 Ah / 26 Ah Batterie, 500W Bürstenloser Motor.",
    "price": {
      "chf": 499,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 500,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 13,
      "batteryWh": 624,
      "rangeKm": "≤45",
      "speedKmh": 20,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": true,
      "limited": true
    },
    "variants": [
      {
        "id": "56967223542086",
        "name": "S5 13 Ah",
        "note": "Referenzpreis 499 CHF, laut E-Rydez zurzeit nicht lieferbar"
      },
      {
        "id": "56967223574854",
        "name": "S5 Pro 26 Ah",
        "note": "Referenzpreis 639 CHF, laut E-Rydez zurzeit nicht lieferbar"
      }
    ],
    "chLegal": "Deutsche ABE (20–25 km/h), keine Schweizer Zulassung ausgewiesen",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/joyor-s5-abe-48v-500w-1.jpg",
      "produkte/joyor-s5-abe-48v-500w-2.jpg",
      "produkte/joyor-s5-abe-48v-500w-3.jpg"
    ]
  },
  {
    "id": "joyor-s5z-48v-13ah-600w",
    "brand": "joyor",
    "model": "Joyor S5-Z",
    "fullTitle": "Joyor S5-Z 48V 13Ah Akku, 600W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Joyor S5-Z: 48V 13Ah Batterie (624Wh), 600W Bürstenloser Motor.",
    "price": {
      "chf": 529,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 600,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 13,
      "batteryWh": 624,
      "rangeKm": "55",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/joyor-s5z-48v-13ah-600w-1.jpg",
      "produkte/joyor-s5z-48v-13ah-600w-2.jpg",
      "produkte/joyor-s5z-48v-13ah-600w-3.jpg"
    ]
  },
  {
    "id": "joyor-t6-48v-18ah-600w",
    "brand": "joyor",
    "model": "Joyor T6",
    "fullTitle": "Joyor T6 48V 18Ah Akku, 600W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Joyor T6: 48V 18Ah Batterie, 600W Bürstenloser Motor.",
    "price": {
      "chf": 619,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 600,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 18,
      "batteryWh": 864,
      "rangeKm": "≤70",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/joyor-t6-48v-18ah-600w-1.jpg",
      "produkte/joyor-t6-48v-18ah-600w-2.jpg",
      "produkte/joyor-t6-48v-18ah-600w-3.jpg"
    ]
  },
  {
    "id": "joyor-s8-48v-26ah-600w",
    "brand": "joyor",
    "model": "Joyor S8",
    "fullTitle": "Joyor S8 48V 26Ah Akku, 600W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Joyor S8: 48V 26Ah Batterie (1248Wh), 600W Bürstenloser Motor.",
    "price": {
      "chf": 639,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 600,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 26,
      "batteryWh": 1248,
      "rangeKm": "90",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/joyor-s8-48v-26ah-600w-1.jpg",
      "produkte/joyor-s8-48v-26ah-600w-2.jpg",
      "produkte/joyor-s8-48v-26ah-600w-3.jpg"
    ]
  },
  {
    "id": "joyor-t6e-48v-500w-abe",
    "brand": "joyor",
    "model": "Joyor T6E ABE",
    "fullTitle": "Joyor T6E ABE 48V 18Ah/26Ah Akku, 500W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Joyor T6E ABE: 48V 18 Ah / 26 Ah Batterie, 500W Bürstenloser Motor.",
    "price": {
      "chf": 689,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 500,
      "peakW": null,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 18,
      "batteryWh": 864,
      "rangeKm": "≤70",
      "speedKmh": 20,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": true,
      "limited": true
    },
    "variants": [
      {
        "id": "56967223279942",
        "name": "18 Ah",
        "note": "Referenzpreis 689 CHF, laut E-Rydez zurzeit nicht lieferbar"
      },
      {
        "id": "56967223312710",
        "name": "26 Ah Pro",
        "note": "Referenzpreis 789 CHF, laut E-Rydez zurzeit nicht lieferbar"
      }
    ],
    "chLegal": "Deutsche ABE (20–25 km/h), keine Schweizer Zulassung ausgewiesen",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/joyor-t6e-48v-500w-abe-1.jpg",
      "produkte/joyor-t6e-48v-500w-abe-2.jpg",
      "produkte/joyor-t6e-48v-500w-abe-3.jpg"
    ]
  },
  {
    "id": "joyor-s10sz-60v-18ah-2x1000w",
    "brand": "joyor",
    "model": "Joyor S10-S-Z",
    "fullTitle": "Joyor S10-S-Z 60V 18Ah Akku, 2x1000W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Joyor S10-S-Z: 60V 18Ah Batterie, 1000W×2 Bürstenloser Dual-Motor.",
    "price": {
      "chf": 699,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": null,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 18,
      "batteryWh": 1080,
      "rangeKm": "≤75",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/joyor-s10sz-60v-18ah-2x1000w-1.jpg",
      "produkte/joyor-s10sz-60v-18ah-2x1000w-2.jpg",
      "produkte/joyor-s10sz-60v-18ah-2x1000w-3.jpg"
    ]
  },
  {
    "id": "joyor-t10-60v-18ah-2x1000w",
    "brand": "joyor",
    "model": "Joyor T10",
    "fullTitle": "Joyor T10 60V 18Ah Akku, 2x1000W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Joyor T10: 60V 18Ah Batterie, 1000W×2 Bürstenloser Dual-Motor.",
    "price": {
      "chf": 759,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": null,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 18,
      "batteryWh": 1080,
      "rangeKm": "≤75",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/joyor-t10-60v-18ah-2x1000w-1.jpg",
      "produkte/joyor-t10-60v-18ah-2x1000w-2.jpg",
      "produkte/joyor-t10-60v-18ah-2x1000w-3.jpg"
    ]
  },
  {
    "id": "teverun-blade-mini-pro-ch-edition",
    "brand": "teverun",
    "model": "Teverun Blade Mini Pro eKFV",
    "fullTitle": "Teverun Blade Mini Pro eKFV",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Teverun Blade Mini Pro eKFV 52V 22.5Ah",
    "price": {
      "chf": 939,
      "kind": "shop",
      "basis": "swiss-scoots",
      "source": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 500,
      "peakW": 2600,
      "motors": 2,
      "batteryV": 52,
      "batteryAh": 22.5,
      "batteryWh": 1170,
      "rangeKm": "60",
      "speedKmh": 20,
      "weightKg": 31.2,
      "maxLoadKg": 150,
      "ekfv": true,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [
      {
        "id": "58181145330051",
        "name": "Black",
        "note": "Referenzpreis 939 CHF"
      },
      {
        "id": "58181145362819",
        "name": "Gelb",
        "note": "Referenzpreis 939 CHF"
      }
    ],
    "chLegal": "Strassenzugelassen Schweiz (Händlerangabe, 20 km/h-Version)",
    "streetLegalCH": true,
    "sources": [
      {
        "url": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "checked": "2026-10-30",
        "note": "Händlerseite swiss-scoots.ch (Preis, Akku, Motor, Reichweite, Lieferstatus, Zulassungsangabe)"
      }
    ],
    "images": [
      "produkte/teverun-blade-mini-pro-ch-edition-1.jpg",
      "produkte/teverun-blade-mini-pro-ch-edition-2.jpg",
      "produkte/teverun-blade-mini-pro-ch-edition-3.jpg"
    ]
  },
  {
    "id": "teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
    "brand": "teverun",
    "model": "Teverun Blade Mini Ultra",
    "fullTitle": "Teverun Blade Mini Ultra 60V 27Ah Akku, 2x1000W (Gelb)",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Blade Mini Ultra: 60V 27Ah Batterie (1620Wh), 1000W*2 Bürstenloser Motor (3360W Peak).",
    "price": {
      "chf": 1159,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": 3360,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 27,
      "batteryWh": 1620,
      "rangeKm": "80",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [
      {
        "id": "56202189340998",
        "name": "Nein",
        "note": "Referenzpreis 1159 CHF, laut E-Rydez zurzeit nicht lieferbar"
      },
      {
        "id": "56202189373766",
        "name": "Ja",
        "note": "Referenzpreis 1259 CHF, laut E-Rydez zurzeit nicht lieferbar"
      }
    ],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb-1.jpg",
      "produkte/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb-2.jpg",
      "produkte/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb-3.jpg"
    ]
  },
  {
    "id": "teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
    "brand": "teverun",
    "model": "Teverun Blade Mini Ultra",
    "fullTitle": "Teverun Blade Mini Ultra 60V 27Ah Akku, 2x1000W (Schwarz)",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Blade Mini Ultra: 60V 27Ah Batterie (1620Wh), 1000W*2 Bürstenloser Motor (3360W Peak).",
    "price": {
      "chf": 1159,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": 3360,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 27,
      "batteryWh": 1620,
      "rangeKm": "80",
      "speedKmh": 25,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [
      {
        "id": "56202167058758",
        "name": "Nein",
        "note": "Referenzpreis 1159 CHF, laut E-Rydez zurzeit nicht lieferbar"
      },
      {
        "id": "56202167025990",
        "name": "Ja",
        "note": "Referenzpreis 1259 CHF, laut E-Rydez zurzeit nicht lieferbar"
      }
    ],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-1.jpg",
      "produkte/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-2.jpg",
      "produkte/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-3.jpg"
    ]
  },
  {
    "id": "teverun-blade-mini-ultra-ch-edition",
    "brand": "teverun",
    "model": "Teverun Blade Mini Ultra eKFV",
    "fullTitle": "Teverun Blade Mini Ultra eKFV",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Der Teverun Blade Mini Ultra eKFV ist ein hochwertiger City- und Pendler-Scooter für alle, die maximale Reichweite in einem kompakten Format suchen. Mit seinem grossen 52V 30Ah DMEGC Akku , zwei Bosch-Motoren und bis zu 90 km Reichweite ist er deutlich stärker ausgestattet als viele normale Alltagsscooter.",
    "price": {
      "chf": 1300,
      "kind": "shop",
      "basis": "swiss-scoots",
      "source": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 500,
      "peakW": 2600,
      "motors": 2,
      "batteryV": 52,
      "batteryAh": 30,
      "batteryWh": 1560,
      "rangeKm": "90",
      "speedKmh": 20,
      "weightKg": null,
      "maxLoadKg": 150,
      "ekfv": true,
      "tires": null,
      "brakes": "hydraulische Bremsen und das stärkere 6A Ladegerät. Dadurch ist er die bessere Wahl, wenn Reichweite, Komfort und Bremsleistung besonders wichtig sind. ",
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [
      {
        "id": "58348621267331",
        "name": "Gelb",
        "note": "Referenzpreis 1300 CHF"
      },
      {
        "id": "58348621300099",
        "name": "Black",
        "note": "Referenzpreis 1300 CHF"
      }
    ],
    "chLegal": "Strassenzugelassen Schweiz (Händlerangabe, 20 km/h-Version)",
    "streetLegalCH": true,
    "sources": [
      {
        "url": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "checked": "2026-10-30",
        "note": "Händlerseite swiss-scoots.ch (Preis, Akku, Motor, Reichweite, Lieferstatus, Zulassungsangabe)"
      }
    ],
    "images": [
      "produkte/teverun-blade-mini-ultra-ch-edition-1.jpg",
      "produkte/teverun-blade-mini-ultra-ch-edition-2.jpg",
      "produkte/teverun-blade-mini-ultra-ch-edition-3.jpg"
    ]
  },
  {
    "id": "teverun-blade-gt-ii",
    "brand": "teverun",
    "model": "Teverun Blade GT II",
    "fullTitle": "Teverun Blade GT II 60V 26Ah Akku, 2x1600W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Blade GT II: 60V 26Ah Batterie (1560Wh, DMEGC-Zellen), 1600W*2 Bürstenloser Motor (5000W Peak).",
    "price": {
      "chf": 1399,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-gt-ii",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 3200,
      "peakW": 5000,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 26,
      "batteryWh": 1560,
      "rangeKm": "80",
      "speedKmh": 80,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/teverun-blade-gt-ii-1.jpg",
      "produkte/teverun-blade-gt-ii-2.jpg",
      "produkte/teverun-blade-gt-ii-3.jpg"
    ]
  },
  {
    "id": "teverun-fighter-mini-pro",
    "brand": "teverun",
    "model": "Teverun Fighter Mini Pro",
    "fullTitle": "Teverun Fighter Mini Pro 60V 31.8Ah Akku, 2x1000W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Fighter Mini Pro: 60V 31.8Ah Samsung Batterie (1908Wh), 1000W*2 BOSCH Motor (3360W Peak).",
    "price": {
      "chf": 1499,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": 3360,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 31.8,
      "batteryWh": 1908,
      "rangeKm": "100",
      "speedKmh": 65,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/teverun-fighter-mini-pro-1.jpg",
      "produkte/teverun-fighter-mini-pro-2.jpg",
      "produkte/teverun-fighter-mini-pro-3.jpg"
    ]
  },
  {
    "id": "teverun-blade-gt-ii-plus",
    "brand": "teverun",
    "model": "Teverun Blade GT II+",
    "fullTitle": "Teverun Blade GT II+ 60V 37.1Ah Akku, 2x1600W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Blade GT II+: 60V 37.1Ah Samsung Batterie (2226Wh), 1600W*2 Bürstenloser Motor (5000W Peak).",
    "price": {
      "chf": 1649,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 3200,
      "peakW": 5000,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 37.1,
      "batteryWh": 2226,
      "rangeKm": "120",
      "speedKmh": 85,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/teverun-blade-gt-ii-plus-1.jpg",
      "produkte/teverun-blade-gt-ii-plus-2.jpg",
      "produkte/teverun-blade-gt-ii-plus-3.jpg"
    ]
  },
  {
    "id": "teverun-fighter-mini-pro-ekfv",
    "brand": "teverun",
    "model": "Teverun Fighter Mini Pro eKFV",
    "fullTitle": "Teverun Fighter Mini Pro eKFV",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Teverun Fighter Mini Pro eKFV 52V 30.8Ah",
    "price": {
      "chf": 1799,
      "kind": "shop",
      "basis": "swiss-scoots",
      "source": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 500,
      "peakW": null,
      "motors": 2,
      "batteryV": 52,
      "batteryAh": 30.8,
      "batteryWh": 1602,
      "rangeKm": "100",
      "speedKmh": 20,
      "weightKg": null,
      "maxLoadKg": 150,
      "ekfv": true,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Strassenzugelassen Schweiz (Händlerangabe, 20 km/h-Version)",
    "streetLegalCH": true,
    "sources": [
      {
        "url": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "checked": "2026-10-30",
        "note": "Händlerseite swiss-scoots.ch (Preis, Akku, Motor, Reichweite, Lieferstatus, Zulassungsangabe)"
      }
    ],
    "images": [
      "produkte/teverun-fighter-mini-pro-ekfv-1.jpg",
      "produkte/teverun-fighter-mini-pro-ekfv-2.jpg",
      "produkte/teverun-fighter-mini-pro-ekfv-3.jpg"
    ]
  },
  {
    "id": "teverun-fighter-supreme-7260r",
    "brand": "teverun",
    "model": "Teverun Fighter Supreme 7260R",
    "fullTitle": "Teverun Fighter Supreme 7260R 72V 60Ah Akku, 2x2500W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Fighter Supreme 7260R: 72V 60Ah SK Pouch Batterie (4320Wh), 2500W*2 Bürstenloser Motor (15'000W Peak).",
    "price": {
      "chf": 3199,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 5000,
      "peakW": 15000,
      "motors": 2,
      "batteryV": 72,
      "batteryAh": 60,
      "batteryWh": 4320,
      "rangeKm": "200",
      "speedKmh": 120,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/teverun-fighter-supreme-7260r-1.jpg",
      "produkte/teverun-fighter-supreme-7260r-2.jpg",
      "produkte/teverun-fighter-supreme-7260r-3.jpg"
    ]
  },
  {
    "id": "dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
    "brand": "dualtron",
    "model": "Dualtron Victor LTD",
    "fullTitle": "Dualtron Victor LTD 60V 37.1Ah Samsung Akku, 2x1300W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Dualtron Victor LTD mit 60V 37.1Ah Samsung-Akku in Schwarz. Zwei Motoren, hydraulische NUTT-Bremsen und ein EY4-Display mit Bluetooth gehören zur Ausstattung dieser Limited-Version.",
    "price": {
      "chf": 1599,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2600,
      "peakW": 4000,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 37.1,
      "batteryWh": 2226,
      "rangeKm": "115",
      "speedKmh": 80,
      "weightKg": 39.1,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10 Zoll Tubeless",
      "brakes": "hydraulische NUTT-Scheibenbremsen",
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/dualtron-victor-ltd-dgt-60v-37-1ah-samsung-1.jpg",
      "produkte/dualtron-victor-ltd-dgt-60v-37-1ah-samsung-2.jpg",
      "produkte/dualtron-victor-ltd-dgt-60v-37-1ah-samsung-3.jpg"
    ]
  },
  {
    "id": "rovoron-r7",
    "brand": "rovoron",
    "model": "Rovoron R7 / R7 Pro",
    "fullTitle": "Rovoron R7 / R7 Pro 60V 28.6Ah/42.4Ah Akku, 2x900W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Rovoron R7 / R7 Pro: 60V 28.6Ah (1716Wh) oder 42.4Ah Pro (2544Wh) Samsung Batterie, 900W*2 Bürstenloser Motor (3000W Peak).",
    "price": {
      "chf": 1159,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/rovoron-r7",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 1800,
      "peakW": 3000,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 28.6,
      "batteryWh": 1716,
      "rangeKm": "90",
      "speedKmh": 65,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [
      {
        "id": "57010554503494",
        "name": "60V 28.6Ah / Schwarz",
        "note": "Referenzpreis 1159 CHF"
      },
      {
        "id": "57010598674758",
        "name": "60V 28.6Ah / Blau",
        "note": "Referenzpreis 1159 CHF"
      },
      {
        "id": "57010598707526",
        "name": "60V 28.6Ah / Rot",
        "note": "Referenzpreis 1159 CHF"
      },
      {
        "id": "57010598740294",
        "name": "60V 42.4Ah (Pro) / Schwarz",
        "note": "Referenzpreis 1259 CHF"
      },
      {
        "id": "57010598773062",
        "name": "60V 42.4Ah (Pro) / Blau",
        "note": "Referenzpreis 1259 CHF"
      },
      {
        "id": "57010598805830",
        "name": "60V 42.4Ah (Pro) / Rot",
        "note": "Referenzpreis 1179 CHF"
      }
    ],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/rovoron-r7",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/rovoron-r7-1.jpg",
      "produkte/rovoron-r7-2.jpg",
      "produkte/rovoron-r7-3.jpg"
    ]
  },
  {
    "id": "rovoron-s7",
    "brand": "rovoron",
    "model": "Rovoron S7",
    "fullTitle": "Rovoron S7 84V 37.1Ah Akku, 2x2500W",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Rovoron S7: 84V 37.1Ah Samsung Batterie (3116Wh), 2500W*2 Bürstenloser Motor (bis 11'500W Peak).",
    "price": {
      "chf": 1999,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/rovoron-s7",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 16. November 2026",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 5000,
      "peakW": 11500,
      "motors": 2,
      "batteryV": 84,
      "batteryAh": 37.1,
      "batteryWh": 3116,
      "rangeKm": "140",
      "speedKmh": 100,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/rovoron-s7",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/rovoron-s7-1.jpg",
      "produkte/rovoron-s7-2.jpg",
      "produkte/rovoron-s7-3.jpg"
    ]
  },
  {
    "id": "ausom-l1-max",
    "brand": "ausom",
    "model": "Ausom L1 Max",
    "fullTitle": "Ausom L1 Max 48V 20.8Ah Akku, 1000W",
    "category": "escooter",
    "segment": "alltag",
    "summary": "Ausom L1 Max: 48V 20.8 Ah Batterie (998.4Wh), 1000W Bürstenloser Motor (1344W Peak).",
    "price": {
      "chf": 729,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-l1-max",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 1000,
      "peakW": 1344,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 20.8,
      "batteryWh": 998.4,
      "rangeKm": "90",
      "speedKmh": 20,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/ausom-l1-max",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/ausom-l1-max-1.jpg",
      "produkte/ausom-l1-max-2.jpg",
      "produkte/ausom-l1-max-3.jpg"
    ]
  },
  {
    "id": "ausom-l2-max-dual-motor",
    "brand": "ausom",
    "model": "Ausom L2 Max Dual",
    "fullTitle": "Ausom L2 Max Dual 48V 20.8Ah Akku, 2x1000W",
    "category": "escooter",
    "segment": "touren",
    "summary": "Ausom L2 Max Dual: 48V 20.8 Ah Batterie (998.4Wh), 2 x 1000W Bürstenloser Motor (2688W Peak).",
    "price": {
      "chf": 959,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2000,
      "peakW": 2688,
      "motors": 2,
      "batteryV": 48,
      "batteryAh": 20.8,
      "batteryWh": 998.4,
      "rangeKm": "90",
      "speedKmh": 61,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/ausom-l2-max-dual-motor-1.jpg",
      "produkte/ausom-l2-max-dual-motor-2.jpg",
      "produkte/ausom-l2-max-dual-motor-3.jpg"
    ]
  },
  {
    "id": "ausom-dt2-pro",
    "brand": "ausom",
    "model": "Ausom DT2 Pro",
    "fullTitle": "Ausom DT2 Pro 52V 23.4Ah Akku, 2x1100W",
    "category": "escooter",
    "segment": "touren",
    "summary": "Ausom DT2 Pro: 52V 23.4 Ah Batterie (1216.8Wh), 2 x 1100W Bürstenloser Motor (2912W Peak).",
    "price": {
      "chf": 999,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-dt2-pro",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2200,
      "peakW": 2912,
      "motors": 2,
      "batteryV": 52,
      "batteryAh": 23.4,
      "batteryWh": 1216.8,
      "rangeKm": "114",
      "speedKmh": 64,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/ausom-dt2-pro",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/ausom-dt2-pro-1.jpg",
      "produkte/ausom-dt2-pro-2.jpg",
      "produkte/ausom-dt2-pro-3.jpg"
    ]
  },
  {
    "id": "ausom-f1-max",
    "brand": "ausom",
    "model": "Ausom F1 Max",
    "fullTitle": "Ausom F1 Max 60V 20.8Ah Akku, 2x1400W",
    "category": "escooter",
    "segment": "touren",
    "summary": "Ausom F1 Max: 60V 20.8 Ah Batterie, 1400W*2 Bürstenloser Motor.",
    "price": {
      "chf": 1209,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-f1-max",
      "checked": "2026-10-30",
      "note": "Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {
      "motorW": 2800,
      "peakW": null,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 20.8,
      "batteryWh": 1248,
      "rangeKm": "90-100",
      "speedKmh": 72,
      "weightKg": null,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": null,
      "brakes": null,
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": false
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/ausom-f1-max",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/ausom-f1-max-1.jpg",
      "produkte/ausom-f1-max-2.jpg",
      "produkte/ausom-f1-max-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-pro-ersatzteile",
    "brand": "kukirin",
    "model": "KuKirin G2 Pro Ersatzteile",
    "fullTitle": "KuKirin G2 Pro Ersatzteile",
    "category": "zubehoer",
    "segment": null,
    "summary": "Ersatzteile für KuKirin G2 Pro: Vorderrad (schlauchlos) -V4 Version, Schlauchloser Reifen -V4 Version, Antriebsrad -V4 Version, Motor-Rad -VMP Version und mehr.",
    "price": {
      "chf": 30,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {},
    "variants": [
      {
        "id": "56980990460230",
        "name": "Vorderrad (schlauchlos) -V4 Version",
        "note": "Referenzpreis 59 CHF"
      },
      {
        "id": "56980990492998",
        "name": "Schlauchloser Reifen -V4 Version",
        "note": "Referenzpreis 54 CHF"
      },
      {
        "id": "56980990525766",
        "name": "Antriebsrad -V4 Version",
        "note": "Referenzpreis 159 CHF"
      },
      {
        "id": "56980990558534",
        "name": "Motor-Rad -VMP Version",
        "note": "Referenzpreis 159 CHF"
      },
      {
        "id": "56980990918982",
        "name": "Bremsscheibe (Stück)",
        "note": "Referenzpreis 30 CHF"
      },
      {
        "id": "56980991115590",
        "name": "Batterie -V3 version",
        "note": "Referenzpreis 304 CHF"
      },
      {
        "id": "56980991148358",
        "name": "Batterie -V4 Version",
        "note": "Referenzpreis 314 CHF"
      },
      {
        "id": "56980991443270",
        "name": "Display-Armaturenbrett -V3 version (TFM13 -FEIMI-4)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980991476038",
        "name": "Display-Armaturenbrett -V4 Version (TFM13 -FEIMI-16)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980991508806",
        "name": "Display-Armaturenbrett (Farbdisplay) -V5 Version",
        "note": "Referenzpreis 74 CHF"
      },
      {
        "id": "56980991541574",
        "name": "Display-Armaturenbrett -VMP-A Version",
        "note": "Referenzpreis 74 CHF"
      },
      {
        "id": "56980991574342",
        "name": "Display-Armaturenbrett -VMP-B Version (nur für Charge A1156)",
        "note": "Referenzpreis 74 CHF"
      },
      {
        "id": "56980991607110",
        "name": "Display-Armaturenbrett -ABE Version",
        "note": "Referenzpreis 74 CHF"
      },
      {
        "id": "56980991738182",
        "name": "Controller -SZ-V4 version (blauer Anschluss) (Kompatibel mit QS version)",
        "note": "Referenzpreis 90 CHF"
      },
      {
        "id": "56980991770950",
        "name": "Controller -VMP Version",
        "note": "Referenzpreis 80 CHF"
      },
      {
        "id": "56980991803718",
        "name": "Controller -ABE Version",
        "note": "Referenzpreis 80 CHF"
      }
    ],
    "chLegal": null,
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-pro-ersatzteile-1.jpg",
      "produkte/kukirin-g2-pro-ersatzteile-2.jpg",
      "produkte/kukirin-g2-pro-ersatzteile-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-max-ersatzteile",
    "brand": "kukirin",
    "model": "KuKirin G2 Max Ersatzteile",
    "fullTitle": "KuKirin G2 Max Ersatzteile",
    "category": "zubehoer",
    "segment": null,
    "summary": "Ersatzteile für KuKirin G2 Max: Luftreifen (Stück), Vorderrad (ohne Scheibenbremse, Vorderachse), Motor (ohne Schlauch und Reifen), Bremsscheibe (Stück) und mehr.",
    "price": {
      "chf": 30,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {},
    "variants": [
      {
        "id": "56980987642182",
        "name": "Luftreifen (Stück)",
        "note": "Referenzpreis 39 CHF"
      },
      {
        "id": "56980987740486",
        "name": "Vorderrad (ohne Scheibenbremse, Vorderachse)",
        "note": "Referenzpreis 59 CHF"
      },
      {
        "id": "56980987806022",
        "name": "Motor (ohne Schlauch und Reifen)",
        "note": "Referenzpreis 184 CHF"
      },
      {
        "id": "56980988035398",
        "name": "Bremsscheibe (Stück)",
        "note": "Referenzpreis 30 CHF"
      },
      {
        "id": "56980988297542",
        "name": "Batterie",
        "note": "Referenzpreis 404 CHF"
      },
      {
        "id": "56980988592454",
        "name": "Display-Armaturenbrett (4 Pin) -B Version (TFM13 -FEIMI)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980988625222",
        "name": "Display-Armaturenbrett (5 Pin) -C version (TFM13 -FEIMI-4)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980988657990",
        "name": "Display-Armaturenbrett -D Version (TFM13-FEIMI-16)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980988690758",
        "name": "Display-Armaturenbrett (Farbdisplay) -E version",
        "note": "Referenzpreis 74 CHF"
      },
      {
        "id": "56980988821830",
        "name": "Controller (38105) -A Version",
        "note": "Referenzpreis 84 CHF"
      },
      {
        "id": "56980988854598",
        "name": "Controller (38153) -B Version",
        "note": "Referenzpreis 84 CHF"
      }
    ],
    "chLegal": null,
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-max-ersatzteile-1.jpg",
      "produkte/kukirin-g2-max-ersatzteile-2.jpg",
      "produkte/kukirin-g2-max-ersatzteile-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-master-ersatzteile",
    "brand": "kukirin",
    "model": "KuKirin G2 Master Ersatzteile",
    "fullTitle": "KuKirin G2 Master Ersatzteile",
    "category": "zubehoer",
    "segment": null,
    "summary": "Ersatzteile für KuKirin G2 Master: Pneumatischer Reifen (Stück) -2024 Version, Vorderer Motor (ohne Innen- und Außenreifen) -A version (dreieckiger Anschluss), Hinterradmotor (ohne Schlauch und Reifen) -A Version (Dreiecksanschluss), Schlauchloser Reifen -2025 Version und mehr.",
    "price": {
      "chf": 30,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {},
    "variants": [
      {
        "id": "56980984037702",
        "name": "Pneumatischer Reifen (Stück) -2024 Version",
        "note": "Referenzpreis 39 CHF"
      },
      {
        "id": "56980984168774",
        "name": "Vorderer Motor (ohne Innen- und Außenreifen) -A version (dreieckiger Anschluss)",
        "note": "Referenzpreis 174 CHF"
      },
      {
        "id": "56980984201542",
        "name": "Hinterradmotor (ohne Schlauch und Reifen) -A Version (Dreiecksanschluss)",
        "note": "Referenzpreis 174 CHF"
      },
      {
        "id": "56980984234310",
        "name": "Schlauchloser Reifen -2025 Version",
        "note": "Referenzpreis 49 CHF"
      },
      {
        "id": "56980984267078",
        "name": "Vorderer Motor -B version (gerader Anschluss)",
        "note": "Referenzpreis 184 CHF"
      },
      {
        "id": "56980984299846",
        "name": "Hinterer Motor -B Version (gerader Anschluss)",
        "note": "Referenzpreis 184 CHF"
      },
      {
        "id": "56980984725830",
        "name": "Bremsscheibe (Stück)",
        "note": "Referenzpreis 30 CHF"
      },
      {
        "id": "56980984987974",
        "name": "Batterie -A Version",
        "note": "Referenzpreis 404 CHF"
      },
      {
        "id": "56980985020742",
        "name": "Batterie -B Version",
        "note": "Referenzpreis 404 CHF"
      },
      {
        "id": "56980985250118",
        "name": "Display-Armaturenbrett -A Version (TFM13-FEIMI-3)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980985282886",
        "name": "Display-Armaturentafel -B Version (TFM13 -FEIMI-11)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980985315654",
        "name": "Display-Armaturenbrett -C Version (Endbuchstabe ist CZ)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980985381190",
        "name": "Controller -A Version",
        "note": "Referenzpreis 124 CHF"
      },
      {
        "id": "56980985413958",
        "name": "Controller -B Version (Modelle mit -C, -D und -E auf dem Etikett sind alle B-Version)",
        "note": "Referenzpreis 124 CHF"
      },
      {
        "id": "56980985446726",
        "name": "Controller -C Version (Terminalbuchstabe ist CZ)",
        "note": "Referenzpreis 124 CHF"
      }
    ],
    "chLegal": null,
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-master-ersatzteile-1.jpg",
      "produkte/kukirin-g2-master-ersatzteile-2.jpg",
      "produkte/kukirin-g2-master-ersatzteile-3.jpg"
    ]
  },
  {
    "id": "kukirin-g2-ersatzteile",
    "brand": "kukirin",
    "model": "KuKirin G2 Ersatzteile",
    "fullTitle": "KuKirin G2 Ersatzteile",
    "category": "zubehoer",
    "segment": null,
    "summary": "Ersatzteile für KuKirin G2: Scheibenbremse (140 mm) -A Version, Bremsscheibe (160mm) -B Version, Vorderrad (ohne Scheibenbremse), Schlauchloser Reifen (Stück) und mehr.",
    "price": {
      "chf": 34,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {},
    "variants": [
      {
        "id": "56980982137158",
        "name": "Scheibenbremse (140 mm) -A Version",
        "note": "Referenzpreis 34 CHF"
      },
      {
        "id": "56980982169926",
        "name": "Bremsscheibe (160mm) -B Version",
        "note": "Referenzpreis 34 CHF"
      },
      {
        "id": "56980982333766",
        "name": "Vorderrad (ohne Scheibenbremse)",
        "note": "Referenzpreis 75 CHF"
      },
      {
        "id": "56980982366534",
        "name": "Schlauchloser Reifen (Stück)",
        "note": "Referenzpreis 54 CHF"
      },
      {
        "id": "56980982399302",
        "name": "Antriebsrad",
        "note": "Referenzpreis 174 CHF"
      },
      {
        "id": "56980982497606",
        "name": "Batterie -A Version",
        "note": "Referenzpreis 304 CHF"
      },
      {
        "id": "56980982530374",
        "name": "Batterie -B Version",
        "note": "Referenzpreis 304 CHF"
      },
      {
        "id": "56980982661446",
        "name": "Display-Armaturenbrett-Kit -B version (Kompatibel mit A version)",
        "note": "Referenzpreis 100 CHF"
      },
      {
        "id": "56980982989126",
        "name": "Controller",
        "note": "Referenzpreis 113 CHF"
      }
    ],
    "chLegal": null,
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g2-ersatzteile-1.jpg",
      "produkte/kukirin-g2-ersatzteile-2.jpg",
      "produkte/kukirin-g2-ersatzteile-3.jpg"
    ]
  },
  {
    "id": "kukirin-g4-ersatzteile",
    "brand": "kukirin",
    "model": "KuKirin G4 Ersatzteile",
    "fullTitle": "KuKirin G4 Ersatzteile",
    "category": "zubehoer",
    "segment": null,
    "summary": "Ersatzteile für KuKirin G4: Bremsscheibe (140mm) -A version, Bremsscheibe (160mm) -B Version, Vorderrad (11.8 mm) -B version, Tubeless-Reifen für Hinterrad (Stück) und mehr.",
    "price": {
      "chf": 34,
      "kind": "shop",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
      "checked": "2026-10-30",
      "note": "Preis ab (günstigste Ausführung). Einführungspreis, unverbindlich bis Verkaufsstart.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-10-30"
    },
    "specs": {},
    "variants": [
      {
        "id": "56980995834182",
        "name": "Bremsscheibe (140mm) -A version",
        "note": "Referenzpreis 34 CHF"
      },
      {
        "id": "56980995866950",
        "name": "Bremsscheibe (160mm) -B Version",
        "note": "Referenzpreis 34 CHF"
      },
      {
        "id": "56980995998022",
        "name": "Vorderrad (11.8 mm) -B version",
        "note": "Referenzpreis 70 CHF"
      },
      {
        "id": "56980996063558",
        "name": "Tubeless-Reifen für Hinterrad (Stück)",
        "note": "Referenzpreis 55 CHF"
      },
      {
        "id": "56980996096326",
        "name": "Antriebsrad",
        "note": "Referenzpreis 194 CHF"
      },
      {
        "id": "56980996227398",
        "name": "Batterie -A Version",
        "note": "Referenzpreis 484 CHF"
      },
      {
        "id": "56980996260166",
        "name": "Batterie -B Version",
        "note": "Referenzpreis 494 CHF"
      },
      {
        "id": "56980996292934",
        "name": "Batterie -C version",
        "note": "Referenzpreis 494 CHF"
      },
      {
        "id": "56980996489542",
        "name": "Display-Armaturenbrett-Kit -B version (Kompatibel mit A version)",
        "note": "Referenzpreis 100 CHF"
      },
      {
        "id": "56980996555078",
        "name": "Display-Bildschirm",
        "note": "Referenzpreis 40 CHF"
      },
      {
        "id": "56980996882758",
        "name": "Controller",
        "note": "Referenzpreis 113 CHF"
      }
    ],
    "chLegal": null,
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "checked": "2026-10-30",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [
      "produkte/kukirin-g4-ersatzteile-1.jpg",
      "produkte/kukirin-g4-ersatzteile-2.jpg",
      "produkte/kukirin-g4-ersatzteile-3.jpg"
    ]
  }
],
  dirtbikes: {
  "status": "Erstes Modell gelistet, Sortiment im Aufbau",
  "text": "Mit dem KuKirin X1 ist ein erstes Mini-Dirtbike gelistet. Weitere E-Dirtbikes und Motocross-Modelle folgen, sobald Daten und Bildrechte gesichert sind. E-Dirtbikes sind für Privatgelände gedacht.",
  "planned": [
    {
      "title": "Einsteiger-Dirtbikes",
      "text": "Leichtere Modelle für Privatgelände und Trainingsflächen."
    },
    {
      "title": "Motocross-Klasse",
      "text": "Leistungsstärkere Modelle für Strecke und Gelände."
    },
    {
      "title": "Schutzausrüstung",
      "text": "Helm, Protektoren, Handschuhe. Passend zur Kategorie."
    }
  ]
}
};
