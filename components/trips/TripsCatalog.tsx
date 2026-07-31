"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export interface TripCard {
  chapterId: string;
  chapterName: string;
  placeId: string;
  placeName: string;
  image: string;
  description: string;
  duration: string;
  startingPrice: string;
  badge?: string;
}

interface TripsCatalogProps {
  trips: TripCard[];
  chapters: { id: string; name: string }[];
}

export default function TripsCatalog({ trips, chapters }: TripsCatalogProps) {
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const filteredTrips = useMemo(
    () => (activeChapter ? trips.filter((trip) => trip.chapterId === activeChapter) : trips),
    [trips, activeChapter],
  );

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveChapter(null)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition",
            activeChapter === null
              ? "glass-dark border border-white/25 text-foreground"
              : "glass text-foreground hover:bg-white/10",
          )}
        >
          All
        </button>
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            type="button"
            onClick={() => setActiveChapter(chapter.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              activeChapter === chapter.id
                ? "glass-dark border border-white/25 text-foreground"
                : "glass text-foreground hover:bg-white/10",
            )}
          >
            {chapter.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTrips.map((trip) => (
          <Link
            key={`${trip.chapterId}-${trip.placeId}`}
            href={`/chapters/${trip.chapterId}/${trip.placeId}`}
            className="glass-dark premium-shadow group overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="relative h-32 w-full overflow-hidden sm:h-56">
              <Image
                src={trip.image}
                alt={trip.placeName}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              {trip.badge && (
                <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-card/70 px-2 py-0.5 text-[10px] font-medium tracking-wide text-platinum backdrop-blur-xl sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[11px]">
                  {trip.badge}
                </span>
              )}
              <p className="absolute bottom-7 left-3 text-[11px] tracking-wide text-platinum sm:bottom-11 sm:left-5 sm:text-xs">
                {trip.chapterName.toUpperCase()}
              </p>
              <h3 className="absolute bottom-2 left-3 text-sm font-black text-pearl sm:bottom-4 sm:left-5 sm:text-2xl">
                {trip.placeName}
              </h3>
            </div>
            <div className="p-3 sm:p-5">
              <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">{trip.description}</p>
              <div className="mt-2 flex items-center justify-between text-[11px] sm:mt-4 sm:text-sm">
                <span className="text-muted-foreground">{trip.duration}</span>
                <span className="font-bold text-foreground">{trip.startingPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
