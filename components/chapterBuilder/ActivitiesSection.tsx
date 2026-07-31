"use client";

import { ACTIVITY_OPTIONS } from "@/lib/data/chapterBuilder";
import { formatSignedINR } from "@/lib/utils/price";

import AccordionSection from "./AccordionSection";
import { useChapterBuilder } from "./ChapterBuilderContext";
import { ICONS } from "./iconMap";
import PillOption from "./PillOption";

interface ActivitiesSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ActivitiesSection({ isOpen, onToggle }: ActivitiesSectionProps) {
  const { selectedActivities, toggleActivity } = useChapterBuilder();

  const summary =
    selectedActivities.length > 0 ? `${selectedActivities.length} selected` : "None yet";

  return (
    <AccordionSection
      title="Activities"
      summary={summary}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-wrap gap-2">
        {ACTIVITY_OPTIONS.map((activity) => {
          const Icon = ICONS[activity.icon];
          const selected = selectedActivities.includes(activity.id);
          return (
            <PillOption
              key={activity.id}
              selected={selected}
              onSelect={() => toggleActivity(activity.id)}
            >
              <Icon size={14} />
              {activity.name}
              <span className="text-xs text-muted-foreground">{activity.duration}</span>
              <span className="text-xs text-muted-foreground">
                {formatSignedINR(activity.cost)}
              </span>
            </PillOption>
          );
        })}
      </div>
    </AccordionSection>
  );
}
