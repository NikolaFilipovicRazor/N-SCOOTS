/* N SCOOTS – Medien-Manifest (Fotos und Videos)
 * -------------------------------------------------------------
 * status: "fehlt" · "frei" (freie Lizenz: Unsplash License / Pexels License,
 *         Nachweis in ASSETS.md) · "freigegeben" (schriftliche Freigabe) ·
 *         "hersteller" (offizielles Herstellerbild, data/media-hersteller.js)
 * Händlerfotos von e-rydez.ch werden nicht eingebettet; sie sind nur in
 * data/products.js (supplierPhotos) verlinkt, Status «Freigabe ausstehend».
 * kind:   "foto" (echtes Foto) · "symbol" (Symbolbild, zeigt nicht das
 *         konkrete Verkaufsmodell) · "produkt" (Produktfoto)
 * Credits werden am Bild angezeigt. Lizenzen: CC BY verlangt Namensnennung,
 * CC BY-SA zusätzlich Weitergabe unter gleicher Lizenz für Bearbeitungen.
 */
window.NSCOOTS_MEDIA = {
  hero: {
    /* Produktbild im Hero (offizielles Herstellerbild), erscheint nur ohne Video */
    product: { src: "hersteller:teverun-fighter-mini-pro-ekfv:produkt:0", alt: "Teverun Fighter Mini Pro eKFV, Produktbild", status: "hersteller", kind: "produkt", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" , model: "teverun-fighter-mini-pro-ekfv" },
    image: { src: "assets/photos/hero-stadt.jpg", alt: "Fahrer auf einem E-Scooter in der Stadt, Bewegungsunschärfe", status: "frei", kind: "symbol", credit: "M G, Unsplash", license: "Unsplash License, https://unsplash.com/photos/9ZXMS6_8Hek (Foto: M G, https://unsplash.com/@garnet_photographer)" },
    video: { src: "assets/video/hero-ride.mp4", poster: "assets/photos/hero-poster.jpg", status: "frei", credit: "Gustavo Fring, Pexels", license: "Pexels License, https://www.pexels.com/video/man-driving-an-electric-scooter-4824820/ (Video: Gustavo Fring, https://www.pexels.com/@gustavo-fring/), gekürzt auf 12 s, 1280×720, ohne Ton" }
  },
  profiles: {
    alltag:  { src: "assets/photos/profil-alltag.jpg", alt: "Person fährt mit dem E-Scooter durch eine Stadtstrasse", status: "frei", kind: "symbol", credit: "pony, Unsplash", license: "Unsplash License, https://unsplash.com/photos/rtKaS9ci8GM (Foto: pony, https://unsplash.com/@getapony)" },
    touren:  { src: "assets/photos/profil-touren.jpg", alt: "Mann fährt mit dem E-Scooter über eine lange, offene Strasse", status: "frei", kind: "symbol", credit: "Hiboy, Unsplash", license: "Unsplash License, https://unsplash.com/photos/qzzReo9-Nyw (Foto: Hiboy, https://unsplash.com/@hiboyofficial)" },
    offroad: { src: "assets/photos/profil-gelaende.jpg", alt: "Person fährt mit dem E-Scooter über einen Schotterweg im Wald", status: "frei", kind: "symbol", credit: "Hiboy, Unsplash", license: "Unsplash License, https://unsplash.com/photos/iIhmurfa40I (Foto: Hiboy, https://unsplash.com/@hiboyofficial)" }
  },
  story: [
    { src: "assets/photos/story-1.jpg", alt: "Frau fährt mit dem E-Scooter durch eine sonnige Altstadtgasse", status: "frei", kind: "symbol", credit: "pony, Unsplash", license: "Unsplash License, https://unsplash.com/photos/zeQfj24Tr60 (Foto: pony, https://unsplash.com/@getapony)" },
    { src: "assets/photos/story-2.jpg", alt: "Zwei Frauen mit Helm fahren E-Scooter in der Stadt", status: "frei", kind: "symbol", credit: "Marat Mazitov, Unsplash", license: "Unsplash License, https://unsplash.com/photos/WzStSnhZbfs (Foto: Marat Mazitov, https://unsplash.com/@mmmazitov)" },
    { src: "assets/photos/story-3.jpg", alt: "Frau mit E-Scooter auf einem Waldweg", status: "frei", kind: "symbol", credit: "Hiboy, Unsplash", license: "Unsplash License, https://unsplash.com/photos/iEHTuKNwAh0 (Foto: Hiboy, https://unsplash.com/@hiboyofficial)" }
  ],
  /* Marken-Kacheln: freie Symbolbilder (Unsplash), zeigen nicht die Modelle der Marke */
  brands: {
    kukirin:  { src: "assets/photos/marke-kukirin.jpg", alt: "E-Scooter vor einem modernen Gebäude", status: "frei", kind: "symbol", credit: "Martin Katler, Unsplash", license: "Unsplash License, https://unsplash.com/photos/r9gEejXAU3Y (Foto: Martin Katler, https://unsplash.com/@martinkatler)" },
    joyor:    { src: "assets/photos/marke-joyor.jpg", alt: "Lenker eines E-Scooters am Flussufer", status: "frei", kind: "symbol", credit: "Volodymyr Dobrovolskyy, Unsplash", license: "Unsplash License, https://unsplash.com/photos/Nw8iWRVg9RM (Foto: Volodymyr Dobrovolskyy, https://unsplash.com/@vladimir_d)" },
    teverun:  { src: "assets/photos/marke-teverun.jpg", alt: "Oranger E-Scooter an einer Strassenkreuzung", status: "frei", kind: "symbol", credit: "Daniel Romero, Unsplash", license: "Unsplash License, https://unsplash.com/photos/0F6BaF28QEM (Foto: Daniel Romero, https://unsplash.com/@rmrdnl)" },
    dualtron: { src: "assets/photos/marke-dualtron.jpg", alt: "E-Scooter an einer Backsteinmauer in London", status: "frei", kind: "symbol", credit: "Yuichi, Unsplash", license: "Unsplash License, https://unsplash.com/photos/Urx9iM6R5Hs (Foto: Yuichi, https://unsplash.com/@yasaichi)" },
    rovoron:  { src: "assets/photos/marke-rovoron.jpg", alt: "Zwei Männer fahren E-Scooter durch Prag", status: "frei", kind: "symbol", credit: "Marek Rucinski, Unsplash", license: "Unsplash License, https://unsplash.com/photos/b0bFZKjWDVY (Foto: Marek Rucinski, https://unsplash.com/@marulla)" },
    ausom:    { src: "assets/photos/marke-ausom.jpg", alt: "Drei E-Scooter auf einem Gehweg in München", status: "frei", kind: "symbol", credit: "Jan Antonin Kolar, Unsplash", license: "Unsplash License, https://unsplash.com/photos/75PixKFsE7U (Foto: Jan Antonin Kolar, https://unsplash.com/@jankolar)" }
  },
  dirtbikes: { src: "assets/photos/dirtbike.jpg", alt: "Fahrer mit Helm auf einem Dirtbike im Wald", status: "frei", kind: "symbol", credit: "Jasper Garratt, Unsplash", license: "Unsplash License, https://unsplash.com/photos/hEFeDN68gRo (Foto: Jasper Garratt, https://unsplash.com/@jaspergarrattphotography)" },
  nightCity: { src: "assets/photos/nacht-stadt.jpg", alt: "E-Scooter nachts unter Strassenlaternen in Berlin", status: "frei", kind: "symbol", credit: "Christian Lue, Unsplash", license: "Unsplash License, https://unsplash.com/photos/tGWZGhWA8dw (Foto: Christian Lue, https://unsplash.com/@christianlue)" },
  /* Bildergalerie «Unterwegs» (Hersteller-Lifestyle-Fotos) */
  gallery: [
    { src: "hersteller:teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb:lifestyle:1", alt: "Mann mit Teverun Blade Mini Ultra in der Stadt", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-blade-mini-ultra-60v-27ah-akku-1000w-2-gelb:lifestyle:0", alt: "Teverun Blade Mini Ultra in der Stadt", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-fighter-mini-pro:lifestyle:0", alt: "Teverun Fighter Mini Pro auf dem Waldweg", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike:lifestyle:1", alt: "KuKirin X1 im Gelände", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:joyor-t10-60v-18ah-2x1000w:lifestyle:1", alt: "Joyor T10 an der Küste", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:teverun-blade-gt-ii:lifestyle:1", alt: "Teverun Blade GT II im Park", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:ausom-f1-max:lifestyle:1", alt: "Ausom F1 Max in den Dünen", status: "hersteller", kind: "lifestyle", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
    { src: "hersteller:dualtron-victor-ltd-dgt-60v-37-1ah-samsung:produkt:4", alt: "Dualtron Victor LTD, Produktansicht", status: "hersteller", kind: "produkt", credit: "Hersteller", license: "Herstellerbild, Quelle in data/media-hersteller.js" },
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
  /* Produktfotos: offizielle Herstellerbilder aus data/media-hersteller.js (Händlerfotos nur verlinkt in data/products.js).
     Hier Überschreibungen mit Herstellerbildern eintragen (status "hersteller", kind "produkt" | "lifestyle"). */
  products: {}
};
