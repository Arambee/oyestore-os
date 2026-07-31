"use client";

import { useEffect, useState } from "react";
import { Cloud, Moon } from "lucide-react";

import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { getSunPosition, isRainCondition } from "@/lib/utils/weather";

const RAINDROPS = [
  { left: "6%", delay: "0s", duration: "0.9s" },
  { left: "16%", delay: "0.35s", duration: "1.1s" },
  { left: "27%", delay: "0.1s", duration: "0.85s" },
  { left: "38%", delay: "0.5s", duration: "1s" },
  { left: "49%", delay: "0.2s", duration: "0.95s" },
  { left: "60%", delay: "0.4s", duration: "1.1s" },
  { left: "71%", delay: "0.05s", duration: "0.9s" },
  { left: "82%", delay: "0.3s", duration: "1s" },
  { left: "93%", delay: "0.45s", duration: "0.85s" },
];

interface WeatherSceneProps {
  condition: string;
  className?: string;
}

/**
 * Ambient weather background -- absolutely positioned to fill whatever card
 * it's dropped into, so it never adds its own layout height. Meant to sit
 * behind real content (parent needs `relative`; content needs `relative z-10`).
 */
export default function WeatherScene({ condition, className }: WeatherSceneProps) {
  const [now, setNow] = useState<Date | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const isRain = isRainCondition(condition);
  const sun = getSunPosition(now ?? new Date());

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        isRain
          ? "bg-gradient-to-b from-slate-500/15 to-slate-700/5"
          : sun.isDaytime
            ? "bg-gradient-to-b from-sky-400/10 to-transparent"
            : "bg-gradient-to-b from-indigo-950/30 to-transparent",
        className,
      )}
    >
      {isRain ? (
        <>
          <Cloud
            size={26}
            className={cn(
              "absolute left-3 top-2 text-platinum/20",
              !reducedMotion && "animate-cloud-drift",
            )}
          />
          <Cloud
            size={20}
            style={{ animationDelay: "1.5s" }}
            className={cn(
              "absolute right-6 top-3 text-platinum/15",
              !reducedMotion && "animate-cloud-drift",
            )}
          />
          {RAINDROPS.map((drop) => (
            <span
              key={drop.left}
              style={{
                left: drop.left,
                animationDelay: reducedMotion ? undefined : drop.delay,
                animationDuration: reducedMotion ? undefined : drop.duration,
              }}
              className={cn(
                "absolute top-1 h-2.5 w-px bg-platinum/25",
                reducedMotion ? "opacity-20" : "animate-rain-fall",
              )}
            />
          ))}
        </>
      ) : sun.isDaytime ? (
        <div
          className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/50 shadow-[0_0_14px_5px_rgba(252,211,77,0.2)] transition-[left,top] duration-1000 ease-linear"
          style={{ left: `${sun.leftPct}%`, top: `${sun.topPct}%` }}
        />
      ) : (
        <Moon
          size={18}
          className="absolute right-5 top-3 text-platinum/20"
        />
      )}
    </div>
  );
}
