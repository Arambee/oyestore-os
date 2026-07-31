"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Bookmark } from "lucide-react";

import type { Creator } from "@/lib/types/dashboard";
import { cn } from "@/lib/utils";

export default function CreatorCard({ id, name, verified, image }: Creator) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group relative h-32 w-[46vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:h-44 sm:w-72 sm:rounded-3xl">
      <Link
        href={`/creators/${id}`}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 640px) 288px, 46vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-pearl sm:bottom-5 sm:left-5">
          <span className="text-sm font-medium sm:text-base">{name}</span>
          {verified && (
            <BadgeCheck
              size={14}
              className="text-platinum sm:size-4"
            />
          )}
        </div>
      </Link>

      <button
        type="button"
        onClick={() => setSaved((prev) => !prev)}
        aria-label={saved ? "Remove from saved" : "Save creator"}
        className={cn(
          "absolute right-2 top-2 flex size-9 items-center justify-center rounded-full bg-card/60 backdrop-blur transition hover:text-accent-red sm:right-4 sm:top-4 sm:size-11",
          saved ? "text-accent-red" : "text-pearl",
        )}
      >
        <Bookmark
          size={14}
          className={cn("sm:size-4", saved ? "fill-current" : undefined)}
        />
      </button>
    </div>
  );
}
