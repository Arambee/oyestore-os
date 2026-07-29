"use client";

import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, Bookmark } from "lucide-react";

import type { Creator } from "@/lib/types/dashboard";
import { cn } from "@/lib/utils";

export default function CreatorCard({ name, verified, image }: Creator) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group relative h-72 w-64 shrink-0 overflow-hidden rounded-3xl">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <button
        type="button"
        onClick={() => setSaved((prev) => !prev)}
        aria-label={saved ? "Remove from saved" : "Save creator"}
        className={cn(
          "absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-card/60 backdrop-blur transition hover:text-champagne",
          saved ? "text-champagne" : "text-pearl",
        )}
      >
        <Bookmark
          size={16}
          className={saved ? "fill-current" : undefined}
        />
      </button>

      <div className="absolute bottom-5 left-5 flex items-center gap-1.5 text-pearl">
        <span className="font-medium">{name}</span>
        {verified && (
          <BadgeCheck
            size={16}
            className="text-champagne"
          />
        )}
      </div>
    </div>
  );
}
