"use client";

import { FOOD_OPTIONS } from "@/lib/data/chapterBuilder";

import AccordionSection from "./AccordionSection";
import { useChapterBuilder } from "./ChapterBuilderContext";
import { ICONS } from "./iconMap";
import PillOption from "./PillOption";

interface FoodSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function FoodSection({ isOpen, onToggle }: FoodSectionProps) {
  const { selectedFood, toggleFood } = useChapterBuilder();

  const summary =
    selectedFood.length > 0
      ? selectedFood
          .map((id) => FOOD_OPTIONS.find((f) => f.id === id)?.label)
          .filter(Boolean)
          .join(", ")
      : "Any";

  return (
    <AccordionSection
      title="Food"
      summary={summary}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-wrap gap-2">
        {FOOD_OPTIONS.map((food) => {
          const Icon = ICONS[food.icon];
          const selected = selectedFood.includes(food.id);
          return (
            <PillOption
              key={food.id}
              selected={selected}
              onSelect={() => toggleFood(food.id)}
            >
              <Icon size={14} />
              {food.label}
            </PillOption>
          );
        })}
      </div>
    </AccordionSection>
  );
}
