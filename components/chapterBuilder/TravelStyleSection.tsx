"use client";

import { TRAVEL_STYLE_OPTIONS } from "@/lib/data/chapterBuilder";

import AccordionSection from "./AccordionSection";
import { useChapterBuilder } from "./ChapterBuilderContext";
import { ICONS } from "./iconMap";
import PillOption from "./PillOption";

interface TravelStyleSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function TravelStyleSection({ isOpen, onToggle }: TravelStyleSectionProps) {
  const { selectedTravelStyle, setSelectedTravelStyle } = useChapterBuilder();
  const active = TRAVEL_STYLE_OPTIONS.find((s) => s.id === selectedTravelStyle);

  return (
    <AccordionSection
      title="Travel Style"
      summary={active?.label}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-wrap gap-2">
        {TRAVEL_STYLE_OPTIONS.map((style) => {
          const Icon = ICONS[style.icon];
          const selected = selectedTravelStyle === style.id;
          return (
            <PillOption
              key={style.id}
              selected={selected}
              onSelect={() => setSelectedTravelStyle(style.id)}
            >
              <Icon size={14} />
              {style.label}
            </PillOption>
          );
        })}
      </div>
    </AccordionSection>
  );
}
