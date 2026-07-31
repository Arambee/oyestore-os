"use client";

import { Crown, HeartHandshake, User, UsersRound } from "lucide-react";

import type { PartyType, TripMode } from "@/lib/types/chapterBuilder";

import { useChapterBuilder } from "./ChapterBuilderContext";
import PillOption from "./PillOption";

const PARTY_TYPES: { id: PartyType; label: string; icon: typeof User }[] = [
  { id: "solo", label: "Solo", icon: User },
  { id: "couple", label: "Couple", icon: HeartHandshake },
  { id: "group", label: "Group", icon: UsersRound },
];

const TRIP_MODES: { id: TripMode; label: string; icon: typeof User }[] = [
  { id: "private-tour", label: "Private Tour", icon: Crown },
  { id: "group-travel", label: "Group Travel", icon: UsersRound },
];

export default function WhosTravellingSection() {
  const { partyType, setPartyType, tripMode, setTripMode } = useChapterBuilder();

  return (
    <section className="glass-dark rounded-3xl p-5">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <div>
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            WHO&apos;S TRAVELLING
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {PARTY_TYPES.map((option) => {
              const Icon = option.icon;
              const selected = partyType === option.id;
              return (
                <PillOption
                  key={option.id}
                  selected={selected}
                  onSelect={() => setPartyType(option.id)}
                >
                  <Icon size={14} />
                  {option.label}
                </PillOption>
              );
            })}
          </div>
        </div>

        <div className="h-10 w-px bg-white/10 max-sm:hidden" />

        <div>
          <p className="text-xs font-medium tracking-wider text-muted-foreground">TRIP MODE</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {TRIP_MODES.map((option) => {
              const Icon = option.icon;
              const selected = tripMode === option.id;
              return (
                <PillOption
                  key={option.id}
                  selected={selected}
                  onSelect={() => setTripMode(option.id)}
                >
                  <Icon size={14} />
                  {option.label}
                </PillOption>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
