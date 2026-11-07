/* N SCOOTS – Produktdaten (automatisch erzeugt aus dem E-Rydez-Katalog)
 * -------------------------------------------------------------
 * Quellen: https://e-rydez.ch/products.json (abgerufen 2026-11-06) und https://swiss-scoots.ch/products.json (nur eKFV-Modelle mit
 * ausgewiesener CH-Strassenzulassung), gesichert unter tools/quellen/.
 * Neu erzeugen: node tools/import-erydez.js
 * Technische Angaben sind Händler-/Herstellerangaben. Preise (kind "referenz")
 * sind Referenzpreise des Quell-Händlers am Prüfdatum (price.basis, price.source),
 * keine N SCOOTS-Preise. Reichweiten: Herstellerangaben. supplierPhotos: Händler-
 * fotos nur als Link, Freigabe ausstehend, nicht eingebettet.
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 16,
      "maxLoadKg": 100,
      "ekfv": false,
      "tires": "8\" Reifen",
      "brakes": "Elektronische Bremse + mechanische Bremse",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": true,
      "chargeHours": "7-8",
      "climbPct": 27,
      "lights": "Scheinwerfer"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.kukirin.net/en/productdetail?documentId=jhbf4lb0eu4sfcqmyy7kibod",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_156_KuKirinS1maxFolding_PortableE-scooterforCommute.jpg?v=1756233406",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_121_KuKirinS1maxFolding_PortableE-scooterforCommute_9.jpg?v=1756233406",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_164_KuKirinS1maxFolding_PortableE-scooterforCommute_2.jpg?v=1756233367",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_165_KuKirinS1maxFolding_PortableE-scooterforCommute_6.jpg?v=1756233367",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_167_KuKirinS1maxFolding_PortableE-scooterforCommute_12.jpg?v=1756233368",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_168_KuKirinS1maxFolding_PortableE-scooterforCommute_7.jpg?v=1756233367",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_169_KuKirinS1maxFolding_PortableE-scooterforCommute_8_1.jpg?v=1756233368",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_170_KuKirinS1maxFolding_PortableE-scooterforCommute_13.jpg?v=1756233367",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_171_KuKirinS1maxFolding_PortableE-scooterforCommute_16.jpg?v=1756233368",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_172_KuKirinS1maxFolding_PortableE-scooterforCommute_17.jpg?v=1756233367",
        "page": "https://e-rydez.ch/products/kukirin-s1-max-36v-10-4ah-akku-350w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.kukirin.net/en/productdetail?documentId=jhbf4lb0eu4sfcqmyy7kibod",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 22.3,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "9\" Luftreifen (Schlauchlos, Offroad-Profil)",
      "brakes": "Doppelscheibenbremsen vorne und hinten + Abschaltbremse",
      "ip": null,
      "foldable": true,
      "abe": true,
      "limited": true,
      "chargeHours": "7-8",
      "climbPct": 34,
      "suspension": "Federdämpfer",
      "lights": "Front- und Rücklicht, 3 Lichtmodi, reflektierende Aufkleber",
      "display": "Display mit Tastenbedienfeld"
    },
    "variants": [],
    "chLegal": "Deutsche ABE (20–25 km/h), keine Schweizer Zulassung ausgewiesen",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g2-pro-abe-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Untitled-rr.png?v=1754554232",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok_2.png?v=1754554231",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok_4.png?v=1754554231",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok_36.png?v=1754554232",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_pro_ch_edition_wheel_e1feae92-723a-4d0e-a228-98cb0852ae40.png?v=1754554230",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_pro_ch_edition_back_09b17349-8002-414f-9ccd-5e804da8cc96.png?v=1754554230",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok.png?v=1754554231",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g2-pro-abe-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-pro",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 25,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "9\" Luftreifen (Schlauchlos, Offroad-Profil)",
      "brakes": "Scheibenbremsen vorne und hinten + elektronische Bremse (E-Brake)",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "8-9",
      "climbPct": 34,
      "suspension": "Federdämpfer vorne und hinten",
      "lights": "6-Licht-System: LED-Scheinwerfer, Blinker, Bremslicht",
      "display": "LED-Display"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-pro",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g2-pro-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Untitled-rr.png?v=1754554232",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok_2.png?v=1754554231",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok_4.png?v=1754554231",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok_36.png?v=1754554232",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_pro_ch_edition_wheel_e1feae92-723a-4d0e-a228-98cb0852ae40.png?v=1754554230",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2.png?v=1754554231",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_pro_ch_edition_back_09b17349-8002-414f-9ccd-5e804da8cc96.png?v=1754554230",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok.png?v=1754554231",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g2-pro-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-abe",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 25.3,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos, Offroad-Profil)",
      "brakes": "Scheibenbremsen vorne und hinten + elektronische Bremse (E-Brake)",
      "ip": "IP54",
      "foldable": true,
      "abe": true,
      "limited": true,
      "chargeHours": "8-9",
      "climbPct": 36,
      "suspension": "Vierarm-Federung mit Federdämpfern vorne und hinten",
      "lights": "7-Licht-System: LED-Scheinwerfer (6 W), 4 Blinker (vorne und hinten), Rücklicht, Bremslicht",
      "display": "Touchscreen-Display"
    },
    "variants": [],
    "chLegal": "Deutsche ABE (20–25 km/h), keine Schweizer Zulassung ausgewiesen",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-abe",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g2-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/r3r_047d36f5-1ce6-4d9c-bb98-4a449108fa1f.png?v=1784835844",
        "page": "https://e-rydez.ch/products/kukirin-g2-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_frontside_6bc55ef9-0e26-4ee0-aa9c-617159607979.png?v=1784835844",
        "page": "https://e-rydez.ch/products/kukirin-g2-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/picok-2025-05-10T013322.543_0123a8b1-ba14-47db-a456-684658d3c54e.png?v=1784835844",
        "page": "https://e-rydez.ch/products/kukirin-g2-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_back_6eb4eb75-79b8-41b2-9b77-29a968ce7d38.png?v=1784835844",
        "page": "https://e-rydez.ch/products/kukirin-g2-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_backlight_25bdc665-76c0-4786-9dc1-e55a4f4a862d.png?v=1784835844",
        "page": "https://e-rydez.ch/products/kukirin-g2-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_backside_00cda672-3bcd-4624-97c7-fd7e373ba6b1.png?v=1784835844",
        "page": "https://e-rydez.ch/products/kukirin-g2-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_folded_dcc5c7a0-39d9-402b-9fdc-a78cf25eb513.png?v=1784835844",
        "page": "https://e-rydez.ch/products/kukirin-g2-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g2-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 25.5,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos)",
      "brakes": "Scheibenbremsen vorne und hinten + elektronische Bremse (E-Brake)",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "7-8",
      "climbPct": 36,
      "suspension": "Vierarm-Federung"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.kukirin.net/en/productdetail?documentId=k4lo52nb307tsl6d0tw0qpmc",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_9_kukirin-T3-102.jpg?v=1763936229",
        "page": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_112_kukirin-T3-101.jpg?v=1763936332",
        "page": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_115_kukirin-t3-3112.jpg?v=1763936340",
        "page": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_6_kukirin-t3-11.jpg?v=1763936346",
        "page": "https://e-rydez.ch/products/kukirin-t3-2025-48v-15-6-ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.kukirin.net/en/productdetail?documentId=k4lo52nb307tsl6d0tw0qpmc",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 25.3,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos, Offroad-Profil)",
      "brakes": "Scheibenbremsen vorne und hinten + elektronische Bremse (E-Brake)",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "8-9",
      "climbPct": 36,
      "suspension": "Vierarm-Federung mit Federdämpfern vorne und hinten",
      "lights": "7-Licht-System: LED-Scheinwerfer (6 W), 4 Blinker (vorne und hinten), Rücklicht, Bremslicht",
      "display": "Touchscreen-Display"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g2-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/KuKirin2026G2scooter_2_1.webp?v=1784936934",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/KuKirin2026G2scooter_3_1.webp?v=1784936934",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/KuKirin2026G2scooter_1_1.webp?v=1784936935",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_back.png?v=1754554227",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g2_backlight.png?v=1754554226",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/KuKirin2026G2scooter_5_1.webp?v=1784936934",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/KuKirin2026G2scooter_7_1.webp?v=1784936934",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/KuKirin2026G2scooter_9_1.webp?v=1784936935",
        "page": "https://e-rydez.ch/products/kukirin-g2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g2-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 24,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos, verschleissfest)",
      "brakes": "Doppelscheibenbremsen + elektronische Bremse (E-Brake)",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "9-10",
      "climbPct": 36,
      "suspension": "Doppelgabel-Federung vorne, doppelte Federdämpfer hinten",
      "lights": "Scheinwerfer, Rücklicht, Blinker, mehrzonige Ambientebeleuchtung"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-m4-max-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04605.png?v=1754554220",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04662.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04738.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04784.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04811.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04838.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC05454.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC05497.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC05517.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04618.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04638.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04673.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04686.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04703.png?v=1754773538",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/DSC04775.png?v=1754554220",
        "page": "https://e-rydez.ch/products/kukirin-m4-max-20255-48v-18ah-akku-800w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-m4-max-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g3",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 25,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos)",
      "brakes": "Scheibenbremsen vorne und hinten",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "9-10",
      "climbPct": 42
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g3",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.kukirin.net/en/productdetail?documentId=p9jmfw00npaq2terxnrzknmb",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g3_side.png?v=1754554225",
        "page": "https://e-rydez.ch/products/kukirin-g3",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g3_side_front.png?v=1754554225",
        "page": "https://e-rydez.ch/products/kukirin-g3",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g3_back.png?v=1754554225",
        "page": "https://e-rydez.ch/products/kukirin-g3",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g3_breite.png?v=1754554224",
        "page": "https://e-rydez.ch/products/kukirin-g3",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g3_foldedgefaltet.png?v=1754554224",
        "page": "https://e-rydez.ch/products/kukirin-g3",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g3_folded_gefaltet.png?v=1754554224",
        "page": "https://e-rydez.ch/products/kukirin-g3",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin_g3_ladekabel.png?v=1754554225",
        "page": "https://e-rydez.ch/products/kukirin-g3",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.kukirin.net/en/productdetail?documentId=p9jmfw00npaq2terxnrzknmb",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 30.4,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos, Offroad-Profil)",
      "brakes": "Scheibenbremsen vorne und hinten + Abschaltbremse",
      "ip": "IPX4",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "9-10",
      "climbPct": 49,
      "suspension": "Doppelschwingen-Federdämpfer vorne und hinten",
      "lights": "Intelligenter LED-Scheinwerfer mit Fern- und Abblendlicht (Reichweite bis 15 m), Rücklicht"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g2-ultra-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_15_01.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_18_10.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_23_43.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_16_09.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_22_28.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_24_03.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_21_26.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_20_13.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_25_44.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_17_11_bc162316-841a-485e-9bea-07c5b7c83e8c.jpg?v=1760885309",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_19_06.jpg?v=1760885275",
        "page": "https://e-rydez.ch/products/kukirin-g2-ultra-48v-18ah-akku-2-x-800w-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g2-ultra-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 31.6,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (mit Schlauch, Offroad-Profil)",
      "brakes": "Scheibenbremsen vorne und hinten + elektronische Bremse (E-Brake)",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": true,
      "chargeHours": "10-11",
      "climbPct": 40,
      "suspension": "Federdämpfer vorne und hinten (Hohlbauweise Vorderarm)",
      "lights": "6-LED-System: Scheinwerfer, Blinker vorne/hinten, Bremslicht"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g2-max-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_127_G2_Max-1.jpg?v=1756236638",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_123_G2_Max-2.jpg?v=1756236638",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_122_G2_Max-11.jpg?v=1756236638",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_128_G2_Max-8.jpg?v=1756236638",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_126_G2_Max-5.jpg?v=1756236638",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_129_G2_Max-6.jpg?v=1756236621",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_130_G2_Max-7.jpg?v=1756236621",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_131_G2_Max-10.jpg?v=1756236620",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-48v-20ah-akku-1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g2-max-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-master",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 33.1,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos)",
      "brakes": "Scheibenbremsen vorne und hinten + elektronische Bremse (E-Brake)",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "7-8",
      "climbPct": 53,
      "suspension": "Hydraulische Stossdämpfer vorne und hinten",
      "lights": "8-Licht-System: LED-Scheinwerfer, Blinker, Rücklicht, Ambientebeleuchtung",
      "display": "Grosses LCD-Display"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g2-master",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g2-master-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_42b29b4d-dfb1-408d-89d6-a2fbe3ea1274.jpg?v=1774910380",
        "page": "https://e-rydez.ch/products/kukirin-g2-master",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_4fffd09c-3cb4-403f-b057-6a55f4ffae1a.jpg?v=1774910326",
        "page": "https://e-rydez.ch/products/kukirin-g2-master",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_beea5280-3ebd-459e-9155-a43b4c70fb53.jpg?v=1774910326",
        "page": "https://e-rydez.ch/products/kukirin-g2-master",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_f4392eca-97b3-4030-9226-7c6d27b02f24.jpg?v=1774910326",
        "page": "https://e-rydez.ch/products/kukirin-g2-master",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_715b1979-c320-4a05-a9e2-2473bd5f38e5.jpg?v=1774910326",
        "page": "https://e-rydez.ch/products/kukirin-g2-master",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_1bde9964-2cce-45c7-b47c-b9bbd98fffb8.jpg?v=1774910326",
        "page": "https://e-rydez.ch/products/kukirin-g2-master",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_b27de2c5-cd18-41a1-a3bf-8edfb1a76890.jpg?v=1774910326",
        "page": "https://e-rydez.ch/products/kukirin-g2-master",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g2-master-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g4",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 28. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 41.5,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "11\" Luftreifen (Schlauchlos, 90 mm breit, Offroad-Profil)",
      "brakes": "Scheibenbremsen vorne und hinten + elektronische Bremse (E-Brake)",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "10-11",
      "climbPct": 58,
      "suspension": "Vierarm-Federung mit Federdämpfern",
      "lights": "6-LED-System: Scheinwerfer, 2 Blinker vorne, 2 Blinker hinten, Bremslicht",
      "display": "Touchscreen-Display"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-g4",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-g4-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin2026G4scooter_2.webp?v=1778538339",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_56d6c9eb-d8d8-4e62-a121-2e7cea18bfbe.jpg?v=1776180219",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_ba5add18-8d8b-4e94-b06e-d7e10702135e.jpg?v=1776180219",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_c67142fa-4550-478c-b805-e336c5b91ac0.jpg?v=1776180219",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_9afc303a-7d3e-4fb6-a418-731cfb1f3028.jpg?v=1776180219",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_4ef9d2ba-1925-4bdf-944d-f974273ec991.jpg?v=1776180219",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin2026G4scooter_6.webp?v=1778538387",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/kukirin2026G4scooter_4.webp?v=1778538441",
        "page": "https://e-rydez.ch/products/kukirin-g4",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-g4-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 52,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "14\" vorne / 12\" hinten Offroad-Luftreifen",
      "brakes": "Hydraulische Bremsen vorne und hinten + elektronische Bremse",
      "ip": "IP65",
      "foldable": false,
      "abe": false,
      "limited": false,
      "chargeHours": "8-9",
      "suspension": "Hydraulische Stossdämpfer vorne und hinten",
      "lights": "LED-Scheinwerfer",
      "display": "Display"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://kukirin.it.com/en/products/kukirin-x1-electric-bike",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/KuKirinX1.jpg?v=1784033387",
        "page": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/OwhoMeKBzyqrDZYk.jpg?v=1784034075",
        "page": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/nqklLYHtGMQupxsx.jpg?v=1784034074",
        "page": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/IdesOfWjkJdNCtVy.webp?v=1784034075",
        "page": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/sDHMBGiKYrIsDQAh.jpg?v=1784034076",
        "page": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/TzyuyNQmEGpxwySY.jpg?v=1784034076",
        "page": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/jBhnxFKBMtOpmroq.jpg?v=1784034075",
        "page": "https://e-rydez.ch/products/kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://kukirin.it.com/en/products/kukirin-x1-electric-bike",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 22.7,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen",
      "brakes": "Scheibenbremsen vorne und hinten",
      "ip": null,
      "foldable": true,
      "abe": true,
      "limited": true,
      "chargeHours": "5-7",
      "suspension": "Vorne und hinten gefedert, Schwingarm-Federung (Rocker-Arm)",
      "lights": "LED-Frontlicht, Bremslicht hinten, Reflektoren",
      "display": "HD-Farbdisplay"
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://joyorprime.com/products/joyor-s5-abe",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/67db9269b5352c07f9a37eb70c9ab6c6.webp?v=1784251911",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/b190fbb039eec9191b8cd64388dd2a81.webp?v=1784251909",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/8620c1bb88d9cffbe152a34f70ac2c63.jpg?v=1784251910",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/9d338452b6a3079a12fc341823086d5c.webp?v=1784251910",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/58046b2d101da922fb0b014c97f2ceb5.jpg?v=1784251910",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/9abcc31a4b7f9b916ac3c985c6bb2ba2.jpg?v=1784251910",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/71378df5fec2bec98774dfbd4b5bb79a.jpg?v=1784251910",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/44680d747d86af51f5c231bd4b051a9d.webp?v=1784251910",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2a50119338cbc86a9bf9935c8b754d6a.webp?v=1784251911",
        "page": "https://e-rydez.ch/products/joyor-s5-abe-48v-500w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://joyorprime.com/products/joyor-s5-abe",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 22.5,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen",
      "brakes": "Scheibenbremsen vorne und hinten",
      "ip": "IP45",
      "foldable": true,
      "abe": false,
      "limited": true,
      "chargeHours": "5-7",
      "climbPct": 47,
      "suspension": "Vorne und hinten gefedert, Schwingarm-Federung (Rocker-Arm)",
      "lights": "Front- und Rücklicht, Blinker vorne und hinten, seitliche Reflektoren",
      "display": "HD-Farbdisplay (Multifunktions-LCD)"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://joyorprime.com/products/joyor-s5-z-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/ee40955850991e38d52f7ea80cae8b71.webp?v=1784251808",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/ace5231bb81ae6c9e406661e6e264b0e.jpg?v=1784251809",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2bc16d5cdc950d1d00d7239a2b674cd2.webp?v=1784251809",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/0fec49a36fd7b4d4c45890937c9098f6.jpg?v=1784251809",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/010b5c7355a77cb25531e85910bd2918.jpg?v=1784251809",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/9a5df69030071f01a9923710a3008d02.webp?v=1784251809",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/cfcfd780e72437245c14654132ad7e73.webp?v=1784251810",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7716a8a9e8e45ea1a8dd926f691962db.webp?v=1784251810",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/3201b2ee77590b91e82b2b8c4ec6bf6f.webp?v=1784251809",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/a8ffff027f121fc1c88be9cb6f85093b.webp?v=1784251809",
        "page": "https://e-rydez.ch/products/joyor-s5z-48v-13ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://joyorprime.com/products/joyor-s5-z-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 25.6,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Offroad)",
      "brakes": "Mechanische Scheibenbremsen vorne und hinten",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": true,
      "chargeHours": 10,
      "climbPct": 47,
      "suspension": "Vorne und hinten hydraulische Federbein-Dämpfer",
      "lights": "Frontscheinwerfer, Bremslicht, Blinker, Seitenlichter",
      "display": "Integriertes Bedienpanel mit Fahrdaten-Anzeige"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://joyorprime.com/products/joyor-t6",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/1e657c4b44a0efbd83080d6105169066.webp?v=1784251713",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/4882b9d8d22ea48bc6f4661d836d6789.webp?v=1784251713",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/1326bdb372c63d85150410ef3911c0a0.webp?v=1784251725",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/6d7d453d8902d5bf41485178b38717ac.webp?v=1784251725",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/48a24615397a09287c0128638acdb1a0.webp?v=1784251725",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7aa183ad76d3fbefe78a560861d2a74a.webp?v=1784251725",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/729cb1da598c1c99ae36cec193e6a78e.webp?v=1784251725",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/93a653b2c54f4d4439721335a7a0b881.webp?v=1784251725",
        "page": "https://e-rydez.ch/products/joyor-t6-48v-18ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://joyorprime.com/products/joyor-t6",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 25.8,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Offroad)",
      "brakes": "Mechanische Scheibenbremsen vorne und hinten",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": true,
      "chargeHours": "12-14",
      "climbPct": 47,
      "suspension": "Vorne und hinten gefedert, hochelastische Schwingarm-Federung",
      "lights": "4-Licht-System: Frontlicht, Rücklicht, Seitenbeleuchtung, Warnlicht; Blinker vorne und hinten",
      "display": "HD-Farbdisplay"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://joyorprime.com/products/joyor-s8-z-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/ee40955850991e38d52f7ea80cae8b71_14f173b1-86bf-429e-8e1a-ce4697982ef0.webp?v=1784251838",
        "page": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/47ad1d8348570d8d9b15c18b23d0f160.jpg?v=1784251838",
        "page": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2e6fb28436c133d65bedbe3c7fe0abd7.jpg?v=1784251837",
        "page": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/80e5e5fdcb948fa9ecedd5def348e13a.jpg?v=1784251838",
        "page": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/cfcfd780e72437245c14654132ad7e73_f5bdb737-a486-485d-be8b-2300e459c453.webp?v=1784251837",
        "page": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/9a5df69030071f01a9923710a3008d02_3688ba8b-f430-4c1b-b092-0eb80f2a2a6f.webp?v=1784251838",
        "page": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/5f5e6f8bf75354f133766e3d43786b33.webp?v=1784251838",
        "page": "https://e-rydez.ch/products/joyor-s8-48v-26ah-600w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://joyorprime.com/products/joyor-s8-z-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
    },
    "specs": {
      "motorW": 500,
      "peakW": 1600,
      "motors": 1,
      "batteryV": 48,
      "batteryAh": 18,
      "batteryWh": 864,
      "rangeKm": "≤70",
      "speedKmh": 20,
      "weightKg": 25.6,
      "maxLoadKg": 148,
      "ekfv": false,
      "tires": "10\" Luftreifen (Offroad)",
      "brakes": "Mechanische Scheibenbremsen vorne und hinten",
      "ip": null,
      "foldable": true,
      "abe": true,
      "limited": true,
      "chargeHours": 10,
      "climbPct": 47,
      "suspension": "Vorne und hinten hydraulische Federbein-Dämpfer (Herstellertext; Spezifikationstabelle nennt hinten 'No')",
      "lights": "Frontscheinwerfer, Rücklicht, Blinker am Lenker",
      "display": "HD-Display mit Lenker-Bedienelementen"
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://joyorprime.com/products/joyor-t6e",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/afa831e2c9ab959bf9122484bd4d8e93.webp?v=1784251677",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/10b61a5130bb173975b65b0906695a23.webp?v=1784290472",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/158d57362332a3ebfa5b60fbaa7993e2.webp?v=1784251677",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/a0d4a06fb9dc2c0c88509c21b389ca9e.webp?v=1784251676",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/e26221c8b1662a138148daf24d7d5c85.webp?v=1784251677",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/fe42da7a53050201c76c7037df69d283.webp?v=1784251677",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/cf7d09c59e3368a474f57b6520672363.webp?v=1784251677",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/0a87324e19b533bf93dd3cb790e59e40.webp?v=1784251677",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/d02fe73896912ce883579d7d7fc67742.webp?v=1784251676",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/ab20a7cd285fd33636a1a6792231a4b9.webp?v=1784251677",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/577242eab22710fbcaed63ca3e88b43e.webp?v=1784251676",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/b0120819b08691f2e7cdbb5e190ed190.webp?v=1784251676",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/831a44d635c01623147ed8a8dda2faad.webp?v=1784251676",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/26d41689498925eae5e75bdd95f55f78.webp?v=1784251676",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/656da8aaca0eff3b38c307370f69518c.webp?v=1784251676",
        "page": "https://e-rydez.ch/products/joyor-t6e-48v-500w-abe",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://joyorprime.com/products/joyor-t6e",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 29.8,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Offroad)",
      "brakes": "Hydraulische Scheibenbremsen vorne und hinten (120 mm Scheiben)",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": true,
      "chargeHours": 10,
      "climbPct": 70,
      "suspension": "Vorne und hinten Elastomer-Federung (Schwingarm)",
      "lights": "LED-Frontlicht, Bremslicht hinten, Blinker",
      "display": "HD-Farbdisplay"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://joyorprime.com/products/joyor-s10s-z",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/fc2c45fe2c18ed3f8920205a283f46a6.webp?v=1784251876",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7b4d5f9db6714690e37d854fa932d4b4.webp?v=1784251877",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/da9a4442a0c53d2fcc8cde40a7187758.webp?v=1784251877",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/c2a26823833662931f56a9885d1fbcf5.webp?v=1784251878",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/1afa07d6e3be0be0406b2a779ca5a6eb.webp?v=1784251877",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/52f9cbb6715d24b9be546082e5f177e9.webp?v=1784251879",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/65ad1c2d7b63f6264250cbbdcf04157e.webp?v=1784251878",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/75a37ea2dce20d5270cf646e0059b3a5.webp?v=1784251878",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7385f88d8ef8ebf8367d3ad047ddf1c1.webp?v=1784251878",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/a4cd82425e98ccd65c66574e8f7c86bf.webp?v=1784251878",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/abc0f2badf828a156c281d3773ac0e5f.webp?v=1784251877",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/8dde9151c6f01ab7873ce64af3def9ac.webp?v=1784420304",
        "page": "https://e-rydez.ch/products/joyor-s10sz-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://joyorprime.com/products/joyor-s10s-z",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 29.6,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (All-Terrain/Offroad)",
      "brakes": "Hydraulische Scheibenbremsen vorne und hinten",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": true,
      "chargeHours": 10,
      "climbPct": 70,
      "suspension": "Vorne und hinten hydraulische Federbein-Dämpfer",
      "lights": "Frontscheinwerfer, Bremslicht, Blinker",
      "display": "LCD-Display mit Bedienpanel"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://joyorprime.com/products/joyor-t10-1000w-dual-motors-75km-endurance",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/fc47bb6347199bb13be12828dd9f9a53.webp?v=1784251754",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/8fd1b8a329824176bb1d2eb1f9271ffd.webp?v=1784251755",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/a54355594855bc2ac47774b66c1304dd.webp?v=1784251755",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/3fdbe3c8d76c419d659d518682bb2ad1.webp?v=1784251755",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/8c9a3b6b8ca99fd7bb3d2e4ff77d5ea7.webp?v=1784251756",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7d1d5039200267f9381f534db35bc7c5.webp?v=1784251754",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/dc80f6b16e29f4928432dab2e640ca5f.webp?v=1784251755",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/b489aca0aeb45a56a0b15923c875025d.webp?v=1784251756",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7accc9186cc74b92fe3010dd3535c12f.webp?v=1784251755",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/207111c260ac2e9267c31341fb27fcb2.webp?v=1784251755",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/d2edddde3c29661d5ff98634acb16917.webp?v=1784251754",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/22d345ac6db1f651850265867b9d1f57.webp?v=1784251754",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/6a97fc26fa59feaa394d135497426b94.webp?v=1784251755",
        "page": "https://e-rydez.ch/products/joyor-t10-60v-18ah-2x1000w",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://joyorprime.com/products/joyor-t10-1000w-dual-motors-75km-endurance",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "swiss-scoots",
      "source": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
      "checked": "2026-10-30",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
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
      "tires": "10\" Luftreifen (Schlauchlos, 10x3.00-6)",
      "brakes": "Mechanische Scheibenbremsen vorne und hinten, E-Brake-Taste",
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true,
      "suspension": "Gekapselte Stahlfederung",
      "lights": "Komplette Beleuchtungsanlage nach eKFV, Blinker im Lenker integriert",
      "display": "Integriertes LCD-Display"
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
    "chLegal": "Strassenzugelassen Schweiz (Herstellerangabe, 20 km/h-Version)",
    "streetLegalCH": true,
    "sources": [
      {
        "url": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "checked": "2026-10-30",
        "note": "Händlerseite swiss-scoots.ch (Preis, Akku, Motor, Reichweite, Lieferstatus, Zulassungsangabe)"
      },
      {
        "url": "https://teverun-europe.com/product/blade-mini-pro-ekfv-black/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/17d926d7b0963dfbfe8f30ca6931e73a.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/6b08b85dc09e0010eae6f5dfb73020bb.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/616928e1409bcf97c013a5a02ff70689.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/f0f9caf9c7b76ed292f8a01acd4b2511-1.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/f2164a6592c9dcbd1bb4a73f674a8dd1-1.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/d83c4d8db157fc5a899ba68eaf43dd8a-1.jpg?v=1780503798",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/e77aebca2200e7f4c0fa28d96fc70434-1.jpg?v=1780503798",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/9eb358a0aee87e423753bcf29d9da075-1.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/b4773cf04ba1be10b296cacc5648b87e-1.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/3936871e986128ddcbfc3a3fa4a66934-1.jpg?v=1780503800",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/4fa7f2b79bcadc3a8c90bbdd992465ef-1.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/a82c8bd9325f8b5d2ca9e71ca26512fd-1.jpg?v=1780503798",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/96645479b5b84d2225463ce7438224a3-1.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/f4150b1aae3214b9c516033dac4a4731-1.jpg?v=1780503797",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/1cdb359f084ff2ac3e18d4a5fdf86d73-1.jpg?v=1780503798",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/8921ffad7daca5ac67703f55ccd3dd65-1.jpg?v=1780503800",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/34232a985cd179e75071b3aaa2992cef-1.jpg?v=1780503798",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/45de5f5be08a6eef0c6531a4356e49d2-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/1915ddf9db87652e67480d2885a2bfa5-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/1b690f1e1de9989bd23e630d5059f38d-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/47298182c6173d86fe47a160f1863c74.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/809830d4d26bbe45019af8cdbe0daa99.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/d2896d60aefc71b0482fbc8f011f6bdf.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/049a65f85d8b067abe9fc2c6f0b1533b-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/082f84e4929b38434b4ccf349a36c78a-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/15bd7f45f731e0906c2c4e3bc01f745b-1.jpg?v=1780503989",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/4b2c12796353a1a0400ac3852e22d399-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/5c761af754a26f46590a5e2f1880e5ff-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/76862af3d83560b929bd36e958a6b02f-1.jpg?v=1780503989",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/a78a2f86b4cab35605e9c1abace25a1d-1.jpg?v=1780503989",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/f9bacb279b61c3184d0dec2430a7b856-1.jpg?v=1780503988",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-pro-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/blade-mini-pro-ekfv-black/",
    "specsChecked": "2026-10-30"
  },
  {
    "id": "teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
    "brand": "teverun",
    "model": "Teverun Blade Mini Ultra Gelb",
    "fullTitle": "Teverun Blade Mini Ultra 60V 27Ah Akku, 2x1000W (Gelb)",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Blade Mini Ultra: 60V 27Ah Batterie (1620Wh), 1000W*2 Bürstenloser Motor (3360W Peak).",
    "price": {
      "chf": 1159,
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 29,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (mit Schlauch, 10x3.00-6)",
      "brakes": "Hydraulische Scheibenbremsen",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": true,
      "climbPct": 58,
      "suspension": "Stahlfederung",
      "display": "Integriertes LCD-Display mit NFC-Leser"
    },
    "variants": [
      {
        "id": "56202189340998",
        "name": "Schnelladegerät: Nein",
        "note": "Referenzpreis 1159 CHF, laut E-Rydez zurzeit nicht lieferbar"
      },
      {
        "id": "56202189373766",
        "name": "Schnelladegerät: Ja",
        "note": "Referenzpreis 1259 CHF, laut E-Rydez zurzeit nicht lieferbar"
      }
    ],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://teverun-europe.com/product/blade-mini-ultra-yellow/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/IMGL9195.png?v=1770899035",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/IMGL91d67.png?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_12_BLADE-MINI-7-1.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_13_BLADE-MINI-6-1.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_14_BLADE-MINI-3-2.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_16_BLADE-MINI-9-1.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_17_BLADE-MINI-8.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_15_BLADE-MINI-kopie.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_21_2.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_22_4.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_23_3.jpg?v=1770899213",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/blade-mini-ultra-yellow/",
    "specsChecked": "2026-10-30"
  },
  {
    "id": "teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
    "brand": "teverun",
    "model": "Teverun Blade Mini Ultra Schwarz",
    "fullTitle": "Teverun Blade Mini Ultra 60V 27Ah Akku, 2x1000W (Schwarz)",
    "category": "escooter",
    "segment": "offroad",
    "summary": "Teverun Blade Mini Ultra: 60V 27Ah Batterie (1620Wh), 1000W*2 Bürstenloser Motor (3360W Peak).",
    "price": {
      "chf": 1159,
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 30,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (mit Schlauch, 10x3.00-6)",
      "brakes": "Hydraulische Scheibenbremsen",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": true,
      "climbPct": 58,
      "suspension": "Stahlfederung",
      "display": "Integriertes LCD-Display mit NFC-Leser"
    },
    "variants": [
      {
        "id": "56202167058758",
        "name": "Schnelladegerät: Nein",
        "note": "Referenzpreis 1159 CHF, laut E-Rydez zurzeit nicht lieferbar"
      },
      {
        "id": "56202167025990",
        "name": "Schnelladegerät: Ja",
        "note": "Referenzpreis 1259 CHF, laut E-Rydez zurzeit nicht lieferbar"
      }
    ],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://teverun-europe.com/product/blade-mini-ultra-black/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_13_f0f6052794a7f134bda51825b7f45170.jpg?v=1770903883",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_12_d0d5ecc2e622fd74bbb708248c32ab45.jpg?v=1770900305",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_14_b2ebaab00a611ed78f40884d631378ea.jpg?v=1770897609",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_15_f5225c3f69f98058393043118191fabb.jpg?v=1770897608",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_16_71169b54f1db526a01797eb8f23bcbf1.jpg?v=1770897609",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_17_c7a5dbe9a216ee4556283ecc19780dcd.jpg?v=1770897609",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_26_9-0-1.jpg?v=1770897773",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_28_12-0-1.jpg?v=1770897800",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/imgi_30_0-0-1.jpg?v=1770897703",
        "page": "https://e-rydez.ch/products/teverun-blade-mini-ultra-60v-27ah-akku-1000w-2",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/blade-mini-ultra-black/",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "swiss-scoots",
      "source": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
      "checked": "2026-10-30",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
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
      "weightKg": 32.8,
      "maxLoadKg": 150,
      "ekfv": true,
      "tires": "10\" Luftreifen (Schlauchlos, 10x3.00-6)",
      "brakes": "Hydraulische Scheibenbremsen",
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true,
      "chargeHours": "4-6",
      "suspension": "Stahlfederung, mit Lenkungsdämpfer",
      "display": "Integriertes LCD-Display"
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
    "chLegal": "Strassenzugelassen Schweiz (Herstellerangabe, 20 km/h-Version)",
    "streetLegalCH": true,
    "sources": [
      {
        "url": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "checked": "2026-10-30",
        "note": "Händlerseite swiss-scoots.ch (Preis, Akku, Motor, Reichweite, Lieferstatus, Zulassungsangabe)"
      },
      {
        "url": "https://teverun-europe.com/product/blade-mini-ultra-ekfv-yellow/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/e824748ee501d78740e17a45ec18af65.jpg?v=1782660686",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/17d926d7b0963dfbfe8f30ca6931e73a_1.jpg?v=1782660664",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/6e81fb0aeee92864ae198856e7519e15_1.jpg?v=1782660664",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/45de5f5be08a6eef0c6531a4356e49d2-1_1.jpg?v=1782660664",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/1915ddf9db87652e67480d2885a2bfa5-1_1.jpg?v=1782660664",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/a78a2f86b4cab35605e9c1abace25a1d-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/082f84e4929b38434b4ccf349a36c78a-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/15bd7f45f731e0906c2c4e3bc01f745b-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/76862af3d83560b929bd36e958a6b02f-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/d2896d60aefc71b0482fbc8f011f6bdf_1.jpg?v=1782660664",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/809830d4d26bbe45019af8cdbe0daa99_1.jpg?v=1782660664",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/5c761af754a26f46590a5e2f1880e5ff-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/f9bacb279b61c3184d0dec2430a7b856-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/4b2c12796353a1a0400ac3852e22d399-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/1b690f1e1de9989bd23e630d5059f38d-1_1.jpg?v=1782660664",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/049a65f85d8b067abe9fc2c6f0b1533b-1_1.jpg?v=1782660665",
        "page": "https://swiss-scoots.ch/products/teverun-blade-mini-ultra-ch-edition",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/blade-mini-ultra-ekfv-yellow/",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-gt-ii",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 42,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "11\" Luftreifen (Schlauchlos, pannensicher mit Gel-Schicht, 90/65-6.5)",
      "brakes": "Hydraulische Scheibenbremsen",
      "ip": "IP67",
      "foldable": true,
      "abe": false,
      "limited": false,
      "suspension": "Stahlfederung, mit Lenkungsdämpfer",
      "display": "Integriertes LCD-Display im Lenker"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://teverun-europe.com/product/teverun-blade-gt-ii-60-v-26-ah-2x1500-w-5000-w/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/de0f890d98c6766a89b384e93d96083e.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/0873de0c971529064f697687571b2f32.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/SYxEIkeCZiVjSmBD.webp?v=1784891388",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/qxEVoYjYMsoxwgdO.webp?v=1784891388",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/180563e1f1500fa87092444427fff823.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/36f970a36595534ae1fa6ead5cdd8f80.jpg?v=1785103090",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7c9ddbea563402b3290079cafbecc35f.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/d6b7cc9a87e08a62f9c1d4568d1daab8.jpg?v=1785103089",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/f5492b61aaaf96ec1cff28eacb73a3e2.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/517b4241839b00d33d6b4ad870edbdd8.jpg?v=1785103089",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/bb910413edfbb7ac4ca4d25e7f2150d7.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7f8a28b53c70d0c154f86f1e23b9d215.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2b88f95adfa5ffb953fe38209d8bf08f.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/09c61ba26864996676763084d10de901.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/teverun-blade-gt-ii-60-v-26-ah-2x1500-w-5000-w/",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 36,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "10\" Luftreifen (Schlauchlos, pannensicher mit Gel-Schicht, 10x3.00-6)",
      "brakes": "Hydraulische Scheibenbremsen",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": false,
      "suspension": "KKE Hydraulikfederung, zweifach einstellbar",
      "display": "Neues Farb-TFT-Display"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://teverun-europe.com/product/fighter-mini-pro-2/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/bYYkubzcEbwILsEy.jpg?v=1784891414",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/ef9fd01b297a6beb4da72590261137bd-1.jpg?v=1785103323",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/PhnWdgWXpjqIPOTc.jpg?v=1784891414",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/htvVZqwDisRasNoR.jpg?v=1784891414",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/pKXdcIdhAZAUureT.jpg?v=1784891414",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/lZmHLhAGgkAsKliZ.jpg?v=1784891414",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/34f11119e0f7fb703486fb34eef6ae39-1.jpg?v=1785103415",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/bf3a0188bd8443f8b7c4c7a59ed834b2-1.jpg?v=1785103415",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/c251ecde36d3868da7094fd69424202d-1.jpg?v=1785103415",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/262bb7fe64b0c20baa22e6b979700856-1.jpg?v=1785103416",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/4d69201191b01cfef651cf5063b2ea78-1.jpg?v=1785103415",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/4da2f6eae11559efc5a91722fb1b3f61-1.jpg?v=1785103417",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/61b98887f0ebf12656a55167f162a49c-1.jpg?v=1785103417",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/8239f2a137e33ce8643f237b3fcd8f4c-1.jpg?v=1785103418",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/8c048bf5b78cae234ae1d9fe11bbfea2-1.jpg?v=1785103416",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/bd53b5096d3d4a200f2404eab13e90ca-1.jpg?v=1785103417",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/caee6d114657f159d5b9358e112a71eb-1.jpg?v=1785103417",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/cbed8d11d203078d30d59eedf609a531-1.jpg?v=1785103416",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/d94b88db085729ce63f25d901a13343a-1.jpg?v=1785103416",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/f2951d7de8f50aac8b108bb22160496f-1.jpg?v=1785103416",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/f64f03695de342db5f8a74cb8824dd1b-1.jpg?v=1785103416",
        "page": "https://e-rydez.ch/products/teverun-fighter-mini-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/fighter-mini-pro-2/",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 44,
      "maxLoadKg": 120,
      "ekfv": false,
      "tires": "11\" Luftreifen (Schlauchlos, pannensicher mit Gel-Schicht, 90/65-6.5)",
      "brakes": "Hydraulische Scheibenbremsen",
      "ip": "IP67",
      "foldable": true,
      "abe": false,
      "limited": false,
      "suspension": "KKE Hydraulikfederung, zweifach einstellbar, mit Lenkungsdämpfer",
      "display": "Integriertes LCD-Display"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://teverun-europe.com/product/blade-gt-ii/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/de0f890d98c6766a89b384e93d96083e.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/0873de0c971529064f697687571b2f32.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/BNSpmyIspYsTlBxc.jpg?v=1784891400",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/180563e1f1500fa87092444427fff823.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/f5492b61aaaf96ec1cff28eacb73a3e2.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7c9ddbea563402b3290079cafbecc35f.jpg?v=1785103088",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/JFLyRbosPkOVwUQM.jpg?v=1784891400",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/d6b7cc9a87e08a62f9c1d4568d1daab8.jpg?v=1785103089",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/517b4241839b00d33d6b4ad870edbdd8.jpg?v=1785103089",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/36f970a36595534ae1fa6ead5cdd8f80.jpg?v=1785103090",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/09c61ba26864996676763084d10de901.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2b88f95adfa5ffb953fe38209d8bf08f.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7f8a28b53c70d0c154f86f1e23b9d215.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/bb910413edfbb7ac4ca4d25e7f2150d7.jpg?v=1785103087",
        "page": "https://e-rydez.ch/products/teverun-blade-gt-ii-plus",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/blade-gt-ii/",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "swiss-scoots",
      "source": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
      "checked": "2026-10-30",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
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
      "batteryAh": 30.8,
      "batteryWh": 1602,
      "rangeKm": "100",
      "speedKmh": 20,
      "weightKg": 35.6,
      "maxLoadKg": 150,
      "ekfv": true,
      "tires": "10\" Luftreifen (Schlauchlos, pannensicher, 10x3.00-6)",
      "brakes": "Hydraulische Scheibenbremsen mit elektronischem Bremsmanagement",
      "ip": null,
      "foldable": null,
      "abe": false,
      "limited": true,
      "suspension": "KKE Hydraulikfederung, zweifach einstellbar",
      "display": "Integriertes TFT-Display"
    },
    "variants": [],
    "chLegal": "Strassenzugelassen Schweiz (Herstellerangabe, 20 km/h-Version)",
    "streetLegalCH": true,
    "sources": [
      {
        "url": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "checked": "2026-10-30",
        "note": "Händlerseite swiss-scoots.ch (Preis, Akku, Motor, Reichweite, Lieferstatus, Zulassungsangabe)"
      },
      {
        "url": "https://teverun-europe.com/product/fighter-mini-pro-ekfv-2/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/30b27fed82f764ab1c976052059af735.jpg?v=1783729436",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/f18b960d30a294babc1b645deb73916c.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/2bdadf6e0fbaa8f0728ebcdf7c659aed.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/e025c5f209c0d0db0a65a86409dbd0de.jpg?v=1783729436",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/e96bb5753464902dd9cfc874a0767662.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/f81e27d9312362c7b02a28b56d25bc61.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/780561fca407a514ef8d8708815b65d9.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/cce221adb7775c1a956b413a096b7b9a.jpg?v=1783729438",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/bf323f89481073b1a49f0f7e9514fbd8.jpg?v=1783729438",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/40947349ab78bc1055a11d1111136939.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/e04c5b9c28f930a60808ff3ca4a0f9c7.jpg?v=1783729438",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/6989cc00c628169da7d9121404550543.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/81867fdee1d27c160aebfbc4c94e78d6.jpg?v=1783729436",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/3fcb0343a3de4c06b5f6ece2355f270e.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/576599cbbf3a04ab07e244cbce4ff6fc.jpg?v=1783729436",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/1013/3779/2899/files/8467fab1a464970f81c1768ebe0d2603.jpg?v=1783729437",
        "page": "https://swiss-scoots.ch/products/teverun-fighter-mini-pro-ekfv",
        "source": "swiss-scoots.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-10-30"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/fighter-mini-pro-ekfv-2/",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 68,
      "maxLoadKg": 150,
      "ekfv": false,
      "tires": "13\" Luftreifen (Schlauchlos, 120/60-7)",
      "brakes": "Hydraulische 4-Kolben-Scheibenbremsen vorne und hinten",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": true,
      "climbPct": 84,
      "suspension": "KKE Hydraulikfederung, zweifach einstellbar, mit einstellbarem Lenkungsdämpfer",
      "lights": "Helles, verstellbares Frontlicht; Beleuchtung per App einstellbar",
      "display": "4\" TFT-Display mit NFC-Leser"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://teverun-europe.com/product/supreme-7260r/",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/sNKqDeThigdYQHlK.webp?v=1784891427",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/bBsQmuOQhLBOyYzG.jpg?v=1784891427",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/fOuCgWaQQKYkEMbB.png?v=1784891428",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/17ef44ad32f6824cf7e024198ca15723.jpg?v=1785102928",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/1c3c565ea92beb6411b92f5ea2f123d9.jpg?v=1785102927",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2834f9af2ad1c682d094cf5e766f983c.jpg?v=1785102926",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/348ea9cf047470be1f06c1e27418ee0a.jpg?v=1785102926",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/52f39183bf5e1eac5d5169aa766f0b9d.jpg?v=1785102926",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/6e56e494f5f45863f08828b6a150b2b8.jpg?v=1785102927",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/9209f74366adace403b7d468936d3e15.jpg?v=1785102926",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/bfe9c97f1957fa457705734589293af0.jpg?v=1785102926",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/db866817a5bd8cce6b93d17f6137b8a4.jpg?v=1785102926",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/f57d5a0c0e52e9d2f819af3950082518.jpg?v=1785102926",
        "page": "https://e-rydez.ch/products/teverun-fighter-supreme-7260r",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://teverun-europe.com/product/supreme-7260r/",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
      "tires": "10\" Luftreifen 10x3.0-6.5 (Schlauchlos)",
      "brakes": "Hydraulische NUTT-Scheibenbremsen vorne und hinten, ABS & EBS (elektronisch)",
      "ip": null,
      "foldable": true,
      "abe": false,
      "limited": false,
      "climbPct": 70,
      "suspension": "Federung vorne und hinten mit austauschbaren Federpatronen (Cartridge)",
      "display": "EY4 LCD-Display mit Bluetooth (Verbindung zur Dualtron-App)"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.minimotors.com/product_detail.html?code=1844651270416556034",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/dualtron-victor-ltd-front-clean.png?v=1792753657",
        "page": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/dualtron-victor-ltd-rear-clean.png?v=1792753713",
        "page": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/dualtron-victor-ltd-dgt-3.jpg?v=1792752422",
        "page": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/dualtron-victor-ltd-dgt-4.jpg?v=1792752429",
        "page": "https://e-rydez.ch/products/dualtron-victor-ltd-dgt-60v-37-1ah-samsung",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.minimotors.com/product_detail.html?code=1844651270416556034",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/rovoron-r7",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 48.7,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": "11\" Luftreifen (Schlauchlos), vorne und hinten",
      "brakes": "Scheibenbremsen vorne und hinten (R7 Pro: hydraulische NUTT-Scheibenbremsen)",
      "ip": "IPX6",
      "foldable": true,
      "abe": false,
      "limited": false,
      "climbPct": 36,
      "suspension": "Einstellbare Federung mit Stahlfedern vorne und hinten",
      "lights": "Beleuchtung und Blinker",
      "display": "NEW EY3 Display"
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.rovoron.com/shop/rovoronr760v-trottinette-electrique-rovoron-r7-v2-60v-28ah-13053",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/PPzSIGlDqwrWpweM.png?v=1784892310",
        "page": "https://e-rydez.ch/products/rovoron-r7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/UfufIoazSUeMIeyU.jpg?v=1784892309",
        "page": "https://e-rydez.ch/products/rovoron-r7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/AFOBhsTeJrgPyNFh.webp?v=1784892309",
        "page": "https://e-rydez.ch/products/rovoron-r7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/PHybtNEWuhAZfhMu.jpg?v=1784892309",
        "page": "https://e-rydez.ch/products/rovoron-r7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/ROVORON-R7-FOLDED.webp?v=1785102769",
        "page": "https://e-rydez.ch/products/rovoron-r7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.rovoron.com/shop/rovoronr760v-trottinette-electrique-rovoron-r7-v2-60v-28ah-13053",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/rovoron-s7",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "Vorbestellung, voraussichtlich 16. November 2026",
      "checked": "2026-11-06"
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
      "weightKg": 49.5,
      "maxLoadKg": null,
      "ekfv": false,
      "tires": "11\" Luftreifen (Schlauchlos), vorne und hinten",
      "brakes": "Hydraulische Scheibenbremsen vorne und hinten (4-Kolben)",
      "ip": "IPX5",
      "foldable": true,
      "abe": false,
      "limited": false,
      "climbPct": 76,
      "suspension": "Federung mit austauschbaren Kartuschen vorne und hinten",
      "lights": "Blinker (Beleuchtung nicht näher spezifiziert)",
      "display": "EY4 LCD Display mit Bluetooth"
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/rovoron-s7",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.rovoron.com/shop/rovorons784v37a-trottinette-electrique-rovoron-s7-84v-37ah-15665",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Rovoron-S7-Electric-Scooter-5.webp?v=1785101748",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/tpythoCgqSlvOQXD.jpg?v=1784892322",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Rovoron-S7-Electric-Scooter-1.webp?v=1785102703",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Rovoron-S7-Electric-Scooter-9.webp?v=1785102703",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/GefXqSoHkKkQdDoS.jpg?v=1784892322",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/ogsYRHZVwiTlvgMb.jpg?v=1784892322",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Rovoron-S7-Electric-Scooter-10.webp?v=1785102703",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Rovoron-S7-Electric-Scooter-8.webp?v=1785102703",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/PZpeajQvKRgdvJfD.jpg?v=1784892322",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Rovoron-S7-Electric-Scooter-2.webp?v=1785102703",
        "page": "https://e-rydez.ch/products/rovoron-s7",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.rovoron.com/shop/rovorons784v37a-trottinette-electrique-rovoron-s7-84v-37ah-15665",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-l1-max",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_54d6fce6-c179-4490-b467-0dc20034c508.jpg?v=1774911728",
        "page": "https://e-rydez.ch/products/ausom-l1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_25d015a7-b08d-42eb-b52c-82b43258241b.jpg?v=1774911728",
        "page": "https://e-rydez.ch/products/ausom-l1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_70f08626-39e3-4662-af1b-b1d6ffd42d92.jpg?v=1774911728",
        "page": "https://e-rydez.ch/products/ausom-l1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_2862d35a-cd49-47a2-86f5-5f0fd0f6e5e6.jpg?v=1774911728",
        "page": "https://e-rydez.ch/products/ausom-l1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_9dc7ed6b-4df1-4c65-a31b-c91ac672701e.jpg?v=1774911728",
        "page": "https://e-rydez.ch/products/ausom-l1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_c127f4f1-43bc-4914-9f32-ae873a0934ff.jpg?v=1774911728",
        "page": "https://e-rydez.ch/products/ausom-l1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_b32cf406-e9ea-4ec0-b0a8-b2785b6c4687.jpg?v=1774911748",
        "page": "https://e-rydez.ch/products/ausom-l1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 33.3,
      "maxLoadKg": 130,
      "ekfv": false,
      "tires": "10\" x 3\" Luftreifen (Schlauchlos)",
      "brakes": "E-ABS + Scheibenbremsen vorne und hinten",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "5.5-12",
      "climbPct": 34,
      "suspension": "ShocFree Doppel-Schwingarm-Federung, einstellbar",
      "lights": "LED-Scheinwerfer, Rück-/Bremslicht, Ambientebeleuchtung, Blinker",
      "display": "LCD-Display 4.5\""
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.ausom.com/products/ausom-l2-max-dual-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_91413d2e-4746-43fc-bc2d-fea85e842d82.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_125b7dbd-5938-4f76-b948-87b6b62bcc83.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_d30dd528-7720-48f0-96c7-d334c9a59b0d.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_137d9198-692a-4278-9ed6-954f20c5e97c.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_91cb1c27-aea1-4184-8fbc-c15b1c23a181.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_630b8a29-37e9-4339-a393-c8be6283f151.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_7512d0d3-fd41-495e-92fb-8f50b6d72754.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_b50ea955-7d2a-4ced-8e6c-99a188368cb8.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_5cb472d9-4c77-4c5c-8a4e-656be4563bc2.jpg?v=1774910940",
        "page": "https://e-rydez.ch/products/ausom-l2-max-dual-motor",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.ausom.com/products/ausom-l2-max-dual-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-dt2-pro",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
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
      "weightKg": 33.5,
      "maxLoadKg": 135,
      "ekfv": false,
      "tires": "10\" x 3\" Luftreifen (Schlauchlos)",
      "brakes": "E-ABS + hydraulische Scheibenbremsen vorne und hinten",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "6-12.5",
      "climbPct": 36,
      "suspension": "Doppel-Schwingarm-Federung vorne und hinten",
      "lights": "LED-Scheinwerfer, Rücklicht und seitliche Blinker",
      "display": "LCD-Display 4.5\""
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/ausom-dt2-pro",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.ausom.com/products/ausom-dt2-pro-e-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_56388d64-4969-46b6-9a80-e77fe172df43.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_41d7b5cd-e18f-4463-a9bd-642b7a4d2982.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_c0a5b94c-e299-4ffa-bca9-148519c6f645.jpg?v=1774911348",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_26681eff-8082-4873-9740-5c6bde70e620.jpg?v=1774911348",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_cce260c7-2262-4062-ab12-7698320f0635.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_99db004f-584e-41d4-99f8-0299446f914b.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_3fe72a7a-5b08-48d9-a244-a80d6fa23367.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_976cfcab-c5b9-4a70-a825-891b82ca81b9.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_848e5f85-6cea-4b6c-89f2-8ccc521ddc5e.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_36b859bf-e978-46db-bef6-81f5bcbcd847.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_8d0c3a71-93d5-40a9-8542-68fb19cc570f.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_b716d684-b867-4490-8823-21ff36dcd231.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_0a3d66cc-77dc-459b-96a8-0d113f758268.jpg?v=1774911349",
        "page": "https://e-rydez.ch/products/ausom-dt2-pro",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.ausom.com/products/ausom-dt2-pro-e-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/ausom-f1-max",
      "checked": "2026-11-06",
      "note": "Referenzpreis, Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": false
    },
    "lieferbarkeit": {
      "status": "zurzeit nicht lieferbar",
      "checked": "2026-11-06"
    },
    "specs": {
      "motorW": 2800,
      "peakW": 3840,
      "motors": 2,
      "batteryV": 60,
      "batteryAh": 20.8,
      "batteryWh": 1248,
      "rangeKm": "90-100",
      "speedKmh": 72,
      "weightKg": 36,
      "maxLoadKg": 150,
      "ekfv": false,
      "tires": "10\" x 3\" Luftreifen (All-Terrain)",
      "brakes": "E-ABS + hydraulische Scheibenbremsen vorne und hinten",
      "ip": "IP54",
      "foldable": true,
      "abe": false,
      "limited": false,
      "chargeHours": "6-12",
      "climbPct": 38,
      "suspension": "Schwingarm-Federung mit vier unabhängigen Federn",
      "lights": "LED-Scheinwerfer, Rücklicht und seitliche Blinker",
      "display": "LCD-Display 4.5\""
    },
    "variants": [],
    "chLegal": "Nicht strassenzugelassen in der Schweiz, für Privatgelände",
    "streetLegalCH": false,
    "sources": [
      {
        "url": "https://e-rydez.ch/products/ausom-f1-max",
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      },
      {
        "url": "https://www.ausom.com/products/ausom-f1-max-electric-scooter",
        "checked": "2026-10-30",
        "note": "Herstellerseite (technische Daten)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_1d0d62c1-456d-4b8e-927f-1bd52b2a5370.jpg?v=1774912107",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_9a41e13f-202f-4edd-bd21-8f0e8b4f1ed6.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_7c8b6e98-cad7-4d1a-ad81-22d9da9edf22.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_bf02f2bf-24d0-49da-a39e-46443212a3f9.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_f28ad7f0-3ff8-4589-8c0c-15f454c396f5.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_79514c37-a5ec-4f7a-9f9e-9503d9dac300.jpg?v=1774912107",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_29c69f9e-c7bc-473c-ad2f-49b28d39abbd.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_50f9a9ef-fce3-437a-970a-f3c9d3f97e96.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_7e2c680d-ae24-41d6-9bc3-e505bd5bff18.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_a67949a5-a634-471e-bc58-30063dafb513.jpg?v=1774912107",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_08456f2d-fd0f-4a6c-a66e-913b1d252f09.jpg?v=1774912107",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/rn-image_picker_lib_temp_4fe9b6ac-75d8-4f66-b9ff-b35bb94e287c.jpg?v=1774912108",
        "page": "https://e-rydez.ch/products/ausom-f1-max",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ],
    "specsSource": "https://www.ausom.com/products/ausom-f1-max-electric-scooter",
    "specsChecked": "2026-10-30"
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
        "name": "Batterie -V3 Version",
        "note": "Referenzpreis 304 CHF"
      },
      {
        "id": "56980991148358",
        "name": "Batterie -V4 Version",
        "note": "Referenzpreis 314 CHF"
      },
      {
        "id": "56980991443270",
        "name": "Display-Armaturenbrett -V3 Version (TFM13 -FEIMI-4)",
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
        "name": "Controller -SZ-V4 Version (blauer Anschluss) (Kompatibel mit QS Version)",
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/8._EU24-G2Pro.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/6.EU24-G2pro_Front_Wheel_5a571496-2ed8-4af9-ba7e-9dabb1d387fb.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7.EU24-G2Pro.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2PVMPMotor_1f4c8088-981e-417a-b111-76c528f889fd.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/EU24-G2pro_d3369000-cd07-4c0a-b0bc-74dd77597c91.png?v=1784504766",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2_Pro_Front_Brake_Caliper_Clamp_1_140e7182-1735-4596-a71a-255e0f195aa2.png?v=1784504764",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2_pro_Battery_f9be9942-10d9-4855-9b83-b13c63660bd9.png?v=1784504764",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/C_236cbedc-aa5e-43b0-a12f-686cfcfbc4f9.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/D_6f40b664-4202-4ae4-9697-96e64a6e1bf0.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/E_d4b8b736-9859-4b79-81fd-9ec33146807c.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2PVMPDisplayDashboard_0a3dff1b-55ed-499d-bd40-b59a2fee47f4.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2_pro_Controller_-B_version_a6c44a01-9063-4791-90d3-fd4ce6f7bb69.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/EU24-G2pro_SZ_321faa90-4cab-4a12-b37b-e93f5361d273.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2PVMPController_4aefa220-28e9-43ee-8d1b-39ea1d318d17.png?v=1784504765",
        "page": "https://e-rydez.ch/products/kukirin-g2-pro-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
        "name": "Display-Armaturenbrett (5 Pin) -C Version (TFM13 -FEIMI-4)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980988657990",
        "name": "Display-Armaturenbrett -D Version (TFM13-FEIMI-16)",
        "note": "Referenzpreis 64 CHF"
      },
      {
        "id": "56980988690758",
        "name": "Display-Armaturenbrett (Farbdisplay) -E Version",
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2max_26a3e322-af3c-43a3-a234-18794ab04cee.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2.G2max_3161dbd7-a2ad-42be-9895-6a7bf26dbcc1.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/40f1b848c6add8f222712d4f5d758ed9_ffb60cb9-d2aa-4127-bdc9-2f4b07146d3e.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/AAA-G2maxBrake_Disc_1_pc_a79a18b9-8e9f-45ad-80b6-c624cca09b4f.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Battery_9fdec175-3b18-441e-87ae-03ae27f5b40a.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/B_de579780-20b9-49c1-80e8-d539fe800b25.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/C_e314c927-775c-4bdf-ac13-34b0ca286314.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/D_68c6b724-a59b-4211-b97a-2aeee96a7b6e.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/E_60d824a4-310a-49e6-8cf3-eaf6cfea9727.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2max_A_420f9af9-f420-4e6e-8f44-6137fad92b5b.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2max_B.png?v=1784504745",
        "page": "https://e-rydez.ch/products/kukirin-g2-max-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
    ]
  },
  {
    "id": "kukirin-g2-master-ersatzteile",
    "brand": "kukirin",
    "model": "KuKirin G2 Master Ersatzteile",
    "fullTitle": "KuKirin G2 Master Ersatzteile",
    "category": "zubehoer",
    "segment": null,
    "summary": "Ersatzteile für KuKirin G2 Master: Pneumatischer Reifen (Stück) -2024 Version, Vorderer Motor (ohne Innen- und Aussenreifen) -A version (dreieckiger Anschluss), Hinterradmotor (ohne Schlauch und Reifen) -A Version (Dreiecksanschluss), Schlauchloser Reifen -2025 Version und mehr.",
    "price": {
      "chf": 30,
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
        "name": "Vorderer Motor (ohne Innen- und Aussenreifen) -A Version (dreieckiger Anschluss)",
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
        "name": "Vorderer Motor -B Version (gerader Anschluss)",
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Master_A_be836527-ccaa-4cd6-90f0-0d633fac7d54.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G3_pro_Tires_pc_1a8c830e-46dd-4a4b-b1d5-94318632056e.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Master_A_d95b9d67-832a-44c9-8916-ab33d5e9e244.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/1_1a65cebf-1348-49cc-a3cd-27d0bf9570c3.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Master_B_460aa999-8784-4ba1-972c-071b7d0fde63.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Master_B_2e9978b4-0d14-47f4-943d-daae056859df.png?v=1784504728",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/7.Brake_Disc_1pc.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Master_A_a787dcd1-26bf-4317-bd8d-093d8d050540.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Master_B_66b8391b-056f-4671-89d8-ec23c4572d31.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Display_Dashboard_-A_version_TFM13-FEIMI-3.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/Display_Dashboard_-B_version_TFM13_-FEIMI-11.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Master_C_70368816-ce2d-4428-8319-00ebcb5ac638.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/1._Controller_-A_version.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/2._B.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2master_C_1fc94138-ae52-45f1-a0b4-f8afb9273c87.png?v=1784504727",
        "page": "https://e-rydez.ch/products/kukirin-g2-master-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
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
        "name": "Display-Armaturenbrett-Kit -B Version (Kompatibel mit A Version)",
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Motor_795f4010-23ef-4d3c-b43b-9f1c5b8bbc6b.png?v=1784504708",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_A_c2412c42-615f-411d-a37a-7b1f066699d3.png?v=1784504709",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_B_3c23d692-490e-41dc-82e3-22bb0cca3b35.png?v=1784504708",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2FrontWheel_eadd12cb-c102-4519-963c-131dc755a39c.png?v=1784504708",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/eeb9f9b9d075ebdec43c88e9eb4c60f9_84751126-a334-4fc7-ae69-f549194b83d0.png?v=1784504709",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2_A_jpg.png?v=1784504708",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_AB_7d5b0acf-aefa-4969-901e-9fa5a05922ed.png?v=1784504709",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G2Controller_dd9b1a63-6dbc-467f-97f0-147447a6b7cc.png?v=1784504708",
        "page": "https://e-rydez.ch/products/kukirin-g2-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
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
      "kind": "referenz",
      "basis": "e-rydez",
      "source": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
      "checked": "2026-11-06",
      "note": "Referenzpreis ab (günstigste Ausführung), Stand Prüfdatum. Kein N SCOOTS-Preis.",
      "from": true
    },
    "lieferbarkeit": {
      "status": "lieferbar",
      "checked": "2026-11-06"
    },
    "specs": {},
    "variants": [
      {
        "id": "56980995834182",
        "name": "Bremsscheibe (140mm) -A Version",
        "note": "Referenzpreis 34 CHF"
      },
      {
        "id": "56980995866950",
        "name": "Bremsscheibe (160mm) -B Version",
        "note": "Referenzpreis 34 CHF"
      },
      {
        "id": "56980995998022",
        "name": "Vorderrad (11.8 mm) -B Version",
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
        "name": "Batterie -C Version",
        "note": "Referenzpreis 494 CHF"
      },
      {
        "id": "56980996489542",
        "name": "Display-Armaturenbrett-Kit -B Version (Kompatibel mit A Version)",
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
        "checked": "2026-11-06",
        "note": "Händlerseite e-rydez.ch (Preis, Akku, Motor, Reichweite, Lieferstatus)"
      }
    ],
    "images": [],
    "supplierPhotos": [
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_Motor_09a2ff78-886e-4385-b2c2-b1d0c7c1f729.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_A_a3042f6e-7f0f-4093-bdcc-978d6d32dbff.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_B_964ecd16-b448-4230-892c-3120679480a1.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_Front_Wheel-B_8c8719f2-4e06-452c-8b5c-7d86169887f7.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_Tubeless_11d4fc7e-a468-43f0-b56e-be9e0b4ae181.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_A_e6efb817-bf4f-4775-9d93-86b011c97d68.png?v=1784504821",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_B_cba37fc9-398c-4bdd-bb90-a2b2168f9839.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_61136e7a-bf19-475d-bca2-6fdf982dd596.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_7add7d0e-983b-4425-990a-24ba4b08cca9.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_88c7d677-f489-4add-a446-78cade96e1b3.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      },
      {
        "url": "https://cdn.shopify.com/s/files/1/0953/2840/3782/files/G4_cd74143f-15c5-4c76-997e-03a0354b28ba.png?v=1784504820",
        "page": "https://e-rydez.ch/products/kukirin-g4-ersatzteile",
        "source": "e-rydez.ch",
        "status": "Freigabe ausstehend",
        "checked": "2026-11-06"
      }
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
