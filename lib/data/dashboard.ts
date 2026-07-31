import type { ContinueStory, CurrentUser, NextDeparture } from "@/lib/types/dashboard";

export const currentUser: CurrentUser = {
  name: "ACT",
  plan: "Free Plan",
};

export const continueStory: ContinueStory = {
  title: "Kerala Monsoon",
  chapterLabel: "Chapter 02",
  progressPct: 42,
  resumeHref: "/chapters/kerala/munnar",
  image:
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=200&q=80",
};

export const nextDeparture: NextDeparture = {
  destination: "Goa",
  date: "14 Aug",
  daysLeft: 3,
  href: "/chapters/goa/goa",
  image:
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=200&q=80",
};
