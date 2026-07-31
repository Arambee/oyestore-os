import Image from "next/image";
import Link from "next/link";
import { CloudRain, Sparkles, Star } from "lucide-react";

import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";
import { currentSeason } from "@/lib/data/seasonsByOyestore";
import type { HiddenSpot } from "@/lib/types/dashboard";

interface WhyThisChapterSectionProps {
  placeId: string;
  placeName: string;
  stateId: string;
  stateName: string;
  hiddenSpots: HiddenSpot[];
  hostName: string;
  hostRating: number;
  hostReviewCount: number;
}

export default function WhyThisChapterSection({
  placeId,
  placeName,
  stateId,
  stateName,
  hiddenSpots,
  hostName,
  hostRating,
  hostReviewCount,
}: WhyThisChapterSectionProps) {
  const posts = communityPosts
    .filter((post) => post.stateId === stateId && post.placeId === placeId)
    .slice(0, 4);

  return (
    <section>
      <h2 className="text-2xl font-black text-foreground">
        Why people choose this Chapter
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            CREATOR REVIEWS
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <Star
              size={14}
              className="fill-current text-platinum"
            />
            <span className="font-bold text-foreground">{hostRating}</span>
            <span className="text-sm text-muted-foreground">
              ({hostReviewCount} reviews)
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Travellers consistently rate {hostName} among the best hosts on this route.
          </p>
        </div>

        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            WEATHER RIGHT NOW
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <CloudRain
              size={14}
              className="text-platinum"
            />
            <span className="font-bold text-foreground">{currentSeason.name}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {currentSeason.subtitle}
          </p>
        </div>

        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-medium tracking-wider text-muted-foreground">
            LOCAL FESTIVALS
          </p>
          <p className="mt-2 font-bold text-foreground">{stateName} calendar</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Check the Explore feed for what&apos;s being celebrated in {stateName}
            while you&apos;re there.
          </p>
        </div>
      </div>

      {posts.length > 0 && (
        <div className="mt-6">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <Sparkles size={12} />
            COMMUNITY REVIEWS
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((post) => {
              const author = communityAuthors.find((a) => a.id === post.authorId);
              if (!author) return null;
              return (
                <Link
                  key={post.id}
                  href={`/explore/${post.stateId}/${post.placeId}/${post.id}`}
                  className="glass-dark group relative aspect-[4/5] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <div className="relative size-6 shrink-0 overflow-hidden rounded-full border border-white/30">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        sizes="24px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-pearl">{author.name}</span>
                  </div>
                  <p className="absolute bottom-3 left-3 right-3 line-clamp-2 text-xs text-pearl">
                    {post.caption}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {hiddenSpots.length > 0 && (
        <div className="mt-6">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <Sparkles size={12} />
            WORDS OF {placeName.toUpperCase()}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {hiddenSpots.map((spot) => (
              <div
                key={spot.name}
                className="glass rounded-2xl p-5"
              >
                <h3 className="font-bold text-foreground">{spot.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
