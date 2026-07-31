"use client";

import Image from "next/image";
import { MapPin, Star } from "lucide-react";

import { STAY_OPTIONS } from "@/lib/data/chapterBuilder";
import { formatSignedINR } from "@/lib/utils/price";
import { cn } from "@/lib/utils";

import AccordionSection from "./AccordionSection";
import { useChapterBuilder } from "./ChapterBuilderContext";
import SelectableCard from "./SelectableCard";
import ToggleSwitch from "./ToggleSwitch";

interface StaySectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function StaySection({ isOpen, onToggle }: StaySectionProps) {
  const { selectedStay, setSelectedStay, selectedStayProperty, setSelectedStayProperty } =
    useChapterBuilder();

  const activeStay = STAY_OPTIONS.find((s) => s.id === selectedStay);
  const activeProperty = activeStay?.properties.find((p) => p.id === selectedStayProperty);

  return (
    <AccordionSection
      title="Stay"
      summary={activeStay ? `${activeStay.name} · ${activeProperty?.name}` : undefined}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STAY_OPTIONS.map((stay) => {
          const selected = selectedStay === stay.id;
          return (
            <SelectableCard
              key={stay.id}
              selected={selected}
              onSelect={() => setSelectedStay(stay.id)}
              className="p-0 overflow-hidden"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute right-3 top-3">
                  <ToggleSwitch checked={selected} />
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-pearl">{stay.name}</h3>
                  <span className="flex items-center gap-1 text-xs text-pearl/90">
                    <Star
                      size={12}
                      className="fill-current text-pearl"
                    />
                    {stay.rating}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} />
                  {stay.distance}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {stay.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">
                  {formatSignedINR(stay.priceDelta)}
                </p>
              </div>
            </SelectableCard>
          );
        })}
      </div>

      {activeStay && (
        <div className="mt-4 space-y-2">
          {activeStay.properties.map((property) => {
            const selected = selectedStayProperty === property.id;
            return (
              <button
                key={property.id}
                type="button"
                onClick={() => setSelectedStayProperty(property.id)}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl border p-3.5 text-left transition-all duration-300",
                  selected
                    ? "border-white/25 bg-white/10"
                    : "border-transparent bg-white/[0.03] hover:bg-white/5",
                )}
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{property.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star
                      size={10}
                      className="fill-current text-platinum"
                    />
                    {property.rating}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground">
                    {formatSignedINR(property.priceDelta)}
                  </span>
                  <ToggleSwitch checked={selected} />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </AccordionSection>
  );
}
