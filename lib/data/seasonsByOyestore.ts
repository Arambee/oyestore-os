import type { SeasonShowcase } from "@/lib/types/dashboard";

// Whichever seasons are active anywhere Oyestore operates -- currently just
// Monsoon, but this list is built to hold more than one at a time.
export const currentSeason: SeasonShowcase = {
  id: "monsoon",
  name: "Monsoon",
  subtitle:
    "Wherever the season is turning, right now it's Monsoon across India's west coast - here's where we're taking our travellers.",
  chapters: [
    {
      id: "kerala",
      name: "Kerala",
      tagline: "Backwaters, cliffs and tea-green hills",
      image:
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          id: "varkala",
          name: "Varkala",
          description:
            "Cliffs, cafés and conversations that stay long after the sunsets.",
          image:
            "https://images.unsplash.com/photo-1655394602738-eff266100405?auto=format&fit=crop&w=1200&q=80",
          duration: "3 Nights",
          startingPrice: "₹10,999",
          experiences: ["Kayaking", "Horse Riding", "Bonfire", "Scuba"],
          hostedByCreatorId: "mehar-sachdeva",
          itinerary: [
            {
              day: 1,
              title: "Cliffside arrival",
              description:
                "Check in above the cliffs, sunset walk along Papanasam Beach, welcome bonfire with the group.",
            },
            {
              day: 2,
              title: "Water and horizon",
              description:
                "Morning kayaking through the backwater inlet, afternoon free for the cliff cafés, sunset scuba taster session.",
            },
            {
              day: 3,
              title: "Slow goodbye",
              description:
                "Horse riding along the shore at low tide, late checkout, one last cliffside coffee before departure.",
            },
          ],
          hiddenSpots: [
            {
              name: "Jatayu Earth Center",
              description: "The world's largest bird sculpture, carved into a hilltop.",
            },
            {
              name: "Papanasam Beach Cliff Walk",
              description: "A quiet clifftop trail above the main beach, best at dusk.",
            },
          ],
        },
        {
          id: "munnar",
          name: "Munnar",
          description: "Rolling tea estates wrapped in monsoon mist.",
          image:
            "https://images.unsplash.com/photo-1650884986392-984358536050?auto=format&fit=crop&w=1200&q=80",
          duration: "3 Days",
          startingPrice: "₹14,999",
          experiences: ["Tea Estate Trek", "Waterfall Hike", "Bonfire", "Photography Walk"],
          hostedByCreatorId: "aakash-malhotra",
          itinerary: [
            {
              day: 1,
              title: "Into the hills",
              description:
                "Arrival through winding tea-estate roads, evening bonfire with mist rolling over the valley.",
            },
            {
              day: 2,
              title: "Top Station sunrise",
              description:
                "Pre-dawn drive to Top Station Viewpoint, waterfall hike back down, free afternoon at the estate.",
            },
            {
              day: 3,
              title: "Tea and departure",
              description:
                "Kolukkumalai tea-estate walk, tasting session, departure after lunch.",
            },
          ],
          hiddenSpots: [
            {
              name: "Top Station Viewpoint",
              description: "A near-vertical drop into the Western Ghats, above the clouds.",
            },
            {
              name: "Kolukkumalai Tea Estate",
              description: "The world's highest tea plantation, reached before sunrise.",
            },
          ],
        },
        {
          id: "wayanad",
          name: "Wayanad",
          description: "Forested peaks and ancient caves in the Ghats.",
          image:
            "https://images.unsplash.com/photo-1785180014995-ed64c978026b?auto=format&fit=crop&w=1200&q=80",
          duration: "Weekend",
          startingPrice: "₹13,999",
          experiences: ["Cave Trek", "Peak Hike", "Bonfire", "Wildlife Safari"],
          hostedByCreatorId: "aakash-malhotra",
          itinerary: [
            {
              day: 1,
              title: "Caves and canopy",
              description:
                "Edakkal Caves petroglyph tour, evening wildlife safari on the forest edge.",
            },
            {
              day: 2,
              title: "Chembra sunrise trek",
              description:
                "Early climb to Chembra Peak's Heart Lake, bonfire and stargazing on the return.",
            },
          ],
          hiddenSpots: [
            {
              name: "Edakkal Caves",
              description: "Neolithic petroglyphs inside a cleft rock formation.",
            },
            {
              name: "Chembra Peak Heart Lake",
              description: "A heart-shaped lake near the summit, only visible on the trek up.",
            },
          ],
        },
      ],
    },
    {
      id: "tamil-nadu",
      name: "Tamil Nadu",
      tagline: "French quarters and quiet shores",
      image:
        "https://images.unsplash.com/photo-1772633634752-7b7611e839fc?auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          id: "pondicherry",
          name: "Pondicherry",
          description: "Colonial streets and beachfront cafés on the Coromandel coast.",
          image:
            "https://images.unsplash.com/photo-1597073642928-48c0971f7ded?auto=format&fit=crop&w=1200&q=80",
          duration: "Weekend",
          startingPrice: "₹11,999",
          experiences: ["Cycling Tour", "Boat Ride", "Bonfire", "Café Trail"],
          hostedByCreatorId: "rhea-sharma",
          itinerary: [
            {
              day: 1,
              title: "French Quarter on foot",
              description:
                "Walking tour of the colonial quarter, sunset at the promenade, group dinner at a beachfront café.",
            },
            {
              day: 2,
              title: "Auroville and the backwaters",
              description:
                "Morning at the Matrimandir, boat ride through the Chunnambar backwaters to Paradise Beach, evening bonfire.",
            },
          ],
          hiddenSpots: [
            {
              name: "Auroville Matrimandir",
              description: "A golden meditation dome at the heart of the utopian township.",
            },
            {
              name: "Paradise Beach Backwaters",
              description: "Reachable only by boat through the Chunnambar backwaters.",
            },
          ],
        },
      ],
    },
    {
      id: "goa",
      name: "Goa",
      tagline: "Monsoon greens along the Arabian Sea",
      image:
        "https://images.unsplash.com/photo-1652820330085-82a0c2b88d78?auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          id: "goa",
          name: "Goa",
          description: "Waterfalls and empty beaches once the crowds leave for the season.",
          image:
            "https://images.unsplash.com/photo-1701440138424-d851930f25cf?auto=format&fit=crop&w=1200&q=80",
          duration: "Weekend",
          startingPrice: "₹10,999",
          experiences: ["Waterfall Trek", "Fort Sunset", "Bonfire", "Beach Hopping"],
          hostedByCreatorId: "kabir-anand",
          itinerary: [
            {
              day: 1,
              title: "North Goa, quietly",
              description:
                "Butterfly Beach by boat, sunset at Chapora Fort, bonfire with the group on the sand.",
            },
            {
              day: 2,
              title: "Waterfalls inland",
              description:
                "Monsoon waterfall trek away from the coast, late checkout and a final beach walk before departure.",
            },
          ],
          hiddenSpots: [
            {
              name: "Butterfly Beach",
              description: "A cove accessible only by boat or a steep jungle trail.",
            },
            {
              name: "Chapora Fort Sunset Point",
              description: "A crumbling Portuguese fort with the best sunset view on the coast.",
            },
          ],
        },
      ],
    },
    {
      id: "karnataka",
      name: "Karnataka",
      tagline: "Cliffside coves south of Goa",
      image:
        "https://images.unsplash.com/photo-1693210061424-49909f0bead6?auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          id: "gokarna",
          name: "Gokarna",
          description: "A quieter, temple-town alternative to Goa's beaches.",
          image:
            "https://images.unsplash.com/photo-1554787990-fd7a431e3b0a?auto=format&fit=crop&w=1200&q=80",
          duration: "3 Days",
          startingPrice: "₹11,999",
          experiences: ["Beach Trek", "Bonfire", "Temple Walk", "Cliff Jumping"],
          hostedByCreatorId: "kabir-anand",
          itinerary: [
            {
              day: 1,
              title: "Temple town to Om Beach",
              description:
                "Morning temple walk through Gokarna town, afternoon at Om Beach, bonfire at sunset.",
            },
            {
              day: 2,
              title: "The cove trail",
              description:
                "Cliffside trek along the Half Moon Beach Trail, linking the hidden coves on foot.",
            },
            {
              day: 3,
              title: "Last light",
              description:
                "Free morning by the water, optional cliff jumping session, departure after lunch.",
            },
          ],
          hiddenSpots: [
            {
              name: "Om Beach",
              description: "Two crescents of sand shaped like the Om symbol from above.",
            },
            {
              name: "Half Moon Beach Trail",
              description: "A cliffside walking trail linking Gokarna's hidden coves.",
            },
          ],
        },
      ],
    },
  ],
};

export const seasons: SeasonShowcase[] = [currentSeason];
