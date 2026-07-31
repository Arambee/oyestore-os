import { notFound } from "next/navigation";
import Image from "next/image";

import AppShell from "@/components/dashboard/AppShell";
import ChapterBuilderSections from "@/components/chapterBuilder/ChapterBuilderSections";
import { ChapterBuilderProvider } from "@/components/chapterBuilder/ChapterBuilderContext";
import PriceSummaryRail from "@/components/chapterBuilder/PriceSummaryRail";
import WhyThisChapterSection from "@/components/chapterBuilder/WhyThisChapterSection";
import { HOST_OPTIONS } from "@/lib/data/chapterBuilder";
import { seasons } from "@/lib/data/seasonsByOyestore";
import { parseINR } from "@/lib/utils/price";

export default async function PlacePage({
  params,
}: {
  params: Promise<{ stateId: string; placeId: string }>;
}) {
  const { stateId, placeId } = await params;
  const chapter = seasons.flatMap((s) => s.chapters).find((c) => c.id === stateId);
  const place = chapter?.places.find((p) => p.id === placeId);

  if (!chapter || !place) {
    notFound();
  }

  const featuredHost = HOST_OPTIONS[0];

  return (
    <ChapterBuilderProvider
      placeName={place.name}
      basePrice={parseINR(place.startingPrice)}
    >
      <AppShell rightRail={<PriceSummaryRail />}>
        <section className="premium-border premium-shadow relative overflow-hidden rounded-3xl">
          <div className="relative h-[360px] w-full">
            <Image
              src={place.image}
              alt={place.name}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

            <div className="relative flex h-full flex-col justify-end p-8">
              <p className="text-xs font-medium tracking-wider text-platinum">
                {chapter.name.toUpperCase()} CHAPTER
              </p>
              <h1 className="text-gradient mt-2 text-5xl font-black leading-none tracking-tight">
                {place.name}
              </h1>
              <p className="mt-3 max-w-lg text-white/70">{place.description}</p>
            </div>
          </div>
        </section>

        <div>
          <h2 className="text-3xl font-black text-foreground">Build Your Chapter</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            {`${place.name} isn't one trip. Choose your stay, your host, your guide, your pace, and shape the chapter that's actually yours.`}
          </p>
        </div>

        <ChapterBuilderSections />

        <WhyThisChapterSection
          placeId={place.id}
          placeName={place.name}
          stateId={chapter.id}
          stateName={chapter.name}
          hiddenSpots={place.hiddenSpots}
          hostName={featuredHost.name}
          hostRating={featuredHost.rating}
          hostReviewCount={featuredHost.reviewCount}
        />
      </AppShell>
    </ChapterBuilderProvider>
  );
}
