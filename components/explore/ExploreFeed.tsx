import { communityAuthors } from "@/lib/data/communityAuthors";
import { communityPosts } from "@/lib/data/communityFeed";
import { currentSeason } from "@/lib/data/seasonsByOyestore";

import PostCard from "./PostCard";

const seasonPosts = communityPosts.filter((post) => post.seasonId === currentSeason.id);

export default function ExploreFeed() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {seasonPosts.map((post) => {
        const author = communityAuthors.find((a) => a.id === post.authorId);
        if (!author) return null;

        return (
          <PostCard
            key={post.id}
            post={post}
            author={author}
            href={`/explore/${post.stateId}/${post.placeId}/${post.id}`}
          />
        );
      })}
    </div>
  );
}
