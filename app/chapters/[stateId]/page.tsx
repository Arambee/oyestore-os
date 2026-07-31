import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import AppShell from "@/components/dashboard/AppShell";
import { seasons } from "@/lib/data/seasonsByOyestore";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ stateId: string }>;
}) {
  const { stateId } = await params;
  const chapter = seasons.flatMap((s) => s.chapters).find((c) => c.id === stateId);

  if (!chapter) {
    notFound();
  }

  return (
    <AppShell>
      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">CHAPTER</p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          {chapter.name}
        </h1>
        <p className="mt-2 text-muted-foreground">{chapter.tagline}</p>
      </div>

      <div>
        <h2 className="text-2xl font-black text-foreground">Places to visit</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Each place is its own paragraph in {chapter.name}&apos;s story.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapter.places.map((place) => (
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
                <h3 className="absolute bottom-4 left-5 text-2xl font-black text-pearl">
                  {place.name}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-sm text-muted-foreground">{place.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{place.duration}</span>
                  <span className="font-bold text-foreground">{place.startingPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
