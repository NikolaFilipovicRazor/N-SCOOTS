# Asset-Verzeichnis

Stand: 2026-11-06. Stimmungsfotos und Hero-Video: Unsplash bzw. Pexels (freie Lizenz, Nachweis unten). Produktbilder: offizielle Herstellerbilder (Freigabevorbehalt).
Händlerfotos von e-rydez.ch sind **nicht** im Repository und werden nicht eingebettet; sie sind nur in `data/products.js` (`supplierPhotos`) verlinkt und als «Freigabe ausstehend» geführt.
Öffentlich sichtbare Bilder bedeuten keine Nutzungsrechte; Herstellerbilder brauchen vor dem Verkaufsstart eine schriftliche Freigabe.

| Datei | Herkunft | Quelle/URL | Rechte-/Freigabestatus | Verwendung |
| --- | --- | --- | --- | --- |
| `assets/img/dirtbike-platzhalter.svg` | Selbst erzeugt | – | Eigenes Werk | Kategorie «in Vorbereitung» |
| `assets/img/fehlt.svg` | Selbst erzeugt | – | Eigenes Werk | Fallback bei fehlendem Bild |
| `assets/brand/wordmark.svg`, `mark.svg`, `favicon.svg` | Selbst gestaltet | – | Eigenes Werk, Markenprüfung offen | Wortmarke N SCOOTS |
| Hero-Illustration (inline SVG in `js/app.js`) | Selbst erzeugt | – | Eigenes Werk | Rückfall, wenn Video und Foto fehlen |
| Schriften Barlow Condensed, Inter | Google Fonts | fonts.googleapis.com | SIL Open Font License | Per Link eingebunden, Fallback auf Systemschriften |

## Herstellerbilder (Stand 2026-10-30)

163 Dateien unter `assets/photos/hersteller/` (Produkt- und Lifestyle-Fotos) wurden von den offiziellen Herstellerseiten geladen
(kukirin.it.com, kukirin.net, joyorprime.com, teverun.com, teverun-europe.com, minimotors.com, rovoron.com, ausom.com); Quelle je Bild in
`data/media-hersteller.js` (Feld `license`). Markenlogos unter `assets/brand/logos/` von den Herstellerseiten bzw. dem offiziellen Schweizer
Distributor (Dualtron). Wortmarke `assets/brand/wordmark.svg` ist die eigene N SCOOTS-Identität. Nutzung als Händler ist üblich; schriftliche
Freigaben der Hersteller vor dem Shopstart einholen. Die früheren Wikimedia-Commons-Fotos und die eingebetteten E-Rydez-Produktfotos (`assets/photos/produkte/`) wurden am 2026-11-06 entfernt.

### Umfang je Modell (dritte Runde)

- Der Importer übernimmt alle Bilder aus den Manifesten (Produktbilder zuerst, dann Lifestyle) und entfernt Duplikate per Differenz-Hash. Händlerfotos werden nicht mehr eingebettet (Status `lieferant` entfällt).
- Verweise in `data/media.js` sind symbolisch: `hersteller:<produkt-id>:lifestyle:<n>` bzw. `:produkt:<n>`; `js/media.js` löst sie beim Laden auf die aktuelle Datei auf.
- Auf der Website stehen keine Bildnachweise; sie bleiben hier und in `data/media-hersteller.js` (Feld `license` mit Quell-URL je Bild).

## Foto- und Video-Slots (data/media.js)

Stand 2026-11-06. Alle Stimmungsfotos stammen von **Unsplash** (Unsplash License: kostenlose kommerzielle Nutzung, keine Namensnennung nötig,
kein Verkauf unveränderter Kopien, keine Nachbildung des Dienstes), das Hero-Video von **Pexels** (Pexels License: kostenlose kommerzielle Nutzung,
keine Namensnennung nötig, keine identifizierbaren Personen in anstössigem Kontext). Lizenztexte: https://unsplash.com/license, https://www.pexels.com/license/.
Alle Bilder sind **Symbolbilder** (zeigen nicht die verkauften Modelle) und werden auf der Website als «Symbolbild» beschriftet; Fotografennamen stehen
im Manifest (`credit`, `license`) und hier, nicht am Bild. Prüfdatum aller Quellen: 2026-11-06.

