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
      className="glass-dark group relative aspect-[4/5] overflow-hidden rounded-2xl"
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
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <div className="relative size-7 shrink-0 overflow-hidden rounded-full border border-white/30">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              sizes="28px"
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium text-pearl">{author.name}</span>
        </div>
      )}

      {post.isVideo && (
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs text-pearl backdrop-blur">
          <Play
            size={11}
            className="fill-current"
          />
          {post.videoDuration}
        </div>
      )}

      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-xs font-medium tracking-wide text-platinum">
          {post.placeName}, {post.stateName}
        </p>
        <p className="mt-1 line-clamp-2 text-sm text-pearl">{post.caption}</p>
        <div className="mt-2 flex items-center justify-between text-xs text-white/70">
          <span>{author ? author.type : post.postedAgo}</span>
          <span className="flex items-center gap-1">
            <Heart
              size={12}
              className="fill-current"
            />
            {post.likes}
          </span>
        </div>
      </div>
    </Link>
  );
}
