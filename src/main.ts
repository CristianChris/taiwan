import 'leaflet/dist/leaflet.css';
import './style.css';
import L from 'leaflet';
import { trip, flights, places, tips, type Leg, type Stop, type Day, type Mode } from './trip';
import { versions, type Version } from './versions';
import drivesData from './drives.json';
import routesData from './routes.generated.json';

interface Drive {
  id: string;
  versions?: string[];
  day: string;
  label: string;
  from: [number, number];
  to: [number, number];
  roads: string;
  km: number;
  time: string;
}
interface Route {
  line: [number, number][];
  km: number;
  min: number;
  gvia: [number, number][];
}
const allDrives = drivesData as unknown as Drive[];

// ── Plan versions: chosen plan is remembered on this device ──
const VER_KEY = 'tw26:version';
function loadVersion(): Version {
  let id: string | null = null;
  try {
    id = localStorage.getItem(VER_KEY);
  } catch {
    /* storage blocked: default plan */
  }
  return versions.find((v) => v.id === id) ?? versions[0];
}
let ver = loadVersion();
let days: Day[] = ver.days;
let drives: Drive[] = allDrives.filter((d) => !d.versions || d.versions.includes(ver.id));
function setVersion(id: string) {
  ver = versions.find((v) => v.id === id) ?? versions[0];
  days = ver.days;
  drives = allDrives.filter((d) => !d.versions || d.versions.includes(ver.id));
  try {
    localStorage.setItem(VER_KEY, ver.id);
  } catch {
    /* ignore */
  }
}
const routes = routesData as unknown as Record<string, Route>;

function navUrl(d: Drive) {
  const ll = (p: [number, number]) => `${p[0]},${p[1]}`;
  const via = routes[d.id]?.gvia ?? [];
  return (
    `https://www.google.com/maps/dir/?api=1&origin=${ll(d.from)}&destination=${ll(d.to)}&travelmode=driving` +
    (via.length ? `&waypoints=${encodeURIComponent(via.map(ll).join('|'))}` : '')
  );
}

function driveMeta(d: Drive) {
  const r = routes[d.id];
  if (!r) return `${d.km} km · ${esc(d.time)}`;
  const t = r.min >= 60 ? `${Math.floor(r.min / 60)}h${String(r.min % 60).padStart(2, '0')}` : `${r.min} min`;
  return `${r.km} km · ≈${t} (mountain roads often take longer)`;
}

function driveHtml(d: Drive) {
  const i = days.findIndex((x) => x.date === d.day);
  const color = DAY_COLORS[i % DAY_COLORS.length];
  return `
    <article class="drive" style="border-left-color:${color}">
      <div class="drive-top"><strong>🚗 ${esc(d.label)}</strong><span class="muted">Day ${i + 1}</span></div>
      <div class="drive-meta">${driveMeta(d)}</div>
      <p>${esc(d.roads)}</p>
      <a class="btn" href="${navUrl(d)}" target="_blank" rel="noopener">Navigate in Google Maps ↗</a>
    </article>`;
}

const app = document.getElementById('app')!;

const MODE_ICON: Record<Mode, string> = {
  flight: '✈️',
  mrt: '🚇',
  train: '🚆',
  hsr: '🚄',
  bus: '🚌',
  walk: '🚶',
  taxi: '🚕',
  boat: '⛴️',
  car: '🚗',
};

const DAY_COLORS = ['#c8102e', '#2f7d4f', '#1f6fb2', '#b7791f', '#7b3fa0'];

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const mapUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + (/[一-鿿]/.test(q) ? '' : ', Taiwan'))}`;
const dirUrl = (from: string, to: string, mode = 'transit') =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from + ', Taiwan')}&destination=${encodeURIComponent(to + ', Taiwan')}&travelmode=${mode}`;

