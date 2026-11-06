#!/usr/bin/env python3
"""Freisteller vereinheitlichen: Bounding-Box des Objekts, 4 % Rand, quadratisch auf Weiss, max. 1400 px.
Bilder mit dunklem Hintergrund oder untypischem Seitenverhältnis werden nicht beschnitten und als «lifestyle» gemeldet.
Aufruf: python3 tools/crop-freisteller.py <datei> [...]  -> gibt JSON-Liste der Dateien aus, die als lifestyle gelten sollen."""
import sys, json
from PIL import Image, ImageOps
out = []
for f in sys.argv[1:]:
    try:
        im = Image.open(f).convert("RGB")
    except Exception:
        continue
    w, h = im.size
    g = ImageOps.grayscale(im)
    corners = [g.getpixel((2, 2)), g.getpixel((w - 3, 2)), g.getpixel((2, h - 3)), g.getpixel((w - 3, h - 3))]
    if min(corners) < 225:
        out.append(f); continue  # dunkler/bunter Hintergrund -> Szene, nicht Freisteller
    # Bounding-Box aller Pixel dunkler als 235
    mask = g.point(lambda v: 255 if v < 235 else 0)
    box = mask.getbbox()
    if not box:
        continue
    bw, bh = box[2] - box[0], box[3] - box[1]
    if bw / bh > 2.6 or bh / bw > 2.6:
        out.append(f); continue  # Infografik/Balken
    m = int(max(bw, bh) * 0.05)
    x0, y0, x1, y1 = max(0, box[0] - m), max(0, box[1] - m), min(w, box[2] + m), min(h, box[3] + m)
    crop = im.crop((x0, y0, x1, y1))
    # leicht graue Hintergründe auf Weiss heben
    crop = crop.point(lambda v: 255 if v > 238 else v)
    side = max(crop.size)
    sq = Image.new("RGB", (side, side), (255, 255, 255))
    sq.paste(crop, ((side - crop.size[0]) // 2, (side - crop.size[1]) // 2))
    if side > 1400:
        sq = sq.resize((1400, 1400), Image.LANCZOS)
    sq.save(f, "JPEG", quality=92, optimize=True)
print(json.dumps(out))
