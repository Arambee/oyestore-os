"use client";

import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";

import { formatINR, formatSignedINR } from "@/lib/utils/price";
import { cn } from "@/lib/utils";

import { useChapterBuilder } from "./ChapterBuilderContext";

export default function MobilePriceBar() {
  const { priceBreakdown } = useChapterBuilder();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sticky bottom-4 z-30 xl:hidden">
      <div className="glass-dark premium-shadow rounded-2xl p-4">
        {expanded && (
          <div className="mb-3 space-y-2 border-b border-white/10 pb-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Base Chapter</span>
              <span className="text-foreground">{formatSignedINR(priceBreakdown.base)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Stay</span>
              <span className="text-foreground">{formatSignedINR(priceBreakdown.stay)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Activities</span>
              <span className="text-foreground">{formatSignedINR(priceBreakdown.activities)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Transport</span>
              <span className="text-foreground">{formatSignedINR(priceBreakdown.transport)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Add-ons</span>
              <span className="text-foreground">{formatSignedINR(priceBreakdown.addOns)}</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-1.5 text-left"
          >
            <div>
              <p className="text-xs text-muted-foreground">Current Price</p>
              <p className="text-xl font-black text-foreground transition-transform duration-300 ease-out">
                {formatINR(priceBreakdown.total)}
              </p>
            </div>
            <ChevronUp
              size={16}
              className={cn(
                "text-muted-foreground transition-transform duration-300",
                expanded && "rotate-180",
              )}
            />
          </button>

          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-full bg-pearl px-5 py-3 font-medium text-midnight transition hover:bg-pearl/90"
          >
            Reserve
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
