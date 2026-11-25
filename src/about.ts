/*
 * "About" info for each place in the plans, keyed by the stop's `map` value.
 * rating / reviews = Google Maps figures, checked on RATINGS_CHECKED (they change over time).
 * q = the search that finds the place on Google Maps (opens its reviews).
 * Places without a rating are transport hubs or spots Google lists without one.
 */
export interface About {
  name: string;
  q?: string;
  rating?: number;
  reviews?: number;
  about: string;
  good?: string[];
}

export const RATINGS_CHECKED = '22–24 Nov 2026';

export const about: Record<string, About> = {
  '勝興車站': {
    name: 'Shengxing Station (勝興車站)',
    rating: 4.5,
    reviews: 8204,
    about:
      "At 402 m, the highest point of Taiwan's old western mountain railway (1903–1998). The wooden Japanese-era station, old tunnel and tracks are now a heritage site, with a small old street of Hakka snacks and teahouses next to it.",
    good: ['Busy at weekends from late morning — arriving around 09:30 helps.'],
  },
  '舊山線鐵道自行車': {
    name: 'Old Mountain Line Rail Bike (舊山線鐵道自行車)',
    q: 'Old Mountain Line Rail Bike Shengxing Station',
    rating: 4.2,
    reviews: 28145,
    about:
      'Electric-assist rail bikes on the disused mountain line between Shengxing and Longteng, through tunnels and over brick viaducts. Rides run in timed slots.',
    good: ['Book a slot online in advance; weekend slots sell out.'],
  },
  '龍騰斷橋': {
    name: 'Longteng Broken Bridge (龍騰斷橋 · 魚藤坪橋遺址)',
    rating: 4.3,
    reviews: 24583,
    about:
      'The red-brick piers of the 1907 Yutengping railway bridge, left standing after the 1935 Hsinchu–Taichung earthquake and one of the most photographed ruins in Taiwan.',
  },
  '審計新村': {
    name: 'Shenji New Village (審計新村)',
    about:
      'A lane of 1960s government staff houses in West District, Taichung, turned into small cafés, design shops and weekend market stalls.',
  },
  '谷關溫泉': {
    name: 'Guguan Hot Springs (谷關溫泉)',
    rating: 4.2,
    reviews: 350,
    about:
      'A hot-spring village at about 750 m in the Dajia River valley in Taichung’s mountains, known since the Japanese era. The short main street has the Mingzhi Hot Spring Hotel, a hot-spring park and a suspension bridge over the river.',
  },
  '李海魯肉飯 第二市場創始店': {
    name: 'Li Hai Braised Pork Rice (李海魯肉飯 · 第二市場創始店)',
    about:
      'A family stall in Taichung’s Second Market selling braised pork rice for over 60 years, famous as a late-night spot: it opens in the late afternoon (about 16:00) and runs into the night. Classic order: braised pork rice, braised egg, a fish-ball or meatball soup and blanched greens. Stall 98, No. 85, Sec. 2, Sanmin Rd.',
  },
  'Dragon Valley Hotel': {
    name: 'Dragon Valley Hotel & Paradise (龍谷大飯店)',
    q: 'Dragon Valley Hotel Guguan',
    rating: 3.7,
    reviews: 2240,
    about:
      'A large, long-running hot-spring hotel right on the Guguan hot-spring street, with indoor and outdoor hot-spring pools and a small leisure park. Check-in 15:00, check-out 11:00.',
  },
  'Goya Spring Resort': {
    name: 'Goya Spring Resort (谷野會館)',
    rating: 3.9,
    reviews: 2301,
    about: 'Hot-spring resort hotel on Dongguan Road below Guguan, with indoor and outdoor hot-spring baths.',
  },
  '檜意森活村': {
    name: 'Hinoki Village (檜意森活村)',
    rating: 4.3,
    reviews: 41054,
    about:
      'A cluster of restored 1914–1940s cypress-wood houses built for the Alishan logging staff, now shops, cafés and small exhibitions, next to Beimen station.',
  },
  '阿里山森林鐵路北門車站': {
    name: 'Beimen Station (北門車站)',
    q: 'North Gate Station Chiayi',
    rating: 4.3,
    reviews: 699,
    about: 'The 1912 cypress-wood station of the Alishan Forest Railway in Chiayi city, the old starting point for the mountain line.',
  },
  '嘉義市立美術館': {
    name: 'Chiayi Art Museum (嘉義市立美術館)',
    rating: 4.5,
    reviews: 5751,
    about: 'A 1936 tobacco and alcohol office restored into a bright art museum with a café, focusing on Chiayi’s painters.',
    good: ['Museums in Taiwan are usually closed on Mondays — 29 Nov is a Sunday, so it should be open.'],
  },
  '嵩茂渡假中心': {
    name: '嵩茂渡假中心 (Song Mao resort)',
    rating: 3.1,
    reviews: 384,
    about: 'Mountain lodge in Leye village in the Shizhuo tea area, next to Saiji Tea House and a few minutes from the Mist Trail.',
  },
  '霧之道 石棹': {
    name: 'Mist Trail, Shizhuo (霧之道)',
    q: 'Mist Trail Shizhuo',
    rating: 4.6,
    reviews: 655,
    about:
      'One of the Shizhuo trail network (Mist Trail, Tea Trail, Sunset Trail, Cedar Trail): short, mostly flat paths through Japanese cedar and between tea terraces at about 1,300 m. Afternoon fog often rolls through, hence the name.',
  },
  '奮起湖 杉林步道': {
    name: 'Fenqihu Cedar Boardwalk Trail (杉林步道)',
    q: 'Fenqihu Cedar Boardwalk Trail',
    rating: 4.6,
    reviews: 559,
    about: 'A short boardwalk loop through tall Japanese cedar right behind Fenqihu old street. The nearby Gaozaikan old trail (糕仔崁古道, 4.3★) is a stone path through bamboo.',
  },
  'Saiji Tea House': {
    name: 'Saiji Tea House',
    rating: 4.3,
    reviews: 1083,
    about: 'Tea house and restaurant in Leye village in the Shizhuo tea area, with views over the tea farms.',
    good: ['Opening hours weren’t checked — confirm before you go.'],
  },
  '阿里山 巨木群棧道': {
    name: 'Giant Tree Cluster Trail (巨木群棧道)',
    q: 'Giant Tree Cluster Trail Alishan',
    rating: 4.8,
    reviews: 2062,
    about:
      "Alishan's most famous walk: boardwalks through a grove of 1,000–2,000-year-old red cypress trees that survived the logging era, linking Shenmu station, Shouzhen Temple (4.4★) and the Sister Ponds.",
  },
  '文武廟 日月潭': {
    name: 'Wenwu Temple (文武廟)',
    rating: 4.7,
    reviews: 4627,
    about: 'A large temple on the north shore of Sun Moon Lake honouring Confucius and Guan Yu, with a famous lake view from its top terrace.',
  },
  'Ningxia Night Market': {
    name: 'Ningxia Night Market (寧夏夜市)',
    about: 'A compact, food-focused night market in Datong district, Taipei, known for oyster omelettes, taro balls and braised pork rice.',
  },
  'Taoyuan International Airport': {
    name: 'Taiwan Taoyuan International Airport',
    rating: 4.4,
    reviews: 35344,
    about:
      "Taiwan's main international airport, about 40 km west of Taipei. Scoot uses Terminal 1. The Airport MRT links both terminals to Taipei Main Station in about 35–40 minutes on the purple Express train.",
    good: ['24-hour convenience stores and ATMs in arrivals.', 'Telecom counters (Chunghwa, Taiwan Mobile, FarEasTone) sell tourist SIMs in arrivals.'],
  },
  桃園市大園區中正東路309號: {
    name: 'IWS Car Rental, Dayuan (near Taoyuan Airport)',
    q: 'IWS Car Rental Taoyuan',
    rating: 4.5,
    reviews: 217,
    about:
      'Your rental company’s office at No. 309, Zhongzheng E. Rd., Dayuan Dist., about 10 minutes from the airport terminals. They offer free pick-up from the airport: call 03-3862555 when you land. You need your home licence, an International Driving Permit (1949 Geneva type), your passport and a credit card. Taiwan drives on the right and freeways use eTag tolls.',
    good: ['From a foreign SIM dial +886 3 386 2555.', 'Check the car has an eTag sticker for freeway tolls.', 'Take photos of the car before you drive off.'],
  },
  'Ali-Shan Dengshan Hotel': {
    name: 'Ali-Shan Dengshan Hotel (阿里山登山大飯店)',
    rating: 2.8,
    reviews: 635,
    about: 'Hotel in Alishan village inside the forest recreation area, close to Alishan station.',
  },
  'Taipei Main Station': {
    name: 'Taipei Main Station',
    about:
      "Taipei's central transport hub: MRT red and blue lines, the Taiwan High Speed Rail, regular trains and the Airport MRT all meet here. The concourse has food courts and coin lockers for luggage.",
    good: ['Coin lockers take EasyCard; large lockers fill up by midday.'],
  },
  阜杭豆漿: {
    name: 'Fu Hang Soy Milk (阜杭豆漿)',
    rating: 4.1,
    reviews: 24675,
    about:
      "Taipei's most famous breakfast shop, on the second floor of the Hua Shan market building by Shandao Temple station. Known for thick flaky shaobing flatbreads, youtiao and warm sweet or salty soy milk. Michelin Bib Gourmand listed.",
    good: ['Queues often run down the stairs — go early.', 'Closed on Mondays; cash only.'],
  },
  'Longshan Temple Taipei': {
    name: 'Lungshan Temple (艋舺龍山寺)',
    rating: 4.5,
    reviews: 49956,
    about:
      "Built in 1738 by settlers from Fujian, this is Taipei's best-known temple, dedicated mainly to Guanyin with many other deities. Rebuilt several times, it is famous for its carved dragon pillars, roof decorations and busy daily worship.",
    good: ['Free entry. Be respectful during prayers and don’t step on the raised door thresholds.', 'Longshan Temple MRT station (blue line) is right next to it.'],
  },
  'Bopiliao Historic Block': {
    name: 'Bopiliao Historic Block (剝皮寮)',
    rating: 4.2,
    reviews: 13929,
    about:
      "A restored street of red-brick shophouses from the Qing and Japanese eras, a few minutes' walk from Longshan Temple. Free to wander; some buildings host small exhibitions about old Wanhua.",
    good: ['Free; the exhibition halls close on Mondays.'],
  },
  Ximending: {
    name: 'Ximending (西門町)',
    q: 'Ximending Walking District',
    rating: 4.4,
    reviews: 15754,
    about:
      "Taipei's youth and shopping district: pedestrian streets full of street food, bubble tea, sneaker shops and street performers. Ay-Chung flour-rice noodles (阿宗麵線, 4.1★ with about 18,700 Google reviews) are the classic stand-up snack here.",
    good: ['Ximen MRT station (blue and green lines), exit 6.'],
  },
  'Dihua Street': {
    name: 'Dihua Street (迪化街)',
    rating: 4.4,
    reviews: 19186,
    about:
      "The heart of Dadaocheng, Taipei's 19th-century trading port. The long street is lined with restored shophouses selling dried fruit, tea, herbs and fabric, with cafés and design shops upstairs. The small Xiahai City God Temple is famous among people praying for love.",
    good: ['Many shops close on Sundays or around 19:00.', 'Good place for souvenirs: dried mango, tea, pineapple cakes.'],
  },
  'Dadaocheng Wharf': {
    name: 'Dadaocheng Wharf (大稻埕碼頭)',
    rating: 4.4,
    reviews: 560,
    about:
      'A riverside park on the Tamsui River at the end of the old town, with container bars and food stalls (open in the evenings) and wide sunset views over the water.',
  },
  'Shilin Night Market': {
    name: 'Shilin Night Market (士林夜市)',
    rating: 4.1,
    reviews: 21460,
    about:
      "Taipei's biggest and best-known night market, spread over the streets around Jiantan station and an underground food court. Famous for giant fried chicken cutlets, oyster omelettes, pepper buns and stinky tofu, plus games and cheap shopping.",
    good: ['Get off at Jiantan station (red line), not Shilin.', 'Most stalls open from about 16:00 until midnight.'],
  },
  'HSR Chiayi Station': {
    name: 'HSR Chiayi Station',
    rating: 4.3,
    reviews: 3571,
    about:
      "Chiayi's high-speed rail station, in Taibao about 15 km west of the city. Rental car companies have desks or nearby offices, and buses go to the city and Alishan.",
  },
  'Fenqihu Station': {
    name: 'Fenqihu (奮起湖) — station & old street',
    q: 'Fenqihu Old Street',
    rating: 4.2,
    reviews: 32546,
    about:
      'A mountain village at about 1,400 m, halfway up the Alishan Forest Railway. The old street next to the station is known for its railway bento boxes, mountain snacks and a garage with old steam locomotives. The station itself is rated 4.5★ (about 1,100 reviews).',
    good: ['Railway bento is sold from late morning until it runs out.', 'Paid parking above the village gets busy at weekends.'],
  },
  'Alishan Forest Recreation Area': {
    name: 'Alishan National Forest Recreation Area',
    rating: 4.6,
    reviews: 43035,
    about:
      'A high-mountain forest area at about 2,200 m, famous for thousand-year-old red cypress trees, misty trails, the forest railway and sunrise over a sea of clouds. Hotels, restaurants and a 7-Eleven are in the small village by Alishan station.',
    good: ['Entry ticket and parking are paid at the gate (keep the ticket for your stay).', 'Nights in late November can be close to 0–5 °C — pack warm layers.'],
  },
  'Alishan Sister Ponds': {
    name: 'Sister Ponds (姊妹潭)',
    rating: 4.6,
    reviews: 1802,
    about:
      'Two small ponds surrounded by cypress forest, linked to a local legend about two sisters. They sit on the giant-trees loop trail, an easy walk on boardwalks from Alishan village.',
  },
  'Zhaoping Station Alishan': {
    name: 'Zhaoping Station (沼平車站)',
    q: 'Chaoping Station Alishan',
    rating: 4.6,
    reviews: 649,
    about:
      "A small wooden station on the Alishan forest railway, a short walk above the village. The park around it is one of the easiest places to see the sunset, and it's the start of the Zhushan sunrise line.",
  },
  'Zhushan Sunrise Viewing Platform': {
    name: 'Zhushan Sunrise Observation Deck (祝山觀日平台)',
    rating: 4.6,
    reviews: 5532,
    about:
      "Alishan's classic sunrise spot at about 2,450 m, facing Yushan (Jade Mountain), Taiwan's highest peak. On good days the sun rises over a sea of clouds. Reach it on the early sunrise train or by walking up the trail.",
    good: ['The sunrise train timetable is posted the evening before at the station and hotels.', 'Very cold before dawn — bring a jacket, hat and gloves.'],
  },
  'Alishan Station': {
    name: 'Alishan Station (阿里山車站)',
    q: 'Alishan Train Station',
    rating: 4.6,
    reviews: 1090,
    about:
      'The main station of the Alishan Forest Railway, in the village. Trains for the Shenmu, Zhushan and Zhaoping lines leave from here. The village around it has restaurants, a visitor centre and a convenience store.',
  },
  'Shenmu Station Alishan': {
    name: 'Shenmu Station (神木車站)',
    q: 'Sacred Tree Station Alishan',
    rating: 4.8,
    reviews: 645,
    about:
      'A short forest-railway ride from Alishan station to the site of the old Alishan Sacred Tree. From here the giant-trees boardwalk leads back towards the village through ancient red cypress.',
  },
  'Tataka Visitor Center': {
    name: 'Tataka Visitor Center (塔塔加遊客中心)',
    rating: 4.4,
    reviews: 2885,
    about:
      'The western entrance to Yushan National Park, at about 2,600 m on the New Central Cross-Island Highway. Short trails nearby lead to views of Yushan and the Lulin Sacred Tree.',
    good: ['Closes in the late afternoon; weather changes quickly up here.'],
  },
  'Shuishe Visitor Center': {
    name: 'Shuishe Visitor Center, Sun Moon Lake',
    about:
      "The Sun Moon Lake National Scenic Area visitor centre in Shuishe village, the lake's main town with hotels, restaurants, bike rental and the main boat pier.",
  },
  'Shuishe Pier': {
    name: 'Shuishe Pier (水社碼頭)',
    rating: 4.4,
    reviews: 15279,
    about:
      'The main pier of Sun Moon Lake. Boats leave from here for Xuanguang Temple and Ita Thao, and the lakeside boardwalk starts nearby.',
    good: ['A day boat pass covers the Shuishe – Xuanguang – Ita Thao loop.'],
  },
  'Xuanguang Temple': {
    name: 'Xuanguang Temple (玄光寺)',
    rating: 4.3,
    reviews: 8538,
    about:
      "A small temple on a point of land on the lake's south shore, dedicated to the monk Xuanzang. Its pier is a boat stop; the tea eggs sold next to it are famous.",
  },
  'Sun Moon Lake Ropeway': {
    name: 'Sun Moon Lake Ropeway (日月潭纜車)',
    rating: 4.4,
    reviews: 1370,
    about:
      'A cable car from the lake shore near Ita Thao over the hills to the Formosan Aboriginal Culture Village, with wide views of the lake. The ride takes about 7 minutes each way.',
    good: ['Can close in strong wind; check before going.'],
  },
  'Ita Thao Pier': {
    name: 'Ita Thao Pier (伊達邵碼頭)',
    q: 'Yidashao Wharf',
    rating: 4.4,
    reviews: 1218,
    about: "Ita Thao village's boat pier on the east side of the lake, a calm spot for sunset across the water.",
  },
  'Ita Thao Night Market': {
    name: 'Ita Thao shopping street (伊達邵老街)',
    q: '伊達邵老街',
    rating: 4.2,
    reviews: 13484,
    about:
      "Ita Thao is the village of the Thao people, the lake's Indigenous community. Its old street has grilled meats, millet wine, mochi and souvenir shops, and stays lively into the evening.",
  },
  'Xiangshan Visitor Center': {
    name: 'Xiangshan Visitor Center (向山遊客中心)',
    rating: 4.5,
    reviews: 21300,
    about:
      'A striking concrete building by Japanese architect Norihiko Dan, with a reflecting pool and lake views. It is on the Xiangshan cycle path, one of the most scenic lakeside bike routes in Taiwan.',
  },
  'HSR Taichung Station': {
    name: 'HSR Taichung Station',
    about:
      'Taichung’s high-speed rail station in Wuri, linked to the city by regular trains (Xinwuri station) and MRT. Rental car companies have offices here.',
  },
  宮原眼科: {
    name: 'Miyahara (宮原眼科)',
    rating: 4.3,
    reviews: 33070,
    about:
      'A 1927 eye clinic in central Taichung, restored by the Dawn Cake company as a dessert and gift shop. Known for its Harry Potter-like interior, ice cream with toppings and pineapple cakes in beautiful boxes.',
    good: ['The ice cream queue is shortest right at opening.'],
  },
  'Fengjia Night Market': {
    name: 'Fengchia Night Market (逢甲夜市)',
    rating: 4.3,
    reviews: 98117,
    about:
      "One of Taiwan's largest night markets, next to Feng Chia University in Taichung. Known for inventing many snacks that spread around Taiwan, like big fried chicken and cheese potatoes.",
    good: ['Busiest from about 19:00; weekends are very crowded.'],
  },
  清水服務區: {
    name: 'Qingshui Service Area (清水服務區)',
    rating: 4.3,
    reviews: 110098,
    about:
      "Taiwan's most famous freeway rest stop, on Freeway 3 north of Taichung. It looks like a modern building in a park, with a big food court, local snacks and views towards the coast.",
  },
  'Rainbow Village Taichung': {
    name: 'Rainbow Village (彩虹眷村)',
    rating: 4.2,
    reviews: 34495,
    about:
      'A former military dependents’ village saved from demolition by "Rainbow Grandpa" Huang Yung-fu, who covered its walls with bright paintings of people and animals. It is small: 30–45 minutes is enough.',
  },
  台中第二市場: {
    name: 'Taichung Second Market (台中第二市場)',
    rating: 4.2,
    reviews: 22182,
    about:
      'A market from 1917 with a hexagonal layout in central Taichung. Old-school stalls sell braised pork rice, radish cake, beef soup and other local food, most of them in the morning to early afternoon.',
  },
  'National Taichung Theater': {
    name: 'National Taichung Theater (臺中國家歌劇院)',
    rating: 4.6,
    reviews: 50364,
    about:
      'An opera house by Japanese architect Toyo Ito, opened in 2016, with curved, cave-like walls and no straight columns. Free to walk in, with a rooftop garden and shops.',
  },
  'Chiayi Station': {
    name: 'Chiayi Station (嘉義車站)',
    q: 'Chiayi Railway Station',
    rating: 4.2,
    reviews: 2309,
    about:
      "Chiayi city's main train station, and the lower end of the Alishan Forest Railway. Hotels, breakfast shops and Wenhua Road are a short walk away.",
  },
  'Wenhua Road Night Market Chiayi': {
    name: 'Wenhua Road Night Market (文化路夜市)',
    rating: 4.2,
    reviews: 33334,
    about:
      "Chiayi's main night market, along Wenhua Road near the central fountain roundabout. The city is famous for turkey rice (火雞肉飯); the market also has grilled snacks, fruit juice and dessert stalls.",
  },
};
