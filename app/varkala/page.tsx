import Image from "next/image";
import Link from "next/link";
import StickyBookingCard from "./StickyBookingCard";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Bus,
  Calendar,
  Camera,
  Car,
  Check,
  Compass,
  Flag,
  Flower2,
  Heart,
  HeartHandshake,
  Layers,
  Mail,
  MessageCircle,
  Mountain,
  Network,
  Sparkles,
  Sprout,
  Store,
  Tag,
  Users,
  X,
  Zap,
} from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/oyestoreforgram/";
const WHATSAPP_NUMBER = "918400181281";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
      />
      <circle
        cx="17.2"
        cy="6.8"
        r="1.1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function OyestoreDot() {
  // A literal "." glyph rendered in a non-default color shifts up off the
  // baseline in this typeface (confirmed independent of font-weight/family/
  // size - any explicit color on an isolated "." span causes it, plain
  // white/inherited does not). Drawing the dot as a small circle sidesteps
  // that entirely and guarantees it sits flush on the baseline.
  return (
    <span
      aria-hidden
      className="ml-px inline-block size-[0.16em] shrink-0 rounded-full bg-red-500 align-baseline"
      style={{ animation: "oye-dot-pulse 1.8s ease-in-out infinite" }}
    />
  );
}

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const metadata: Metadata = {
  title: "Varkala, Munnar & Sri Lanka | Oyestore",
  description:
    "Five chapters this season - Independence Day, Raksha Bandhan and Onam in Varkala, Munnar x Vagamon in the hills, plus The Odyssey road trip across Sri Lanka. Message us on WhatsApp for dates and details.",
};

const varkalaHiddenSpots = [
  {
    name: "Jatayu Earth Center",
    description: "An epic hilltop escape where Kerala's landscape meets one of the world's largest bird sculptures.",
  },
  {
    name: "Varkala Cliff",
    description: "Red cliffs, endless Arabian Sea, and the best place to catch the evening slow down.",
  },
  {
    name: "Papanasam Beach",
    description: "Varkala's iconic beach - where sunset, sea and spirituality meet.",
  },
  {
    name: "Kappil Beach & Backwaters",
    description: "One side is the sea. The other is the backwaters. The road between them is the experience.",
  },
  {
    name: "Black Sand Beach",
    description: "A quieter stretch of coast with striking dark sand and far fewer crowds.",
  },
  {
    name: "Janardhana Swamy Temple",
    description: "A centuries-old temple perched near the sea, carrying Varkala's spiritual side.",
  },
  {
    name: "Sivagiri Mutt",
    description: "A peaceful hilltop landmark dedicated to the legacy of Sree Narayana Guru.",
  },
  {
    name: "Edava Beach",
    description: "A quieter coastline for when you want Varkala without the crowd.",
  },
  {
    name: "Mangrove Kayaking",
    description: "Swap the open sea for narrow waterways, mangroves and a completely different side of Kerala.",
  },
  {
    name: "Cliffside Café Hopping",
    description: "Coffee, conversations and an Arabian Sea view - basically Varkala in one frame.",
  },
];

type ChapterDay = {
  day: string;
  title: string;
  description: string;
  activities: string[];
};

type Chapter = {
  id: string;
  navLabel: string;
  navDates: string;
  badge: string;
  badgeIcon: typeof Flag;
  themeColor: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  price: string;
  duration: string;
  departure: string;
  seats: string;
  dateChip: string;
  aboutHook: string;
  aboutBody: string;
  perfectFor: string[];
  days: ChapterDay[];
  experiences: string[];
  included: string[];
  notIncluded: string[];
  hiddenSpots?: { name: string; description: string }[];
  sneakPeek: { id: string; alt: string; image: string; className: string }[];
  beforeYouBook: string;
  whatsappMessage: string;
};

