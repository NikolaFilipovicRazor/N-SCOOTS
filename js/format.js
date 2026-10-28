/* Schweizer Formate */
window.NSCOOTS_FMT = {
  chf(value) {
    if (value == null || isNaN(value)) return "Preis offen";
    const [int, dec] = Number(value).toFixed(2).split(".");
    const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, "’");
    return "CHF " + grouped + (dec === "00" ? ".–" : "." + dec);
  },
  num(value, unit = "") {
    if (value == null || value === "") return null;
    if (typeof value === "string") return value + (unit ? " " + unit : "");
    const s = Number(value).toLocaleString("de-CH", { maximumFractionDigits: 1 }).replace(/'/g, "’");
    return s + (unit ? " " + unit : "");
  },
  date(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}.${m}.${y}`;
  },
  esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
};
