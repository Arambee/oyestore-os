import Image from "next/image";
import Link from "next/link";
import { Globe, MapPin } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import FollowButton from "@/components/community/FollowButton";
import SuggestedForYou from "@/components/community/SuggestedForYou";
import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";
import type { CommunityAuthor } from "@/lib/types/explore";

function AuthorGrid({ authors }: { authors: CommunityAuthor[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {authors.map((author) => {
        const postCount = communityPosts.filter((post) => post.authorId === author.id).length;

        return (
          <Link
            key={author.id}
            href={`/explore/travellers/${author.id}`}
            className="glass-dark premium-shadow group flex gap-4 rounded-3xl p-6"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-foreground">{author.name}</h3>
                  <p className="flex items-center gap-1 text-xs text-platinum">
                    <MapPin size={11} />
                    {author.location}
                  </p>
                </div>
                <FollowButton authorId={author.id} />
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{author.bio}</p>
              <p className="mt-3 text-xs font-medium tracking-wider text-muted-foreground">
                {author.followers} FOLLOWERS · {postCount} {postCount === 1 ? "POST" : "POSTS"}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function CommunitiesPage() {
  const locals = communityAuthors.filter((a) => a.type === "Local");
  const travellers = communityAuthors.filter((a) => a.type === "Traveller");

  return (
    <AppShell>
      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <Globe size={12} />
          COMMUNITY
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          The People Writing This
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Every post on Oyestore comes from someone real - the locals who
          live in these places, and the travellers who just came back from them.
          Follow whoever you want to keep hearing from.
        </p>
      </div>

      <SuggestedForYou />

      <div>
        <h2 className="text-2xl font-black text-foreground">Locals</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          People who actually live where you&apos;re thinking of going.
        </p>
        <div className="mt-5">
          <AuthorGrid authors={locals} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-black text-foreground">Travellers</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          People who&apos;ve just been, writing it down while it&apos;s still fresh.
        </p>
        <div className="mt-5">
          <AuthorGrid authors={travellers} />
        </div>
      </div>
    </AppShell>
  );
}
