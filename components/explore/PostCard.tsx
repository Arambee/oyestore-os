import Image from "next/image";
import Link from "next/link";
import { Heart, Play } from "lucide-react";

import type { CommunityAuthor, CommunityPost } from "@/lib/types/explore";

interface PostCardProps {
  post: CommunityPost;
  href: string;
  author?: CommunityAuthor;
}

export default function PostCard({ post, href, author }: PostCardProps) {
  return (
    <Link
      href={href}
      className="glass-dark premium-shadow group relative aspect-[4/5] overflow-hidden rounded-2xl"
    >
      <Image
        src={post.image}
        alt={post.caption}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/50 to-transparent" />

      {author && (
        <div className="absolute left-2 top-2 flex items-center gap-1.5 sm:left-3 sm:top-3 sm:gap-2">
          <div className="relative size-6 shrink-0 overflow-hidden rounded-full border border-white/30 sm:size-7">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              sizes="28px"
              className="object-cover"
            />
          </div>
          <span className="text-[11px] font-medium text-pearl sm:text-xs">{author.name}</span>
        </div>
      )}

      {post.isVideo && (
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-pearl backdrop-blur sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs">
          <Play
            size={10}
            className="fill-current"
          />
          {post.videoDuration}
        </div>
      )}

      <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
        <p className="text-[11px] font-medium tracking-wide text-platinum sm:text-xs">
          {post.placeName}, {post.stateName}
        </p>
        <p className="mt-1 line-clamp-2 text-xs text-pearl sm:text-sm">{post.caption}</p>
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-white/70 sm:mt-2 sm:text-xs">
          <span>{author ? author.type : post.postedAgo}</span>
          <span className="flex items-center gap-1">
            <Heart
              size={11}
              className="fill-current"
            />
            {post.likes}
          </span>
        </div>
      </div>
    </Link>
  );
}
