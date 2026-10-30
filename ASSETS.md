# Asset-Verzeichnis

Stand: 2026-10-30. Stimmungsfotos: Wikimedia Commons (CC BY / CC BY-SA, Namensnennung am Bild). Produktfotos: e-rydez.ch mit Freigabevorbehalt.
Öffentlich sichtbare Bilder bedeuten keine Nutzungsrechte; der Freigabevorbehalt ist sichtbar am Bild und muss vor dem Verkaufsstart aufgelöst werden.

| Datei | Herkunft | Quelle/URL | Rechte-/Freigabestatus | Verwendung |
| --- | --- | --- | --- | --- |
| `assets/img/dirtbike-platzhalter.svg` | Selbst erzeugt | – | Eigenes Werk | Kategorie «in Vorbereitung» |
| `assets/img/fehlt.svg` | Selbst erzeugt | – | Eigenes Werk | Fallback bei fehlendem Bild |
| `assets/brand/wordmark.svg`, `favicon.svg` | Selbst gestaltet | – | Eigenes Werk, Markenprüfung offen | Wortmarke N SCOOTS |
| Hero-Illustration (inline SVG in `js/app.js`) | Selbst erzeugt | – | Eigenes Werk | Startseite, als «Illustration, kein Produktfoto» gekennzeichnet |
| Schriften Barlow Condensed, Inter | Google Fonts | fonts.googleapis.com | SIL Open Font License | Per Link eingebunden, Fallback auf Systemschriften |

## Foto- und Video-Slots (data/media.js)

Stand 2026-10-30. Alle Stimmungsfotos stammen von Wikimedia Commons unter freien Lizenzen (Namensnennung am Bild und hier).
Produktfotos stammen vom Händler e-rydez.ch (möglicher B2B-Lieferant) und sind **mit Freigabevorbehalt** eingebunden:
sichtbar beschriftet «Foto: E-Rydez · Freigabe ausstehend». Vor dem Verkaufsstart schriftliche Freigabe einholen oder ersetzen.

| Slot | Datei | Status | Quelle/URL | Lizenz | Credit |
| --- | --- | --- | --- | --- | --- |
| Hero-Produktbild | `assets/photos/hero-produkt.jpg` | lieferant | https://e-rydez.ch/products/teverun-fighter-mini-pro | Freigabe ausstehend | E-Rydez |
| Hero-Hintergrund, Profil Alltag | `assets/photos/hero-stadt-abend.jpg`, `profil-alltag.jpg` | frei | https://commons.wikimedia.org/wiki/File:Generation_Z_kids_on_Electric_Scooter_(48263543577).jpg | CC BY 2.0 | Kristoffer Trolle |
| Profil Touren | `assets/photos/profil-touren.jpg` | frei | https://commons.wikimedia.org/wiki/File:Grin_e-scooter_rider_in_Mexico_City.jpg | CC BY 3.0 | Sonia Medina |
| Profil Gelände | `assets/photos/profil-gelaende.jpg` | lieferant | https://e-rydez.ch/products/teverun-blade-gt-ii-plus | Freigabe ausstehend | E-Rydez |
| Story 1 | `assets/photos/story-1.jpg` | frei | https://commons.wikimedia.org/wiki/File:Frankfurt,_Germany_-_Electric_rental_kick_scooter_handlebars.jpg | CC BY 4.0 | Alexis Jazz |
| Story 2 | `assets/photos/story-2.jpg` | frei | https://commons.wikimedia.org/wiki/File:Rider_with_scooter_boarding_route_111_bus_at_Haymarket_September_2024.jpg | CC BY 4.0 | 4300streetcar |
| Story 3, Dirtbikes | `assets/photos/dirtbike.jpg` | frei | https://commons.wikimedia.org/wiki/File:Sur-Ron_Electric_Dirt_Bike_1a.jpg | CC BY 2.0 | Ivan Radic |
| Nacht (Reserve) | `assets/photos/story-3.jpg` | frei | https://commons.wikimedia.org/wiki/File:Electric_kickbikes_in_Kamppi_on_a_night_in_April_2023.jpg | CC BY-SA 4.0 | JIP |
| Marken (6) | `assets/photos/produkte/<modell>-1.jpg` | lieferant | e-rydez.ch Produktseiten | Freigabe ausstehend | E-Rydez |
| Produktfotos (38 Produkte, 114 Dateien) | `assets/photos/produkte/<produkt-id>-1..3.jpg` | lieferant | e-rydez.ch Produktseiten (siehe PRODUKTQUELLEN.md) | Freigabe ausstehend | E-Rydez |
| Hero-Video | `assets/video/hero-ride.mp4` | fehlt | – | – | – |

Bearbeitung der Commons-Fotos: nur Skalierung auf 1600 px Breite und JPEG-Kompression. CC BY-SA 4.0 (story-3.jpg) verlangt bei Bearbeitung die gleiche Lizenz; die Datei wird nur skaliert und ist als Reserve geführt.
Produktfotos wurden auf max. 1200 px skaliert, Transparenz auf Weiss gelegt. Keine Wasserzeichen entfernt.
Testbilder unter `tests/fixtures/` sind prozedural erzeugt und werden nicht veröffentlicht.

## Noch nicht freigegeben / nicht enthalten

| Gewünscht | Status |
| --- | --- |
| Produktfotos E-Rydez | Eingebunden mit Freigabevorbehalt. Schriftliche Freigabe des Betreibers einholen. |
| Markenlogos KuKirin, Joyor, Teverun, Dualtron, Rovoron, Ausom | Nicht enthalten; Markenleiste zeigt Initialen. Nutzung nur mit Freigabe des Markeninhabers. |
| Hero-Video | Nicht enthalten. Wikimedia-Commons-Videos waren am Prüftag netzwerkseitig gedrosselt; freie Alternativen (Pexels, Unsplash) sind aus der Arbeitsumgebung gesperrt. Eigenes Video oder lizenziertes Stockvideo nachliefern. |

Wasserzeichen werden nie entfernt. Nicht freigegebene Bilder gelten nicht als veröffentlichungsfertig.
