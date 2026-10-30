/* N SCOOTS – Prototyp. Hash-Router + Ansichten. Keine Abhängigkeiten. */
(function () {
  const D = window.NSCOOTS_DATA, S = window.NSCOOTS_STORE, F = window.NSCOOTS_FMT, MA = window.NSCOOTS_MEDIA_API;
  const MEDIA = MA.M;
  const esc = F.esc;
  const $ = (sel, root = document) => root.querySelector(sel);
  const app = $("#app");
  const IMG = "assets/img/";
  const FALLBACK = IMG + "fehlt.svg";
  const byId = (id) => D.products.find((p) => p.id === id) || null;
  const brandName = (id) => (D.brands.find((b) => b.id === id) || {}).name || "";
  const catName = (id) => (D.categories.find((c) => c.id === id) || {}).name || "";
  const segName = (id) => (D.segments[id] || {}).name || "";
  const pimgs = (p) => MA.productImages(p);
  const imgSrc = (p, i = 0) => { const l = pimgs(p); return (l[i] || l[0] || { src: FALLBACK }).src; };
  const img = (p, i, { eager = false, alt = "", marks = true } = {}) => {
    const l = pimgs(p); const r = l[i] || l[0] || { src: FALLBACK, alt: "", label: "", credit: "" };
    return `<img src="${esc(r.src)}" alt="${esc(alt || r.alt)}" width="1100" height="760" ${r.product ? 'class="is-product"' : ""} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" onerror="window.NSCOOTS_MEDIA_API.broken(this)">` + (marks && r.photo ? MA.marks(r) : "");
  };
  const isProductImg = (p, i = 0) => { const r = pimgs(p)[i] || pimgs(p)[0]; return !!(r && r.product); };
  const lieferTag = (p) => { const s = (p.lieferbarkeit && p.lieferbarkeit.status) || ""; if (!s) return ""; const cls = /nicht lieferbar/.test(s) ? "tag" : /Vorbestellung/.test(s) ? "tag tag-accent" : "tag tag-ok"; const short = /nicht lieferbar/.test(s) ? "Zurzeit nicht lieferbar" : /Vorbestellung/.test(s) ? "Vorbestellung" : "Lieferbar"; return `<span class="${cls}" title="${esc(s)} (Stand ${F.date(p.lieferbarkeit.checked)}, E-Rydez)">${short}</span>`; };
  const abeTag = (p) => p.specs && p.specs.abe ? `<span class="tag">ABE · ${p.specs.speedKmh || 20} km/h</span>` : "";
  const canHover = () => window.matchMedia("(hover: hover)").matches;
  const placeholderAlt = (p) => { const r = pimgs(p)[0]; return r && r.photo ? r.alt : `Platzhalter-Silhouette für ${p.model}, kein Produktfoto`; };

  /* ---------- Routing ---------- */
  function parseHash() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs = ""] = raw.split("?");
    const query = {};
    new URLSearchParams(qs).forEach((v, k) => { query[k] = v; });
    const parts = path.split("/").filter(Boolean);
    return { path: "/" + parts.join("/"), parts, query };
  }
  function buildHash(path, query = {}) {
    const qs = Object.entries(query).filter(([, v]) => v !== "" && v != null).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
    return "#" + path + (qs ? "?" + qs : "");
  }
  function navigate(path, query) { location.hash = buildHash(path, query); }

  let lastPath = null;
  let viewCleanup = []; // Abos/Listener der aktuellen Ansicht
  function render() {
    viewCleanup.forEach((fn) => { try { fn(); } catch (e) {} }); viewCleanup = [];
    const route = parseHash();
    const view = route.parts[0] || "";
    let html, title;
    if (view === "") { ({ html, title } = viewHome()); }
    else if (view === "katalog") { ({ html, title } = viewCatalog(route.query)); }
    else if (view === "produkt") { ({ html, title } = viewProduct(route.parts[1])); }
    else if (view === "vergleich") { ({ html, title } = viewCompare()); }
    else if (view === "warenkorb") { ({ html, title } = viewCart()); }
    else if (view === "dirtbikes") { ({ html, title } = viewDirtbikes()); }
    else if (view === "info") { ({ html, title } = viewInfo()); }
    else if (view === "kontakt") { ({ html, title } = viewKontakt()); }
    else { ({ html, title } = viewNotFound()); }
    app.innerHTML = html;
    document.title = title ? `${title} – N SCOOTS` : "N SCOOTS – E-Scooter & E-Dirtbikes";
    updateNav(view);
    afterRender(view, route);
    const samePage = lastPath === route.path;
    const initial = lastPath === null;
    lastPath = route.path;
    if (!samePage && !initial) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      const h1 = $("h1", app); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
    }
  }
  function updateNav(view) {
    document.querySelectorAll("[data-nav]").forEach((a) => {
      const active = a.dataset.nav === view || (view === "" && a.dataset.nav === "home");
      if (active) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  /* ---------- Bausteine ---------- */
  const icons = {
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg>',
    compare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 3v18M16 3v18M3 8h5M16 8h5M3 16h5M16 16h5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };
  const legalTag = (p) => !p.chLegal ? "" : p.streetLegalCH ? `<span class="tag tag-ok">Strassenzugelassen CH · 20 km/h</span>` : `<span class="tag tag-signal">${esc(p.chLegal)}</span>`;
  const legalTagShort = (p) => p.streetLegalCH ? `<span class="tag tag-ok">CH zugelassen</span>` : (p.category === "escooter" && !p.specs.abe ? `<span class="tag">Privatgelände</span>` : "");
  const priceHtml = (p, big = false) => {
    if (p.price.chf != null) {
      return `<span class="price">${p.price.from ? '<span class="price-from">ab</span> ' : ""}${F.chf(p.price.chf)}</span>${big ? "" : `<span class="price-note">inkl. MwSt.*</span>`}`;
    }
    return `<span class="price">Preis offen</span>`;
  };
  function productCard(p, { compact = false } = {}) {
    const inCompare = S.compare().includes(p.id);
    const isAcc = p.category === "zubehoer";
    const lg = p.brand ? MA.logo(p.brand) : null;
    const cell = (k, v) => `<div><span>${k}</span><strong>${v == null ? "offen" : esc(v)}</strong></div>`;
    const specGrid = isAcc ? "" : `<div class="card-specgrid">
        ${cell("Motor", p.specs.motorW ? F.num(p.specs.motorW, "W") + (p.specs.motors === 2 ? " · 2 Motoren" : "") : null)}
        ${cell("Akku", p.specs.batteryV && p.specs.batteryAh ? `${p.specs.batteryV} V · ${p.specs.batteryAh} Ah` : (p.specs.batteryWh ? F.num(p.specs.batteryWh, "Wh") : null))}
        ${cell("Reichweite*", p.specs.rangeKm ? F.num(p.specs.rangeKm, "km") : null)}
        ${cell("Gewicht", p.specs.weightKg ? F.num(p.specs.weightKg, "kg") : null)}
      </div>`;
    const legalLine = isAcc ? "" : `<div class="card-legal ${p.streetLegalCH ? "ok" : ""}">${p.streetLegalCH ? "Strassenzugelassen CH" : p.category === "edirtbike" ? "Für Privatgelände" : p.specs.abe ? `Deutsche ABE · ${p.specs.speedKmh || 20} km/h` : "Für private Fahrflächen"}</div>`;
    return `
    <article class="card" data-id="${p.id}">
      <div class="card-media${pimgs(p).length > 1 && canHover() ? " has-alt" : ""}${isProductImg(p) ? " is-product" : ""}">${img(p, 0, { alt: placeholderAlt(p) })}${pimgs(p).length > 1 && canHover() ? `<img class="alt" src="${esc(imgSrc(p, 1))}" alt="" loading="lazy" decoding="async" width="1100" height="760" onerror="this.closest('.card-media').classList.remove('has-alt');this.remove()">` : ""}${pimgs(p).length > 1 ? `<span class="media-count" aria-hidden="true">${pimgs(p).length} Bilder</span>` : ""}</div>
      <div class="card-body">
        <div class="card-head">${lg ? `<img class="card-logo" src="${esc(lg)}" alt="${esc(brandName(p.brand))}" loading="lazy">` : ""}<div class="card-brand">${esc(p.brand ? brandName(p.brand) : catName(p.category))}${p.segment ? " · " + esc(segName(p.segment)) : p.category === "edirtbike" ? " · Dirtbike" : ""}</div></div>
        <h3 class="card-title"><a href="#/produkt/${p.id}">${esc(p.model)}</a></h3>
        <div class="card-tags">${lieferTag(p)}</div>
        ${isAcc ? `<p class="small muted" style="margin:0">${esc(p.summary)}</p>` : specGrid}
        ${legalLine}
        <div class="card-price">${priceHtml(p)}</div>
      </div>
      ${compact ? "" : `<div class="card-actions">
        <button class="btn btn-sm" type="button" data-action="add" data-id="${p.id}">In den Warenkorb</button>
        ${isAcc ? "" : `<button class="btn btn-sm btn-ghost" type="button" data-action="compare" data-id="${p.id}" aria-pressed="${inCompare}">${inCompare ? "Im Vergleich" : "Vergleichen"}</button>`}
      </div>`}
    </article>`;
  }
  const notice = (text, neutral = false) => `<div class="notice${neutral ? " notice-neutral" : ""}">${icons.info}<p>${text}</p></div>`;
  const refNote = `<p class="small muted">* Preise in CHF. Einführungspreise der Shop-Vorschau, unverbindlich bis Verkaufsstart.</p>`;

  /* ---------- Startseite ---------- */
  function viewHome() {
    const featured = ["teverun-fighter-mini-pro-ekfv", "kukirin-g2-master", "teverun-blade-mini-pro-ch-edition", "kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike"].map(byId).filter(Boolean);
    const brands = D.brands;
    const html = `
    ${(() => {
      const hv = MA.heroVideo(); const hi = MA.resolve(MEDIA.hero && MEDIA.hero.image, null, "E-Scooter-Fahrt durch eine Stadt am Abend");
      const hp = MA.resolve(MEDIA.hero && MEDIA.hero.product, null, "");
      const hpProd = hp.photo && MEDIA.hero.product && MEDIA.hero.product.model ? byId(MEDIA.hero.product.model) : null;
      const posterSrc = hv ? (hv.poster || (hi.photo ? hi.src : "")) : "";
      const media = hv
        ? `<video class="hero-video" autoplay muted loop playsinline preload="metadata" ${posterSrc ? `poster="${esc(posterSrc)}"` : ""} aria-label="Fahrt mit dem E-Scooter"><source src="${esc(hv.src)}" type="video/mp4"></video>`
        : hi.photo ? MA.tag(hi, { eager: true, cls: "hero-img" }) + MA.marks(hi)
        : `<svg class="hero-illu" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstrakte Illustration eines E-Scooters auf dunklem Grund" preserveAspectRatio="xMidYMid slice">
              <defs><pattern id="hl" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)"><path d="M0 0V40" stroke="#2f343d" stroke-width="1"/></pattern></defs>
              <rect width="1600" height="900" fill="#262a31"/><rect width="1600" height="900" fill="url(#hl)"/>
              <path d="M-40 700 H1640" stroke="#1f4fe0" stroke-width="12"/><path d="M-40 740 H1640" stroke="#3a3f49" stroke-width="2"/>
              <g fill="none" stroke="#f3f4f7" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" transform="translate(700 40) scale(1.1)">
                <circle cx="190" cy="500" r="56"/><circle cx="640" cy="500" r="56"/><path d="M246 500 H586"/><path d="M270 484 H370"/><path d="M604 484 L560 250 L545 190"/><path d="M505 190 H590"/>
              </g><circle cx="1404" cy="590" r="26" fill="none" stroke="#1f4fe0" stroke-width="9"/>
            </svg>`;
      const note = hv ? [hv.credit ? `Video: ${esc(hv.credit)}` : "", hi.photo && hi.credit ? `Standbild: ${esc(hi.credit)}` : ""].filter(Boolean).join(" · ") : hi.photo ? (hi.credit ? `Foto: ${esc(hi.credit)}` : "") : "Illustration, kein Produktfoto. Hero-Foto oder -Video folgt.";
      return `
    <section class="hero hero-media${hp.photo && !hv ? " has-product" : ""}${hi.photo ? " has-panel" : ""}" aria-labelledby="hero-title">
      <div class="hero-bg${hv ? "" : " hero-bg-plain"}" ${hv ? 'data-parallax="0.25"' : 'aria-hidden="true"'}>${hv ? media : ""}</div>
      <div class="wrap hero-content">
        <div data-reveal>
          <p class="hero-kicker">Premium Scooter <span class="sep">·</span> E-Mobility Schweiz</p>
          <h1 id="hero-title">Dein nächster Ride.<br><span class="h1-red">Premium Scooter.</span></h1>
          <p>Finde den Scooter, der zu dir passt: strassenzugelassen für den Alltag oder voller Power fürs Gelände. Schnell und einfach geliefert, sicher bezahlt, persönlich beraten, auf WhatsApp rund um die Uhr erreichbar.</p>
          <div class="hero-cta">
            <a class="btn btn-accent" href="#/katalog?kat=escooter">Premium Scooter entdecken</a>
            <a class="btn btn-ghost" href="#/katalog?kat=escooter&zulassung=ch">Strassenzugelassen CH</a>
          </div>
          <p class="hero-location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>${esc(D.meta.kontakt.abholung || "")}</p>
          <ul class="hero-usps"><li>Schnell &amp; einfach geliefert</li><li>Sicher bezahlen</li><li>WhatsApp-Support 24/7</li></ul>
        </div>
        ${hi.photo && !hv ? (() => { const hm = byId((MEDIA.hero.image && MEDIA.hero.image.model) || "kukirin-t3-2025-48v-15-6-ah-akku-800w"); return `<a class="hero-panel" href="${hm ? `#/produkt/${hm.id}` : "#/katalog?kat=escooter"}" data-reveal data-parallax="0.18">
          ${MA.tag(hi, { eager: true })}
          <span class="hero-panel-cap"><span><strong>${esc(hm ? hm.model : "Premium Scooter")}</strong><small>${hm ? (hm.streetLegalCH ? "Strassenzugelassen CH" : "Für private Fahrflächen") : ""}</small></span><span class="btn btn-ghost btn-sm">Modell ansehen</span></span>
        </a>`; })() : hp.photo && !hv ? `<a class="hero-product" href="${hpProd ? `#/produkt/${hpProd.id}` : "#/katalog?kat=escooter"}" data-reveal>
          <img src="${esc(hp.src)}" alt="${esc(hp.alt)}" width="1400" height="1400" fetchpriority="high" decoding="async" onerror="window.NSCOOTS_MEDIA_API.broken(this)">
        </a>` : ""}
        <div class="hero-tools">
          ${hv ? `<button class="btn btn-ghost btn-sm" type="button" data-action="video-toggle">Video pausieren</button>` : ""}
          ${note ? `<p class="hero-note">${note}</p>` : ""}
        </div>
      </div>
      <div class="hero-stripe" aria-hidden="true"></div>
    </section>`; })()}

    <section class="brand-band" aria-label="Marken">
      <div class="brand-band-track">${[0, 1].map((k) => D.brands.map((b) => { const lg = MA.logo(b.id); return `<a class="brand-pill" href="#/katalog?marke=${b.id}" ${k ? 'tabindex="-1" aria-hidden="true"' : ""}><span class="brand-pill-logo">${lg ? `<img src="${esc(lg)}" alt="">` : esc(b.name[0])}</span><span>${esc(b.name)}</span></a>`; }).join("")).join("")}</div>
    </section>

    <section class="trust" aria-label="So arbeiten wir">
      <div class="wrap">
        <ul class="trust-list">
          <li><strong>Schweizer Ansprechpartner</strong><span>Persönlich und nah, ${esc(D.meta.kontakt.ort)}</span></li>
          <li><strong>Sicher bezahlen</strong><span>TWINT, Karte, Rechnung zum Shopstart</span></li>
          <li><strong>Schnell &amp; einfach geliefert</strong><span>${esc(D.meta.kontakt.abholung || "")}</span></li>
          <li><strong>WhatsApp-Support 24/7</strong><span>Antwort meistens innerhalb 1–2 Stunden</span></li>
        </ul>
      </div>
    </section>

    <section class="service-strip" aria-label="Service">
      <div class="wrap service-list">
        <a href="#/info"><strong>2 Jahre Gewährleistung</strong><span>Gesetzliche Frist in der Schweiz</span></a>
        <a href="#/katalog?kat=zubehoer"><strong>Ersatzteile &amp; Service</strong><span>Das passende Teil direkt bestellen</span></a>
        <a href="#" data-action="whatsapp"><strong>WhatsApp 24/7</strong><span>Schnelle Antwort, persönlich</span></a>
      </div>
    </section>

    <section class="section" aria-labelledby="entries-title" data-reveal>
      <div class="wrap">
        <h2 id="entries-title" class="visually-hidden">Kategorien</h2>
        <div class="entry-grid">
          <a class="entry" href="#/katalog?kat=escooter">
            <span class="tag">${D.products.filter((p) => p.category === "escooter").length} Modelle</span>
            <div><h3>E-Scooter</h3><p>Alltag, Touren und Offroad. Von ${brandName("kukirin")} bis ${brandName("dualtron")}.</p></div>
            <svg viewBox="0 0 120 84" aria-hidden="true" fill="none" stroke="#1c1f24" stroke-width="4" stroke-linecap="round"><circle cx="22" cy="62" r="12"/><circle cx="96" cy="62" r="12"/><path d="M34 62h50M88 60l-8-38M74 22h14"/></svg>
          </a>
          <a class="entry entry-dirt" href="#/dirtbikes">
            <span class="tag tag-accent">${D.products.filter((p) => p.category === "edirtbike").length} Modell · Sortiment im Aufbau</span>
            <div><h3>E-Dirtbikes</h3><p>Elektrisches Motocross und Trail. Erstes Modell gelistet, mehr folgt.</p></div>
            <svg viewBox="0 0 120 84" aria-hidden="true" fill="none" stroke="#1538ab" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="60" r="18"/><circle cx="96" cy="60" r="18"/><path d="M36 52l18-24h26l16 24M54 28l10 18 16-18M80 20l-6 8M72 20h14"/></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="profiles-title">
      <div class="wrap">
        <div class="section-head"><div><h2 id="profiles-title">Was hast du vor?</h2><p class="muted">Wähle deinen Einsatz. Wir zeigen dir die passende Auswahl.</p></div></div>
        <div class="profile-grid">
          ${[
            ["alltag", "Strassenzugelassene", "Für deinen Alltag und den Weg zur Arbeit. 20 km/h, legal auf Schweizer Strassen.", "teverun-blade-mini-pro-ch-edition", "#/katalog?kat=escooter&zulassung=ch", D.products.filter((x) => x.streetLegalCH).length],
            ["touren", "Unter CHF 1’000", "Viel Scooter für dein Budget: Alltag, Pendeln, erste Touren.", "kukirin-g2-master", "#/katalog?kat=escooter&max=1000", D.products.filter((x) => x.category === "escooter" && x.price.chf != null && x.price.chf <= 1000).length],
            ["offroad", "Performance", "Doppelmotor, grosse Akkus, viel Federweg. Für private Fahrflächen.", "teverun-blade-gt-ii-plus", "#/katalog?kat=escooter&segment=offroad", D.products.filter((x) => x.segment === "offroad").length]
          ].map(([seg, title, text, pid, href, n]) => { const p = byId(pid); const r = MA.resolve(MEDIA.profiles && MEDIA.profiles[seg], p ? pimgs(p)[0] : null, p ? placeholderAlt(p) : ""); return `
          <a class="profile" href="${href}" data-reveal>
            <div class="profile-media media" data-parallax="0.12">${MA.tag(r)}${r.photo ? MA.marks(r) : `<span class="media-badge" aria-hidden="true">Platzhalter</span>`}</div>
            <div class="profile-body"><h3>${title}</h3><p>${text}</p><span class="profile-link">${n} Modelle ansehen</span></div>
          </a>`; }).join("")}
        </div>
      </div>
    </section>

    <section class="section story" aria-labelledby="story-title">
      <div class="wrap">
        <div class="section-head" data-reveal><div><h2 id="story-title">Mehr als Mobilität.</h2><p class="muted">Drei Situationen, drei Antworten aus dem Sortiment.</p></div></div>
        ${[
          ["Morgens zum Zug, abends an den See.", "Ein Alltagsscooter wiegt typisch bis 25 kg, faltet sich in Sekunden und hängt am Abend wieder am Ladegerät. Reichweite reicht für den Weg, nicht für den Rekord.", "teverun-fighter-mini-pro-ekfv", "#/katalog?kat=escooter&zulassung=ch", "Strassenzugelassene Modelle"],
          ["Mehr Akku, mehr Ruhe.", "Ab rund 1000 Wh wird aus dem Pendler ein Tourenfahrzeug. Doppelmotor-Modelle nehmen Steigungen ohne Drama, kosten aber Gewicht.", "kukirin-g2-master", "#/katalog?kat=escooter&segment=touren", "Tourenmodelle"],
          ["Schotter, Wiese, Waldweg.", "Mit dem KuKirin X1 ist das erste Mini-Dirtbike gelistet. Für Privatgelände gedacht; ob und wie ein Modell auf die Strasse darf, prüfen wir je Ausführung.", "kukirin-x1-48v-208ah-akku-1000w-mini-dirtbike", "#/dirtbikes", "E-Dirtbikes"]
        ].map(([h, t, pid, href, cta], i) => { const p = byId(pid); const r = MA.resolve(MEDIA.story && MEDIA.story[i], p ? pimgs(p)[0] : null, p ? placeholderAlt(p) : ""); return `
        <article class="story-row${i % 2 ? " flip" : ""}" data-reveal>
          <div class="story-media media" data-parallax="0.2">${MA.tag(r)}${r.photo ? MA.marks(r) : `<span class="media-badge" aria-hidden="true">Platzhalter</span>`}</div>
          <div class="story-text"><h3>${h}</h3><p>${t}</p><a class="btn btn-ghost btn-sm" href="${href}">${cta}</a></div>
        </article>`; }).join("")}
      </div>
    </section>

    ${(() => { const g = (MEDIA.gallery || []).map((m) => MA.resolve(m, null, "")).filter((r) => r.photo); if (!g.length) return ""; return `
    <section class="section gallery" aria-labelledby="gallery-title">
      <div class="wrap">
        <div class="section-head" data-reveal><div><h2 id="gallery-title">Raus. <span class="h1-red">Dein Stil.</span></h2><p class="muted">Unterwegs mit unseren Marken. Tippe ein Bild, um es gross zu sehen.</p></div></div>
        <div class="mosaic">${g.map((r, i) => `<button class="mosaic-item" type="button" data-action="gallery" data-i="${i}" data-reveal aria-label="Bild vergrössern: ${esc(r.alt)}"><img src="${esc(r.src)}" alt="${esc(r.alt)}" loading="lazy" decoding="async" width="1600" height="1066" onerror="window.NSCOOTS_MEDIA_API.broken(this)"></button>`).join("")}</div>
      </div>
    </section>`; })()}

    ${(() => { const ids = ["teverun-fighter-mini-pro-ekfv", "kukirin-g2-master", "rovoron-s7"]; const items = ids.map(byId).filter(Boolean); if (items.length < 2) return ""; return `
    <section class="showcase" aria-labelledby="showcase-title">
      <div class="showcase-sticky">
        <div class="wrap showcase-inner">
          <div class="showcase-text">
            <p class="hero-kicker">Premium Scooter</p>
            <h2 id="showcase-title">Drei Charaktere.<br><span class="h1-red">Ein Anspruch.</span></h2>
            <div class="showcase-captions">${items.map((p, i) => `<div class="showcase-cap${i === 0 ? " is-active" : ""}" data-i="${i}"><h3>${esc(p.model)}</h3><p>${esc(p.summary)}</p><p class="showcase-meta">${p.streetLegalCH ? "Strassenzugelassen CH · " : ""}${esc(F.num(p.specs.batteryWh, "Wh") || "")} · ${esc(F.num(p.specs.rangeKm, "km") || "")} · ${F.chf(p.price.chf)}</p><a class="btn btn-accent btn-sm" href="#/produkt/${p.id}">Zum Modell</a></div>`).join("")}</div>
            <div class="showcase-dots" role="list">${items.map((p, i) => `<span role="listitem" class="${i === 0 ? "is-active" : ""}" data-i="${i}" aria-label="${esc(p.model)}"></span>`).join("")}</div>
          </div>
          <div class="showcase-stage">${items.map((p, i) => `<img class="showcase-img${i === 0 ? " is-active" : ""}" data-i="${i}" src="${esc(imgSrc(p, 0))}" alt="${esc(p.model)}" width="1200" height="1200" ${i === 0 ? "" : 'loading="lazy"'} decoding="async" onerror="window.NSCOOTS_MEDIA_API.broken(this)">`).join("")}</div>
        </div>
      </div>
    </section>`; })()}

    <section class="section" aria-labelledby="brand-tabs-title">
      <div class="wrap">
        <div class="section-head"><div><h2 id="brand-tabs-title">Marken im Fokus</h2><p class="muted">Wähle eine Marke, die Auswahl wechselt direkt.</p></div></div>
        <div class="brand-tabs" role="tablist" aria-label="Marken">
          ${D.brands.map((b, i) => { const lg = MA.logo(b.id); return `<button class="brand-tab" role="tab" type="button" id="tab-${b.id}" aria-selected="${i === 0}" aria-controls="panel-brands" data-brand="${b.id}" tabindex="${i === 0 ? 0 : -1}">${lg ? `<img src="${esc(lg)}" alt="" width="40" height="40">` : `<span class="brand-initial" aria-hidden="true">${esc(b.name[0])}</span>`}<span>${esc(b.name)}</span></button>`; }).join("")}
        </div>
        <div id="panel-brands" role="tabpanel" aria-labelledby="tab-${D.brands[0].id}" class="brand-panel"></div>
      </div>
    </section>

    <section class="section" aria-labelledby="featured-title" data-reveal>
      <div class="wrap">
        <div class="section-head">
          <div><h2 id="featured-title">Ausgewählte Modelle</h2><p class="muted">Strassenzugelassen für den Alltag, Performance fürs Gelände, dazu das erste Dirtbike.</p></div>
          <a class="btn btn-ghost btn-sm" href="#/katalog">Alle Modelle</a>
        </div>
        <div class="product-grid">${featured.map((p) => productCard(p)).join("")}</div>
        ${refNote}
      </div>
    </section>

    <section class="section" aria-labelledby="brands-title" data-reveal>
      <div class="wrap">
        <div class="section-head"><div><h2 id="brands-title">Alle Marken</h2><p class="muted">Sechs Marken, ein Anspruch: Premium Scooter mit klaren Daten.</p></div></div>
        <div class="brand-strip">
          ${brands.map((b) => { const prices = D.products.filter((p) => p.brand === b.id && p.price.chf != null).map((p) => p.price.chf); const n = D.products.filter((p) => p.brand === b.id).length; const from = prices.length ? `ab ${F.chf(Math.min(...prices))}` : "Preise offen"; const bm = MEDIA.brands && MEDIA.brands[b.id]; const br = MA.usable(bm) ? MA.resolve(bm, null, "") : null; const bimg = br ? `<span class="brand-photo"><img src="${esc(br.src)}" alt="" loading="lazy" decoding="async" onerror="const c=this.closest('.brand-chip');c.classList.remove('has-photo');this.closest('.brand-photo').remove()">${MA.marks(br)}</span>` : ""; return `<a class="brand-chip${b.featured ? " featured" : ""}${bimg ? " has-photo" : ""}" href="#/katalog?marke=${b.id}">${bimg}<span class="brand-top"><strong>${esc(b.name)}</strong><span class="tag">${n} ${n === 1 ? "Modell" : "Modelle"}</span></span><span>${esc(b.blurb)}</span><span class="brand-price">${from}</span></a>`; }).join("")}
        </div>
      </div>
    </section>

    <section class="service-dark" aria-labelledby="service-title">
      <div class="wrap service-dark-inner">
        <div data-reveal>
          <p class="hero-kicker">N SCOOTS in ${esc(D.meta.kontakt.ort)}</p>
          <h2 id="service-title">Du fährst.<br>Wir sind da.</h2>
          <p>Ehrliche Beratung, klare Antworten und persönlicher Support. Auf WhatsApp rund um die Uhr erreichbar, Antwort meistens innerhalb 1–2 Stunden.</p>
          <div class="hero-cta"><a class="btn btn-accent" href="#" data-action="whatsapp">Per WhatsApp fragen</a><a class="btn btn-ghost" href="tel:${esc((D.meta.kontakt.telefon || "").replace(/\s+/g, ""))}">${esc(D.meta.kontakt.telefon)}</a></div>
        </div>
        <dl class="service-rows" data-reveal>
          <div><dt>Schnell &amp; einfach geliefert.</dt><dd>Schweizweite Lieferung oder Abholung in ${esc(D.meta.kontakt.ort)}. Lieferzeit je Modell auf der Produktseite.</dd></div>
          <div><dt>Das passende Ersatzteil.</dt><dd>Reifen, Bremsen oder Ladegerät? <a href="#/katalog?kat=zubehoer">Ersatzteile ansehen</a> oder kurz fragen.</dd></div>
          <div><dt>Garantie &amp; Gewährleistung.</dt><dd>2 Jahre gesetzliche Gewährleistungsfrist. Bedingungen und Ablauf folgen zum Shopstart.</dd></div>
          <div><dt>Sicher bezahlen.</dt><dd>TWINT, Visa, Mastercard, Apple Pay, Google Pay und Rechnung zum Shopstart.</dd></div>
        </dl>
      </div>
    </section>

    <section class="section" aria-labelledby="info-cards-title">
      <div class="wrap">
        <h2 id="info-cards-title" class="visually-hidden">Kontakt und Abholung</h2>
        <div class="info-cards">
          <a class="info-card" href="#/kontakt" data-reveal><h3>Ein Ansprechpartner. Für deinen Ride.</h3><p>Fragen zum Modell, zu Ersatzteilen oder zu deiner Auswahl? Wir beraten dich persönlich.</p><strong>${esc(D.meta.kontakt.telefon)}</strong><span>WhatsApp 24/7, Antwort meistens innerhalb 1–2 Stunden · ${esc(D.meta.kontakt.email)}</span></a>
          <a class="info-card" href="#/info" data-reveal><h3>Abholung in ${esc(D.meta.kontakt.ort)}</h3><p>Hol deinen Scooter nach Terminvereinbarung bei uns ab oder lass ihn dir nach Hause liefern.</p><strong>Lieferung in die ganze Schweiz</strong><span>Schnell und einfach, Details zum Shopstart</span></a>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="help-title" data-reveal>
      <div class="wrap">
        <div class="section-head"><div><h2 id="help-title">Welcher Scooter passt zu dir?</h2><p class="muted">Drei Fragen, die den Grossteil der Entscheidung ausmachen.</p></div></div>
        <div class="help-grid">
          <div class="help-step"><h3>Wie weit fährst du?</h3><p>Bis 15 km am Tag reichen 600–800 Wh. Für Touren und Hügel lohnen sich 1000 Wh und mehr. Reichweiten sind Herstellerangaben unter Idealbedingungen.</p></div>
          <div class="help-step"><h3>Trägst du ihn?</h3><p>Treppen, Bahn, Kofferraum: unter 25 kg ist angenehm. Doppelmotor-Modelle wiegen 30 kg und mehr.</p></div>
          <div class="help-step"><h3>Strasse oder Gelände?</h3><p>Für den Strassenverkehr braucht jede Ausführung einen Zulassungsnachweis. Offroad-Modelle sind fürs Privatgelände gedacht.</p></div>
        </div>
        <p style="margin-top:16px"><a href="#/info">Mehr zu Zulassung, Reichweite und Demo-Status</a></p>
      </div>
    </section>`;
    return { html, title: "" };
  }

  /* ---------- Katalog ---------- */
  function filterState(q) {
    return {
      q: (q.q || "").trim(),
      marke: (q.marke || "").split(",").filter(Boolean),
      kat: q.kat || "",
      segment: q.segment || "",
      zulassung: q.zulassung || "",
      min: q.min ? Number(q.min) : "",
      max: q.max ? Number(q.max) : "",
      sort: q.sort || "empfehlung"
    };
  }
  function stateToQuery(st) {
    return { q: st.q, marke: st.marke.join(","), kat: st.kat, segment: st.segment, zulassung: st.zulassung, min: st.min === "" ? "" : String(st.min), max: st.max === "" ? "" : String(st.max), sort: st.sort === "empfehlung" ? "" : st.sort };
  }
  const rangeMax = (r) => { if (r == null) return null; if (typeof r === "number") return r; const m = String(r).match(/\d+(?:\.\d+)?/g); return m ? Math.max(...m.map(Number)) : null; };
  function applyFilters(st) {
    let list = D.products.slice();
    let hiddenNoPrice = 0;
    if (st.kat) list = list.filter((p) => p.category === st.kat);
    if (st.marke.length) list = list.filter((p) => p.brand && st.marke.includes(p.brand));
    if (st.segment) list = list.filter((p) => p.segment === st.segment);
    if (st.zulassung === "ch") list = list.filter((p) => p.streetLegalCH);
    if (st.q) {
      const terms = st.q.toLowerCase().split(/\s+/).filter(Boolean);
      list = list.filter((p) => { const hay = `${p.model} ${brandName(p.brand)} ${p.summary} ${catName(p.category)} ${segName(p.segment)}`.toLowerCase(); return terms.every((t) => hay.includes(t)); });
    }
    if (st.min !== "" || st.max !== "") {
      const before = list.length;
      list = list.filter((p) => p.price.chf != null);
      hiddenNoPrice = before - list.length;
      if (st.min !== "") list = list.filter((p) => p.price.chf >= st.min);
      if (st.max !== "") list = list.filter((p) => p.price.chf <= st.max);
    }
    const cmpNullLast = (get, dir = 1) => (a, b) => { const x = get(a), y = get(b); if (x == null && y == null) return 0; if (x == null) return 1; if (y == null) return -1; return (x - y) * dir; };
    switch (st.sort) {
      case "preis-auf": list.sort(cmpNullLast((p) => p.price.chf)); break;
      case "preis-ab": list.sort(cmpNullLast((p) => p.price.chf, -1)); break;
      case "reichweite": list.sort(cmpNullLast((p) => rangeMax(p.specs.rangeKm), -1)); break;
      case "gewicht": list.sort(cmpNullLast((p) => p.specs.weightKg)); break;
      case "name": list.sort((a, b) => a.model.localeCompare(b.model, "de")); break;
      default: break;
    }
    return { list, hiddenNoPrice };
  }
  function viewCatalog(query) {
    const st = filterState(query);
    const html = `
    <div class="wrap">
      <div class="page-head">
        <h1>${st.kat ? esc(catName(st.kat)) : "Alle Modelle"}</h1>
        <p class="muted">Premium Scooter von KuKirin, Joyor, Teverun, Dualtron, Rovoron und Ausom. Preise in CHF, Lieferstatus je Modell.</p>
      </div>
      <div class="catalog-layout">
        <div>
          <button class="btn btn-ghost filter-toggle" type="button" id="filter-toggle" aria-expanded="false" aria-controls="filters">Filter anzeigen</button>
          <form class="filters" id="filters" hidden novalidate>
            <div class="field">
              <label for="f-q">Suche</label>
              <input type="search" id="f-q" name="q" placeholder="Modell oder Marke" value="${esc(st.q)}" autocomplete="off">
            </div>
            <fieldset><legend>Kategorie</legend>
              <label class="check"><input type="radio" name="kat" value="" ${st.kat === "" ? "checked" : ""}> Alle</label>
              <label class="check"><input type="radio" name="kat" value="escooter" ${st.kat === "escooter" ? "checked" : ""}> E-Scooter</label>
              <label class="check"><input type="radio" name="kat" value="edirtbike" ${st.kat === "edirtbike" ? "checked" : ""}> E-Dirtbikes</label>
              <label class="check"><input type="radio" name="kat" value="zubehoer" ${st.kat === "zubehoer" ? "checked" : ""}> Ersatzteile &amp; Zubehör</label>
            </fieldset>
            <fieldset><legend>Marke</legend>
              ${D.brands.map((b) => `<label class="check"><input type="checkbox" name="marke" value="${b.id}" ${st.marke.includes(b.id) ? "checked" : ""}> ${esc(b.name)}</label>`).join("")}
            </fieldset>
            <fieldset><legend>Einsatz</legend>
              <label class="check"><input type="radio" name="segment" value="" ${st.segment === "" ? "checked" : ""}> Alle</label>
              ${Object.entries(D.segments).map(([id, s]) => `<label class="check"><input type="radio" name="segment" value="${id}" ${st.segment === id ? "checked" : ""}> ${esc(s.name)}</label>`).join("")}
            </fieldset>
            <fieldset><legend>Strassenzulassung</legend>
              <label class="check"><input type="checkbox" name="zulassung" value="ch" ${st.zulassung === "ch" ? "checked" : ""}> Nur strassenzugelassen (CH)</label>
            </fieldset>
            <fieldset><legend>Referenzpreis (CHF)</legend>
              <div class="range-row">
                <div class="field"><label for="f-min" class="visually-hidden">Mindestpreis</label><input type="number" id="f-min" name="min" inputmode="numeric" min="0" step="10" placeholder="von" value="${st.min}"></div>
                <div class="field"><label for="f-max" class="visually-hidden">Höchstpreis</label><input type="number" id="f-max" name="max" inputmode="numeric" min="0" step="10" placeholder="bis" value="${st.max}"></div>
              </div>
              <p class="small muted" style="margin:4px 0 0">Blendet Modelle ohne Preisangabe aus.</p>
            </fieldset>
            <button class="btn btn-ghost btn-sm" type="button" data-action="reset-filters">Filter zurücksetzen</button>
          </form>
        </div>
        <div>
          <div class="catalog-toolbar">
            <p class="result-count" id="result-count" aria-live="polite"></p>
            <div class="field">
              <label for="f-sort">Sortierung</label>
              <select id="f-sort" name="sort">
                <option value="empfehlung" ${st.sort === "empfehlung" ? "selected" : ""}>Empfehlung</option>
                <option value="preis-auf" ${st.sort === "preis-auf" ? "selected" : ""}>Preis aufsteigend</option>
                <option value="preis-ab" ${st.sort === "preis-ab" ? "selected" : ""}>Preis absteigend</option>
                <option value="reichweite" ${st.sort === "reichweite" ? "selected" : ""}>Reichweite (Herstellerangabe)</option>
                <option value="gewicht" ${st.sort === "gewicht" ? "selected" : ""}>Gewicht aufsteigend</option>
                <option value="name" ${st.sort === "name" ? "selected" : ""}>Name A–Z</option>
              </select>
            </div>
          </div>
          <div class="active-filters" id="active-filters"></div>
          <div id="results"></div>
          ${refNote}
        </div>
      </div>
    </div>`;
    return { html, title: st.kat ? catName(st.kat) : "Katalog" };
  }
  function renderResults(st) {
    const { list, hiddenNoPrice } = applyFilters(st);
    const count = $("#result-count"), results = $("#results"), active = $("#active-filters");
    if (!count || !results) return;
    count.textContent = list.length === 1 ? "1 Modell" : `${list.length} Modelle`;
    const chips = [];
    if (st.q) chips.push({ k: "q", label: `Suche: ${st.q}` });
    st.marke.forEach((m) => chips.push({ k: "marke", v: m, label: brandName(m) }));
    if (st.kat) chips.push({ k: "kat", label: catName(st.kat) });
    if (st.segment) chips.push({ k: "segment", label: segName(st.segment) });
    if (st.zulassung) chips.push({ k: "zulassung", label: "Strassenzugelassen CH" });
    if (st.min !== "") chips.push({ k: "min", label: `ab ${F.chf(st.min)}` });
    if (st.max !== "") chips.push({ k: "max", label: `bis ${F.chf(st.max)}` });
    active.innerHTML = chips.map((c) => `<button type="button" data-action="remove-filter" data-k="${c.k}" data-v="${esc(c.v || "")}" aria-label="Filter entfernen: ${esc(c.label)}">${esc(c.label)} ✕</button>`).join("");
    if (!list.length) {
      results.innerHTML = `<div class="empty"><h3>Nichts gefunden</h3><p class="muted">${st.q ? `Für «${esc(st.q)}» gibt es kein Modell.` : "Die Kombination aus Filtern liefert kein Modell."}${hiddenNoPrice ? ` ${hiddenNoPrice} Modelle ohne Preisangabe sind durch den Preisfilter ausgeblendet.` : ""}</p><button class="btn" type="button" data-action="reset-filters">Alle Modelle anzeigen</button></div>`;
    } else {
      results.innerHTML = (hiddenNoPrice ? `<p class="small muted">${hiddenNoPrice} Modelle ohne Preisangabe durch Preisfilter ausgeblendet.</p>` : "") + `<div class="product-grid">${list.map((p) => productCard(p)).join("")}</div>`;
    }
  }
  function bindCatalog(query) {
    let st = filterState(query);
    const form = $("#filters"), toggle = $("#filter-toggle");
    const sync = () => { history.replaceState(null, "", buildHash("/katalog", stateToQuery(st))); renderResults(st); };
    renderResults(st);
    toggle.addEventListener("click", () => { const open = form.hasAttribute("hidden"); if (open) form.removeAttribute("hidden"); else form.setAttribute("hidden", ""); toggle.setAttribute("aria-expanded", String(open)); toggle.textContent = open ? "Filter ausblenden" : "Filter anzeigen"; });
    form.addEventListener("submit", (e) => e.preventDefault());
    let t;
    form.addEventListener("input", (e) => {
      const el = e.target;
      if (el.name === "q") { clearTimeout(t); t = setTimeout(() => { st.q = el.value.trim(); sync(); }, 120); return; }
      if (el.name === "min" || el.name === "max") { clearTimeout(t); t = setTimeout(() => { st[el.name] = el.value === "" ? "" : Math.max(0, Number(el.value)); sync(); }, 200); return; }
      if (el.name === "kat") { st.kat = el.value; sync(); return; }
      if (el.name === "segment") { st.segment = el.value; sync(); return; }
      if (el.name === "zulassung") { st.zulassung = el.checked ? "ch" : ""; sync(); return; }
      if (el.name === "marke") { st.marke = [...form.querySelectorAll('input[name="marke"]:checked')].map((i) => i.value); sync(); }
    });
    $("#f-sort").addEventListener("change", (e) => { st.sort = e.target.value; sync(); });
    const ac = new AbortController(); viewCleanup.push(() => ac.abort());
    app.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]"); if (!btn) return;
      if (btn.dataset.action === "reset-filters") { st = filterState({}); form.reset(); form.querySelector('input[name="kat"][value=""]').checked = true; form.querySelector('input[name="segment"][value=""]').checked = true; $("#f-sort").value = "empfehlung"; sync(); $("#f-q").focus(); }
      if (btn.dataset.action === "remove-filter") {
        const k = btn.dataset.k;
        if (k === "marke") { st.marke = st.marke.filter((m) => m !== btn.dataset.v); form.querySelector(`input[name="marke"][value="${btn.dataset.v}"]`).checked = false; }
        else if (k === "q") { st.q = ""; $("#f-q").value = ""; }
        else if (k === "min" || k === "max") { st[k] = ""; form.querySelector(`[name="${k}"]`).value = ""; }
        else if (k === "zulassung") { st.zulassung = ""; form.querySelector('input[name="zulassung"]').checked = false; }
        else { st[k] = ""; form.querySelector(`input[name="${k}"][value=""]`).checked = true; }
        sync(); $("#result-count").focus?.();
      }
    }, { signal: ac.signal });
    // Rerender compare/cart button states
    viewCleanup.push(S.subscribe(() => { if (parseHash().parts[0] === "katalog") renderResults(st); }));
  }

  /* ---------- Produktdetail ---------- */
  const row = (label, value, unit) => { const v = value == null || value === "" ? null : (unit ? F.num(value, unit) : value); return `<tr><th scope="row">${label}</th><td${v == null ? ' class="open"' : ""}>${v == null ? "Angabe offen" : esc(v)}</td></tr>`; };
  function viewProduct(id) {
    const p = byId(id);
    if (!p) return viewNotFound(`Das Produkt «${esc(id || "")}» gibt es nicht.`);
    const isAcc = p.category === "zubehoer";
    const s = p.specs || {};
    const inCompare = S.compare().includes(p.id);
    const html = `
    <div class="wrap">
      <nav class="breadcrumb" aria-label="Pfad"><a href="#/">Start</a><span>/</span><a href="#/katalog?kat=${p.category}">${esc(catName(p.category))}</a>${p.brand ? `<span>/</span><a href="#/katalog?marke=${p.brand}">${esc(brandName(p.brand))}</a>` : ""}</nav>
      <div class="pdp">
        <div>
          ${pimgs(p).length ? `<button class="gallery-main${isProductImg(p) ? " is-product" : ""}" id="gallery-main" type="button" data-action="lightbox" data-i="0" aria-label="Bild vergrössern: ${esc(placeholderAlt(p))}">${img(p, 0, { eager: true, alt: placeholderAlt(p) })}</button>` : `<div class="gallery-main"><img src="${FALLBACK}" alt="Kein Bild vorhanden" width="1100" height="760"></div>`}
          ${pimgs(p).length > 1 ? `<div class="gallery-thumbs${isProductImg(p) ? " is-product" : ""}" role="group" aria-label="Bildauswahl">${pimgs(p).map((r, i) => `<button type="button" data-action="thumb" data-i="${i}" aria-pressed="${i === 0}" aria-label="Ansicht ${i + 1}: ${esc(r.alt)}">${img(p, i, { alt: "", marks: false })}</button>`).join("")}</div>` : ""}
          <p class="small muted" style="margin-top:8px">${pimgs(p)[0] && pimgs(p)[0].photo ? "Tippen zum Vergrössern." : "Produktbilder folgen."}</p>
        </div>
        <div class="pdp-info">
          <div>
            <div class="card-brand">${esc(p.brand ? brandName(p.brand) : catName(p.category))}</div>
            <h1>${esc(p.model)}</h1>
          </div>
          <div class="pdp-status">
            ${p.segment ? `<span class="tag tag-accent">${esc(segName(p.segment))}</span>` : p.category === "edirtbike" ? `<span class="tag tag-accent">E-Dirtbike</span>` : ""}
            ${lieferTag(p)}${abeTag(p)}
            ${legalTag(p)}
            <span class="tag">Demo: nicht bestellbar</span>
          </div>
          <p>${esc(p.summary)}</p>
          <div class="price-block">
            <div>${priceHtml(p, true)}</div>
            <p class="small muted" style="margin:0">${esc(p.price.note)} Inkl. MwSt., Versand wird vor Verkaufsstart festgelegt.</p>
          </div>
          ${p.variants.length ? `<fieldset class="variant-list" id="variants"><legend class="visually-hidden">Ausführung</legend>
            ${p.variants.map((v, i) => `<label class="variant"><input type="radio" name="variant" value="${v.id}" ${i === 0 ? "checked" : ""}><span><strong>${esc(v.name)}</strong><span>${esc(v.note)}</span></span></label>`).join("")}
          </fieldset>` : ""}
          <div class="buy-row">
            <button class="btn btn-accent" type="button" data-action="add" data-id="${p.id}">In den Warenkorb (Demo)</button>
            ${isAcc ? "" : `<button class="btn btn-ghost" type="button" data-action="compare" data-id="${p.id}" aria-pressed="${inCompare}">${inCompare ? "Im Vergleich" : "Vergleichen"}</button>`}
          </div>
          ${notice(`<strong>Lieferbarkeit:</strong> ${esc(p.lieferbarkeit ? p.lieferbarkeit.status : "offen")} (Stand ${F.date(p.lieferbarkeit && p.lieferbarkeit.checked)}). ${esc(D.meta.kontakt.abholung || "")}.`, true)}
          ${isAcc ? "" : `
          <h2 style="margin-top:8px">Technische Daten</h2>
          <table class="spec-table">
            <tbody>
              ${row("Motor (nominal)", s.motorW, "W")}
              ${row("Spitzenleistung", s.peakW, "W")}
              ${row("Anzahl Motoren", s.motors)}
              ${row("Akku", s.batteryV && s.batteryAh ? `${s.batteryV} V · ${s.batteryAh} Ah` : (s.batteryV ? `${s.batteryV} V` : null))}
              ${row("Kapazität", s.batteryWh, "Wh")}
              ${row("Reichweite (Herstellerangabe)", s.rangeKm, "km")}
              ${row("Höchstgeschwindigkeit (Herstellerangabe)", s.speedKmh, "km/h")}
              ${row("Betriebserlaubnis", s.abe ? "Deutsche ABE (Allgemeine Betriebserlaubnis)" : "keine ausgewiesen")}
              ${row("Gewicht", s.weightKg, "kg")}
              ${row("Max. Zuladung", s.maxLoadKg, "kg")}
              ${row("Reifen", s.tires)}
              ${row("Bremsen", s.brakes)}
              ${row("Schutzart", s.ip)}
              <tr><th scope="row">Strassenzulassung Schweiz</th><td>${p.streetLegalCH ? `<span class="tag tag-ok">Ja, 20 km/h-Version (Händlerangabe)</span>` : `<span class="tag tag-signal">${esc(p.chLegal || "nicht ausgewiesen")}</span>`}</td></tr>
            </tbody>
          </table>
          ${notice("Reichweiten sind Herstellerangaben unter deren Testbedingungen (leichter Fahrer, flache Strecke, Eco-Modus). Im Alltag ist deutlich weniger üblich. Eine Zusage ist das nicht.")}
          <details class="fold"><summary>Quellen und Prüfdatum</summary>
            <ul class="source-list">${p.sources.map((src) => `<li><a href="${esc(src.url)}" rel="noopener" target="_blank">${esc(src.url.replace(/^https?:\/\//, "").split("/")[0])}</a> – ${esc(src.note)} (geprüft ${F.date(src.checked)})</li>`).join("")}</ul>
            <p class="small muted">Angaben wurden nicht selbst gemessen. Abweichungen zwischen Quellen sind bei der jeweiligen Ausführung vermerkt.</p>
          </details>
          <details class="fold"><summary>Strasse oder Gelände?</summary>
            <p>In der Schweiz strassenzugelassen sind die als eKFV- bzw. CH-Edition gekennzeichneten 20 km/h-Modelle (Händlerangabe, Nachweis wird vor Verkaufsstart geprüft). Eine deutsche ABE oder ein CE-Zeichen reicht für die Schweiz nicht automatisch. Alle anderen Modelle sind für Privatgelände gedacht.</p>
          </details>`}
        </div>
      </div>
    </div>`;
    return { html, title: p.model };
  }
  function bindProduct(id) {
    const p = byId(id); if (!p) return;
    const ac = new AbortController(); viewCleanup.push(() => ac.abort());
    app.addEventListener("click", (e) => {
      const b = e.target.closest('[data-action="thumb"]'); if (!b) return;
      const i = Number(b.dataset.i);
      const r = pimgs(p)[i]; const alt = (r ? r.alt : placeholderAlt(p)) + `, Ansicht ${i + 1}`;
      $("#gallery-main").innerHTML = img(p, i, { eager: true, alt });
      $("#gallery-main").dataset.i = i; $("#gallery-main").setAttribute("aria-label", `Bild vergrössern: ${alt}`);
      document.querySelectorAll('[data-action="thumb"]').forEach((t) => t.setAttribute("aria-pressed", String(t === b)));
    }, { signal: ac.signal });
  }
  /* Lightbox */
  let lb = { list: [], i: 0 };
  function lightboxShow() {
    const r = lb.list[lb.i]; if (!r) return;
    const im = $("#lightbox-img"); im.onerror = () => MA.broken(im); im.src = r.src; im.alt = r.alt || "";
    $("#lightbox-stage").classList.remove("is-missing");
    $("#lightbox-count").textContent = `${lb.i + 1} / ${lb.list.length}`;
    $("#lightbox-title-name").textContent = lb.name;
    $("#lightbox-badge").textContent = r.label || ""; $("#lightbox-badge").hidden = !r.label;
    $("#lightbox-credit").textContent = r.credit ? `Foto: ${r.credit}` : ""; $("#lightbox-credit").hidden = !r.credit;
    $("#lightbox-live").textContent = `Bild ${lb.i + 1} von ${lb.list.length}: ${r.alt || ""}`;
  }
  function lightboxOpen(p, i, trigger) { const list = pimgs(p); if (!list.length) return; lb = { list, name: p.model, i: Math.max(0, Math.min(i, list.length - 1)) }; lightboxShow(); openDialog($("#lightbox"), trigger); }
  document.addEventListener("keydown", (e) => {
    const d = $("#lightbox"); if (!d || !d.open) return;
    if (e.key === "ArrowRight") { lb.i = (lb.i + 1) % lb.list.length; lightboxShow(); }
    if (e.key === "ArrowLeft") { lb.i = (lb.i - 1 + lb.list.length) % lb.list.length; lightboxShow(); }
  });

  /* ---------- Vergleich ---------- */
  function viewCompare() {
    const ids = S.compare();
    const items = ids.map(byId).filter(Boolean);
    const slots = [];
    for (let i = 0; i < S.MAX_COMPARE; i++) {
      const p = items[i];
      slots.push(p ? `<div class="slot filled">${img(p, 0, { alt: placeholderAlt(p) })}<strong>${esc(p.model)}</strong><button class="btn btn-ghost" type="button" data-action="compare-remove" data-id="${p.id}">Entfernen</button></div>`
        : `<div class="slot"><button class="btn btn-ghost" type="button" data-action="compare-pick">+ Modell wählen</button><span class="small muted">Platz ${i + 1} von ${S.MAX_COMPARE}</span></div>`);
    }
    const rows = [
      ["Marke", (p) => brandName(p.brand)],
      ["Einsatz", (p) => segName(p.segment)],
      ["Preis", (p) => p.price.chf != null ? F.chf(p.price.chf) + (p.price.kind === "referenz" ? "*" : "") : null, (p) => p.price.chf, "min"],
      ["Motor (nominal)", (p) => F.num(p.specs.motorW, "W")],
      ["Spitzenleistung", (p) => F.num(p.specs.peakW, "W")],
      ["Motoren", (p) => p.specs.motors],
      ["Akku", (p) => p.specs.batteryV && p.specs.batteryAh ? `${p.specs.batteryV} V · ${p.specs.batteryAh} Ah` : (p.specs.batteryV ? `${p.specs.batteryV} V` : null)],
      ["Kapazität", (p) => F.num(p.specs.batteryWh, "Wh"), (p) => p.specs.batteryWh, "max"],
      ["Reichweite (Hersteller)", (p) => F.num(p.specs.rangeKm, "km")],
      ["Gewicht", (p) => F.num(p.specs.weightKg, "kg"), (p) => p.specs.weightKg, "min"],
      ["Max. Zuladung", (p) => F.num(p.specs.maxLoadKg, "kg")],
      ["Reifen", (p) => p.specs.tires],
      ["Bremsen", (p) => p.specs.brakes],
      ["Schutzart", (p) => p.specs.ip],
      ["CH-Strassentauglichkeit", (p) => p.chLegal || "nicht bestätigt"]
    ];
    const table = items.length >= 2 ? `
      <div class="compare-table-wrap">
        <table class="compare-table">
          <caption class="visually-hidden">Vergleich von ${items.length} Modellen</caption>
          <thead><tr><th scope="col">Kriterium</th>${items.map((p) => `<th scope="col"><a href="#/produkt/${p.id}">${esc(p.model)}</a></th>`).join("")}</tr></thead>
          <tbody>${rows.map(([label, get, numGet, best]) => {
            let bestVal = null;
            if (numGet) { const nums = items.map(numGet).filter((n) => n != null); if (nums.length >= 2) bestVal = best === "min" ? Math.min(...nums) : Math.max(...nums); }
            return `<tr><th scope="row">${label}</th>${items.map((p) => { const v = get(p); const isBest = bestVal != null && numGet(p) === bestVal; return `<td class="${v == null ? "open" : ""}${isBest ? " best" : ""}">${v == null ? "offen" : esc(v)}</td>`; }).join("")}</tr>`;
          }).join("")}</tbody>
        </table>
      </div>
      <p class="small muted" style="margin-top:10px">Blau markiert: bester Wert im Vergleich (nur wenn mindestens zwei Werte vorliegen). * Referenzpreis, kein N SCOOTS-Preis.</p>`
      : `<div class="empty"><h3>${items.length === 0 ? "Noch keine Modelle im Vergleich" : "Ein zweites Modell fehlt"}</h3><p class="muted">Wähle bis zu drei E-Scooter aus, um Akku, Reichweite und Gewicht nebeneinander zu sehen.</p><a class="btn" href="#/katalog?kat=escooter">Zum Katalog</a></div>`;
    const html = `
    <div class="wrap">
      <div class="page-head"><h1>Vergleich</h1><p class="muted">Bis zu drei Modelle, gleiche Kriterien, ohne Umblättern.</p></div>
      <div class="compare-slots" aria-label="Ausgewählte Modelle">${slots.join("")}</div>
      ${table}
      ${items.length ? `<p style="margin-top:14px"><button class="link-btn" type="button" data-action="compare-clear">Vergleich leeren</button></p>` : ""}
    </div>`;
    return { html, title: "Vergleich" };
  }

  /* ---------- Warenkorb ---------- */
  function cartTotals(lines) {
    let sum = 0, open = 0, count = 0;
    lines.forEach((l) => { const p = byId(l.id); if (!p) return; count += l.qty; if (p.price.chf != null) sum += p.price.chf * l.qty; else open += l.qty; });
    return { sum, open, count };
  }
  function cartLineHtml(l, mini = false) {
    const p = byId(l.id); if (!p) return "";
    const v = p.variants.find((x) => x.id === l.variant);
    const line = p.price.chf != null ? F.chf(p.price.chf * l.qty) : "Preis offen";
    return `<div class="cart-item" data-id="${p.id}" data-variant="${esc(l.variant || "")}">
      ${img(p, 0, { alt: placeholderAlt(p) })}
      <div class="cart-item-body">
        <h3 class="cart-item-title"><a href="#/produkt/${p.id}" style="color:inherit;text-decoration:none">${esc(p.model)}</a></h3>
        ${v ? `<span class="small muted">${esc(v.name)}</span>` : ""}
        <div class="cart-item-row">
          <div class="qty" role="group" aria-label="Menge für ${esc(p.model)}">
            <button type="button" data-action="qty-dec" aria-label="Menge verringern">−</button>
            <input type="number" inputmode="numeric" min="1" max="99" value="${l.qty}" aria-label="Menge" data-action="qty-input">
            <button type="button" data-action="qty-inc" aria-label="Menge erhöhen">+</button>
          </div>
          <strong>${line}</strong>
        </div>
        ${mini ? "" : `<div><button class="link-btn" type="button" data-action="remove">Entfernen</button></div>`}
      </div>
    </div>`;
  }
  function viewCart() {
    const lines = S.cart();
    const t = cartTotals(lines);
    const html = `
    <div class="wrap">
      <div class="page-head"><h1>Warenkorb</h1><p class="muted">Demo. Der Warenkorb bleibt im Browser gespeichert, eine Bestellung ist noch nicht möglich.</p></div>
      ${!S.storageAvailable() ? notice("Der Browserspeicher ist nicht verfügbar. Der Warenkorb geht beim Neuladen verloren.") : ""}
      ${lines.length === 0 ? `<div class="empty"><h3>Dein Warenkorb ist leer</h3><p class="muted">Leg ein Modell hinein, um die Demo zu testen.</p><a class="btn" href="#/katalog">Weiter einkaufen</a></div>` : `
      <div class="cart-layout">
        <div class="cart-list" id="cart-list">${lines.map((l) => cartLineHtml(l)).join("")}</div>
        <aside class="summary" aria-labelledby="sum-title">
          <h2 id="sum-title" style="font-size:1.5rem;margin:0">Zusammenfassung</h2>
          <div class="summary-row"><span>Artikel</span><span>${t.count}</span></div>
          <div class="summary-row"><span>Zwischensumme (Referenzpreise)</span><span>${F.chf(t.sum)}</span></div>
          ${t.open ? `<div class="summary-row small muted"><span>Positionen mit offenem Preis</span><span>${t.open}</span></div>` : ""}
          <div class="summary-row total"><span>Total</span><span>${t.open ? "offen" : F.chf(t.sum)}</span></div>
          <p class="small muted" style="margin:0">Referenzpreise sind keine N SCOOTS-Preise. Versand, MwSt. und Rabatte sind nicht enthalten.</p>
          <button class="btn btn-accent btn-block" type="button" data-action="checkout">Zur Kasse</button>
          <a class="btn btn-ghost btn-block" href="#/katalog">Weiter einkaufen</a>
          <button class="link-btn" type="button" data-action="cart-clear">Warenkorb leeren</button>
        </aside>
      </div>`}
    </div>`;
    return { html, title: "Warenkorb" };
  }

  /* ---------- Dirtbikes ---------- */
  function viewDirtbikes() {
    const d = D.dirtbikes;
    const html = `
    <div class="wrap">
      <div class="page-head"><h1>E-Dirtbikes</h1><p class="muted">${esc(d.status)}</p></div>
      <div class="prep-hero">
        <div>
          <span class="tag tag-accent">${esc(d.status)}</span>
          <h2 style="margin-top:10px">Elektrisch ins Gelände.</h2>
          <p>${esc(d.text)}</p>
          <a class="btn" href="#/katalog?kat=edirtbike">Gelistete Dirtbikes</a> <a class="btn btn-ghost" href="#/katalog?kat=escooter">E-Scooter ansehen</a>
        </div>
        ${(() => { const r = MA.resolve(MEDIA.dirtbikes, IMG + "dirtbike-platzhalter.svg", "Platzhalter-Silhouette eines Dirtbikes, kein Produktfoto"); return `<div class="media prep-media" data-parallax="0.15">${MA.tag(r)}${r.photo ? MA.marks(r) : `<span class="media-badge" aria-hidden="true">Platzhalter</span>`}</div>`; })()}
      </div>
      ${(() => { const list = D.products.filter((p) => p.category === "edirtbike"); return list.length ? `<section class="section" aria-labelledby="dirt-list-title"><h2 id="dirt-list-title">Gelistete Modelle</h2><div class="product-grid">${list.map((p) => productCard(p)).join("")}</div>${refNote}</section>` : ""; })()}
      <section class="section" aria-labelledby="planned-title">
        <h2 id="planned-title">Was geplant ist</h2>
        <div class="help-grid">${d.planned.map((x) => `<div class="help-step"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join("")}</div>
        <p class="small muted" style="margin-top:16px">Keine Marken, Preise oder Liefertermine, bis Händlervereinbarungen und Bildrechte vorliegen. Ob ein E-Dirtbike in der Schweiz auf öffentlichen Strassen gefahren werden darf, muss je Modell geprüft werden; der Einsatz ist zunächst für Privatgelände vorgesehen.</p>
      </section>
    </div>`;
    return { html, title: "E-Dirtbikes" };
  }

  /* ---------- Info ---------- */
  function viewInfo() {
    const html = `
    <div class="wrap">
      <div class="page-head"><h1>Gut zu wissen</h1><p class="muted">Was dieser Prototyp zeigt und was vor dem Verkaufsstart noch offen ist.</p></div>
      <div class="help-grid" style="margin-bottom:28px">
        <div class="help-step"><h3>Demo-Status</h3><p>Es gibt noch keinen Verkauf, keine Bestellung und keine Zahlung. Warenkorb und Vergleich sind Funktionsdemos.</p></div>
        <div class="help-step"><h3>Preise</h3><p>Einführungspreise in CHF auf aktuellem Schweizer Marktniveau, unverbindlich bis Verkaufsstart.</p></div>
        <div class="help-step"><h3>Zulassung</h3><p>Strassenzugelassen sind die gekennzeichneten 20 km/h-Modelle (eKFV / CH-Edition). Alle anderen Modelle sind für Privatgelände. Vor dem Verkaufsstart prüfen wir jedes Modell anhand offizieller Schweizer Quellen.</p></div>
      </div>
      <h2>Reichweite richtig lesen</h2>
      <p>Hersteller testen mit leichtem Fahrer, flacher Strecke, moderater Geschwindigkeit und Eco-Modus. Steigungen, Kälte, Gewicht und Tempo senken die Reichweite deutlich. Für die Planung lohnt sich ein Blick auf die Kapazität in Wattstunden: Sie ist vergleichbar, die Kilometerangabe nicht.</p>
      <h2>Bilder</h2>
      <p>Produktbilder stammen von den Herstellern und Händlern; die Freigaben werden vor dem Verkaufsstart eingeholt. Stimmungsfotos stehen unter freien Lizenzen (Wikimedia Commons, CC BY) und tragen den Namen der Fotografin oder des Fotografen am Bild.</p>
      <h2>Lieferant</h2>
      <p>Sortiment, Einführungspreise und Lieferstatus basieren auf aktuellen Schweizer Marktdaten (Stand ${F.date(D.meta.dataVersion)}). Lieferanten- und Händlervereinbarungen sind in Vorbereitung; Produkt- und Markenbilder werden vor dem Verkaufsstart freigegeben.</p>
    </div>`;
    return { html, title: "Gut zu wissen" };
  }

  function viewKontakt() {
    const k = D.meta.kontakt;
    const html = `
    <div class="wrap">
      <div class="page-head"><h1>Kontakt</h1><p class="muted">Persönliche Beratung, Fragen zu Modellen, Zulassung und Lieferung.</p></div>
      <div class="contact-grid">
        <div class="contact-card">
          <h2>Dein Ansprechpartner</h2>
          <p class="contact-person">N SCOOTS<br><span class="muted">${esc(k.ort)}</span></p>
          <dl class="contact-list">
            <div><dt>Telefon</dt><dd><a href="tel:${esc(k.telefon.replace(/\s+/g, ""))}">${esc(k.telefon)}</a></dd></div>
            <div><dt>E-Mail</dt><dd><a href="mailto:${esc(k.email)}">${esc(k.email)}</a></dd></div>
            <div><dt>Erreichbar</dt><dd>${esc(k.zeiten)}</dd></div>
          </dl>
          ${k.hinweis ? `<p class="small muted">${esc(k.hinweis)}</p>` : ""}
        </div>
        <form class="contact-form" id="contact-form" novalidate>
          <h2>Nachricht schreiben</h2>
          <div class="field"><label for="c-name">Name</label><input type="text" id="c-name" name="name" autocomplete="name" required></div>
          <div class="field"><label for="c-email">E-Mail</label><input type="email" id="c-email" name="email" autocomplete="email" required></div>
          <div class="field"><label for="c-msg">Nachricht</label><textarea id="c-msg" name="msg" rows="5" required></textarea></div>
          <button class="btn btn-accent" type="submit">Nachricht senden</button>
          <p class="small muted" id="contact-note">Prototyp: Das Formular sendet noch nichts. Bis dahin bitte direkt per E-Mail oder Telefon melden.</p>
        </form>
      </div>
    </div>`;
    return { html, title: "Kontakt" };
  }

  function viewNotFound(msg) {
    return { html: `<div class="wrap"><div class="page-head"><h1>Seite nicht gefunden</h1><p class="muted">${msg || "Diese Adresse führt ins Leere."}</p><a class="btn" href="#/katalog">Zum Katalog</a> <a class="btn btn-ghost" href="#/">Zur Startseite</a></div></div>`, title: "Nicht gefunden" };
  }

  /* ---------- Nach dem Rendern ---------- */
  function bindHome() {
    const panel = $("#panel-brands"); if (panel) {
      const show = (brandId) => {
        const list = D.products.filter((p) => p.brand === brandId && p.category !== "zubehoer").slice(0, 4);
        const b = D.brands.find((x) => x.id === brandId); const n = D.products.filter((p) => p.brand === brandId).length;
        panel.innerHTML = `<p class="muted brand-panel-blurb">${esc(b ? b.blurb : "")}</p><div class="product-grid">${list.map((p) => productCard(p)).join("")}</div><p style="margin-top:14px"><a class="btn btn-ghost btn-sm" href="#/katalog?marke=${brandId}">Alle ${n} ${esc(b ? b.name : "")}-Modelle</a></p>`;
        panel.setAttribute("aria-labelledby", `tab-${brandId}`);
        document.querySelectorAll(".brand-tab").forEach((t) => { const on = t.dataset.brand === brandId; t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1; });
        window.NSCOOTS_MOTION && window.NSCOOTS_MOTION.refresh();
      };
      show(D.brands[0].id);
      const tabs = [...document.querySelectorAll(".brand-tab")];
      const ac = new AbortController(); viewCleanup.push(() => ac.abort());
      tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.brand), { signal: ac.signal }));
      $(".brand-tabs").addEventListener("keydown", (e) => { const i = tabs.indexOf(document.activeElement); if (i < 0) return; let j = null; if (e.key === "ArrowRight") j = (i + 1) % tabs.length; if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length; if (e.key === "Home") j = 0; if (e.key === "End") j = tabs.length - 1; if (j != null) { e.preventDefault(); tabs[j].focus(); show(tabs[j].dataset.brand); } }, { signal: ac.signal });
    }
    const sc = $(".showcase"); if (sc) {
      const imgs = [...sc.querySelectorAll(".showcase-img")], caps = [...sc.querySelectorAll(".showcase-cap")], dots = [...sc.querySelectorAll(".showcase-dots span")];
      const n = imgs.length; const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      let ticking = false;
      const update = () => {
        ticking = false;
        const r = sc.getBoundingClientRect(); const total = r.height - window.innerHeight; if (total <= 0) return;
        const prog = Math.max(0, Math.min(1, -r.top / total)); const pos = prog * (n - 1); const active = Math.round(pos);
        imgs.forEach((im, i) => { const d = pos - i; const vis = Math.max(0, 1 - Math.abs(d)); im.classList.toggle("is-active", i === active);
          if (!reduce.matches) { const scale = d <= 0 ? 0.55 + 0.45 * vis : 1 + 0.25 * Math.min(1, d); const y = d <= 0 ? (1 - vis) * 60 : -Math.min(1, d) * 40; im.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`; im.style.opacity = vis.toFixed(3); im.style.zIndex = String(10 + Math.round(vis * 10)); }
        });
        caps.forEach((c, i) => c.classList.toggle("is-active", i === active)); dots.forEach((dd, i) => dd.classList.toggle("is-active", i === active));
      };
      const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
      window.addEventListener("scroll", onScroll, { passive: true }); viewCleanup.push(() => window.removeEventListener("scroll", onScroll));
      update();
    }
  }
  function afterRender(view, route) {
    if (view === "") bindHome();
    if (view === "katalog") bindCatalog(route.query);
    if (view === "produkt") bindProduct(route.parts[1]);
    if (view === "kontakt") { const f = $("#contact-form"); f.addEventListener("submit", (e) => { e.preventDefault(); if (!f.checkValidity()) { f.reportValidity(); return; } $("#contact-note").textContent = "Noch nicht aktiv: Die Nachricht wurde nicht gesendet. Bitte E-Mail oder Telefon nutzen."; toast("Formular ist im Prototyp noch nicht aktiv."); }); }
    setupHeroVideo();
    window.NSCOOTS_MOTION && window.NSCOOTS_MOTION.refresh();
  }

  function setupHeroVideo() {
    const v = $(".hero-video"); if (!v) return;
    const btn = $('[data-action="video-toggle"]');
    const sync = () => { if (btn) btn.textContent = v.paused ? "Video abspielen" : "Video pausieren"; };
    v.addEventListener("play", sync); v.addEventListener("pause", sync);
    const fail = () => { // Video kaputt: Standbild oder Illustration zeigen
      const hi = MA.resolve(MEDIA.hero && MEDIA.hero.image, null, "E-Scooter-Fahrt durch eine Stadt am Abend");
      const bg = v.parentElement; if (!bg) return;
      bg.innerHTML = hi.photo ? MA.tag(hi, { eager: true, cls: "hero-img" }) + MA.marks(hi) : `<div class="hero-illu hero-illu-plain"></div>`;
      if (btn) btn.remove(); const note = $(".hero-note"); if (note) note.textContent = "Video nicht verfügbar.";
      window.NSCOOTS_MOTION && window.NSCOOTS_MOTION.refresh();
    };
    v.addEventListener("error", fail, true); const src = v.querySelector("source"); if (src) src.addEventListener("error", fail);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { v.removeAttribute("autoplay"); v.pause(); }
    sync();
  }
  document.addEventListener("nscoots:reduce-change", (e) => { const v = $(".hero-video"); if (v && e.detail.matches) v.pause(); });

  /* ---------- Globale Aktionen ---------- */
  let lastTrigger = null;
  function openDialog(dlg, trigger) {
    lastTrigger = trigger || document.activeElement;
    if (typeof dlg.showModal !== "function") { dlg.setAttribute("open", ""); return; }
    dlg.showModal();
    const first = dlg.querySelector("[autofocus], button, [href], input, select");
    if (first) first.focus();
  }
  function closeDialog(dlg) {
    if (dlg.open) dlg.close(); else dlg.removeAttribute("open");
  }
  document.querySelectorAll("dialog").forEach((dlg) => {
    dlg.addEventListener("close", () => { if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus(); lastTrigger = null; });
    dlg.addEventListener("click", (e) => { if (e.target === dlg) closeDialog(dlg); });
  });

  let toastTimer;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.dataset.show = "true";
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.dataset.show = "false"; }, 2200);
  }

  function renderCartDrawer() {
    const lines = S.cart(); const t = cartTotals(lines);
    $("#drawer-body").innerHTML = lines.length ? `<div class="cart-list">${lines.map((l) => cartLineHtml(l, true)).join("")}</div>` : `<div class="empty"><h3>Leer</h3><p class="muted">Noch nichts im Warenkorb.</p></div>`;
    $("#drawer-sum").textContent = t.open ? `${F.chf(t.sum)} + ${t.open} offen` : F.chf(t.sum);
  }
  function renderBadges() {
    const c = S.cartCount(); const b = $("#cart-count"); b.textContent = c; b.hidden = c === 0;
    const k = S.compare().length; const kb = $("#compare-count"); kb.textContent = k; kb.hidden = k === 0;
  }

  function renderPicker() {
    const current = S.compare();
    const list = D.products.filter((p) => p.category === "escooter");
    $("#pick-list").innerHTML = list.map((p) => `<button type="button" data-action="pick" data-id="${p.id}" ${current.includes(p.id) ? "disabled" : ""}>${img(p, 0, { alt: "" })}<span><strong>${esc(p.model)}</strong><br><span class="small muted">${esc(brandName(p.brand))}${current.includes(p.id) ? " · bereits im Vergleich" : ""}</span></span></button>`).join("");
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]"); if (!btn) return;
    const a = btn.dataset.action, id = btn.dataset.id;
    const lineEl = btn.closest(".cart-item");
    const lid = lineEl?.dataset.id, lvar = lineEl?.dataset.variant || null;
    switch (a) {
      case "add": {
        const p = byId(id); if (!p) return;
        const variant = $('#variants input[name="variant"]:checked')?.value || (p.variants[0]?.id ?? null);
        S.cartAdd(id, variant, 1); toast(`${p.model} im Warenkorb (Demo).`);
        renderCartDrawer(); openDialog($("#cart-drawer"), btn); break;
      }
      case "compare": {
        const r = S.compareToggle(id);
        if (!r.ok && r.full) { toast(`Maximal ${S.MAX_COMPARE} Modelle im Vergleich. Entferne zuerst eines.`); return; }
        toast(r.added ? "Zum Vergleich hinzugefügt." : "Aus dem Vergleich entfernt.");
        document.querySelectorAll(`[data-action="compare"][data-id="${id}"]`).forEach((b) => { b.setAttribute("aria-pressed", String(r.added)); b.textContent = r.added ? "Im Vergleich" : "Vergleichen"; });
        break;
      }
      case "compare-remove": S.compareRemove(id); render(); break;
      case "compare-clear": S.compareClear(); render(); break;
      case "compare-pick": renderPicker(); openDialog($("#pick-dialog"), btn); break;
      case "pick": { const r = S.compareToggle(id); closeDialog($("#pick-dialog")); if (r.added) { toast("Hinzugefügt."); render(); } break; }
      case "qty-inc": { const l = S.cart().find((x) => x.id === lid && (x.variant || null) === lvar); if (l) S.cartSetQty(lid, lvar, l.qty + 1); refreshCartViews(); break; }
      case "qty-dec": { const l = S.cart().find((x) => x.id === lid && (x.variant || null) === lvar); if (l) S.cartSetQty(lid, lvar, l.qty - 1); refreshCartViews(); break; }
      case "remove": S.cartRemove(lid, lvar); toast("Entfernt."); refreshCartViews(); break;
      case "cart-clear": S.cartClear(); refreshCartViews(); break;
      case "checkout": openDialog($("#checkout-dialog"), btn); break;
      case "lightbox": { const p = byId(parseHash().parts[1]); if (p) lightboxOpen(p, Number(btn.dataset.i || 0), btn); break; }
      case "gallery": { const g = (MEDIA.gallery || []).map((m) => MA.resolve(m, null, "")).filter((r) => r.photo); if (!g.length) break; lb = { list: g, name: "Unterwegs", i: Number(btn.dataset.i || 0) }; lightboxShow(); openDialog($("#lightbox"), btn); break; }
      case "lb-next": lb.i = (lb.i + 1) % lb.list.length; lightboxShow(); break;
      case "lb-prev": lb.i = (lb.i - 1 + lb.list.length) % lb.list.length; lightboxShow(); break;
      case "video-toggle": { const v = $(".hero-video"); if (!v) break; if (v.paused) v.play().catch(() => {}); else v.pause(); break; }
      case "open-cart": renderCartDrawer(); openDialog($("#cart-drawer"), btn); break;
      case "close-dialog": closeDialog(btn.closest("dialog")); break;
      case "menu": { const nav = $("#mobile-nav"); const open = nav.dataset.open !== "true"; nav.dataset.open = String(open); btn.setAttribute("aria-expanded", String(open)); break; }
      default: break;
    }
  });
  document.addEventListener("change", (e) => {
    const inp = e.target; if (inp.dataset.action !== "qty-input") return;
    const lineEl = inp.closest(".cart-item"); S.cartSetQty(lineEl.dataset.id, lineEl.dataset.variant || null, inp.value); refreshCartViews();
  });
  function refreshCartViews() {
    if (parseHash().parts[0] === "warenkorb") render();
    if ($("#cart-drawer").open) renderCartDrawer();
  }
  // Links in Drawer/Dialog: Dialog schliessen, dann navigieren
  document.querySelectorAll("dialog").forEach((dlg) => dlg.addEventListener("click", (e) => { if (e.target.closest("a[href^='#']")) closeDialog(dlg); }));
  $("#mobile-nav").addEventListener("click", (e) => { if (e.target.closest("a")) { $("#mobile-nav").dataset.open = "false"; $("#menu-btn").setAttribute("aria-expanded", "false"); } });

  S.subscribe(renderBadges);
  window.addEventListener("hashchange", render);
  $("#year").textContent = new Date().getFullYear();
  document.querySelectorAll(".header-search").forEach((f) => f.addEventListener("submit", (e) => { e.preventDefault(); const q = f.querySelector("input").value.trim(); navigate("/katalog", { q }); if (f.classList.contains("mobile")) { $("#mobile-nav").dataset.open = "false"; $("#menu-btn").setAttribute("aria-expanded", "false"); } }));
  { const k = D.meta.kontakt; const wa = "https://wa.me/" + (k.whatsapp || k.telefon).replace(/[^\d]/g, ""); const fab = $("#whatsapp-fab"); fab.href = wa; fab.setAttribute("aria-label", "Per WhatsApp fragen (Platzhalter-Nummer)"); document.addEventListener("click", (e) => { const a = e.target.closest('[data-action="whatsapp"]'); if (a) { e.preventDefault(); window.open(wa, "_blank", "noopener"); } }); }
  { const k = D.meta.kontakt; $("#footer-contact").innerHTML = `<li>N SCOOTS, ${esc(k.ort)}</li><li><a href="tel:${esc(k.telefon.replace(/\s+/g, ""))}">${esc(k.telefon)}</a></li><li><a href="mailto:${esc(k.email)}">${esc(k.email)}</a></li><li class="muted">${esc(k.zeiten)}</li>`; }
  renderBadges();
  render();
})();
