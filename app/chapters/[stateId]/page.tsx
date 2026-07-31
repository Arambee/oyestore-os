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

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapter.places.map((place) => (
            <Link
              key={place.id}
              href={`/chapters/${chapter.id}/${place.id}`}
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
                <p className="text-xs text-muted-foreground sm:text-sm">{place.description}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] sm:mt-4 sm:text-sm">
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
