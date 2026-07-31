import Link from "next/link";

import AppShell from "@/components/dashboard/AppShell";
import ExploreFeed from "@/components/explore/ExploreFeed";
import ExploreStatePills from "@/components/explore/ExploreStatePills";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

export default function ExplorePage() {
  return (
    <AppShell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-wider text-platinum">
            COMMUNITY DISCOVERY
          </p>
          <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
            Explore
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Real photos and videos, posted by the travellers and locals who
            were actually there - pick a state to find its cities, then see
            what&apos;s happening there right now. This feed rotates with{" "}
            {currentSeason.name}, not an algorithm.
          </p>
        </div>
        <Link
          href="/profile"
          className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-white/10"
        >
          Share Your Story
        </Link>
      </div>

      <ExploreStatePills />

      <ExploreFeed />
    </AppShell>
  );
}
