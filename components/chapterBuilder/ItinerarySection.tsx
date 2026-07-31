"use client";

import { buildItinerary } from "@/lib/utils/itinerary";

import { useChapterBuilder } from "./ChapterBuilderContext";
import { ICONS } from "./iconMap";

export default function ItinerarySection() {
  const { isGroupLocked, matchedHost, selectedActivities } = useChapterBuilder();

  const activityIds = isGroupLocked ? matchedHost?.package.activityIds ?? [] : selectedActivities;
  const items = buildItinerary(activityIds);

  return (
    <section>
      <h2 className="text-2xl font-black text-foreground">Your Day, Timed Out</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        A rough schedule based on what you&apos;ve picked above - adjust activities and this updates instantly.
      </p>

      <div className="glass-dark mt-5 rounded-3xl p-5">
        <ol>
          {items.map((item, index) => {
            const Icon = ICONS[item.icon] ?? ICONS.MapPin;
            const isLast = index === items.length - 1;
            return (
              <li key={item.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon size={16} />
                  </div>
                  {!isLast && <div className="mt-1 w-px flex-1 bg-white/10" />}
                </div>
                <div className={isLast ? "" : "pb-5"}>
                  <p className="text-xs font-medium tracking-wider text-muted-foreground">
                    {item.time}
                  </p>
                  <p className="mt-0.5 font-bold text-foreground">{item.label}</p>
                  {item.detail && <p className="text-xs text-muted-foreground">{item.detail}</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
