"use client";

import Image from "next/image";
import { Languages, Star } from "lucide-react";

import { GUIDE_OPTIONS } from "@/lib/data/chapterBuilder";

import AccordionSection from "./AccordionSection";
import { useChapterBuilder } from "./ChapterBuilderContext";
import SelectableCard from "./SelectableCard";
import ToggleSwitch from "./ToggleSwitch";

interface GuideSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function GuideSection({ isOpen, onToggle }: GuideSectionProps) {
  const {
    isGroupLocked,
    guideAssignment,
    setGuideAssignment,
    selectedGuide,
    setSelectedGuide,
    effectiveGuideId,
  } = useChapterBuilder();

  if (isGroupLocked) return null;

  const autoAssigned = guideAssignment === "auto";
  const effectiveGuide = GUIDE_OPTIONS.find((g) => g.id === effectiveGuideId);
  const summary = autoAssigned
    ? effectiveGuide
      ? `Auto · ${effectiveGuide.name}`
      : "Auto-assigned"
    : effectiveGuide?.name;

  return (
    <AccordionSection title="Guide" summary={summary} isOpen={isOpen} onToggle={onToggle}>
      <p className="mb-4 text-sm text-muted-foreground">
        Guides are complimentary. Pick whichever specialty you want, or let us assign one.
      </p>

      <SelectableCard
        selected={autoAssigned}
        onSelect={() => setGuideAssignment(autoAssigned ? "manual" : "auto")}
        className="flex items-center justify-between"
      >
        <div>
          <h3 className="font-bold text-foreground">Auto-assign my guide</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            We&apos;ll match a guide to your Travel Style.
          </p>
        </div>
        <ToggleSwitch checked={autoAssigned} />
      </SelectableCard>

      {autoAssigned ? (
        effectiveGuide && (
          <div className="mt-4 glass rounded-2xl p-5">
            <p className="text-xs font-medium tracking-wider text-muted-foreground">
              ASSIGNED GUIDE
            </p>
            <h3 className="mt-1 font-bold text-foreground">{effectiveGuide.name}</h3>
            <p className="text-xs text-platinum">{effectiveGuide.specialty}</p>
          </div>
        )
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_OPTIONS.map((guide) => {
            const selected = selectedGuide === guide.id;
            return (
              <SelectableCard
                key={guide.id}
                selected={selected}
                onSelect={() => setSelectedGuide(guide.id)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={guide.image}
                        alt={guide.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{guide.name}</h3>
                      <p className="text-xs text-platinum">{guide.specialty}</p>
                    </div>
                  </div>
                  <ToggleSwitch checked={selected} />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="fill-current text-platinum" />
                    {guide.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Languages size={12} />
                    {guide.languages.join(", ")}
                  </span>
                </div>
                <p className="mt-3 text-xs font-medium text-muted-foreground">Complimentary</p>
              </SelectableCard>
            );
          })}
        </div>
      )}
    </AccordionSection>
  );
}
