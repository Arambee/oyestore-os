import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AccordionSectionProps {
  title: string;
  summary?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export default function AccordionSection({
  title,
  summary,
  isOpen,
  onToggle,
  children,
}: AccordionSectionProps) {
  return (
    <div className="glass-dark overflow-hidden rounded-3xl">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-white/[0.03]"
      >
        <div>
          <h3 className="font-bold text-foreground">{title}</h3>
          {summary && <p className="mt-0.5 text-sm text-muted-foreground">{summary}</p>}
        </div>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-1 border-t border-white/10 p-5 duration-300">
          {children}
        </div>
      )}
    </div>
  );
}
