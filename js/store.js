/* Zustand: Warenkorb + Vergleich. Lokaler Browserspeicher, fehlertolerant. */
(function () {
  const KEY_CART = "nscoots.cart.v1";
  const KEY_COMPARE = "nscoots.compare.v1";
  const MAX_COMPARE = 3;
  const listeners = new Set();

  let memory = {}; // Fallback ohne localStorage
  const storage = {
    get(key) {
      try { const v = window.localStorage.getItem(key); return v == null ? memory[key] ?? null : v; }
      catch (e) { return memory[key] ?? null; }
    },
    set(key, value) {
      memory[key] = value;
      try { window.localStorage.setItem(key, value); return true; }
      catch (e) { return false; }
    }
  };

  function read(key, fallback) {
    try { const v = JSON.parse(storage.get(key)); return Array.isArray(v) ? v : fallback; }
    catch (e) { return fallback; }
  }
  function write(key, value) { storage.set(key, JSON.stringify(value)); emit(); }
  function emit() { listeners.forEach((fn) => { try { fn(); } catch (e) { console.error(e); } }); }

  const validIds = () => new Set((window.NSCOOTS_DATA?.products || []).map((p) => p.id));

  // Warenkorb: [{id, variant, qty}]
  function cart() {
    const ids = validIds();
    return read(KEY_CART, []).filter((l) => l && ids.has(l.id) && Number.isInteger(l.qty) && l.qty > 0);
  }
  function cartAdd(id, variant, qty = 1) {
    if (!validIds().has(id)) return false;
    const lines = cart();
    const line = lines.find((l) => l.id === id && l.variant === variant);
    if (line) line.qty = Math.min(99, line.qty + qty); else lines.push({ id, variant: variant || null, qty });
    write(KEY_CART, lines);
    return true;
  }
  function cartSetQty(id, variant, qty) {
    let lines = cart();
    qty = Math.max(0, Math.min(99, parseInt(qty, 10) || 0));
    if (qty === 0) lines = lines.filter((l) => !(l.id === id && l.variant === variant));
    else { const line = lines.find((l) => l.id === id && l.variant === variant); if (line) line.qty = qty; }
    write(KEY_CART, lines);
  }
  function cartRemove(id, variant) { cartSetQty(id, variant, 0); }
  function cartClear() { write(KEY_CART, []); }
  function cartCount() { return cart().reduce((n, l) => n + l.qty, 0); }

  // Vergleich: [id]
  function compare() { const ids = validIds(); return read(KEY_COMPARE, []).filter((id) => ids.has(id)).slice(0, MAX_COMPARE); }
  function compareToggle(id) {
    let list = compare();
    if (list.includes(id)) { list = list.filter((x) => x !== id); write(KEY_COMPARE, list); return { ok: true, added: false }; }
    if (list.length >= MAX_COMPARE) return { ok: false, added: false, full: true };
    list.push(id); write(KEY_COMPARE, list); return { ok: true, added: true };
  }
  function compareRemove(id) { write(KEY_COMPARE, compare().filter((x) => x !== id)); }
  function compareClear() { write(KEY_COMPARE, []); }

  window.NSCOOTS_STORE = {
    MAX_COMPARE, subscribe: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    cart, cartAdd, cartSetQty, cartRemove, cartClear, cartCount,
    compare, compareToggle, compareRemove, compareClear,
    storageAvailable() { try { const k = "__t"; window.localStorage.setItem(k, "1"); window.localStorage.removeItem(k); return true; } catch (e) { return false; } }
  };
})();
