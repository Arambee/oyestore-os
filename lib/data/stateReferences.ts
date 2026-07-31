import type { StateReference } from "@/lib/types/dashboard";

// The vault's "knowledge panel" layer -- real, factual entries for every
// state/UT that doesn't have a written chapter yet. This is what a state's
// page shows before any creator or community intel exists for it.
export const stateReferences: Record<string, StateReference> = {
  punjab: {
    overview:
      "India's breadbasket, criss-crossed by five rivers and defined by Sikh history, mustard fields, and a hospitality that shows up in the food before anything else.",
    bestTimeToVisit: "October to March, before the summer heat sets in.",
    knownFor: [
      "Golden Temple, Amritsar",
      "Wagah Border ceremony",
      "Bhangra and harvest festivals",
      "Tandoori and dal cuisine",
    ],
    keyRegions: ["Amritsar", "Ludhiana", "Patiala", "Chandigarh border towns"],
    climate: "Hot summers, cold winters, and a short but intense monsoon between July and September.",
    image: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?auto=format&fit=crop&w=1200&q=80",
  },
  haryana: {
    overview:
      "An agricultural heartland ringing Delhi, home to ancient sites tied to the Mahabharata alongside a fast-growing industrial belt in Gurugram and Faridabad.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Kurukshetra's mythological sites",
      "Sultanpur Bird Sanctuary",
      "Surajkund crafts mela",
      "Gurugram's skyline",
    ],
    keyRegions: ["Gurugram", "Kurukshetra", "Panipat", "Faridabad"],
    climate: "Continental - scorching summers, foggy winters, moderate monsoon rainfall.",
    image: "https://images.unsplash.com/photo-1687840466714-c06204b409fc?auto=format&fit=crop&w=1200&q=80",
  },
  "himachal-pradesh": {
    overview:
      "A stack of Himalayan valleys running from pine-forested hill stations to high-altitude desert, built around apple orchards, colonial hill towns, and trekking routes that have drawn travellers for over a century.",
    bestTimeToVisit: "March to June for hill stations, October to February for snow.",
    knownFor: [
      "Shimla's colonial architecture",
      "Manali and the Atal Tunnel route",
      "Spiti Valley's high-altitude desert",
      "Kasol and the Parvati Valley trail",
    ],
    keyRegions: ["Shimla", "Manali", "Dharamshala / McLeod Ganj", "Spiti Valley", "Kullu"],
    climate: "Alpine at altitude, temperate in the valleys; heavy snow above 2,000m through winter.",
    image: "https://images.unsplash.com/photo-1706696435436-200ba23cda35?auto=format&fit=crop&w=1200&q=80",
  },
  uttarakhand: {
    overview:
      "The Himalayas' spiritual doorway - source of the Ganges and Yamuna, home to the Char Dham pilgrim circuit, and a launchpad for treks into some of the range's highest peaks.",
    bestTimeToVisit: "March to June and September to November.",
    knownFor: [
      "Char Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri)",
      "Rishikesh's ghats and rafting",
      "Valley of Flowers",
      "Nainital's lakes and Jim Corbett's tiger reserve",
    ],
    keyRegions: ["Rishikesh & Haridwar", "Nainital", "Mussoorie", "Jim Corbett", "Garhwal & Kumaon"],
    climate: "Cold, snow-bound winters in the hills; hot summers and heavy monsoon rain in the foothills.",
    image: "https://images.unsplash.com/photo-1646153110989-a9a8f03314f3?auto=format&fit=crop&w=1200&q=80",
  },
  "uttar-pradesh": {
    overview:
      "India's most populous state and its historical spine, running from the Taj Mahal at Agra through the ghats of Varanasi to the Buddhist trail at Sarnath and Kushinagar.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Taj Mahal and Agra Fort",
      "Varanasi's ghats and evening aarti",
      "Lucknow's Nawabi cuisine and architecture",
      "Buddhist circuit - Sarnath, Kushinagar",
    ],
    keyRegions: ["Agra", "Varanasi", "Lucknow", "Prayagraj", "Mathura & Vrindavan"],
    climate: "Extreme summers, cool winters with regular fog, monsoon from July to September.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
  rajasthan: {
    overview:
      "A desert state of forts, palaces and painted cities, where every district reads like a different chapter - pink in Jaipur, blue in Jodhpur, gold in Jaisalmer, white in Udaipur.",
    bestTimeToVisit: "October to March, before the desert heat becomes extreme.",
    knownFor: [
      "Jaipur's Amer Fort and City Palace",
      "Jaisalmer's desert forts and camel safaris",
      "Udaipur's lakes and palaces",
      "Pushkar's camel fair",
      "Ranthambore's tigers",
    ],
    keyRegions: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar"],
    climate: "Arid and desert - extreme summer heat, mild winters, very light monsoon.",
    image: "https://images.unsplash.com/photo-1569096610945-1a094be04c74?auto=format&fit=crop&w=1200&q=80",
  },
  delhi: {
    overview:
      "The capital layered across centuries - Mughal-era monuments in Old Delhi sit a few kilometres from the government buildings of Lutyens' Delhi and the malls of the city's southern suburbs.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Red Fort and Jama Masjid",
      "Humayun's Tomb and Qutub Minar",
      "Chandni Chowk's street food",
      "India Gate and Lutyens' Delhi",
    ],
    keyRegions: ["Old Delhi", "Connaught Place / Lutyens' Delhi", "South Delhi", "Dwarka"],
    climate: "Hot summers, cold and often smoggy winters, short but heavy monsoon.",
    image: "https://images.unsplash.com/photo-1705927122615-02dcef3b1465?auto=format&fit=crop&w=1200&q=80",
  },
  chandigarh: {
    overview:
      "India's first planned post-independence city, designed by Le Corbusier in strict grid sectors, known for wide roads, green cover and a modernist civic core unlike anywhere else in the country.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Le Corbusier's Capitol Complex",
      "Rock Garden made from industrial waste",
      "Sukhna Lake",
      "Sector-based city planning",
    ],
    keyRegions: ["Sector 17 (city centre)", "Sukhna Lake area", "Capitol Complex"],
    climate: "Hot summers, cold winters, moderate monsoon - similar to the Punjab plains around it.",
    image: "https://images.unsplash.com/photo-1651910031564-a84d94ee250f?auto=format&fit=crop&w=1200&q=80",
  },
  "jammu-and-kashmir": {
    overview:
      "Valleys, lakes and mountains long called paradise on earth - Srinagar's houseboats and Mughal gardens, Gulmarg's ski slopes, and Jammu's temple-town character further south.",
    bestTimeToVisit: "April to October for the valley, December to February for snow sports in Gulmarg.",
    knownFor: [
      "Dal Lake houseboats, Srinagar",
      "Gulmarg's gondola and ski season",
      "Mughal Gardens",
      "Vaishno Devi pilgrimage, Jammu",
    ],
    keyRegions: ["Srinagar", "Gulmarg", "Pahalgam", "Jammu"],
    climate: "Alpine in the valley with snowy winters; Jammu's plains are hotter and drier.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
  },
  ladakh: {
    overview:
      "A high-altitude cold desert wedged between the Himalayas and the Karakoram, its Buddhist monasteries, turquoise lakes and passes among the highest motorable roads on earth.",
    bestTimeToVisit: "May to September, when the high passes are open.",
    knownFor: [
      "Pangong Tso and Tso Moriri lakes",
      "Hemis and Thiksey monasteries",
      "Khardung La and Chang La passes",
      "Leh's old town",
    ],
    keyRegions: ["Leh", "Nubra Valley", "Pangong Tso", "Zanskar"],
    climate: "Cold desert - very low humidity, freezing winters, short mild summer window.",
    image: "https://images.unsplash.com/photo-1635255506105-b74adbd94026?auto=format&fit=crop&w=1200&q=80",
  },
  "andhra-pradesh": {
    overview:
      "A Bay of Bengal coastline strung between temple towns and hill shrines, anchored by the Tirumala pilgrimage and river deltas that feed some of the south's richest farmland.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Tirumala Venkateswara Temple",
      "Araku Valley's coffee hills",
      "Visakhapatnam's beaches",
      "Godavari and Krishna river deltas",
    ],
    keyRegions: ["Visakhapatnam", "Tirupati", "Vijayawada", "Araku Valley"],
    climate: "Tropical coastal - hot, humid summers, monsoon rain from both southwest and northeast systems.",
    image: "https://images.unsplash.com/photo-1741003412854-bd4b264c4af3?auto=format&fit=crop&w=1200&q=80",
  },
  telangana: {
    overview:
      "A plateau state built around Hyderabad's four-century-old blend of Deccan and Nizami culture, its biryani, pearls and IT skyline sitting a few kilometres from centuries-old forts.",
    bestTimeToVisit: "October to February.",
    knownFor: [
      "Charminar and Golconda Fort",
      "Hyderabadi biryani and Old City food trail",
      "Ramoji Film City",
      "Warangal's Kakatiya-era temples",
    ],
    keyRegions: ["Hyderabad", "Warangal", "Nizamabad", "Bhadrachalam"],
    climate: "Hot, dry summers on the Deccan plateau, moderate monsoon, mild winters.",
    image: "https://images.unsplash.com/photo-1741545979534-02f59c742730?auto=format&fit=crop&w=1200&q=80",
  },
  puducherry: {
    overview:
      "A former French colony where the streets still run on a grid laid out by colonial planners, the White Town's mustard-and-white villas facing a promenade that never quite lost its French accent.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "French Quarter / White Town",
      "Auroville's Matrimandir",
      "Promenade Beach",
      "Paradise Beach backwaters",
    ],
    keyRegions: ["White Town", "Auroville", "Serenity Beach"],
    climate: "Tropical coastal, similar to neighbouring Tamil Nadu - hot with a northeast monsoon peak.",
    image: "https://images.unsplash.com/photo-1569157087866-f4a8e9250605?auto=format&fit=crop&w=1200&q=80",
  },
  lakshadweep: {
    overview:
      "India's smallest union territory, a scatter of coral atolls in the Arabian Sea where lagoons, not roads, connect the islands, and permits are required to protect what's still an unspoiled reef system.",
    bestTimeToVisit: "October to March, outside the monsoon-restricted season.",
    knownFor: [
      "Agatti and Bangaram lagoons",
      "Coral reef diving and snorkelling",
      "Kavaratti's clear-water beaches",
      "Permit-controlled tourism",
    ],
    keyRegions: ["Agatti", "Bangaram", "Kavaratti", "Minicoy"],
    climate: "Equatorial marine - warm and humid year-round, monsoon closes most island access June–September.",
    image: "https://images.unsplash.com/photo-1572431447238-425af66a273b?auto=format&fit=crop&w=1200&q=80",
  },
  "andaman-and-nicobar-islands": {
    overview:
      "A remote archipelago in the Bay of Bengal, closer to Southeast Asia than mainland India, known for reef diving, colonial-era penal history at Port Blair, and beaches that stay genuinely empty.",
    bestTimeToVisit: "November to April.",
    knownFor: [
      "Radhanagar Beach, Havelock",
      "Cellular Jail, Port Blair",
      "Scuba diving at Neil Island",
      "Limestone caves and mud volcanoes",
    ],
    keyRegions: ["Port Blair", "Havelock (Swaraj Dweep)", "Neil Island (Shaheed Dweep)"],
    climate: "Tropical island climate - warm and humid year-round, monsoon May to September.",
    image: "https://images.unsplash.com/photo-1638459032642-c658d3d888c0?auto=format&fit=crop&w=1200&q=80",
  },
  maharashtra: {
    overview:
      "A state of extremes - Mumbai's density and film industry at one end, the Sahyadri hills' fort trails and cave temples at the other, with Ajanta and Ellora among the oldest rock-cut art in the world.",
    bestTimeToVisit: "October to February; monsoon (June–Sept) is peak season for the Sahyadri waterfalls and forts.",
    knownFor: [
      "Ajanta and Ellora caves",
      "Mumbai's Gateway of India and film industry",
      "Sahyadri hill forts (Raigad, Sinhagad)",
      "Lonavala / Khandala monsoon hills",
    ],
    keyRegions: ["Mumbai", "Pune", "Nashik", "Aurangabad (Ajanta-Ellora)", "Konkan coast"],
    climate: "Tropical wet-and-dry, humid coastal Mumbai, drier Deccan plateau inland, strong monsoon June–September.",
    image: "https://images.unsplash.com/photo-1667849521371-e78b4d603076?auto=format&fit=crop&w=1200&q=80",
  },
  gujarat: {
    overview:
      "A state that runs from the salt desert of the Rann of Kutch to Gir's lion sanctuary and a coastline dotted with temple towns, built on a trading and craft heritage that predates the country itself.",
    bestTimeToVisit: "November to February, when the Rann of Kutch is open and cool.",
    knownFor: [
      "White Rann of Kutch and the Rann Utsav",
      "Gir National Park's Asiatic lions",
      "Somnath and Dwarka temples",
      "Sabarmati Ashram, Ahmedabad",
    ],
    keyRegions: ["Ahmedabad", "Kutch", "Gir", "Dwarka", "Vadodara"],
    climate: "Arid to semi-arid, very hot summers, mild pleasant winters, light monsoon except the coast.",
    image: "https://images.unsplash.com/photo-1670923331633-be262e035a9a?auto=format&fit=crop&w=1200&q=80",
  },
  "dadra-and-nagar-haveli-and-daman-and-diu": {
    overview:
      "Two small Portuguese-era coastal enclaves merged into one union territory - Diu's fort and quiet beaches, and Daman/Silvassa's riverside forests, carrying a distinctly different colonial imprint than the Gujarat coast around them.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Diu Fort and St. Paul's Church",
      "Portuguese colonial architecture",
      "Nagoa Beach",
      "Silvassa's tribal art and river islands",
    ],
    keyRegions: ["Diu", "Daman", "Silvassa"],
    climate: "Coastal tropical, hot summers, mild winters, moderate monsoon.",
    image:
      "https://images.unsplash.com/photo-1667753192684-01fe80eefcae?auto=format&fit=crop&w=1200&q=80",
  },
  "west-bengal": {
    overview:
      "From Kolkata's colonial-era grandeur and adda culture down to the mangrove creeks of the Sundarbans and up to Darjeeling's tea-covered hills, a state that runs the length of Bengal's cultural geography.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Darjeeling's tea gardens and toy train",
      "Sundarbans mangrove tiger reserve",
      "Kolkata's Victoria Memorial and Durga Puja",
      "Howrah Bridge and the Hooghly ghats",
    ],
    keyRegions: ["Kolkata", "Darjeeling", "Sundarbans", "Siliguri"],
    climate: "Humid subtropical on the plains, alpine in the Darjeeling hills, heavy monsoon June–September.",
    image: "https://images.unsplash.com/photo-1742325646212-f917ba1feeaa?auto=format&fit=crop&w=1200&q=80",
  },
  odisha: {
    overview:
      "A Bay of Bengal coast built around three great temple towns - Puri's Jagannath Temple, Konark's Sun Temple, and Bhubaneswar's older shrine clusters - with Chilika Lake's lagoon ecosystem in between.",
    bestTimeToVisit: "October to February.",
    knownFor: [
      "Konark Sun Temple",
      "Jagannath Temple, Puri",
      "Chilika Lake's Irrawaddy dolphins",
      "Bhubaneswar's temple architecture",
    ],
    keyRegions: ["Bhubaneswar", "Puri", "Konark", "Chilika Lake"],
    climate: "Tropical coastal - hot and humid, cyclone-prone late monsoon season.",
    image: "https://images.unsplash.com/photo-1576235282476-debff2a4d0b9?auto=format&fit=crop&w=1200&q=80",
  },
  bihar: {
    overview:
      "The ground floor of Indian and Buddhist history - Bodh Gaya where the Buddha attained enlightenment, Nalanda's ancient university ruins, and the Ganges running through Patna at the state's centre.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Bodh Gaya's Mahabodhi Temple",
      "Nalanda University ruins",
      "Rajgir's hot springs and hills",
      "Patna's Golghar and riverside ghats",
    ],
    keyRegions: ["Patna", "Bodh Gaya", "Nalanda", "Rajgir"],
    climate: "Humid subtropical - hot summers, cool winters, monsoon-fed Ganges plains.",
    image: "https://images.unsplash.com/photo-1747224652373-8b97724573c7?auto=format&fit=crop&w=1200&q=80",
  },
  jharkhand: {
    overview:
      "A forested plateau carved out of southern Bihar, defined by waterfalls, tribal culture, and some of India's oldest mining belts sitting alongside protected sal forests and hill stations.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Netarhat hill station sunsets",
      "Hundru and Dassam waterfalls",
      "Betla National Park",
      "Tribal festivals and Sohrai art",
    ],
    keyRegions: ["Ranchi", "Netarhat", "Jamshedpur", "Betla"],
    climate: "Subtropical plateau climate - moderate summers, cool winters, good monsoon rainfall.",
    image: "https://images.unsplash.com/photo-1597384532390-98ece5da73cd?auto=format&fit=crop&w=1200&q=80",
  },
  "madhya-pradesh": {
    overview:
      "Sitting dead centre of the country, home to more tiger reserves than any other state, plus the erotic temple carvings of Khajuraho and the marble gorges of Bhedaghat on the Narmada.",
    bestTimeToVisit: "October to March, though tiger sightings peak in the dry heat of April–June.",
    knownFor: [
      "Khajuraho's temple carvings",
      "Bandhavgarh and Kanha tiger reserves",
      "Bhedaghat's marble rocks on the Narmada",
      "Sanchi's Buddhist stupas",
    ],
    keyRegions: ["Khajuraho", "Bandhavgarh", "Kanha", "Bhopal", "Sanchi"],
    climate: "Continental - hot summers, cold winters, moderate monsoon across the plateau.",
    image: "https://images.unsplash.com/photo-1672215055915-e6143dc70e6a?auto=format&fit=crop&w=1200&q=80",
  },
  chhattisgarh: {
    overview:
      "A heavily forested, tribal-majority state carved out of Madhya Pradesh in 2000, holding some of central India's least-visited waterfalls and ancient rock art alongside its mineral belt.",
    bestTimeToVisit: "October to February.",
    knownFor: [
      "Chitrakote Falls, India's widest waterfall",
      "Bastar's tribal art and markets",
      "Kanger Valley's caves",
      "Sirpur's Buddhist ruins",
    ],
    keyRegions: ["Raipur", "Bastar / Jagdalpur", "Chitrakote", "Kanger Valley"],
    climate: "Tropical monsoon - hot summers, mild winters, heavy rainfall in the forested south.",
    image: "https://images.unsplash.com/photo-1673462107499-97848ff888b9?auto=format&fit=crop&w=1200&q=80",
  },
  assam: {
    overview:
      "The Brahmaputra's home state, where one-horned rhinos graze the grasslands of Kaziranga and tea gardens roll out from Guwahati to the Upper Assam hills.",
    bestTimeToVisit: "November to April, outside the flood-prone monsoon.",
    knownFor: [
      "Kaziranga's one-horned rhinos",
      "Majuli, the world's largest river island",
      "Assam tea gardens",
      "Kamakhya Temple, Guwahati",
    ],
    keyRegions: ["Guwahati", "Kaziranga", "Majuli", "Jorhat"],
    climate: "Humid subtropical, heavy monsoon rainfall June–September, mild winters.",
    image: "https://images.unsplash.com/photo-1687859142186-bb7c14084981?auto=format&fit=crop&w=1200&q=80",
  },
  "arunachal-pradesh": {
    overview:
      "India's easternmost, least-populated frontier state, a wall of Himalayan valleys and monasteries bordering Tibet and Myanmar, requiring an inner-line permit and rewarding the ones who get it.",
    bestTimeToVisit: "October to April.",
    knownFor: [
      "Tawang Monastery",
      "Ziro Valley's Apatani culture",
      "Sela Pass",
      "Namdapha's rainforest biodiversity",
    ],
    keyRegions: ["Tawang", "Ziro Valley", "Itanagar", "Namdapha"],
    climate: "Alpine at altitude, subtropical in the lower valleys, heavy monsoon rain.",
    image: "https://images.unsplash.com/photo-1628070018796-a9f4e2dd482a?auto=format&fit=crop&w=1200&q=80",
  },
  manipur: {
    overview:
      "A valley ringed by forested hills around Loktak Lake's floating phumdi islands, with a distinct Meitei culture, classical dance form, and a martial-arts heritage most of India doesn't associate with the northeast.",
    bestTimeToVisit: "October to April.",
    knownFor: [
      "Loktak Lake's floating islands",
      "Keibul Lamjao, the only floating national park",
      "Manipuri classical dance",
      "Kangla Fort, Imphal",
    ],
    keyRegions: ["Imphal", "Loktak Lake", "Moirang"],
    climate: "Subtropical highland - mild summers, cool winters, moderate monsoon.",
    image: "https://images.unsplash.com/photo-1674722612663-c34ad2c24648?auto=format&fit=crop&w=1200&q=80",
  },
  meghalaya: {
    overview:
      "The wettest place on earth by rainfall record, its Khasi hills famous for living root bridges grown over generations and cave systems that run for kilometres under the plateau.",
    bestTimeToVisit: "October to May, avoiding the extreme monsoon months.",
    knownFor: [
      "Living root bridges, Cherrapunji / Mawlynnong",
      "Dawki's clear-water river",
      "Mawsmai and Krem Liat Prah caves",
      "Mawlynnong, 'cleanest village in Asia'",
    ],
    keyRegions: ["Shillong", "Cherrapunji (Sohra)", "Dawki", "Mawlynnong"],
    climate: "Among the wettest climates on earth - extreme monsoon rainfall, mild rest of the year.",
    image: "https://images.unsplash.com/photo-1742494267580-e026d3737f65?auto=format&fit=crop&w=1200&q=80",
  },
  mizoram: {
    overview:
      "A narrow strip of parallel hill ranges along the Myanmar and Bangladesh borders, almost entirely Christian and largely untouched by mass tourism, known for bamboo forests and a strict community-first culture.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Phawngpui ('Blue Mountain'), the state's highest peak",
      "Reiek hill's bamboo forests",
      "Bamboo dance (Cheraw)",
      "Vantawng Falls",
    ],
    keyRegions: ["Aizawl", "Reiek", "Champhai", "Phawngpui"],
    climate: "Humid subtropical highland - mild throughout, heavy monsoon rainfall.",
    image: "https://images.unsplash.com/photo-1742489419728-a30421b6d94b?auto=format&fit=crop&w=1200&q=80",
  },
  nagaland: {
    overview:
      "A ridge of hill tribes each with distinct dress, dialect and festival calendars, best known for the Hornbill Festival that brings all sixteen recognised tribes together each December.",
    bestTimeToVisit: "October to May; December for the Hornbill Festival.",
    knownFor: [
      "Hornbill Festival, Kisama",
      "Dzukou Valley's seasonal flowers",
      "Konyak tribal villages",
      "Kohima War Cemetery",
    ],
    keyRegions: ["Kohima", "Dzukou Valley", "Mon (Konyak villages)", "Dimapur"],
    climate: "Humid subtropical highland, mild summers, cool winters, heavy monsoon.",
    image: "https://images.unsplash.com/photo-1746199672836-060769af5ae9?auto=format&fit=crop&w=1200&q=80",
  },
  sikkim: {
    overview:
      "A small Himalayan state stacked between Nepal, Tibet and Bhutan, home to Kangchenjunga, the world's third-highest peak, and a Buddhist monastery culture spread across steep, terraced hillsides.",
    bestTimeToVisit: "March to May and October to mid-December.",
    knownFor: [
      "Kangchenjunga views from Pelling / Yuksom",
      "Tsomgo Lake and Nathula Pass",
      "Rumtek Monastery",
      "Yumthang Valley's rhododendrons",
    ],
    keyRegions: ["Gangtok", "Pelling", "Lachung / Yumthang", "Yuksom"],
    climate: "Alpine at altitude, subtropical in the lower valleys, heavy monsoon June–September.",
    image: "https://images.unsplash.com/photo-1634400001131-d04275db2076?auto=format&fit=crop&w=1200&q=80",
  },
  tripura: {
    overview:
      "A small hill state almost surrounded by Bangladesh, its royal Manikya-dynasty palaces and rock-cut Unakoti carvings sitting quietly outside the usual northeast circuit.",
    bestTimeToVisit: "October to March.",
    knownFor: [
      "Ujjayanta Palace, Agartala",
      "Unakoti's rock-cut carvings",
      "Neermahal, a lake palace",
      "Tripura Sundari Temple",
    ],
    keyRegions: ["Agartala", "Unakoti", "Neermahal (Melaghar)", "Udaipur (Tripura)"],
    climate: "Tropical, hot humid summers, mild winters, strong monsoon.",
    image: "https://images.unsplash.com/photo-1706880471181-36203d8844fc?auto=format&fit=crop&w=1200&q=80",
  },
};
