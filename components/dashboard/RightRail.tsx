import Link from "next/link";

import { chapters } from "@/lib/data/chapters";
import { continueStory, nextDeparture } from "@/lib/data/dashboard";

export default function RightRail() {
  const chapter = chapters[0];

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[320px] shrink-0 overflow-y-auto border-l border-sidebar-border bg-sidebar px-6 py-8 xl:block">
      <p className="text-xs font-medium tracking-wider text-muted-foreground">
        CURRENT CHAPTER
      </p>
      <h3 className="mt-2 text-2xl font-black text-foreground">
        {chapter.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {chapter.weather.condition} • {chapter.weather.tempC}°C
      </p>

      <p className="mt-6 text-xs font-medium tracking-wider text-muted-foreground">
        SEASON
      </p>
      <p className="mt-1 font-medium text-foreground">{chapter.season}</p>

      <p className="mt-6 text-xs font-medium tracking-wider text-muted-foreground">
        BEST FOR
      </p>
      <p className="mt-1 text-foreground">{chapter.bestFor}</p>

      <div className="my-8 border-t border-sidebar-border" />

      <p className="text-xs font-medium tracking-wider text-muted-foreground">
        CONTINUE YOUR STORY
      </p>
      <h3 className="mt-2 text-lg font-bold text-foreground">
        {continueStory.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {continueStory.chapterLabel}
      </p>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-royal-blue"
          style={{ width: `${continueStory.progressPct}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {continueStory.progressPct}% Complete
        </span>
        <Link
          href={continueStory.resumeHref}
          className="font-medium text-foreground hover:text-champagne"
        >
          Resume →
        </Link>
      </div>

      <div className="my-8 border-t border-sidebar-border" />

      <p className="text-xs font-medium tracking-wider text-muted-foreground">
        NEXT DEPARTURE
      </p>
      <h3 className="mt-2 text-lg font-bold text-foreground">
        {nextDeparture.destination}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {nextDeparture.date}
      </p>

      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {nextDeparture.daysLeft} Days Left
        </span>
        <Link
          href={nextDeparture.href}
          className="font-medium text-foreground hover:text-champagne"
        >
          Details →
        </Link>
      </div>
    </aside>
  );
}
