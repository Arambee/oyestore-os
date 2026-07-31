import Image from "next/image";
import Link from "next/link";

import AppShell from "@/components/dashboard/AppShell";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

export default function ChaptersIndexPage() {
  return (
    <AppShell>
      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">
          {currentSeason.name.toUpperCase()} SEASON
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          All Chapters
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          {currentSeason.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentSeason.chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/chapters/${chapter.id}`}
            className="glass-dark premium-shadow group overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="relative h-32 w-full overflow-hidden sm:h-56">
              <Image
                src={chapter.image}
                alt={chapter.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <h3 className="absolute bottom-2 left-3 text-sm font-black text-pearl sm:bottom-4 sm:left-5 sm:text-2xl">
                {chapter.name}
              </h3>
            </div>
            <div className="p-3 sm:p-5">
              <p className="text-xs text-muted-foreground sm:text-sm">{chapter.tagline}</p>
              <p className="mt-2 text-[11px] text-platinum sm:mt-3 sm:text-xs">
                {chapter.places.length}{" "}
                {chapter.places.length === 1 ? "place" : "places"} to visit
              </p>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
