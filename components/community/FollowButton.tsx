"use client";

import { UserCheck, UserPlus } from "lucide-react";

import { useFollowing } from "@/lib/hooks/use-following";
import { cn } from "@/lib/utils";

interface FollowButtonProps {
  authorId: string;
  size?: "sm" | "md";
}

export default function FollowButton({ authorId, size = "sm" }: FollowButtonProps) {
  const { isFollowing, toggleFollow } = useFollowing();
  const following = isFollowing(authorId);
  const iconSize = size === "sm" ? 12 : 14;

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFollow(authorId);
      }}
      aria-pressed={following}
      className={cn(
        "flex shrink-0 items-center gap-1.5 rounded-full font-medium transition",
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm",
        following
          ? "bg-white/10 text-foreground hover:bg-white/15"
          : "bg-pearl text-background hover:bg-white",
      )}
    >
      {following ? <UserCheck size={iconSize} /> : <UserPlus size={iconSize} />}
      {following ? "Following" : "Follow"}
    </button>
  );
}
