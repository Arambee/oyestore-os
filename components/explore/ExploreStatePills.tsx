import Link from "next/link";

import { currentSeason } from "@/lib/data/seasonsByOyestore";
import { cn } from "@/lib/utils";

interface ExploreStatePillsProps {
  activeStateId?: string;
}

export default function ExploreStatePills({ activeStateId }: ExploreStatePillsProps) {
  const isAllActive = !activeStateId;

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/explore"
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition",
          isAllActive
            ? "glass-dark border border-white/25 text-foreground"
            : "glass text-foreground hover:bg-white/10",
        )}
      >
        All
      </Link>
      {currentSeason.chapters.map((chapter) => (
        <Link
          key={chapter.id}
          href={`/explore/${chapter.id}`}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition",
            activeStateId === chapter.id
              ? "glass-dark border border-white/25 text-foreground"
              : "glass text-foreground hover:bg-white/10",
          )}
        >
          {chapter.name}
        </Link>
      ))}
    </div>
  );
}