const chapters: Chapter[] = [
  {
    id: "independence-day",
    navLabel: "Independence Day",
    navDates: "14-16 Aug 2026",
    badge: "INDEPENDENCE DAY CHAPTER · 14-16 AUG 2026",
    badgeIcon: Flag,
    themeColor: "#FF9933",
    heroImage: "https://images.unsplash.com/photo-1655394602738-eff266100405?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Varkala asks you to stay.",
    heroSubtitle: "Some places ask you to visit. This one doesn't let you leave on time.",
    price: "₹12,999 onwards",
    duration: "3 Days · 4 Nights",
    departure: "Bangalore / Pan India",
    seats: "20 people",
    dateChip: "14-16 Aug 2026",
    aboutHook:
      "Days begin with ocean air, drift through cafés overlooking the Arabian Sea, and end with sunsets that convince everyone to postpone tomorrow.",
    aboutBody:
      "This chapter isn't designed around rushing from one attraction to another - it's built around freedom. Freedom to stop wherever the road feels beautiful, to have conversations that weren't planned, to remember what weekends are supposed to feel like. Your official trip title, host and surprise experiences are revealed 72 hours before departure - because some stories deserve to unfold naturally.",
    perfectFor: ["Solo Travellers", "Friends", "Couples", "Creators", "First-Time Group Travellers"],
    hiddenSpots: varkalaHiddenSpots,
    sneakPeek: [
      {
        id: "id-1",
        alt: "Weekend crew from a past Independence Day chapter",
        image: "/varkala/sneak-1.jpg",
        className: "col-span-2 row-span-2",
      },
      {
        id: "id-2",
        alt: "The crew on the cliff rocks",
        image: "/varkala/gallery-cliff-crew-selfie.jpg",
        className: "col-span-2",
      },
      {
        id: "id-3",
        alt: "Bonfire night on the beach",
        image: "/varkala/gallery-bonfire.jpg",
        className: "col-span-2",
      },
      {
        id: "id-4",
        alt: "The crew kayaking through the backwaters",
        image: "/varkala/gallery-kayak-real.jpg",
        className: "",
      },
      {
        id: "id-5",
        alt: "The red cliffs of Varkala meeting the Arabian Sea",
        image: "/varkala/gallery-beach-cliff.jpg",
        className: "",
      },
      {
        id: "id-6",
        alt: "Taking in the view from the cliff",
        image: "/varkala/gallery-cliff-crew-candid.jpg",
        className: "",
      },
      { id: "id-7", alt: "A candid moment from a past chapter", image: "/varkala/sneak-2.jpg", className: "" },
    ],
    days: [
      {
        day: "0",
        title: "The City Stays Behind",
        description: "Thursday night, the city stays behind and the weekend starts on the highway.",
        activities: [
          "Departure from Bangalore, Thursday night",
          "Work ends, notifications slowly stop mattering",
          "Highway replaces traffic, music replaces meetings",
          "Introductions become conversations",
          "Overnight journey to Varkala",
        ],
      },
      {
        day: "1",
        title: "The Cliffs Know Your Name Now",
        description: "Arrival day, taken slow - the cliff is yours to explore at your own pace.",
        activities: [
          "Arrive, freshen up, breakfast - nobody is waiting for you here",
          "Cliffside walks along the Varkala cliff",
          "Ocean-view cafés and hidden stairways down to the beach",
          "Independent exploration - go wherever looks interesting",
          "Sunset over the Arabian Sea",
          "Evening: welcome bonfire, music, food and stories as the group forms",
        ],
      },
      {
        day: "2",
        title: "The Best Plans Are Never Planned",
        description: "A scooter, the coastline, and no fixed plan - today belongs to curiosity.",
        activities: [
          "Scooter exploration along the coastline",
          "Stop wherever a café or view looks interesting",
          "Beach hopping to spots that never needed a name",
          "Watching locals go about their day",
          "Sunset viewpoints and a few surprises along the way",
          "Night: music, laughter, and people who didn't know each other yesterday",
        ],
      },
      {
        day: "3",
        title: "Leave Different",
        description: "One unhurried last morning, then the highway back to Bangalore.",
        activities: [
          "Wake up without an alarm, one final cliffside walk",
          "Coffee without checking the time, one last look at the sea",
          "Late checkout",
          "Begin the journey back to Bangalore",
          "Somewhere on the highway home, everyone starts planning the next chapter",
        ],
      },
    ],
    experiences: [
      "Ocean-view cafés",
      "Scenic scooter routes",
      "Cliffside sunsets",
      "Coastal culture",
      "Hidden local gems",
      "Community experiences",
      "Photography-friendly locations",
      "Slow travel",
      "Surprise moments",
    ],
    included: [
      "Accommodation",
      "Breakfasts",
      "Surprise Host",
      "Scooter Exploration",
      "Backwater Experience",
      "Community Activities",
      "Beachside Experiences",
      "Unlimited Main Character Moments",
      "Horse Riding",
    ],
    notIncluded: [
      "Lunch & Dinner",
      "Personal Expenses",
      "Adventure Activities not listed above",
      "Shopping",
      "AC Transportation from Bangalore (we can book it for you)",
    ],
    beforeYouBook:
      "Every chapter is intentionally designed to stay flexible - weather changes, people change, and some of the best discoveries aren't found on Google Maps. The itinerary above is an overview of the experience; your official trip title, host reveal, meeting points, timings and surprise experiences are shared 72 hours before departure. Seats are limited to 20 people for the 14-16 August 2026 dates - message us on WhatsApp to lock yours in.",
    whatsappMessage:
      "Hi! I'm interested in the Independence Day Varkala chapter (14-16 Aug 2026, ₹12,999 · 3 Days/4 Nights). Can you share more details?",
  },
  {
    id: "raksha-bandhan",
    navLabel: "Raksha Bandhan",
    navDates: "28-30 Aug 2026",
    badge: "RAKSHA BANDHAN CHAPTER · 28-30 AUG 2026",
    badgeIcon: HeartHandshake,
    themeColor: "#FB7185",
    heroImage: "https://images.unsplash.com/photo-1646299588107-40fabeca07da?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "This Raksha Bandhan, make memories together.",
    heroSubtitle:
      "Some bonds are built by blood. Some are built by choice. Trade the crowded malls for cliffside sunsets.",
    price: "₹12,999 onwards",
    duration: "3 Days · 4 Nights",
    departure: "Bangalore / Pan India",
    seats: "20 people",
    dateChip: "28-30 Aug 2026",
    aboutHook:
      "Leave behind the crowded malls, predictable lunches and routine celebrations. Trade them for cliffside sunsets, road trips that never seem to end, and morning chai overlooking the Arabian Sea.",
    aboutBody:
      "Whether you're travelling with your brother, your sister, your best friend or simply by yourself, this is a weekend built around connection. Because family isn't always who you grow up with - sometimes, it's who you travel with. Varkala & Kollam, over 3 days and 4 nights.",
    perfectFor: ["Solo Travellers", "Friends", "Couples", "Creators", "First-Time Group Travellers"],
    hiddenSpots: varkalaHiddenSpots,
    sneakPeek: [
      {
        id: "rb-1",
        alt: "A candid moment from a past chapter",
        image: "/varkala/sneak-2.jpg",
        className: "col-span-2 row-span-2",
      },
      {
        id: "rb-2",
        alt: "Tying rakhi, the old-fashioned way",
        image: "/varkala/gallery-rakhi.jpg",
        className: "col-span-2",
      },
      {
        id: "rb-3",
        alt: "The crew, beach day",
        image: "/varkala/gallery-beach-crew-shirtless.jpg",
        className: "col-span-2",
      },
      { id: "rb-4", alt: "Beach volleyball at sunset", image: "/varkala/gallery-volleyball.jpg", className: "" },
      {
        id: "rb-5",
        alt: "Beach day with the crew",
        image: "/varkala/gallery-beach-crew.jpg",
        className: "",
      },
      {
        id: "rb-6",
        alt: "Evening at the shack with the crew",
        image: "/varkala/gallery-crew-shack-night.jpg",
        className: "",
      },
      {
        id: "rb-7",
        alt: "Looking out over the valley on a past chapter",
        image: "/varkala/sneak-3.jpg",
        className: "",
      },
    ],
    days: [
      {
        day: "0",
        title: "The City Stays Behind",
        description: "Departure from Bangalore - the playlists begin and the city slowly fades away.",
        activities: [
          "Departure from Bangalore",
          "The playlists begin",
          "The city slowly fades away",
          "The weekend officially starts",
          "Overnight journey towards Kerala",
        ],
      },
      {
        day: "1",
        title: "Cliffs, Cafés & Coastlines",
        description: "Welcome to Varkala - where the sea meets the cliffs and time slows down.",
        activities: [
          "Arrival & check-in, freshen up, traditional Kerala breakfast, community introductions",
          "Explore Varkala Cliff and Black Beach",
          "Café hopping, hidden viewpoints, beach games, photography walk",
          "Sunset experience and a poolside social evening",
          "Community activities, music and conversations",
        ],
      },
      {
        day: "2",
        title: "The Rhythm of Kerala",
        description: "Today belongs to Kollam - backwaters, villages and peaceful landscapes.",
        activities: [
          "Breakfast, surfing, a scenic drive, village exploration",
          "Kayaking (weather permitting), toddy stops, photography, local experiences",
          "Evening bonfire, community awards, storytelling session",
          "Farewell dinner, music and games",
        ],
      },
      {
        day: "3",
        title: "One More Chapter",
        description: "A scenic drive to Kollam's backwaters, then a free final day exactly the way you want it.",
        activities: [
          "Scenic drive to Kollam, backwater cruise, village exploration",
          "Kayaking (weather permitting), tea stop, local Kerala cuisine",
          "Free time: café hopping, beach walk, shopping, revisit your favourite spots",
          "Farewell lunch, then evening departure back to Bangalore",
        ],
      },
      {
        day: "4",
        title: "Home",
        description: "Early morning arrival in Bangalore - the trip's over, the friendships are just getting started.",
        activities: ["Early morning arrival in Bangalore"],
      },
    ],
    experiences: [
      "Cliffside sunsets",
      "Hidden beaches",
      "Beach cafés",
      "Community games",
      "Poolside evenings",
      "Backwater exploration",
      "Kayaking (weather permitting)",
      "Photography walks",
      "Slow travel",
      "Local Kerala cuisine",
      "Surprise experiences",
      "New friendships",
    ],
    included: [
      "Stay Accommodation",
      "Daily Breakfast",
      "Hosted Community Experience",
      "Backwater Experience",
      "Surfing",
      "Community Activities",
      "Poolside Social Evening",
      "Beachside Experiences",
      "Unlimited Main Character Moments",
      "AC Transportation from Bangalore, if opted in",
    ],
    notIncluded: [
      "Lunch & Dinner",
      "Personal Expenses",
      "Adventure Activities not listed above",
      "Shopping",
      "Anything Not Mentioned Above",
    ],
    beforeYouBook:
      "Every chapter is intentionally designed to stay flexible - weather changes, people change, and some of the best discoveries aren't found on Google Maps. The itinerary above is an overview of the experience; your official trip title, host reveal, meeting points, timings and surprise experiences are shared 72 hours before departure. Seats are limited to 20 people for the 28-30 August 2026 dates - message us on WhatsApp to lock yours in.",
    whatsappMessage:
      "Hi! I'm interested in the Raksha Bandhan Varkala chapter (28-30 Aug 2026, ₹12,999 · 3 Days/4 Nights). Can you share more details?",
  },
  {
    id: "onam",
    navLabel: "Onam",
    navDates: "26-29 Aug 2026",
    badge: "ONAM CHAPTER · 26-29 AUG 2026",
    badgeIcon: Flower2,
    themeColor: "#F5B841",
    heroImage: "https://images.unsplash.com/photo-1663002422178-369db7cc8509?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Come home to Kerala this Onam.",
    heroSubtitle:
      "Homes bloom with Pookalams, families gather for the Sadya, and an entire state slows down to celebrate. This year, celebrate it beside the Arabian Sea.",
    price: "Message us for pricing",
    duration: "4 Days · 5 Nights",
    departure: "Bangalore / Pan India",
    seats: "20 people",
    dateChip: "26-29 Aug 2026",
    aboutHook:
      "Some festivals are watched. Some festivals are celebrated. And then there is Onam - for a few magical days every year, Kerala transforms.",
    aboutBody:
      "Homes bloom with intricate Pookalams crafted from fresh flowers, families gather around banana leaves for a feast prepared with love, temples echo with prayers, and an entire state slows down to celebrate gratitude, harvest and togetherness. Over four unforgettable days - Bangalore to Varkala to Thiruvananthapuram to Kollam to Bangalore - you'll witness the soul of God's Own Country through its people, traditions, coastline, backwaters and timeless culture. An AC journey, hosted by Oyestore.",
    perfectFor: ["Solo Travellers", "Friends", "Couples", "Creators", "First-Time Group Travellers"],
    hiddenSpots: varkalaHiddenSpots,
    sneakPeek: [
      {
        id: "on-1",
        alt: "Looking out over the valley on a past chapter",
        image: "/varkala/sneak-3.jpg",
        className: "col-span-2 row-span-2",
      },
      {
        id: "on-2",
        alt: "A traditional Onam sadya, served on a banana leaf",
        image: "/varkala/gallery-sadya.jpg",
        className: "col-span-2",
      },
      {
        id: "on-3",
        alt: "Sunset from the ferry",
        image: "/varkala/gallery-ferry-sunset.jpg",
        className: "col-span-2",
      },
      {
        id: "on-4",
        alt: "Rangoli, hand-drawn to welcome the season",
        image: "/varkala/gallery-rangoli.jpg",
        className: "",
      },
      {
        id: "on-5",
        alt: "A temple chariot on the road",
        image: "/varkala/gallery-temple-chariot.jpg",
        className: "",
      },
      {
        id: "on-6",
        alt: "Wandering the village streets",
        image: "/varkala/gallery-village-street.jpg",
        className: "",
      },
      {
        id: "on-7",
        alt: "Travellers from a past Oyestore chapter",
        image: "/varkala/sneak-1.jpg",
        className: "",
      },
    ],
    days: [
      {
        day: "0",
        title: "The City Stays Behind",
        description: "Departure from Bangalore - somewhere between playlists, roadside chai and midnight conversations, the city disappears. Tomorrow, Kerala welcomes you.",
        activities: ["Departure from Bangalore", "Roadside chai and midnight conversations", "Overnight journey to Kerala"],
      },
      {
        day: "1",
        title: "Where the Sea Meets the Sky",
        description: "26 August, Thiruvonam - today is Onam, and this year you'll celebrate it beside the Arabian Sea.",
        activities: [
          "Arrival in Varkala, hotel check-in, freshen up, traditional Kerala breakfast, community welcome session",
          "Traditional Onam Sadya served on banana leaves",
          "Onam celebrations with the local community, Pookalam experiences, cultural performances",
          "Explore Varkala Cliff, photography walk",
          "Sunset at Varkala Cliff, community games, poolside social evening, music and storytelling",
          "Overnight stay in Varkala",
        ],
      },
      {
        day: "2",
        title: "The Heart of Kerala",
        description: "27 August, Avittom - travel to Kerala's capital, Thiruvananthapuram, for a glimpse into the state's heritage and festive spirit.",
        activities: [
          "Scenic drive to Thiruvananthapuram, visit the surroundings of Padmanabhaswamy Temple, heritage walk through the city",
          "Explore festive streets and local markets, Napier Museum surroundings, Kanakakkunnu Palace grounds",
          "Café stop, local shopping and photography",
          "Return to Varkala, sunset by the sea, community gathering",
        ],
      },
      {
        day: "3",
        title: "The Rhythm of the Backwaters",
        description: "Leave the coast behind and discover another side of Kerala - quiet canals, palm-lined waterways, village life at its own pace.",
        activities: [
          "Scenic drive to Kollam, backwater cruise, village exploration",
          "Kayaking (weather permitting), adventure activities, tea stop, local Kerala cuisine, photography throughout the day",
          "Farewell gathering, community awards, final group photographs, bonfire conversations",
        ],
      },
      {
        day: "4",
        title: "Your Day, Your Way",
        description: "No alarms, no checklist, no rush - one final day to experience Kerala exactly the way you want, before departing for Bangalore.",
        activities: [
          "Revisit your favourite café, walk the cliffs again, watch one last sunset",
          "Café hopping, beach time, shopping, photography, free exploration",
          "Farewell lunch",
          "Evening departure towards Bangalore",
        ],
      },
    ],
    experiences: [
      "Celebrate Kerala's biggest festival with locals",
      "Traditional Onam Sadya on banana leaves",
      "Beautiful Pookalam experiences",
      "Temple visits and festive streets",
      "Cultural performances",
      "Heritage walks",
      "Varkala Cliff sunsets",
      "Hidden beaches",
      "Cliff cafés",
      "Kerala backwaters",
      "Slow village life",
      "Community games",
      "Bonfire conversations",
      "Poolside evenings",
      "Photography sessions",
      "New friendships",
    ],
    included: [
      "AC Transportation from Bangalore (for with-transport bookings only)",
      "Premium Stay Accommodation",
      "Traditional Onam Sadya Experience",
      "Daily Breakfast",
      "Hosted Community Experience",
      "Onam Celebrations",
      "Varkala Cliff Experience",
      "Thiruvananthapuram Heritage Exploration",
      "Kollam Backwater Experience",
      "Community Activities & Social Evenings",
      "Poolside Experience",
      "Unlimited Main Character Moments",
      "Surfing (weather permitting)",
    ],
    notIncluded: [
      "Lunch & Dinner (except Onam Sadya)",
      "Personal Expenses",
      "Optional Adventure Activities",
      "Shopping & Souvenirs",
      "Anything Not Mentioned Above",
    ],
    beforeYouBook:
      "Every chapter is intentionally designed to stay flexible - weather changes, people change, and some of the best discoveries aren't found on Google Maps. The itinerary above is an overview of the experience; your official trip title, host reveal, meeting points, timings and surprise experiences are shared 72 hours before departure. Seats are limited to 20 people for the 26-29 August 2026 dates - message us on WhatsApp to lock yours in.",
    whatsappMessage:
      "Hi! I'm interested in the Onam Varkala chapter (26-29 Aug 2026, 4 Days/5 Nights). Can you share pricing and more details?",
  },
  {
    id: "munnar-vagamon",
    navLabel: "Munnar x Vagamon",
    navDates: "21-23 Aug 2026",
    badge: "MUNNAR X VAGAMON CHAPTER · 21-23 AUG 2026",
    badgeIcon: Mountain,
    themeColor: "#4F8A5B",
    heroImage: "/munnar-vagamon/hero-reservoir-group.jpg",
    heroTitle: "Let the mountains conquer your mind.",
    heroSubtitle:
      "Freedom isn't always found by the sea. Sometimes it's waiting at the next hairpin bend.",
    price: "₹14,999 onwards",
    duration: "3 Days · 4 Nights",
    departure: "Bangalore / Pan India",
    seats: "20 people",
    dateChip: "21-23 Aug 2026",
    aboutHook:
      "Days begin with mist rolling over endless tea gardens, drift through winding roads and hidden cafés, disappear into valleys where time slows down, and end with sunsets that remind you how small your worries really are.",
    aboutBody:
      "This chapter isn't about conquering mountains. It's about letting the mountains conquer your mind. From Munnar's tea estates to Vagamon's rolling meadows, over 3 days and 4 nights. Your official trip title, host and surprise experiences are revealed 72 hours before departure - because every road deserves a story.",
    perfectFor: ["Solo Travellers", "Friends", "Couples", "Creators", "First-Time Group Travellers"],
    sneakPeek: [
      {
        id: "mv-1",
        alt: "Looking out over the mist-covered hills",
        image: "/munnar-vagamon/gallery-mist-portrait.jpg",
        className: "col-span-2 row-span-2",
      },
      {
        id: "mv-2",
        alt: "Watching the sky turn pink from the infinity pool",
        image: "/munnar-vagamon/gallery-pool-sunset.jpg",
        className: "col-span-2",
      },
      {
        id: "mv-3",
        alt: "The crew, ready to roll out for the weekend",
        image: "/munnar-vagamon/gallery-night-arrival.jpg",
        className: "col-span-2",
      },
      {
        id: "mv-4",
        alt: "Bamboo rafting across the water",
        image: "/munnar-vagamon/gallery-bamboo-raft-v2.jpg",
        className: "",
      },
      {
        id: "mv-5",
        alt: "A detour through a sunflower field",
        image: "/munnar-vagamon/gallery-sunflower-field-v2.jpg",
        className: "",
      },
      {
        id: "mv-6",
        alt: "Golden hour, flower behind the ear",
        image: "/munnar-vagamon/gallery-flower-portrait.jpg",
        className: "",
      },
      {
        id: "mv-7",
        alt: "The whole gang, reservoir-side",
        image: "/munnar-vagamon/gallery-reservoir-group-2.jpg",
        className: "",
      },
    ],
    days: [
      {
        day: "0",
        title: "The Mountains Are Waiting",
        description: "Thursday night, the city slowly disappears behind you and the mountains start calling.",
        activities: [
          "Departure from Bangalore, Thursday night",
          "Office groups go silent, streetlights turn into highways",
          "Highways slowly become forests",
          "Someone connects their playlist, someone instantly skips the first song",
          "Overnight journey towards Munnar",
        ],
      },
      {
        day: "1",
        title: "Where the Clouds Live",
        description: "Welcome to Munnar - a day with no rush, only roads worth stopping for.",
        activities: [
          "Wake up to cooler air, freshen up, breakfast",
          "Wander through endless tea estates and hidden waterfalls",
          "Scenic viewpoints and cafés tucked away in the hills",
          "Golden light and mountains that simply exist, no rush",
          "Evening: music, dinner, stories and mountain air as the group forms",
        ],
      },
      {
        day: "2",
        title: "The Best Plans Are Never Planned",
        description: "Leave Munnar behind and discover Vagamon at its own pace.",
        activities: [
          "Ride through winding roads where every turn feels like a postcard",
          "Rolling meadows, pine forests, hidden viewpoints, quiet valleys",
          "Stop because the chai smelled good, stay because the view was better",
          "Photography stops and a few surprises along the way",
          "Evening: campfire, laughter and stories as the sun disappears behind the hills",
        ],
      },
      {
        day: "3",
        title: "Leave Lighter",
        description: "One unhurried last morning, then the journey back to Bangalore.",
        activities: [
          "Wake up slowly, watch the clouds one last time",
          "Order chai without checking your watch, one final photograph",
          "Check out",
          "Begin the journey back to Bangalore",
          "Somewhere between the mountains and the city, everyone starts wondering when they'll return",
        ],
      },
    ],
    experiences: [
      "Tea plantations",
      "Scenic mountain drives",
      "Hidden cafés",
      "Waterfalls",
      "Rolling meadows",
      "Pine forests",
      "Sunrise and sunset viewpoints",
      "Photography-friendly locations",
      "Community experiences",
      "Slow mountain mornings",
      "Surprise moments",
    ],
    included: [
      "Accommodation",
      "Breakfasts",
      "Surprise Host",
      "Scooter Exploration",
      "Campfire Experience",
      "Community Activities",
      "Tea Estate & Viewpoint Visits",
      "Unlimited Main Character Moments",
      "AC Transportation from Bangalore, if opted in (at real-time bus fares)",
    ],
    notIncluded: [
      "Lunch & Dinner",
      "Personal Expenses",
      "Adventure Activities not included above",
      "Shopping",
      "Anything Not Mentioned Above",
    ],
    beforeYouBook:
      "Every chapter is intentionally designed to remain flexible - weather changes, people change, and some of the best discoveries aren't found on Google Maps. The itinerary above is an overview of the experience; your official trip title, host reveal, meeting points, timings and surprise experiences are shared 72 hours before departure. AC transportation from Bangalore is optional and billed at real-time bus fares, so it's quoted separately when you book. Seats are limited to 20 people for the 21-23 August 2026 dates - message us on WhatsApp to lock yours in.",
    whatsappMessage:
      "Hi! I'm interested in the Munnar x Vagamon chapter (21-23 Aug 2026, ₹14,999 · 3 Days/4 Nights). Can you share more details?",
  },
  {
    id: "sri-lanka-odyssey",
    navLabel: "Sri Lanka",
    navDates: "15-21 Oct 2026",
    badge: "THE ODYSSEY · SRI LANKA · 15-21 OCT 2026",
    badgeIcon: Car,
    themeColor: "#2DD4BF",
    heroImage: "https://images.unsplash.com/photo-1778506200826-f2d1a883fdf9?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "Drive an island. Collect stories.",
    heroSubtitle:
      "800+ kilometres across one of the world's most diverse islands - mountain roads, tea plantations, wildlife safaris and endless coastlines.",
    price: "₹59,999 per person",
    duration: "7 Days · 6 Nights",
    departure: "Bengaluru / Pan India",
    seats: "20 explorers",
    dateChip: "15-21 Oct 2026",
    aboutHook:
      "Some countries are visited. Some countries are experienced. And then there is Sri Lanka - an island where mountain roads disappear into clouds, tea plantations stretch endlessly across the hills, and every coastal highway feels like it was built for road trips.",
    aboutBody:
      "For seven unforgettable days, we'll drive over 800+ kilometres across one of the world's most diverse islands - waking before sunrise for wildlife safaris, stopping at cafés we never planned to visit, driving through misty mountains, tropical forests and endless coastlines. This isn't about reaching destinations - it's about discovering everything in between. A self-drive convoy of 6 cars, 20 explorers, from Colombo through the tea hills to Yala's wilderness and Galle's coast, and back.",
    perfectFor: [
      "Solo Travellers",
      "Friends",
      "Couples",
      "Creators",
      "Road Trip Lovers",
      "First-Time International Travellers",
    ],
    sneakPeek: [
      {
        id: "sl-1",
        alt: "Sigiriya, the ancient rock fortress",
        image: "/varkala/gallery-sigiriya.jpg",
        className: "col-span-2 row-span-2",
      },
      {
        id: "sl-2",
        alt: "Crossing the Nine Arches Bridge by train",
        image: "/varkala/gallery-nine-arch.jpg",
        className: "col-span-2",
      },
      {
        id: "sl-3",
        alt: "Elephants in the wild",
        image: "/varkala/gallery-elephant.jpg",
        className: "col-span-2",
      },
      { id: "sl-4", alt: "Tea country in the central highlands", image: "/varkala/gallery-tea.jpg", className: "" },
      { id: "sl-5", alt: "Galle Fort's old lighthouse", image: "/varkala/gallery-galle.jpg", className: "" },
      {
        id: "sl-6",
        alt: "On the road, somewhere between towns",
        image: "/varkala/gallery-road-trip.jpg",
        className: "",
      },
      {
        id: "sl-7",
        alt: "The southern coastline from above",
        image: "/varkala/gallery-sl-coast.jpg",
        className: "",
      },
    ],
    days: [
      {
        day: "0",
        title: "Meet The Convoy",
        description: "Arrival in Sri Lanka - meet your fellow explorers before an entirely new country awaits.",
        activities: [
          "Arrival in Sri Lanka, meet your fellow explorers",
          "Load the playlists, pick your road-trip snacks",
          "Today, we leave behind familiar roads",
        ],
      },
      {
        day: "1",
        title: "From Colombo to the Hills",
        description: "~140 km. Arrive in Colombo before sunrise, collect the convoy, and drive toward Sri Lanka's cultural capital.",
        activities: [
          "Complete immigration, licence registration and collect the convoy vehicles",
          "Pinnawala Elephant Sanctuary (private experience) - elephant bathing & feeding",
          "Mawanella Spice Garden, scenic mountain drive",
          "Temple of the Sacred Tooth, Kandyan cultural performance",
          "Settle into a hillside resort overlooking Kandy",
        ],
      },
      {
        day: "2",
        title: "Through the Tea Hills",
        description: "~100 km. One of Sri Lanka's most beautiful drives - rolling hills, tea plantations, waterfalls, cool mountain air.",
        activities: [
          "Royal Botanical Gardens, Tea Factory Experience",
          "Bhakta Hanuman Temple, Ramboda Falls",
          "Strawberry farms, Gregory Lake",
          "Evening free to explore Nuwara Eliya",
        ],
      },
      {
        day: "3",
        title: "The Long Way South",
        description: "~170 km. One of the world's most scenic train journeys, then a drive toward Yala National Park.",
        activities: [
          "Optional: board the famous Nanu Oya-Ella train while the convoy continues by road",
          "Group reunites in Ella, drives toward Yala National Park",
          "Check into the safari resort - sleep early, tomorrow starts before sunrise",
        ],
      },
      {
        day: "4",
        title: "Into the Wild",
        description: "~220 km. A pre-dawn safari through Yala National Park, then one of Sri Lanka's most spectacular coastal drives.",
        activities: [
          "Yala National Park safari before dawn - elephants, leopards, sloth bears, peacocks, crocodiles",
          "Coastal drive: ocean on one side, palm trees on the other, stopping wherever the road surprises us",
          "Explore Galle's Dutch Fort and old streets",
          "Continue to Bentota for a beachside resort stay",
        ],
      },
      {
        day: "5",
        title: "The Ocean Chapter",
        description: "No alarms today - just waves. A free day on Bentota's coastline.",
        activities: [
          "Optional: jet ski, banana boat, water skiing, snorkelling, scuba diving, windsurfing",
          "Or simply find your own stretch of beach",
          "Evening bonfire, community dinner, stories under the stars",
        ],
      },
      {
        day: "6",
        title: "The Last Drive",
        description: "Bentota to Colombo, with stops along the way before one final night in the city.",
        activities: [
          "Kosgoda Turtle Hatchery, Madu River Mangroves",
          "Hidden cafés, roadside fruit stalls",
          "Return the convoy vehicles, check into the Colombo resort",
          "Street food, shopping, music and one final dinner together",
        ],
      },
      {
        day: "7",
        title: "Until the Next Road",
        description: "Breakfast, airport transfers, one last goodbye - the expedition ends, the stories don't.",
        activities: ["Breakfast", "Airport transfers", "One last goodbye"],
      },
    ],
    experiences: [
      "Mountain roads",
      "Tea country",
      "Elephant encounters",
      "Scenic train journey",
      "Wildlife safari",
      "Historic cities",
      "Surf beaches",
      "Coastal roads",
      "Sunset drives",
      "Community experiences",
      "Photography-friendly locations",
      "Hidden local gems",
      "Slow travel",
      "Unexpected stops",
    ],
    included: [
      "Premium resorts & villas",
      "Self-drive convoy",
      "Airport transfers",
      "Daily breakfast",
      "Selected dinners",
      "Pinnawala Elephant Experience",
      "Tea factory visit",
      "Yala National Park safari",
      "Turtle hatchery visit",
      "Madu River experience",
      "Entry tickets (as per itinerary)",
      "Dedicated Oyestore crew",
    ],
    notIncluded: [
      "International flights",
      "Lunch & dinner (unless mentioned)",
      "Fuel & toll sharing (if applicable)",
      "Refundable security deposit for cars",
      "Personal expenses",
      "Optional adventure activities",
      "Shopping & souvenirs",
      "Anything not mentioned above",
    ],
    beforeYouBook:
      "Every expedition is intentionally designed to stay flexible - weather changes, roads surprise us, and some of the best memories happen when we decide to take the longer route. The itinerary above is a guide, not a rigid schedule; your official convoy details, vehicle allocations, meeting points and surprise experiences are shared before departure. Dates are 15-21 October 2026 (tentative) and seats are limited to 20 explorers - message us on WhatsApp to lock yours in.",
    whatsappMessage:
      "Hi! I'm interested in The Odyssey - Sri Lanka road trip (15-21 Oct 2026, ₹59,999 · 7 Days/6 Nights). Can you share more details?",
  },
];

