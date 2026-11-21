/*
 * ─────────────────────────────────────────────────────────────
 *  ALL TRIP CONTENT LIVES IN THIS FILE.
 *  Edit the text, times, places or days below and the site updates.
 *
 *  Conventions
 *   - "≈" in front of a time, price or duration means it is an estimate.
 *   - `guess: true` marks something we assumed (hotel, interests...).
 *     It shows up on the site with a "guess" badge so you can review it.
 *   - `optional: true` marks a stop you can skip if you're tired or late.
 *   - `map` is what gets searched in Google Maps (English or Chinese name).
 * ─────────────────────────────────────────────────────────────
 */

export type Mode = 'flight' | 'mrt' | 'train' | 'hsr' | 'bus' | 'walk' | 'taxi' | 'boat';

export interface Leg {
  mode: Mode;
  /** Short human description, e.g. "Airport MRT Express (purple line)" */
  how: string;
  duration: string;
  cost?: string;
  /** Google Maps origin/destination for the "Directions" button */
  from?: string;
  to?: string;
}

export interface Stop {
  time: string;
  title: string;
  details: string;
  map?: string;
  tips?: string[];
  /** How to get to this stop from the previous one */
  getThere?: Leg;
  optional?: boolean;
  guess?: boolean;
}

export interface Day {
  date: string; // YYYY-MM-DD
  title: string;
  area: string;
  summary: string;
  heads_up?: string;
  stops: Stop[];
  /** Swap-in ideas if the plan doesn't fit (weather, energy, interests) */
  alternatives?: string[];
}

export interface Flight {
  code: string;
  airline: string;
  from: string;
  to: string;
  depart: string;
  arrive: string;
  note?: string;
}

export interface Place {
  name: string;
  area: string;
  kind: 'Food' | 'Sight' | 'Nature' | 'Culture' | 'Night market' | 'Hot spring' | 'Shopping';
  why: string;
  time: string;
  map: string;
  /** Which day it's planned on (YYYY-MM-DD). Leave empty for "extra ideas". */
  day?: string;
}

export interface Tip {
  title: string;
  icon: string;
  points: string[];
}

export const trip = {
  title: 'Taiwan 2026',
  subtitle: 'Taipei + day trips · 28 Nov – 2 Dec',
  start: '2026-11-28',
  end: '2026-12-02',
  base: {
    name: 'Hotel near Taipei Main Station',
    map: 'Taipei Main Station',
    guess: true,
    note:
      "We haven't booked/confirmed a hotel yet in this plan. Taipei Main Station is the easiest base: Airport MRT, HSR, TRA trains and two MRT lines all stop there. Ximending or Zhongshan are good too. Update this once booked.",
  },
};

export const flights: Flight[] = [
  {
    code: 'TR866',
    airline: 'Scoot',
    from: 'Singapore (SIN)',
    to: 'Taipei Taoyuan (TPE)',
    depart: 'Sat 28 Nov · 00:55',
    arrive: 'Sat 28 Nov · ≈05:40',
    note: 'Arrival time is an estimate (≈4h45 flight). Check your booking for the exact time and terminal.',
  },
  {
    code: 'TR893',
    airline: 'Scoot',
    from: 'Taipei Taoyuan (TPE)',
    to: 'Singapore (SIN)',
    depart: 'Wed 2 Dec · 23:20',
    arrive: 'Thu 3 Dec · ≈04:00',
    note: 'Aim to be at the airport by ≈20:20. Budget-airline check-in usually closes 60 min before departure.',
  },
];

