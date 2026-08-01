"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { continueStory } from "@/lib/data/dashboard";

export default function MobileContinueBar() {
  return (
    <Link
      href={continueStory.resumeHref}
      className="glass-dark premium-shadow relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 px-4 py-2.5"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-muted">
        <div
          className="h-full bg-gradient-to-r from-accent-red to-accent-red/60"
          style={{ width: `${continueStory.progressPct}%` }}
        />
      </div>

      <div className="relative size-10 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={continueStory.image}
          alt={continueStory.title}
          fill
          sizes="40px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-foreground">{continueStory.title}</p>
        <p className="truncate text-xs text-muted-foreground">
          {continueStory.chapterLabel} · {continueStory.progressPct}% Complete
        </p>
      </div>

      <span className="flex shrink-0 items-center gap-0.5 text-xs font-medium text-foreground">
        Resume
        <ChevronRight size={16} />
      </span>
    </Link>
  );
}
