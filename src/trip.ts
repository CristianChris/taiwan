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

export type Mode = 'flight' | 'mrt' | 'train' | 'hsr' | 'bus' | 'walk' | 'taxi' | 'boat' | 'car';

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
  /** [latitude, longitude] — puts the stop on the Map tab */
  at?: [number, number];
  tips?: string[];
  /** How to get to this stop from the previous one */
  getThere?: Leg;
  optional?: boolean;
  guess?: boolean;
  /** Ticket / reservation already made */
  booked?: boolean;
  /** Photos (files in public/img) to help find the place */
  images?: { src: string; caption: string }[];
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
  /** Where you sleep tonight */
  stay?: Stay;
}

export interface Stay {
  name: string;
  map: string;
  at?: [number, number];
  address?: string;
  note: string;
  /** true = booked; otherwise shown as "to book" */
  booked?: boolean;
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
  subtitle: 'Taichung · Alishan · Sun Moon Lake · 28 Nov – 2 Dec',
  start: '2026-11-28',
  end: '2026-12-02',
  base: {
    name: 'Taipei (28 Nov) · Alishan (29 & 30 Nov) · Sun Moon Lake (1 Dec)',
    map: 'Taipei Main Station',
    guess: true,
    note:
      "Hotels aren't confirmed in this plan yet. Taipei: near Taipei Main Station (Airport MRT + HSR). Alishan: 2 nights inside the Forest Recreation Area near Alishan station (books up — reserve early, check parking). Sun Moon Lake: Shuishe or Ita Thao, with parking. No Taipei hotel needed on 2 Dec — you fly that night.",
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
    title: 'Arrival, old-town Taipei & Shilin Night Market',
    area: 'Wanhua · Dadaocheng · Shilin',
    summary:
      "Red-eye arrival, so we stay in Taipei's oldest neighbourhoods: Longshan Temple and Bopiliao in Wanhua, Dihua Street's shophouses in Dadaocheng, sunset at the wharf, then dinner at Taipei's biggest night market, Shilin.",
    heads_up:
      "This is your only night in Taipei before the flight home — tomorrow you leave for 4 days in the south with a car, so you can take all your luggage with you.",
    stops: [
      {
        time: '≈05:40',
        title: 'Land at Taoyuan Airport (TPE)',
        details:
          'Immigration, then grab a tourist SIM / eSIM and an EasyCard (transport card) at the arrivals hall or the Airport MRT station (B1).',
        map: 'Taoyuan International Airport',
        at: [25.0797, 121.2342],
        tips: [
          'Fill in the online arrival card before you fly.',
          'Withdraw cash (NT$) at an airport ATM — night markets and mountain areas are cash-heavy.',
        ],
      },
      {
        time: '≈07:00',
        title: 'Into the city',
        details: 'Purple Airport MRT Express to Taipei Main Station, drop bags at the hotel.',
        map: 'Taipei Main Station',
        at: [25.0478, 121.517],
        guess: true,
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
        time: '08:30',
        title: 'Breakfast: Fu Hang Soy Milk (阜杭豆漿)',
        details: 'Legendary breakfast: warm soy milk, thick flatbread with egg (厚餅夾蛋), youtiao. Upstairs in Huashan Market.',
        map: '阜杭豆漿',
        at: [25.0441, 121.5246],
        tips: ['Queue can be 30–60 min on weekends.', 'Cash only.'],
        getThere: { mode: 'mrt', how: 'Blue line to Shandao Temple, exit 5', duration: '≈10 min', from: 'Taipei Main Station', to: '阜杭豆漿' },
      },
      {
        time: '10:00',
        title: 'Longshan Temple',
        details: "Taipei's most famous temple (1738), busy with morning worshippers — a great first taste of local life. Free.",
        map: 'Longshan Temple Taipei',
        at: [25.0372, 121.4999],
        getThere: { mode: 'mrt', how: 'Blue line Shandao Temple → Longshan Temple', duration: '≈10 min', from: 'Shandao Temple Station', to: 'Longshan Temple Taipei' },
      },
      {
        time: '11:00',
        title: 'Bopiliao Historic Block & Wanhua lanes',
        details: 'Preserved Qing-era red-brick street right behind the temple, plus the old herb lane (青草巷).',
        map: 'Bopiliao Historic Block',
        at: [25.0363, 121.5018],
        getThere: { mode: 'walk', how: 'Walk around the corner', duration: '≈5 min' },
      },
      {
        time: '12:00',
        title: 'Lunch in Ximending',
        details: "Ay-Chung flour-rice noodles (阿宗麵線), braised pork rice, bubble tea in Taipei's youthful shopping area.",
        map: 'Ximending',
        at: [25.0421, 121.5076],
        getThere: { mode: 'mrt', how: 'Blue line 1 stop to Ximen (or walk 15 min)', duration: '≈5 min', from: 'Longshan Temple Station', to: 'Ximending' },
      },
      {
        time: '13:30',
        title: 'Hotel check-in & nap',
        details: 'Recharge after the red-eye.',
        map: 'Taipei Main Station',
        at: [25.0478, 121.517],
        guess: true,
        getThere: { mode: 'mrt', how: 'Blue line Ximen → Taipei Main (1 stop)', duration: '≈5 min', from: 'Ximen Station', to: 'Taipei Main Station' },
      },
      {
        time: '15:30',
        title: 'Dadaocheng & Dihua Street',
        details:
          "Taipei's best-preserved old town: 19th-century shophouses selling dried goods, herbs and fabrics, Xiahai City God Temple (matchmaking god), and old tea houses.",
        map: 'Dihua Street',
        at: [25.0565, 121.51],
        getThere: { mode: 'mrt', how: 'Green line to Beimen, exit 3, then walk', duration: '≈15 min', from: 'Taipei Main Station', to: 'Dihua Street' },
      },
      {
        time: '16:45',
        title: 'Sunset at Dadaocheng Wharf',
        details: 'Riverside container bars and food stalls; sunset ≈17:05.',
        map: 'Dadaocheng Wharf',
        at: [25.0563, 121.5083],
        getThere: { mode: 'walk', how: 'Walk west to the river', duration: '≈10 min' },
      },
      {
        time: '18:00',
        title: 'Night market: Shilin Night Market',
        details:
          "Taipei's biggest and most famous: Hot Star giant fried chicken, oyster omelette, stinky tofu, pepper buns and the underground food court. Get off at Jiantan station (not Shilin).",
        map: 'Shilin Night Market',
        at: [25.088, 121.5241],
        getThere: {
          mode: 'mrt',
          how: 'Walk to Daqiaotou / Zhongshan, then red line → Jiantan',
          duration: '≈30 min',
          from: 'Dadaocheng Wharf',
          to: 'Jiantan Station',
        },
      },
      {
        time: '20:30',
        title: 'Back to the hotel, pack for the road trip',
        details: 'Red line Jiantan → Taipei Main (≈15 min). Early start tomorrow.',
        at: [25.0478, 121.517],
        getThere: { mode: 'mrt', how: 'Red line → Taipei Main', duration: '≈15 min', from: 'Jiantan Station', to: 'Taipei Main Station' },
      },
    ],
    alternatives: [
      'Energy left at lunch? Huaxi Street Night Market is right next to Longshan Temple.',
      'Prefer a smaller, more local market than Shilin: Ningxia Night Market is a 15 min walk from Dadaocheng Wharf.',
    ],
  },
  {
    date: '2026-11-29',
    title: 'Pick up the car → Fenqihu station → Alishan',
    area: 'Chiayi → Fenqihu → Alishan (≈2,200 m)',
    summary:
      'High-speed rail to Chiayi, pick up the rental car and drive up into the mountains. Stop at Fenqihu, the most charming station on the Alishan Forest Railway (old street, famous railway bento, train garage), then on to Alishan for the giant-tree trails.',
    heads_up:
      'Bring your International Driving Permit + home licence + passport. Fill up the tank in Chiayi — there are few petrol stations on the mountain. Highway 18 is winding: take it slow, fog is common in the afternoon. It is COLD up top (≈5–12 °C).',
    stops: [
      {
        time: '07:00',
        title: 'High-speed rail to Chiayi',
        details: 'Check out, take all luggage. Book reserved seats in advance on the T Express app.',
        map: 'HSR Chiayi Station',
        at: [23.4596, 120.3233],
        getThere: { mode: 'hsr', how: 'HSR Taipei → Chiayi', duration: '≈1h20–1h30', cost: '≈NT$1,080 pp', from: 'Taipei Main Station', to: 'HSR Chiayi Station' },
      },
      {
        time: '08:45',
        title: 'Pick up rental car at HSR Chiayi',
        details:
          'Several rental companies have counters at/next to the HSR station (e.g. Hotai, Car Plus, Chailease). Book online beforehand and ask for one-way return at HSR Taichung on 2 Dec.',
        map: 'HSR Chiayi Station',
        at: [23.4596, 120.3233],
        guess: true,
        tips: ['Expect ≈NT$2,000–3,000/day for a small car, plus a one-way fee.', 'Fill up the tank before Highway 18.'],
      },
      {
        time: '≈10:30',
        title: 'Fenqihu Old Street & railway station (奮起湖)',
        details:
          'Mountain village on the Alishan Forest Railway: see the old steam locomotives in the train garage, walk the old street, and have the famous Fenqihu railway bento (奮起湖便當) for lunch. Also try the square doughnuts.',
        map: 'Fenqihu Station',
        at: [23.5013, 120.6955],
        getThere: {
          mode: 'car',
          how: 'Drive Highway 159 → 159甲 (or Hwy 18 → County Rd 169) to Fenqihu',
          duration: '≈1h30',
          from: 'HSR Chiayi Station',
          to: 'Fenqihu Station',
        },
      },
      {
        time: '13:00',
        title: 'Drive on to Alishan, check in',
        details: 'Hotel inside the Alishan Forest Recreation Area near Alishan station (2 nights). Park entry ≈NT$300 pp + parking ≈NT$200 per car.',
        map: 'Alishan Forest Recreation Area',
        at: [23.5103, 120.804],
        guess: true,
        getThere: {
          mode: 'car',
          how: 'Back to Highway 18, up to the Alishan gate',
          duration: '≈1h',
          from: 'Fenqihu Station',
          to: 'Alishan Forest Recreation Area',
        },
      },
      {
        time: '14:00',
        title: 'Giant Trees Trail & Sister Ponds',
        details:
          'The classic 2–3 h loop: Sister Ponds, Shouzhen Temple, the Giant Trees Boardwalk (thousand-year-old red cypresses), Xianglin Sacred Tree and Ciyun Temple.',
        map: 'Alishan Sister Ponds',
        at: [23.5116, 120.8055],
        getThere: { mode: 'walk', how: 'Signposted trails from Alishan station', duration: '2–3 h loop' },
      },
      {
        time: '17:00',
        title: 'Sunset at Zhaoping station & dinner',
        details:
          "Zhaoping and Alishan stations are on the same railway — great at golden hour. Then dinner in the village and buy tomorrow's Zhushan sunrise train ticket at Alishan station (the time is posted daily).",
        map: 'Zhaoping Station Alishan',
        at: [23.5112, 120.8063],
      },
    ],
    alternatives: [
      "Prefer the train: Alishan Forest Railway from TRA Chiayi all the way up (≈3.5 h) — but then you'd drive back down for the car. With a car, Fenqihu is the easiest railway highlight.",
      'Overnight option with more charm: one night in Fenqihu, one night in Alishan.',
    ],
  },
  {
    date: '2026-11-30',
    title: 'Alishan sunrise, forest trains & Tataka',
    area: 'Alishan · Zhushan · Tataka (Yushan National Park edge)',
    summary:
      'Pre-dawn train to Zhushan for sunrise over a sea of clouds, a ride on the little forest trains, then a scenic afternoon drive to Tataka on the edge of Yushan (Jade Mountain) National Park. Second night in Alishan.',
    heads_up: 'Very early start (≈04:45) and near-freezing at sunrise — dress in all your layers. Private cars cannot drive to Zhushan; use the train or walk.',
    stops: [
      {
        time: '≈05:00',
        title: 'Zhushan sunrise',
        details:
          'Zhushan line train (≈25 min) to the viewing deck. Sunrise ≈06:25 in late Nov; sea of clouds and Jade Mountain on clear mornings.',
        map: 'Zhushan Sunrise Viewing Platform',
        at: [23.5088, 120.8174],
        getThere: { mode: 'train', how: 'Zhushan line from Alishan station (or walk ≈1 h uphill)', duration: '≈25 min', cost: '≈NT$150 one way' },
      },
      {
        time: '07:30',
        title: 'Walk down & breakfast',
        details: 'Take the 1 h trail back down via Duigaoyue, then hotel breakfast.',
        map: 'Alishan Station',
        at: [23.5103, 120.804],
        getThere: { mode: 'walk', how: 'Zhushan → Alishan trail (downhill)', duration: '≈1 h' },
      },
      {
        time: '09:30',
        title: 'Forest train ride: Shenmu line',
        details: 'Short ride on a vintage forest train from Alishan to Shenmu (Sacred Tree) station, then walk the giant trees in morning light. Alishan museum near the station.',
        map: 'Shenmu Station Alishan',
        at: [23.5139, 120.8025],
        getThere: { mode: 'train', how: 'Alishan Forest Railway, Shenmu line', duration: '≈10 min', cost: '≈NT$100' },
      },
      {
        time: '12:00',
        title: 'Lunch in Alishan village',
        details: 'Mountain vegetables, wasabi dishes, Alishan high-mountain oolong tea.',
        map: 'Alishan Station',
        at: [23.5103, 120.804],
      },
      {
        time: '13:30',
        title: 'Drive to Tataka & Lulin Sacred Tree',
        details:
          'Gorgeous high-altitude drive (≈2,600 m) to the Tataka visitor center on the edge of Yushan National Park. Easy 30 min walk to the Lulin Sacred Tree; views of Jade Mountain on a clear day.',
        map: 'Tataka Visitor Center',
        at: [23.472, 120.889],
        getThere: { mode: 'car', how: 'Highway 18 east to Tataka', duration: '≈45 min', from: 'Alishan Forest Recreation Area', to: 'Tataka Visitor Center' },
      },
      {
        time: '16:30',
        title: 'Back to Alishan for a quiet evening',
        details: 'Hot dinner (hot pot is perfect in the cold), stargazing if clear.',
        map: 'Alishan Forest Recreation Area',
        at: [23.5103, 120.804],
        guess: true,
        getThere: { mode: 'car', how: 'Highway 18 back west — drive before dark/fog', duration: '≈45 min', from: 'Tataka Visitor Center', to: 'Alishan Forest Recreation Area' },
      },
    ],
    alternatives: [
      'Instead of Tataka: drive down to Shizhuo (石桌) tea plantations (≈30 min) for tea fields above the clouds and a tea tasting.',
      'Cloudy morning? Skip the sunrise and sleep in — the giant trees are beautiful in mist too.',
    ],
  },
  {
    date: '2026-12-01',
    title: 'Mountain drive to Sun Moon Lake',
    area: 'Alishan → Ruili → Zhushan → Sun Moon Lake',
    summary:
      "Drive down from Alishan through the tea and bamboo country of Ruili and Zhushan to Sun Moon Lake. Afternoon lake cruise and temples, evening at Ita Thao's lakeside night street.",
    heads_up: 'About 3 h of mountain driving (≈113 km) — leave by 08:30 and take breaks. The exact route is on the Map tab. Roads can close after landslides/heavy rain; check road status (1968 app) before leaving. Overnight at Sun Moon Lake.',
    stops: [
      {
        time: '08:30',
        title: 'Check out & drive to Sun Moon Lake',
        details:
          'Hwy 18 down to Shizhuo, then small county roads through Ruili (tea terraces, bamboo forest) to Zhushan, and Hwy 16 / 21 up to the lake. Stop in Zhushan for a break. The road via Tataka and Hwy 21 is shorter on paper, but the online route planner does not use it, so check that it is open before you take it.',
        map: 'Shuishe Visitor Center',
        at: [23.8662, 120.91],
        getThere: {
          mode: 'car',
          how: 'Hwy 18 → 嘉155 / 149甲 / 149 (Ruili) → Hwy 3 (Zhushan) → Hwy 16 → Hwy 21',
          duration: '≈3h10 (≈113 km)',
          from: 'Alishan Forest Recreation Area',
          to: 'Shuishe Visitor Center',
        },
      },
      {
        time: '12:30',
        title: 'Lunch & check in at Sun Moon Lake',
        details: 'Stay around Shuishe or Ita Thao (hotels usually have parking). Try the lake fish (總統魚).',
        map: 'Shuishe Pier',
        at: [23.8662, 120.91],
        guess: true,
      },
      {
        time: '14:00',
        title: 'Lake cruise & Xuanguang Temple',
        details: 'Hop-on boat pass (≈NT$300): Shuishe → Xuanguang Temple (Ah Po tea eggs!) → Ita Thao.',
        map: 'Xuanguang Temple',
        at: [23.8494, 120.9225],
        getThere: { mode: 'boat', how: 'Hop-on boat between the three piers', duration: '≈10–15 min per hop', cost: '≈NT$300 pp' },
      },
      {
        time: '15:30',
        title: 'Sun Moon Lake Ropeway',
        details: 'Gondola from Ita Thao over the hills for big lake views (check for maintenance closures).',
        map: 'Sun Moon Lake Ropeway',
        at: [23.8517, 120.9363],
        optional: true,
      },
      {
        time: '17:00',
        title: 'Sunset on the lake',
        details: 'Ita Thao pier or Wenwu Temple viewpoint; sunset ≈17:10.',
        map: 'Ita Thao Pier',
        at: [23.8505, 120.9351],
      },
      {
        time: '18:00',
        title: 'Night market: Ita Thao Night Street',
        details: 'Thao aboriginal grilled boar sausage, millet mochi, sticky rice in bamboo, sweet-potato balls.',
        map: 'Ita Thao Night Market',
        at: [23.8505, 120.9351],
      },
    ],
    alternatives: [
      'Prefer bigger roads? Drive Hwy 18 back down to Chiayi, then Freeway 3 → Freeway 6 to Sun Moon Lake (≈3h, easier driving, fewer curves).',
    ],
  },
  {
    date: '2026-12-02',
    title: 'Lake morning → Taichung → fly home',
    area: 'Sun Moon Lake · Taichung (Fengjia) · Taoyuan Airport',
    summary:
      "Cycle the lake in the morning mist, drive to Taichung and return the car, eat at the huge Fengjia Night Market, then high-speed rail straight to Taoyuan for the airport.",
    heads_up:
      'Flight at 23:20 — aim to be at the airport by ≈20:20. Take the HSR to Taoyuan station (not Taipei) and switch to the Airport MRT: it is the fastest way. Store bags in lockers at HSR Taichung while you visit Fengjia.',
    stops: [
      {
        time: '07:00',
        title: 'Cycling the Xiangshan path',
        details: 'Rent a bike (Giant at Shuishe) and ride the lakeside path with floating boardwalk sections.',
        map: 'Xiangshan Visitor Center',
        at: [23.8508, 120.901],
        getThere: { mode: 'walk', how: 'Bike rental at Shuishe', duration: '≈1.5–2 h ride', cost: '≈NT$300–500 per bike' },
      },
      {
        time: '10:30',
        title: 'Check out, drive to Taichung',
        details: 'Drive to HSR Taichung station — exact route on the Map tab.',
        map: 'HSR Taichung Station',
        at: [24.1121, 120.6157],
        getThere: { mode: 'car', how: 'Hwy 21 → Hwy 14 (Puli) → Freeway 6 → Freeway 3', duration: '≈1h05 (≈64 km)', from: 'Shuishe Visitor Center', to: 'HSR Taichung Station' },
      },
      {
        time: '12:30',
        title: 'Lunch & Miyahara (宮原眼科)',
        details: 'Famous dessert shop in a 1920s eye hospital near Taichung station. Keep the car until after lunch if you like.',
        map: '宮原眼科',
        at: [24.1375, 120.6838],
        optional: true,
        getThere: { mode: 'car', how: 'Drive into central Taichung', duration: '≈20 min', from: 'HSR Taichung Station', to: '宮原眼科' },
      },
      {
        time: '15:00',
        title: 'Return the car at HSR Taichung',
        details: 'Refuel first. Put luggage in the HSR station lockers.',
        map: 'HSR Taichung Station',
        at: [24.1121, 120.6157],
        guess: true,
      },
      {
        time: '16:00',
        title: 'Night market: Fengjia Night Market',
        details:
          "One of Taiwan's biggest night markets — many stalls open from mid-afternoon. Flame-grilled beef cubes, giant squid, Mingluen egg pancakes, bubble tea.",
        map: 'Fengjia Night Market',
        at: [24.1756, 120.6461],
        getThere: { mode: 'taxi', how: 'Taxi / Uber from HSR Taichung', duration: '≈25 min', cost: '≈NT$300' },
      },
      {
        time: '18:15',
        title: 'Back to HSR Taichung, collect bags',
        details: 'Taxi back to the station.',
        map: 'HSR Taichung Station',
        at: [24.1121, 120.6157],
        getThere: { mode: 'taxi', how: 'Taxi / Uber to HSR Taichung', duration: '≈25 min', cost: '≈NT$300', from: 'Fengjia Night Market', to: 'HSR Taichung Station' },
      },
      {
        time: '≈19:00',
        title: 'HSR to Taoyuan → Airport MRT',
        details: 'HSR Taichung → Taoyuan (≈40 min), then the Airport MRT from A18 HSR Taoyuan station to the terminal (≈15–20 min).',
        map: 'Taoyuan International Airport',
        at: [25.0129, 121.2149],
        getThere: { mode: 'hsr', how: 'HSR Taichung → Taoyuan, then Airport MRT', duration: '≈40 min + ≈20 min', cost: '≈NT$500 + NT$40 pp', from: 'HSR Taichung Station', to: 'HSR Taoyuan Station' },
      },
      {
        time: '23:20',
        title: 'TR893 to Singapore ✈️',
        details: 'Spend leftover NT$ at the airport or keep some for next time.',
        at: [25.0797, 121.2342],
      },
    ],
    alternatives: [
      'Return the car at Taoyuan Airport instead (if your rental company allows it): drive Sun Moon Lake → TPE in ≈3 h and skip Taichung.',
      'Running late? Skip Fengjia and take an earlier HSR — eat at the airport.',
    ],
  },
];

