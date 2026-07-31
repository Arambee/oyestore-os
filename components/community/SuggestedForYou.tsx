"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { useFollowing } from "@/lib/hooks/use-following";
import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";
import { myProfile } from "@/lib/data/profile";
import { currentSeason } from "@/lib/data/seasonsByOyestore";
import { savedPlaces } from "@/lib/data/saved";

import FollowButton from "./FollowButton";

interface Suggestion {
  authorId: string;
  reason: string;
  matchCount: number;
}

function buildSuggestions(followedIds: string[]): Suggestion[] {
  const interestStateIds = new Map<string, string>(); // stateId -> stateName

  savedPlaces.forEach((saved) => {
    const chapter = currentSeason.chapters.find((c) => c.id === saved.stateId);
    if (chapter) interestStateIds.set(chapter.id, chapter.name);
  });

  myProfile.trips.forEach((trip) => {
    const chapter = currentSeason.chapters.find((c) => c.name === trip.stateName);
    if (chapter) interestStateIds.set(chapter.id, chapter.name);
  });

  const candidates = communityAuthors
    .filter((author) => !followedIds.includes(author.id))
    .map((author) => {
      const authorStateIds = new Set(
        communityPosts.filter((p) => p.authorId === author.id).map((p) => p.stateId),
      );
      const matchedNames = Array.from(authorStateIds)
        .filter((id) => interestStateIds.has(id))
        .map((id) => interestStateIds.get(id) as string);

      return {
        authorId: author.id,
        matchCount: matchedNames.length,
        reason:
          matchedNames.length > 0
            ? `Because you've explored ${matchedNames[0]}`
            : `Popular in the community - ${author.followers} followers`,
      };
    });

  const matched = candidates.filter((c) => c.matchCount > 0).sort((a, b) => b.matchCount - a.matchCount);

  if (matched.length >= 4) return matched.slice(0, 4);

  const fallback = candidates
    .filter((c) => c.matchCount === 0)
    .sort((a, b) => {
      const authorA = communityAuthors.find((au) => au.id === a.authorId);
      const authorB = communityAuthors.find((au) => au.id === b.authorId);
      return (authorB?.followers ?? 0) - (authorA?.followers ?? 0);
    });

  return [...matched, ...fallback].slice(0, 4);
}

export default function SuggestedForYou() {
  const { followedIds } = useFollowing();
  const suggestions = buildSuggestions(followedIds);

  if (suggestions.length === 0) return null;

  return (
    <div>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <Sparkles size={12} />
        SUGGESTED FOR YOU
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Matched from what you&apos;ve saved and booked - not a stranger&apos;s algorithm, just your own trail.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {suggestions.map((suggestion) => {
          const author = communityAuthors.find((a) => a.id === suggestion.authorId);
          if (!author) return null;

          return (
            <div
              key={author.id}
              className="glass-dark premium-shadow flex flex-col items-center gap-2 rounded-2xl p-3 text-center sm:gap-3 sm:rounded-3xl sm:p-5"
            >
              <Link
                href={`/explore/travellers/${author.id}`}
                className="flex flex-col items-center gap-2 sm:gap-3"
              >
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full sm:size-16">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground sm:text-base">{author.name}</h3>
                  <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">{suggestion.reason}</p>
                </div>
              </Link>
              <FollowButton authorId={author.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
