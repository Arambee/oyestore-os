import Image from "next/image";
import { CloudRain, Compass, MapPin, PenLine } from "lucide-react";

import type { StateReference } from "@/lib/types/dashboard";

interface StateKnowledgePanelProps {
  name: string;
  reference: StateReference;
}

export default function StateKnowledgePanel({ name, reference }: StateKnowledgePanelProps) {
  return (
    <>
      <section className="premium-border premium-shadow relative overflow-hidden rounded-3xl">
        <div className="relative h-[260px] w-full">
          <Image
            src={reference.image}
            alt={name}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <p className="text-xs font-medium tracking-wider text-platinum">THE BASICS</p>
            <h2 className="mt-2 text-3xl font-black text-pearl">{name}</h2>
            <p className="mt-2 max-w-lg text-white/70">{reference.overview}</p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-muted-foreground">
            <CloudRain size={12} />
            BEST TIME TO VISIT
          </p>
          <p className="mt-2 text-sm text-foreground">{reference.bestTimeToVisit}</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-muted-foreground">
            <MapPin size={12} />
            KEY REGIONS
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {reference.keyRegions.map((region) => (
              <span
                key={region}
                className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-dark rounded-3xl p-6">
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <Compass size={12} />
          KNOWN FOR
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {reference.knownFor.map((thing) => (
            <span
              key={thing}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground"
            >
              {thing}
            </span>
          ))}
        </div>
        <p className="mt-5 text-xs font-medium tracking-wider text-muted-foreground">CLIMATE</p>
        <p className="mt-1.5 text-sm text-muted-foreground">{reference.climate}</p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/10 p-5">
        <PenLine
          size={16}
          className="shrink-0 text-muted-foreground/60"
        />
        <p className="text-sm text-muted-foreground">
          {`This is the basic record - nobody from our community or creators has written ${name} yet. That's next.`}
        </p>
      </div>
    </>
  );
}