const futurePillars = [
  {
    icon: Layers,
    title: "Chapters Instead of Packages",
    description: "Experiences built around seasons, cultures, festivals and road trips - not generic itineraries.",
  },
  {
    icon: Sprout,
    title: "Living Destinations",
    description:
      "Every trip contributes new cafés, scenic routes, viewpoints, hidden gems and local recommendations. Destinations evolve with every chapter.",
  },
  {
    icon: Camera,
    title: "Creator-Led Discovery",
    description: "The people who truly know a destination help shape how it's experienced. Authentic stories over curated advertisements.",
  },
  {
    icon: Store,
    title: "Local-First Travel",
    description:
      "An ecosystem where local cafés, artists, photographers, guides and small businesses become part of every journey - not just stops along the way.",
  },
  {
    icon: Zap,
    title: "Technology That Connects",
    description: "Less time switching between apps. More time experiencing places. Technology should simplify travel, not define it.",
  },
  {
    icon: Network,
    title: "An Ecosystem That Grows",
    description: "Every traveller leaves behind something valuable. Every chapter improves the next. Every destination becomes richer over time.",
  },
];

const whyOyestore = [
  {
    icon: Sparkles,
    title: "Creator-led, not corporate",
    description: "Hosted by real creators who've made the trip themselves, not a rotating agency guide.",
  },
  {
    icon: Users,
    title: "Small chapters, never a tour bus",
    description: "Capped at 20 people - closer to a friend group than a coach full of strangers.",
  },
  {
    icon: Heart,
    title: "Built on a real community",
    description: "Every chapter feeds back into Oyestore's community feed - real photos, real people, before you even book.",
  },
];