/** Everything worth doing — planned ones link to their day; the rest are extra ideas. */
export const places: Place[] = [
  { name: 'Longshan Temple', area: 'Wanhua (old town)', kind: 'Culture', why: 'Most famous temple, busy in the morning', time: '45m', map: 'Longshan Temple Taipei', day: '2026-11-28' },
  { name: 'Bopiliao Historic Block', area: 'Wanhua (old town)', kind: 'Culture', why: 'Qing-era red-brick street', time: '30m', map: 'Bopiliao Historic Block', day: '2026-11-28' },
  { name: 'Dadaocheng & Dihua Street', area: 'Datong (old town)', kind: 'Culture', why: 'Old shophouses, tea, City God Temple', time: '1.5h', map: 'Dihua Street', day: '2026-11-28' },
  { name: 'Shilin Night Market', area: 'Shilin', kind: 'Night market', why: "Taipei's biggest night market", time: '2h', map: 'Shilin Night Market', day: '2026-11-28' },
  { name: 'Ximending', area: 'Wanhua', kind: 'Shopping', why: 'Youth culture, street food, shopping', time: '1h', map: 'Ximending', day: '2026-11-28' },
  { name: 'Fenqihu station & old street', area: 'Alishan', kind: 'Sight', why: 'Forest-railway village, famous railway bento', time: '2h', map: 'Fenqihu Station', day: '2026-11-29' },
  { name: 'Alishan giant trees & Sister Ponds', area: 'Alishan', kind: 'Nature', why: 'Ancient red cypress forest trails', time: '3h', map: 'Alishan Sister Ponds', day: '2026-11-29' },
  { name: 'Zhushan sunrise', area: 'Alishan', kind: 'Nature', why: 'Sunrise over a sea of clouds', time: '2h', map: 'Zhushan Sunrise Viewing Platform', day: '2026-11-30' },
  { name: 'Alishan Forest Railway (Shenmu line)', area: 'Alishan', kind: 'Sight', why: 'Vintage forest train ride', time: '30m', map: 'Alishan Station', day: '2026-11-30' },
  { name: 'Tataka & Lulin Sacred Tree', area: 'Yushan National Park', kind: 'Nature', why: 'High-mountain views of Jade Mountain', time: '2h', map: 'Tataka Visitor Center', day: '2026-11-30' },
  { name: 'Sun Moon Lake cruise', area: 'Sun Moon Lake', kind: 'Nature', why: 'Boat hops, Xuanguang Temple tea eggs', time: '2h', map: 'Sun Moon Lake', day: '2026-12-01' },
  { name: 'Sun Moon Lake Ropeway', area: 'Sun Moon Lake', kind: 'Sight', why: 'Gondola with lake views', time: '1h', map: 'Sun Moon Lake Ropeway', day: '2026-12-01' },
  { name: 'Ita Thao Night Street', area: 'Sun Moon Lake', kind: 'Night market', why: 'Aboriginal snacks by the lake', time: '1h', map: 'Ita Thao Night Market', day: '2026-12-01' },
  { name: 'Xiangshan cycling path', area: 'Sun Moon Lake', kind: 'Nature', why: 'Floating boardwalk bike path', time: '2h', map: 'Xiangshan Visitor Center', day: '2026-12-02' },
  { name: 'Miyahara', area: 'Taichung', kind: 'Food', why: 'Ice cream in a 1920s eye hospital', time: '45m', map: '宮原眼科', day: '2026-12-02' },
  { name: 'Fengjia Night Market', area: 'Taichung', kind: 'Night market', why: 'One of the biggest in Taiwan', time: '2h', map: 'Fengjia Night Market', day: '2026-12-02' },
  // ── Extra ideas (not in the plan yet) ──
  { name: 'Ningxia Night Market', area: 'Datong', kind: 'Night market', why: 'Local favourite, Michelin Bib stalls', time: '1.5h', map: 'Ningxia Night Market' },
  { name: 'Raohe Night Market', area: 'Songshan', kind: 'Night market', why: 'Famous pepper buns (胡椒餅)', time: '1.5h', map: 'Raohe Night Market' },
  { name: 'Huaxi Street Night Market', area: 'Wanhua', kind: 'Night market', why: 'Old-school market by Longshan Temple', time: '1h', map: 'Huaxi Street Night Market' },
  { name: 'Wenhua Road Night Market', area: 'Chiayi', kind: 'Night market', why: 'Chiayi turkey rice', time: '1h', map: 'Wenhua Road Night Market Chiayi' },
  { name: 'Shizhuo tea plantations', area: 'Alishan', kind: 'Nature', why: 'Tea fields above the clouds', time: '2h', map: 'Shizhuo Alishan tea' },
  { name: 'Taipei 101 Observatory', area: 'Xinyi', kind: 'Sight', why: 'City views, giant damper ball', time: '1–1.5h', map: 'Taipei 101 Observatory' },
  { name: 'Elephant Mountain', area: 'Xinyi', kind: 'Nature', why: 'Classic skyline view at sunset', time: '1h', map: 'Elephant Mountain Hiking Trail' },
  { name: 'Chiang Kai-shek Memorial Hall', area: 'Central Taipei', kind: 'Culture', why: 'Iconic hall, hourly guard ceremony', time: '1h', map: 'Chiang Kai-shek Memorial Hall' },
  { name: 'National Palace Museum', area: 'Shilin', kind: 'Culture', why: 'World-class Chinese art (near Shilin market)', time: '2–3h', map: 'National Palace Museum' },
  { name: 'Rainbow Village', area: 'Taichung', kind: 'Sight', why: 'Colourfully painted houses', time: '45m', map: 'Rainbow Village Taichung' },
];

