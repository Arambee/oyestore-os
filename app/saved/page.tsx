import Image from "next/image";
import Link from "next/link";
import { Bookmark, Heart } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import { currentSeason } from "@/lib/data/seasonsByOyestore";
import { savedPlaces } from "@/lib/data/saved";

export default function SavedPage() {
  const chapters = currentSeason.chapters;

  const resolved = savedPlaces
    .map((saved) => {
      const chapter = chapters.find((c) => c.id === saved.stateId);
      const place = chapter?.places.find((p) => p.id === saved.placeId);
      return chapter && place ? { saved, chapter, place } : null;
    })
    .filter((entry) => entry !== null);

  return (
    <AppShell>
      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <Bookmark size={12} />
          SAVED
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          Saved For Later
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Everywhere you&apos;ve bookmarked but haven&apos;t booked yet.
        </p>
      </div>

      {resolved.length === 0 ? (
        <div className="glass-dark flex flex-col items-center gap-3 rounded-3xl p-12 text-center">
          <Heart
            size={24}
            className="text-muted-foreground/50"
          />
          <p className="text-sm text-muted-foreground">
            Nothing saved yet - bookmark a place from Destinations or Trips to see it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resolved.map(({ saved, chapter, place }) => (
            <Link
              key={place.id}
              href={`/chapters/${chapter.id}/${place.id}`}
              className="glass-dark premium-shadow group overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <div className="relative h-28 w-full overflow-hidden sm:h-44">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-xl sm:right-3 sm:top-3 sm:size-8">
                  <Heart
                    size={12}
                    className="fill-current text-pearl sm:size-3.5"
                  />
                </div>
                <h3 className="absolute bottom-2 left-3 text-sm font-black text-pearl sm:bottom-4 sm:left-5 sm:text-xl">
                  {place.name}
                </h3>
              </div>
              <div className="p-3 sm:p-5">
                <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">{place.description}</p>
                <div className="mt-2 flex flex-col gap-0.5 text-[11px] sm:mt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:text-xs">
                  <span className="truncate text-muted-foreground">Saved {saved.savedAt}</span>
                  <span className="font-bold text-foreground">{place.startingPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </AppShell>
  );
}
