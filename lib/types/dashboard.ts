import type { LucideIcon } from "lucide-react";

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
  badge: string;
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

export interface Creator {
  id: string;
  name: string;
  verified: boolean;
  image: string;
}

export interface ContinueStory {
  title: string;
  chapterLabel: string;
  progressPct: number;
  resumeHref: string;
}

export interface NextDeparture {
  destination: string;
  date: string;
  daysLeft: number;
  href: string;
}

export interface CategoryChip {
  label: string;
  icon: LucideIcon;
}

export interface CurrentUser {
  name: string;
  plan: string;
}
