# Status des Prototyps

Stand: 2026-10-30

## Gestaltungskonzept (kurz)

- **Identität (Stand 2026-10-30):** Schwarz (#0b0b0d) für Header, Hero, Showcase und Footer, Weiss für Produktflächen, Signalrot (#e10600)
  als einziger Akzent. Wortmarke: kursives rotes «N», daneben «SCOOTS» in Weiss. Positionierung «Premium Scooter».
  Display-Schrift Barlow Condensed, Inter für Text.
- **Immersion:** Elemente kommen beim Scrollen aus der Tiefe nach vorne (perspektivischer Reveal), Parallax auf Fotos, rotes Laufband,
  Marken-Tabs mit Direktwechsel, Showcase-Bühne (sticky), in der drei Modelle beim Scrollen von hinten nach vorne wechseln.
  Alles respektiert `prefers-reduced-motion` (dann statisch gestapelt).
- **Aufbau Startseite:** dunkler Hero mit Claim «Dein nächster Ride.», Vertrauensleiste mit belegbaren Aussagen, zwei Kategorie-Einstiege,
  drei Fahrprofile (Alltag, Lange Strecken, Gelände) als Direktlinks in den gefilterten Katalog, ausgewählte Modelle, Marken-Kacheln mit
  «Referenz ab» nur bei belegtem Preis, Kaufhilfe. Struktur-Anregungen aus Referenz-Shops wurden in eigener Gestaltung umgesetzt; Logos,
  Texte, Fotos und Layouts wurden nicht übernommen.
- **Bewegung:** Hover-/Fokus-Übergänge, Toast, Parallax und Einblenden beim Scrollen, stummes Hero-Video mit Pause-Taste. Alles respektiert `prefers-reduced-motion`; nichts blockiert das Scrollen.

## Funktioniert (Browser-geprüft, 93/93 und 48/48 Prüfungen bestanden bei 390 px und 1440 px)

- Startseite mit Kategorie-Einstiegen, Fahrprofilen, Modellen, Marken, Kaufhilfe
- Katalog: Suche, Kategorie, Marke (Mehrfach), Einsatz, Preisfilter, 6 Sortierungen, Trefferzahl, aktive Filter-Chips, Reset,
  Leerzustand mit Hinweis; Marken-Einstieg aktiviert den Filter; Zustand in der URL
- Produktdetail: Galerie mit Bildwechsel, Status-Tags, Preisblock mit Quelle, Varianten, Demo-Warenkorb, Vergleich, technische Daten,
  Reichweiten-Hinweis, Quellen mit Prüfdatum, ungültige ID → Fehlerseite
- Vergleich: max. 3 Modelle, Hinzufügen per Dialog, Entfernen, bester Wert markiert, mobil horizontal scrollbar
- Warenkorb: hinzufügen, Menge ±/Eingabe, entfernen, leeren, Zwischensumme nur über Referenzpreise, offene Preise separat gezählt,
  Zustand überlebt Neuladen (localStorage mit Fallback), Kassen-Hinweis statt Checkout
- E-Dirtbikes: Bereich «Sortiment in Vorbereitung» ohne erfundene Produkte
- Dialoge: Escape schliesst, Fokus kehrt zum Auslöser zurück; Skip-Link; sichtbarer Fokus; keine Konsolenfehler; kein horizontaler Überlauf

## Foto-, Video- und Bewegungsschicht (Browser-geprüft mit Testbildern, 42/42)

- Medien-Manifest mit Slots für Hero-Foto und -Video, drei Fahrprofile, drei Story-Bilder, sechs Marken, Dirtbikes und Produktfotos je Modell
- Fehlende oder nicht freigegebene Dateien fallen automatisch auf gekennzeichnete Platzhalter zurück; Symbolbilder werden beschriftet, Credits angezeigt
- Hero-Video stumm im Hintergrund mit Pause/Play-Button; bei `prefers-reduced-motion` startet es nicht
- Parallax: Fotos bewegen sich beim Scrollen langsamer als die Seite (Hero, Fahrprofile, Story, Dirtbikes); Sektionen blenden sanft ein; alles im Ruhezustand sichtbar
- Produktkarten mit Wechselbild beim Zeigen, Produktgalerie mit Lightbox (Pfeiltasten, Escape, Fokusrückgabe)
- **Fotos eingebaut:** 114 Produktfotos von e-rydez.ch (Freigabe ausstehend, sichtbar gekennzeichnet), Hero mit grossem Produktbild, sechs frei lizenzierte Stimmungsfotos von Wikimedia Commons mit Namensnennung. Video fehlt noch (siehe ASSETS.md).

## Sortiment (Stand 2026-10-30)

- Zusätzlich drei in der Schweiz als strassenzugelassen ausgewiesene 20 km/h-Modelle (Teverun eKFV / CH-Edition) aus dem Katalog von swiss-scoots.ch; Filter «Strassenzugelassen CH» zeigt sie.
- Die technischen Daten dieser drei Modelle werden aus dem Fliesstext der Quelle gelesen (Motor 500 W, Akku 1170/1560/1602 Wh, Reichweite 60/90/100 km, 20 km/h, 150 kg Zuladung); Stand 2026-10-30.
- Preise sind jetzt N SCOOTS-Einführungspreise auf dem Niveau des jeweiligen Quell-Händlers (`price.basis`, `price.source`), unverbindlich bis Verkaufsstart; keine Händlernamen auf der Website.
- Produktbilder ohne Beschriftung am Bild; Herkunft und Freigabestatus in ASSETS.md.

- Vollständiger Import des E-Rydez-Katalogs: 32 E-Scooter, 1 E-Dirtbike (KuKirin X1), 5 Ersatzteil-Sets; Marken KuKirin, Joyor, Teverun, Dualtron, Rovoron, Ausom.
- Je Produkt: Referenzpreis (ab-Preis bei Varianten), Lieferstatus laut E-Rydez mit Datum, Akku, Motor, Reichweite, Höchstgeschwindigkeit, ABE-Kennzeichnung, Quelle. Reproduzierbar mit `node tools/import-erydez.js`.
- Zulassung: E-Rydez weist für kein Modell eine CH-Strassenzulassung aus; Filter «Nur CH-strassenzugelassen» bleibt deshalb leer und erklärt das.
- Neu auf der Startseite: Suchfeld im Header, Navigationszeile, Markenleiste, Vertrauens- und Service-Leiste, WhatsApp-Knopf, Kontaktseite mit Platzhalter-Telefon/E-Mail.

## Stand 2026-10-30, zweite Runde (Referenzabgleich mit der ChatGPT-Version)

- Wortmarke als SVG 1:1 aus der eigenen Identität des Auftraggebers übernommen (`assets/brand/wordmark.svg`, `mark.svg`, `favicon.svg`).
- Offizielle Markenlogos 1:1 (KuKirin, Joyor, Teverun, Dualtron, Rovoron, Ausom) in roter Logo-Leiste, Marken-Tabs und Produktkarten.
- Herstellerbilder für alle 36 Fahrzeuge (Produkt- und Lifestyle-Fotos von den offiziellen Seiten); Händlerbilder nur noch als Rückfall. Keine Fotoreferenzen mehr am Bild (Nachweise in ASSETS.md und data/media-hersteller.js).
- Hero mit grossem Lifestyle-Panel, USP-Zeile, «Was hast du vor?» (Strassenzugelassene, Unter CHF 1’000, Performance), Mosaik-Galerie «Raus. Dein Stil.» mit Lightbox, dunkle Service-Sektion «Du fährst. Wir sind da.», Infokarten, Zahlungsarten im Footer.
- Kontakt: +41 79 460 18 35 (Telefon und WhatsApp), info@nscoots.ch, Rapperswil-Jona, ohne Personennamen. Versprechen laut Auftraggeber: WhatsApp 24/7, Antwort meistens innerhalb 1–2 Stunden, schnell und einfach geliefert, sicher bezahlen. Diese Zusagen sind vor dem Shopstart organisatorisch sicherzustellen.

## Bewusst nicht gebaut

- Keine Bestellung, Zahlung, Kundenkonto, Formulare mit Datenversand
- Keine Lagerbestände, Lieferfristen, Rabatte, Bewertungen, Garantieversprechen, Händlerautorisierungen, CH-Zulassungen
- Keine fremden Fotos oder Markenlogos

## Offene Produktionspunkte

1. B2B-Konditionen, Marge, Einkaufspreise; danach echte Verkaufspreise statt Referenzpreise
2. Warenbestand und Synchronisierung (Shopify-Anbindung)
3. Versand, Retouren, Reparaturen, Garantiefälle
4. Verkäuferidentität, Kontakt, Impressum, Datenschutz, AGB
5. Domain- und Markenprüfung «N SCOOTS»
6. Freigegebene Markenlogos und Produktbilder, eigene Fotos
7. Belegte Produktangaben je Ausführung und Schweizer Verkehrszulässigkeit anhand offizieller Quellen
8. Shopify-Checkout, Zahlungsanbieter, TWINT-Verfügbarkeit
9. E-Dirtbike-Sortiment (Marken, Modelle, Rechte)
10. Zubehör-Sortiment mit echten Artikeln
