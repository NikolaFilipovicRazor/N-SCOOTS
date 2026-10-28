# Asset-Verzeichnis

Stand: 2026-10-28. Es werden **keine** fremden Fotos verwendet. Öffentlich sichtbare Bilder (Hersteller, Händler, E-Rydez)
bedeuten keine Nutzungsrechte und sind daher nicht eingebunden.

| Datei | Herkunft | Quelle/URL | Rechte-/Freigabestatus | Verwendung |
| --- | --- | --- | --- | --- |
| `assets/img/<produkt-id>-1..3.svg` (36 Dateien) | Selbst erzeugt, `tools/make-placeholders.js` | – | Eigenes Werk, frei verwendbar | Platzhalter, sichtbar als «PLATZHALTER – KEIN PRODUKTFOTO» gekennzeichnet |
| `assets/img/zubehoer-*.svg` (3) | Selbst erzeugt | – | Eigenes Werk | Platzhalter Zubehör |
| `assets/img/dirtbike-platzhalter.svg` | Selbst erzeugt | – | Eigenes Werk | Kategorie «in Vorbereitung» |
| `assets/img/fehlt.svg` | Selbst erzeugt | – | Eigenes Werk | Fallback bei fehlendem Bild |
| `assets/brand/wordmark.svg`, `favicon.svg` | Selbst gestaltet | – | Eigenes Werk, Markenprüfung offen | Wortmarke N SCOOTS |
| Hero-Illustration (inline SVG in `js/app.js`) | Selbst erzeugt | – | Eigenes Werk | Startseite, als «Illustration, kein Produktfoto» gekennzeichnet |
| Schriften Barlow Condensed, Inter | Google Fonts | fonts.googleapis.com | SIL Open Font License | Per Link eingebunden, Fallback auf Systemschriften |

## Foto- und Video-Slots (data/media.js)

| Slot | Datei | Status | Hinweis |
| --- | --- | --- | --- |
| Hero-Foto | `assets/photos/hero-stadt-abend.jpg` | fehlt | Stimmungsfoto Stadt/Abend, Querformat 16:9 oder breiter |
| Hero-Video | `assets/video/hero-ride.mp4` | fehlt | stumm, 10–20 s, H.264, unter 8 MB, Poster = Hero-Foto |
| Fahrprofile (3) | `assets/photos/profil-alltag.jpg`, `profil-touren.jpg`, `profil-gelaende.jpg` | fehlt | Querformat 16:10 |
| Story (3) | `assets/photos/story-1.jpg` … `story-3.jpg` | fehlt | Querformat 3:2 |
| Marken (6) | `assets/photos/marke-<marke>.jpg` | fehlt | Symbolbilder, dunkel überlagert |
| Dirtbikes | `assets/photos/dirtbike.jpg` | fehlt | Symbolbild |
| Produktfotos | `assets/photos/produkt-<id>-<n>.jpg` | fehlt | nur mit Hersteller-/Händlerfreigabe |

Solange ein Slot fehlt, zeigt die Seite den SVG-Platzhalter. Alle Fotos ohne konkretes Verkaufsmodell werden als «Symbolbild» beschriftet, Credits erscheinen am Bildrand.
Testbilder unter `tests/fixtures/` sind prozedural erzeugt, keine Fotos, und werden nicht veröffentlicht (`.gitignore`).

## Noch nicht freigegeben / nicht enthalten

| Gewünscht | Status |
| --- | --- |
| Herstellerbilder KuKirin, Joyor, Teverun, Dualtron, Rovoron, Ausom | Keine Freigabe vorhanden. Erst nach schriftlicher Bildfreigabe oder Händlervereinbarung einsetzen. |
| Lifestyle-/Stadtfotos (wie bei Referenz-Shops) | Nicht vorhanden. Eigene Fotos oder lizenzierte Stockfotos nötig. KI-Bilder nur als Stimmung, nie als Foto eines konkreten Modells. |
| Markenlogos | Nicht enthalten. Nutzung nur mit Freigabe des Markeninhabers. |

Wasserzeichen werden nie entfernt. Nicht freigegebene Referenzbilder gelten nicht als veröffentlichungsfertig.
