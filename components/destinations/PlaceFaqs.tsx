"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

import { cn } from "@/lib/utils";
import type { PlaceFaq } from "@/lib/types/dashboard";

interface PlaceFaqsProps {
  faqs: PlaceFaq[];
}

export default function PlaceFaqs({ faqs }: PlaceFaqsProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0]?.question ?? null);

  if (faqs.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <CircleHelp size={12} />
        QUESTIONS PEOPLE ACTUALLY ASK
      </p>

      <div className="glass-dark mt-4 divide-y divide-white/10 overflow-hidden rounded-3xl">
        {faqs.map((faq) => {
          const isOpen = openQuestion === faq.question;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-white/[0.03]"
              >
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={16}
                  className={cn(
                    "shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
