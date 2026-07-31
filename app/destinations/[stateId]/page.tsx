import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import StateKnowledgePanel from "@/components/destinations/StateKnowledgePanel";
import { communityPosts } from "@/lib/data/communityFeed";
import { creators } from "@/lib/data/creators";
import { currentSeason } from "@/lib/data/seasonsByOyestore";
import { stateReferences } from "@/lib/data/stateReferences";
import { statesOfIndia } from "@/lib/data/statesOfIndia";

interface DestinationStatePageProps {
  params: Promise<{ stateId: string }>;
}

export default async function DestinationStatePage({ params }: DestinationStatePageProps) {
  const { stateId } = await params;
  const stateInfo = statesOfIndia.find((s) => s.id === stateId);

  if (!stateInfo) {
    notFound();
  }

  const chapter = currentSeason.chapters.find((c) => c.id === stateId);

  if (!chapter) {
    const reference = stateReferences[stateId];
    if (!reference) notFound();

    return (
      <AppShell>
        <div>
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <BookOpen size={12} />
            VOLUME · {stateInfo.region.toUpperCase()} INDIA
          </p>
          <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
            {stateInfo.name}
          </h1>
        </div>

        <StateKnowledgePanel
          name={stateInfo.name}
          reference={reference}
        />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <BookOpen size={12} />
          VOLUME
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">{chapter.name}</h1>
        <p className="mt-2 max-w-xl text-muted-foreground">{chapter.tagline}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chapter.places.map((place) => {
          const postCount = communityPosts.filter(
            (post) => post.stateId === chapter.id && post.placeId === place.id,
          ).length;
          const creatorCount = creators.filter((creator) =>
            creator.hostedPlaces.some(
              (ref) => ref.stateId === chapter.id && ref.placeId === place.id,
            ),
          ).length;

          return (
            <Link
              key={place.id}
              href={`/destinations/${chapter.id}/${place.id}`}
              className="glass-dark premium-shadow group overflow-hidden rounded-3xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-2xl font-black text-pearl">
                  {place.name}
                </h3>
              </div>
              <div className="p-5">
                <p className="line-clamp-2 text-sm text-muted-foreground">{place.description}</p>
                <p className="mt-3 text-xs text-platinum">
                  {creatorCount} {creatorCount === 1 ? "creator has" : "creators have"} written
                  this · {postCount} community {postCount === 1 ? "entry" : "entries"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
