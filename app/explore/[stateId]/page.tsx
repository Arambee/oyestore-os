import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AppShell from "@/components/dashboard/AppShell";
import ExploreStatePills from "@/components/explore/ExploreStatePills";
import { communityPosts } from "@/lib/data/communityFeed";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

interface ExploreStatePageProps {
  params: Promise<{ stateId: string }>;
}

export default async function ExploreStatePage({ params }: ExploreStatePageProps) {
  const { stateId } = await params;

  const chapter = currentSeason.chapters.find((c) => c.id === stateId);
  if (!chapter) notFound();

  return (
    <AppShell>
      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">
          COMMUNITY DISCOVERY
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          {chapter.name}
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Pick a city to see what travellers and locals are posting there
          right now.
        </p>
      </div>

      <ExploreStatePills activeStateId={chapter.id} />

      <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chapter.places.map((place) => {
          const postCount = communityPosts.filter(
            (post) => post.stateId === chapter.id && post.placeId === place.id,
          ).length;

          return (
            <Link
              key={place.id}
              href={`/explore/${chapter.id}/${place.id}`}
              className="glass-dark premium-shadow group overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <div className="relative h-32 w-full overflow-hidden sm:h-56">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <h3 className="absolute bottom-2 left-3 text-sm font-black text-pearl sm:bottom-4 sm:left-5 sm:text-2xl">
                  {place.name}
                </h3>
              </div>
              <div className="p-3 sm:p-5">
                <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
                  {place.description}
                </p>
                <p className="mt-2 text-[11px] text-platinum sm:mt-3 sm:text-xs">
                  {postCount} {postCount === 1 ? "post" : "posts"} this season
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
