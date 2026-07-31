"use client";

import { Star } from "lucide-react";

import { TRANSPORT_OPTIONS } from "@/lib/data/chapterBuilder";
import { formatSignedINR } from "@/lib/utils/price";
import { cn } from "@/lib/utils";

import AccordionSection from "./AccordionSection";
import { useChapterBuilder } from "./ChapterBuilderContext";
import { ICONS } from "./iconMap";
import PillOption from "./PillOption";
import ToggleSwitch from "./ToggleSwitch";

interface TransportSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function TransportSection({ isOpen, onToggle }: TransportSectionProps) {
  const {
    selectedTransport,
    setSelectedTransport,
    selectedTransportVendor,
    setSelectedTransportVendor,
  } = useChapterBuilder();

  const activeTransport = TRANSPORT_OPTIONS.find((t) => t.id === selectedTransport);
  const activeVendor = activeTransport?.vendors.find((v) => v.id === selectedTransportVendor);

  return (
    <AccordionSection
      title="Transport"
      summary={activeTransport ? `${activeTransport.label} · ${activeVendor?.name}` : undefined}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-wrap gap-2">
        {TRANSPORT_OPTIONS.map((transport) => {
          const Icon = ICONS[transport.icon];
          const selected = selectedTransport === transport.id;
          return (
            <PillOption
              key={transport.id}
              selected={selected}
              onSelect={() => setSelectedTransport(transport.id)}
            >
              <Icon size={14} />
              {transport.label}
              <span className="text-xs text-muted-foreground">
                {formatSignedINR(transport.priceDelta)}
              </span>
            </PillOption>
          );
        })}
      </div>

      {activeTransport && (
        <div className="mt-4 space-y-2">
          {activeTransport.vendors.map((vendor) => {
            const selected = selectedTransportVendor === vendor.id;
            return (
              <button
                key={vendor.id}
                type="button"
                onClick={() => setSelectedTransportVendor(vendor.id)}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl border p-3.5 text-left transition-all duration-300",
                  selected
                    ? "border-white/25 bg-white/10"
                    : "border-transparent bg-white/[0.03] hover:bg-white/5",
                )}
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{vendor.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star
                      size={10}
                      className="fill-current text-platinum"
                    />
                    {vendor.rating}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground">
                    {formatSignedINR(vendor.priceDelta)}
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
