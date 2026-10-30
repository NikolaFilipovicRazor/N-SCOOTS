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
    product: { src: "hersteller:teverun-fighter-mini-pro-ekfv:produkt:0", alt: "Teverun Fighter Mini Pro eKFV, Produktbild", status: "hersteller", kind: "produkt", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" , model: "teverun-fighter-mini-pro-ekfv" },
    image: { src: "hersteller:teverun-fighter-mini-pro:lifestyle:1", alt: "Fahrer mit Teverun Fighter Mini Pro im Wald", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js", model: "teverun-fighter-mini-pro" },
    video: { src: "assets/video/hero-ride.mp4", poster: "assets/photos/hero-stadt-abend.jpg", status: "fehlt", credit: "", license: "" }
  },
  profiles: {
    alltag:  { src: "hersteller:teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb:lifestyle:0", alt: "Frau mit Teverun Blade Mini Ultra in der Stadt", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    touren:  { src: "hersteller:teverun-fighter-mini-pro:lifestyle:1", alt: "Fahrer mit Teverun Fighter Mini Pro im Wald", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    offroad: { src: "hersteller:ausom-f1-max:lifestyle:1", alt: "Fahrer mit Ausom F1 Max in den Dünen", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" }
  },
  story: [
    { src: "hersteller:teverun-blade-gt-ii:lifestyle:0", alt: "Pause am Fluss mit dem Teverun Blade GT II", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-blade-gt-ii-plus:lifestyle:0", alt: "Frau fährt mit dem Teverun Blade GT II+ durch den Wald", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike:lifestyle:1", alt: "Fahrer auf dem KuKirin X1 Dirtbike im Gelände", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" }
  ],
  /* Marken-Kacheln: Produktfoto eines Modells der Marke (E-Rydez, Freigabe ausstehend) */
  brands: {
    kukirin:  { src: "hersteller:kukirin-g2-master:lifestyle:0", alt: "KuKirin G2 Master unterwegs", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    joyor:    { src: "hersteller:joyor-t10-60v-18ah-2x1000w:lifestyle:1", alt: "Joyor T10 am Meer", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    teverun:  { src: "hersteller:teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb:lifestyle:1", alt: "Teverun Blade Mini Ultra in der Stadt", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    dualtron: { src: "hersteller:dualtron-victor-ltd-dgt-60v-37-1ah-samsung:lifestyle:0", alt: "Dualtron Victor LTD im Neonlicht", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    rovoron:  { src: "hersteller:rovoron-s7:produkt:0", alt: "Rovoron S7", status: "hersteller", kind: "produkt", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    ausom:    { src: "hersteller:ausom-f1-max:lifestyle:0", alt: "Ausom F1 Max in den Dünen", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" }
  },
  dirtbikes: { src: "hersteller:kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike:lifestyle:0", alt: "KuKirin X1 Dirtbike mit Fahrer", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
  nightCity: { src: "assets/photos/story-3.jpg", alt: "E-Scooter nachts in der Stadt", status: "frei", kind: "symbol", credit: "JIP, CC BY-SA 4.0", license: "CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Electric_kickbikes_in_Kamppi_on_a_night_in_April_2023.jpg" },
  /* Bildergalerie «Unterwegs» (Hersteller-Lifestyle-Fotos) */
  gallery: [
    { src: "hersteller:teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb:lifestyle:1", alt: "Mann mit Teverun Blade Mini Ultra in der Stadt", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb:lifestyle:0", alt: "Teverun Blade Mini Ultra in der Stadt", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-fighter-mini-pro:lifestyle:0", alt: "Teverun Fighter Mini Pro auf dem Waldweg", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike:lifestyle:1", alt: "KuKirin X1 im Gelände", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:joyor-t10-60v-18ah-2x1000w:lifestyle:1", alt: "Joyor T10 an der Küste", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-blade-gt-ii:lifestyle:1", alt: "Teverun Blade GT II im Park", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:ausom-f1-max:lifestyle:1", alt: "Ausom F1 Max in den Dünen", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:dualtron-victor-ltd-dgt-60v-37-1ah-samsung:lifestyle:0", alt: "Dualtron Victor LTD im Neonlicht", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-blade-gt-ii-plus:lifestyle:1", alt: "Teverun Blade GT II+ am Fluss", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:kukirin-m4-max-20255-48v-18ah-akku-800w:lifestyle:0", alt: "KuKirin M4 Max beim Camping", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:joyor-s5z-48v-13ah-600w:lifestyle:0", alt: "Joyor S5-Z im Herbst", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-fighter-supreme-7260r:lifestyle:0", alt: "Teverun Fighter Supreme auf der Strasse", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" }
  ],
  /* Markenlogos 1:1 von den offiziellen Seiten (Hersteller bzw. offizieller Distributor), unverändert ausser Skalierung;
     Rovoron: offizielle weisse Variante monochrom invertiert für helle Flächen. Nutzung als Händler, Freigabe vor Verkaufsstart. */
  logos: {
    kukirin:  { src: "assets/brand/logos/kukirin.png",  alt: "KuKirin Logo",  status: "hersteller", kind: "logo", credit: "KuKirin",  license: "Herstellerlogo, https://kukirin.it.com/cdn/shop/files/kukirinlogo.webp" },
    joyor:    { src: "assets/brand/logos/joyor.png",    alt: "Joyor Logo",    status: "hersteller", kind: "logo", credit: "Joyor",    license: "Herstellerlogo, https://joyor.com/cdn/shop/files/logo.png" },
    teverun:  { src: "assets/brand/logos/teverun.png",  alt: "Teverun Logo",  status: "hersteller", kind: "logo", credit: "Teverun",  license: "Herstellerlogo, https://teverun.com/wp-content/uploads/2025/08/teverun-logo-black-transparent-01.webp" },
    dualtron: { src: "assets/brand/logos/dualtron.svg", alt: "Dualtron Logo", status: "hersteller", kind: "logo", credit: "Dualtron", license: "Markenlogo vom offiziellen Schweizer Distributor, https://kissmywheels.ch/wp-content/uploads/2025/06/dualtron-logo.svg" },
    rovoron:  { src: "assets/brand/logos/rovoron.png",  alt: "Rovoron Logo",  status: "hersteller", kind: "logo", credit: "Rovoron",  license: "Herstellerlogo (weisse Variante invertiert), https://www.rovoron.com/web/image/website/12/logo" },
    ausom:    { src: "assets/brand/logos/ausom.png",    alt: "Ausom Logo",    status: "hersteller", kind: "logo", credit: "Ausom",    license: "Herstellerlogo, https://ausomstore.com/cdn/shop/files/Ausom_-_PNG_-_Logo_4_e1d5c1fb-26de-4a0b-b79f-b290616c8ba5.png" }
  },
  /* Produktfotos: automatisch aus data/products.js (assets/photos/produkte/<id>-n.jpg).
     Hier Überschreibungen mit Herstellerbildern eintragen (status "hersteller", kind "produkt" | "lifestyle"). */
  products: {}
};
