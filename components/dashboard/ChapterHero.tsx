import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calendar, Clock, Star, Tag, Users } from "lucide-react";

import { chapters } from "@/lib/data/chapters";

export default function ChapterHero() {
  const chapter = chapters[0];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-card">
      <div className="relative h-[520px] w-full">
        <Image
          src={chapter.image}
          alt={chapter.title}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="relative flex h-full flex-col justify-end p-8">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-champagne/30 bg-card/70 px-4 py-1.5 text-xs font-medium tracking-wider text-champagne backdrop-blur-xl">
            <span className="size-1.5 rounded-full bg-champagne" />
            {chapter.badge.toUpperCase()}
          </span>

          <h2 className="max-w-2xl text-6xl font-black leading-none tracking-tight text-pearl">
            {chapter.title}
          </h2>

          <p className="mt-4 max-w-lg text-white/70">{chapter.subtitle}</p>

          <div className="mt-6 flex items-center gap-3">
            <Image
              src={chapter.host.avatar}
              alt={chapter.host.name}
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="text-white/50">Hosted by</p>
              <div className="flex items-center gap-1.5 font-medium text-pearl">
                {chapter.host.name}
                {chapter.host.verified && (
                  <BadgeCheck
                    size={16}
                    className="text-champagne"
                  />
                )}
              </div>
            </div>
          </div>

          <Link
            href={chapter.ctaHref}
            className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-burgundy px-7 py-4 font-medium text-pearl transition hover:bg-burgundy/90"
          >
            {chapter.ctaLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-border bg-card p-6 sm:grid-cols-3 lg:grid-cols-5">
        <Stat
          icon={Users}
          label="Travellers"
          value={String(chapter.stats.travellers)}
        />
        <Stat
          icon={Star}
          label="Rating"
          value={chapter.stats.rating.toFixed(1)}
          iconClassName="text-champagne"
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
    <div className="flex items-center gap-3">
      <Icon
        size={18}
        className={iconClassName ?? "text-muted-foreground"}
      />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
