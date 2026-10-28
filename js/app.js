/* N SCOOTS – Prototyp. Hash-Router + Ansichten. Keine Abhängigkeiten. */
(function () {
  const D = window.NSCOOTS_DATA, S = window.NSCOOTS_STORE, F = window.NSCOOTS_FMT;
  const esc = F.esc;
  const $ = (sel, root = document) => root.querySelector(sel);
  const app = $("#app");
  const IMG = "assets/img/";
  const FALLBACK = IMG + "fehlt.svg";
  const byId = (id) => D.products.find((p) => p.id === id) || null;
  const brandName = (id) => (D.brands.find((b) => b.id === id) || {}).name || "";
  const catName = (id) => (D.categories.find((c) => c.id === id) || {}).name || "";
  const segName = (id) => (D.segments[id] || {}).name || "";
  const imgSrc = (p, i = 0) => (p.images && p.images[i]) ? IMG + p.images[i] : FALLBACK;
  const img = (p, i, { eager = false, alt = "" } = {}) =>
    `<img src="${imgSrc(p, i)}" alt="${esc(alt)}" width="1100" height="760" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" onerror="this.onerror=null;this.src='${FALLBACK}'">`;
  const placeholderAlt = (p) => `Platzhalter-Silhouette für ${p.model}, kein Produktfoto`;

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
  function render() {
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
  const legalTag = (p) => p.chLegal ? `<span class="tag tag-signal">CH-Strassentauglichkeit ${esc(p.chLegal)}</span>` : "";
  const priceHtml = (p, big = false) => {
    if (p.price.kind === "referenz" && p.price.chf != null) {
      return `<span class="price">${F.chf(p.price.chf)}</span><span class="price-note">Referenzpreis${big ? "" : "*"}</span>`;
    }
    return `<span class="price">Preis offen</span>`;
  };
  function productCard(p, { compact = false } = {}) {
    const inCompare = S.compare().includes(p.id);
    const specs = [];
    if (p.specs.batteryWh) specs.push(`${F.num(p.specs.batteryWh, "Wh")}`);
    if (p.specs.rangeKm) specs.push(`${F.num(p.specs.rangeKm, "km")}`);
    if (p.specs.weightKg) specs.push(`${F.num(p.specs.weightKg, "kg")}`);
    if (p.specs.motors === 2) specs.push("2 Motoren");
    const isAcc = p.category === "zubehoer";
    return `
    <article class="card" data-id="${p.id}">
      <div class="card-media">${img(p, 0, { alt: placeholderAlt(p) })}</div>
      <div class="card-body">
        <div class="card-brand">${esc(p.brand ? brandName(p.brand) : catName(p.category))}${p.segment ? " · " + esc(segName(p.segment)) : ""}</div>
        <h3 class="card-title"><a href="#/produkt/${p.id}">${esc(p.model)}</a></h3>
        ${specs.length ? `<ul class="card-specs">${specs.map((s) => `<li>${s}</li>`).join("")}</ul>` : `<p class="small muted" style="margin:0">${esc(p.summary)}</p>`}
        <div class="card-price">${priceHtml(p)}</div>
      </div>
      ${compact ? "" : `<div class="card-actions">
        <button class="btn btn-sm" type="button" data-action="add" data-id="${p.id}">In den Warenkorb</button>
        ${isAcc ? "" : `<button class="btn btn-sm btn-ghost" type="button" data-action="compare" data-id="${p.id}" aria-pressed="${inCompare}">${inCompare ? "Im Vergleich" : "Vergleichen"}</button>`}
      </div>`}
    </article>`;
  }
  const notice = (text, neutral = false) => `<div class="notice${neutral ? " notice-neutral" : ""}">${icons.info}<p>${text}</p></div>`;
  const refNote = `<p class="small muted">* Referenzpreise stammen aus fremden Angeboten (Quelle auf der Produktseite) und sind keine N SCOOTS-Preise. «Preis offen» heisst: noch nicht festgelegt.</p>`;

  /* ---------- Startseite ---------- */
  function viewHome() {
    const featured = ["kukirin-g2-master", "joyor-s5", "teverun-fighter-mini-eco", "kukirin-g4-max"].map(byId).filter(Boolean);
    const brands = D.brands;
    const html = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap">
        <div>
          <p class="hero-kicker">E-Scooter &amp; E-Dirtbikes · Schweiz</p>
          <h1 id="hero-title">Dein nächster Ride.</h1>
          <p>Elektrische Scooter für Stadt und Strecke, E-Dirtbikes fürs Gelände. Klare Daten, ehrliche Angaben, verständliche Beratung. Shop in Vorbereitung.</p>
          <div class="hero-cta">
            <a class="btn btn-accent" href="#/katalog?kat=escooter">E-Scooter entdecken</a>
            <a class="btn btn-ghost" href="#/dirtbikes">E-Dirtbikes</a>
          </div>
        </div>
        <div>
          <div class="hero-art" role="img" aria-label="Abstrakte Illustration eines E-Scooters auf dunklem Grund">
            <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="hl" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)"><path d="M0 0V40" stroke="#2f343d" stroke-width="1"/></pattern></defs>
              <rect width="800" height="600" fill="#262a31"/><rect width="800" height="600" fill="url(#hl)"/>
              <path d="M-40 470 H840" stroke="#1f4fe0" stroke-width="10"/>
              <path d="M-40 500 H840" stroke="#3a3f49" stroke-width="2"/>
              <g fill="none" stroke="#f3f4f7" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="190" cy="420" r="50"/><circle cx="640" cy="420" r="50"/>
                <path d="M240 420 H600"/><path d="M265 405 H360"/><path d="M605 405 L560 190 L545 130"/><path d="M505 130 H590"/>
              </g>
              <circle cx="640" cy="420" r="22" fill="none" stroke="#1f4fe0" stroke-width="8"/>
            </svg>
          </div>
          <p class="hero-note" style="margin-top:8px">Illustration, kein Produktfoto.</p>
        </div>
      </div>
      <div class="hero-stripe" aria-hidden="true"></div>
    </section>

    <section class="trust" aria-label="So arbeiten wir">
      <div class="wrap">
        <ul class="trust-list">
          <li><strong>Daten mit Quelle</strong><span>Jede Angabe mit Herkunft und Prüfdatum</span></li>
          <li><strong>Ehrliche Preise</strong><span>Referenzpreis oder «offen», nichts erfunden</span></li>
          <li><strong>Zulassung wird geprüft</strong><span>Strasse und Gelände klar getrennt</span></li>
          <li><strong>Beratung auf Deutsch</strong><span>Verständlich, ohne Fachchinesisch</span></li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="entries-title">
      <div class="wrap">
        <h2 id="entries-title" class="visually-hidden">Kategorien</h2>
        <div class="entry-grid">
          <a class="entry" href="#/katalog?kat=escooter">
            <span class="tag">${D.products.filter((p) => p.category === "escooter").length} Modelle</span>
            <div><h3>E-Scooter</h3><p>Alltag, Touren und Offroad. Von ${brandName("kukirin")} bis ${brandName("dualtron")}.</p></div>
            <svg viewBox="0 0 120 84" aria-hidden="true" fill="none" stroke="#1c1f24" stroke-width="4" stroke-linecap="round"><circle cx="22" cy="62" r="12"/><circle cx="96" cy="62" r="12"/><path d="M34 62h50M88 60l-8-38M74 22h14"/></svg>
          </a>
          <a class="entry entry-dirt" href="#/dirtbikes">
            <span class="tag tag-accent">In Vorbereitung</span>
            <div><h3>E-Dirtbikes</h3><p>Elektrisches Motocross und Trail. Sortiment folgt.</p></div>
            <svg viewBox="0 0 120 84" aria-hidden="true" fill="none" stroke="#1538ab" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="60" r="18"/><circle cx="96" cy="60" r="18"/><path d="M36 52l18-24h26l16 24M54 28l10 18 16-18M80 20l-6 8M72 20h14"/></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="profiles-title">
      <div class="wrap">
        <div class="section-head"><div><h2 id="profiles-title">Was suchst du?</h2><p class="muted">Drei Fahrprofile. Jedes führt direkt zu den passenden Modellen.</p></div></div>
        <div class="profile-grid">
          ${[
            ["alltag", "Alltag &amp; Pendeln", "Leicht, faltbar, für Bahnhof und Büro. Unter 25 kg, 600–800 Wh.", "kukirin-g2-pro"],
            ["touren", "Lange Strecken", "Grosse Akkus ab 1000 Wh für Touren und Hügel.", "kukirin-g2-master"],
            ["offroad", "Gelände", "Doppelmotor, grobe Reifen, viel Federweg. Für Privatgelände.", "kukirin-g4-max"]
          ].map(([seg, title, text, pid]) => { const p = byId(pid); const n = D.products.filter((x) => x.segment === seg).length; return `
          <a class="profile" href="#/katalog?kat=escooter&segment=${seg}">
            <div class="profile-media">${p ? img(p, 0, { alt: placeholderAlt(p) }) : ""}</div>
            <div class="profile-body"><h3>${title}</h3><p>${text}</p><span class="profile-link">${n} Modelle ansehen</span></div>
          </a>`; }).join("")}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="featured-title">
      <div class="wrap">
        <div class="section-head">
          <div><h2 id="featured-title">Ausgewählte Modelle</h2><p class="muted">Vier Modelle, die den Bereich gut abdecken: Pendeln, Touren, Gelände.</p></div>
          <a class="btn btn-ghost btn-sm" href="#/katalog">Alle Modelle</a>
        </div>
        <div class="product-grid">${featured.map((p) => productCard(p)).join("")}</div>
        ${refNote}
      </div>
    </section>

    <section class="section" aria-labelledby="brands-title">
      <div class="wrap">
        <div class="section-head"><div><h2 id="brands-title">Marken</h2><p class="muted">Geplantes Markenportfolio. Händlervereinbarungen sind noch offen.</p></div></div>
        <div class="brand-strip">
          ${brands.map((b) => { const prices = D.products.filter((p) => p.brand === b.id && p.price.chf != null).map((p) => p.price.chf); const n = D.products.filter((p) => p.brand === b.id).length; const from = prices.length ? `Referenz ab ${F.chf(Math.min(...prices))}*` : "Preise offen"; return `<a class="brand-chip${b.featured ? " featured" : ""}" href="#/katalog?marke=${b.id}"><span class="brand-top"><strong>${esc(b.name)}</strong><span class="tag">${n} ${n === 1 ? "Modell" : "Modelle"}</span></span><span>${esc(b.blurb)}</span><span class="brand-price">${from}</span></a>`; }).join("")}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="help-title">
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
      min: q.min ? Number(q.min) : "",
      max: q.max ? Number(q.max) : "",
      sort: q.sort || "empfehlung"
    };
  }
  function stateToQuery(st) {
    return { q: st.q, marke: st.marke.join(","), kat: st.kat, segment: st.segment, min: st.min === "" ? "" : String(st.min), max: st.max === "" ? "" : String(st.max), sort: st.sort === "empfehlung" ? "" : st.sort };
  }
  const rangeMax = (r) => { if (r == null) return null; if (typeof r === "number") return r; const m = String(r).match(/\d+(?:\.\d+)?/g); return m ? Math.max(...m.map(Number)) : null; };
  function applyFilters(st) {
    let list = D.products.filter((p) => p.category !== "edirtbike");
    let hiddenNoPrice = 0;
    if (st.kat) list = list.filter((p) => p.category === st.kat);
    if (st.marke.length) list = list.filter((p) => p.brand && st.marke.includes(p.brand));
    if (st.segment) list = list.filter((p) => p.segment === st.segment);
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
        <p class="muted">E-Scooter und Zubehör. E-Dirtbikes findest du <a href="#/dirtbikes">hier in Vorbereitung</a>.</p>
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
              <label class="check"><input type="radio" name="kat" value="zubehoer" ${st.kat === "zubehoer" ? "checked" : ""}> Zubehör</label>
            </fieldset>
            <fieldset><legend>Marke</legend>
              ${D.brands.map((b) => `<label class="check"><input type="checkbox" name="marke" value="${b.id}" ${st.marke.includes(b.id) ? "checked" : ""}> ${esc(b.name)}</label>`).join("")}
            </fieldset>
            <fieldset><legend>Einsatz</legend>
              <label class="check"><input type="radio" name="segment" value="" ${st.segment === "" ? "checked" : ""}> Alle</label>
              ${Object.entries(D.segments).map(([id, s]) => `<label class="check"><input type="radio" name="segment" value="${id}" ${st.segment === id ? "checked" : ""}> ${esc(s.name)}</label>`).join("")}
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
      if (el.name === "marke") { st.marke = [...form.querySelectorAll('input[name="marke"]:checked')].map((i) => i.value); sync(); }
    });
    $("#f-sort").addEventListener("change", (e) => { st.sort = e.target.value; sync(); });
    app.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]"); if (!btn) return;
      if (btn.dataset.action === "reset-filters") { st = filterState({}); form.reset(); form.querySelector('input[name="kat"][value=""]').checked = true; form.querySelector('input[name="segment"][value=""]').checked = true; $("#f-sort").value = "empfehlung"; sync(); $("#f-q").focus(); }
      if (btn.dataset.action === "remove-filter") {
        const k = btn.dataset.k;
        if (k === "marke") { st.marke = st.marke.filter((m) => m !== btn.dataset.v); form.querySelector(`input[name="marke"][value="${btn.dataset.v}"]`).checked = false; }
        else if (k === "q") { st.q = ""; $("#f-q").value = ""; }
        else if (k === "min" || k === "max") { st[k] = ""; form.querySelector(`[name="${k}"]`).value = ""; }
        else { st[k] = ""; form.querySelector(`input[name="${k}"][value=""]`).checked = true; }
        sync(); $("#result-count").focus?.();
      }
    });
    // Rerender compare/cart button states
    S.subscribe(() => { if (parseHash().parts[0] === "katalog") renderResults(st); });
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
          <div class="gallery-main" id="gallery-main">${img(p, 0, { eager: true, alt: placeholderAlt(p) })}</div>
          ${p.images.length > 1 ? `<div class="gallery-thumbs" role="group" aria-label="Bildauswahl">${p.images.map((_, i) => `<button type="button" data-action="thumb" data-i="${i}" aria-pressed="${i === 0}" aria-label="Ansicht ${i + 1}">${img(p, i, { alt: "" })}</button>`).join("")}</div>` : ""}
          <p class="small muted" style="margin-top:8px">Platzhalter-Silhouetten. Freigegebene Produktbilder folgen, sobald die Bildrechte geklärt sind.</p>
        </div>
        <div class="pdp-info">
          <div>
            <div class="card-brand">${esc(p.brand ? brandName(p.brand) : catName(p.category))}</div>
            <h1>${esc(p.model)}</h1>
          </div>
          <div class="pdp-status">
            ${p.segment ? `<span class="tag tag-accent">${esc(segName(p.segment))}</span>` : ""}
            ${legalTag(p)}
            <span class="tag">Demo: nicht bestellbar</span>
          </div>
          <p>${esc(p.summary)}</p>
          <div class="price-block">
            <div>${priceHtml(p, true)}</div>
            ${p.price.kind === "referenz" ? `<p class="small muted" style="margin:0">Referenzpreis aus einem fremden Angebot (<a href="${esc(p.price.source)}" rel="noopener" target="_blank">Quelle</a>, geprüft ${F.date(p.price.checked)}). Kein N SCOOTS-Angebot.</p>` : `<p class="small muted" style="margin:0">${esc(p.price.note)}</p>`}
          </div>
          ${p.variants.length ? `<fieldset class="variant-list" id="variants"><legend class="visually-hidden">Ausführung</legend>
            ${p.variants.map((v, i) => `<label class="variant"><input type="radio" name="variant" value="${v.id}" ${i === 0 ? "checked" : ""}><span><strong>${esc(v.name)}</strong><span>${esc(v.note)}</span></span></label>`).join("")}
          </fieldset>` : ""}
          <div class="buy-row">
            <button class="btn btn-accent" type="button" data-action="add" data-id="${p.id}">In den Warenkorb (Demo)</button>
            ${isAcc ? "" : `<button class="btn btn-ghost" type="button" data-action="compare" data-id="${p.id}" aria-pressed="${inCompare}">${inCompare ? "Im Vergleich" : "Vergleichen"}</button>`}
          </div>
          ${notice("Lieferung und Abholung sind noch nicht geregelt. Versandart, Fristen und Kosten werden vor dem Verkaufsstart festgelegt.", true)}
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
              ${row("Gewicht", s.weightKg, "kg")}
              ${row("Max. Zuladung", s.maxLoadKg, "kg")}
              ${row("Reifen", s.tires)}
              ${row("Bremsen", s.brakes)}
              ${row("Schutzart", s.ip)}
              ${row("Faltbar", s.foldable == null ? null : (s.foldable ? "Ja" : "Nein"))}
              <tr><th scope="row">CH-Strassentauglichkeit</th><td><span class="tag tag-signal">${esc(p.chLegal || "nicht bestätigt")}</span></td></tr>
            </tbody>
          </table>
          ${notice("Reichweiten sind Herstellerangaben unter deren Testbedingungen (leichter Fahrer, flache Strecke, Eco-Modus). Im Alltag ist deutlich weniger üblich. Eine Zusage ist das nicht.")}
          <details class="fold"><summary>Quellen und Prüfdatum</summary>
            <ul class="source-list">${p.sources.map((src) => `<li><a href="${esc(src.url)}" rel="noopener" target="_blank">${esc(src.url.replace(/^https?:\/\//, "").split("/")[0])}</a> – ${esc(src.note)} (geprüft ${F.date(src.checked)})</li>`).join("")}</ul>
            <p class="small muted">Angaben wurden nicht selbst gemessen. Abweichungen zwischen Quellen sind bei der jeweiligen Ausführung vermerkt.</p>
          </details>
          <details class="fold"><summary>Strasse oder Gelände?</summary>
            <p>Ob eine Ausführung in der Schweiz auf öffentlichen Strassen gefahren werden darf, muss je Modell und Variante belegt werden. Eine Geschwindigkeitsbegrenzung, ein CE-Zeichen oder eine ausländische Zulassung reicht dafür nicht automatisch. Bis ein Nachweis vorliegt, steht hier «nicht bestätigt». Offroad-Modelle sind für Privatgelände gedacht.</p>
          </details>`}
        </div>
      </div>
    </div>`;
    return { html, title: p.model };
  }
  function bindProduct(id) {
    const p = byId(id); if (!p) return;
    app.addEventListener("click", (e) => {
      const b = e.target.closest('[data-action="thumb"]'); if (!b) return;
      const i = Number(b.dataset.i);
      $("#gallery-main").innerHTML = img(p, i, { eager: true, alt: placeholderAlt(p) + `, Ansicht ${i + 1}` });
      document.querySelectorAll('[data-action="thumb"]').forEach((t) => t.setAttribute("aria-pressed", String(t === b)));
    });
  }

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
          <a class="btn" href="#/katalog?kat=escooter">Inzwischen: E-Scooter ansehen</a>
        </div>
        <img src="${IMG}dirtbike-platzhalter.svg" alt="Platzhalter-Silhouette eines Dirtbikes, kein Produktfoto" width="1100" height="760" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK}'">
      </div>
      <section class="section" aria-labelledby="planned-title">
        <h2 id="planned-title">Was geplant ist</h2>
        <div class="help-grid">${d.planned.map((x) => `<div class="help-step"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join("")}</div>
        <p class="small muted" style="margin-top:16px">Keine Marken, Preise oder Liefertermine, bis Händlervereinbarungen und Bildrechte vorliegen. E-Dirtbikes sind in der Schweiz auf öffentlichen Strassen in der Regel nicht zugelassen; der Einsatz ist für Privatgelände vorgesehen.</p>
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
        <div class="help-step"><h3>Preise</h3><p>Referenzpreise stammen aus fremden Angeboten und sind pro Produkt mit Quelle und Prüfdatum angegeben. Sie sind keine N SCOOTS-Preise.</p></div>
        <div class="help-step"><h3>Zulassung</h3><p>Die Schweizer Strassentauglichkeit ist für keine Ausführung belegt. Vor dem Verkaufsstart wird sie je Modell anhand offizieller Quellen geprüft.</p></div>
      </div>
      <h2>Reichweite richtig lesen</h2>
      <p>Hersteller testen mit leichtem Fahrer, flacher Strecke, moderater Geschwindigkeit und Eco-Modus. Steigungen, Kälte, Gewicht und Tempo senken die Reichweite deutlich. Für die Planung lohnt sich ein Blick auf die Kapazität in Wattstunden: Sie ist vergleichbar, die Kilometerangabe nicht.</p>
      <h2>Bilder</h2>
      <p>Alle Produktbilder sind gekennzeichnete Platzhalter. Freigegebene Herstellerbilder werden erst eingesetzt, wenn die Nutzungsrechte vorliegen.</p>
      <h2>Lieferant</h2>
      <p>Gespräche mit einem möglichen B2B-Lieferanten laufen. Händlervereinbarung, Einkaufspreise, Direktversand und Bildrechte sind nicht bestätigt. N SCOOTS ist kein autorisierter Händler der genannten Marken und betreibt kein eigenes Lager.</p>
    </div>`;
    return { html, title: "Gut zu wissen" };
  }

  function viewNotFound(msg) {
    return { html: `<div class="wrap"><div class="page-head"><h1>Seite nicht gefunden</h1><p class="muted">${msg || "Diese Adresse führt ins Leere."}</p><a class="btn" href="#/katalog">Zum Katalog</a> <a class="btn btn-ghost" href="#/">Zur Startseite</a></div></div>`, title: "Nicht gefunden" };
  }

  /* ---------- Nach dem Rendern ---------- */
  function afterRender(view, route) {
    if (view === "katalog") bindCatalog(route.query);
    if (view === "produkt") bindProduct(route.parts[1]);
  }

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
  renderBadges();
  render();
})();