export const days: Day[] = [
  {
    date: '2026-11-28',
    title: 'Arrival & old Taipei',
    area: 'Central Taipei · Wanhua',
    summary:
      'Red-eye arrival, so keep it gentle: breakfast classic, a big memorial hall, lunch on Yongkang Street, nap, then temples and Ximending at night.',
    heads_up: "You'll be tired after the overnight flight. Everything after lunch is flexible.",
    stops: [
      {
        time: '≈05:40',
        title: 'Land at Taoyuan Airport (TPE)',
        details:
          'Immigration, then grab a tourist SIM / eSIM and an EasyCard (transport card) at the arrivals hall or the Airport MRT station (B1).',
        map: 'Taoyuan International Airport',
        tips: [
          'Fill in the online arrival card before you fly.',
          'Withdraw some cash (NT$) at an airport ATM — night markets are cash-heavy.',
        ],
      },
      {
        time: '≈07:00',
        title: 'Into the city',
        details: 'Take the purple Airport MRT Express to Taipei Main Station.',
        map: 'Taipei Main Station',
        getThere: {
          mode: 'mrt',
          how: 'Airport MRT Express (purple line) → Taipei Main Station',
          duration: '≈35–40 min',
          cost: '≈NT$160 pp',
          from: 'Taoyuan International Airport',
          to: 'Taipei Main Station',
        },
      },
      {
        time: '≈08:00',
        title: 'Drop bags at the hotel',
        details: 'Most hotels hold luggage before check-in time.',
        map: 'Taipei Main Station',
        guess: true,
      },
      {
        time: '08:30',
        title: 'Breakfast: Fu Hang Soy Milk (阜杭豆漿)',
        details:
          'Legendary breakfast: warm soy milk, thick flatbread with egg (厚餅夾蛋), youtiao. Upstairs in Huashan Market.',
        map: '阜杭豆漿',
        tips: ['Queue can be 30–60 min on weekends.', 'Closed Mondays. Cash only.'],
        getThere: {
          mode: 'mrt',
          how: 'Blue line to Shandao Temple, exit 5',
          duration: '≈10 min',
          cost: '≈NT$20',
          from: 'Taipei Main Station',
          to: '阜杭豆漿',
        },
      },
      {
        time: '10:00',
        title: 'Chiang Kai-shek Memorial Hall',
        details:
          'Huge white hall, Liberty Square gate, National Theater & Concert Hall. Changing of the guard every hour on the hour (≈09:00–17:00).',
        map: 'Chiang Kai-shek Memorial Hall',
        getThere: {
          mode: 'walk',
          how: 'Walk south through the government district (or 1 taxi ride)',
          duration: '≈20 min',
          from: '阜杭豆漿',
          to: 'Chiang Kai-shek Memorial Hall',
        },
      },
      {
        time: '11:30',
        title: 'Lunch on Yongkang Street',
        details:
          'Food street: Din Tai Fung (original Xinyi Rd branch, take a number first), Yongkang Beef Noodles, mango shaved ice at Smoothie House.',
        map: 'Yongkang Street Taipei',
        getThere: {
          mode: 'walk',
          how: 'Walk east to Dongmen',
          duration: '≈15 min',
          from: 'Chiang Kai-shek Memorial Hall',
          to: 'Yongkang Street Taipei',
        },
      },
      {
        time: '13:30',
        title: 'Hotel check-in & nap',
        details: 'Recharge after the red-eye.',
        map: 'Taipei Main Station',
        getThere: {
          mode: 'mrt',
          how: 'Red line Dongmen → Taipei Main (2 stops)',
          duration: '≈10 min',
          from: 'Dongmen Station',
          to: 'Taipei Main Station',
        },
      },
      {
        time: '16:30',
        title: 'Longshan Temple & Bopiliao',
        details:
          "Taipei's most famous temple (open ≈06:00–22:00, free) — beautiful at dusk. Next door, Bopiliao is a preserved Qing-era street.",
        map: 'Longshan Temple Taipei',
        getThere: {
          mode: 'mrt',
          how: 'Blue line to Longshan Temple (3 stops)',
          duration: '≈10 min',
          from: 'Taipei Main Station',
          to: 'Longshan Temple Taipei',
        },
      },
      {
        time: '18:30',
        title: 'Ximending dinner & stroll',
        details:
          "Taipei's youthful shopping area. Ay-Chung flour-rice noodles (阿宗麵線), fried chicken, bubble tea, street performers.",
        map: 'Ximending',
        getThere: {
          mode: 'mrt',
          how: 'Blue line 1 stop to Ximen (or walk 15 min)',
          duration: '≈5 min',
          from: 'Longshan Temple Taipei',
          to: 'Ximending',
        },
      },
    ],
    alternatives: [
      'Too tired? Skip CKS Memorial Hall and sleep earlier.',
      'Still energetic at night: Huaxi Street Night Market, right next to Longshan Temple.',
    ],
  },
  {
    date: '2026-11-29',
    title: 'Hot springs, Tamsui sunset, Shilin night market',
    area: 'Beitou · Tamsui · Shilin (all on the red MRT line)',
    summary:
      'Soak in Beitou in the morning, wander Tamsui by the river and watch the sunset, then eat your way through Shilin night market.',
    heads_up: 'Beitou museum & Thermal Valley are closed on Mondays — that is why Beitou is on Sunday.',
    stops: [
      {
        time: '09:00',
        title: 'MRT to Xinbeitou',
        details: 'Red line to Beitou, then the short pink branch to Xinbeitou.',
        map: 'Xinbeitou Station',
        getThere: {
          mode: 'mrt',
          how: 'Red line → Beitou, change to Xinbeitou branch',
          duration: '≈35 min',
          cost: '≈NT$35',
          from: 'Taipei Main Station',
          to: 'Xinbeitou Station',
        },
      },
      {
        time: '09:45',
        title: 'Beitou Thermal Valley, Library & Hot Spring Museum',
        details:
          'Steaming green-blue "Hell Valley", the wooden eco library, and a free museum in an old bathhouse (≈10:00–18:00).',
        map: 'Beitou Thermal Valley',
        getThere: { mode: 'walk', how: 'Walk up through Beitou Park', duration: '≈10 min' },
      },
      {
        time: '11:00',
        title: 'Hot spring soak',
        details:
          'Cheap & local: Millennium Hot Spring outdoor pools (swimsuit required, ≈NT$60–100). Or book a private hot spring room at a hotel for two (≈NT$800–1,500 for 60–90 min).',
        map: 'Beitou Millennium Hot Spring',
        guess: true,
        tips: ['Bring swimwear and a small towel.'],
      },
      {
        time: '12:30',
        title: 'Lunch in Beitou',
        details: 'Beitou Market food stalls (braised pork rice, beef noodles) near Beitou station.',
        map: 'Beitou Market',
      },
      {
        time: '14:00',
        title: 'Tamsui Old Street',
        details: 'Riverside snacks (iron eggs 鐵蛋, giant ice cream cones, fish balls) and Fort San Domingo (red fort, ≈09:30–17:00).',
        map: 'Tamsui Old Street',
        getThere: {
          mode: 'mrt',
          how: 'Red line Beitou → Tamsui (end of line)',
          duration: '≈25 min',
          from: 'Beitou Station',
          to: 'Tamsui Station',
        },
      },
      {
        time: '16:15',
        title: "Sunset at Fisherman's Wharf",
        details: "Lover's Bridge at sunset (≈17:05 in late Nov). Getting there by ferry is part of the fun.",
        map: "Tamsui Fisherman's Wharf",
        getThere: {
          mode: 'boat',
          how: "Ferry from Tamsui pier to Fisherman's Wharf (or Danhai light rail)",
          duration: '≈15 min',
          cost: '≈NT$60',
          from: 'Tamsui Ferry Pier',
          to: "Tamsui Fisherman's Wharf",
        },
      },
      {
        time: '18:30',
        title: 'Shilin Night Market',
        details:
          'The big one. Hot Star giant fried chicken, oyster omelette, stinky tofu, the underground food court. Get off at Jiantan station (not Shilin).',
        map: 'Shilin Night Market',
        getThere: {
          mode: 'mrt',
          how: 'Back to Tamsui MRT, red line → Jiantan',
          duration: '≈35 min',
          from: 'Tamsui Station',
          to: 'Jiantan Station',
        },
      },
      {
        time: '21:30',
        title: 'Back to the hotel',
        details: 'Red line Jiantan → Taipei Main.',
        getThere: { mode: 'mrt', how: 'Red line → Taipei Main', duration: '≈15 min', from: 'Jiantan Station', to: 'Taipei Main Station' },
      },
    ],
    alternatives: [
      'Not into hot springs? Spend the morning at the National Palace Museum (near Shilin) instead.',
      'Rainy? Tamsui is less fun in rain — do Beitou + Palace Museum + Shilin.',
    ],
  },
  {
    date: '2026-11-30',
    title: 'Sky lanterns in Shifen & lantern-lit Jiufen',
    area: 'Pingxi Line · Jiufen (northeast, ~1h from Taipei)',
    summary:
      'Release a sky lantern on the railway tracks in Shifen, see the waterfall, then spend the late afternoon in the hillside teahouse town of Jiufen as the red lanterns light up.',
    heads_up:
      'Monday = fewer crowds than the weekend. The northeast is often rainy/foggy in winter — bring an umbrella. Pingxi trains run roughly hourly: check the timetable.',
    stops: [
      {
        time: '08:00',
        title: 'Train to Ruifang',
        details: 'Local or express TRA train from Taipei Main. EasyCard works on local trains.',
        map: 'Ruifang Station',
        getThere: {
          mode: 'train',
          how: 'TRA train Taipei Main → Ruifang',
          duration: '≈45–60 min',
          cost: '≈NT$50–80',
          from: 'Taipei Main Station',
          to: 'Ruifang Station',
        },
      },
      {
        time: '09:15',
        title: 'Pingxi Line to Shifen',
        details: 'Buy the Pingxi Line one-day pass at Ruifang (≈NT$80) so you can hop on and off.',
        map: 'Shifen Station',
        getThere: { mode: 'train', how: 'Pingxi Line Ruifang → Shifen', duration: '≈30 min', from: 'Ruifang Station', to: 'Shifen Station' },
      },
      {
        time: '09:45',
        title: 'Shifen Old Street & sky lantern',
        details:
          'Write wishes on a lantern and launch it from the tracks between passing trains (≈NT$200–300 per lantern).',
        map: 'Shifen Old Street',
      },
      {
        time: '11:00',
        title: 'Shifen Waterfall',
        details: '"Niagara of Taiwan" — a wide curtain waterfall, free entry. Cross the suspension bridge on the way.',
        map: 'Shifen Waterfall',
        getThere: { mode: 'walk', how: 'Signposted path from the old street', duration: '≈20 min each way' },
      },
      {
        time: '12:30',
        title: 'Houtong Cat Village',
        details: 'Old mining village full of friendly cats. Lunch at a small café there.',
        map: 'Houtong Cat Village',
        optional: true,
        getThere: { mode: 'train', how: 'Pingxi Line back toward Ruifang, get off at Houtong', duration: '≈30 min', from: 'Shifen Station', to: 'Houtong Station' },
      },
      {
        time: '14:30',
        title: 'Jiufen Old Street',
        details:
          'Narrow alleys up the mountain: taro balls with a sea view (阿柑姨芋圓), peanut ice cream rolls, A-Mei Teahouse (the famous lantern building on Shuqi Road stairs).',
        map: 'Jiufen Old Street',
        getThere: {
          mode: 'bus',
          how: 'From Ruifang station: bus toward Jiufen / Jinguashi (e.g. 788 or 856), or a taxi',
          duration: '≈20 min',
          cost: 'Bus ≈NT$15–30 · taxi ≈NT$200–250',
          from: 'Ruifang Station',
          to: 'Jiufen Old Street',
        },
      },
      {
        time: '16:30',
        title: 'Tea & sunset in Jiufen',
        details: 'Grab a teahouse window seat before sunset (≈17:05). Lanterns glow after dark — the best photos are around 17:30–18:30.',
        map: 'A-Mei Tea House',
      },
      {
        time: '18:45',
        title: 'Bus back to Taipei',
        details: 'Bus 1062 goes straight to Zhongxiao Fuxing MRT. Queues get long — board at the Jiufen Old Street stop.',
        getThere: {
          mode: 'bus',
          how: 'Bus 1062 Jiufen → Zhongxiao Fuxing MRT, then MRT to hotel',
          duration: '≈70–90 min',
          cost: '≈NT$100',
          from: 'Jiufen Old Street',
          to: 'Zhongxiao Fuxing Station',
        },
      },
    ],
    alternatives: [
      'Add Jinguashi Gold Museum (5 min past Jiufen by bus) if you skip Houtong.',
      'Prefer the coast? Swap Shifen for Yehliu Geopark (Queen\'s Head rock) — bus 1815 from Taipei Main, ≈90 min.',
      'Heavy rain? Swap this day with Day 5 (Taipei city day).',
    ],
  },
  {
    date: '2026-12-01',
    title: 'Day trip: Sun Moon Lake',
    area: 'Central Taiwan (via HSR to Taichung)',
    summary:
      "Taiwan's most famous lake: boat between piers, try tea eggs at Xuanguang Temple, ride the ropeway or cycle the lakeside path. Long but very doable as a day trip.",
    heads_up:
      'This is the "big" day (≈3h each way). Book HSR tickets in advance (app or website) and leave early. If you\'d rather not travel that far, use one of the alternatives below.',
    stops: [
      {
        time: '07:00',
        title: 'High-speed rail to Taichung',
        details: 'From Taipei Main Station. Non-reserved cars are cheaper and fine early in the morning on a weekday.',
        map: 'HSR Taichung Station',
        getThere: {
          mode: 'hsr',
          how: 'HSR Taipei → Taichung',
          duration: '≈50–60 min',
          cost: '≈NT$700 pp',
          from: 'Taipei Main Station',
          to: 'HSR Taichung Station',
        },
      },
      {
        time: '08:15',
        title: 'Bus to Sun Moon Lake',
        details: 'Nantou Bus 6670 leaves from outside HSR Taichung station to the Shuishe Visitor Center. Follow the "Sun Moon Lake" bus signs.',
        map: 'Shuishe Visitor Center',
        getThere: {
          mode: 'bus',
          how: 'Bus 6670 HSR Taichung → Sun Moon Lake (Shuishe)',
          duration: '≈1h30',
          cost: '≈NT$190',
          from: 'HSR Taichung Station',
          to: 'Shuishe Visitor Center',
        },
      },
      {
        time: '10:00',
        title: 'Lake cruise',
        details: 'Buy a hop-on boat pass (≈NT$300): Shuishe → Xuanguang Temple (Ah Po tea eggs!) → Ita Thao.',
        map: 'Shuishe Pier',
        getThere: { mode: 'boat', how: 'Hop-on boat between the three piers', duration: '≈10–15 min per hop' },
      },
      {
        time: '12:30',
        title: 'Lunch at Ita Thao',
        details: 'Lakeside village of the Thao people — grilled meats, mountain vegetables, millet wine.',
        map: 'Ita Thao',
      },
      {
        time: '13:30',
        title: 'Ropeway or cycling',
        details:
          'Sun Moon Lake Ropeway from Ita Thao for big views, or rent a bike at Shuishe and ride the lakeside Xiangshan path.',
        map: 'Sun Moon Lake Ropeway',
        guess: true,
      },
      {
        time: '16:00',
        title: 'Bus back to HSR Taichung',
        details: 'Catch a 6670 bus from Shuishe around 16:00–16:30.',
        getThere: { mode: 'bus', how: 'Bus 6670 back to HSR Taichung', duration: '≈1h30', from: 'Shuishe Visitor Center', to: 'HSR Taichung Station' },
      },
      {
        time: '18:00',
        title: 'Dinner in Taichung',
        details: 'Miyahara (宮原眼科) — famous ice cream in an old eye hospital — or Fengjia Night Market.',
        map: '宮原眼科',
        optional: true,
      },
      {
        time: '≈20:30',
        title: 'HSR back to Taipei',
        details: 'Last trains run late, but aim for ≈21:00 to keep tomorrow fresh.',
        getThere: { mode: 'hsr', how: 'HSR Taichung → Taipei', duration: '≈50–60 min', from: 'HSR Taichung Station', to: 'Taipei Main Station' },
      },
    ],
    alternatives: [
      'Easier coastal day: Yehliu Geopark in the morning (bus 1815, ≈90 min), Keelung Miaokou night market in the evening, train back.',
      'Stay in Taipei: Dadaocheng & Dihua Street (old shophouses, tea), Huashan 1914 Creative Park, Maokong Gondola to the tea hills, Raohe Night Market.',
      'Taichung instead of the lake: Rainbow Village, Gaomei Wetlands at sunset, Fengjia Night Market.',
    ],
  },
  {
    date: '2026-12-02',
    title: 'Palace Museum, Taipei 101 & fly home',
    area: 'Shilin · Xinyi',
    summary:
      "Treasures at the National Palace Museum, Taipei 101's observatory, a short hike up Elephant Mountain for the classic skyline at sunset, then the airport.",
    heads_up: 'Flight at 23:20 — be on the Airport MRT by ≈19:30. Leave bags at the hotel or in Taipei Main Station lockers.',
    stops: [
      {
        time: '08:30',
        title: 'Check out & store luggage',
        details: 'Ask the hotel to hold bags until the evening.',
        map: 'Taipei Main Station',
        guess: true,
      },
      {
        time: '09:30',
        title: 'National Palace Museum',
        details:
          'One of the world\'s great collections of Chinese art. Look for the Jade Cabbage and Meat-shaped Stone (they rotate, may be on loan). Open ≈09:00–17:00, ≈NT$350.',
        map: 'National Palace Museum',
        getThere: {
          mode: 'bus',
          how: 'Red line to Shilin, then bus R30 / 255 / 304 to the museum',
          duration: '≈45 min',
          from: 'Taipei Main Station',
          to: 'National Palace Museum',
        },
      },
      {
        time: '12:30',
        title: 'Lunch at Taipei 101',
        details: 'Din Tai Fung in the Taipei 101 basement (take a number, browse while you wait) or the food court.',
        map: 'Taipei 101',
        getThere: {
          mode: 'mrt',
          how: 'Bus back to Shilin, red line → Taipei 101/World Trade Center',
          duration: '≈50 min',
          from: 'National Palace Museum',
          to: 'Taipei 101',
        },
      },
      {
        time: '14:00',
        title: 'Taipei 101 Observatory',
        details: '89th-floor views and the giant tuned mass damper ball. ≈NT$600, cheaper booked online.',
        map: 'Taipei 101 Observatory',
      },
      {
        time: '16:15',
        title: 'Elephant Mountain sunset',
        details: 'Steep 20–30 min stair climb for the postcard view of Taipei 101. Sunset ≈17:05.',
        map: 'Elephant Mountain Hiking Trail',
        getThere: { mode: 'mrt', how: 'Red line 1 stop to Xiangshan, then walk to trailhead', duration: '≈15 min', from: 'Taipei 101', to: 'Xiangshan Station' },
      },
      {
        time: '18:00',
        title: 'Early dinner in Xinyi',
        details: 'Plenty of options in the Xinyi malls (Breeze, ATT 4 FUN, Eslite).',
        map: 'Xinyi District Taipei',
      },
      {
        time: '19:00',
        title: 'Pick up bags → Airport MRT',
        details: 'Back to Taipei Main, collect luggage, Airport MRT Express to the terminal (check which terminal Scoot uses on your booking).',
        map: 'Taoyuan International Airport',
        getThere: {
          mode: 'mrt',
          how: 'Red line to Taipei Main, then Airport MRT Express',
          duration: '≈20 min + ≈35–40 min',
          cost: '≈NT$160 pp',
          from: 'Taipei Main Station',
          to: 'Taoyuan International Airport',
        },
      },
      {
        time: '23:20',
        title: 'TR893 to Singapore ✈️',
        details: 'Spend leftover NT$ at the airport or keep some for next time.',
      },
    ],
    alternatives: [
      'Skip the museum and do Dadaocheng / Dihua Street in the morning instead.',
      'If the weather was bad on Day 3, do Jiufen today (morning) and Taipei 101 in the afternoon — just leave Jiufen by 15:00.',
    ],
  },
];

