// Erzeugt Test-Bilder (prozedural, keine echten Fotos) für die Browser-Abnahme der Foto-/Parallax-Schicht.
const { chromium } = require("playwright"); const fs = require("fs"); const path = require("path");
(async () => {
  const b = await chromium.launch(); const page = await b.newPage({ viewport: { width: 1600, height: 1100 } });
  const names = ["hero-stadt-abend", "profil-alltag", "profil-touren", "profil-gelaende", "story-1", "story-2", "story-3", "marke-kukirin", "marke-joyor", "dirtbike", "produkt-a", "produkt-b"];
  for (let i = 0; i < names.length; i++) {
    const data = await page.evaluate((seed) => {
      const c = document.createElement("canvas"); c.width = 1600; c.height = 1100; const x = c.getContext("2d");
      const g = x.createLinearGradient(0, 0, 1600, 1100); g.addColorStop(0, `hsl(${210 + seed * 9}, 35%, ${28 + seed}%)`); g.addColorStop(1, `hsl(${30 + seed * 7}, 45%, ${55 - seed}%)`);
      x.fillStyle = g; x.fillRect(0, 0, 1600, 1100);
      for (let k = 0; k < 24; k++) { x.fillStyle = `rgba(255,255,255,${0.03 + (k % 5) * 0.015})`; x.beginPath(); x.ellipse((seed * 131 + k * 97) % 1600, (seed * 71 + k * 143) % 1100, 120 + k * 9, 40 + k * 5, k, 0, Math.PI * 2); x.fill(); }
      x.strokeStyle = "rgba(255,255,255,.9)"; x.lineWidth = 16; x.lineCap = "round"; x.beginPath(); x.arc(560, 820, 70, 0, Math.PI * 2); x.moveTo(1040, 820); x.arc(1040, 820, 70, 0, Math.PI * 2); x.moveTo(630, 820); x.lineTo(970, 820); x.moveTo(990, 800); x.lineTo(930, 420); x.moveTo(880, 420); x.lineTo(980, 420); x.stroke();
      x.fillStyle = "rgba(0,0,0,.55)"; x.fillRect(40, 1000, 560, 60); x.fillStyle = "#fff"; x.font = "bold 30px Arial"; x.fillText("TESTBILD – KEIN FOTO (Fixture " + seed + ")", 56, 1042);
      return c.toDataURL("image/jpeg", 0.8);
    }, i);
    fs.writeFileSync(path.join(__dirname, "fixtures", names[i] + ".jpg"), Buffer.from(data.split(",")[1], "base64"));
  }
  await b.close(); console.log("Fixtures:", names.length);
})();
