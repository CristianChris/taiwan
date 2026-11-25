/*
 * Drone info, keyed by a stop's `map` (same idea as the Australia trip).
 *  ok    = scenic and, as far as we could check, allowed for recreational flying
 *  check = needs a permit / approval first, or the rule couldn't be confirmed
 *  no    = don't fly (airport zone, crowds, or a known ban)
 * Checked 22 Nov 2026 against CAA rules summaries and news reports. Rules and
 * red zones change: always check the CAA drone map (drone.caa.gov.tw) on the day.
 */
export type DroneStatus = 'ok' | 'check' | 'no';

export const DRONE_CHECKED = '22 Nov 2026';

export const DRONE: Record<string, { status: DroneStatus; note: string }> = {
  // Taipei & airport
  'Taoyuan International Airport': { status: 'no', note: 'Airport no-fly zone.' },
  桃園市大園區中正東路309號: { status: 'no', note: 'Right next to the airport — no-fly zone.' },
  'Longshan Temple Taipei': { status: 'no', note: 'Crowded temple in central Taipei; flying over people is not allowed.' },
  Ximending: { status: 'no', note: 'Dense crowds — not allowed over people.' },
  'Dihua Street': { status: 'no', note: 'Busy shopping street in central Taipei.' },
  'Dadaocheng Wharf': {
    status: 'no',
    note: 'Tempting river sunset, but it is within about 5 km of Songshan Airport, which puts it inside the airport no-fly zone.',
  },
  'Shilin Night Market': { status: 'no', note: 'About 3.5 km from Songshan Airport and packed with people.' },
  // Taichung & Chiayi
  清水服務區: { status: 'no', note: 'About 2.5 km from Taichung Airport — inside its no-fly zone.' },
  'Rainbow Village Taichung': { status: 'no', note: 'Tiny village full of visitors; not worth the risk.' },
  'Chiayi Station': { status: 'no', note: 'Central Chiayi is mostly a red (no-fly) zone, reported in 2026.' },
  'Wenhua Road Night Market Chiayi': { status: 'no', note: 'Central Chiayi red zone, and crowds.' },
  // New plan (24 Nov)
  '勝興車站': { status: 'ok', note: 'Hills and the old railway — a lovely aerial shot. Fly from outside the crowded station area and stay 30 m from people and the tracks. Check the CAA map first.' },
  '龍騰斷橋': { status: 'ok', note: 'The classic drone shot of the broken brick piers in the valley. Popular — take off away from visitors and never fly over them.' },
  '舊山線鐵道自行車': { status: 'no', note: 'Don’t fly over the rail-bike riders.' },
  '台中第二市場': { status: 'no', note: 'Dense city centre and crowds.' },
  '李海魯肉飯 第二市場創始店': { status: 'no', note: 'Dense city centre and crowds.' },
  '宮原眼科': { status: 'no', note: 'Central Taichung, crowds.' },
  '審計新村': { status: 'no', note: 'City lane with crowds.' },
  '谷關溫泉': { status: 'check', note: 'Mountain gorge and suspension bridge — scenic, but check the CAA map and local signs; don’t fly over the hot-spring street.' },
  'Dragon Valley Hotel': { status: 'check', note: 'Ask the hotel; never over the outdoor baths or the hot-spring street.' },
  '檜意森活村': { status: 'no', note: 'Central Chiayi is mostly a red (no-fly) zone.' },
  '阿里山森林鐵路北門車站': { status: 'no', note: 'Central Chiayi red zone.' },
  '嘉義市立美術館': { status: 'no', note: 'Central Chiayi red zone.' },
  '嵩茂渡假中心': { status: 'ok', note: 'Tea terraces and mountain ridges around Shizhuo — one of the best drone areas of the trip, especially at sunset over the clouds. Check the CAA map first and stay away from the tea pickers.' },
  '霧之道 石棹': { status: 'ok', note: 'Fly over the tea terraces next to the trail, not over walkers. Sunset is the time.' },
  '奮起湖 杉林步道': { status: 'no', note: 'Dense forest — no line of sight.' },
  'Saiji Tea House': { status: 'ok', note: 'Tea-farm views — same rules as Shizhuo.' },
  '阿里山 巨木群棧道': { status: 'check', note: 'Inside the forest recreation area — ask first; dense trees and crowds anyway.' },
  'Ali-Shan Dengshan Hotel': { status: 'check', note: 'Inside the forest recreation area — ask first.' },
  '文武廟 日月潭': { status: 'no', note: 'Sun Moon Lake restricts drones; busy temple.' },
  'Ningxia Night Market': { status: 'no', note: 'Central Taipei, near Songshan Airport, crowds.' },
  // Mountains
  'Fenqihu Station': {
    status: 'ok',
    note: 'Best drone spot of the trip: forested ridges, tea slopes and the mountain railway winding through the village. Take off from the quiet car park above the village, stay 30 m from the tracks and the old street, and check the CAA map first.',
  },
  'Alishan Forest Recreation Area': {
    status: 'check',
    note: 'Inside a national forest recreation area. We could not confirm the rule, so assume you need permission: ask at the visitor centre or the forestry office before flying.',
  },
  'Alishan Sister Ponds': { status: 'check', note: 'Inside the forest recreation area — ask first (see Alishan).' },
  'Zhaoping Station Alishan': { status: 'check', note: 'Inside the forest recreation area — ask first.' },
  'Zhushan Sunrise Viewing Platform': {
    status: 'check',
    note: 'A sea-of-clouds sunrise is the dream shot, but it is inside the forest recreation area and the platform is crowded at dawn. Only with permission, and never over the crowd. Drones may not fly before sunrise.',
  },
  'Shenmu Station Alishan': { status: 'check', note: 'Inside the forest recreation area, next to the railway — ask first.' },
  'Tataka Visitor Center': {
    status: 'check',
    note: 'Gateway to Yushan National Park. Taiwan’s national parks require an application before flying.',
  },
  // Sun Moon Lake
  'Shuishe Pier': {
    status: 'no',
    note: 'Sun Moon Lake banned unauthorised drone flying at Shuishe, Ita Thao, Chaowu Pier and Xiangshan (reported 2016). Applying for permission may be possible.',
  },
  'Shuishe Visitor Center': { status: 'no', note: 'Shuishe is one of Sun Moon Lake’s no-drone areas.' },
  'Xuanguang Temple': { status: 'no', note: 'Busy pier and temple on Sun Moon Lake — don’t fly.' },
  'Sun Moon Lake Ropeway': { status: 'no', note: 'Never fly near cable cars.' },
  'Ita Thao Pier': { status: 'no', note: 'Ita Thao is one of Sun Moon Lake’s no-drone areas.' },
  'Ita Thao Night Market': { status: 'no', note: 'Ita Thao is one of Sun Moon Lake’s no-drone areas.' },
};

export const DRONE_LABEL: Record<DroneStatus, string> = {
  ok: '🛸 Drone spot',
  check: '⚠️ Drone: ask first',
  no: '🚫 No drone',
};
