import Image from "next/image";
import { Lock } from "lucide-react";

import {
  FOOD_OPTIONS,
  GUIDE_OPTIONS,
  ROOM_SHARING_OPTIONS,
  STAY_OPTIONS,
  ACTIVITY_OPTIONS,
  TRANSPORT_OPTIONS,
} from "@/lib/data/chapterBuilder";
import type { HostOption } from "@/lib/types/chapterBuilder";

interface LockedTripSummaryProps {
  host: HostOption;
  wasAutoMatched: boolean;
}

export default function LockedTripSummary({ host, wasAutoMatched }: LockedTripSummaryProps) {
  const stay = STAY_OPTIONS.find((s) => s.id === host.package.stayId);
  const transport = TRANSPORT_OPTIONS.find((t) => t.id === host.package.transportId);
  const guide = GUIDE_OPTIONS.find((g) => g.id === host.package.guideId);
  const roomSharing = ROOM_SHARING_OPTIONS.find((r) => r.id === host.package.roomSharingId);
  const activities = host.package.activityIds
    .map((id) => ACTIVITY_OPTIONS.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const food = host.package.foodIds
    .map((id) => FOOD_OPTIONS.find((f) => f.id === id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <section>
      <div className="flex items-center gap-2">
        <Lock
          size={16}
          className="text-platinum"
        />
        <h2 className="text-2xl font-black text-foreground">This Trip, As It Is</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {wasAutoMatched
          ? `We matched you with the group trip that fits your Travel Style closest, hosted by ${host.name}.`
          : `You've chosen ${host.name}'s trip. Group departures run fixed, so this is exactly what's included.`}
      </p>

      <div className="mt-5 flex items-center gap-4 rounded-2xl bg-white/5 p-5">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
          <Image
            src={host.image}
            alt={host.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{host.name}</h3>
          <p className="text-sm text-platinum">{host.persona}</p>
          <p className="mt-1 text-sm text-muted-foreground">{host.hostingStyle}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">STAY</p>
          <p className="mt-1 font-bold text-foreground">{stay?.name}</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">TRANSPORT</p>
          <p className="mt-1 font-bold text-foreground">{transport?.label}</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            ROOM SHARING
          </p>
          <p className="mt-1 font-bold text-foreground">{roomSharing?.label}</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">GUIDE</p>
          <p className="mt-1 font-bold text-foreground">{guide?.name}</p>
          <p className="text-xs text-muted-foreground">Complimentary, included</p>
        </div>
        <div className="glass rounded-2xl p-5 sm:col-span-2">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            ACTIVITIES INCLUDED
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {activities.map((activity) => (
              <span
                key={activity.id}
                className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground"
              >
                {activity.name}
              </span>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-5 sm:col-span-2 lg:col-span-3">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            FOOD
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {food.map((option) => (
              <span
                key={option.id}
                className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground"
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
