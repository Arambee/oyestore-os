import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PillOptionProps {
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
  className?: string;
}

export default function PillOption({
  selected,
  onSelect,
  children,
  className,
}: PillOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300",
        selected
          ? "bg-white/12 text-foreground ring-1 ring-white/25"
          : "glass text-muted-foreground hover:bg-white/5 hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}
