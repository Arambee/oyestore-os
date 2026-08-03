import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bus,
  Calendar,
  Car,
  Check,
  Compass,
  Flag,
  Flower2,
  Heart,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Tag,
  Users,
  X,
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

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const metadata: Metadata = {
  title: "Varkala & Sri Lanka | Oyestore",
  description:
    "Four chapters this season - Independence Day, Raksha Bandhan and Onam in Varkala, plus The Odyssey road trip across Sri Lanka. Message us on WhatsApp for dates and details.",
};

const varkalaHiddenSpots = [
  {
    name: "Jatayu Earth Center",
    description: "The world's largest bird sculpture, carved into a hilltop.",
  },
  {
    name: "Papanasam Beach Cliff Walk",
    description: "A quiet clifftop trail above the main beach, best at dusk.",
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
    heroImage: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1200&q=80",
    heroTitle: "This Raksha Bandhan, make memories together.",
    heroSubtitle:
      "Some bonds are built by blood. Some are built by choice. Trade the crowded malls for cliffside sunsets.",
    price: "Message us for pricing",
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
      "Hi! I'm interested in the Raksha Bandhan Varkala chapter (28-30 Aug 2026, 3 Days/4 Nights). Can you share pricing and more details?",
  },
  {
    id: "onam",
    navLabel: "Onam",
    navDates: "26-29 Aug 2026",
    badge: "ONAM CHAPTER · 26-29 AUG 2026",
    badgeIcon: Flower2,
    themeColor: "#F5B841",
    heroImage: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&w=1200&q=80",
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
    id: "sri-lanka-odyssey",
    navLabel: "Sri Lanka",
    navDates: "15-21 Oct 2026",
    badge: "THE ODYSSEY · SRI LANKA · 15-21 OCT 2026",
    badgeIcon: Car,
    themeColor: "#2DD4BF",
    heroImage: "https://images.unsplash.com/photo-1595949481531-e460a8af2ec3?auto=format&fit=crop&w=1200&q=80",
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

const sneakPeek = [
  {
    id: "sneak-1",
    alt: "Travellers from a past Oyestore chapter",
    image: "/varkala/sneak-1.jpg",
    className: "col-span-2 row-span-2",
  },
  {
    id: "sneak-2",
    alt: "A candid moment from a past chapter",
    image: "/varkala/sneak-2.jpg",
    className: "col-span-2",
  },
  {
    id: "sneak-3",
    alt: "Looking out over the valley on a past chapter",
    image: "/varkala/sneak-3.jpg",
    className: "col-span-2",
  },
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
        <div className="absolute right-0 top-1/3 size-[28rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
      </div>

      <header className="relative mx-auto flex max-w-4xl items-center justify-between px-4 py-6 sm:px-6">
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
          Oyestore.
        </Link>
        <div className="flex items-center gap-2.5">
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

      <main className="relative mx-auto max-w-4xl space-y-20 px-4 pb-32 sm:space-y-28 sm:px-6 sm:pb-20">
        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">FOUR CHAPTERS THIS SEASON · VARKALA &amp; SRI LANKA</p>
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
          <div className="mt-4 grid h-64 grid-cols-4 grid-rows-2 gap-3 sm:h-80">
            {sneakPeek.map((photo) => (
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
                A COUPLE OF SPOTS YOU&apos;LL FIND
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

        <section className="glass-dark premium-shadow rounded-2xl p-5 sm:p-6">
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

        <div className="flex flex-col items-center gap-3 pb-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Oyestore on Instagram"
            className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
          >
            <InstagramIcon size={16} />
          </a>
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Oyestore. All rights reserved.
          </p>
        </div>
      </main>

      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Oyestore on WhatsApp"
        className="glass-dark premium-shadow fixed inset-x-4 bottom-4 z-20 flex items-center justify-center gap-2 rounded-full bg-[#25D366]/95 py-4 text-sm font-semibold text-[#052e16] sm:hidden"
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
