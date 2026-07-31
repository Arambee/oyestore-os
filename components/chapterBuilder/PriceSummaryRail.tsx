"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { formatINR, formatSignedINR } from "@/lib/utils/price";
import { cn } from "@/lib/utils";

import { useChapterBuilder } from "./ChapterBuilderContext";

function useFlashOnChange(value: number) {
  const [flash, setFlash] = useState(false);
  const prev = useRef(value);

  useEffect(() => {
    if (prev.current === value) return;
    prev.current = value;
    setFlash(true);
    const timeout = setTimeout(() => setFlash(false), 350);
    return () => clearTimeout(timeout);
  }, [value]);

  return flash;
}

function Line({ label, value }: { label: string; value: number }) {
  const flash = useFlashOnChange(value);
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span
        className={cn(
          "font-medium text-foreground transition-transform duration-300 ease-out",
          flash && "scale-110 text-pearl",
        )}
      >
        {formatSignedINR(value)}
      </span>
    </div>
  );
}

export default function PriceSummaryRail() {
  const { placeName, priceBreakdown } = useChapterBuilder();
  const totalFlash = useFlashOnChange(priceBreakdown.total);

  return (
    <aside className="glass-dark scrollbar-none sticky top-16 hidden max-h-[var(--rail-max-h,calc(100vh-5rem))] w-[280px] shrink-0 flex-col gap-4 self-start overflow-y-auto rounded-3xl p-5 xl:flex">
      <div>
        <p className="text-xs font-medium tracking-wider text-muted-foreground">
          LIVE PRICE SUMMARY
        </p>
        <p className="mt-1 text-sm text-muted-foreground">Your {placeName} chapter</p>
      </div>

      <div className="glass space-y-2.5 rounded-2xl p-4">
        <Line
          label="Base Chapter"
          value={priceBreakdown.base}
        />
        <Line
          label="Stay"
          value={priceBreakdown.stay}
        />
        <Line
          label="Activities"
          value={priceBreakdown.activities}
        />
        <Line
          label="Transport"
          value={priceBreakdown.transport}
        />
        <Line
          label="Add-ons"
          value={priceBreakdown.addOns}
        />

        <div className="my-1 border-t border-white/10" />

        <div className="flex items-center justify-between">
          <span className="font-bold text-foreground">Current Price</span>
          <span
            className={cn(
              "text-xl font-black text-foreground transition-transform duration-300 ease-out",
              totalFlash && "scale-110 text-pearl",
            )}
          >
            {formatINR(priceBreakdown.total)}
          </span>
        </div>
      </div>

      <Link
        href="#"
        className="flex items-center justify-center gap-2 rounded-full bg-pearl px-5 py-3.5 font-medium text-midnight transition hover:scale-[1.02] hover:bg-pearl/90"
      >
        Reserve This Chapter
        <ArrowRight size={16} />
      </Link>
    </aside>
  );
}
