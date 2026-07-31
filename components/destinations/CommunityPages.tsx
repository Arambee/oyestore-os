import Image from "next/image";
import Link from "next/link";
import { Heart, PenLine, Play } from "lucide-react";

import { communityAuthors } from "@/lib/data/communityAuthors";
import type { CommunityPost } from "@/lib/types/explore";

interface CommunityPagesProps {
  posts: CommunityPost[];
}

export default function CommunityPages({ posts }: CommunityPagesProps) {
  if (posts.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <PenLine size={12} />
        WRITTEN BY OUR COMMUNITY
      </p>

      <div className="mt-4 space-y-4">
        {posts.map((post) => {
          const author = communityAuthors.find((a) => a.id === post.authorId);
          if (!author) return null;

          return (
            <Link
              key={post.id}
              href={`/explore/${post.stateId}/${post.placeId}/${post.id}`}
              className="glass-dark group flex flex-col gap-4 rounded-2xl p-5 transition-colors hover:bg-white/[0.05] sm:flex-row"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-40">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(min-width: 640px) 160px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {post.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play
                      size={20}
                      className="fill-current text-pearl"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-center gap-2.5">
                  <div className="relative size-8 shrink-0 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {author.type} · {author.location}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-foreground">{post.caption}</p>

                <div className="mt-auto flex items-center gap-4 pt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart size={12} />
                    {post.likes}
                  </span>
                  <span>{post.postedAgo}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
