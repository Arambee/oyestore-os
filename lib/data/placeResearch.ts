import type { PlaceResearch } from "@/lib/types/dashboard";

// The practical, decision-driving layer of the vault -- cost, logistics,
// safety and FAQs for every place that already has a written chapter.
// This is what turns a place page from a mood board into something you
// can actually plan a trip from without leaving the site.
export const placeResearch: Record<string, PlaceResearch> = {
  varkala: {
    gettingThere:
      "Nearest airport is Trivandrum International (TRV), about 45 minutes away. Varkala also has its own railway station on the Thiruvananthapuram–Ernakulam line, a 5-minute auto ride from the cliff. Most travellers fly into Trivandrum and take a prepaid taxi or app cab straight to the cliff.",
    gettingAround:
      "The cliff itself is entirely walkable. For the railway station, town, or Odayam Beach, autos and app cabs are the norm - there's no local bus route worth relying on.",
    budgetPerDay: [
      { tier: "Budget", range: "₹1,500–2,500", note: "Hostel dorm or guesthouse, local thali meals, occasional auto rides." },
      { tier: "Mid-range", range: "₹3,500–6,000", note: "Boutique cliffside stay, café meals, one paid activity a day." },
      { tier: "Luxury", range: "₹9,000+", note: "Private pool villa, all meals at cliff restaurants, spa and water sports." },
    ],
    whereToStayAreas: [
      { area: "North Cliff", goodFor: "Quiet cafés, yoga studios, sunset views away from the crowds" },
      { area: "South Cliff (main cliff)", goodFor: "The main strip - restaurants, shops, easiest walk to the beach steps" },
      { area: "Odayam Beach", goodFor: "A calmer, less commercial stretch 15 minutes north" },
    ],
    mustEat: [
      "Karimeen pollichathu (pearl spot fish in banana leaf)",
      "Cliffside seafood thali",
      "Kerala-style prawn curry with appam",
      "Fresh coconut water sold along the cliff path",
    ],
    safetyNotes: [
      "Sea currents at Varkala's main beach can be strong outside the flagged safe-swimming zone - stick to areas with lifeguards.",
      "The cliff path has uneven, unlit stretches at night - a torch or phone light helps.",
      "Solo travellers, including women, generally report Varkala as one of Kerala's more comfortable coastal towns, especially on the cliff itself.",
    ],
    customsNotes: [
      "Modest swimwear is appreciated away from the main tourist beach, since Varkala is also a temple town (Janardhana Swamy Temple) with its own pilgrim footfall.",
      "Alcohol is served mostly in cliff restaurants catering to tourists - it's less visible in the town proper.",
    ],
    nearbyDayTrips: [
      { name: "Anjengo Fort", distance: "~30 min", note: "A 17th-century Dutch/British fort and lighthouse on a quiet spit of land." },
      { name: "Jatayu Earth Center", distance: "~1 hr", note: "A hilltop bird sculpture and viewpoint, worth a half-day trip." },
      { name: "Trivandrum city", distance: "~45 min", note: "Padmanabhaswamy Temple, Napier Museum, and the state capital's old quarter." },
    ],
    faqs: [
      {
        question: "Is Varkala safe for solo women travellers?",
        answer:
          "Yes, generally - it's one of the more solo-female-friendly coastal towns in India, with a steady stream of long-stay travellers and a walkable, well-lit main cliff strip. Normal precautions apply after dark on quieter stretches.",
      },
      {
        question: "How many days do you need in Varkala?",
        answer: "2–3 days covers the cliff, beach, and a couple of day trips comfortably. Many travellers extend to a week for the slower pace.",
      },
      {
        question: "Is Varkala expensive?",
        answer: "No - it's one of Kerala's more affordable coastal towns, with backpacker guesthouses from ₹700–1,000/night alongside pricier boutique stays.",
      },
    ],
  },

  munnar: {
    gettingThere:
      "Nearest airport is Cochin International (COK), roughly 4 hours by road through winding hill routes. The nearest railway station is Aluva, also about 4 hours away. Most travellers fly into Kochi and take a taxi or KSRTC bus up into the hills.",
    gettingAround:
      "Munnar's sights are spread across a hilly area - a full-day taxi or shared jeep is the standard way to cover Top Station, Eravikulam, and the tea estates. Walking works only within the town centre.",
    budgetPerDay: [
      { tier: "Budget", range: "₹1,800–2,800", note: "Homestay or budget hotel, local Kerala meals, shared jeep tours." },
      { tier: "Mid-range", range: "₹4,000–7,000", note: "Tea-estate view stay, private taxi for sightseeing, one guided trek." },
      { tier: "Luxury", range: "₹10,000+", note: "Resort with estate views, private guide, spa treatments." },
    ],
    whereToStayAreas: [
      { area: "Munnar Town", goodFor: "Convenience - shops, restaurants, easy access to buses and taxis" },
      { area: "Chinnakanal / Top Station road", goodFor: "Closer to Top Station and the higher viewpoints, quieter stays" },
      { area: "Pothamedu / estate roads", goodFor: "Waking up inside the tea gardens themselves" },
    ],
    mustEat: [
      "Kerala-style appam with vegetable stew",
      "Fresh Munnar tea, tasted straight at an estate",
      "Spiced black tea ('Ela chai') from roadside stalls",
      "Karimeen or Malabar-style fish curry in town",
    ],
    safetyNotes: [
      "Roads are narrow, winding hill roads - avoid self-driving at night if unfamiliar with hill driving.",
      "Mornings can be foggy with low visibility on viewpoint roads, especially in monsoon.",
      "Leeches are common on forest treks during monsoon - closed shoes recommended.",
    ],
    customsNotes: [
      "Many tea estates are working plantations, not just photo spots - stick to marked visitor paths.",
      "Eravikulam National Park has restricted trekking zones to protect the endangered Nilgiri Tahr.",
    ],
    nearbyDayTrips: [
      { name: "Eravikulam National Park", distance: "~30 min", note: "Home to the Nilgiri Tahr and Anamudi, South India's highest peak." },
      { name: "Top Station", distance: "~1 hr", note: "Border viewpoint into Tamil Nadu, best at sunrise." },
      { name: "Chinnakanal / Power House Waterfalls", distance: "~30 min", note: "A roadside waterfall stop en route to Top Station." },
    ],
    faqs: [
      {
        question: "How many days do you need in Munnar?",
        answer: "3 days is the sweet spot - one for the tea estates and town, one for Top Station and Eravikulam, one to slow down or add a trek.",
      },
      {
        question: "Is Munnar good in monsoon?",
        answer: "Yes, arguably its best season - the hills turn deep green and waterfalls run full, though some trekking routes close for safety.",
      },
      {
        question: "Do I need a permit for Eravikulam National Park?",
        answer: "No permit, but there's an entry fee and a shuttle bus is mandatory from the base to the trekking zone.",
      },
    ],
  },

  wayanad: {
    gettingThere:
      "Nearest airport is Calicut (Kozhikode) International, about 2.5–3 hours away by road. Nearest railway station is Kozhikode, similarly distanced. Most travellers arrive by taxi or bus from Kozhikode or Bangalore (a popular weekend drive route, ~6-7 hours).",
    gettingAround:
      "A private taxi or self-drive is the norm - Wayanad's attractions (caves, peaks, waterfalls, wildlife sanctuary) are spread far apart with limited public transport.",
    budgetPerDay: [
      { tier: "Budget", range: "₹1,500–2,500", note: "Homestay, local meals, shared safari jeep." },
      { tier: "Mid-range", range: "₹3,500–6,000", note: "Plantation-stay resort, private safari, one trek with a guide." },
      { tier: "Luxury", range: "₹8,000+", note: "Tree-house or luxury eco-resort, private wildlife safari, spa." },
    ],
    whereToStayAreas: [
      { area: "Vythiri", goodFor: "Forest resorts, treehouse stays, closest to Chembra Peak" },
      { area: "Kalpetta", goodFor: "Central, most facilities, good base for the caves and waterfalls" },
      { area: "Sulthan Bathery", goodFor: "Closest to Edakkal Caves and the wildlife sanctuary" },
    ],
    mustEat: [
      "Wayanadan bamboo rice",
      "Kappa (tapioca) with fish curry",
      "Estate-grown coffee",
      "Wild honey sold by local tribal cooperatives",
    ],
    safetyNotes: [
      "Chembra Peak trekking requires a forest department permit and is capped in daily numbers - book ahead in peak season.",
      "Wildlife sanctuary roads sometimes have elephant crossings - follow local driving advice at dusk.",
      "Leech-prone forest trails during monsoon.",
    ],
    customsNotes: [
      "Wayanad has a significant tribal (Adivasi) population - buying from tribal cooperative stalls directly supports local communities.",
      "Some cave and sanctuary areas have photography restrictions - check signage.",
    ],
    nearbyDayTrips: [
      { name: "Edakkal Caves", distance: "~45 min from Kalpetta", note: "Neolithic petroglyphs, a moderate uphill walk to reach." },
      { name: "Banasura Sagar Dam", distance: "~30 min", note: "India's largest earthen dam, with boating." },
      { name: "Soochipara & Meenmutty Falls", distance: "~30-45 min", note: "Two of Wayanad's most-visited waterfalls." },
    ],
    faqs: [
      {
        question: "Is Wayanad good for a weekend trip from Bangalore?",
        answer: "Yes - it's one of the most popular weekend drives from Bangalore at roughly 6-7 hours, and 2 days covers the highlights comfortably.",
      },
      {
        question: "Do I need a permit for Chembra Peak?",
        answer: "Yes, the forest department caps daily trekkers and requires registration - book a day or two ahead in peak season (Oct–Mar).",
      },
      {
        question: "Is Wayanad good in monsoon?",
        answer: "The waterfalls and greenery peak in monsoon, but some treks (including Chembra Peak) close for safety during heavy rain.",
      },
    ],
  },

  pondicherry: {
    gettingThere:
      "Nearest airport is Chennai (MAA), about 3–3.5 hours by road, or the smaller Puducherry airport with limited connectivity. Nearest major railway station is Villupuram, about 45 minutes away, or Puducherry's own smaller station. Most travellers drive from Chennai or fly into Chennai and take a taxi.",
    gettingAround:
      "A rented bicycle or scooter is the standard way to get around - White Town is flat and compact, and Auroville is a short ride out.",
    budgetPerDay: [
      { tier: "Budget", range: "₹1,200–2,000", note: "Guesthouse outside White Town, local Tamil/French-Tamil meals, bicycle rental." },
      { tier: "Mid-range", range: "₹3,000–5,500", note: "Heritage French Quarter stay, café meals, scooter rental." },
      { tier: "Luxury", range: "₹7,000+", note: "Boutique colonial mansion stay, fine dining, Auroville day tour with a guide." },
    ],
    whereToStayAreas: [
      { area: "White Town / French Quarter", goodFor: "Colonial villas, walking distance to the promenade and cafés" },
      { area: "Auroville", goodFor: "A slower, community-focused stay away from the town centre" },
      { area: "Serenity Beach area", goodFor: "Surf culture and a quieter beach scene" },
    ],
    mustEat: [
      "French-Tamil fusion at White Town cafés",
      "Filter coffee and croissants side by side",
      "South Indian thali in the Tamil Quarter",
      "Fresh seafood along the fishing harbour",
    ],
    safetyNotes: [
      "Rip currents are common at Pondicherry's beaches - swimming isn't recommended at most of them, Promenade Beach is for walking, not swimming.",
      "Scooter traffic can be chaotic outside the French Quarter - an Indian licence or International Driving Permit is required to rent legally.",
    ],
    customsNotes: [
      "Auroville is a working spiritual community, not a tourist attraction - the Matrimandir's inner chamber requires advance booking and silence.",
      "Alcohol is more freely available here than in most of Tamil Nadu, a legacy of French-era licensing.",
    ],
    nearbyDayTrips: [
      { name: "Auroville", distance: "~30 min", note: "The Matrimandir and its surrounding experimental township." },
      { name: "Chunnambar Boat House / Paradise Beach", distance: "~20 min", note: "Backwater boat ride to a private beach." },
      { name: "Cuddalore / Silver Beach", distance: "~1 hr", note: "A quieter, less-visited coastal stretch south of town." },
    ],
    faqs: [
      {
        question: "Can I swim at Pondicherry's beaches?",
        answer: "Not recommended at most - Promenade Beach has a rocky shoreline built for walking, not swimming. Paradise Beach (reached by boat) is the better swimming option.",
      },
      {
        question: "Do I need to book Auroville's Matrimandir in advance?",
        answer: "Yes, viewing passes for the inner chamber need to be arranged ahead at the visitor centre; the surrounding gardens can be visited without booking.",
      },
      {
        question: "How many days do you need in Pondicherry?",
        answer: "2 days covers White Town, the promenade and Auroville; add a third for the quieter beaches nearby.",
      },
    ],
  },

  goa: {
    gettingThere:
      "Goa has its own airport (Dabolim, GOI, plus the newer Manohar/Mopa airport in North Goa) with direct flights from most major Indian cities. Goa is also on the Konkan Railway, with well-connected stations at Madgaon and Thivim.",
    gettingAround:
      "A rented scooter or self-drive car is the norm - Goa's beaches and towns are spread along the coast, and having your own wheels matters more here than almost anywhere else in India.",
    budgetPerDay: [
      { tier: "Budget", range: "₹1,500–2,500", note: "Hostel or budget guesthouse, local thali/beach shack meals, scooter rental." },
      { tier: "Mid-range", range: "₹3,500–6,500", note: "Boutique beach stay, café and shack dining, one paid water activity." },
      { tier: "Luxury", range: "₹10,000+", note: "5-star beach resort, fine dining, private boat trips." },
    ],
    whereToStayAreas: [
      { area: "North Goa (Baga, Calangute, Anjuna)", goodFor: "Nightlife, water sports, the busiest beach scene" },
      { area: "North Goa (Vagator, Ashwem, Morjim)", goodFor: "A quieter, more boutique version of the north" },
      { area: "South Goa (Palolem, Agonda, Colva)", goodFor: "Calmer beaches, fewer crowds, more family-friendly" },
    ],
    mustEat: [
      "Goan fish curry rice",
      "Pork vindaloo and sorpotel",
      "Bebinca (Goan layered dessert)",
      "Feni, the local cashew or coconut spirit",
    ],
    safetyNotes: [
      "Rip currents are a real risk at several beaches (Anjuna, Baga, Calangute) - swim only where lifeguard flags are green.",
      "A valid driving licence with a two-wheeler endorsement is legally required to rent a scooter - checkpoints do enforce this.",
      "Drink spiking and over-serving are occasional risks at party-heavy North Goa beach clubs - keep an eye on drinks.",
    ],
    customsNotes: [
      "Beach shacks are seasonal and rebuilt each year post-monsoon - expect a different shack layout each season.",
      "Nudity and topless sunbathing are not legal on Indian beaches despite some beaches' reputation.",
    ],
    nearbyDayTrips: [
      { name: "Old Goa churches (Basilica of Bom Jesus)", distance: "~30-45 min from most beaches", note: "UNESCO-listed Portuguese-era churches." },
      { name: "Dudhsagar Falls", distance: "~1.5-2 hrs", note: "A four-tiered waterfall, best visited just after monsoon." },
      { name: "Chapora Fort", distance: "~30 min from North Goa beaches", note: "A crumbling fort with the coast's best sunset view." },
    ],
    faqs: [
      {
        question: "Is Goa good in monsoon?",
        answer: "Many beach shacks close and swimming is unsafe due to rough seas, but it's when Goa is greenest and the waterfalls (like Dudhsagar) run fullest - a different, quieter trip than the winter party season.",
      },
      {
        question: "North Goa or South Goa?",
        answer: "North Goa for nightlife, water sports and density of things to do; South Goa for quieter beaches, resorts and a slower pace.",
      },
      {
        question: "Do I need an international licence to rent a scooter in Goa?",
        answer: "An Indian driving licence with a two-wheeler endorsement is required by law; foreign visitors technically need an International Driving Permit, and checkpoints do fine riders without proper documentation.",
      },
    ],
  },

  gokarna: {
    gettingThere:
      "Nearest airport is Goa's Dabolim (GOI), about 2.5–3 hours away, or Hubli, roughly similar distance. Gokarna has its own small railway station on the Konkan Railway line. Most travellers combine it with a Goa trip, arriving by taxi or train.",
    gettingAround:
      "The coves are linked by a cliffside walking trail - no roads connect Kudle, Om, Half Moon and Paradise Beach directly, so walking (30–60 min between coves) or a boat taxi is how most people move between them.",
    budgetPerDay: [
      { tier: "Budget", range: "₹1,000–2,000", note: "Beach hut or hostel dorm, local thali meals, walking between beaches." },
      { tier: "Mid-range", range: "₹2,500–4,500", note: "Beachfront cottage, café meals, one paid trek/boat trip." },
      { tier: "Luxury", range: "₹6,000+", note: "Boutique cliffside resort, private beach access." },
    ],
    whereToStayAreas: [
      { area: "Gokarna Town / Main Beach", goodFor: "Temple-town character, pilgrims and travellers side by side" },
      { area: "Om Beach", goodFor: "The most developed of the coves, easiest access and most stays" },
      { area: "Kudle / Half Moon / Paradise Beach", goodFor: "Progressively quieter and more remote - reached by trekking the cliff trail or boat" },
    ],
    mustEat: [
      "Malnad-style thali",
      "Fresh grilled seafood at beach shacks",
      "Neer dosa with coconut chutney",
      "Filter coffee at the town's old cafés",
    ],
    safetyNotes: [
      "Currents can be strong at several coves - Paradise and Half Moon in particular have had drowning incidents; swim cautiously and check with locals.",
      "The cliff trail between beaches has unmarked, occasionally slippery sections - daylight walking is safer.",
      "Cliff jumping (popular at Om Beach) has real injury risk and should only be done with local guidance on safe spots and tide timing.",
    ],
    customsNotes: [
      "Gokarna is an active Hindu pilgrimage town (Mahabaleshwar Temple) - modest dress is expected in the town itself, even though the beaches have a backpacker/party reputation.",
      "Some beaches (particularly Kudle and Om) have grown a semi-permanent shack and party scene that sits in tension with the town's temple character - be respectful moving between the two.",
    ],
    nearbyDayTrips: [
      { name: "Yana Caves", distance: "~1.5 hrs", note: "Unusual black limestone rock formations deep in a forest reserve." },
      { name: "Murudeshwar", distance: "~1.5-2 hrs", note: "A giant Shiva statue on a coastal temple headland." },
      { name: "Jog Falls", distance: "~2.5 hrs", note: "One of India's tallest waterfalls, best just after monsoon." },
    ],
    faqs: [
      {
        question: "Which Gokarna beach should I stay at?",
        answer: "Om Beach for the easiest access and most facilities; Kudle for a balance of quiet and convenience; Half Moon or Paradise if you want to disconnect and don't mind a trek or boat ride in.",
      },
      {
        question: "How do you get between Gokarna's beaches?",
        answer: "A cliffside trail connects Kudle, Om, Half Moon and Paradise - walkable in 30-60 minute stretches, or by hired boat from Om Beach.",
      },
      {
        question: "Is cliff jumping at Om Beach safe?",
        answer: "Only at known spots and tide conditions locals point out - it's a real source of injuries for travellers who jump without checking depth and currents first.",
      },
    ],
  },
};
