import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import FollowButton from "@/components/community/FollowButton";
import PostCard from "@/components/explore/PostCard";
import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";

interface AuthorPageProps {
  params: Promise<{ authorId: string }>;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { authorId } = await params;

  const author = communityAuthors.find((a) => a.id === authorId);
  if (!author) notFound();

  const posts = communityPosts.filter((post) => post.authorId === authorId);

  return (
    <AppShell>
      <Link
        href="/explore"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to Explore
      </Link>

      <div className="glass-dark premium-shadow flex flex-col items-center gap-4 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
        <div className="relative size-24 shrink-0 overflow-hidden rounded-full">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground">{author.name}</h1>
          <p className="mt-1 text-sm text-platinum">
            {author.type} · {author.location}
          </p>
          <p className="mt-2 max-w-lg text-muted-foreground">{author.bio}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{author.followers}</span>{" "}
            followers · <span className="font-bold text-foreground">{posts.length}</span>{" "}
            {posts.length === 1 ? "post" : "posts"}
          </p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <FollowButton
              authorId={author.id}
              size="md"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            href={`/explore/${post.stateId}/${post.placeId}/${post.id}`}
          />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-muted-foreground">
          No posts from {author.name} yet.
        </p>
      )}
    </AppShell>
  );
}
