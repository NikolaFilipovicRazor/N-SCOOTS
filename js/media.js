/* Medien-Auflösung: Foto aus dem Manifest, sonst gekennzeichneter Platzhalter. */
(function () {
  const M = window.NSCOOTS_MEDIA || {};
  const IMG = "assets/img/";
  const FALLBACK = IMG + "fehlt.svg";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const KNOWN = ["fehlt", "frei", "freigegeben", "lieferant"];
  const PHOTOS = "assets/photos/";
  const SUPPLIER = { credit: "E-Rydez", label: "Freigabe ausstehend" };
  const warned = new Set();
  const norm = (m) => { const st = String(m && m.status || "").trim().toLowerCase(); if (m && m.src && !KNOWN.includes(st) && !warned.has(m.src)) { warned.add(m.src); console.warn(`Medien-Manifest: unbekannter status "${m.status}" bei ${m.src}; wird wie "fehlt" behandelt.`); } return st; };
  const usable = (m) => { const st = norm(m); return !!(m && m.src && (st === "frei" || st === "freigegeben" || st === "lieferant")); };
  const labelOf = (m) => { const st = norm(m); if (st === "lieferant") return SUPPLIER.label; return m.kind === "symbol" ? "Symbolbild" : ""; };

  // Liefert {src, alt, photo:boolean, label}. placeholder = Pfad des SVG-Platzhalters.
  function resolve(m, placeholder, altFallback) {
    if (usable(m)) { const label = labelOf(m); const alt = (m.alt || altFallback || "") + (label === "Symbolbild" ? ", Symbolbild" : ""); return { src: m.src, alt, photo: true, product: m.kind === "produkt", label, credit: m.credit || "" }; }
    if (placeholder && typeof placeholder === "object") return placeholder; // bereits aufgelöstes Bild (z. B. Produktfoto)
    return { src: placeholder || FALLBACK, alt: altFallback || "", photo: false, label: "Platzhalter", credit: "" };
  }
  function tag(r, { eager = false, sizes = "", cls = "" } = {}) {
    return `<img src="${esc(r.src)}" alt="${esc(r.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" ${cls ? `class="${cls}"` : ""} ${sizes ? `sizes="${sizes}"` : ""} width="1600" height="1100" onerror="window.NSCOOTS_MEDIA_API.broken(this)">`;
  }
  // Bildrahmen mit Beschriftung (Symbolbild / Platzhalter) und Credit
  // Badge + Credit als Markup (aria-hidden: Information steht im Alt-Text)
  function marks(r) {
    const badge = r.label ? `<span class="media-badge" aria-hidden="true">${esc(r.label)}</span>` : "";
    const credit = r.credit ? `<span class="media-credit" aria-hidden="true">Foto: ${esc(r.credit)}</span>` : "";
    // Lieferantenfotos: ein kombiniertes Label statt zwei
    if (r.label === SUPPLIER.label) return `<span class="media-credit media-credit-supplier" aria-hidden="true">Foto: ${esc(r.credit)} · Freigabe ausstehend</span>`;
    return badge + credit;
  }
  function figure(r, opts = {}) {
    return `<div class="media ${opts.cls || ""}" ${opts.parallax ? `data-parallax="${opts.parallax}"` : ""}>${tag(r, opts)}${marks(r)}</div>`;
  }
  // Bild konnte nicht geladen werden: Platzhalter zeigen, Badge/Credit zurücksetzen
  function broken(img) {
    img.onerror = null; img.src = FALLBACK; img.alt = "Bild nicht verfügbar, Platzhalter";
    const frame = img.closest(".media, .card-media, .gallery-main, .brand-photo, .lightbox-stage, .gallery-thumbs button");
    if (frame) { frame.classList.add("is-missing"); frame.querySelectorAll(".media-credit").forEach((e) => e.remove()); frame.querySelectorAll(".media-badge").forEach((e) => { e.textContent = "Platzhalter"; }); }
  }
  function productImages(p) {
    const list = (M.products && M.products[p.id]) ? M.products[p.id].filter(usable) : [];
    if (list.length) return list.map((m) => ({ src: m.src, alt: (m.alt || p.model) + (m.kind === "symbol" ? ", Symbolbild" : ""), photo: true, product: m.kind === "produkt", label: labelOf(m), credit: m.credit || "" }));
    // Lieferanten-Produktfotos (assets/photos/produkte/…): Freigabe ausstehend, sichtbar gekennzeichnet
    const sup = (p.images || []).filter((f) => /^produkte\//.test(f));
    if (sup.length) return sup.map((f, i) => ({ src: PHOTOS + f, alt: `${p.model}, Produktfoto ${i + 1} (${SUPPLIER.credit})`, photo: true, product: true, label: SUPPLIER.label, credit: SUPPLIER.credit }));
    return (p.images || []).map((f, i) => ({ src: IMG + f, alt: `Platzhalter-Silhouette für ${p.model}, Ansicht ${i + 1}, kein Produktfoto`, photo: false, label: "Platzhalter", credit: "" }));
  }
  function heroVideo() {
    const v = M.hero && M.hero.video;
    return usable(v) ? v : null;
  }
  function stats() {
    const all = [];
    const walk = (o) => { if (!o || typeof o !== "object") return; if (o.src && "status" in o) all.push(o); else Object.values(o).forEach(walk); };
    walk(M);
    return { total: all.length, usable: all.filter(usable).length, missing: all.filter((m) => !usable(m)).map((m) => m.src) };
  }
  window.NSCOOTS_MEDIA_API = { resolve, tag, figure, marks, broken, productImages, heroVideo, stats, usable, M, FALLBACK };
})();