const oyestorePromise = "You pick the place. We take care of the rest.";

const oyestoreAdvantage = [
  "Stay in handpicked places",
  "Curated local experiences",
  "Everything planned before you arrive",
  "No itinerary headaches",
  "Real-time trip updates",
  "A host who actually knows the destination",
];

const diyComparison = [
  { task: "Find a place to stay", diy: "Hours of scrolling listings", oyestore: "Handpicked, already done" },
  { task: "Figure out transport", diy: "Compare cabs, buses, routes", oyestore: "Planned for you" },
  { task: "Research what's worth seeing", diy: "Dig through blogs and reels", oyestore: "Curated by people who've been" },
  { task: "Build an itinerary", diy: "Piece it together yourself", oyestore: "Done before you arrive" },
  { task: "Coordinate everything on the day", diy: "You're the trip manager", oyestore: "You just show up" },
];

const afterYouBookSteps = [
  { title: "Book", description: "Message us on WhatsApp and lock your seat." },
  { title: "Confirmation", description: "Payment details and booking confirmation, sent right away." },
  { title: "Trip updates", description: "Logistics, packing notes and reminders as the date gets closer." },
  { title: "Pre-trip briefing", description: "A final rundown before departure - meeting point, host intro, what to expect." },
  { title: "Show up & travel", description: "The rest is on us." },
];

