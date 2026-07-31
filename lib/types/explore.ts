export type PostAuthorType = "Traveller" | "Local";

export interface CommunityAuthor {
  id: string;
  name: string;
  type: PostAuthorType;
  avatar: string;
  location: string;
  bio: string;
  followers: number;
}

export interface CommunityPost {
  id: string;
  stateId: string;
  placeId: string;
  placeName: string;
  stateName: string;
  authorId: string;
  image: string;
  isVideo: boolean;
  videoDuration?: string;
  caption: string;
  likes: number;
  postedAgo: string;
  seasonId: string;
}
