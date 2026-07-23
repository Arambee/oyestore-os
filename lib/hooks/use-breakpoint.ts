"use client";

import { useEffect, useState } from "react";

import { breakpoints } from "@/lib/constants/theme";
import type { Breakpoint } from "@/lib/types";

const orderedBreakpoints: Breakpoint[] = ["2xl", "xl", "lg", "md", "sm"];

function getActiveBreakpoint(width: number): Breakpoint | null {
  for (const bp of orderedBreakpoints) {
    if (width >= breakpoints[bp]) {
      return bp;
    }
  }
  return null;
}

function createMediaQuery(minWidth: number): string {
  return `(min-width: ${minWidth}px)`;
}

/**
 * Returns the current active breakpoint based on viewport width.
 * Returns `null` when below the smallest breakpoint (sm).
 */
export function useBreakpoint(): Breakpoint | null {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const update = () => {
      setBreakpoint(getActiveBreakpoint(window.innerWidth));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}

/**
 * Returns true when the viewport is at or above the given breakpoint.
 */
export function useMediaQuery(breakpoint: Breakpoint): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(createMediaQuery(breakpoints[breakpoint]));
    const update = () => setMatches(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [breakpoint]);

  return matches;
}

/**
 * Returns true when the user prefers reduced motion.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