// ── Dates (trip runs in Taiwan time, UTC+8) ──
function taiwanToday(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei' }).format(new Date());
}
function fmtDay(iso: string, opts: Intl.DateTimeFormatOptions) {
  return new Date(iso + 'T12:00:00+08:00').toLocaleDateString('en-GB', { timeZone: 'Asia/Taipei', ...opts });
}
/** Current time in Taiwan as minutes since midnight */
function taiwanMinutes(): number {
  const [h, m] = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', hour12: false })
    .format(new Date())
    .split(':')
    .map(Number);
  return (h % 24) * 60 + m;
}
const stopMinutes = (t: string) => {
  const m = t.match(/(\d{1,2}):(\d{2})/);
  return m ? +m[1] * 60 + +m[2] : null;
};
/** Index of the stop happening now (last stop that has started), only on the trip day itself */
function currentStopIndex(day: Day): number {
  if (day.date !== taiwanToday()) return -1;
  const now = taiwanMinutes();
  let idx = 0;
  day.stops.forEach((s, i) => {
    const m = stopMinutes(s.time);
    if (m !== null && m <= now) idx = i;
  });
  return idx;
}
function daysBetween(a: string, b: string) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);
}

function countdown(): string {
  const today = taiwanToday();
  if (today < trip.start) {
    const n = daysBetween(today, trip.start);
    return n === 1 ? 'Tomorrow! ✈️' : `${n} days to go`;
  }
  if (today > trip.end) return 'Trip complete 🎉';
  const i = days.findIndex((d) => d.date === today);
  return `Day ${i + 1} of ${days.length} — enjoy!`;
}

// ── Routing: #plan/<date> | #explore | #tips ──
type View = { name: 'plan'; date: string } | { name: 'map' } | { name: 'explore' } | { name: 'tips' };

function defaultDay() {
  const t = taiwanToday();
  return days.some((d) => d.date === t) ? t : days[0].date;
}

