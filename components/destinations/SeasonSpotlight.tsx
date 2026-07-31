import { CloudRain } from "lucide-react";

import type { SeasonShowcase } from "@/lib/types/dashboard";

interface SeasonSpotlightProps {
  season: SeasonShowcase;
  experiences: string[];
}

export default function SeasonSpotlight({ season, experiences }: SeasonSpotlightProps) {
  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <CloudRain size={12} />
        HOW IT READS RIGHT NOW
      </p>
      <div className="glass-dark mt-4 rounded-3xl p-6">
        <h3 className="text-xl font-black text-foreground">{season.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{season.subtitle}</p>

        {experiences.length > 0 && (
          <>
            <p className="mt-5 text-xs font-medium tracking-wider text-muted-foreground">
              WORTH DOING THIS SEASON
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {experiences.map((experience) => (
                <span
                  key={experience}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground"
                >
                  {experience}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
