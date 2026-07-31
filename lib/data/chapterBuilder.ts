import type {
  ActivityOption,
  FoodOption,
  GuideOption,
  HostOption,
  RoomSharingOption,
  StayOption,
  TransportOption,
  TravelStyleOption,
} from "@/lib/types/chapterBuilder";

export const STAY_OPTIONS: StayOption[] = [
  {
    id: "hostel",
    name: "Hostel",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80",
    rating: 4.1,
    reviewCount: 340,
    distance: "5 min walk to activities",
    amenities: ["Shared dorms", "Free WiFi", "Common kitchen", "Lockers"],
    priceDelta: -3000,
    properties: [
      { id: "hostel-backpackers-nest", name: "Backpackers' Nest", rating: 4.0, priceDelta: 0 },
      { id: "hostel-driftwood", name: "Driftwood Hostel", rating: 4.3, priceDelta: 300 },
    ],
  },
  {
    id: "homestay",
    name: "Homestay",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80",
    rating: 4.5,
    reviewCount: 210,
    distance: "10 min from activities",
    amenities: ["Home-cooked meals", "Local family", "Private room", "WiFi"],
    priceDelta: -1200,
    properties: [
      { id: "homestay-nair-house", name: "The Nair House", rating: 4.4, priceDelta: 0 },
      { id: "homestay-garden-view", name: "Garden View Homestay", rating: 4.6, priceDelta: 400 },
    ],
  },
  {
    id: "boutique",
    name: "Boutique Stay",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=700&q=80",
    rating: 4.7,
    reviewCount: 480,
    distance: "3 min walk to activities",
    amenities: ["Design interiors", "Breakfast included", "AC", "Rooftop café"],
    priceDelta: 0,
    properties: [
      { id: "boutique-cliff-house", name: "The Cliff House Boutique", rating: 4.7, priceDelta: 0 },
      { id: "boutique-old-lighthouse", name: "Old Lighthouse Stay", rating: 4.8, priceDelta: 600 },
      { id: "boutique-sea-face", name: "Sea Face Boutique Rooms", rating: 4.6, priceDelta: -200 },
    ],
  },
  {
    id: "resort",
    name: "Premium Resort",
    image:
      "https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=format&fit=crop&w=700&q=80",
    rating: 4.8,
    reviewCount: 620,
    distance: "On-site activities",
    amenities: ["Pool access", "Spa", "All meals included", "Concierge"],
    priceDelta: 4500,
    properties: [
      { id: "resort-palm-bay", name: "Palm Bay Resort", rating: 4.8, priceDelta: 0 },
      { id: "resort-cliffside", name: "Cliffside Resort & Spa", rating: 4.9, priceDelta: 900 },
    ],
  },
  {
    id: "villa",
    name: "Luxury Villa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80",
    rating: 4.9,
    reviewCount: 190,
    distance: "Private access",
    amenities: ["Private pool", "Butler service", "Ocean view", "Full privacy"],
    priceDelta: 9500,
    properties: [
      { id: "villa-cove-house", name: "The Cove House", rating: 4.9, priceDelta: 0 },
      { id: "villa-horizon", name: "Villa Horizon", rating: 5.0, priceDelta: 1500 },
    ],
  },
];

