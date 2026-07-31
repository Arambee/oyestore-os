import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Users } from "lucide-react";

import type { Creator } from "@/lib/types/dashboard";

interface CreatorsWhoveBeenHereProps {
  creators: Creator[];
}

export default function CreatorsWhoveBeenHere({ creators }: CreatorsWhoveBeenHereProps) {
  if (creators.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <Users size={12} />
        TOLD BY THOSE WHO&apos;VE TAKEN YOU THERE
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {creators.map((creator) => (
          <Link
            key={creator.id}
            href={`/creators/${creator.id}`}
            className="glass-dark group flex gap-4 rounded-2xl p-5 transition-colors hover:bg-white/[0.05]"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
              <Image
                src={creator.image}
                alt={creator.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-foreground">{creator.name}</h3>
                {creator.verified && (
                  <BadgeCheck
                    size={14}
                    className="fill-current text-platinum"
                  />
                )}
              </div>
              <p className="text-xs text-platinum">{creator.tagline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{creator.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
