import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  ArrowUpRight,
  Bike,
  Camera,
  CloudRain,
  Coffee,
  Droplets,
  Flame,
  Footprints,
  Landmark,
  Leaf,
  Mountain,
  PawPrint,
  Sailboat,
  Sunset,
  TrendingUp,
  Umbrella,
  Waves,
  type LucideIcon,
} from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

const EXPERIENCE_ICONS: Record<string, LucideIcon> = {
  Kayaking: Waves,
  "Horse Riding": Footprints,
  Bonfire: Flame,
  Scuba: Anchor,
  "Tea Estate Trek": Leaf,
  "Waterfall Hike": Droplets,
  "Photography Walk": Camera,
  "Cave Trek": Mountain,
  "Peak Hike": TrendingUp,
  "Wildlife Safari": PawPrint,
  "Cycling Tour": Bike,
  "Boat Ride": Sailboat,
  "Café Trail": Coffee,
  "Waterfall Trek": Droplets,
  "Fort Sunset": Sunset,
  "Beach Hopping": Umbrella,
  "Beach Trek": Footprints,
  "Temple Walk": Landmark,
  "Cliff Jumping": ArrowUpRight,
};

export default function ExperiencesPage() {
  return (
    <AppShell>
      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">EXPERIENCES</p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          What Each Chapter Has To Offer
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Organized the way we actually run it - by season, then by chapter,
          then by place, then what that place has to offer.
        </p>
      </div>

      <div className="glass-dark rounded-3xl p-6">
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <CloudRain size={12} />
          THIS SEASON
        </p>
        <h2 className="mt-2 text-xl font-bold text-foreground">{currentSeason.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{currentSeason.subtitle}</p>
      </div>

      {currentSeason.chapters.map((chapter) => (
        <div key={chapter.id}>
          <h2 className="text-2xl font-black text-foreground">{chapter.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{chapter.tagline}</p>

          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chapter.places.map((place) => (
              <div
                key={place.id}
                className="glass-dark premium-shadow overflow-hidden rounded-3xl"
              >
                <Link
                  href={`/chapters/${chapter.id}/${place.id}`}
                  className="group relative block h-44 w-full overflow-hidden"
                >
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-black text-pearl">
                    {place.name}
                  </h3>
                </Link>

                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{place.description}</p>

                  <p className="mt-4 text-xs font-medium tracking-wider text-muted-foreground">
                    WHAT&apos;S ON OFFER
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {place.experiences.map((experience) => {
                      const Icon = EXPERIENCE_ICONS[experience] ?? Mountain;
                      return (
                        <span
                          key={experience}
                          className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-foreground"
                        >
                          <Icon size={12} />
                          {experience}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AppShell>
  );
}