export const HOST_OPTIONS: HostOption[] = [
  {
    id: "host-founder",
    name: "Ananya Rao",
    persona: "Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    languages: ["English", "Hindi"],
    hostingStyle: "Sets the tone personally, big on small-group intimacy.",
    pastTrips: 62,
    reviewCount: 410,
    upcomingChapters: 3,
    matchStyles: ["luxury", "wellness"],
    package: {
      stayId: "boutique",
      activityIds: ["cafe-trail", "spa"],
      transportId: "volvo",
      foodIds: ["local", "healthy"],
      roomSharingId: "private",
      guideId: "guide-culture",
    },
  },
  {
    id: "host-creator",
    name: "Devesh Malik",
    persona: "Travel Creator",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=300&q=80",
    rating: 4.8,
    languages: ["English", "Hindi", "Punjabi"],
    hostingStyle: "Content-first energy, great for groups who want the shots too.",
    pastTrips: 48,
    reviewCount: 330,
    upcomingChapters: 4,
    matchStyles: ["creator", "photography"],
    package: {
      stayId: "boutique",
      activityIds: ["sunrise-trek", "cafe-trail", "kayaking"],
      transportId: "tempo",
      foodIds: ["local"],
      roomSharingId: "mixed",
      guideId: "guide-photography",
    },
  },
  {
    id: "host-photographer",
    name: "Kenji Osei",
    persona: "Photographer",
    image:
      "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    languages: ["English"],
    hostingStyle: "Chases golden hour relentlessly, teaches as he shoots.",
    pastTrips: 35,
    reviewCount: 260,
    upcomingChapters: 2,
    matchStyles: ["photography", "slow"],
    package: {
      stayId: "homestay",
      activityIds: ["sunrise-trek", "cafe-trail"],
      transportId: "self-drive",
      foodIds: ["local", "veg"],
      roomSharingId: "mixed",
      guideId: "guide-photography",
    },
  },
  {
    id: "host-comedian",
    name: "Rohan Bhatt",
    persona: "Comedian",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80",
    rating: 4.7,
    languages: ["English", "Hindi"],
    hostingStyle: "Keeps the group laughing between every stop.",
    pastTrips: 29,
    reviewCount: 205,
    upcomingChapters: 2,
    matchStyles: ["nightlife", "explorer"],
    package: {
      stayId: "hostel",
      activityIds: ["bonfire", "cafe-trail", "kayaking"],
      transportId: "ac-bus",
      foodIds: ["non-veg", "local"],
      roomSharingId: "mixed",
      guideId: "guide-adventure",
    },
  },
  {
    id: "host-chef",
    name: "Priya Nambiar",
    persona: "Chef",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    languages: ["English", "Malayalam", "Tamil"],
    hostingStyle: "Builds the trip around markets, kitchens and long meals.",
    pastTrips: 41,
    reviewCount: 298,
    upcomingChapters: 3,
    matchStyles: ["food-trail"],
    package: {
      stayId: "homestay",
      activityIds: ["cooking-class", "cafe-trail"],
      transportId: "tempo",
      foodIds: ["local", "seafood"],
      roomSharingId: "private",
      guideId: "guide-food",
    },
  },
  {
    id: "host-motorcyclist",
    name: "Arjun Deol",
    persona: "Motorcyclist",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    rating: 4.8,
    languages: ["English", "Hindi"],
    hostingStyle: "Back-roads only, will always find the longer scenic route.",
    pastTrips: 55,
    reviewCount: 380,
    upcomingChapters: 5,
    matchStyles: ["budget", "explorer"],
    package: {
      stayId: "hostel",
      activityIds: ["surfing", "bonfire"],
      transportId: "bike",
      foodIds: ["local"],
      roomSharingId: "mixed",
      guideId: "guide-adventure",
    },
  },
  {
    id: "host-adventure",
    name: "Meher Kapoor",
    persona: "Adventure Host",
    image:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    languages: ["English", "Hindi"],
    hostingStyle: "First up, last to sleep, always pushing one more summit.",
    pastTrips: 51,
    reviewCount: 356,
    upcomingChapters: 3,
    matchStyles: ["explorer", "wellness"],
    package: {
      stayId: "resort",
      activityIds: ["scuba", "paragliding", "sunrise-trek"],
      transportId: "tempo",
      foodIds: ["healthy", "seafood"],
      roomSharingId: "private",
      guideId: "guide-nature",
    },
  },
];

export const GUIDE_OPTIONS: GuideOption[] = [
  {
    id: "guide-adventure",
    name: "Nakul Verma",
    specialty: "Adventure",
    image:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=300&q=80",
    rating: 4.8,
    languages: ["English", "Hindi"],
  },
  {
    id: "guide-food",
    name: "Lakshmi Iyer",
    specialty: "Food",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    languages: ["English", "Tamil", "Malayalam"],
  },
  {
    id: "guide-photography",
    name: "Farhan Sheikh",
    specialty: "Photography",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 4.7,
    languages: ["English", "Hindi", "Urdu"],
  },
  {
    id: "guide-culture",
    name: "Meenal Joshi",
    specialty: "Culture",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80",
    rating: 4.8,
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    id: "guide-nature",
    name: "Thomas Kutty",
    specialty: "Nature",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    languages: ["English", "Malayalam"],
  },
];

export const TRAVEL_STYLE_OPTIONS: TravelStyleOption[] = [
  { id: "explorer", label: "Explorer", description: "See as much as possible, every day.", icon: "Compass" },
  { id: "slow", label: "Slow Traveller", description: "Fewer stops, more time in each.", icon: "Coffee" },
  { id: "creator", label: "Creator Mode", description: "Content-ready stops built in.", icon: "Video" },
  { id: "photography", label: "Photography", description: "Golden hour, always.", icon: "Camera" },
  { id: "wellness", label: "Wellness", description: "Slow mornings, quiet evenings.", icon: "HeartPulse" },
  { id: "food-trail", label: "Food Trail", description: "The trip is basically a menu.", icon: "UtensilsCrossed" },
  { id: "nightlife", label: "Nightlife", description: "Days for recovery, nights for the city.", icon: "Moon" },
  { id: "luxury", label: "Luxury", description: "Every detail, taken care of.", icon: "Gem" },
  { id: "budget", label: "Budget", description: "Maximum trip, minimum spend.", icon: "PiggyBank" },
];

