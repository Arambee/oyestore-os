import Link from "next/link";

import AppShell from "@/components/dashboard/AppShell";
import PostCard from "@/components/explore/PostCard";
import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";

export default function StoriesPage() {
  const sortedPosts = [...communityPosts].sort((a, b) => b.likes - a.likes);

  return (
    <AppShell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-wider text-platinum">STORIES</p>
          <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
            Every Story, One Feed
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Explore lets you pick a place first. This is the other way round -
            every story from every state, in one feed, most-loved first.
          </p>
        </div>
        <Link
          href="/profile"
          className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-white/10"
        >
          Share Your Story
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sortedPosts.map((post) => {
          const author = communityAuthors.find((a) => a.id === post.authorId);
          return (
            <PostCard
              key={post.id}
              post={post}
              href={`/explore/${post.stateId}/${post.placeId}/${post.id}`}
              author={author}
            />
          );
        })}
      </div>
    </AppShell>
  );
}
