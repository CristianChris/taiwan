/*
 * Where to leave the car, keyed by a stop's `map` (same idea as drone.ts).
 * Car parks found on Google Maps on 24 Nov 2026. Prices marked "about" are typical
 * rates, not checked for that exact car park; the Fenqihu rate is the official one
 * (Alishan National Scenic Area, from 1 Jan 2025). Check the sign at the gate.
 */
export type Parking = {
  name: string;
  at: [number, number];
  price: string;
  pay: string;
  note?: string;
};

export const PARKING_CHECKED = '24 Nov 2026';

const MACHINE = 'Pay machine at the exit: cash (NT$100 notes and coins), and usually EasyCard / iPASS.';
const CASH = 'Cash to the attendant at the gate.';
const HOTEL = 'Nothing to pay on the spot (ask at check-in).';

const SECOND_MARKET: Parking = {
  name: 'Di Er Shichang Parking (第二市場停車場)',
  at: [24.1442924, 120.6781647],
  price: 'about NT$30–40 per hour',
  pay: MACHINE,
};
const FENQIHU: Parking = {
  name: 'Fenqihu Car Park No.1 (奮起湖第一停車場)',
  at: [23.5046432, 120.6977075],
  price: 'NT$20 per half hour (official rate)',
  pay: 'Pay machine: cash, transport cards (EasyCard / iPASS) or mobile pay.',
  note: 'Full? Car Park No.3 just below is NT$15 per half hour, max NT$150 a day.',
};
const CHIAYI_STATION: Parking = {
  name: 'CITY PARKING Chiayi Station (城市車旅)',
  at: [23.4891694, 120.4554145],
  price: 'about NT$30 per hour',
  pay: MACHINE,
  note: 'One car park for Hinoki Village and Beimen station: they are a 5 minute walk apart.',
};
const DENGSHAN: Parking = {
  name: 'Ali-Shan Dengshan Hotel parking',
  at: [23.5116, 120.8033],
  price: 'Car entry to the Alishan recreation area: about NT$200 per car, paid at the toll gate on the way in',
  pay: 'Cash or card at the toll gate, together with the entry tickets. Hotel parking: ask at check-in.',
  note: 'Leave the car at the hotel for the whole Alishan stay: the trails, sunset and sunrise train are on foot.',
};
const ITA_THAO: Parking = {
  name: 'Ita Thao Zhongzheng Car Park (伊達邵中正停車場)',
  at: [23.8461816, 120.9320752],
  price: 'about NT$30 per hour',
  pay: MACHINE,
  note: 'If your Ita Thao hotel has parking, leave the car there and walk.',
};

export const PARKING: Record<string, Parking> = {
  '勝興車站': {
    name: 'Shengxing Station car park (勝興車站停車場)',
    at: [24.3867691, 120.7818122],
    price: 'about NT$100 per car, per entry',
    pay: CASH,
    note: 'Avoid the private lot reviewed as “付費停車場 (慎入)”: it has very bad reviews.',
  },
  '龍騰斷橋': {
    name: 'Rail-bike car park (舊山線鐵道自行車 收費停車場)',
    at: [24.3604227, 120.7748538],
    price: 'about NT$100 per car, per entry',
    pay: CASH,
    note: 'Walk about 10 minutes up to the bridge viewpoint.',
  },
  '台中第二市場': SECOND_MARKET,
  '李海魯肉飯 第二市場創始店': { ...SECOND_MARKET, note: 'The stall is inside the Second Market, 2 minutes’ walk.' },
  '宮原眼科': { ...SECOND_MARKET, note: 'Same car park as the Second Market: walk about 10 minutes.' },
  '審計新村': {
    name: 'National Taiwan Museum of Fine Arts car park (國美館民生園區停車場)',
    at: [24.1437957, 120.6650332],
    price: 'about NT$30 per hour',
    pay: MACHINE,
  },
  'Dragon Valley Hotel': {
    name: 'Dragon Valley Hotel, guest parking',
    at: [24.2031684, 121.0044866],
    price: 'Free for hotel guests (usual here)',
    pay: HOTEL,
    note: 'Park at the hotel and walk the Guguan street from there. If the hotel lot is full, the Guguan public car park building is next door.',
  },
  'Wenhua Road Night Market Chiayi': {
    name: 'Dudufang parking, Chiayi West Market (嘟嘟房)',
    at: [23.4794424, 120.4481851],
    price: 'about NT$30 per hour',
    pay: MACHINE,
  },
  '檜意森活村': CHIAYI_STATION,
  '阿里山森林鐵路北門車站': CHIAYI_STATION,
  '嘉義市立美術館': {
    name: 'CITY PARKING Lanjing (城市車旅 蘭井站)',
    at: [23.4765812, 120.4412062],
    price: 'about NT$30 per hour',
    pay: MACHINE,
  },
  '嵩茂渡假中心': {
    name: '嵩茂渡假中心, guest parking',
    at: [23.4711, 120.7064],
    price: 'Free for hotel guests (usual here)',
    pay: HOTEL,
    note: 'The tea trails start nearby: walk there and leave the car at the hotel.',
  },
  'Fenqihu Station': FENQIHU,
  '奮起湖 杉林步道': FENQIHU,
  'Saiji Tea House': {
    name: 'Roadside spaces by the tea house',
    at: [23.4714559, 120.7049511],
    price: 'Usually free for customers',
    pay: 'Nothing to pay. Ask the staff where to leave the car.',
    note: 'Next door to 嵩茂: you can also leave the car at the hotel.',
  },
  'Alishan Station': DENGSHAN,
  'Ali-Shan Dengshan Hotel': DENGSHAN,
  'Ita Thao Pier': ITA_THAO,
  'Ita Thao Night Market': ITA_THAO,
  'Sun Moon Lake Ropeway': {
    name: 'Ropeway station car park (日月潭纜車站停車場)',
    at: [23.8515673, 120.9354853],
    price: 'about NT$50–100 per entry',
    pay: CASH,
  },
  '文武廟 日月潭': {
    name: 'Car parks below Wenwu Temple (蘭園停車場)',
    at: [23.8692, 120.929191],
    price: 'about NT$50 per entry',
    pay: CASH,
  },
  'Taipei Main Station': {
    name: 'Taipei Main Station East underground car park (台北車站東區地下停車場)',
    at: [25.047301, 121.5198414],
    price: 'about NT$40–60 per hour, only if you park before handing the car back',
    pay: MACHINE,
    note: 'Confirm with IWS exactly where at Taipei Main Station they take the car back.',
  },
};