export const ACTIVITY_OPTIONS: ActivityOption[] = [
  { id: "kayaking", name: "Kayaking", icon: "Waves", duration: "1.5 hrs", difficulty: "Easy", cost: 800 },
  { id: "horse-riding", name: "Horse Riding", icon: "Footprints", duration: "1 hr", difficulty: "Easy", cost: 600 },
  { id: "scuba", name: "Scuba", icon: "Anchor", duration: "2 hrs", difficulty: "Moderate", cost: 2500 },
  { id: "bonfire", name: "Bonfire", icon: "Flame", duration: "2 hrs", difficulty: "Easy", cost: 0 },
  { id: "surfing", name: "Surfing", icon: "Wind", duration: "1.5 hrs", difficulty: "Moderate", cost: 1500 },
  { id: "paragliding", name: "Paragliding", icon: "ArrowUpRight", duration: "20 min", difficulty: "Hard", cost: 3500 },
  { id: "cafe-trail", name: "Cafe Trail", icon: "Coffee", duration: "2 hrs", difficulty: "Easy", cost: 400 },
  { id: "sunrise-trek", name: "Sunrise Trek", icon: "Sunrise", duration: "3 hrs", difficulty: "Moderate", cost: 700 },
  { id: "spa", name: "Spa", icon: "Sparkles", duration: "1 hr", difficulty: "Easy", cost: 1800 },
  { id: "cooking-class", name: "Cooking Class", icon: "ChefHat", duration: "2 hrs", difficulty: "Easy", cost: 900 },
];

export const FOOD_OPTIONS: FoodOption[] = [
  { id: "veg", label: "Veg", icon: "Leaf" },
  { id: "non-veg", label: "Non Veg", icon: "Beef" },
  { id: "vegan", label: "Vegan", icon: "Sprout" },
  { id: "jain", label: "Jain", icon: "CircleDot" },
  { id: "local", label: "Local Cuisine", icon: "MapPin" },
  { id: "seafood", label: "Seafood", icon: "Fish" },
  { id: "healthy", label: "Healthy", icon: "HeartPulse" },
];

export const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    id: "ac-bus",
    label: "AC Bus",
    icon: "Bus",
    priceDelta: 0,
    vendors: [
      { id: "ac-bus-ksrtc", name: "KSRTC AC Bus", rating: 4.2, priceDelta: 0 },
      { id: "ac-bus-orange", name: "Orange Travels", rating: 4.4, priceDelta: 150 },
    ],
  },
  {
    id: "volvo",
    label: "Volvo",
    icon: "BusFront",
    priceDelta: 800,
    vendors: [
      { id: "volvo-vrl", name: "VRL Volvo Multi-Axle", rating: 4.5, priceDelta: 0 },
      { id: "volvo-sharma", name: "Sharma Volvo", rating: 4.3, priceDelta: -100 },
    ],
  },
  {
    id: "tempo",
    label: "Tempo Traveller",
    icon: "Car",
    priceDelta: 1500,
    vendors: [
      { id: "tempo-groupmove", name: "GroupMove Tempo", rating: 4.4, priceDelta: 0 },
      { id: "tempo-savaari", name: "Savaari Tempo Traveller", rating: 4.6, priceDelta: 200 },
    ],
  },
  {
    id: "self-drive",
    label: "Self Drive",
    icon: "CarFront",
    priceDelta: -500,
    vendors: [
      { id: "self-drive-zoomcar", name: "Zoomcar", rating: 4.3, priceDelta: 0 },
      { id: "self-drive-revv", name: "Revv Self-Drive", rating: 4.1, priceDelta: -150 },
      { id: "self-drive-myles", name: "Myles Cars", rating: 4.2, priceDelta: 100 },
    ],
  },
  {
    id: "bike",
    label: "Bike Rental",
    icon: "Bike",
    priceDelta: -1200,
    vendors: [
      { id: "bike-ridevogue", name: "RideVogue Scooters", rating: 4.3, priceDelta: 0 },
      { id: "bike-wheelstreet", name: "WheelStreet Rentals", rating: 4.0, priceDelta: -100 },
      { id: "bike-royal", name: "Royal Brothers", rating: 4.5, priceDelta: 250 },
    ],
  },
  {
    id: "flight",
    label: "Flight Add-on",
    icon: "Plane",
    priceDelta: 5500,
    vendors: [
      { id: "flight-indigo", name: "IndiGo", rating: 4.4, priceDelta: 0 },
      { id: "flight-airindia", name: "Air India", rating: 4.2, priceDelta: 350 },
    ],
  },
];

export const ROOM_SHARING_OPTIONS: RoomSharingOption[] = [
  { id: "male", label: "Male Sharing", icon: "User", priceDelta: 0 },
  { id: "female", label: "Female Sharing", icon: "User", priceDelta: 0 },
  { id: "mixed", label: "Mixed Sharing", icon: "Users", priceDelta: 0 },
  { id: "private", label: "Private Room", icon: "Lock", priceDelta: 2200 },
  { id: "solo", label: "Solo Supplement", icon: "UserRound", priceDelta: 3800 },
];

export const TRAVEL_STYLE_TO_GUIDE: Record<string, string> = {
  explorer: "guide-adventure",
  slow: "guide-nature",
  creator: "guide-photography",
  photography: "guide-photography",
  wellness: "guide-nature",
  "food-trail": "guide-food",
  nightlife: "guide-adventure",
  luxury: "guide-culture",
  budget: "guide-adventure",
};
