export type PartyType = "solo" | "couple" | "group";
export type TripMode = "group-travel" | "private-tour";
export type GuideAssignment = "auto" | "manual";

export interface StayProperty {
  id: string;
  name: string;
  rating: number;
  priceDelta: number;
}

export interface StayOption {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  distance: string;
  amenities: string[];
  priceDelta: number;
  properties: StayProperty[];
}

export interface HostPackage {
  stayId: string;
  activityIds: string[];
  transportId: string;
  foodIds: string[];
  roomSharingId: string;
  guideId: string;
}

export interface HostOption {
  id: string;
  name: string;
  persona: string;
  image: string;
  rating: number;
  languages: string[];
  hostingStyle: string;
  pastTrips: number;
  reviewCount: number;
  upcomingChapters: number;
  matchStyles: string[];
  package: HostPackage;
}

export type GuideSpecialty = "Adventure" | "Food" | "Photography" | "Culture" | "Nature";

export interface GuideOption {
  id: string;
  name: string;
  image: string;
  rating: number;
  languages: string[];
  specialty: GuideSpecialty;
}

export interface TravelStyleOption {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export type ActivityDifficulty = "Easy" | "Moderate" | "Hard";

export interface ActivityOption {
  id: string;
  name: string;
  icon: string;
  duration: string;
  difficulty: ActivityDifficulty;
  cost: number;
}

export interface FoodOption {
  id: string;
  label: string;
  icon: string;
}

export interface TransportVendor {
  id: string;
  name: string;
  rating: number;
  priceDelta: number;
}

export interface TransportOption {
  id: string;
  label: string;
  icon: string;
  priceDelta: number;
  vendors: TransportVendor[];
}

export interface RoomSharingOption {
  id: string;
  label: string;
  icon: string;
  priceDelta: number;
}

export interface PriceBreakdown {
  base: number;
  stay: number;
  activities: number;
  transport: number;
  addOns: number;
  total: number;
}
