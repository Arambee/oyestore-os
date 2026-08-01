import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calendar, Clock, Star, Tag, Users } from "lucide-react";

import { chapters } from "@/lib/data/chapters";

export default function ChapterHero() {
  const chapter = chapters[0];

  return (
    <section className="premium-border premium-shadow relative rounded-3xl">
      <div className="relative h-[310px] w-full overflow-hidden rounded-3xl sm:h-[420px]">
        <Image
          src={chapter.image}
          alt={chapter.title}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        <div className="relative flex h-full flex-col justify-end p-6 pb-9 sm:p-8 sm:pb-16">
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-card/70 px-3 py-1 text-[11px] font-medium tracking-wider text-platinum backdrop-blur-xl sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="size-1.5 rounded-full bg-accent-red" />
            {chapter.state.toUpperCase()} · {chapter.season.toUpperCase()} SEASON
          </span>

          <h2 className="text-gradient max-w-2xl text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
            {chapter.title}
          </h2>

          <p className="mt-3 max-w-lg text-sm text-white/70 sm:mt-3 sm:text-base">{chapter.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-6">
            <div className="flex items-center gap-3">
              <Image
                src={chapter.host.avatar}
                alt={chapter.host.name}
                width={36}
                height={36}
                className="size-8 rounded-full object-cover sm:size-9"
              />
              <div className="text-xs sm:text-sm">
                <p className="text-white/50">Hosted by</p>
                <div className="flex items-center gap-1.5 font-medium text-pearl">
                  {chapter.host.name}
                  {chapter.host.verified && (
                    <BadgeCheck
                      size={16}
                      className="text-platinum"
                    />
                  )}
                </div>
              </div>
            </div>

            <Link
              href={chapter.ctaHref}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-medium text-midnight transition hover:scale-[1.03] hover:bg-pearl/90 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
            >
              {chapter.ctaLabel}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: compact single-row chip strip -- same 5 stats, a tenth the visual weight */}
      <div className="scrollbar-none relative z-10 mx-4 -mt-5 flex gap-2 overflow-x-auto sm:hidden">
        <StatChip
          icon={Users}
          value={String(chapter.stats.travellers)}
        />
        <StatChip
          icon={Star}
          value={chapter.stats.rating.toFixed(1)}
          iconClassName="text-platinum"
        />
        <StatChip
          icon={Clock}
          value={`${chapter.stats.durationNights}N`}
        />
        <StatChip
          icon={Tag}
          value={chapter.stats.startingPrice}
        />
        <StatChip
          icon={Calendar}
          value={chapter.stats.upcomingDate}
        />
      </div>

      {/* Desktop/tablet: full labeled stat grid */}
      <div className="glass-dark premium-shadow relative z-10 mx-6 -mt-10 hidden grid-cols-3 gap-4 rounded-2xl p-6 sm:grid lg:grid-cols-5">
        <Stat
          icon={Users}
          label="Travellers"
          value={String(chapter.stats.travellers)}
        />
        <Stat
          icon={Star}
          label="Rating"
          value={chapter.stats.rating.toFixed(1)}
          iconClassName="text-platinum"
        />
        <Stat
          icon={Clock}
          label="Duration"
          value={`${chapter.stats.durationNights} Nights`}
        />
        <Stat
          icon={Tag}
          label="Starts From"
          value={chapter.stats.startingPrice}
        />
        <Stat
          icon={Calendar}
          label="Upcoming Date"
          value={chapter.stats.upcomingDate}
        />
      </div>
    </section>
  );
}

function StatChip({
  icon: Icon,
  value,
  iconClassName,
}: {
  icon: typeof Users;
  value: string;
  iconClassName?: string;
}) {
  return (
    <div className="glass-dark premium-shadow flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold text-foreground">
      <Icon
        size={14}
        className={iconClassName ?? "text-muted-foreground"}
      />
      {value}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  iconClassName,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  iconClassName?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={16}
        className={iconClassName ?? "text-muted-foreground"}
      />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-base font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
