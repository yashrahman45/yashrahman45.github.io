// Sample data. Used by the store when Firebase is not configured, and by the admin "Import sample catalogue" button.
export const SEED = {
 "settings": {
  "announcements": [
   "Free delivery over ৳3,000",
   "Cash on delivery, nationwide",
   "Code SYZYGY10 · 10% off your first order"
  ],
  "heroEyebrow": "Syzygy / AW26 / Accessories for after dark",
  "heroLine1": "Small metal.",
  "heroLine2": "Loud shadow.",
  "heroCopy": "Belts, rings, chains and piercings for people who dress after dark. Shipped across Bangladesh, cash on delivery.",
  "heroTag": "Eclipse drop · now live",
  "freeShip": 3000,
  "shipDhaka": 70,
  "shipOther": 130,
  "promoCode": "SYZYGY10",
  "promoPct": 10,
  "bkashNo": "",
  "nagadNo": "",
  "siteUrl": "",
  "ogImage": "",
  "dropEyebrow": "Limited drop · 05 pieces",
  "dropTitle": "Drop 03\nEclipse",
  "dropLead": "Five pieces built around one mark. When they sell out, they are gone.",
  "dropEnds": "2026-10-31T23:59:59+06:00",
  "aboutHeadline": "Accessories for people who don’t blend in.",
  "aboutP1": "Syzygy started as a one-person accessories page for people who found everything on the high street too quiet. We pick pieces for weight, edge and finish, then sell them at prices that don’t need a reason.",
  "aboutP2": "We believe in individuality, self-expression and breaking conventions. Wear one piece, or wear all of them. Either way it should look like you chose it.",
  "instagram": "https://www.instagram.com/syzygy.bd/",
  "whatsapp": "",
  "email": "",
  "imgDark": "",
  "imgSignature": "",
  "imgAfterdark": "",
  "imgDrop": "",
  "imgStyles": "",
  "policy_shipping": "We deliver across Bangladesh.\nInside Dhaka: ৳70, 1–2 working days.\nOutside Dhaka: ৳130, 3–5 working days.\nFree delivery on orders over ৳3,000.\nCash on delivery is available everywhere we ship.",
  "policy_returns": "Unworn items in original packaging can be exchanged within 7 days of delivery.\nMessage us on Instagram or WhatsApp with your order number.\nFake piercings and earrings are final sale for hygiene reasons.\nDamaged or wrong items are replaced at no cost.",
  "policy_sizing": "Rings: measure the inside diameter of a ring that fits. US 6 is 16.5 mm, US 7 is 17.3 mm, US 8 is 18.2 mm, US 9 is 19.0 mm, US 10 is 19.8 mm.\nBelts: pick your trouser waist size. S fits 28–32 in, M fits 32–36 in, L fits 36–40 in.\nBracelets: S fits wrists up to 16 cm, M up to 18 cm, L up to 20 cm.",
  "policy_privacy": "We collect only what an order needs: name, phone, address and email. We use it to deliver your order and to reply to you.\nWe do not sell your details. Ask us to delete them any time.",
  "policy_terms": "Prices are in Bangladeshi taka. We confirm every order by phone or message before dispatch.\nPhotos are close to the real product. Small differences in colour and finish can happen."
 },
 "categories": [
  {
   "id": "belts",
   "name": "Belts",
   "desc": "Studs, chains and hardware for the waist.",
   "rep": "umbra-studded-belt",
   "image": "",
   "order": 0
  },
  {
   "id": "fake-piercing",
   "name": "Fake Piercing",
   "desc": "Clip-on piercings. No hole, no commitment.",
   "rep": "nocturne-septum",
   "image": "",
   "order": 1
  },
  {
   "id": "glasses",
   "name": "Glasses",
   "desc": "Dark lenses and sharp frames.",
   "rep": "void-shield",
   "image": "",
   "order": 2
  },
  {
   "id": "jewelry",
   "name": "Jewelry",
   "desc": "Earrings and small statements.",
   "rep": "dagger-drop-earrings",
   "image": "",
   "order": 3
  },
  {
   "id": "bracelets",
   "name": "Bracelets",
   "desc": "Cuffs, links and beads.",
   "rep": "heavy-link-bracelet",
   "image": "",
   "order": 4
  },
  {
   "id": "rings",
   "name": "Rings",
   "desc": "Signets, spikes and bands.",
   "rep": "eclipse-signet",
   "image": "",
   "order": 5
  },
  {
   "id": "necklaces",
   "name": "Necklaces",
   "desc": "Chains with weight.",
   "rep": "iron-cross-chain",
   "image": "",
   "order": 6
  },
  {
   "id": "accessories",
   "name": "Accessories",
   "desc": "Chains, pins and clips.",
   "rep": "wallet-chain",
   "image": "",
   "order": 7
  }
 ],
 "styles": [
  {
   "id": "gothic",
   "name": "Gothic",
   "desc": "Cold metal, long shadows.",
   "rep": "iron-cross-chain",
   "image": "",
   "order": 0
  },
  {
   "id": "punk",
   "name": "Punk",
   "desc": "Spikes, pins and bad intentions.",
   "rep": "spike-crown-ring",
   "image": "",
   "order": 1
  },
  {
   "id": "street",
   "name": "Street",
   "desc": "Heavy chains for everyday fits.",
   "rep": "wallet-chain",
   "image": "",
   "order": 2
  },
  {
   "id": "dark",
   "name": "Dark",
   "desc": "All black, no explanation.",
   "rep": "blackout-band",
   "image": "",
   "order": 3
  },
  {
   "id": "y2k",
   "name": "Y2K",
   "desc": "Shiny, chunky, a little loud.",
   "rep": "void-shield",
   "image": "",
   "order": 4
  },
  {
   "id": "alternative",
   "name": "Alternative",
   "desc": "Off-centre pieces with a point of view.",
   "rep": "four-point-star-chain",
   "image": "",
   "order": 5
  },
  {
   "id": "minimal",
   "name": "Minimal",
   "desc": "One detail, placed well.",
   "rep": "twin-band-ring",
   "image": "",
   "order": 6
  },
  {
   "id": "statement",
   "name": "Statement",
   "desc": "Pieces that arrive before you do.",
   "rep": "heavy-bar-chain",
   "image": "",
   "order": 7
  }
 ],
 "products": [
  {
   "id": "umbra-studded-belt",
   "name": "Umbra Studded Belt",
   "cat": "belts",
   "price": 1450,
   "was": 1850,
   "stock": 14,
   "badge": "best",
   "styles": [
    "punk",
    "dark"
   ],
   "material": "Vegan leather, zinc alloy studs",
   "finish": "black",
   "art": "belt",
   "artVar": "studs",
   "desc": "Cone studs along a stiff matte strap. Sits low on the hip and stays loud over denim or tailoring.",
   "drop": false,
   "options": {
    "label": "Size",
    "vals": [
     "S · 28–32 in",
     "M · 32–36 in",
     "L · 36–40 in"
    ]
   },
   "active": true,
   "order": 0,
   "images": []
  },
  {
   "id": "eclipse-chain-belt",
   "name": "Eclipse Chain Belt",
   "cat": "belts",
   "price": 1290,
   "was": 0,
   "stock": 8,
   "badge": "new",
   "styles": [
    "gothic",
    "street"
   ],
   "material": "Stainless steel links, zinc alloy clasp",
   "finish": "silver",
   "art": "belt",
   "artVar": "chain",
   "desc": "Heavy curb links with a plate clasp. It hangs, it clinks, people hear you coming.",
   "drop": true,
   "options": {
    "label": "Size",
    "vals": [
     "S · 28–32 in",
     "M · 32–36 in",
     "L · 36–40 in"
    ]
   },
   "active": true,
   "order": 1,
   "images": []
  },
  {
   "id": "grommet-line-belt",
   "name": "Grommet Line Belt",
   "cat": "belts",
   "price": 980,
   "was": 1200,
   "stock": 21,
   "badge": "",
   "styles": [
    "y2k",
    "street"
   ],
   "material": "Canvas-backed PU, steel eyelets",
   "finish": "black",
   "art": "belt",
   "artVar": "grommet",
   "desc": "A row of oversized eyelets on a flat black strap. Easy to wear, hard to ignore.",
   "drop": false,
   "options": {
    "label": "Size",
    "vals": [
     "S · 28–32 in",
     "M · 32–36 in",
     "L · 36–40 in"
    ]
   },
   "active": true,
   "order": 2,
   "images": []
  },
  {
   "id": "o-ring-harness-belt",
   "name": "O-Ring Harness Belt",
   "cat": "belts",
   "price": 1650,
   "was": 0,
   "stock": 0,
   "badge": "",
   "styles": [
    "alternative",
    "statement"
   ],
   "material": "Vegan leather, steel O-ring",
   "finish": "black",
   "art": "belt",
   "artVar": "harness",
   "desc": "Two crossing straps locked through a single ring. Wear it over a shirt or a coat.",
   "drop": false,
   "options": {
    "label": "Size",
    "vals": [
     "S · 28–32 in",
     "M · 32–36 in",
     "L · 36–40 in"
    ]
   },
   "active": true,
   "order": 3,
   "images": []
  },
  {
   "id": "nocturne-septum",
   "name": "Nocturne Septum Clip",
   "cat": "fake-piercing",
   "price": 380,
   "was": 480,
   "stock": 40,
   "badge": "best",
   "styles": [
    "gothic",
    "dark"
   ],
   "material": "Surgical steel, spring clip",
   "finish": "black",
   "art": "piercing",
   "artVar": "septum",
   "desc": "A clip-on horseshoe that looks pierced and isn’t. No hole needed, no pain.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 4,
   "images": []
  },
  {
   "id": "orbit-hoop-set",
   "name": "Orbit Hoop Set (×3)",
   "cat": "fake-piercing",
   "price": 450,
   "was": 0,
   "stock": 33,
   "badge": "new",
   "styles": [
    "y2k",
    "minimal"
   ],
   "material": "Surgical steel",
   "finish": "silver",
   "art": "piercing",
   "artVar": "hoop",
   "desc": "Three clip-on hoops in graded sizes. Stack them on one ear or split them.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 5,
   "images": []
  },
  {
   "id": "ear-cuff-chain",
   "name": "Ear Cuff & Chain",
   "cat": "fake-piercing",
   "price": 520,
   "was": 650,
   "stock": 12,
   "badge": "",
   "styles": [
    "punk",
    "statement"
   ],
   "material": "Brass, rhodium plated",
   "finish": "silver",
   "art": "piercing",
   "artVar": "cuff",
   "desc": "A cuff that grips the upper ear with a loose chain looping back. No piercing.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 6,
   "images": []
  },
  {
   "id": "spike-barbell-clip",
   "name": "Spike Barbell Clip",
   "cat": "fake-piercing",
   "price": 340,
   "was": 0,
   "stock": 25,
   "badge": "",
   "styles": [
    "punk",
    "alternative"
   ],
   "material": "Steel, acrylic balls",
   "finish": "silver",
   "art": "piercing",
   "artVar": "barbell",
   "desc": "A clip-on barbell for lip, brow or ear. Looks sharp, comes off in a second.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 7,
   "images": []
  },
  {
   "id": "void-shield",
   "name": "Void Shield Shades",
   "cat": "glasses",
   "price": 1180,
   "was": 1480,
   "stock": 9,
   "badge": "best",
   "styles": [
    "y2k",
    "statement"
   ],
   "material": "Acetate frame, UV400 lenses",
   "finish": "black",
   "art": "glasses",
   "artVar": "shield",
   "desc": "One wide lens that wraps the whole face. UV400 protection, zero subtlety.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 8,
   "images": []
  },
  {
   "id": "slim-eclipse",
   "name": "Slim Eclipse Frames",
   "cat": "glasses",
   "price": 890,
   "was": 0,
   "stock": 17,
   "badge": "new",
   "styles": [
    "minimal",
    "dark"
   ],
   "material": "Metal frame, UV400 lenses",
   "finish": "black",
   "art": "glasses",
   "artVar": "slim",
   "desc": "Thin rectangular lenses in a hairline frame. Sharp from the front, light on the nose.",
   "drop": true,
   "options": null,
   "active": true,
   "order": 9,
   "images": []
  },
  {
   "id": "round-noir",
   "name": "Round Noir",
   "cat": "glasses",
   "price": 760,
   "was": 950,
   "stock": 22,
   "badge": "",
   "styles": [
    "alternative",
    "gothic"
   ],
   "material": "Acetate frame, UV400 lenses",
   "finish": "black",
   "art": "glasses",
   "artVar": "round",
   "desc": "Small round lenses in a heavy black frame. A little vintage, a little gloomy.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 10,
   "images": []
  },
  {
   "id": "razor-cat-eye",
   "name": "Razor Cat-Eye",
   "cat": "glasses",
   "price": 940,
   "was": 0,
   "stock": 5,
   "badge": "",
   "styles": [
    "punk",
    "statement"
   ],
   "material": "Acetate frame, UV400 lenses",
   "finish": "black",
   "art": "glasses",
   "artVar": "sharp",
   "desc": "Angled lenses that cut upward at the corners. Only a few pairs per batch.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 11,
   "images": []
  },
  {
   "id": "dagger-drop-earrings",
   "name": "Dagger Drop Earrings",
   "cat": "jewelry",
   "price": 620,
   "was": 0,
   "stock": 18,
   "badge": "",
   "styles": [
    "gothic",
    "dark"
   ],
   "material": "Stainless steel, hypoallergenic hooks",
   "finish": "silver",
   "art": "jewelry",
   "artVar": "dagger",
   "desc": "Long blades that swing when you turn your head. Sold as a pair.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 12,
   "images": []
  },
  {
   "id": "inverted-cross-studs",
   "name": "Inverted Cross Earrings",
   "cat": "jewelry",
   "price": 480,
   "was": 600,
   "stock": 30,
   "badge": "best",
   "styles": [
    "gothic",
    "punk"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "jewelry",
   "artVar": "cross",
   "desc": "Small inverted crosses on short drops. Sold as a pair.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 13,
   "images": []
  },
  {
   "id": "safety-pin-earrings",
   "name": "Safety Pin Earrings",
   "cat": "jewelry",
   "price": 420,
   "was": 0,
   "stock": 44,
   "badge": "new",
   "styles": [
    "punk",
    "street"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "jewelry",
   "artVar": "pin",
   "desc": "Oversized safety pins worn through the lobe. Sold as a pair.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 14,
   "images": []
  },
  {
   "id": "chain-dangle-pair",
   "name": "Chain Dangle Pair",
   "cat": "jewelry",
   "price": 560,
   "was": 0,
   "stock": 11,
   "badge": "",
   "styles": [
    "alternative",
    "y2k"
   ],
   "material": "Brass, rhodium plated",
   "finish": "silver",
   "art": "jewelry",
   "artVar": "chain",
   "desc": "Three loose chains of different lengths ending in a ball. Sold as a pair.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 15,
   "images": []
  },
  {
   "id": "heavy-link-bracelet",
   "name": "Heavy Link Bracelet",
   "cat": "bracelets",
   "price": 780,
   "was": 980,
   "stock": 16,
   "badge": "best",
   "styles": [
    "street",
    "dark"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "bracelet",
   "artVar": "chain",
   "desc": "Chunky curb links with a toggle clasp. Weighs enough that you notice it.",
   "drop": false,
   "options": {
    "label": "Size",
    "vals": [
     "S",
     "M",
     "L"
    ]
   },
   "active": true,
   "order": 16,
   "images": []
  },
  {
   "id": "spiked-cuff",
   "name": "Spiked Cuff",
   "cat": "bracelets",
   "price": 860,
   "was": 0,
   "stock": 7,
   "badge": "",
   "styles": [
    "punk",
    "statement"
   ],
   "material": "Zinc alloy, steel studs",
   "finish": "silver",
   "art": "bracelet",
   "artVar": "spiked",
   "desc": "A wide cuff ringed with cone spikes. Adjust it by bending the opening.",
   "drop": false,
   "options": {
    "label": "Size",
    "vals": [
     "S",
     "M",
     "L"
    ]
   },
   "active": true,
   "order": 17,
   "images": []
  },
  {
   "id": "orbit-bead-bracelet",
   "name": "Orbit Bead Bracelet",
   "cat": "bracelets",
   "price": 520,
   "was": 0,
   "stock": 29,
   "badge": "new",
   "styles": [
    "minimal",
    "y2k"
   ],
   "material": "Steel beads, elastic cord",
   "finish": "silver",
   "art": "bracelet",
   "artVar": "beads",
   "desc": "Polished steel beads in two sizes on stretch cord. Stacks with anything.",
   "drop": false,
   "options": {
    "label": "Size",
    "vals": [
     "S",
     "M",
     "L"
    ]
   },
   "active": true,
   "order": 18,
   "images": []
  },
  {
   "id": "blackout-band",
   "name": "Blackout Band",
   "cat": "bracelets",
   "price": 450,
   "was": 560,
   "stock": 35,
   "badge": "",
   "styles": [
    "minimal",
    "dark"
   ],
   "material": "Matte-coated steel",
   "finish": "black",
   "art": "bracelet",
   "artVar": "cuff",
   "desc": "A plain matte cuff with an open back. Goes with everything, shouts at nothing.",
   "drop": false,
   "options": {
    "label": "Size",
    "vals": [
     "S",
     "M",
     "L"
    ]
   },
   "active": true,
   "order": 19,
   "images": []
  },
  {
   "id": "eclipse-signet",
   "name": "Eclipse Signet Ring",
   "cat": "rings",
   "price": 690,
   "was": 850,
   "stock": 19,
   "badge": "best",
   "styles": [
    "gothic",
    "statement"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "ring",
   "artVar": "signet",
   "desc": "A flat signet engraved with three aligned circles, our mark. Heavy on the hand.",
   "drop": true,
   "options": {
    "label": "Size (US)",
    "vals": [
     "6",
     "7",
     "8",
     "9",
     "10"
    ]
   },
   "active": true,
   "order": 20,
   "images": []
  },
  {
   "id": "spike-crown-ring",
   "name": "Spike Crown Ring",
   "cat": "rings",
   "price": 580,
   "was": 0,
   "stock": 13,
   "badge": "new",
   "styles": [
    "punk",
    "statement"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "ring",
   "artVar": "spike",
   "desc": "A band topped with a row of short spikes. Wear it on the index finger and mind your sleeves.",
   "drop": false,
   "options": {
    "label": "Size (US)",
    "vals": [
     "6",
     "7",
     "8",
     "9",
     "10"
    ]
   },
   "active": true,
   "order": 21,
   "images": []
  },
  {
   "id": "twin-band-ring",
   "name": "Twin Band Ring",
   "cat": "rings",
   "price": 520,
   "was": 0,
   "stock": 26,
   "badge": "",
   "styles": [
    "minimal",
    "alternative"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "ring",
   "artVar": "twin",
   "desc": "Two thin bands that cross over each other. Reads as one ring from a distance.",
   "drop": false,
   "options": {
    "label": "Size (US)",
    "vals": [
     "6",
     "7",
     "8",
     "9",
     "10"
    ]
   },
   "active": true,
   "order": 22,
   "images": []
  },
  {
   "id": "chain-link-ring",
   "name": "Chain Link Ring",
   "cat": "rings",
   "price": 480,
   "was": 600,
   "stock": 31,
   "badge": "",
   "styles": [
    "street",
    "y2k"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "ring",
   "artVar": "chain",
   "desc": "A band made of tiny chain links. Flexible, and quiet until it catches light.",
   "drop": false,
   "options": {
    "label": "Size (US)",
    "vals": [
     "6",
     "7",
     "8",
     "9",
     "10"
    ]
   },
   "active": true,
   "order": 23,
   "images": []
  },
  {
   "id": "matte-black-band",
   "name": "Matte Black Band",
   "cat": "rings",
   "price": 450,
   "was": 0,
   "stock": 6,
   "badge": "",
   "styles": [
    "dark",
    "minimal"
   ],
   "material": "Matte-coated steel",
   "finish": "black",
   "art": "ring",
   "artVar": "band",
   "desc": "A plain black band, wide and flat. Only a few left in each size.",
   "drop": false,
   "options": {
    "label": "Size (US)",
    "vals": [
     "6",
     "7",
     "8",
     "9",
     "10"
    ]
   },
   "active": true,
   "order": 24,
   "images": []
  },
  {
   "id": "orbit-pendant-chain",
   "name": "Orbit Pendant Chain",
   "cat": "necklaces",
   "price": 890,
   "was": 0,
   "stock": 15,
   "badge": "new",
   "styles": [
    "gothic",
    "minimal"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "necklace",
   "artVar": "eclipse",
   "desc": "A dark disc ringed in steel with two small bodies either side. The brand in one pendant.",
   "drop": true,
   "options": {
    "label": "Length",
    "vals": [
     "40 cm",
     "45 cm",
     "50 cm"
    ]
   },
   "active": true,
   "order": 25,
   "images": []
  },
  {
   "id": "iron-cross-chain",
   "name": "Iron Cross Chain",
   "cat": "necklaces",
   "price": 960,
   "was": 1200,
   "stock": 10,
   "badge": "best",
   "styles": [
    "gothic",
    "punk"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "necklace",
   "artVar": "cross",
   "desc": "A long cross on a heavy chain. Sits at mid-chest.",
   "drop": false,
   "options": {
    "label": "Length",
    "vals": [
     "40 cm",
     "45 cm",
     "50 cm"
    ]
   },
   "active": true,
   "order": 26,
   "images": []
  },
  {
   "id": "dagger-choker",
   "name": "Dagger Choker",
   "cat": "necklaces",
   "price": 740,
   "was": 0,
   "stock": 20,
   "badge": "",
   "styles": [
    "punk",
    "dark"
   ],
   "material": "Stainless steel",
   "finish": "black",
   "art": "necklace",
   "artVar": "dagger",
   "desc": "A short chain with a single blade hanging from the centre.",
   "drop": false,
   "options": {
    "label": "Length",
    "vals": [
     "40 cm",
     "45 cm",
     "50 cm"
    ]
   },
   "active": true,
   "order": 27,
   "images": []
  },
  {
   "id": "four-point-star-chain",
   "name": "Four-Point Star Chain",
   "cat": "necklaces",
   "price": 820,
   "was": 0,
   "stock": 14,
   "badge": "",
   "styles": [
    "y2k",
    "alternative"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "necklace",
   "artVar": "star",
   "desc": "A sharp four-point star on a fine chain. Nineties shine, darker mood.",
   "drop": false,
   "options": {
    "label": "Length",
    "vals": [
     "40 cm",
     "45 cm",
     "50 cm"
    ]
   },
   "active": true,
   "order": 28,
   "images": []
  },
  {
   "id": "heavy-bar-chain",
   "name": "Heavy Bar Chain",
   "cat": "necklaces",
   "price": 1150,
   "was": 1450,
   "stock": 4,
   "badge": "",
   "styles": [
    "street",
    "statement"
   ],
   "material": "Stainless steel",
   "finish": "silver",
   "art": "necklace",
   "artVar": "bar",
   "desc": "A thick vertical bar on a curb chain. The heaviest piece we make.",
   "drop": false,
   "options": {
    "label": "Length",
    "vals": [
     "40 cm",
     "45 cm",
     "50 cm"
    ]
   },
   "active": true,
   "order": 29,
   "images": []
  },
  {
   "id": "wallet-chain",
   "name": "Wallet Chain",
   "cat": "accessories",
   "price": 780,
   "was": 980,
   "stock": 23,
   "badge": "best",
   "styles": [
    "street",
    "punk"
   ],
   "material": "Stainless steel, steel snap clips",
   "finish": "silver",
   "art": "accessory",
   "artVar": "walletchain",
   "desc": "A swooping chain with snap clips at both ends. Belt loop to back pocket.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 30,
   "images": []
  },
  {
   "id": "safety-pin-set",
   "name": "Safety Pin Set (×6)",
   "cat": "accessories",
   "price": 320,
   "was": 0,
   "stock": 50,
   "badge": "new",
   "styles": [
    "punk",
    "alternative"
   ],
   "material": "Steel",
   "finish": "silver",
   "art": "accessory",
   "artVar": "pins",
   "desc": "Six oversized pins for jackets, bags and hems.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 31,
   "images": []
  },
  {
   "id": "carabiner-clip",
   "name": "Carabiner Clip",
   "cat": "accessories",
   "price": 360,
   "was": 0,
   "stock": 28,
   "badge": "",
   "styles": [
    "street",
    "minimal"
   ],
   "material": "Aluminium alloy",
   "finish": "silver",
   "art": "accessory",
   "artVar": "carabiner",
   "desc": "A small screw-gate carabiner for keys, belt loops and bags.",
   "drop": false,
   "options": null,
   "active": true,
   "order": 32,
   "images": []
  },
  {
   "id": "eclipse-keychain",
   "name": "Eclipse Keychain",
   "cat": "accessories",
   "price": 420,
   "was": 520,
   "stock": 18,
   "badge": "",
   "styles": [
    "dark",
    "y2k"
   ],
   "material": "Zinc alloy, steel ring",
   "finish": "black",
   "art": "accessory",
   "artVar": "keychain",
   "desc": "A black disc charm on a short chain and ring. Fits anywhere a key does.",
   "drop": true,
   "options": null,
   "active": true,
   "order": 33,
   "images": []
  }
 ],
 "reviews": [
  {
   "rating": 5,
   "text": "The strap is stiff and the studs are heavy. Feels like a proper belt, not a costume piece.",
   "productId": "umbra-studded-belt",
   "name": "Sample reviewer",
   "published": true
  },
  {
   "rating": 5,
   "text": "Septum clip stays on all day and nobody could tell it was fake.",
   "productId": "nocturne-septum",
   "name": "Sample reviewer",
   "published": true
  },
  {
   "rating": 4,
   "text": "Frames are lighter than they look. Lenses are properly dark.",
   "productId": "slim-eclipse",
   "name": "Sample reviewer",
   "published": true
  },
  {
   "rating": 5,
   "text": "The signet has real weight. The engraving is sharper than the photos.",
   "productId": "eclipse-signet",
   "name": "Sample reviewer",
   "published": true
  },
  {
   "rating": 4,
   "text": "Chain hangs well at mid-chest. Wish it came in a longer length.",
   "productId": "iron-cross-chain",
   "name": "Sample reviewer",
   "published": true
  },
  {
   "rating": 5,
   "text": "Wallet chain survived a month in my back pocket with no bends.",
   "productId": "wallet-chain",
   "name": "Sample reviewer",
   "published": true
  }
 ]
};
