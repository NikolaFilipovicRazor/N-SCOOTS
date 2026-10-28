# N SCOOTS – Website-Prototyp

Frontend-Prototyp für den geplanten Schweizer Onlineshop **N SCOOTS** (E-Scooter & E-Dirtbikes).
Reines HTML, CSS und JavaScript, keine Build-Tools, keine Abhängigkeiten.
Demo: kein Verkauf, keine Bestellung, keine Zahlung, keine Datenübermittlung.

## Starten

Im Projektordner:

    python3 -m http.server 8080

Dann http://localhost:8080 öffnen. (Alternativ `npx serve .` oder ein beliebiger statischer Server.
Direktes Öffnen von `index.html` per Doppelklick funktioniert ebenfalls.)

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `index.html` | App-Hülle: Header, Dialoge (Warenkorb-Drawer, Vergleichsauswahl, Kassen-Hinweis), Footer |
| `css/styles.css` | Designsystem (Tokens oben unter `:root`), alle Ansichten |
| `js/app.js` | Hash-Router und Ansichten: Start, Katalog, Produkt, Vergleich, Warenkorb, Dirtbikes, Info, 404 |
| `js/store.js` | Warenkorb- und Vergleichszustand, lokaler Browserspeicher mit Fallback |
| `js/format.js` | Schweizer Zahlen- und Preisformate (`CHF 1’638.–`) |
| `data/products.js` | **Austauschbare Produktdatei** mit stabilen IDs, Quellen und Prüfdatum |
| `assets/img/` | Gekennzeichnete SVG-Platzhalter (keine Produktfotos), erzeugt mit `tools/make-placeholders.js` |
| `assets/brand/` | Wortmarke und Favicon |
| `ASSETS.md` | Asset-Verzeichnis mit Herkunft und Rechte-Status |
| `PRODUKTQUELLEN.md` | Quellenliste je Produkt |
| `STATUS.md` | Funktionierende Features, Abnahmeprotokoll, offene Produktionspunkte |
| `tests/abnahme.js` | Browser-Abnahme mit Playwright (390 px und 1440 px) |
| `.github/workflows/pages.yml` | Veröffentlichung über GitHub Pages bei Push auf `main` |

## Routen

`#/` Start · `#/katalog?kat=&marke=&segment=&q=&min=&max=&sort=` · `#/produkt/<id>` · `#/vergleich` · `#/warenkorb` · `#/dirtbikes` · `#/info`

## Abnahme ausführen

    python3 -m http.server 8080 &
    node tests/abnahme.js

Erzeugt Screenshots unter `tests/screenshots/` und prüft Suche, Filter, Produktseite, Vergleich, Warenkorb inkl. Neuladen,
Tastaturnavigation, Dialoge, Konsolenfehler und horizontalen Überlauf.

## Produktdaten pflegen

Alle Angaben in `data/products.js` sind Hersteller- oder Händlerangaben mit Quelle und Prüfdatum.
`price.kind` ist `referenz` (fremdes Angebot, kein N SCOOTS-Preis) oder `offen`.
`chLegal` bleibt `nicht bestätigt`, bis ein Beleg je Ausführung vorliegt. Unbekannte Werte bleiben `null`.

## Online stellen

GitHub: **Settings → Pages → Source: GitHub Actions**. Danach veröffentlicht jeder Push auf `main` automatisch.
