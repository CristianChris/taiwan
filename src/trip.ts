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
  subtitle: 'Taipei · Alishan · Sun Moon Lake · 28 Nov – 2 Dec',
  start: '2026-11-28',
  end: '2026-12-02',
  base: {
    name: 'Taipei (nights 1 & 4) · Alishan (night 2) · Sun Moon Lake (night 3)',
    map: 'Taipei Main Station',
    guess: true,
    note:
      "Hotels aren't confirmed in this plan yet. Taipei: stay near Taipei Main Station (Airport MRT + HSR) and book the same hotel for 28 Nov and 1 Dec so you can leave big luggage there. Alishan: inside the Forest Recreation Area, near Alishan station (books up — reserve early). Sun Moon Lake: Shuishe or Ita Thao.",
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
    title: 'Arrival & old-town Taipei',
    area: 'Wanhua · Dadaocheng (Taipei old town)',
    summary:
      "Red-eye arrival, so we stay in Taipei's oldest neighbourhoods: Longshan Temple and Bopiliao in Wanhua, then Dihua Street's shophouses and tea in Dadaocheng, sunset at the wharf and dinner at Ningxia Night Market.",
    heads_up:
      "You'll be tired after the overnight flight — there's a nap slot after lunch. Tomorrow starts early for Alishan, so pack a small overnight bag tonight (2 nights away) and leave big luggage at the Taipei hotel.",
    stops: [
      {
        time: '≈05:40',
        title: 'Land at Taoyuan Airport (TPE)',
        details:
          'Immigration, then grab a tourist SIM / eSIM and an EasyCard (transport card) at the arrivals hall or the Airport MRT station (B1).',
        map: 'Taoyuan International Airport',
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
        tips: ['Queue can be 30–60 min on weekends.', 'Cash only.'],
        getThere: {
          mode: 'mrt',
          how: 'Blue line to Shandao Temple, exit 5',
          duration: '≈10 min',
          from: 'Taipei Main Station',
          to: '阜杭豆漿',
        },
      },
      {
        time: '10:00',
        title: 'Longshan Temple',
        details: "Taipei's most famous temple (1738), busy with morning worshippers — a great first taste of local life. Free.",
        map: 'Longshan Temple Taipei',
        getThere: {
          mode: 'mrt',
          how: 'Blue line Shandao Temple → Longshan Temple',
          duration: '≈10 min',
          from: 'Shandao Temple Station',
          to: 'Longshan Temple Taipei',
        },
      },
      {
        time: '11:00',
        title: 'Bopiliao Historic Block & Wanhua lanes',
        details: 'Preserved Qing-era red-brick street right behind the temple, plus the old herb lane (青草巷).',
        map: 'Bopiliao Historic Block',
        getThere: { mode: 'walk', how: 'Walk around the corner', duration: '≈5 min' },
      },
      {
        time: '12:00',
        title: 'Lunch in Ximending',
        details: "Ay-Chung flour-rice noodles (阿宗麵線), braised pork rice, bubble tea in Taipei's youthful shopping area.",
        map: 'Ximending',
        getThere: {
          mode: 'mrt',
          how: 'Blue line 1 stop to Ximen (or walk 15 min)',
          duration: '≈5 min',
          from: 'Longshan Temple Station',
          to: 'Ximending',
        },
      },
      {
        time: '13:30',
        title: 'Hotel check-in & nap',
        details: 'Recharge after the red-eye.',
        map: 'Taipei Main Station',
        guess: true,
        getThere: { mode: 'mrt', how: 'Blue line Ximen → Taipei Main (1 stop)', duration: '≈5 min', from: 'Ximen Station', to: 'Taipei Main Station' },
      },
      {
        time: '15:30',
        title: 'Dadaocheng & Dihua Street',
        details:
          "Taipei's best-preserved old town: 19th-century shophouses selling dried goods, herbs and fabrics, Xiahai City God Temple (matchmaking god), and tea houses like 有記名茶 / ASW Tea House.",
        map: 'Dihua Street',
        getThere: {
          mode: 'mrt',
          how: 'Green line to Beimen, exit 3, then walk',
          duration: '≈15 min',
          from: 'Taipei Main Station',
          to: 'Dihua Street',
        },
      },
      {
        time: '16:45',
        title: 'Sunset at Dadaocheng Wharf',
        details: 'Riverside container bars and food stalls; sunset ≈17:05.',
        map: 'Dadaocheng Wharf',
        getThere: { mode: 'walk', how: 'Walk west to the river', duration: '≈10 min' },
      },
      {
        time: '18:00',
        title: 'Night market #1: Ningxia Night Market',
        details:
          "Compact, local-favourite food market: oyster omelette, taro balls (劉芋仔), grilled mochi, braised pork rice. Michelin Bib Gourmand stalls.",
        map: 'Ningxia Night Market',
        getThere: { mode: 'walk', how: 'Walk east from the wharf', duration: '≈15 min', from: 'Dadaocheng Wharf', to: 'Ningxia Night Market' },
      },
      {
        time: '20:00',
        title: 'Early night',
        details: 'Back to the hotel (10 min walk to Taipei Main / Zhongshan). Alarm for 06:15 tomorrow.',
      },
    ],
    alternatives: [
      'Energy left? Add Huaxi Street Night Market next to Longshan Temple instead of lunch in Ximending.',
      'Want a museum: Chiang Kai-shek Memorial Hall (hourly guard change) is 2 MRT stops from Ximen.',
    ],
  },
  {
    date: '2026-11-29',
    title: 'Up into the mountains: Alishan',
    area: 'Chiayi → Alishan National Scenic Area (≈2,200 m)',
    summary:
      'High-speed rail south to Chiayi, then the winding bus (or forest railway) up to Alishan. Afternoon walking among 2,000-year-old red cypress giants, Sister Ponds and the forest trains. Overnight in the forest.',
    heads_up:
      'Book ahead: HSR tickets, the Alishan hotel, and the forest railway if you want it. It is COLD up here in late Nov (≈5–12 °C, near freezing before sunrise) — bring warm layers. Carry cash; options in the park are limited.',
    stops: [
      {
        time: '07:00',
        title: 'High-speed rail to Chiayi',
        details: 'From Taipei Main Station. Book reserved seats in advance on the T Express app.',
        map: 'HSR Chiayi Station',
        getThere: {
          mode: 'hsr',
          how: 'HSR Taipei → Chiayi',
          duration: '≈1h20–1h30',
          cost: '≈NT$1,080 pp',
          from: 'Taipei Main Station',
          to: 'HSR Chiayi Station',
        },
      },
      {
        time: '≈09:10',
        title: 'Bus up to Alishan',
        details:
          'Taiwan Tourist Shuttle 7329 leaves from HSR Chiayi station (follow the "Alishan" bus signs) — a winding 2.5 h mountain road, take motion-sickness pills if needed. Check the exact departure times before you go.',
        map: 'Alishan Forest Recreation Area',
        tips: [
          'Alternative: Alishan Forest Railway from TRA Chiayi station (≈3.5 h, scenic, very limited trains — book 30 days ahead on the official site).',
        ],
        getThere: {
          mode: 'bus',
          how: 'Bus 7329 HSR Chiayi → Alishan',
          duration: '≈2h30',
          cost: '≈NT$270 pp',
          from: 'HSR Chiayi Station',
          to: 'Alishan Forest Recreation Area',
        },
      },
      {
        time: '12:00',
        title: 'Check in, lunch & park entry',
        details:
          'Drop bags at the hotel near Alishan station. Park entrance ≈NT$300 pp. Lunch at the food street by the bus station (mountain vegetables, wasabi dishes, Alishan oolong tea).',
        map: 'Alishan Station',
        guess: true,
      },
      {
        time: '13:30',
        title: 'Giant Trees Trail & Sister Ponds',
        details:
          'The classic 2–3 h loop: Sister Ponds, Shouzhen Temple, the Giant Trees Boardwalk (thousand-year-old red cypresses), Xianglin Sacred Tree and the Ciyun Temple.',
        map: 'Alishan Sister Ponds',
        getThere: { mode: 'walk', how: 'Signposted trails from Alishan station', duration: '2–3 h loop' },
      },
      {
        time: '16:15',
        title: 'Forest train ride (Shenmu line)',
        details: 'Short ride on a vintage forest train between Alishan and Shenmu (sacred tree) stations, or catch sunset at Zhaoping station (≈17:15).',
        map: 'Shenmu Station Alishan',
        optional: true,
        getThere: { mode: 'train', how: 'Alishan Forest Railway, Shenmu line', duration: '≈10 min', cost: '≈NT$100' },
      },
      {
        time: '17:30',
        title: 'Dinner & buy sunrise train tickets',
        details:
          "Hot pot or set meals in the village. Buy tomorrow's Zhushan sunrise train ticket at Alishan station this evening — the departure time is posted daily and depends on sunrise.",
        map: 'Alishan Station',
      },
      {
        time: '20:00',
        title: 'Overnight in Alishan',
        details: 'Stargazing if the sky is clear, then bed early.',
        guess: true,
      },
    ],
    alternatives: [
      'If Alishan hotels are full: stay in Chiayi city tonight (Wenhua Road Night Market!) and do Alishan as a day trip tomorrow — but you lose the sunrise.',
      'Rainy/foggy forecast? The "sea of clouds" often shows after rain — still worth going; trails are fine in light rain.',
    ],
  },
  {
    date: '2026-11-30',
    title: 'Alishan sunrise → Sun Moon Lake',
    area: 'Alishan → Tataka mountain road → Sun Moon Lake',
    summary:
      "Pre-dawn train to Zhushan for the famous sunrise over a sea of clouds, a last walk in the forest, then the scenic mountain bus to Sun Moon Lake. Evening at Ita Thao's lakeside night street.",
    heads_up:
      'Very early start (≈04:45). The Alishan → Sun Moon Lake bus (6739) runs only a couple of times a day — check times and reserve a seat in advance if possible. Overnight at Sun Moon Lake.',
    stops: [
      {
        time: '≈05:00',
        title: 'Zhushan sunrise',
        details:
          'Zhushan line train (≈25 min) to the viewing deck. Sunrise ≈06:25 in late Nov; sea of clouds and Jade Mountain on clear mornings. Dress very warmly.',
        map: 'Zhushan Sunrise Viewing Platform',
        getThere: { mode: 'train', how: 'Zhushan line from Alishan station (or walk ≈1 h uphill)', duration: '≈25 min', cost: '≈NT$150 one way' },
      },
      {
        time: '07:30',
        title: 'Walk back via Duigaoyue / breakfast',
        details: 'Many people take the train up and walk the 1 h trail back down. Hotel breakfast, then check out.',
        map: 'Alishan Station',
        getThere: { mode: 'walk', how: 'Zhushan → Alishan trail (downhill)', duration: '≈1 h' },
      },
      {
        time: '09:30',
        title: 'Free morning in the forest',
        details: 'Revisit the giant trees in morning light, Alishan museum, or the Shouzhen Temple area. Tea tasting at a farm shop.',
        map: 'Alishan Giant Trees Trail',
      },
      {
        time: '≈13:00',
        title: 'Scenic bus to Sun Moon Lake',
        details:
          'Taiwan Tourist Shuttle 6739 via Tataka (Yushan National Park edge) — one of the most beautiful mountain roads in Taiwan. Departure times are limited; confirm before the trip.',
        map: 'Shuishe Visitor Center',
        getThere: {
          mode: 'bus',
          how: 'Bus 6739 Alishan → Sun Moon Lake (Shuishe)',
          duration: '≈3h30',
          cost: '≈NT$330 pp',
          from: 'Alishan Forest Recreation Area',
          to: 'Shuishe Visitor Center',
        },
      },
      {
        time: '16:45',
        title: 'Check in at Sun Moon Lake & lakeside sunset walk',
        details: 'Stay around Shuishe or Ita Thao. Stroll the lakeside boardwalk at dusk.',
        map: 'Shuishe Pier',
        guess: true,
      },
      {
        time: '18:30',
        title: 'Night market #2: Ita Thao Night Street',
        details:
          'Small but fun: Thao aboriginal grilled boar sausage, millet mochi, sticky rice in bamboo, sweet-potato balls. Boat or bus from Shuishe if you stay there.',
        map: 'Ita Thao Night Market',
        getThere: { mode: 'bus', how: 'Round-the-lake bus or taxi Shuishe → Ita Thao', duration: '≈15 min' },
      },
    ],
    alternatives: [
      'Skip the sunrise if you\'d rather sleep — but it\'s the Alishan highlight.',
      'If the 6739 bus is full or not running: bus 7322 down to Chiayi, HSR to Taichung, bus 6670 to Sun Moon Lake (≈5 h total).',
    ],
  },
  {
    date: '2026-12-01',
    title: 'Sun Moon Lake → Taichung → Taipei',
    area: 'Sun Moon Lake · Taichung (Fengjia) · back to Taipei',
    summary:
      'A morning on the lake by bike and boat, the ropeway for views, then down to Taichung for its huge Fengjia Night Market before the high-speed rail back to Taipei.',
    heads_up: 'Long travel day ending late (≈22:30 in Taipei). The Sun Moon Lake ropeway closes for maintenance on some days — check before you go.',
    stops: [
      {
        time: '07:00',
        title: 'Lake sunrise & cycling path',
        details:
          'Morning mist on the lake. Rent a bike (Giant at Shuishe) and ride the Xiangshan cycling path — floating boardwalk sections right on the water.',
        map: 'Xiangshan Visitor Center',
        getThere: { mode: 'walk', how: 'Bike rental at Shuishe', duration: '≈1.5–2 h ride', cost: '≈NT$300–500 per bike' },
      },
      {
        time: '10:00',
        title: 'Lake cruise',
        details: 'Hop-on boat pass (≈NT$300): Shuishe → Xuanguang Temple (Ah Po tea eggs!) → Ita Thao.',
        map: 'Shuishe Pier',
        getThere: { mode: 'boat', how: 'Hop-on boat between the three piers', duration: '≈10–15 min per hop' },
      },
      {
        time: '11:30',
        title: 'Sun Moon Lake Ropeway',
        details: 'Gondola from Ita Thao over the hills for big lake views.',
        map: 'Sun Moon Lake Ropeway',
        optional: true,
      },
      {
        time: '12:45',
        title: 'Lunch at Ita Thao, check out',
        details: 'Lakeside restaurants — try the lake fish (總統魚) or aboriginal set meals.',
        map: 'Ita Thao',
      },
      {
        time: '≈14:30',
        title: 'Bus to Taichung',
        details: 'Nantou Bus 6670 from Shuishe to HSR Taichung station.',
        map: 'HSR Taichung Station',
        getThere: {
          mode: 'bus',
          how: 'Bus 6670 Sun Moon Lake (Shuishe) → HSR Taichung',
          duration: '≈1h30',
          cost: '≈NT$190 pp',
          from: 'Shuishe Visitor Center',
          to: 'HSR Taichung Station',
        },
      },
      {
        time: '16:30',
        title: 'Miyahara ice cream (宮原眼科)',
        details: 'Famous dessert shop in a 1920s eye hospital, near TRA Taichung station.',
        map: '宮原眼科',
        optional: true,
        getThere: { mode: 'train', how: 'Local TRA train HSR Taichung (Xinwuri) → Taichung station', duration: '≈10 min' },
      },
      {
        time: '18:00',
        title: 'Night market #3: Fengjia Night Market',
        details:
          "One of Taiwan's biggest night markets — birthplace of many viral snacks: big flame-grilled beef cubes, giant squid, Mingluen egg pancakes.",
        map: 'Fengjia Night Market',
        getThere: { mode: 'taxi', how: 'Taxi / Uber from Taichung station or HSR', duration: '≈25 min', cost: '≈NT$250–350' },
      },
      {
        time: '≈21:00',
        title: 'HSR back to Taipei',
        details: 'Taxi to HSR Taichung, then high-speed rail. Same Taipei hotel as night 1, if you booked it for both nights.',
        guess: true,
        getThere: { mode: 'hsr', how: 'HSR Taichung → Taipei', duration: '≈50–60 min', cost: '≈NT$700 pp', from: 'HSR Taichung Station', to: 'Taipei Main Station' },
      },
    ],
    alternatives: [
      'Too tired for Fengjia? Take the HSR straight back after the bus and do Shilin Night Market in Taipei instead.',
    ],
  },
  {
    date: '2026-12-02',
    title: 'Taipei 101, Raohe Night Market & fly home',
    area: 'Xinyi · Songshan',
    summary:
      "A relaxed last day: Taipei 101's observatory, the classic skyline from Elephant Mountain at sunset, and a final night-market dinner at Raohe before the airport.",
    heads_up: 'Flight at 23:20 — be on the Airport MRT by ≈19:30. Leave bags at the hotel or in Taipei Main Station lockers.',
    stops: [
      {
        time: '09:30',
        title: 'Check out & store luggage',
        details: 'Ask the hotel to hold bags until the evening.',
        map: 'Taipei Main Station',
        guess: true,
      },
      {
        time: '10:30',
        title: 'Huashan 1914 Creative Park',
        details: 'Design shops, cafés and exhibitions in an old winery — good for souvenirs. Or sleep in after yesterday.',
        map: 'Huashan 1914 Creative Park',
        optional: true,
        getThere: { mode: 'mrt', how: 'Blue line to Zhongxiao Xinsheng', duration: '≈10 min', from: 'Taipei Main Station', to: 'Huashan 1914 Creative Park' },
      },
      {
        time: '12:30',
        title: 'Lunch at Taipei 101',
        details: 'Din Tai Fung in the Taipei 101 basement (take a number, browse while you wait) or the food court.',
        map: 'Taipei 101',
        getThere: { mode: 'mrt', how: 'Blue line → red line to Taipei 101/World Trade Center', duration: '≈20 min', from: 'Zhongxiao Xinsheng Station', to: 'Taipei 101' },
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
        time: '17:45',
        title: 'Night market #4: Raohe Night Market',
        details:
          'Enter through Ciyou Temple. Fuzhou black pepper buns (福州世祖胡椒餅) are a must, plus medicinal herb pork ribs soup. Opens ≈17:00.',
        map: 'Raohe Night Market',
        getThere: { mode: 'taxi', how: 'Taxi from Xiangshan (or MRT to Songshan)', duration: '≈15 min', cost: '≈NT$200', from: 'Xiangshan Station', to: 'Raohe Night Market' },
      },
      {
        time: '19:00',
        title: 'Pick up bags → Airport MRT',
        details: 'Green line Songshan → Taipei Main, collect luggage, Airport MRT Express to the terminal (check which terminal Scoot uses on your booking).',
        map: 'Taoyuan International Airport',
        getThere: {
          mode: 'mrt',
          how: 'Green line to Taipei Main, then Airport MRT Express',
          duration: '≈15 min + ≈35–40 min',
          cost: '≈NT$160 pp',
          from: 'Songshan Station',
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
      'Swap Huashan for the National Palace Museum (2–3 h, near Shilin) if you like art and history.',
      'Running late? Skip Elephant Mountain and go straight from Taipei 101 to Raohe.',
    ],
  },
];

/** Everything worth doing — planned ones link to their day; the rest are extra ideas. */
export const places: Place[] = [
  { name: 'Longshan Temple', area: 'Wanhua (old town)', kind: 'Culture', why: 'Most famous temple, busy in the morning', time: '45m', map: 'Longshan Temple Taipei', day: '2026-11-28' },
  { name: 'Bopiliao Historic Block', area: 'Wanhua (old town)', kind: 'Culture', why: 'Qing-era red-brick street', time: '30m', map: 'Bopiliao Historic Block', day: '2026-11-28' },
  { name: 'Dadaocheng & Dihua Street', area: 'Datong (old town)', kind: 'Culture', why: 'Old shophouses, tea, City God Temple', time: '1.5h', map: 'Dihua Street', day: '2026-11-28' },
  { name: 'Ningxia Night Market', area: 'Datong', kind: 'Night market', why: 'Local favourite, Michelin Bib stalls', time: '1.5h', map: 'Ningxia Night Market', day: '2026-11-28' },
  { name: 'Ximending', area: 'Wanhua', kind: 'Shopping', why: 'Youth culture, street food, shopping', time: '1h', map: 'Ximending', day: '2026-11-28' },
  { name: 'Alishan giant trees & Sister Ponds', area: 'Alishan', kind: 'Nature', why: 'Ancient red cypress forest trails', time: '3h', map: 'Alishan Sister Ponds', day: '2026-11-29' },
  { name: 'Alishan Forest Railway', area: 'Alishan', kind: 'Sight', why: 'Historic mountain railway & short forest lines', time: '30m–3.5h', map: 'Alishan Station', day: '2026-11-29' },
  { name: 'Zhushan sunrise', area: 'Alishan', kind: 'Nature', why: 'Sunrise over a sea of clouds', time: '2h', map: 'Zhushan Sunrise Viewing Platform', day: '2026-11-30' },
  { name: 'Ita Thao Night Street', area: 'Sun Moon Lake', kind: 'Night market', why: 'Aboriginal snacks by the lake', time: '1h', map: 'Ita Thao Night Market', day: '2026-11-30' },
  { name: 'Sun Moon Lake cruise & cycling', area: 'Sun Moon Lake', kind: 'Nature', why: 'Boat hops, Xiangshan bike path', time: 'Half day', map: 'Sun Moon Lake', day: '2026-12-01' },
  { name: 'Sun Moon Lake Ropeway', area: 'Sun Moon Lake', kind: 'Sight', why: 'Gondola with lake views', time: '1h', map: 'Sun Moon Lake Ropeway', day: '2026-12-01' },
  { name: 'Fengjia Night Market', area: 'Taichung', kind: 'Night market', why: 'One of the biggest in Taiwan', time: '2h', map: 'Fengjia Night Market', day: '2026-12-01' },
  { name: 'Miyahara', area: 'Taichung', kind: 'Food', why: 'Ice cream in a 1920s eye hospital', time: '45m', map: '宮原眼科', day: '2026-12-01' },
  { name: 'Taipei 101 Observatory', area: 'Xinyi', kind: 'Sight', why: 'City views, giant damper ball', time: '1–1.5h', map: 'Taipei 101 Observatory', day: '2026-12-02' },
  { name: 'Elephant Mountain', area: 'Xinyi', kind: 'Nature', why: 'Classic skyline view at sunset', time: '1h', map: 'Elephant Mountain Hiking Trail', day: '2026-12-02' },
  { name: 'Raohe Night Market', area: 'Songshan', kind: 'Night market', why: 'Famous pepper buns (胡椒餅)', time: '1.5h', map: 'Raohe Night Market', day: '2026-12-02' },
  { name: 'Huashan 1914 Creative Park', area: 'Zhongzheng', kind: 'Culture', why: 'Design shops in an old winery', time: '1h', map: 'Huashan 1914 Creative Park', day: '2026-12-02' },
  // ── Extra ideas (not in the plan yet) ──
  { name: 'Shilin Night Market', area: 'Shilin', kind: 'Night market', why: "Taipei's biggest night market", time: '2h', map: 'Shilin Night Market' },
  { name: 'Huaxi Street Night Market', area: 'Wanhua', kind: 'Night market', why: 'Old-school market by Longshan Temple', time: '1h', map: 'Huaxi Street Night Market' },
  { name: 'Wenhua Road Night Market', area: 'Chiayi', kind: 'Night market', why: 'Chiayi turkey rice, if you overnight in Chiayi', time: '1h', map: 'Wenhua Road Night Market Chiayi' },
  { name: 'Chiang Kai-shek Memorial Hall', area: 'Central Taipei', kind: 'Culture', why: 'Iconic hall, hourly guard ceremony', time: '1h', map: 'Chiang Kai-shek Memorial Hall' },
  { name: 'Yongkang Street', area: 'Central Taipei', kind: 'Food', why: 'Original Din Tai Fung, beef noodles, mango ice', time: '1–2h', map: 'Yongkang Street Taipei' },
  { name: 'National Palace Museum', area: 'Shilin', kind: 'Culture', why: 'World-class Chinese art', time: '2–3h', map: 'National Palace Museum' },
  { name: 'Beitou Hot Springs', area: 'Beitou', kind: 'Hot spring', why: 'Thermal Valley + a soak in the city', time: '3h', map: 'Beitou Thermal Valley' },
  { name: 'Tamsui & Fisherman\'s Wharf', area: 'Tamsui', kind: 'Sight', why: 'Riverside old street, sunset', time: '3h', map: 'Tamsui Old Street' },
  { name: 'Maokong Gondola', area: 'Wenshan', kind: 'Nature', why: 'Cable car to tea houses (closed most Mondays)', time: '3h', map: 'Maokong Gondola' },
  { name: 'Rainbow Village', area: 'Taichung', kind: 'Sight', why: 'Colourfully painted houses', time: '45m', map: 'Rainbow Village Taichung' },
];

export const tips: Tip[] = [
  {
    title: 'Before you fly',
    icon: '🧳',
    points: [
      'Check visa rules for your passport (many passports, incl. Singapore, are visa-free for short stays).',
      'Fill in the Taiwan online arrival card a few days before.',
      'Book now: HSR Taipei→Chiayi (29 Nov) and Taichung→Taipei (1 Dec) on the T Express app; Alishan hotel; Sun Moon Lake hotel.',
      'Check/reserve the Alishan → Sun Moon Lake bus 6739 (30 Nov) and, if you want it, the Alishan Forest Railway (tickets open 30 days ahead).',
      'Taipei 101 tickets online.',
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
