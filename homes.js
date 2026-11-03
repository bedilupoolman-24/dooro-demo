// Public demo edition: fictional homes on real Amsterdam streets, illustrations instead of photos.
window.DOORO_CONFIG = {
  edition: 'demo',
  sourceName: null,
  ctaLabel: 'View original listing',
  mapCenter: [4.886, 52.366], mapZoom: 12.3, fitAll: false,
  maxRent: 3000, maxBuy: 900000,
  rentRange: [1000, 4000, 50], buyRange: [250000, 1500000, 25000],
  profileTitle: 'Dooro demo',
  profileText: 'Fictional homes on real Amsterdam streets. Illustrations stand in for the agents’ photos.',
  footerNote: 'Demo app: fictional homes, illustrations instead of photos.',
  storeKey: 'dooro.'
};

window.DOORO_HOMES = [
  {id:'h1',mode:'rent',price:1850,street:'Kinkerstraat',area:'Oud-West',lat:52.3663,lng:4.8705,bed:2,m2:68,type:'Apartment',label:'NEW',ago:'2 hours ago',kinds:['exterior','living','kitchen','bedroom'],agent:'Kade & Co Makelaars',interior:'Upholstered',energy:'A',avail:'1 Dec',about:'Bright second-floor apartment with an arched living-room window, an open kitchen and a quiet bedroom at the back.'},
  {id:'h2',mode:'rent',price:2150,street:'Ferdinand Bolstraat',area:'De Pijp',lat:52.3542,lng:4.8918,bed:3,m2:84,type:'Apartment',label:'PRICE REDUCED',ago:'1 day ago',video:true,kinds:['exterior'],agent:'Stoep Wonen',interior:'Upholstered',energy:'B',avail:'Now',about:'Spacious family flat above the market streets, two minutes from Sarphatipark.'},
  {id:'h3',mode:'rent',price:1495,street:'Bos en Lommerweg',area:'Bos en Lommer',lat:52.3797,lng:4.8505,bed:1,m2:52,type:'Studio',ago:'4 days ago',kinds:['living','bedroom','exterior'],agent:'Noordlicht Verhuur',interior:'Furnished',energy:'C',avail:'15 Dec',about:'Compact studio with a sleeping nook and big windows facing west.'},
  {id:'h4',mode:'rent',price:1720,street:'Jan Pieter Heijestraat',area:'Oud-West',lat:52.3622,lng:4.8632,bed:2,m2:61,type:'Apartment',label:'JUST ADDED',ago:'35 min ago',kinds:['exterior','kitchen','living'],agent:'Brug Makelaardij',interior:'Upholstered',energy:'A',avail:'Now',about:'Renovated two-bedroom with a new kitchen and a balcony over the courtyard.'},
  {id:'h5',mode:'rent',price:1980,street:'Van Woustraat',area:'De Pijp',lat:52.3519,lng:4.9010,bed:2,m2:70,type:'Apartment',ago:'3 days ago',kinds:['living','exterior','bedroom'],agent:'Gracht & Gevel',interior:'Upholstered',energy:'B',avail:'1 Jan',about:'Corner apartment with light on two sides and tram stops at the door.'},
  {id:'h6',mode:'rent',price:2400,street:'Leidsegracht',area:'Centrum',lat:52.3651,lng:4.8838,bed:2,m2:75,type:'Canal apartment',label:'NEW',ago:'5 hours ago',kinds:['exterior','living','bedroom','kitchen'],agent:'Polder Partners',interior:'Furnished',energy:'C',avail:'Now',about:'Classic canal-house floor with beamed ceilings and a view over the water.'},
  {id:'h7',mode:'rent',price:1595,street:'Bilderdijkstraat',area:'Oud-West',lat:52.3712,lng:4.8709,bed:1,m2:55,type:'Apartment',ago:'6 days ago',kinds:['exterior','bedroom'],agent:'Kade & Co Makelaars',interior:'Upholstered',energy:'B',avail:'1 Dec',about:'Cosy one-bedroom on a lively street, close to the Foodhallen.'},
  {id:'h8',mode:'rent',price:2050,street:'Rozengracht',area:'Jordaan',lat:52.3741,lng:4.8799,bed:2,m2:66,type:'Apartment',label:'RECENTLY UPDATED',ago:'2 days ago',kinds:['living','kitchen','exterior'],agent:'Stoep Wonen',interior:'Furnished',energy:'A',avail:'Now',about:'Jordaan two-bedroom with a sunny living room and plenty of storage.'},
  {id:'h9',mode:'rent',price:1650,street:'Dapperstraat',area:'Oost',lat:52.3633,lng:4.9282,bed:2,m2:58,type:'Apartment',label:'JUST ADDED',ago:'1 hour ago',video:true,kinds:['exterior'],agent:'Noordlicht Verhuur',interior:'Upholstered',energy:'B',avail:'1 Dec',about:'Two-bedroom next to the Dappermarkt, with a small balcony.'},
  {id:'h10',mode:'rent',price:2900,street:'Westerstraat',area:'Jordaan',lat:52.3779,lng:4.8827,bed:3,m2:92,type:'Maisonette',ago:'9 days ago',kinds:['exterior','living','bedroom','kitchen'],agent:'Brug Makelaardij',interior:'Upholstered',energy:'A',avail:'1 Feb',outdoor:'Roof terrace',about:'Split-level maisonette with a roof terrace and three proper bedrooms.'},
  {id:'h11',mode:'buy',price:425000,street:'Javastraat',area:'Indische Buurt',lat:52.3627,lng:4.9395,bed:2,m2:71,type:'Apartment',label:'JUST ADDED',ago:'3 hours ago',kinds:['exterior','kitchen','living','bedroom'],agent:'Gracht & Gevel',energy:'B',outdoor:'Balcony',about:'Freehold two-bedroom with a south-facing balcony and a storage unit.'},
  {id:'h12',mode:'buy',price:689000,street:'Nassaukade',area:'Oud-West',lat:52.3688,lng:4.8768,bed:3,m2:98,type:'Canal house floor',label:'RECENTLY UPDATED',ago:'4 days ago',kinds:['exterior','living','bedroom'],agent:'Polder Partners',energy:'C',outdoor:'Garden',about:'Wide canal-side floor with original details and an open-plan kitchen.'},
  {id:'h13',mode:'buy',price:549000,street:'Albert Cuypstraat',area:'De Pijp',lat:52.3557,lng:4.8946,bed:2,m2:74,type:'Apartment',label:'PRICE REDUCED',ago:'12 days ago',kinds:['living','exterior','kitchen'],agent:'Kade & Co Makelaars',energy:'A',outdoor:'Roof terrace',about:'Top-floor apartment with a roof terrace above the Albert Cuyp market.'},
  {id:'h14',mode:'buy',price:379000,street:'Buiksloterweg',area:'Noord',lat:52.3868,lng:4.9030,bed:1,m2:56,type:'Apartment',label:'NEW',ago:'6 hours ago',video:true,kinds:['exterior'],agent:'Stoep Wonen',energy:'A',outdoor:'Balcony',about:'Waterside one-bedroom, a short ferry ride from Centraal.'},
  {id:'h15',mode:'buy',price:825000,street:'Beethovenstraat',area:'Zuid',lat:52.3466,lng:4.8772,bed:3,m2:112,type:'Apartment',ago:'8 days ago',kinds:['exterior','living','kitchen','bedroom'],agent:'Brug Makelaardij',energy:'B',outdoor:'Garden',about:'Large family apartment in Zuid with a garden at the back.'},
  {id:'h16',mode:'buy',price:465000,street:'Overtoom',area:'Oud-West',lat:52.3609,lng:4.8705,bed:2,m2:64,type:'Apartment',ago:'2 days ago',kinds:['exterior','bedroom','living'],agent:'Noordlicht Verhuur',energy:'C',outdoor:'Balcony',about:'Practical two-bedroom by the Vondelpark entrance.'}
];
