import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { chapters } from "@/lib/data/chapters";
import { continueStory, nextDeparture } from "@/lib/data/dashboard";

import WeatherConditionIcon from "./WeatherConditionIcon";
import WeatherScene from "./WeatherScene";

export default function RightRail() {
  const chapter = chapters[0];

  return (
    <aside className="glass-dark scrollbar-none sticky top-16 hidden max-h-[var(--rail-max-h,calc(100vh-5rem))] w-[264px] shrink-0 flex-col gap-4 self-start overflow-y-auto rounded-3xl p-4 xl:flex">
      <div className="glass relative shrink-0 overflow-hidden rounded-2xl p-5">
        <WeatherScene condition={chapter.weather.condition} />

        <div className="relative">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            CURRENT JOURNEY
          </p>
          <h3 className="mt-2 text-2xl font-black text-foreground">
            {chapter.title}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <WeatherConditionIcon condition={chapter.weather.condition} />
            {chapter.weather.condition} • {chapter.weather.tempC}°C
          </div>

          <div className="my-4 border-t border-white/10" />

          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            SEASON
          </p>
          <p className="mt-1 font-medium text-foreground">{chapter.season}</p>

          <p className="mt-4 text-xs font-medium tracking-wider text-muted-foreground">
            CHAPTER
          </p>
          <p className="mt-1 font-medium text-foreground">{chapter.state}</p>

          <p className="mt-4 text-xs font-medium tracking-wider text-muted-foreground">
            BEST FOR
          </p>
          <p className="mt-1 text-foreground">{chapter.bestFor}</p>
        </div>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-xs font-medium tracking-wider text-muted-foreground">
          CONTINUE YOUR STORY
        </p>

        <div className="mt-3 flex items-center gap-3">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={continueStory.image}
              alt={continueStory.title}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-foreground">{continueStory.title}</h3>
            <p className="text-sm text-muted-foreground">
              {continueStory.chapterLabel}
            </p>
          </div>
        </div>

        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-platinum"
            style={{ width: `${continueStory.progressPct}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {continueStory.progressPct}% Complete
          </span>
          <Link
            href={continueStory.resumeHref}
            className="font-medium text-foreground hover:text-platinum"
          >
            Resume →
          </Link>
        </div>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-xs font-medium tracking-wider text-muted-foreground">
          NEXT DEPARTURE
        </p>

        <div className="mt-3 flex items-center gap-3">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={nextDeparture.image}
              alt={nextDeparture.destination}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-foreground">
              {nextDeparture.destination}
            </h3>
            <p className="text-sm text-muted-foreground">{nextDeparture.date}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {nextDeparture.daysLeft} Days Left
          </span>
          <Link
            href={nextDeparture.href}
            className="font-medium text-foreground hover:text-platinum"
          >
            Details →
          </Link>
        </div>
      </div>

      <Link
        href="/chapters"
        className="glass flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-medium text-foreground transition hover:bg-white/10"
      >
        View All Chapters
        <ArrowRight size={16} />
      </Link>
    </aside>
  );
}
