"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import CreatorCard from "@/components/cards/CreatorCard";
import { creators } from "@/lib/data/creators";

export default function CreatorCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    rowRef.current?.scrollBy({
      left: direction === "left" ? -288 : 288,
      behavior: "smooth",
    });
  };

  return (
    <HorizontalCarousel
      title="Above & Beyond"
      subtitle="Creator-led chapters that go beyond the ordinary."
      containerRef={rowRef}
      action={
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          {...creator}
        />
      ))}
    </HorizontalCarousel>
  );
}