/** Everything worth doing — planned ones link to their day; the rest are extra ideas. */
export const places: Place[] = [
  { name: 'Chiang Kai-shek Memorial Hall', area: 'Central Taipei', kind: 'Culture', why: 'Iconic hall, hourly guard ceremony', time: '1h', map: 'Chiang Kai-shek Memorial Hall', day: '2026-11-28' },
  { name: 'Yongkang Street', area: 'Central Taipei', kind: 'Food', why: 'Din Tai Fung, beef noodles, mango ice', time: '1–2h', map: 'Yongkang Street Taipei', day: '2026-11-28' },
  { name: 'Longshan Temple', area: 'Wanhua', kind: 'Culture', why: 'Most famous temple, lovely at dusk', time: '45m', map: 'Longshan Temple Taipei', day: '2026-11-28' },
  { name: 'Ximending', area: 'Wanhua', kind: 'Shopping', why: 'Youth culture, street food, shopping', time: '2h', map: 'Ximending', day: '2026-11-28' },
  { name: 'Beitou Hot Springs', area: 'Beitou', kind: 'Hot spring', why: 'Thermal Valley + a soak in the city', time: '3h', map: 'Beitou Thermal Valley', day: '2026-11-29' },
  { name: 'Tamsui & Fisherman\'s Wharf', area: 'Tamsui', kind: 'Sight', why: 'Riverside old street, best sunset', time: '3h', map: 'Tamsui Old Street', day: '2026-11-29' },
  { name: 'Shilin Night Market', area: 'Shilin', kind: 'Night market', why: 'The biggest and most famous', time: '2h', map: 'Shilin Night Market', day: '2026-11-29' },
  { name: 'Shifen sky lanterns & waterfall', area: 'Pingxi', kind: 'Nature', why: 'Lanterns on the tracks, big waterfall', time: '3h', map: 'Shifen Old Street', day: '2026-11-30' },
  { name: 'Houtong Cat Village', area: 'Ruifang', kind: 'Sight', why: 'Cats everywhere', time: '1h', map: 'Houtong Cat Village', day: '2026-11-30' },
  { name: 'Jiufen', area: 'Ruifang', kind: 'Sight', why: 'Lantern-lit hillside teahouse town', time: '3–4h', map: 'Jiufen Old Street', day: '2026-11-30' },
  { name: 'Sun Moon Lake', area: 'Nantou', kind: 'Nature', why: 'Lake cruise, ropeway, cycling', time: 'Full day', map: 'Sun Moon Lake', day: '2026-12-01' },
  { name: 'National Palace Museum', area: 'Shilin', kind: 'Culture', why: 'World-class Chinese art', time: '2–3h', map: 'National Palace Museum', day: '2026-12-02' },
  { name: 'Taipei 101 Observatory', area: 'Xinyi', kind: 'Sight', why: 'City views, giant damper ball', time: '1–1.5h', map: 'Taipei 101 Observatory', day: '2026-12-02' },
  { name: 'Elephant Mountain', area: 'Xinyi', kind: 'Nature', why: 'Classic skyline view', time: '1h', map: 'Elephant Mountain Hiking Trail', day: '2026-12-02' },
  // ── Extra ideas (not in the plan yet) ──
  { name: 'Raohe Night Market', area: 'Songshan', kind: 'Night market', why: 'Compact, great pepper buns (胡椒餅)', time: '1.5h', map: 'Raohe Night Market' },
  { name: 'Ningxia Night Market', area: 'Datong', kind: 'Night market', why: 'Local favourite, near Taipei Main', time: '1.5h', map: 'Ningxia Night Market' },
  { name: 'Dadaocheng & Dihua Street', area: 'Datong', kind: 'Culture', why: 'Old shophouses, tea, dried goods', time: '2h', map: 'Dihua Street' },
  { name: 'Huashan 1914 Creative Park', area: 'Zhongzheng', kind: 'Culture', why: 'Design shops & exhibitions in old winery', time: '1.5h', map: 'Huashan 1914 Creative Park' },
  { name: 'Maokong Gondola', area: 'Wenshan', kind: 'Nature', why: 'Cable car to tea houses (closed most Mondays)', time: '3h', map: 'Maokong Gondola' },
  { name: 'Yangmingshan', area: 'Beitou', kind: 'Nature', why: 'Volcanic park, hikes, fumaroles', time: 'Half day', map: 'Yangmingshan National Park' },
  { name: 'Yehliu Geopark', area: 'New Taipei coast', kind: 'Nature', why: 'Queen\'s Head rock formations', time: '2h', map: 'Yehliu Geopark' },
  { name: 'Keelung Miaokou Night Market', area: 'Keelung', kind: 'Night market', why: 'Seafood night market by the port', time: '1.5h', map: 'Keelung Miaokou Night Market' },
  { name: 'Jinguashi Gold Museum', area: 'Ruifang', kind: 'Culture', why: 'Old gold mine, touch a 220 kg gold bar', time: '2h', map: 'Gold Museum Jinguashi' },
  { name: 'Addiction Aquatic Development', area: 'Zhongshan', kind: 'Food', why: 'Seafood market & sushi bar', time: '1h', map: 'Addiction Aquatic Development' },
  { name: 'Rainbow Village', area: 'Taichung', kind: 'Sight', why: 'Colourfully painted houses', time: '45m', map: 'Rainbow Village Taichung' },
  { name: 'Gaomei Wetlands', area: 'Taichung', kind: 'Nature', why: 'Windmills & sunset reflections', time: '2h', map: 'Gaomei Wetlands' },
];

