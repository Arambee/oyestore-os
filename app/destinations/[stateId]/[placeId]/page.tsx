import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import CommunityPages from "@/components/destinations/CommunityPages";
import CreatorsWhoveBeenHere from "@/components/destinations/CreatorsWhoveBeenHere";
import FestivalStrip from "@/components/destinations/FestivalStrip";
import FoodGuide from "@/components/destinations/FoodGuide";
import HiddenPages from "@/components/destinations/HiddenPages";
import NearbyDayTrips from "@/components/destinations/NearbyDayTrips";
import PlaceFaqs from "@/components/destinations/PlaceFaqs";
import PracticalGuide from "@/components/destinations/PracticalGuide";
import SafetyAndCustoms from "@/components/destinations/SafetyAndCustoms";
import SeasonSpotlight from "@/components/destinations/SeasonSpotlight";
import SectionJumpNav from "@/components/destinations/SectionJumpNav";
import WhereToStay from "@/components/destinations/WhereToStay";
import { communityPosts } from "@/lib/data/communityFeed";
import { creators } from "@/lib/data/creators";
import { festivals } from "@/lib/data/discoverySections";
import { placeResearch } from "@/lib/data/placeResearch";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

interface DestinationPlacePageProps {
  params: Promise<{ stateId: string; placeId: string }>;
}

export default async function DestinationPlacePage({ params }: DestinationPlacePageProps) {
  const { stateId, placeId } = await params;
  const chapter = currentSeason.chapters.find((c) => c.id === stateId);
  const place = chapter?.places.find((p) => p.id === placeId);

  if (!chapter || !place) {
    notFound();
  }

  const posts = communityPosts.filter(
    (post) => post.stateId === stateId && post.placeId === placeId,
  );
  const placeCreators = creators.filter((creator) =>
    creator.hostedPlaces.some((ref) => ref.stateId === stateId && ref.placeId === placeId),
  );
  const stateFestivals = festivals.filter((festival) => festival.title.includes(chapter.name));
  const research = placeResearch[placeId];

  const sections = [
    research && { id: "practical", label: "Getting There & Budget" },
    research && { id: "stay", label: "Where To Stay" },
    research && { id: "food", label: "What To Eat" },
    { id: "season", label: "This Season" },
    research && { id: "day-trips", label: "Day Trips" },
    research && { id: "safety", label: "Safety & Customs" },
    research && { id: "faqs", label: "FAQs" },
    { id: "creators", label: "Creators" },
    { id: "community", label: "Community" },
    { id: "hidden-spots", label: "Hidden Spots" },
  ].filter((section): section is { id: string; label: string } => Boolean(section));

  return (
    <AppShell>
      <section className="premium-border premium-shadow relative overflow-hidden rounded-3xl">
        <div className="relative h-[320px] w-full">
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
            <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
              <BookOpen size={12} />
              FROM THE VAULT · {chapter.name.toUpperCase()}
            </p>
            <h1 className="text-gradient mt-2 text-4xl font-black leading-none tracking-tight sm:text-5xl">
              {place.name}
            </h1>
            <p className="mt-3 max-w-lg text-white/70">{place.description}</p>
          </div>
        </div>
      </section>

      <SectionJumpNav sections={sections} />

      {research && (
        <div id="practical">
          <PracticalGuide
            gettingThere={research.gettingThere}
            gettingAround={research.gettingAround}
            budgetPerDay={research.budgetPerDay}
          />
        </div>
      )}

      {research && (
        <div id="stay">
          <WhereToStay areas={research.whereToStayAreas} />
        </div>
      )}

      {research && (
        <div id="food">
          <FoodGuide
            placeName={place.name}
            mustEat={research.mustEat}
          />
        </div>
      )}

      <div id="season">
        <SeasonSpotlight
          season={currentSeason}
          experiences={place.experiences}
        />
      </div>

      {research && (
        <div id="day-trips">
          <NearbyDayTrips dayTrips={research.nearbyDayTrips} />
        </div>
      )}

      {research && (
        <div id="safety">
          <SafetyAndCustoms
            safetyNotes={research.safetyNotes}
            customsNotes={research.customsNotes}
          />
        </div>
      )}

      {research && (
        <div id="faqs">
          <PlaceFaqs faqs={research.faqs} />
        </div>
      )}

      <div id="creators">
        <CreatorsWhoveBeenHere creators={placeCreators} />
      </div>

      <div id="community">
        <CommunityPages posts={posts} />
      </div>

      <div id="hidden-spots">
        <HiddenPages
          placeName={place.name}
          hiddenSpots={place.hiddenSpots}
        />
      </div>

      <FestivalStrip festivals={stateFestivals} />

      <Link
        href={`/chapters/${chapter.id}/${place.id}`}
        className="glass-dark premium-shadow group flex items-center justify-between rounded-3xl p-6"
      >
        <div>
          <p className="text-xs font-medium tracking-wider text-platinum">READY TO WRITE YOURS?</p>
          <h3 className="mt-1 text-xl font-bold text-foreground">
            Build your own chapter in {place.name}
          </h3>
        </div>
        <ArrowRight
          size={20}
          className="shrink-0 text-foreground transition-transform group-hover:translate-x-1"
        />
      </Link>
    </AppShell>
  );
}
