import { Camera, Car, Compass, Map, Mountain, Palmtree } from "lucide-react";

import type {
  CategoryChip,
  ContinueStory,
  CurrentUser,
  NextDeparture,
} from "@/lib/types/dashboard";

export const currentUser: CurrentUser = {
  name: "ACT",
  plan: "Free Plan",
};

export const continueStory: ContinueStory = {
  title: "Kerala Monsoon",
  chapterLabel: "Chapter 02",
  progressPct: 42,
  resumeHref: "/trips/kerala-monsoon",
};

export const nextDeparture: NextDeparture = {
  destination: "Goa",
  date: "14 Aug",
  daysLeft: 3,
  href: "/trips/goa",
};

export const categoryChips: CategoryChip[] = [
  { label: "Beaches", icon: Palmtree },
  { label: "Mountains", icon: Mountain },
  { label: "Road Trips", icon: Car },
  { label: "Adventure", icon: Compass },
  { label: "Weekend Getaways", icon: Map },
  { label: "Photography", icon: Camera },
];