export const tips: Tip[] = [
  {
    title: 'Drone rules (🛸 spots marked on the plan)',
    icon: '🛸',
    points: [
      'Each stop shows 🛸 drone spot, ⚠️ ask first (permit or unclear rule) or 🚫 no drone. Checked 22 Nov 2026 — rules and red zones change, so check the CAA drone map (drone.caa.gov.tw) or the SkySentry app on the day.',
      'Drones over 250 g must be registered with Taiwan’s Civil Aviation Administration (CAA) and show the registration number. Foreign visitors need CAA approval before flying: apply online with your passport and home registration. Registration for non-residents lasts about 6 months. Sources disagree on drones under 250 g, so ask the CAA if yours is a Mini.',
      'Max 120 m (400 ft), daylight only (not before sunrise or after sunset), always in sight, never over crowds or events, and keep about 30 m from roads, railways and buildings.',
      'No flying within about 2.6–5 km of airports (Taoyuan, Songshan in Taipei, Taichung, Chiayi). Central Taipei and central Chiayi are mostly red zones.',
      'National parks (Yushan at Tataka) need an application. Sun Moon Lake has banned unauthorised flying at its main piers and Xiangshan. For Alishan, ask the forest recreation area before flying.',
      'Fines are big: from NT$10,000 for missing registration or night flying, up to NT$300,000–1,500,000 for flying in restricted airspace.',
    ],
  },
  {
    title: 'Before you fly',
    icon: '🧳',
    points: [
      'Check visa rules for your passport (many passports, incl. Singapore, are visa-free for short stays).',
      'Fill in the Taiwan online arrival card a few days before.',
      'Booked: IWS car (28 Nov), Goya Spring Resort (28 Nov), 嵩茂渡假中心 (29 Nov), Ali-Shan Dengshan Hotel (30 Nov), Zhushan sunrise train (1 Dec). Still to book: a hotel in Ita Thao, Sun Moon Lake (1 Dec), and the Old Mountain Line rail bike if you want it.',
      'Rental car: IWS Car Rental, No. 309 Zhongzheng E. Rd., Dayuan. Free pick-up at Terminal 1 Exit 18 (call 03-3862555 or 0800-033414; office 08:00–20:00 — a 07:00–08:00 pick-up must be reserved in advance). Return at Taipei Main Station on 2 Dec (confirm the exact drop-off point and time with IWS). Get an International Driving Permit before you fly, and if you use the e-Gate at immigration, get an entry stamp at the counter — IWS needs it.',
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
      'Driving: right-hand traffic, speed cameras everywhere, scooters on all sides. Mountain roads (Hwy 18/21) are narrow and foggy in the afternoon — drive in daylight and use low gear downhill.',
      'Freeway tolls are electronic (eTag) and billed through your rental company.',
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
      'Alishan (≈2,200 m) is ≈5–12 °C and can be near freezing at sunrise: warm jacket, beanie, gloves.',
      'Sun Moon Lake ≈13–22 °C, misty mornings. Carry an umbrella — mountain weather changes fast.',
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
      'Night markets: go hungry, share everything, and carry small notes and coins.',
      'At night markets, eat near the stall; walking while eating is OK but bins are rare — carry a bag.',
      'Convenience stores are excellent for breakfast, snacks, and tea eggs.',
    ],
  },
];
