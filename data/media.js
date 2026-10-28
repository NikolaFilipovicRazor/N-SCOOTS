/* N SCOOTS – Medien-Manifest (Fotos und Videos)
 * -------------------------------------------------------------
 * Jeder Slot verweist auf eine Datei unter assets/photos/ bzw. assets/video/.
 * Fehlt die Datei, zeigt die Seite automatisch den gekennzeichneten
 * SVG-Platzhalter. So lassen sich Fotos nachliefern, ohne Code zu ändern.
 *
 * status: "fehlt" (Datei noch nicht vorhanden) · "frei" (freie Lizenz,
 *         Nachweis in ASSETS.md) · "freigegeben" (schriftliche Freigabe)
 * kind:   "foto" (echtes Foto) · "symbol" (Symbolbild: zeigt nicht das
 *         konkrete Verkaufsmodell, wird so beschriftet)
 * Rechte: Nur Dateien mit status "frei" oder "freigegeben" sind
 *         veröffentlichungsfertig. Credit-Pflicht je Lizenz beachten.
 */
window.NSCOOTS_MEDIA = {
  hero: {
    image: { src: "assets/photos/hero-stadt-abend.jpg", alt: "E-Scooter-Fahrt durch eine Stadt am Abend", status: "fehlt", kind: "foto", credit: "", license: "" },
    video: { src: "assets/video/hero-ride.mp4", poster: "assets/photos/hero-stadt-abend.jpg", status: "fehlt", credit: "", license: "" }
  },
  profiles: {
    alltag:  { src: "assets/photos/profil-alltag.jpg",  alt: "Pendler mit gefaltetem E-Scooter am Bahnhof", status: "fehlt", kind: "foto", credit: "", license: "" },
    touren:  { src: "assets/photos/profil-touren.jpg",  alt: "E-Scooter auf einer Uferstrasse", status: "fehlt", kind: "foto", credit: "", license: "" },
    offroad: { src: "assets/photos/profil-gelaende.jpg", alt: "E-Scooter auf einem Schotterweg", status: "fehlt", kind: "foto", credit: "", license: "" }
  },
  story: [
    { src: "assets/photos/story-1.jpg", alt: "Nahaufnahme Lenker und Display", status: "fehlt", kind: "foto", credit: "", license: "" },
    { src: "assets/photos/story-2.jpg", alt: "Scooter im Kofferraum", status: "fehlt", kind: "foto", credit: "", license: "" },
    { src: "assets/photos/story-3.jpg", alt: "Fahrt im Gelände", status: "fehlt", kind: "foto", credit: "", license: "" }
  ],
  brands: {
    kukirin:  { src: "assets/photos/marke-kukirin.jpg",  alt: "", status: "fehlt", kind: "symbol", credit: "", license: "" },
    joyor:    { src: "assets/photos/marke-joyor.jpg",    alt: "", status: "fehlt", kind: "symbol", credit: "", license: "" },
    teverun:  { src: "assets/photos/marke-teverun.jpg",  alt: "", status: "fehlt", kind: "symbol", credit: "", license: "" },
    dualtron: { src: "assets/photos/marke-dualtron.jpg", alt: "", status: "fehlt", kind: "symbol", credit: "", license: "" },
    rovoron:  { src: "assets/photos/marke-rovoron.jpg",  alt: "", status: "fehlt", kind: "symbol", credit: "", license: "" },
    ausom:    { src: "assets/photos/marke-ausom.jpg",    alt: "", status: "fehlt", kind: "symbol", credit: "", license: "" }
  },
  dirtbikes: { src: "assets/photos/dirtbike.jpg", alt: "E-Dirtbike im Gelände", status: "fehlt", kind: "symbol", credit: "", license: "" },
  /* Produktfotos: je Produkt-ID eine Liste. Erst eintragen, wenn Hersteller-
     oder Händlerfreigabe vorliegt (status "freigegeben"). */
  products: {
    /* "kukirin-g2-master": [{ src: "assets/photos/produkt-kukirin-g2-master-1.jpg", alt: "...", status: "freigegeben", kind: "foto", credit: "KuKirin", license: "Händlerfreigabe vom ..." }] */
  }
};
