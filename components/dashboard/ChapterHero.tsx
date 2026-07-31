import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calendar, Clock, Star, Tag, Users } from "lucide-react";

import { chapters } from "@/lib/data/chapters";

export default function ChapterHero() {
  const chapter = chapters[0];

  return (
    <section className="premium-border premium-shadow relative rounded-3xl">
      <div className="relative h-[320px] w-full overflow-hidden rounded-3xl sm:h-[420px]">
        <Image
          src={chapter.image}
          alt={chapter.title}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        <div className="relative flex h-full flex-col justify-end p-5 pb-8 sm:p-8 sm:pb-16">
          <span className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-card/70 px-3 py-1 text-[11px] font-medium tracking-wider text-platinum backdrop-blur-xl sm:mb-3 sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="size-1.5 rounded-full bg-accent-red" />
            {chapter.state.toUpperCase()} · {chapter.season.toUpperCase()} SEASON
          </span>

          <h2 className="text-gradient max-w-2xl text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
            {chapter.title}
          </h2>

          <p className="mt-2 max-w-lg text-sm text-white/70 sm:mt-3 sm:text-base">{chapter.subtitle}</p>

          <div className="mt-4 flex items-center gap-3 sm:mt-5">
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
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-medium text-midnight transition hover:scale-[1.03] hover:bg-pearl/90 sm:mt-6 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
          >
            {chapter.ctaLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="glass-dark premium-shadow relative z-10 mx-4 -mt-6 grid grid-cols-2 gap-3 rounded-2xl p-4 sm:mx-6 sm:-mt-10 sm:grid-cols-3 sm:gap-4 sm:p-6 lg:grid-cols-5">
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
    <div className="flex items-center gap-2 sm:gap-3">
      <Icon
        size={16}
        className={iconClassName ?? "text-muted-foreground"}
      />
      <div>
        <p className="text-[10px] text-muted-foreground sm:text-xs">{label}</p>
        <p className="text-sm font-bold text-foreground sm:text-base">{value}</p>
      </div>
    </div>
  );
}
