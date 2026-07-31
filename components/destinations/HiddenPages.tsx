import { Sparkles } from "lucide-react";

import type { HiddenSpot } from "@/lib/types/dashboard";

interface HiddenPagesProps {
  placeName: string;
  hiddenSpots: HiddenSpot[];
}

export default function HiddenPages({ placeName, hiddenSpots }: HiddenPagesProps) {
  if (hiddenSpots.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <Sparkles size={12} />
        PAGES ONLY LOCALS KNOW
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {`The parts of ${placeName} that never make it onto a checklist.`}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {hiddenSpots.map((spot) => (
          <div
            key={spot.name}
            className="glass rounded-2xl p-5"
          >
            <h3 className="font-bold text-foreground">{spot.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{spot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
