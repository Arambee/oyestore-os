import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import { MIN_FOLLOWERS } from "@/lib/constants/creators";
import { creators } from "@/lib/data/creators";

export default function CreatorsPage() {
  return (
    <AppShell>
      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">CREATORS</p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          The People Who Host
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Every chapter is run by someone real - here&apos;s who&apos;s hosting,
          where they take travellers, and what they&apos;re actually like on a trip.
        </p>
      </div>

      <Link
        href="/creators/host"
        className="glass-dark premium-shadow group flex items-center justify-between gap-4 rounded-3xl p-6"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10">
            <Sparkles size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Host A Trip With Us</h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {`${MIN_FOLLOWERS.toLocaleString()}+ followers on any platform? Apply to run your own chapter - subject to approval.`}
            </p>
          </div>
        </div>
        <ArrowRight
          size={20}
          className="shrink-0 text-foreground transition-transform group-hover:translate-x-1"
        />
      </Link>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((creator) => (
          <Link
            key={creator.id}
            href={`/creators/${creator.id}`}
            className="glass-dark premium-shadow group rounded-2xl p-3 sm:rounded-3xl sm:p-6"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full sm:size-16">
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
                  <h3 className="text-sm font-bold text-foreground sm:text-base">{creator.name}</h3>
                  {creator.verified && (
                    <BadgeCheck
                      size={14}
                      className="fill-current text-platinum"
                    />
                  )}
                </div>
                <p className="text-[11px] text-platinum sm:text-xs">{creator.tagline}</p>
              </div>
            </div>

            <p className="mt-3 line-clamp-3 text-xs text-muted-foreground sm:mt-4 sm:text-sm">{creator.bio}</p>

            <p className="mt-3 text-[11px] font-medium tracking-wider text-muted-foreground sm:mt-4 sm:text-xs">
              HOSTS {creator.hostedPlaces.length}{" "}
              {creator.hostedPlaces.length === 1 ? "PLACE" : "PLACES"}
            </p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
