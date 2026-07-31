export interface ChapterHost {
  name: string;
  avatar: string;
  verified: boolean;
}

export interface ChapterStats {
  travellers: number;
  rating: number;
  durationNights: number;
  startingPrice: string;
  upcomingDate: string;
}

export interface Chapter {
  id: string;
  slug: string;
  state: string;
  title: string;
  subtitle: string;
  image: string;
  host: ChapterHost;
  ctaLabel: string;
  ctaHref: string;
  stats: ChapterStats;
  weather: { condition: string; tempC: number };
  season: string;
  bestFor: string;
}

export interface HostedPlaceRef {
  stateId: string;
  placeId: string;
}

export interface Creator {
  id: string;
  name: string;
  verified: boolean;
  image: string;
  bio: string;
  tagline: string;
  hostedPlaces: HostedPlaceRef[];
}

export interface ContinueStory {
  title: string;
  chapterLabel: string;
  progressPct: number;
  resumeHref: string;
  image: string;
}

export interface NextDeparture {
  destination: string;
  date: string;
  daysLeft: number;
  href: string;
  image: string;
}

export interface CurrentUser {
  name: string;
  plan: string;
}

export interface SavedPlace {
  stateId: string;
  placeId: string;
  savedAt: string;
}

/**
 * Oyestore content hierarchy: Season -> Chapter (a state) -> Paragraph (a
 * place within that state) -> Word (a hidden spot within that place).
 */
export interface HiddenSpot {
  name: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  startingPrice: string;
  experiences: string[];
  itinerary: ItineraryDay[];
  hostedByCreatorId: string;
  hiddenSpots: HiddenSpot[];
}

export interface StateChapter {
  id: string;
  name: string;
  tagline: string;
  image: string;
  places: Place[];
}

export interface Mood {
  id: string;
  label: string;
  image: string;
  description: string;
}

export interface DiscoveryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  href: string;
}

export interface SeasonShowcase {
  id: string;
  name: string;
  subtitle: string;
  chapters: StateChapter[];
}

/**
 * Baseline factual entry for a state/UT that has no chapter written yet --
 * the "knowledge panel" layer of the vault. Independent of season, and
 * replaced/supplemented once real chapters and community intel exist.
 */
export interface StateReference {
  overview: string;
  bestTimeToVisit: string;
  knownFor: string[];
  keyRegions: string[];
  climate: string;
  image: string;
}

export interface BudgetTier {
  tier: "Budget" | "Mid-range" | "Luxury";
  range: string;
  note: string;
}

export interface StayArea {
  area: string;
  goodFor: string;
}

export interface DayTrip {
  name: string;
  distance: string;
  note: string;
}

export interface PlaceFaq {
  question: string;
  answer: string;
}

/**
 * The research-engine layer for a place that already has a written chapter --
 * the practical, decision-driving detail (cost, logistics, safety, FAQs)
 * that sits alongside the narrative/community content, so nobody needs to
 * leave the vault to plan the trip.
 */
export interface PlaceResearch {
  gettingThere: string;
  gettingAround: string;
  budgetPerDay: BudgetTier[];
  whereToStayAreas: StayArea[];
  mustEat: string[];
  safetyNotes: string[];
  customsNotes: string[];
  nearbyDayTrips: DayTrip[];
  faqs: PlaceFaq[];
}
