"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

import { HOST_OPTIONS } from "@/lib/data/chapterBuilder";

import { AUTO_MATCH, useChapterBuilder } from "./ChapterBuilderContext";
import AccordionSection from "./AccordionSection";
import SelectableCard from "./SelectableCard";
import ToggleSwitch from "./ToggleSwitch";

interface HostSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function HostSection({ isOpen, onToggle }: HostSectionProps) {
  const { groupHostChoice, setGroupHostChoice } = useChapterBuilder();

  const chosenHost = HOST_OPTIONS.find((h) => h.id === groupHostChoice);
  const summary =
    groupHostChoice === AUTO_MATCH ? "Auto-Match Me" : chosenHost ? chosenHost.name : undefined;

  return (
    <AccordionSection title="Host" summary={summary} isOpen={isOpen} onToggle={onToggle}>
      <p className="mb-4 text-sm text-muted-foreground">
        Pick a host&apos;s scheduled group trip, or let us match you to the closest one.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SelectableCard
          selected={groupHostChoice === AUTO_MATCH}
          onSelect={() => setGroupHostChoice(AUTO_MATCH)}
        >
          <div className="flex items-start justify-between">
            <Sparkles
              size={20}
              className={groupHostChoice === AUTO_MATCH ? "text-pearl" : "text-muted-foreground"}
            />
            <ToggleSwitch checked={groupHostChoice === AUTO_MATCH} />
          </div>
          <h3 className="mt-3 font-bold text-foreground">Auto-Match Me</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ll assign the group trip that fits your Travel Style closest.
          </p>
        </SelectableCard>

        {HOST_OPTIONS.map((host) => {
          const selected = groupHostChoice === host.id;
          return (
            <SelectableCard
              key={host.id}
              selected={selected}
              onSelect={() => setGroupHostChoice(host.id)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={host.image}
                      alt={host.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{host.name}</h3>
                    <p className="text-xs text-platinum">{host.persona}</p>
                  </div>
                </div>
                <ToggleSwitch checked={selected} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{host.hostingStyle}</p>
              <p className="mt-3 text-xs font-medium text-muted-foreground">
                Fixed group trip - not editable
              </p>
            </SelectableCard>
          );
        })}
      </div>
    </AccordionSection>
  );
}