const ecosystemPillars = [
  "A themed chapter every season - Independence Day, Raksha Bandhan, Onam, Munnar x Vagamon, and expeditions like The Odyssey - never the same trip twice",
  "A destinations vault written by locals and creators who've actually been there, not scraped listings",
  "A creator network - real hosts building a track record chapter by chapter, not a rotating agency guide",
  "A community feed that grows with every trip - the photos, stories and recommendations feed straight back into the next chapter",
];

const hiddenSpots = [
  {
    name: "Jatayu Earth Center",
    description: "The world's largest bird sculpture, carved into a hilltop.",
  },
  {
    name: "Papanasam Beach Cliff Walk",
    description: "A quiet clifftop trail above the main beach, best at dusk.",
  },
];

const refundTiers = [
  { window: "30+ days before departure", refund: "75% refund" },
  { window: "15-29 days before departure", refund: "50% refund" },
  { window: "7-14 days before departure", refund: "25% refund" },
  { window: "Less than 7 days / no-show", refund: "No refund" },
];

interface VarkalaLandingPageProps {
  searchParams: Promise<{ chapter?: string }>;
}

export default async function VarkalaLandingPage({ searchParams }: VarkalaLandingPageProps) {
  const { chapter: chapterParam } = await searchParams;
  const chapter = chapters.find((c) => c.id === chapterParam) ?? chapters[0];
  const waHref = whatsappHref(chapter.whatsappMessage);

  return (
    <div className="relative min-h-screen bg-background">
      <style>{`
        @keyframes oye-dot-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }
      `}</style>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fffff0 1px, transparent 1px), linear-gradient(to bottom, #fffff0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -left-40 -top-40 size-[32rem] rounded-full opacity-[0.12] blur-[120px] transition-colors duration-500"
          style={{ backgroundColor: chapter.themeColor }}
        />
        {chapter.id === "independence-day" && (
          <div
            className="absolute -bottom-40 -right-40 size-[28rem] rounded-full opacity-[0.08] blur-[120px]"
            style={{ backgroundColor: "#138808" }}
          />
        )}
        <div className="absolute right-0 top-1/3 size-[28rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
      </div>

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        <Link
          href="/varkala"
          className="flex items-center gap-2 text-lg font-black tracking-tight text-foreground"
        >
          <Image
            src="/brand/oyestore-logo.png"
            alt="Oyestore"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span aria-label="Oyestore.">
            Oyestore<OyestoreDot />
          </span>
        </Link>
        <div className="flex items-center gap-2.5">
          <Link
            href="/host"
            className="flex items-center gap-1.5 rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 px-3 py-2 text-xs font-medium text-foreground/90 transition hover:bg-[#fffff0]/10 hover:text-foreground sm:px-4 sm:text-sm"
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">Host with us</span>
            <span className="sm:hidden">Host</span>
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Oyestore on Instagram"
            className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-medium text-midnight transition hover:scale-[1.03] hover:bg-pearl/90 sm:flex"
          >
            <MessageCircle size={16} />
            WhatsApp us
          </a>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl space-y-10 px-4 sm:space-y-16 sm:px-6">
        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">FIVE CHAPTERS THIS SEASON · VARKALA, MUNNAR &amp; SRI LANKA</p>
          <div className="scrollbar-none mt-3 flex gap-2 overflow-x-auto">
            {chapters.map((c) => (
              <Link
                key={c.id}
                href={c.id === chapters[0].id ? "/varkala" : `/varkala?chapter=${c.id}`}
                className={`flex shrink-0 flex-col rounded-2xl border px-4 py-2.5 transition ${
                  c.id === chapter.id
                    ? "border-[#fffff0]/25"
                    : "border-[#fffff0]/10 bg-[#fffff0]/[0.02] hover:bg-[#fffff0]/5"
                }`}
                style={c.id === chapter.id ? { backgroundColor: `${c.themeColor}1a` } : undefined}
              >
                <span className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                  <c.badgeIcon
                    size={13}
                    style={{ color: c.themeColor }}
                  />
                  {c.navLabel}
                </span>
                <span className="text-xs text-muted-foreground">{c.navDates}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="premium-border premium-shadow relative rounded-3xl">
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl sm:h-[480px]">
              <Image
                key={chapter.heroImage}
                src={chapter.heroImage}
                alt={chapter.navLabel}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

              <span className="absolute left-6 top-6 z-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#fffff0]/15 bg-card/70 px-3 py-1 text-[11px] font-medium tracking-wider text-platinum backdrop-blur-xl sm:px-4 sm:py-1.5 sm:text-xs">
                <chapter.badgeIcon
                  size={12}
                  style={{ color: chapter.themeColor }}
                />
                {chapter.badge}
              </span>

              <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
                <h1 className="text-gradient max-w-xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
                  {chapter.heroTitle}
                </h1>
                <p className="mt-3 max-w-md text-[#fffff0]/70">{chapter.heroSubtitle}</p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#052e16] transition hover:scale-[1.03]"
                  >
                    <MessageCircle size={16} />
                    Message us on WhatsApp
                  </a>
                  <a
                    href="#the-chapter"
                    className="inline-flex items-center gap-2 rounded-full border border-[#fffff0]/20 bg-[#fffff0]/5 px-5 py-2.5 text-sm font-medium text-pearl backdrop-blur-xl transition hover:bg-[#fffff0]/10"
                  >
                    See the chapter
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-dark premium-shadow relative z-10 mx-6 -mt-8 hidden grid-cols-4 gap-4 rounded-2xl p-6 sm:grid">
              <Stat
                icon={Tag}
                label="Starts From"
                value={chapter.price}
              />
              <Stat
                icon={Calendar}
                label="Duration"
                value={chapter.duration}
              />
              <Stat
                icon={Bus}
                label="Departs"
                value={chapter.departure}
              />
              <Stat
                icon={Users}
                label="Seats"
                value={chapter.seats}
              />
            </div>
          </div>

          <div className="scrollbar-none relative z-10 mx-1 -mt-5 flex gap-2 overflow-x-auto sm:hidden">
            <StatChip
              icon={Tag}
              value={chapter.price}
            />
            <StatChip
              icon={Calendar}
              value={chapter.duration}
            />
            <StatChip
              icon={Bus}
              value={chapter.departure}
            />
            <StatChip
              icon={Users}
              value={chapter.seats}
            />
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {whyOyestore.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-dark premium-shadow flex items-start gap-3 rounded-2xl p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fffff0]/5 text-platinum">
                <Icon size={16} />
              </span>
              <div>
                <p className="font-bold text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="glass-dark premium-shadow rounded-3xl p-6 sm:p-10">
          <p className="text-gradient max-w-xl text-2xl font-black leading-snug sm:text-3xl">
            {oyestorePromise}
          </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium tracking-wider text-platinum">WHY OYESTORE?</p>
                <ul className="mt-3 space-y-2.5">
                  {oyestoreAdvantage.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#25D366]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium tracking-wider text-platinum">PLAN IT YOURSELF, OR DON&apos;T</p>
                <div className="mt-3 space-y-2.5">
                  {diyComparison.map((row) => (
                    <div
                      key={row.task}
                      className="rounded-xl border border-[#fffff0]/10 bg-[#fffff0]/[0.03] p-3"
                    >
                      <p className="text-sm font-medium text-foreground/90">{row.task}</p>
                      <div className="mt-1.5 flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground/70 line-through decoration-[#fffff0]/20">
                          {row.diy}
                        </span>
                        <ArrowRight
                          size={11}
                          className="shrink-0 text-muted-foreground/50"
                        />
                        <span className="font-medium text-[#25D366]">{row.oyestore}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">ABOUT THE CHAPTER</p>
          <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
            {chapter.aboutHook}
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{chapter.aboutBody}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {chapter.perfectFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#fffff0]/10 bg-[#fffff0]/5 px-3 py-1.5 text-xs text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section id="the-chapter">
          <p className="text-xs font-medium tracking-wider text-platinum">THE CHAPTER</p>
          <div className="relative mt-6 space-y-8 border-l border-[#fffff0]/10 pl-8">
            {chapter.days.map((day) => (
              <div
                key={day.day}
                className="relative"
              >
                <span className="absolute -left-[calc(2rem+1px)] top-0 flex size-8 items-center justify-center rounded-full border border-[#fffff0]/15 bg-background text-xs font-bold text-foreground">
                  {day.day}
                </span>
                <p className="text-xs font-medium tracking-wider text-platinum">DAY {day.day}</p>
                <h3 className="mt-1 text-xl font-bold text-foreground">{day.title}</h3>
                <p className="mt-1.5 max-w-2xl text-sm text-foreground/80">{day.description}</p>
                <ul className="mt-3 max-w-2xl space-y-1.5">
                  {day.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#fffff0]/25" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">WHAT YOU&apos;LL EXPERIENCE</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {chapter.experiences.map((experience) => (
              <span
                key={experience}
                className="rounded-full border border-[#fffff0]/10 bg-[#fffff0]/5 px-3 py-1.5 text-xs text-foreground/80"
              >
                {experience}
              </span>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">SNEAK PEEK</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Not a brochure. These are our travellers.
          </p>
          <div className="mt-4 grid grid-cols-4 auto-rows-[9rem] gap-3 sm:auto-rows-[10.5rem]">
            {chapter.sneakPeek.map((photo) => (
              <div
                key={photo.id}
                className={`premium-border relative overflow-hidden rounded-2xl ${photo.className}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {chapter.hiddenSpots && (
            <div className="glass-dark premium-shadow mt-4 rounded-2xl p-5">
              <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
                <Compass size={12} />
                SPOTS YOU&apos;LL FIND IN VARKALA
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {chapter.hiddenSpots.map((spot) => (
                  <div key={spot.name}>
                    <p className="font-semibold text-foreground">{spot.name}</p>
                    <p className="text-sm text-muted-foreground">{spot.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <p className="max-w-xl text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
          You just show up. We&apos;ve handled the rest.
        </p>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="glass-dark premium-shadow rounded-2xl p-5">
            <p className="text-xs font-medium tracking-wider text-platinum">INCLUDED</p>
            <ul className="mt-3 space-y-2.5">
              {chapter.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[#3ddc84]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-dark premium-shadow rounded-2xl p-5">
            <p className="text-xs font-medium tracking-wider text-platinum">NOT INCLUDED</p>
            <ul className="mt-3 space-y-2.5">
              {chapter.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <X
                    size={16}
                    className="mt-0.5 shrink-0 text-muted-foreground"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="glass-dark premium-shadow rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-medium tracking-wider text-platinum">BEFORE YOU BOOK</p>
          <p className="mt-2 text-sm text-muted-foreground">{chapter.beforeYouBook}</p>
        </section>

        <section
          id="cancellation"
          className="glass-dark premium-shadow rounded-2xl p-5 sm:p-6"
        >
          <p className="text-xs font-medium tracking-wider text-platinum">CANCELLATION & REFUND POLICY</p>
          <div className="mt-3 divide-y divide-[#fffff0]/10">
            {refundTiers.map((tier) => (
              <div
                key={tier.window}
                className="flex items-center justify-between gap-3 py-3"
              >
                <span className="text-sm text-foreground/90">{tier.window}</span>
                <span className="shrink-0 text-sm font-bold text-foreground">{tier.refund}</span>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            <li>
              If Oyestore cancels the chapter (low sign-ups, weather, safety) - full refund or
              credit toward a future chapter, your choice.
            </li>
            <li>One free date change if requested 15+ days before departure, subject to seat availability.</li>
            <li>Any refund amount is credited back to your original payment method within 21 days.</li>
          </ul>
        </section>

        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">WHAT HAPPENS AFTER I BOOK?</p>
          <div className="mt-4 space-y-3">
            {afterYouBookSteps.map((step, index) => (
              <div
                key={step.title}
                className="glass-dark premium-shadow flex gap-4 rounded-2xl p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-sm font-bold text-[#25D366]">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="glass-dark premium-shadow group relative flex items-center justify-between overflow-hidden rounded-3xl p-6 sm:p-8"
        >
          <div className="relative">
            <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
              <MessageCircle size={12} />
              STILL HAVE QUESTIONS?
            </p>
            <h3 className="mt-1 text-2xl font-bold text-pearl sm:text-3xl">Chat with us on WhatsApp</h3>
            <p className="mt-1 text-sm text-pearl/60 sm:text-base">+91 84001 81281</p>
          </div>
          <ArrowRight
            size={22}
            className="relative shrink-0 text-pearl transition-transform group-hover:translate-x-1"
          />
        </a>

        <section className="glass-dark premium-shadow rounded-3xl p-6 sm:p-10">
          <p className="text-xs font-medium tracking-wider text-platinum">THE FUTURE WE&apos;RE BUILDING</p>

          <p className="mt-4 text-lg font-semibold text-foreground sm:text-xl">Travel today is disconnected.</p>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            <p>You discover destinations on Instagram.</p>
            <p>Plan them on Google.</p>
            <p>Read blogs for recommendations.</p>
            <p>Open Maps for cafés.</p>
            <p>Watch YouTube for itineraries.</p>
            <p>Ask Reddit what to avoid.</p>
            <p>Book somewhere else.</p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            And once the trip ends, everything you&apos;ve learned disappears.
          </p>

          <p className="mt-6 font-semibold text-foreground">We believe travel deserves something better.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            We&apos;re building a travel ecosystem where discovery, planning, creators, local businesses,
            experiences and travellers exist in one connected world.
          </p>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            <p>A place where every journey leaves behind knowledge.</p>
            <p>Every creator adds perspective.</p>
            <p>Every local business becomes discoverable.</p>
            <p>And every chapter makes the next one better.</p>
          </div>

          <p className="text-gradient mt-6 text-sm font-semibold sm:text-base">
            Because the future of travel isn&apos;t about visiting more places. It&apos;s about
            understanding them better.
          </p>

          <p className="mt-10 text-xs font-medium tracking-wider text-platinum">WHAT THAT FUTURE LOOKS LIKE</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {futurePillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#fffff0]/10 bg-[#fffff0]/5 p-5"
              >
                <Icon
                  size={18}
                  className="text-foreground/70"
                />
                <p className="mt-3 font-semibold text-foreground">{title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[#fffff0]/10 pt-6">
            <p className="text-xs font-medium tracking-wider text-platinum">OUR VISION</p>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>We&apos;re not building another travel company.</p>
              <p>We&apos;re building the infrastructure for a better way to explore the world.</p>
              <p>
                One where people, places and stories become part of a connected ecosystem that grows
                stronger with every journey.
              </p>
            </div>
            <p className="text-gradient mt-3 text-sm font-bold uppercase tracking-[0.15em]">
              One chapter at a time.
            </p>
          </div>
        </section>

      </main>

      <StickyBookingCard
        price={chapter.price}
        waHref={waHref}
        advantage={oyestoreAdvantage}
      />

      <footer
        id="site-footer"
        className="relative mx-auto max-w-6xl px-4 pb-32 sm:px-6 sm:pb-16"
      >
        <div className="glass-dark premium-shadow rounded-3xl p-6 sm:p-10">
          <div className="max-w-md">
            <Link
              href="/varkala"
              className="flex items-center gap-2 text-lg font-black tracking-tight text-foreground"
            >
              <Image
                src="/brand/oyestore-logo.png"
                alt="Oyestore"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span aria-label="Oyestore.">
                Oyestore<OyestoreDot />
              </span>
            </Link>
            <p className="text-gradient mt-2 text-xs font-bold uppercase tracking-[0.2em]">
              Building Better. One Chapter at a Time.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Oyestore is a creator-led community travel platform - small-group chapters hosted by
              real people who&apos;ve actually made the trip, not a booking engine. This page covers
              what&apos;s live right now; there&apos;s a much bigger vault of destinations, creators
              and community stories being built behind it.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Message Oyestore on WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Oyestore on Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="mailto:central@oyestore.in"
                aria-label="Email Oyestore"
                className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-wider text-platinum">WHAT WE&apos;RE BUILDING</p>
              <ul className="mt-3 space-y-2.5">
                {ecosystemPillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[#fffff0]/25" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-wider text-platinum">THIS SEASON</p>
              <ul className="mt-3 space-y-3">
                {chapters.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={c.id === chapters[0].id ? "/varkala" : `/varkala?chapter=${c.id}`}
                      className="group flex items-center justify-between gap-2 text-sm text-foreground/90 transition hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <c.badgeIcon
                          size={14}
                          style={{ color: c.themeColor }}
                        />
                        {c.navLabel}
                        <span className="text-muted-foreground">· {c.navDates}</span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-muted-foreground opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/host"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition hover:text-foreground"
            >
              Got an audience? Host a chapter with us
              <ArrowUpRight
                size={14}
                className="shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] group-hover:text-foreground"
              />
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 border-t border-[#fffff0]/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Oyestore. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Building Better - one chapter at a time.</p>
          </div>
        </div>
      </footer>

      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Oyestore on WhatsApp"
        className="premium-shadow fixed inset-x-4 bottom-4 z-20 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-semibold text-[#052e16] sm:hidden"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>
    </div>
  );
}

function StatChip({ icon: Icon, value }: { icon: typeof Users; value: string }) {
  return (
    <div className="glass-dark premium-shadow flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold text-foreground">
      <Icon
        size={14}
        className="text-platinum"
      />
      {value}
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={16}
        className="text-platinum"
      />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-base font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
