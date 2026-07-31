import Image from "next/image";
import { PartyPopper } from "lucide-react";

import type { DiscoveryItem } from "@/lib/types/dashboard";

interface FestivalStripProps {
  festivals: DiscoveryItem[];
}

export default function FestivalStrip({ festivals }: FestivalStripProps) {
  if (festivals.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <PartyPopper size={12} />
        WHAT&apos;S BEING CELEBRATED
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {festivals.map((festival) => (
          <div
            key={festival.id}
            className="glass-dark relative flex h-32 items-end overflow-hidden rounded-2xl p-4"
          >
            <Image
              src={festival.image}
              alt={festival.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative">
              <p className="text-xs font-medium text-platinum">{festival.badge}</p>
              <h3 className="font-bold text-pearl">{festival.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
