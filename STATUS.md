# Status des Prototyps

Stand: 2026-10-28

## Gestaltungskonzept (kurz)

- **Identität:** Anthrazit (#1c1f24) als Grundton, Kobaltblau (#1f4fe0) als einziger Akzent, helle ruhige Produktflächen.
  Display-Schrift Barlow Condensed (Motorsport-Anklang), Inter für Text. Wortmarke: schräger Kobalt-Block mit «N», daneben «N SCOOTS».
- **Aufbau Startseite:** dunkler Hero mit Claim «Dein nächster Ride.», Vertrauensleiste mit belegbaren Aussagen, zwei Kategorie-Einstiege,
  drei Fahrprofile (Alltag, Lange Strecken, Gelände) als Direktlinks in den gefilterten Katalog, ausgewählte Modelle, Marken-Kacheln mit
  «Referenz ab» nur bei belegtem Preis, Kaufhilfe. Struktur-Anregungen aus Referenz-Shops wurden in eigener Gestaltung umgesetzt; Logos,
  Texte, Fotos und Layouts wurden nicht übernommen.
- **Bewegung:** nur Hover-/Fokus-Übergänge und ein Toast; `prefers-reduced-motion` wird beachtet. Keine Autoplay-Videos, keine Scroll-Effekte.

## Funktioniert (Browser-geprüft, 83/83 Prüfungen bestanden bei 390 px und 1440 px)

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
