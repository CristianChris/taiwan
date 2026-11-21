// Fetches real driving routes (OpenStreetMap / OSRM) for src/drives.json and
// writes src/routes.generated.json. Runs before every build. If the network
// is unavailable, the previous file is kept and the map falls back to straight lines.
import { readFile, writeFile } from 'node:fs/promises';

const DRIVES = new URL('../src/drives.json', import.meta.url);
const OUT = new URL('../src/routes.generated.json', import.meta.url);
const OSRM = 'https://router.project-osrm.org/route/v1/driving/';

function decode(str) {
  let i = 0, lat = 0, lng = 0;
  const pts = [];
  while (i < str.length) {
    for (const k of [0, 1]) {
      let b, s = 0, r = 0;
      do { b = str.charCodeAt(i++) - 63; r |= (b & 31) << s; s += 5; } while (b >= 32);
      const d = r & 1 ? ~(r >> 1) : r >> 1;
      if (k === 0) lat += d; else lng += d;
    }
    pts.push([lat / 1e5, lng / 1e5]);
  }
  return pts;
}

function perp(p, a, b) {
  const kx = Math.cos((a[0] * Math.PI) / 180) * 111320, ky = 110540;
  const x = (p[1] - a[1]) * kx, y = (p[0] - a[0]) * ky;
  const dx = (b[1] - a[1]) * kx, dy = (b[0] - a[0]) * ky;
  const L = dx * dx + dy * dy;
  const t = L ? Math.max(0, Math.min(1, (x * dx + y * dy) / L)) : 0;
  return Math.hypot(x - t * dx, y - t * dy);
}

function simplify(pts, eps) {
  if (pts.length < 3) return pts;
  let md = 0, mi = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = perp(pts[i], pts[0], pts[pts.length - 1]);
    if (d > md) { md = d; mi = i; }
  }
  if (md <= eps) return [pts[0], pts[pts.length - 1]];
  return simplify(pts.slice(0, mi + 1), eps).slice(0, -1).concat(simplify(pts.slice(mi), eps));
}

const drives = JSON.parse(await readFile(DRIVES, 'utf8'));
let out = {};
try { out = JSON.parse(await readFile(OUT, 'utf8')); } catch {}

let ok = 0;
for (const d of drives) {
  const pts = [d.from, ...(d.via ?? []), d.to];
  const url = OSRM + pts.map(([la, lo]) => `${lo},${la}`).join(';') + '?overview=full&geometries=polyline';
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(20000), headers: { 'User-Agent': 'trip-planner-build' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const j = await res.json();
    const r = j.routes?.[0];
    if (!r) throw new Error(j.code || 'no route');
    const line = simplify(decode(r.geometry), 15).map(([a, b]) => [+a.toFixed(5), +b.toFixed(5)]);
    // a few points along the road, so Google Maps navigation follows the same route
    const gvia = [0.25, 0.5, 0.75].map((f) => line[Math.floor(f * (line.length - 1))]);
    out[d.id] = { line, km: Math.round(r.distance / 1000), min: Math.round(r.duration / 60), gvia };
    ok++;
  } catch (e) {
    console.warn(`routes: ${d.id} skipped (${e.message})`);
  }
}
await writeFile(OUT, JSON.stringify(out) + '\n');
console.log(`routes: ${ok}/${drives.length} driving routes updated`);
