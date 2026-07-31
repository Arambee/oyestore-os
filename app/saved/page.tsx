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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resolved.map(({ saved, chapter, place }) => (
            <Link
              key={place.id}
              href={`/chapters/${chapter.id}/${place.id}`}
              className="glass-dark premium-shadow group overflow-hidden rounded-3xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-xl">
                  <Heart
                    size={14}
                    className="fill-current text-pearl"
                  />
                </div>
                <h3 className="absolute bottom-4 left-5 text-xl font-black text-pearl">
                  {place.name}
                </h3>
              </div>
              <div className="p-5">
                <p className="line-clamp-2 text-sm text-muted-foreground">{place.description}</p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Saved {saved.savedAt}</span>
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
