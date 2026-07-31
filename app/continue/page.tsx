import Image from "next/image";
import Link from "next/link";
import { ArrowRight, History } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import { continueStory } from "@/lib/data/dashboard";

export default function ContinuePage() {
  return (
    <AppShell>
      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <History size={12} />
          CONTINUE
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          Pick Up Where You Left Off
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          A chapter you started building but haven&apos;t finished yet.
        </p>
      </div>

      <div className="premium-border premium-shadow relative overflow-hidden rounded-3xl">
        <div className="relative h-72 w-full">
          <Image
            src={continueStory.image}
            alt={continueStory.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

          <div className="relative flex h-full flex-col justify-end p-8">
            <p className="text-xs font-medium tracking-wider text-platinum">
              {continueStory.chapterLabel}
            </p>
            <h2 className="text-gradient mt-2 text-4xl font-black leading-none tracking-tight">
              {continueStory.title}
            </h2>

            <div className="mt-5 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-pearl"
                style={{ width: `${continueStory.progressPct}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-white/70">
              {continueStory.progressPct}% built
            </p>

            <Link
              href={continueStory.resumeHref}
              className="group mt-5 flex w-fit items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-bold text-background transition hover:bg-white"
            >
              Resume Building
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
