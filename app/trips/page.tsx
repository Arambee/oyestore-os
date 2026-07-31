import AppShell from "@/components/dashboard/AppShell";
import TripsCatalog, { type TripCard } from "@/components/trips/TripsCatalog";
import { bestOfSeason, topPicks, trendingPlaces } from "@/lib/data/discoverySections";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

const BADGE_SOURCES: { badge: string; hrefs: Set<string> }[] = [
  { badge: "Trending", hrefs: new Set(trendingPlaces.map((item) => item.href)) },
  { badge: `Best of ${currentSeason.name}`, hrefs: new Set(bestOfSeason.map((item) => item.href)) },
  { badge: "Editor's Pick", hrefs: new Set(topPicks.map((item) => item.href)) },
];

export default function TripsPage() {
  const trips: TripCard[] = currentSeason.chapters.flatMap((chapter) =>
    chapter.places.map((place) => {
      const href = `/chapters/${chapter.id}/${place.id}`;
      const badge = BADGE_SOURCES.find((source) => source.hrefs.has(href))?.badge;

      return {
        chapterId: chapter.id,
        chapterName: chapter.name,
        placeId: place.id,
        placeName: place.name,
        image: place.image,
        description: place.description,
        duration: place.duration,
        startingPrice: place.startingPrice,
        badge,
      };
    }),
  );

  const chapters = currentSeason.chapters.map((chapter) => ({
    id: chapter.id,
    name: chapter.name,
  }));

  return (
    <AppShell>
      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">TRIPS</p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          Every Bookable Trip, In One Place
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Home shows you a curated front page. This is the full catalog -
          filter by state, or just scroll everything we&apos;ve got open right now.
        </p>
      </div>

      <TripsCatalog
        trips={trips}
        chapters={chapters}
      />
    </AppShell>
  );
}
