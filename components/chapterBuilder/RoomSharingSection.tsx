"use client";

import { ROOM_SHARING_OPTIONS } from "@/lib/data/chapterBuilder";
import { formatSignedINR } from "@/lib/utils/price";

import AccordionSection from "./AccordionSection";
import { useChapterBuilder } from "./ChapterBuilderContext";
import { ICONS } from "./iconMap";
import PillOption from "./PillOption";

interface RoomSharingSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function RoomSharingSection({ isOpen, onToggle }: RoomSharingSectionProps) {
  const { selectedRoomSharing, setSelectedRoomSharing } = useChapterBuilder();
  const active = ROOM_SHARING_OPTIONS.find((r) => r.id === selectedRoomSharing);

  return (
    <AccordionSection
      title="Room Sharing"
      summary={active?.label}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-wrap gap-2">
        {ROOM_SHARING_OPTIONS.map((option) => {
          const Icon = ICONS[option.icon];
          const selected = selectedRoomSharing === option.id;
          return (
            <PillOption
              key={option.id}
              selected={selected}
              onSelect={() => setSelectedRoomSharing(option.id)}
            >
              <Icon size={14} />
              {option.label}
              <span className="text-xs text-muted-foreground">
                {formatSignedINR(option.priceDelta)}
              </span>
            </PillOption>
          );
        })}
      </div>
    </AccordionSection>
  );
}
