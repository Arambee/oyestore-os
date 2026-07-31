import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SelectableCardProps {
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
  className?: string;
}

export default function SelectableCard({
  selected,
  onSelect,
  children,
  className,
}: SelectableCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative w-full rounded-2xl border p-5 text-left transition-all duration-300 ease-out",
        selected
          ? "border-white/25 bg-white/10 shadow-lg"
          : "glass border-transparent hover:border-white/10 hover:bg-white/5",
        className,
      )}
    >
      {children}
    </button>
  );
}
