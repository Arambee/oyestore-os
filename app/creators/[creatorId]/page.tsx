import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import { creators } from "@/lib/data/creators";
import { seasons } from "@/lib/data/seasonsByOyestore";

export default async function CreatorPage({
  params,
}: {
  params: Promise<{ creatorId: string }>;
}) {
  const { creatorId } = await params;
  const creator = creators.find((c) => c.id === creatorId);

  if (!creator) {
    notFound();
  }

  const chapters = seasons.flatMap((s) => s.chapters);
  const hostedPlaces = creator.hostedPlaces
    .map(({ stateId, placeId }) => {
      const chapter = chapters.find((c) => c.id === stateId);
      const place = chapter?.places.find((p) => p.id === placeId);
      return chapter && place ? { chapter, place } : null;
    })
    .filter((entry) => entry !== null);

  return (
    <AppShell>
      <section className="glass-dark premium-shadow flex flex-col items-start gap-6 rounded-3xl p-8 sm:flex-row sm:items-center">
        <Image
          src={creator.image}
          alt={creator.name}
          width={96}
          height={96}
          className="size-24 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black text-foreground">{creator.name}</h1>
            {creator.verified && (
              <BadgeCheck
                size={20}
                className="text-platinum"
              />
            )}
          </div>
          <p className="mt-1 text-platinum">{creator.tagline}</p>
          <p className="mt-3 max-w-xl text-muted-foreground">{creator.bio}</p>
        </div>
      </section>

      <div>
        <h2 className="text-2xl font-black text-foreground">
          Places {creator.name.split(" ")[0]} hosts
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hostedPlaces.map(({ chapter, place }) => (
            <Link
              key={place.id}
              href={`/chapters/${chapter.id}/${place.id}`}
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
                <p className="absolute bottom-11 left-5 text-xs tracking-wide text-platinum">
                  {chapter.name.toUpperCase()}
                </p>
                <h3 className="absolute bottom-4 left-5 text-2xl font-black text-pearl">
                  {place.name}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{place.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