| Slot | Datei | Status | Quelle/URL | Lizenz | Fotograf/in |
| --- | --- | --- | --- | --- | --- |
| Hero-Foto (Rückfall ohne Video) | `assets/photos/hero-stadt.jpg` | frei | https://unsplash.com/photos/9ZXMS6_8Hek | Unsplash License | M G (https://unsplash.com/@garnet_photographer) |
| Hero-Video | `assets/video/hero-ride.mp4` | frei | https://www.pexels.com/video/man-driving-an-electric-scooter-4824820/ | Pexels License | Gustavo Fring (https://www.pexels.com/@gustavo-fring/) |
| Hero-Video-Poster | `assets/photos/hero-poster.jpg` | frei | Standbild aus dem Hero-Video (Sekunde 3) | Pexels License | Gustavo Fring |
| Hero-Produktbild (nur ohne Video) | `hersteller:teverun-fighter-mini-pro-ekfv:produkt:0` | hersteller | siehe `data/media-hersteller.js` | Herstellerbild | Teverun |
| Profil Alltag | `assets/photos/profil-alltag.jpg` | frei | https://unsplash.com/photos/rtKaS9ci8GM | Unsplash License | pony (https://unsplash.com/@getapony) |
| Profil Touren | `assets/photos/profil-touren.jpg` | frei | https://unsplash.com/photos/qzzReo9-Nyw | Unsplash License | Hiboy (https://unsplash.com/@hiboyofficial) |
| Profil Gelände | `assets/photos/profil-gelaende.jpg` | frei | https://unsplash.com/photos/iIhmurfa40I | Unsplash License | Hiboy (https://unsplash.com/@hiboyofficial) |
| Story 1 | `assets/photos/story-1.jpg` | frei | https://unsplash.com/photos/zeQfj24Tr60 | Unsplash License | pony (https://unsplash.com/@getapony) |
| Story 2 | `assets/photos/story-2.jpg` | frei | https://unsplash.com/photos/WzStSnhZbfs | Unsplash License | Marat Mazitov (https://unsplash.com/@mmmazitov) |
| Story 3 | `assets/photos/story-3.jpg` | frei | https://unsplash.com/photos/iEHTuKNwAh0 | Unsplash License | Hiboy (https://unsplash.com/@hiboyofficial) |
| Marke KuKirin | `assets/photos/marke-kukirin.jpg` | frei | https://unsplash.com/photos/r9gEejXAU3Y | Unsplash License | Martin Katler (https://unsplash.com/@martinkatler) |
| Marke Joyor | `assets/photos/marke-joyor.jpg` | frei | https://unsplash.com/photos/Nw8iWRVg9RM | Unsplash License | Volodymyr Dobrovolskyy (https://unsplash.com/@vladimir_d) |
| Marke Teverun | `assets/photos/marke-teverun.jpg` | frei | https://unsplash.com/photos/0F6BaF28QEM | Unsplash License | Daniel Romero (https://unsplash.com/@rmrdnl) |
| Marke Dualtron | `assets/photos/marke-dualtron.jpg` | frei | https://unsplash.com/photos/Urx9iM6R5Hs | Unsplash License | Yuichi (https://unsplash.com/@yasaichi) |
| Marke Rovoron | `assets/photos/marke-rovoron.jpg` | frei | https://unsplash.com/photos/b0bFZKjWDVY | Unsplash License | Marek Rucinski (https://unsplash.com/@marulla) |
| Marke Ausom | `assets/photos/marke-ausom.jpg` | frei | https://unsplash.com/photos/75PixKFsE7U | Unsplash License | Jan Antonin Kolar (https://unsplash.com/@jankolar) |
| Dirtbikes | `assets/photos/dirtbike.jpg` | frei | https://unsplash.com/photos/hEFeDN68gRo | Unsplash License | Jasper Garratt (https://unsplash.com/@jaspergarrattphotography) |
| Nacht (nightCity) | `assets/photos/nacht-stadt.jpg` | frei | https://unsplash.com/photos/tGWZGhWA8dw | Unsplash License | Christian Lue (https://unsplash.com/@christianlue) |
| Galerie «Unterwegs» (12) | `hersteller:<id>:lifestyle:<n>` | hersteller | siehe `data/media-hersteller.js` | Herstellerbilder | Hersteller |
| Produktfotos je Modell | `assets/photos/hersteller/<id>-<n>.jpg` | hersteller | siehe `data/media-hersteller.js` | Herstellerbilder | Hersteller |
| Händlerfotos e-rydez.ch / swiss-scoots.ch | nicht im Repository | Freigabe ausstehend | Links in `data/products.js` → `supplierPhotos` (Bild-URL, Produktseite, Prüfdatum) | – | E-Rydez / Swiss-Scoots |

Bearbeitung der Unsplash-Fotos: Zuschnitt auf 16:11 (1600 × 1100 px) und JPEG-Kompression (unter 300 KB), keine weiteren Änderungen.
Video: Originalclip 14 s in 2560 × 1440, gekürzt auf 12 s (ab Sekunde 1), skaliert auf 1280 × 720, H.264, ohne Tonspur, 1.9 MB.
Marken-Kacheln zeigen Symbolbilder fremder Sharing-/Marken-Scooter, nicht die Modelle der jeweiligen Marke.
Testbilder und das Testvideo unter `tests/fixtures/` sind prozedural erzeugt und werden nicht veröffentlicht.

## Noch nicht freigegeben / nicht enthalten

| Gewünscht | Status |
| --- | --- |
| Produktfotos E-Rydez / Swiss-Scoots | Nicht eingebettet. Nur als Links in `data/products.js` (`supplierPhotos`, «Freigabe ausstehend»). Schriftliche Freigabe des Betreibers einholen, bevor Dateien übernommen werden. |
| Herstellerbilder und Markenlogos | Enthalten (Status `hersteller`), schriftliche Freigabe der Markeninhaber vor dem Verkaufsstart. |
| Eigene Fotos der verkauften Modelle | Nicht vorhanden. Stimmungsfotos sind Symbolbilder von Unsplash. |

Wasserzeichen werden nie entfernt. Nicht freigegebene Bilder gelten nicht als veröffentlichungsfertig.
