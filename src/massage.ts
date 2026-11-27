/*
 * Massage ideas, shown as 💆 pins on the day map and the big map.
 * Found on Google Maps on 27 Nov 2026 (rating, number of reviews). Prices are
 * typical for Taiwan, not checked for each shop. Book ahead by phone or LINE.
 */
export type Massage = {
  day: string;
  name: string;
  q: string;
  at: [number, number];
  rating?: number;
  reviews?: number;
  note: string;
};

export const MASSAGE_CHECKED = '27 Nov 2026';

export const MASSAGE: Massage[] = [
  {
    day: '2026-11-28',
    name: 'Chien Sui Yueh foot & body massage (千歲月足體養生工坊 · 台灣大道店)',
    q: '千歲月足體養生工坊 台中台灣大道店',
    at: [24.14035, 120.68159],
    rating: 5.0,
    reviews: 2262,
    note: 'Two minutes from Miyahara. Easiest pick between lunch and Li Hai: park once at the Second Market car park and walk.',
  },
  {
    day: '2026-11-28',
    name: 'Thai Crystal Palace Royal Spa, Sanmin branch (泰晶殿皇家SPA莊園 · 三民會館)',
    q: '泰晶殿皇家SPA莊園 三民會館',
    at: [24.14623, 120.68279],
    rating: 4.9,
    reviews: 3667,
    note: 'Bigger spa, about 5 minutes’ walk from the Second Market. Good for a full-body or Thai oil massage.',
  },
  {
    day: '2026-11-28',
    name: 'Springyoung Foot Massage, Taichung store',
    q: 'springyoung Footmassage parlor Taichung',
    at: [24.15147, 120.66876],
    rating: 4.9,
    reviews: 23626,
    note: 'Very popular with visitors (English menu). About 10 minutes’ drive from the market, near Shenji New Village.',
  },
  {
    day: '2026-11-28',
    name: 'In Guguan: ask Dragon Valley Hotel, or the spa at Uni Resort Ku-kuan',
    q: 'Uni Resort Ku-kuan',
    at: [24.20206, 121.00211],
    rating: 4.9,
    reviews: 24807,
    note: 'Guguan has no real massage shops, only hot springs. If you want a massage tonight, ask the hotel at check-in, or try the spa at Uni Resort (5 minutes’ walk).',
  },
];
