/*
 * THE PLAN — rental car from Taoyuan Airport on arrival, Taichung sights on the
 * way to Chiayi, Taipei sightseeing on the last day.
 * Days 3 and 4 reuse the stops of days 3 and 4 in trip.ts.
 * Same conventions as trip.ts (≈ = estimate, guess, optional, at = map pin).
 */
import { days as plan1, type Day, type Stay } from './trip';

const DENGSHAN: Stay = {
  name: 'Ali-Shan Dengshan Hotel (阿里山登山大飯店)',
  map: 'Ali-Shan Dengshan Hotel',
  at: [23.5116, 120.8033],
  address: 'East 47, Alishan National Forest Recreation Area, Alishan Township, Chiayi County',
  note: 'In Alishan village, a short walk from Alishan station and the sunrise-train platform.',
  booked: true,
};

const p1day2 = plan1[1];

export const daysV2: Day[] = [
  {
    date: '2026-11-28',
    title: 'Car from the airport → Taichung → Chiayi',
    area: 'Taoyuan Airport · Taichung · Chiayi',
    summary:
      "Pick up the rental car right after landing and drive south. Coffee stop at the famous Qingshui service area, then Taichung's highlights: Rainbow Village, Miyahara, the Second Market and the National Taichung Theater. Drive on to Chiayi for dinner at Wenhua Road Night Market.",
    heads_up:
      "You land after a red-eye — don't drive tired. Sleep on the plane if you can, take a proper break at Qingshui service area, and swap drivers if you both have an International Driving Permit. Night 1 in Chiayi.",
    stops: [
      {
        time: '≈05:40',
        title: 'Land at Taoyuan Airport (TPE)',
        details: 'Immigration, tourist SIM / eSIM, withdraw cash (NT$) at an airport ATM.',
        map: 'Taoyuan International Airport',
        at: [25.0797, 121.2342],
        tips: ['Fill in the online arrival card before you fly.'],
      },
      {
        time: '≈07:00',
        title: 'Pick up the rental car near the airport',
        details:
          'Free airport pick-up: call 03-3862555 when you land and they collect you from the terminal. Car office: No. 309, Zhongzheng E. Rd., Dayuan Dist., Taoyuan City (≈10 min from the terminal). Bring IDP + home licence + passport + credit card.',
        map: '桃園市大園區中正東路309號',
        at: [25.0614, 121.2052],
        tips: ['Call 03-3862555 after immigration (+886 3 386 2555 from a foreign SIM).', 'Ask whether you can return the car in Taipei on 2 Dec, and the fee.'],
        getThere: { mode: 'car', how: 'Free pick-up shuttle from the terminal', duration: '≈10 min' },
      },
      {
        time: '≈08:30',
        title: 'Breakfast & coffee: Qingshui Service Area',
        details: "Taiwan's most famous freeway rest stop (清水服務區) — big food court, local snacks, sea views. Rest here before Taichung.",
        map: '清水服務區',
        at: [24.2785, 120.602],
        getThere: {
          mode: 'car',
          how: 'Freeway 2 → Freeway 3 south',
          duration: '≈1h20',
          from: '桃園市大園區中正東路309號',
          to: '清水服務區',
        },
      },
      {
        time: '10:00',
        title: 'Rainbow Village (彩虹眷村)',
        details: 'Tiny veterans’ village covered in colourful paintings by "Rainbow Grandpa". 30–45 min.',
        map: 'Rainbow Village Taichung',
        at: [24.1338, 120.61],
        getThere: { mode: 'car', how: 'Freeway 3 south → Taichung (Nantun)', duration: '≈30 min', from: '清水服務區', to: 'Rainbow Village Taichung' },
      },
      {
        time: '11:15',
        title: 'Miyahara (宮原眼科)',
        details: 'Famous ice cream and pineapple cakes inside a 1920s eye hospital. Park nearby and walk.',
        map: '宮原眼科',
        at: [24.1375, 120.6838],
        getThere: { mode: 'car', how: 'Drive into central Taichung', duration: '≈25 min', from: 'Rainbow Village Taichung', to: '宮原眼科' },
      },
      {
        time: '12:15',
        title: 'Lunch: Taichung Second Market (第二市場)',
        details: 'Historic market hall with old-school stalls: braised pork rice, radish cake, beef soup. 10 min walk from Miyahara.',
        map: '台中第二市場',
        at: [24.1418, 120.6805],
        getThere: { mode: 'walk', how: 'Walk north-west', duration: '≈10 min' },
      },
      {
        time: '13:45',
        title: 'National Taichung Theater',
        details: "Toyo Ito's cave-like opera house — free to walk in; rooftop garden with city views.",
        map: 'National Taichung Theater',
        at: [24.1627, 120.6402],
        getThere: { mode: 'car', how: 'Drive to Xitun district', duration: '≈20 min', from: '台中第二市場', to: 'National Taichung Theater' },
      },
      {
        time: '15:00',
        title: 'Drive to Chiayi, check in',
        details: 'Hotel near Chiayi station or Wenhua Road (with parking). Rest before dinner.',
        map: 'Chiayi Station',
        at: [23.4793, 120.4413],
        guess: true,
        getThere: { mode: 'car', how: 'Freeway 1 or Freeway 3 south to Chiayi', duration: '≈1h20', from: 'National Taichung Theater', to: 'Chiayi Station' },
      },
      {
        time: '18:00',
        title: 'Night market: Wenhua Road Night Market (文化路夜市)',
        details: "Chiayi's famous night market. Must-try: Chiayi turkey rice (火雞肉飯, e.g. 噴水雞肉飯 at the fountain roundabout), grilled corn, fresh fruit juice.",
        map: 'Wenhua Road Night Market Chiayi',
        at: [23.479, 120.4495],
        getThere: { mode: 'walk', how: 'Walk from the hotel', duration: '≈10 min' },
      },
    ],
    alternatives: [
      'Too tired to drive after the flight? Take the HSR to Taichung instead and pick the car up at HSR Taichung.',
      'Sunset fan: swap the theater for Gaomei Wetlands (≈40 min west of Taichung, sunset ≈17:15) — then reach Chiayi around 19:30.',
    ],
    stay: {
      name: 'Hotel in Chiayi (to book)',
      map: 'Chiayi Station',
      note: 'Pick one near Chiayi station or Wenhua Road with parking, so you can walk to the night market.',
    },
  },
  {
    ...p1day2,
    title: 'Chiayi → Fenqihu station → Alishan',
    area: 'Chiayi → Fenqihu → Alishan (≈2,200 m)',
    summary:
      'Drive up into the mountains from Chiayi. Stop at Fenqihu, the most charming station on the Alishan Forest Railway (old street, famous railway bento, train garage), then on to Alishan for the giant-tree trails.',
    stops: [
      {
        time: '08:30',
        title: 'Breakfast in Chiayi & fill up the tank',
        details: 'Try a Chiayi breakfast (rice noodle soup, turkey rice) and fill up — few petrol stations on the mountain.',
        map: 'Chiayi Station',
        at: [23.4793, 120.4413],
      },
      ...p1day2.stops.slice(2).map((s, i) =>
        i === 0
          ? {
              ...s,
              getThere: {
                mode: 'car' as const,
                how: 'Hwy 18 (Alishan Hwy) → County Rd 159甲 → 169 to Fenqihu',
                duration: '≈1h20',
                from: 'Chiayi Station',
                to: 'Fenqihu Station',
              },
            }
          : s,
      ),
    ],
    stay: {
      name: 'Hotel in Alishan (to book)',
      map: 'Alishan Forest Recreation Area',
      note: 'First night in Alishan. Easiest is to stay at Ali-Shan Dengshan Hotel both nights, so you don’t move bags — ask them about 29 Nov.',
    },
  },
  { ...plan1[2], stay: DENGSHAN },
  {
    ...plan1[3],
    stay: {
      name: 'Hotel at Sun Moon Lake (to book)',
      map: 'Shuishe Pier',
      note: 'Shuishe village is the easiest base: restaurants, the main pier, bike rental and the sunrise boardwalk.',
    },
  },
  {
    date: '2026-12-02',
    title: 'Drive to Taipei, old town, Shilin & fly home',
    area: 'Sun Moon Lake → Taipei (Wanhua · Dadaocheng · Shilin) → Taoyuan Airport',
    summary:
      "Early drive north to Taipei and return the car, then Taipei's old town by MRT: Longshan Temple, Bopiliao, Ximending, Dihua Street and the Dadaocheng sunset, with a last dinner at Shilin Night Market before the airport.",
    heads_up:
      'Long day with a 23:20 flight. Leave the lake by 07:30. Keep luggage in Taipei Main Station lockers after returning the car, and be on the Airport MRT by ≈19:40.',
    stops: [
      {
        time: '06:45',
        title: 'Sunrise walk by the lake',
        details: 'Short walk on the Shuishe lakeside boardwalk in the morning mist, then check out.',
        map: 'Shuishe Pier',
        at: [23.8662, 120.91],
        optional: true,
      },
      {
        time: '07:30',
        title: 'Drive to Taipei',
        details: 'Freeways all the way. Refuel near Taipei before returning the car.',
        map: 'Taipei Main Station',
        at: [25.0478, 121.517],
        getThere: {
          mode: 'car',
          how: 'Hwy 21 → Freeway 6 → Freeway 3 north → Taipei',
          duration: '≈2h45–3h',
          from: 'Shuishe Visitor Center',
          to: 'Taipei Main Station',
        },
      },
      {
        time: '≈10:30',
        title: 'Return the car & store luggage',
        details: 'Return the car in Taipei if the rental company allows it (ask when you pick it up), then put bags in the Taipei Main Station lockers. If not, see the swap-in idea below about returning at the airport.',
        map: 'Taipei Main Station',
        at: [25.0478, 121.517],
        guess: true,
      },
      {
        time: '11:00',
        title: 'Longshan Temple & Bopiliao',
        details: "Taipei's most famous temple (1738) and the Qing-era red-brick street right behind it.",
        map: 'Longshan Temple Taipei',
        at: [25.0372, 121.4999],
        getThere: { mode: 'mrt', how: 'Blue line Taipei Main → Longshan Temple', duration: '≈10 min', from: 'Taipei Main Station', to: 'Longshan Temple Taipei' },
      },
      {
        time: '12:15',
        title: 'Lunch in Ximending',
        details: 'Ay-Chung flour-rice noodles (阿宗麵線), braised pork rice, bubble tea.',
        map: 'Ximending',
        at: [25.0421, 121.5076],
        getThere: { mode: 'mrt', how: 'Blue line 1 stop to Ximen (or walk 15 min)', duration: '≈5 min', from: 'Longshan Temple Station', to: 'Ximending' },
      },
      {
        time: '13:45',
        title: 'Dadaocheng & Dihua Street',
        details: "Taipei's best-preserved old town: 19th-century shophouses, dried goods and herbs, Xiahai City God Temple, old tea houses — good for souvenirs.",
        map: 'Dihua Street',
        at: [25.0565, 121.51],
        getThere: { mode: 'mrt', how: 'Green line Ximen → Beimen, exit 3', duration: '≈10 min', from: 'Ximen Station', to: 'Dihua Street' },
      },
      {
        time: '16:30',
        title: 'Sunset at Dadaocheng Wharf',
        details: 'Riverside container bars and food stalls; sunset ≈17:05.',
        map: 'Dadaocheng Wharf',
        at: [25.0563, 121.5083],
        getThere: { mode: 'walk', how: 'Walk west to the river', duration: '≈10 min' },
      },
      {
        time: '17:30',
        title: 'Night market: Shilin Night Market',
        details:
          "Last dinner in Taiwan: Hot Star fried chicken, oyster omelette, pepper buns, the underground food court. Get off at Jiantan station. Early evening is less crowded.",
        map: 'Shilin Night Market',
        at: [25.088, 121.5241],
        getThere: { mode: 'mrt', how: 'Walk to Daqiaotou / Zhongshan, then red line → Jiantan', duration: '≈30 min', from: 'Dadaocheng Wharf', to: 'Jiantan Station' },
      },
      {
        time: '19:00',
        title: 'Back to Taipei Main → Airport MRT',
        details: 'Red line Jiantan → Taipei Main (≈15 min), collect bags, Airport MRT Express to the terminal (≈35–40 min). Aim to arrive ≈20:20.',
        map: 'Taoyuan International Airport',
        at: [25.0797, 121.2342],
        getThere: { mode: 'mrt', how: 'Red line → Taipei Main, then Airport MRT Express', duration: '≈15 min + ≈40 min', cost: '≈NT$160 pp', from: 'Jiantan Station', to: 'Taoyuan International Airport' },
      },
      {
        time: '23:20',
        title: 'TR893 to Singapore ✈️',
        details: 'Spend leftover NT$ at the airport or keep some for next time.',
        at: [25.0797, 121.2342],
      },
    ],
    alternatives: [
      'Running late? Swap Shilin for Ningxia Night Market — a 15 min walk from Dadaocheng Wharf and 10 min from Taipei Main.',
      'Return the car at Taoyuan Airport in the evening instead (drive Taipei → TPE ≈50 min) — but Taipei city driving and parking are stressful; the MRT is easier.',
    ],
  },
];
