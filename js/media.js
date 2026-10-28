/* Medien-Auflösung: Foto aus dem Manifest, sonst gekennzeichneter Platzhalter. */
(function () {
  const M = window.NSCOOTS_MEDIA || {};
  const IMG = "assets/img/";
  const FALLBACK = IMG + "fehlt.svg";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const usable = (m) => m && m.src && (m.status === "frei" || m.status === "freigegeben");

  // Liefert {src, alt, photo:boolean, label}. placeholder = Pfad des SVG-Platzhalters.
  function resolve(m, placeholder, altFallback) {
    if (usable(m)) return { src: m.src, alt: m.alt || altFallback || "", photo: true, label: m.kind === "symbol" ? "Symbolbild" : "", credit: m.credit || "" };
    return { src: placeholder || FALLBACK, alt: altFallback || "", photo: false, label: "Platzhalter", credit: "" };
  }
  function tag(r, { eager = false, sizes = "", cls = "" } = {}) {
    return `<img src="${esc(r.src)}" alt="${esc(r.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" ${cls ? `class="${cls}"` : ""} ${sizes ? `sizes="${sizes}"` : ""} width="1600" height="1100" onerror="this.onerror=null;this.src='${FALLBACK}'">`;
  }
  // Bildrahmen mit Beschriftung (Symbolbild / Platzhalter) und Credit
  function figure(r, opts = {}) {
    const badge = r.label ? `<span class="media-badge">${esc(r.label)}</span>` : "";
    const credit = r.credit ? `<span class="media-credit">Foto: ${esc(r.credit)}</span>` : "";
    return `<div class="media ${opts.cls || ""}" ${opts.parallax ? `data-parallax="${opts.parallax}"` : ""}>${tag(r, opts)}${badge}${credit}</div>`;
  }
  function productImages(p) {
    const list = (M.products && M.products[p.id]) ? M.products[p.id].filter(usable) : [];
    if (list.length) return list.map((m) => ({ src: m.src, alt: m.alt || p.model, photo: true, label: m.kind === "symbol" ? "Symbolbild" : "", credit: m.credit || "" }));
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
  window.NSCOOTS_MEDIA_API = { resolve, tag, figure, productImages, heroVideo, stats, usable, M, FALLBACK };
})();
