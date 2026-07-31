import {
  bestOfSeason,
  festivals,
  topPicks,
  trendingPlaces,
  tripsYouMayLike,
  upcomingTrips,
} from "@/lib/data/discoverySections";
import { moods } from "@/lib/data/moods";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

import AppShell from "./AppShell";
import ChapterHero from "./ChapterHero";
import CreatorsRail from "./CreatorsRail";
import DiscoveryRail from "./DiscoveryRail";
import GreetingBanner from "./GreetingBanner";
import RightRail from "./RightRail";

const chapterItems = currentSeason.chapters.map((chapter) => ({
  id: chapter.id,
  href: `/chapters/${chapter.id}`,
  image: chapter.image,
  title: chapter.name,
  subtitle: chapter.tagline,
}));

const moodItems = moods.map((mood) => ({
  id: mood.id,
  href: `/moods/${mood.id}`,
  image: mood.image,
  title: mood.label,
  subtitle: mood.description,
}));

export default function DashboardShell() {
  return (
    <AppShell rightRail={<RightRail />}>
      <GreetingBanner />
      <ChapterHero />

      <DiscoveryRail
        title="Chapters"
        subtitle="Every state is a chapter - open one to find its places."
        items={chapterItems}
      />

      <DiscoveryRail
        title="Mood"
        subtitle="Where's your mood taking you today?"
        items={moodItems}
      />

      <CreatorsRail />

      <DiscoveryRail
        title="Trending Places"
        subtitle="What travellers are booking right now."
        items={trendingPlaces}
      />

      <DiscoveryRail
        title="Best of Season"
        subtitle={`The best of ${currentSeason.name} while it lasts.`}
        items={bestOfSeason}
      />

      <DiscoveryRail
        title="Festival Bonanza"
        subtitle="Time a trip around what's being celebrated."
        items={festivals}
      />

      <DiscoveryRail
        title="Trips You May Like"
        subtitle="Picked from what you've already explored."
        items={tripsYouMayLike}
      />

      <DiscoveryRail
        title="Top Oyestore Picks"
        subtitle="Editorial favourites, chosen by our own team."
        items={topPicks}
      />

      <DiscoveryRail
        title="Upcoming Trips"
        subtitle="A sneak peek at what's launching soon."
        items={upcomingTrips}
      />
    </AppShell>
  );
}
