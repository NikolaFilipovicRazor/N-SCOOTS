/* Bewegung beim Scrollen: Parallax (Bilder bewegen sich langsamer als die Seite)
   und sanftes Einblenden. Respektiert prefers-reduced-motion, blockiert nie das Scrollen. */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let items = [], ticking = false, io = null;

  function measure() {
    items = [...document.querySelectorAll("[data-parallax]")].map((el) => {
      const img = el.querySelector("img, video");
      const speed = Math.min(0.5, Math.max(0.05, parseFloat(el.dataset.parallax) || 0.2));
      if (img) img.style.height = `${100 + speed * 100}%`;
      return { el, img, speed };
    });
    update();
  }
  function update() {
    ticking = false;
    if (reduce.matches) { items.forEach((i) => { if (i.img) i.img.style.transform = ""; }); return; }
    const vh = window.innerHeight;
    for (const { el, img, speed } of items) {
      if (!img) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1 … 1
      const shift = -progress * speed * r.height;
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

  function refresh() { measure(); reveal(); }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { measure(); }, { passive: true });
  reduce.addEventListener?.("change", update);
  window.NSCOOTS_MOTION = { refresh, update };
})();
