import { Navigation } from "lucide-react";

import type { DayTrip } from "@/lib/types/dashboard";

interface NearbyDayTripsProps {
  dayTrips: DayTrip[];
}

export default function NearbyDayTrips({ dayTrips }: NearbyDayTripsProps) {
  if (dayTrips.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <Navigation size={12} />
        WORTH THE DETOUR
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {dayTrips.map((trip) => (
          <div
            key={trip.name}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold text-foreground">{trip.name}</h3>
              <span className="shrink-0 text-xs text-platinum">{trip.distance}</span>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">{trip.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
