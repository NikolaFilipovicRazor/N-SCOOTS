/* Bewegung beim Scrollen: Parallax (Bilder bewegen sich langsamer als die Seite)
   und sanftes Einblenden. Respektiert prefers-reduced-motion, blockiert nie das Scrollen.
   Geometrie: Das Medium ist um speed*100 % höher als sein Rahmen und um die Hälfte
   davon nach oben versetzt; die Verschiebung bleibt immer innerhalb ±speed/2 * Höhe,
   so entsteht nie eine Lücke. */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let items = [], ticking = false, io = null;

  function measure() {
    items = [...document.querySelectorAll("[data-parallax]")].map((el) => {
      const img = el.querySelector("img, video, svg");
      const speed = Math.min(0.5, Math.max(0.05, parseFloat(el.dataset.parallax) || 0.2));
      if (img) {
        if (reduce.matches) { img.style.height = ""; img.style.top = ""; img.style.transform = ""; }
        else { img.style.height = `${100 + speed * 100}%`; img.style.top = `${-(speed * 50)}%`; }
      }
      return { el, img, speed };
    });
    update();
  }
  function update() {
    ticking = false;
    if (reduce.matches) return;
    const vh = window.innerHeight;
    for (const { el, img, speed } of items) {
      if (!img || !el.isConnected) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      let progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1 … 1
      progress = Math.max(-1, Math.min(1, progress));
      const shift = -progress * (speed / 2) * r.height;
      img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }

  function reveal() {
    const els = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (reduce.matches || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    if (!io) io = new IntersectionObserver((entries) => { entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }

  let resizeT;
  function refresh() { measure(); reveal(); }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(measure, 120); }, { passive: true });
  reduce.addEventListener?.("change", () => { refresh(); document.dispatchEvent(new CustomEvent("nscoots:reduce-change", { detail: { matches: reduce.matches } })); });
  window.NSCOOTS_MOTION = { refresh, update, reduced: () => reduce.matches };
})();
