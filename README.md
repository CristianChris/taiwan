# Taiwan 2026 trip planner

A small mobile-friendly website for our trip to Taiwan (28 Nov – 2 Dec 2026):
day-by-day itinerary, transport between stops with Google Maps directions,
things to do, and practical tips.

## Edit the trip

All content lives in **[`src/trip.ts`](src/trip.ts)** — days, stops, times,
transport, places and tips. Change the text there and the site updates.
Items marked `guess: true` (hotel, some activities) show a "guess" badge.

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes the site on every push to
`main`. One-time setup: **Settings → Pages → Build and deployment → Source:
GitHub Actions**. The site is then at https://cristianchris.github.io/taiwan/.
