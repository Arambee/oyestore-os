import { ACTIVITY_OPTIONS } from "@/lib/data/chapterBuilder";

export interface ItineraryItem {
  id: string;
  time: string;
  label: string;
  icon: string;
  detail?: string;
}

const DAY_START_MINUTES = 8 * 60;
const ACTIVITY_BUFFER_MINUTES = 20;
const LUNCH_DURATION_MINUTES = 45;

function parseDurationMinutes(duration: string): number {
  const match = duration.match(/([\d.]+)\s*(hr|hrs|min)/);
  if (!match) return 60;
  const value = parseFloat(match[1]);
  return match[2].startsWith("hr") ? value * 60 : value;
}

function formatTime(minutesFromMidnight: number): string {
  const hours24 = Math.floor(minutesFromMidnight / 60) % 24;
  const minutes = Math.round(minutesFromMidnight % 60);
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

export function buildItinerary(activityIds: string[]): ItineraryItem[] {
  const items: ItineraryItem[] = [];
  let cursor = DAY_START_MINUTES;
  let lunchServed = false;

  items.push({
    id: "pickup",
    time: formatTime(cursor),
    label: "Pickup & Check-in",
    icon: "MapPin",
  });
  cursor += 30;

  const activities = activityIds
    .map((id) => ACTIVITY_OPTIONS.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  if (activities.length === 0) {
    items.push({
      id: "free-time",
      time: formatTime(cursor),
      label: "Free Time To Explore At Your Pace",
      icon: "Compass",
    });
    cursor += 4 * 60;
  }

  activities.forEach((activity) => {
    if (!lunchServed && cursor >= 13 * 60) {
      items.push({ id: "lunch", time: formatTime(cursor), label: "Meal Break", icon: "UtensilsCrossed" });
      cursor += LUNCH_DURATION_MINUTES;
      lunchServed = true;
    }

    items.push({
      id: activity.id,
      time: formatTime(cursor),
      label: activity.name,
      icon: activity.icon,
      detail: `${activity.duration} · ${activity.difficulty}`,
    });
    cursor += parseDurationMinutes(activity.duration) + ACTIVITY_BUFFER_MINUTES;
  });

  if (!lunchServed && activities.length > 0) {
    items.push({ id: "lunch", time: formatTime(cursor), label: "Meal Break", icon: "UtensilsCrossed" });
    cursor += LUNCH_DURATION_MINUTES;
  }

  items.push({
    id: "return",
    time: formatTime(cursor),
    label: "Return to Stay",
    icon: "MapPin",
  });

  return items;
}