export const tips: Tip[] = [
  {
    title: 'Before you fly',
    icon: '🧳',
    points: [
      'Check visa rules for your passport (many passports, incl. Singapore, are visa-free for short stays).',
      'Fill in the Taiwan online arrival card a few days before.',
      'Book the HSR for Day 4 (official T Express app) and Taipei 101 tickets online.',
      'Download offline Google Maps for Taipei.',
    ],
  },
  {
    title: 'Getting around',
    icon: '🚇',
    points: [
      'EasyCard: buy at the airport or any 7-Eleven/FamilyMart. Works on MRT, buses, local TRA trains, YouBikes and in convenience stores.',
      'Google Maps transit directions are reliable in Taiwan — use the "Directions" buttons on each stop.',
      'No eating or drinking (even water) inside MRT stations and trains — fines apply.',
      'Taxis (yellow) are cheap for short hops; Uber works too.',
    ],
  },
  {
    title: 'Money',
    icon: '💵',
    points: [
      'Currency: New Taiwan Dollar (NT$). Roughly NT$24 ≈ S$1 (check the current rate).',
      'Night markets and small eateries are mostly cash. Cards are fine in malls, hotels, chains.',
      'No tipping culture.',
    ],
  },
  {
    title: 'Weather (late Nov / early Dec)',
    icon: '🌦️',
    points: [
      'Taipei ≈17–23 °C — noticeably cooler than Singapore. Pack a light jacket.',
      'Jiufen and the northeast coast are often rainy and windy in winter: umbrella + rain jacket.',
      'Sunset is early, ≈17:05.',
    ],
  },
  {
    title: 'Phone & power',
    icon: '🔌',
    points: [
      'Tourist SIMs / eSIMs at the airport arrivals hall (Chunghwa, Taiwan Mobile) — unlimited data for 5 days is cheap.',
      'Plugs are type A/B (US-style flat pins), 110 V. Bring an adapter from Singapore\'s type G.',
    ],
  },
  {
    title: 'Food etiquette',
    icon: '🥢',
    points: [
      'Many popular spots close one day a week (often Monday) — check Google Maps hours.',
      'At night markets, eat near the stall; walking while eating is OK but bins are rare — carry a bag.',
      'Convenience stores are excellent for breakfast, snacks, and tea eggs.',
    ],
  },
];