function parseHash(): View {
  const [name, arg] = location.hash.replace(/^#\/?/, '').split('/');
  if (name === 'explore') return { name: 'explore' };
  if (name === 'map') return { name: 'map' };
  if (name === 'tips') return { name: 'tips' };
  const date = days.some((d) => d.date === arg) ? arg : defaultDay();
  return { name: 'plan', date };
}

// ── Render pieces ──
function legHtml(leg: Leg) {
  const dir =
    leg.from && leg.to
      ? `<a class="btn btn-ghost" href="${dirUrl(leg.from, leg.to, leg.mode === 'car' || leg.mode === 'taxi' ? 'driving' : leg.mode === 'walk' ? 'walking' : 'transit')}" target="_blank" rel="noopener">Directions ↗</a>`
      : '';
  return `
    <div class="leg">
      <span class="leg-icon" aria-hidden="true">${MODE_ICON[leg.mode]}</span>
      <div class="leg-body">
        <div class="leg-how">${esc(leg.how)}</div>
        <div class="leg-meta">${esc(leg.duration)}${leg.cost ? ` · ${esc(leg.cost)}` : ''}</div>
      </div>
      ${dir}
    </div>`;
}

/** Pin number for each stop of a day (1, 2, 3… for stops with a map pin, null otherwise) */
function stopNumbers(day: Day): (number | null)[] {
  let n = 0;
  return day.stops.map((s) => (s.at ? ++n : null));
}

function stopHtml(s: Stop, i: number, now: boolean, num: number | null = null, color = '') {
  const badges = [
    now ? '<span class="badge badge-now">now</span>' : '',
    s.optional ? '<span class="badge badge-opt">optional</span>' : '',
    s.guess ? '<span class="badge badge-guess" title="An assumption — please check">guess</span>' : '',
  ].join('');
  return `
    <div class="stop-wrap" id="stop-${i}">
    ${s.getThere ? legHtml(s.getThere) : ''}
    <article class="stop${now ? ' is-now' : ''}${s.optional ? ' is-optional' : ''}">
      <div class="stop-time">${num ? `<span class="stop-num" style="background:${color}" title="Pin ${num} on the map">${num}</span>` : ''}${esc(s.time)}</div>
      <div class="stop-main">
        <h3>${esc(s.title)} ${badges}</h3>
        <p>${esc(s.details)}</p>
        ${s.tips?.length ? `<ul class="stop-tips">${s.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
        <div class="stop-actions">
          ${s.map ? `<a class="btn" href="${mapUrl(s.map)}" target="_blank" rel="noopener">📍 Map</a>` : ''}
        </div>
      </div>
    </article>
    </div>`;
}

function planView(date: string) {
  const day = days.find((d) => d.date === date)!;
  const idx = days.indexOf(day);
  const today = taiwanToday();
  const nowIdx = currentStopIndex(day);
  const chips = days
    .map(
      (d, i) => `
      <a class="chip${d.date === date ? ' is-active' : ''}${d.date === today ? ' is-today' : ''}" href="#plan/${d.date}">
        <span class="chip-day">Day ${i + 1}</span>
        <span class="chip-date">${fmtDay(d.date, { weekday: 'short', day: 'numeric' })}</span>
      </a>`,
    )
    .join('');

  const flightCard =
    idx === 0 || idx === days.length - 1
      ? (() => {
          const f = idx === 0 ? flights[0] : flights[1];
          return `
        <div class="flight">
          <div class="flight-code">✈️ ${esc(f.airline)} ${esc(f.code)}</div>
          <div class="flight-route">${esc(f.from)} → ${esc(f.to)}</div>
          <div class="flight-times">Departs ${esc(f.depart)} · Arrives ${esc(f.arrive)}</div>
          ${f.note ? `<div class="flight-note">${esc(f.note)}</div>` : ''}
        </div>`;
        })()
      : '';

  return `
    <nav class="chips" aria-label="Days">${chips}</nav>
    <section class="day">
      <header class="day-head">
        <div class="day-kicker">Day ${idx + 1} · ${fmtDay(day.date, { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        <h2>${esc(day.title)}</h2>
        <div class="day-area">${esc(day.area)}</div>
        <p class="day-summary">${esc(day.summary)}</p>
        ${day.heads_up ? `<div class="callout">💡 ${esc(day.heads_up)}</div>` : ''}
      </header>
      ${flightCard}
      <div id="daymap" class="day-map" role="region" aria-label="Map of day ${idx + 1}"></div>
      <div class="timeline">${(() => {
        const nums = stopNumbers(day);
        const c = DAY_COLORS[idx % DAY_COLORS.length];
        return day.stops.map((s, i) => stopHtml(s, i, i === nowIdx, nums[i], c)).join('');
      })()}</div>
      ${
        day.alternatives?.length
          ? `<section class="alts"><h3>Swap-in ideas</h3><ul>${day.alternatives.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></section>`
          : ''
      }
      <div class="pager">
        ${idx > 0 ? `<a class="btn btn-ghost" href="#plan/${days[idx - 1].date}">← Day ${idx}</a>` : '<span></span>'}
        ${idx < days.length - 1 ? `<a class="btn btn-ghost" href="#plan/${days[idx + 1].date}">Day ${idx + 2} →</a>` : ''}
      </div>
    </section>`;
}

let exploreFilter = 'All';
/** Which day of the current plan visits this place (matched by its map search), or -1 */
function planDayOf(map: string) {
  return days.findIndex((d) => d.stops.some((s) => s.map === map));
}
function exploreView() {
  const kinds = ['All', 'Planned', 'Extra ideas', ...new Set(places.map((p) => p.kind))];
  const list = places.filter((p) =>
    exploreFilter === 'All'
      ? true
      : exploreFilter === 'Planned'
        ? planDayOf(p.map) >= 0
        : exploreFilter === 'Extra ideas'
          ? planDayOf(p.map) < 0
          : p.kind === exploreFilter,
  );
  return `
    <section class="page">
      <h2>Things to do</h2>
      <p class="muted">Everything in the plan, plus extra ideas if you have spare time or want to swap something out.</p>
      <div class="filters">
        ${kinds.map((k) => `<button class="filter${k === exploreFilter ? ' is-active' : ''}" data-filter="${esc(k)}">${esc(k)}</button>`).join('')}
      </div>
      <div class="cards">
        ${list
          .map((p) => {
            const di = planDayOf(p.map);
            return `
            <article class="card">
              <div class="card-top">
                <span class="badge">${esc(p.kind)}</span>
                ${di >= 0 ? `<a class="badge badge-day" href="#plan/${p.day}">Day ${di + 1}</a>` : '<span class="badge badge-idea">Extra idea</span>'}
              </div>
              <h3>${esc(p.name)}</h3>
              <p>${esc(p.why)}</p>
              <div class="card-foot">
                <span class="muted">${esc(p.area)} · ${esc(p.time)}</span>
                <a class="btn" href="${mapUrl(p.map)}" target="_blank" rel="noopener">📍 Map</a>
              </div>
            </article>`;
          })
          .join('')}
      </div>
    </section>`;
}

function tipsView() {
  return `
    <section class="page">
      <h2>Good to know</h2>
      <div class="callout">🏨 <strong>Base:</strong> ${esc(ver.base)}${trip.base.guess ? ' <span class="badge badge-guess">guess</span>' : ''}<br />${esc(trip.base.note)}</div>
      <div class="flights">
        ${flights
          .map(
            (f) => `
          <div class="flight">
            <div class="flight-code">✈️ ${esc(f.airline)} ${esc(f.code)}</div>
            <div class="flight-route">${esc(f.from)} → ${esc(f.to)}</div>
            <div class="flight-times">Departs ${esc(f.depart)} · Arrives ${esc(f.arrive)}</div>
            ${f.note ? `<div class="flight-note">${esc(f.note)}</div>` : ''}
          </div>`,
          )
          .join('')}
      </div>
      ${tips
        .map(
          (t) => `
        <section class="tip">
          <h3><span aria-hidden="true">${t.icon}</span> ${esc(t.title)}</h3>
          <ul>${t.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        </section>`,
        )
        .join('')}
      <p class="muted small">Times, prices and opening hours marked ≈ are estimates — double-check on Google Maps before you go.</p>
    </section>`;
}


// ── Map tab: every stop with coordinates, one colour per day, lines = order of the day ──
let leafletMap: L.Map | null = null;
let mapDay = 'all';

function mapView() {
  const chips = [
    `<button class="filter${mapDay === 'all' ? ' is-active' : ''}" data-mapday="all">All days</button>`,
    ...days.map(
      (d, i) =>
        `<button class="filter${mapDay === d.date ? ' is-active' : ''}" data-mapday="${d.date}"><span class="dot" style="background:${DAY_COLORS[i % DAY_COLORS.length]}"></span>Day ${i + 1}</button>`,
    ),
  ].join('');
  return `
    <section class="page map-page">
      <div class="filters">${chips}</div>
      <div id="map" role="region" aria-label="Map of the trip"></div>
      <p class="muted small">Solid lines are the driving routes on real roads. Dashed lines just connect the other stops in order (train, MRT, walking). Tap a pin or a route for details.</p>
      ${(() => {
        const list = drives.filter((d) => mapDay === 'all' || d.day === mapDay);
        return list.length ? `<h3 class="drives-title">Driving routes</h3><div class="drives">${list.map(driveHtml).join('')}</div>` : '';
      })()}
    </section>`;
}

function initMap(id = 'map', only = mapDay) {
  const el = document.getElementById(id);
  if (!el) return;
  const m = L.map(el, { zoomControl: true, attributionControl: true });
  leafletMap = m;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(m);

  const bounds: L.LatLngTuple[] = [];
  days.forEach((d, i) => {
    if (only !== 'all' && only !== d.date) return;
    const color = DAY_COLORS[i % DAY_COLORS.length];
    // start the line where the previous day ended, so travel between days shows too
    const prevEnd = i > 0 && only === 'all' ? [...days[i - 1].stops].reverse().find((s) => s.at)?.at : undefined;
    const path: L.LatLngTuple[] = prevEnd ? [prevEnd] : [];
    const nums = stopNumbers(d);
    // one pin per place per day; stops at the same place share it ("2·3")
    const pins = new Map<string, { at: L.LatLngTuple; nums: number[]; labels: string[] }>();
    d.stops.forEach((s, si) => {
      if (!s.at) return;
      const last = path[path.length - 1];
      if (!last || last[0] !== s.at[0] || last[1] !== s.at[1]) path.push(s.at);
      bounds.push(s.at);
      const key = s.at.join(',');
      const label = `<strong>${nums[si]}. Day ${i + 1} · ${esc(s.time)}</strong><br>${esc(s.title)}<br>
        <a href="#plan/${d.date}">Open day</a>${s.map ? ` · <a href="${mapUrl(s.map)}" target="_blank" rel="noopener">Google Maps ↗</a>` : ''}`;
      const pin = pins.get(key) ?? { at: s.at, nums: [], labels: [] };
      pin.nums.push(nums[si]!);
      pin.labels.push(label);
      pins.set(key, pin);
    });
    pins.forEach((p) => {
      const text = p.nums.join('·');
      L.marker(p.at, {
        icon: L.divIcon({
          className: 'num-pin',
          html: `<span style="background:${color}">${text}</span>`,
          iconSize: [0, 0],
        }),
        zIndexOffset: (days.length - i) * 100,
      })
        .addTo(m)
        .bindPopup(p.labels.join('<hr>'));
    });
    if (path.length > 1) L.polyline(path, { color, weight: 3, opacity: 0.8, dashArray: '6 6' }).addTo(m);
  });
  drives.forEach((d) => {
    if (only !== 'all' && only !== d.day) return;
    const r = routes[d.id];
    if (!r) return;
    const i = days.findIndex((x) => x.date === d.day);
    L.polyline(r.line, { color: '#fff', weight: 8, opacity: 0.9 }).addTo(m);
    L.polyline(r.line, { color: DAY_COLORS[i % DAY_COLORS.length], weight: 5, opacity: 1 })
      .addTo(m)
      .bindPopup(
        `<strong>🚗 ${esc(d.label)}</strong><br>${driveMeta(d)}<br>${esc(d.roads)}<br><a href="${navUrl(d)}" target="_blank" rel="noopener">Navigate in Google Maps ↗</a>`,
      );
    r.line.forEach((p) => bounds.push(p));
  });
  if (bounds.length) m.fitBounds(bounds, { padding: [24, 24] });
  else m.setView([23.7, 121], 7);
}

function render() {
  const view = parseHash();
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }
  const body =
    view.name === 'plan' ? planView(view.date) : view.name === 'map' ? mapView() : view.name === 'explore' ? exploreView() : tipsView();
  app.innerHTML = `
    <header class="top">
      <div>
        <h1>🇹🇼 ${esc(trip.title)}</h1>
        <div class="sub">${esc(trip.subtitle)}</div>
      </div>
      <div class="count">${countdown()}</div>
    </header>
    <div class="vbar">
      <div class="vswitch" role="group" aria-label="Choose plan">
        ${versions
          .map(
            (v) =>
              `<button class="${v.id === ver.id ? 'is-active' : ''}" data-ver="${v.id}" aria-pressed="${v.id === ver.id}"><strong>${esc(v.name)}</strong><span>${esc(v.short)}</span></button>`,
          )
          .join('')}
      </div>
    </div>
    <main>${body}</main>
    <nav class="tabs" aria-label="Sections">
      <a href="#plan/${view.name === 'plan' ? view.date : defaultDay()}" class="${view.name === 'plan' ? 'is-active' : ''}"><span>🗓️</span>Plan</a>
      <a href="#map" class="${view.name === 'map' ? 'is-active' : ''}"><span>🗺️</span>Map</a>
      <a href="#explore" class="${view.name === 'explore' ? 'is-active' : ''}"><span>📍</span>Explore</a>
      <a href="#tips" class="${view.name === 'tips' ? 'is-active' : ''}"><span>💡</span>Tips</a>
    </nav>`;
  app.querySelector('.chip.is-active')?.scrollIntoView({ inline: 'center', block: 'nearest' });
  if (view.name === 'map') initMap();
  if (view.name === 'plan') initMap('daymap', view.date);
}

/** Plan for today opens at the stop happening now; everything else opens at the top. */
function scrollToNow() {
  const view = parseHash();
  const day = view.name === 'plan' ? days.find((d) => d.date === view.date) : undefined;
  const i = day ? currentStopIndex(day) : -1;
  const el = i > 0 ? document.getElementById(`stop-${i}`) : null;
  if (!el) return window.scrollTo(0, 0);
  const chips = document.querySelector('.chips') as HTMLElement | null;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - (chips?.offsetHeight ?? 0) - 12 });
}

app.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  const vb = t.closest<HTMLButtonElement>('[data-ver]');
  if (vb) {
    if (vb.dataset.ver !== ver.id) {
      setVersion(vb.dataset.ver!);
      render();
      scrollToNow();
    }
    return;
  }
  const md = t.closest<HTMLButtonElement>('[data-mapday]');
  if (md) {
    mapDay = md.dataset.mapday!;
    render();
    return;
  }
  const f = t.closest<HTMLButtonElement>('.filter');
  if (f) {
    exploreFilter = f.dataset.filter!;
    render();
  }
});

window.addEventListener('hashchange', () => {
  render();
  scrollToNow();
});
render();
scrollToNow();
