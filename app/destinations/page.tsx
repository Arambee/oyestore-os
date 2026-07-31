import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import StubStateCard from "@/components/destinations/StubStateCard";
import { communityPosts } from "@/lib/data/communityFeed";
import { creators } from "@/lib/data/creators";
import { currentSeason } from "@/lib/data/seasonsByOyestore";
import { stateReferences } from "@/lib/data/stateReferences";
import { regionOrder, statesOfIndia } from "@/lib/data/statesOfIndia";

export default function DestinationsPage() {
  const writtenCount = currentSeason.chapters.length;

  return (
    <AppShell>
      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <BookOpen size={12} />
          THE VAULT
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          Every Corner Of India, One Page At A Time
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          This isn&apos;t a brochure - it&apos;s a running record of what places
          are actually like, written by the locals who live there, the
          creators who&apos;ve run trips there, and travellers who just came
          back. Search it like you would anything else. Right now {writtenCount}{" "}
          {writtenCount === 1 ? "state has" : "states have"} been written up in
          full by our community and creators - every other state already
          carries the basics, and grows richer as real intel comes in.
        </p>
      </div>

      {regionOrder.map((region) => {
        const statesInRegion = statesOfIndia.filter((s) => s.region === region);

        return (
          <div key={region}>
            <p className="text-xs font-medium tracking-wider text-muted-foreground">
              {region.toUpperCase()}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {statesInRegion.map((state) => {
                const chapter = currentSeason.chapters.find((c) => c.id === state.id);

                if (!chapter) {
                  const reference = stateReferences[state.id];
                  if (!reference) return null;

                  return (
                    <StubStateCard
                      key={state.id}
                      stateId={state.id}
                      name={state.name}
                      reference={reference}
                    />
                  );
                }

                const placeIds = chapter.places.map((p) => p.id);
                const postCount = communityPosts.filter(
                  (post) => post.stateId === chapter.id,
                ).length;
                const creatorCount = creators.filter((creator) =>
                  creator.hostedPlaces.some(
                    (ref) => ref.stateId === chapter.id && placeIds.includes(ref.placeId),
                  ),
                ).length;

                return (
                  <Link
                    key={chapter.id}
                    href={`/destinations/${chapter.id}`}
                    className="glass-dark premium-shadow group overflow-hidden rounded-2xl sm:rounded-3xl"
                  >
                    <div className="relative h-28 w-full overflow-hidden sm:h-56">
                      <Image
                        src={chapter.image}
                        alt={chapter.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <h3 className="absolute bottom-2 left-3 text-sm font-black text-pearl sm:bottom-4 sm:left-5 sm:text-2xl">
                        {chapter.name}
                      </h3>
                    </div>
                    <div className="p-3 sm:p-5">
                      <p className="line-clamp-1 text-xs text-muted-foreground sm:text-sm">{chapter.tagline}</p>
                      <p className="mt-2 line-clamp-1 text-[10px] text-platinum sm:mt-3 sm:text-xs">
                        {chapter.places.length} {chapter.places.length === 1 ? "page" : "pages"} ·{" "}
                        {creatorCount} {creatorCount === 1 ? "creator" : "creators"} · {postCount}{" "}
                        community {postCount === 1 ? "entry" : "entries"}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </AppShell>
  );
}
