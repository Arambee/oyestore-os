import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import ExploreStatePills from "@/components/explore/ExploreStatePills";
import PostCard from "@/components/explore/PostCard";
import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

interface ExplorePlacePageProps {
  params: Promise<{ stateId: string; placeId: string }>;
}

export default async function ExplorePlacePage({ params }: ExplorePlacePageProps) {
  const { stateId, placeId } = await params;

  const chapter = currentSeason.chapters.find((c) => c.id === stateId);
  if (!chapter) notFound();

  const place = chapter.places.find((p) => p.id === placeId);
  if (!place) notFound();

  const posts = communityPosts.filter(
    (post) => post.stateId === stateId && post.placeId === placeId,
  );

  return (
    <AppShell>
      <Link
        href={`/explore/${stateId}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to {chapter.name} cities
      </Link>

      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">
          {chapter.name.toUpperCase()} MOODBOARD
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          {place.name}
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          What travellers and locals are posting right now - real photos and
          videos to help you picture {place.name} before you decide.
        </p>
      </div>

      <ExploreStatePills activeStateId={stateId} />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => {
          const author = communityAuthors.find((a) => a.id === post.authorId);
          if (!author) return null;

          return (
            <PostCard
              key={post.id}
              post={post}
              author={author}
              href={`/explore/${stateId}/${placeId}/${post.id}`}
            />
          );
        })}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-muted-foreground">
          No community posts from {place.name} yet this season.
        </p>
      )}
    </AppShell>
  );
}
