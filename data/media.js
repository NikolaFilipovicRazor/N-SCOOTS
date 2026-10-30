/* N SCOOTS – Medien-Manifest (Fotos und Videos)
 * -------------------------------------------------------------
 * status: "fehlt" · "frei" (freie Lizenz, Nachweis in ASSETS.md) ·
 *         "freigegeben" (schriftliche Freigabe) ·
 *         "lieferant" (Produktfoto des möglichen Lieferanten E-Rydez,
 *         Nutzung für den Prototyp, schriftliche Freigabe AUSSTEHEND;
 *         wird sichtbar so beschriftet)
 * kind:   "foto" (echtes Foto) · "symbol" (Symbolbild, zeigt nicht das
 *         konkrete Verkaufsmodell) · "produkt" (Produktfoto)
 * Credits werden am Bild angezeigt. Lizenzen: CC BY verlangt Namensnennung,
 * CC BY-SA zusätzlich Weitergabe unter gleicher Lizenz für Bearbeitungen.
 * Produktfotos: assets/photos/produkte/<produkt-id>-<n>.jpg werden automatisch
 * aus data/products.js (images) geladen und als "lieferant" geführt.
 */
window.NSCOOTS_MEDIA = {
  hero: {
    /* Grosses Produktbild im Hero (E-Rydez-Produktfoto, Freigabe ausstehend) */
    product: { src: "assets/photos/hero-produkt.jpg", alt: "Teverun Fighter Mini Pro, Produktfoto", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend", model: "teverun-fighter-mini-pro" },
    image: { src: "assets/photos/hero-stadt-abend.jpg", alt: "Zwei junge Menschen mit E-Scooter auf einem Zebrastreifen", status: "frei", kind: "symbol", credit: "Kristoffer Trolle, CC BY 2.0", license: "CC BY 2.0, https://commons.wikimedia.org/wiki/File:Generation_Z_kids_on_Electric_Scooter_(48263543577).jpg" },
    video: { src: "assets/video/hero-ride.mp4", poster: "assets/photos/hero-stadt-abend.jpg", status: "fehlt", credit: "", license: "" }
  },
  profiles: {
    alltag:  { src: "assets/photos/profil-alltag.jpg",  alt: "Zwei junge Menschen mit E-Scooter in der Stadt", status: "frei", kind: "symbol", credit: "Kristoffer Trolle, CC BY 2.0", license: "CC BY 2.0, https://commons.wikimedia.org/wiki/File:Generation_Z_kids_on_Electric_Scooter_(48263543577).jpg" },
    touren:  { src: "assets/photos/profil-touren.jpg",  alt: "E-Scooter-Fahrer auf einer Stadtstrasse", status: "frei", kind: "symbol", credit: "Sonia Medina, CC BY 3.0", license: "CC BY 3.0, https://commons.wikimedia.org/wiki/File:Grin_e-scooter_rider_in_Mexico_City.jpg" },
    offroad: { src: "assets/photos/profil-gelaende.jpg", alt: "Teverun Blade GT II+, Produktfoto", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend" }
  },
  story: [
    { src: "assets/photos/story-1.jpg", alt: "Lenker eines E-Scooters mit Display, Nahaufnahme", status: "frei", kind: "symbol", credit: "Alexis Jazz, CC BY 4.0", license: "CC BY 4.0, https://commons.wikimedia.org/wiki/File:Frankfurt,_Germany_-_Electric_rental_kick_scooter_handlebars.jpg" },
    { src: "assets/photos/story-2.jpg", alt: "Person steigt mit gefaltetem E-Scooter in einen Bus", status: "frei", kind: "symbol", credit: "4300streetcar, CC BY 4.0", license: "CC BY 4.0, https://commons.wikimedia.org/wiki/File:Rider_with_scooter_boarding_route_111_bus_at_Haymarket_September_2024.jpg" },
    { src: "assets/photos/dirtbike.jpg", alt: "Elektrisches Dirtbike auf einem Messestand", status: "frei", kind: "symbol", credit: "Ivan Radic, CC BY 2.0", license: "CC BY 2.0, https://commons.wikimedia.org/wiki/File:Sur-Ron_Electric_Dirt_Bike_1a.jpg" }
  ],
  /* Marken-Kacheln: Produktfoto eines Modells der Marke (E-Rydez, Freigabe ausstehend) */
  brands: {
    kukirin:  { src: "assets/photos/produkte/kukirin-g2-master-1.jpg", alt: "", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend" },
    joyor:    { src: "assets/photos/produkte/joyor-s8-48v-26ah-600w-1.jpg", alt: "", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend" },
    teverun:  { src: "assets/photos/produkte/teverun-fighter-mini-pro-1.jpg", alt: "", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend" },
    dualtron: { src: "assets/photos/produkte/dualtron-victor-ltd-dgt-60v-37-1ah-samsung-1.jpg", alt: "", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend" },
    rovoron:  { src: "assets/photos/produkte/rovoron-s7-1.jpg", alt: "", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend" },
    ausom:    { src: "assets/photos/produkte/ausom-dt2-pro-1.jpg", alt: "", status: "lieferant", kind: "produkt", credit: "E-Rydez", license: "Freigabe ausstehend" }
  },
  dirtbikes: { src: "assets/photos/dirtbike.jpg", alt: "Elektrisches Dirtbike auf einem Messestand", status: "frei", kind: "symbol", credit: "Ivan Radic, CC BY 2.0", license: "CC BY 2.0, https://commons.wikimedia.org/wiki/File:Sur-Ron_Electric_Dirt_Bike_1a.jpg" },
  nightCity: { src: "assets/photos/story-3.jpg", alt: "E-Scooter nachts in der Stadt", status: "frei", kind: "symbol", credit: "JIP, CC BY-SA 4.0", license: "CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Electric_kickbikes_in_Kamppi_on_a_night_in_April_2023.jpg" },
  /* Produktfotos: automatisch aus data/products.js. Hier nur Ausnahmen/Überschreibungen eintragen. */
  products: {}
};
