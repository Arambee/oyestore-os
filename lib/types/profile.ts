export interface ProfileStats {
  tripsAttended: number;
  photosShared: number;
  savedExperiences: number;
  followers: number;
  following: number;
}

export interface TripRecord {
  id: string;
  title: string;
  stateName: string;
  date: string;
  companion: string;
  image: string;
  href: string;
}

export interface PhotoPost {
  id: string;
  location: string;
  image: string;
  likes: number;
}

export interface UserProfile {
  name: string;
  memberSince: string;
  coverImage: string;
  stats: ProfileStats;
  trips: TripRecord[];
  photos: PhotoPost[];
}
