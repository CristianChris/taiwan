/*
 * THE PLAN (rewritten 24 Nov 2026 from Cristian's own outline).
 * Car from IWS (near Taoyuan Airport) → Old Mountain Line → Taichung → Guguan hot springs →
 * Chiayi → Shizhuo tea trails → Fenqihu → Alishan → Zhushan sunrise → Sun Moon Lake (Ita Thao) → Taipei → TPE.
 * Same conventions as trip.ts (≈ = estimate, guess, optional, booked, at = map pin).
 */
import type { Day, Stay } from './trip';

const DENGSHAN: Stay = {
  name: 'Ali-Shan Dengshan Hotel (阿里山登山大飯店)',
  map: 'Ali-Shan Dengshan Hotel',
  at: [23.5116, 120.8033],
  address: 'East 47, Alishan National Forest Recreation Area, Alishan Township, Chiayi County',
  note: 'In Alishan village, a short walk from Alishan station, where the sunrise train leaves.',
  booked: true,
  checkIn: '15:00',
  checkOut: '11:00',
};

const IWS = '桃園市大園區中正東路309號';
const ALISHAN = [23.5103, 120.804] as [number, number];

export const daysV2: Day[] = [
  // ── Day 1 ──
  {
    date: '2026-11-28',
    title: 'Old Mountain Line → Taichung → Guguan hot springs',
    area: 'Taoyuan · Sanyi (Old Mountain Line) · Taichung · Guguan',
    summary:
      'Pick up the car at 07:30 and drive south to the Old Mountain Line: Shengxing station and the Longteng broken bridge. Then Taichung: Miyahara and Taichung Park, and an early dinner at Li Hai braised pork rice in the Second Market when it opens at 16:00. Up into the mountains to Guguan, check in at Dragon Valley Hotel around 17:50, then walk the hot-spring street and soak in the hot springs.',
    heads_up:
      'Long first day after a red-eye: ≈4 h of driving in total. Sleep on the plane, swap drivers if you both have an IDP, and keep Taichung short if you are tired. Sunset is ≈17:10, so the last mountain drive is in the dusk — take it slowly.',
    stops: [
      {
        time: '≈05:40',
        title: 'Land at Taoyuan Airport, Terminal 1',
        details:
          'Immigration, collect bags, tourist SIM / eSIM and NT$ cash from an ATM. Toilets, SIM and anything else before you call the car company (step 4).',
        map: 'Taoyuan International Airport',
        at: [25.0797, 121.2342],
        tips: [
          'Using the e-Gate? Then go to the Immigration counter afterwards for an entry STAMP in your passport — IWS cannot rent you the car without it.',
          'Fill in the online arrival card before you fly.',
        ],
      },
      {
        time: '07:30',
        title: 'Pick up the car: IWS Car Rental',
        details:
          'Free pick-up at Terminal 1. Step 1: collect your bags (no need to call unless the flight is delayed). Step 2: after customs turn right through the waiting area — the Tourist Service Center is on your left (ask them for Exit 18). Step 3: go to the "Pick up area" and find Exit 18. Step 4: wait under the 18 sign and call IWS: 03-3862555 or 0800-033414. Their car can’t stop long, so stay right under the sign. Office: No. 309 Zhongzheng E. Rd., Dayuan (≈10 min).',
        map: IWS,
        at: [25.0614, 121.2052],
        booked: true,
        images: [
          { src: 'img/iws-step2-tourist-center.jpg', caption: 'Step 2 — after customs turn right; the Tourist Service Center is on your left.' },
          { src: 'img/iws-step3-pickup-signs.jpg', caption: 'Step 3 — follow the "Pick up area" (小客車接送區) sign to Exit 18.' },
          { src: 'img/iws-step4-exit-18.jpg', caption: 'Step 4 — wait right under the number 18 sign and call IWS.' },
        ],
        tips: [
          'IWS opens at 08:00. A pick-up between 07:00 and 08:00 only works if it was reserved when you booked — check your booking, or plan for 08:00.',
          'From a foreign SIM: +886 3 386 2555. Text help (08:30–17:30): LINE @560lxvmi or WhatsApp +886 966 166 071 — they can’t take calls on those.',
          'Bring passport (with entry stamp), International Driving Permit, home licence and credit card. Photograph the car before you leave.',
        ],
        getThere: { mode: 'car', how: 'IWS shuttle from Exit 18', duration: '≈10 min' },
      },
      {
        time: '09:30',
        title: 'Shengxing Station (勝興車站)',
        details:
          "The highest station on Taiwan's old western mountain line (1903–1998), a wooden Japanese-era station with the old tunnel and tracks you can walk along, plus a little old street with Hakka snacks (lei cha, mochi). 45–60 min.",
        map: '勝興車站',
        at: [24.3881, 120.782],
        getThere: { mode: 'car', how: 'Freeway 1 / Freeway 3 south → Sanyi exit → Miaoli 49', duration: '≈1h20 (≈100 km)', from: IWS, to: '勝興車站' },
      },
      {
        time: '11:15',
        title: 'Longteng Broken Bridge (龍騰斷橋)',
        details:
          'The red-brick piers of the 1907 Yutengping railway bridge, broken by the 1935 earthquake — the most photographed sight on the line. 30–45 min.',
        map: '龍騰斷橋',
        at: [24.3585, 120.774],
        getThere: { mode: 'car', how: 'Miaoli 49 / 130 south', duration: '≈15 min', from: '勝興車站', to: '龍騰斷橋' },
      },
      {
        time: '12:45',
        title: 'Miyahara & Taichung Park, light lunch',
        details:
          'Snack lunch around Miyahara (a 1927 eye clinic turned ice-cream and pineapple-cake shop) and the lake pavilion in Taichung Park next door. Keep it light: the big meal is Li Hai braised pork rice at 16:00. Park at the Second Market car park and walk 10 minutes.',
        map: '宮原眼科',
        at: [24.1378, 120.6836],
        getThere: { mode: 'car', how: 'Freeway 1 south → Taichung', duration: '≈50 min', from: '龍騰斷橋', to: '宮原眼科' },
      },
      {
        time: '14:15',
        title: 'Shenji New Village (審計新村)',
        details:
          'If you still have energy: a lane of old staff houses turned into cafés, design shops and weekend market stalls. Back to the Second Market by 16:00.',
        map: '審計新村',
        at: [24.1446, 120.6628],
        optional: true,
        getThere: { mode: 'car', how: 'Across central Taichung', duration: '≈10 min', from: '宮原眼科', to: '審計新村' },
      },
      {
        time: '16:00',
        title: 'Early dinner: Li Hai braised pork rice (李海魯肉飯 · 第二市場創始店)',
        details:
          'The original stall of Taichung’s famous late-night braised pork rice, in the Second Market (stall 98, 三民路二段85號). It only opens around 16:00 and runs into the night, so it cannot be lunch: come at opening, before the queue. Order the braised pork rice, the braised egg and a soup; bring cash. Leave Taichung by 16:30.',
        map: '李海魯肉飯 第二市場創始店',
        at: [24.1424, 120.6788],
        tips: [
          'Hours reported Nov 2025 – Nov 2026: about 16:00 (some say 16:30) until late. One blog says closed on Thursdays; Saturday is fine.',
          'Prices reported: braised pork rice about NT$45–80, soups NT$35–50, side dishes NT$20–40.',
        ],
        getThere: { mode: 'car', how: 'Back across central Taichung', duration: '≈10 min', from: '審計新村', to: '李海魯肉飯 第二市場創始店' },
      },
      {
        time: '17:50',
        title: 'Check in at Dragon Valley Hotel',
        details:
          'Check in first (from 15:00), drop the bags and leave the car at the hotel. The Guguan hot-spring street is a few minutes’ walk away. The last part of the drive is a mountain road after sunset (≈17:10): take it slowly.',
        map: 'Dragon Valley Hotel',
        at: [24.2031684, 121.0044866],
        booked: true,
        getThere: { mode: 'car', how: 'Freeway 4 / Hwy 3 → Dongshi → Hwy 8 east', duration: '≈1h20 (≈60 km)', from: '李海魯肉飯 第二市場創始店', to: 'Dragon Valley Hotel' },
      },
      {
        time: '18:15',
        title: 'Walk the Guguan hot-spring street (谷關溫泉 · Mingzhi area), onsen',
        details:
          'A small hot-spring village in the Dajia River gorge: the old street, the suspension bridge, the hot-spring park and Mingzhi Hot Spring Hotel. Walk it in the evening (snacks on the street if you are hungry again), then back for the hot-spring baths and an early night.',
        map: '谷關溫泉',
        at: [24.2033, 121.0092],
        getThere: { mode: 'walk', how: 'Along Dongguan Rd from the hotel', duration: '≈5 min', from: 'Dragon Valley Hotel', to: '谷關溫泉' },
      },
    ],
    alternatives: [
      'Too tired after the flight? Skip Taichung city: Old Mountain Line → straight to Guguan (≈1h40), check in at 15:00 and enjoy a long hot-spring afternoon.',
      'Or skip the Old Mountain Line and do Taichung + Rainbow Village instead (Freeway 3 straight to Taichung ≈1h45).',
    ],
    stay: {
      name: 'Dragon Valley Hotel & Paradise (龍谷大飯店)',
      map: 'Dragon Valley Hotel',
      at: [24.2031684, 121.0044866],
      address: 'No. 138, Sec. 1, Dongguan Rd, Heping District, Taichung (Guguan) · +886 4 2595 1369',
      note: 'Big hot-spring hotel in the middle of the Guguan hot-spring street, with indoor and outdoor hot-spring pools. Use them tonight and before breakfast.',
      booked: true,
      checkIn: '15:00',
      checkOut: '11:00',
    },
  },
  // ── Day 2 ──
  {
    date: '2026-11-29',
    title: 'Chiayi City → Shizhuo tea trails & sunset',
    area: 'Guguan → Chiayi City → Shizhuo / Leye tea country (≈1,300 m)',
    summary:
      "Drive south to Chiayi for turkey rice and the Japanese-era timber district (Hinoki Village, Beimen station of the Alishan railway). In the afternoon climb Highway 18 into the tea country around Shizhuo, check in at 嵩茂渡假中心 and walk the tea trails for a panoramic sunset over the tea terraces.",
    heads_up: '≈3h30 of driving in total. Fill the tank in Chiayi — few petrol stations up in the mountains. Sunset ≈17:10; be on the trail by 16:30.',
    stops: [
      {
        time: '07:30',
        title: 'Morning onsen & breakfast',
        details: 'Last soak in the hot springs, breakfast, check out by 09:30 (latest check-out is 11:00).',
        map: 'Dragon Valley Hotel',
        at: [24.2031684, 121.0044866],
      },
      {
        time: '11:45',
        title: 'Lunch: Chiayi turkey rice (火雞肉飯)',
        details:
          "Chiayi's signature dish — shredded turkey over rice with fried shallots. Try the famous shops around the central fountain roundabout and Wenhua Road (e.g. 噴水雞肉飯).",
        map: 'Wenhua Road Night Market Chiayi',
        at: [23.479, 120.4495],
        getThere: { mode: 'car', how: 'Hwy 8 → Freeway 4 → Freeway 1 or 3 south → Chiayi', duration: '≈2h20 (≈155 km)', from: 'Dragon Valley Hotel', to: 'Chiayi Station' },
      },
      {
        time: '12:45',
        title: 'Hinoki Village (檜意森活村)',
        details:
          'A restored Japanese-era timber village of 28 cypress-wood houses — shops, cafés and small exhibitions about the Alishan logging days. Free to walk.',
        map: '檜意森活村',
        at: [23.4851, 120.4552],
        getThere: { mode: 'car', how: 'Drive across town', duration: '≈10 min' },
      },
      {
        time: '13:30',
        title: 'Beimen Station (北門車站)',
        details: 'The 1912 cypress-wood station of the Alishan Forest Railway, right next to Hinoki Village. Old trains on display.',
        map: '阿里山森林鐵路北門車站',
        at: [23.4881, 120.4542],
        getThere: { mode: 'walk', how: 'Walk from Hinoki Village', duration: '≈5 min' },
      },
      {
        time: '14:00',
        title: 'Chiayi Art Museum or Sun-Shooting Tower',
        details:
          'Optional: the Chiayi Art Museum (a 1936 tobacco office turned into a bright gallery and café) or the Sun-Shooting Tower in Chiayi Park (lift to the top for city views). Leave Chiayi by 14:45.',
        map: '嘉義市立美術館',
        at: [23.4768, 120.4407],
        optional: true,
      },
      {
        time: '16:00',
        title: 'Check in at 嵩茂渡假中心',
        details: 'Up Highway 18 into the tea country. Drop the bags and head straight out to the tea trails.',
        map: '嵩茂渡假中心',
        at: [23.4711, 120.7064],
        booked: true,
        getThere: { mode: 'car', how: 'Hwy 159 → Hwy 18 (Alishan Hwy) east → Shizhuo', duration: '≈1h15 (≈50 km)', from: 'Chiayi Station', to: '嵩茂渡假中心' },
      },
      {
        time: '16:30',
        title: 'Shizhuo tea trails & sunset (霧之道 · 茶之道)',
        details:
          'A network of short trails right next to the hotel: the Mist Trail through cedar forest, and the Tea Trail between tea terraces with wide views over the mountains. Sunset ≈17:10 over the tea fields; clouds often roll in below you.',
        map: '霧之道 石棹',
        at: [23.474, 120.7027],
        getThere: { mode: 'walk', how: 'Walk from the hotel', duration: '≈5–10 min' },
      },
      {
        time: '18:00',
        title: 'Dinner at the hotel or in Shizhuo',
        details: 'Mountain vegetables, bamboo shoots and tea dishes. Shizhuo is tiny, so ask the hotel what is open.',
        map: '嵩茂渡假中心',
        at: [23.4711, 120.7064],
      },
    ],
    alternatives: [
      'Want the classic sea-of-clouds sunset? Eryanping Trail (二延平步道, 4.5★) is ≈25 min back down Hwy 18 — a 30 min climb to a famous sunset platform.',
      'Running late from Chiayi? Skip the museum and go straight up after Beimen station.',
    ],
    stay: {
      name: '嵩茂渡假中心 (Song Mao resort)',
      map: '嵩茂渡假中心',
      at: [23.4711, 120.7064],
      address: 'Leye Village, Alishan Township, Chiayi County (Shizhuo area)',
      note: 'In the tea country at ≈1,300 m, steps from the Mist Trail and the tea terraces. Saiji Tea House is next door.',
      booked: true,
      checkIn: '15:00',
      checkOut: '11:00',
    },
  },
  // ── Day 3 ──
  {
    date: '2026-11-30',
    title: 'Fenqihu → Saiji Tea House → Alishan must-sees',
    area: 'Shizhuo → Fenqihu → Alishan Forest Recreation Area (≈2,200 m)',
    summary:
      'Morning in Fenqihu: the old street, the railway garage and two short forest trails. Lunch at Saiji Tea House on the way back past the hotel, then up to Alishan for the giant-tree trails, Sister Ponds and sunset at Zhaoping. Collect tomorrow’s sunrise-train ticket today.',
    heads_up:
      'Collect your sunrise-train ticket today (Alishan station counter or a 7-Eleven ibon) — the train leaves before the ticket office opens. Early night: the alarm is ≈04:30.',
    stops: [
      {
        time: '09:00',
        title: 'Fenqihu Old Street & railway station (奮起湖)',
        details:
          'Mountain village halfway up the Alishan Forest Railway: old street, the steam-locomotive garage, the famous railway bento (奮起湖便當) and square doughnuts. Park in the paid car park above the village.',
        map: 'Fenqihu Station',
        at: [23.5053, 120.6951],
        getThere: { mode: 'car', how: 'County Rd 169 to Fenqihu', duration: '≈25 min', from: '嵩茂渡假中心', to: 'Fenqihu Station' },
      },
      {
        time: '10:00',
        title: 'Fenqihu trails: Cedar Boardwalk & Gaozaikan old trail',
        details:
          'Cedar Boardwalk Trail (4.6★): an easy loop through tall Japanese cedar right behind the old street. Add the old Gaozaikan trail (糕仔崁古道), a stone path through bamboo and cedar, if you want more. ≈1–1.5 h in total.',
        map: '奮起湖 杉林步道',
        at: [23.5035, 120.6933],
        getThere: { mode: 'walk', how: 'From the old street', duration: '≈5 min' },
      },
      {
        time: '12:15',
        title: 'Lunch: Saiji Tea House',
        details:
          'Tea house with tea-farm views next to your Day 2 hotel (4.3★). Tea meals and a pot of Alishan high-mountain oolong. If it is closed or busy, eat the railway bento in Fenqihu instead.',
        map: 'Saiji Tea House',
        at: [23.4715, 120.705],
        optional: true,
        getThere: { mode: 'car', how: 'County Rd 169 back to Shizhuo', duration: '≈25 min', from: 'Fenqihu Station', to: 'Saiji Tea House' },
      },
      {
        time: '14:00',
        title: 'Alishan: check in, collect the sunrise-train ticket',
        details:
          'Pay at the forest recreation area gate, drop the bags at Dengshan (room check-in is from 15:00, so leave the bags at reception if the room is not ready), and collect tomorrow’s sunrise ticket at the Alishan station counter (passport + reservation number from your confirmation).',
        map: 'Alishan Station',
        at: ALISHAN,
        getThere: { mode: 'car', how: 'Hwy 18 east to the Alishan gate', duration: '≈40 min', from: 'Saiji Tea House', to: 'Alishan Forest Recreation Area' },
      },
      {
        time: '14:45',
        title: 'Giant Tree Cluster Trail & Shouzhen Temple',
        details:
          'The must-see boardwalk loop past 1,000–2,000-year-old red cypress trees (4.8★), starting near Shouzhen Temple. Allow 1–1.5 h.',
        map: '阿里山 巨木群棧道',
        at: [23.5167, 120.8096],
      },
      {
        time: '15:45',
        title: 'Sister Ponds (姊妹潭)',
        details: 'Two small ponds in the cypress forest at the end of the giant-trees loop.',
        map: 'Alishan Sister Ponds',
        at: [23.5165, 120.8076],
        getThere: { mode: 'walk', how: 'Giant-trees loop trail', duration: '≈20 min' },
      },
      {
        time: '16:40',
        title: 'Sunset at Zhaoping station',
        details: 'Short walk up to Zhaoping park and station for the sunset (≈17:05), then dinner in Alishan village.',
        map: 'Zhaoping Station Alishan',
        at: [23.5126, 120.8053],
        getThere: { mode: 'walk', how: 'Walk up from the ponds', duration: '≈15 min' },
      },
      {
        time: '18:00',
        title: 'Dinner in Alishan village & early night',
        details: 'Hot pot or mountain vegetables at the village food court; buy breakfast snacks at the 7-Eleven for the early train.',
        map: 'Alishan Station',
        at: ALISHAN,
      },
    ],
    alternatives: [
      'Short on time? Skip the Gaozaikan trail and the tea house: lunch in Fenqihu and reach Alishan by 13:30.',
      'Want a train ride today? Take the Shenmu line (≈10 min) from Alishan station to the giant trees instead of walking.',
    ],
    stay: DENGSHAN,
  },
  // ── Day 4 ──
  {
    date: '2026-12-01',
    title: 'Zhushan sunrise → nap → Sun Moon Lake (Ita Thao)',
    area: 'Zhushan · Alishan → Sun Moon Lake (Ita Thao)',
    summary:
      'Sunrise train to Zhushan (booked), walk back down the forest trail, then a nap before the 11:00 check-out. Drive to Sun Moon Lake, check in at Ita Thao, optionally ride the ropeway (it is closed tomorrow), watch the sunset at the pier and eat at the Ita Thao night street.',
    heads_up:
      'Alarm ≈04:30 and near-freezing at sunrise — all your layers. Optional ropeway: it closes on the first Wednesday of the month (tomorrow), so today is the only chance (last tickets 15:30 on weekdays). ≈3 h mountain drive: check road status (1968 app) before leaving.',
    stops: [
      {
        time: '≈05:00',
        title: 'Sunrise train to Zhushan (祝山)',
        details:
          'Booked: one-way Zhushan line from Alishan station (≈25 min) — reservation number on your confirmation. The departure time is set by the sunrise and posted the day before; be at the station ≈20 min early. Sunrise ≈06:25 over the sea of clouds and Jade Mountain.',
        map: 'Zhushan Sunrise Viewing Platform',
        at: [23.5088, 120.8174],
        booked: true,
        tips: [
          'Collect the ticket by the day before (Alishan station counter or 7-Eleven ibon, NT$10) — no refund if you miss the train because the ticket wasn’t collected.',
          'Bring the passport you booked with. Stations: Alishan +886 5 267 9200.',
        ],
        getThere: { mode: 'train', how: 'Zhushan line from Alishan station (walk ≈10 min from the hotel)', duration: '≈25 min' },
      },
      {
        time: '06:50',
        title: 'Walk down: Zhushan trail & Duigaoyue',
        details:
          'Your ticket is one way, so walk back: the trail from Zhushan down to Alishan village (≈1 h) passes Zhaoping and the Ciyun Temple; add the Duigaoyue (對高岳) viewpoint detour (+30 min) if you still have legs.',
        map: 'Alishan Station',
        at: ALISHAN,
        getThere: { mode: 'walk', how: 'Zhushan → Alishan trail (downhill)', duration: '≈1–1.5 h' },
      },
      {
        time: '08:30',
        title: 'Breakfast & nap at the hotel',
        details: 'Hotel breakfast, then sleep until check-out at 11:00.',
        map: 'Ali-Shan Dengshan Hotel',
        at: [23.5116, 120.8033],
      },
      {
        time: '11:00',
        title: 'Check out & drive to Sun Moon Lake',
        details:
          'Hwy 18 down to Shizhuo, county roads through the Ruili / Zhushan tea and bamboo country, then Hwy 16 / 21 up to the lake. Break in Zhushan town or a 7-Eleven on the way.',
        map: 'Ita Thao Pier',
        at: [23.8505, 120.9351],
        getThere: {
          mode: 'car',
          how: 'Hwy 18 → 嘉155 / 149甲 / 149 (Ruili) → Hwy 3 (Zhushan) → Hwy 16 → Hwy 21',
          duration: '≈3h (≈113 km)',
          from: 'Alishan Forest Recreation Area',
          to: 'Ita Thao Pier',
        },
      },
      {
        time: '14:15',
        title: 'Check in at Ita Thao',
        details: 'Not booked yet — see the hotel ideas in the "Tonight" card below. Most have parking.',
        map: 'Ita Thao Night Market',
        at: [23.8481, 120.9306],
        guess: true,
      },
      {
        time: '14:45',
        title: 'Sun Moon Lake Ropeway',
        details:
          'Gondola from Ita Thao over the hills to the Formosan Aboriginal Culture Village, with big lake views. Weekday hours 10:30–16:00, last tickets 15:30. It is closed tomorrow (first Wednesday of the month).',
        map: 'Sun Moon Lake Ropeway',
        at: [23.8517, 120.9363],
        optional: true,
      },
      {
        time: '17:00',
        title: 'Sunset at Ita Thao Pier',
        details: 'Sunset ≈17:10 across the lake.',
        map: 'Ita Thao Pier',
        at: [23.8505, 120.9351],
      },
      {
        time: '18:00',
        title: 'Night market: Ita Thao Night Street',
        details: 'Thao grilled boar sausage, millet mochi, sticky rice in bamboo, sweet-potato balls.',
        map: 'Ita Thao Night Market',
        at: [23.8481, 120.9306],
      },
    ],
    alternatives: [
      'Too sleepy to drive at 11:00? Skip the nap’s second half and drive with a long break in Zhushan town, or swap drivers halfway.',
      'Prefer bigger roads? Hwy 18 back to Chiayi, then Freeway 3 → Freeway 6 to the lake (≈3h, easier, fewer curves).',
    ],
    stay: {
      name: 'Hotel in Ita Thao (to book)',
      map: 'Ita Thao Night Market',
      at: [23.8481, 120.9306],
      checkIn: '15:00',
      checkOut: '11:00',
      timesGuess: true,
      note:
        'Ideas near the old street (Google ratings, 24 Nov): Wyndham Sun Moon Lake 4.5★ (2,755) — upscale with hot-spring baths; Ming Yue Hu Hotel 4.6★ (1,432) and 湖悦景觀旅店 4.4★ (1,027) — front-row lake views; 日月潭水漾 4.5★ (1,509); Zhen House 珍棧民宿 4.8★ (795) — small B&B. Ask for parking.',
    },
  },
  // ── Day 5 ──
  {
    date: '2026-12-02',
    title: 'Lake morning → Taipei: return the car, old town & Shilin → fly home',
    area: 'Sun Moon Lake → Taipei Main Station · Dadaocheng · Shilin → Taoyuan Airport',
    summary:
      'Boat across the lake in the morning, then drive to Taipei Main Station, return the car, leave the bags in the station lockers and explore Taipei by MRT: Dadaocheng and Dihua Street, sunset at the wharf, dinner at Shilin Night Market. Back to Taipei Main for the bags and the Airport MRT to Terminal 1.',
    heads_up:
      'Leave the lake by 12:00 — freeway traffic into Taipei can add 30–60 min. Confirm with IWS where and until when you can drop the car at Taipei Main Station. Be on the Airport MRT by ≈19:30 for the 23:20 flight.',
    stops: [
      {
        time: '08:00',
        title: 'Breakfast & check out',
        details: 'Leave the bags in the car.',
        map: 'Ita Thao Pier',
        at: [23.8505, 120.9351],
      },
      {
        time: '09:00',
        title: 'Lake boat: Ita Thao → Xuanguang Temple → Shuishe',
        details:
          'Hop-on boat pass (≈NT$300): Xuanguang Temple (Ah Po tea eggs) and Shuishe, then back to Ita Thao. ≈2 h with stops. The ropeway is closed today (first Wednesday of the month).',
        map: 'Xuanguang Temple',
        at: [23.8494, 120.9225],
        getThere: { mode: 'boat', how: 'Hop-on boat between the three piers', duration: '≈10–15 min per hop', cost: '≈NT$300 pp' },
      },
      {
        time: '11:15',
        title: 'Wenwu Temple viewpoint',
        details: 'Big temple on the north shore with a famous lake view from the top terrace (4.7★). On the drive out.',
        map: '文武廟 日月潭',
        at: [23.87, 120.9276],
        optional: true,
      },
      {
        time: '11:45',
        title: 'Drive to Taipei',
        details: 'Lunch at a freeway service area on the way (e.g. Xihu or Guanxi). Refuel near Taipei before returning the car.',
        map: 'Taipei Main Station',
        at: [25.0478, 121.517],
        getThere: { mode: 'car', how: 'Hwy 21 → Freeway 6 → Freeway 3 north → Taipei', duration: '≈3h (≈200 km)', from: '文武廟 日月潭', to: 'Taipei Main Station' },
      },
      {
        time: '≈14:45',
        title: 'Return the car at Taipei Main Station, store luggage',
        details:
          'Drop the car with IWS at Taipei Main Station, then put the bags in the station’s coin lockers (EasyCard works) — or use the luggage service in the station. Big lockers fill up, so look around both the MRT and the train halls.',
        map: 'Taipei Main Station',
        at: [25.0478, 121.517],
        guess: true,
        tips: ['Confirm the exact drop-off point (car park) with IWS before the day.', 'Take photos of the fuel gauge and the car when you hand it back.'],
      },
      {
        time: '15:15',
        title: 'Dadaocheng & Dihua Street',
        details:
          "Taipei's best-preserved old town: 19th-century shophouses, dried goods and tea shops, Xiahai City God Temple — good for souvenirs.",
        map: 'Dihua Street',
        at: [25.0565, 121.51],
        getThere: { mode: 'mrt', how: 'Green line Taipei Main → Beimen (1 stop), exit 3', duration: '≈10 min', from: 'Taipei Main Station', to: 'Dihua Street' },
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
        time: '17:30',
        title: 'Night market: Shilin Night Market',
        details:
          'Last dinner in Taiwan: giant fried chicken, oyster omelette, pepper buns and the underground food court. Get off at Jiantan station; early evening is less crowded.',
        map: 'Shilin Night Market',
        at: [25.088, 121.5241],
        getThere: { mode: 'mrt', how: 'Walk to Daqiaotou, orange → red line to Jiantan (or taxi ≈15 min)', duration: '≈30 min', from: 'Dadaocheng Wharf', to: 'Jiantan Station' },
      },
      {
        time: '19:00',
        title: 'Back to Taipei Main → Airport MRT',
        details: 'Red line Jiantan → Taipei Main (≈15 min), collect the bags, Airport MRT Express (purple) to Terminal 1 (≈35–40 min). Arrive ≈20:15.',
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
      'Running late? Swap Shilin for Ningxia Night Market — 15 min walk from Dadaocheng Wharf and 10 min from Taipei Main, so you can skip the MRT ride.',
      'Arriving in Taipei early? Add Longshan Temple and Bopiliao (blue line, 2 stops from Taipei Main) before Dadaocheng.',
    ],
  },
];
