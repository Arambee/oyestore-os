import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, Play } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";

interface PostPageProps {
  params: Promise<{ stateId: string; placeId: string; postId: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { stateId, placeId, postId } = await params;

  const post = communityPosts.find(
    (p) => p.id === postId && p.stateId === stateId && p.placeId === placeId,
  );
  if (!post) notFound();

  const author = communityAuthors.find((a) => a.id === post.authorId);
  if (!author) notFound();

  return (
    <AppShell>
      <Link
        href={`/explore/${stateId}/${placeId}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to {post.placeName} moodboard
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="glass-dark premium-shadow relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src={post.image}
            alt={post.caption}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          {post.isVideo && (
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-sm text-pearl backdrop-blur">
              <Play
                size={13}
                className="fill-current"
              />
              {post.videoDuration}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-dark premium-shadow rounded-3xl p-6">
            <p className="text-xs font-medium tracking-wider text-platinum">
              {post.placeName}, {post.stateName}
            </p>
            <p className="mt-3 text-lg text-foreground">{post.caption}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Heart
                  size={14}
                  className="fill-current text-platinum"
                />
                {post.likes} likes
              </span>
              <span>{post.postedAgo}</span>
            </div>
          </div>

          <Link
            href={`/explore/travellers/${author.id}`}
            className="glass-dark premium-shadow group rounded-3xl p-6 transition hover:bg-white/5"
          >
            <p className="text-xs font-medium tracking-wider text-muted-foreground">
              POSTED BY
            </p>
            <div className="mt-3 flex items-center gap-4">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-foreground group-hover:text-platinum">
                  {author.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {author.type} · {author.location}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{author.bio}</p>
            <p className="mt-3 text-xs text-platinum">
              View profile & {author.followers} followers →
            </p>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
