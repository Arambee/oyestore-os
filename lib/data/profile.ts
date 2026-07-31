import type { UserProfile } from "@/lib/types/profile";

export const myProfile: UserProfile = {
  name: "ACT",
  memberSince: "January 2026",
  coverImage:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
  stats: {
    tripsAttended: 5,
    photosShared: 7,
    savedExperiences: 12,
    followers: 184,
    following: 96,
  },
  trips: [
    {
      id: "trip-varkala",
      title: "Varkala",
      stateName: "Kerala",
      date: "Feb 2026",
      companion: "with Maya Shah",
      image:
        "https://images.unsplash.com/photo-1697193374263-8aeb5488dabe?auto=format&fit=crop&w=900&q=80",
      href: "/chapters/kerala/varkala",
    },
    {
      id: "trip-munnar",
      title: "Munnar",
      stateName: "Kerala",
      date: "Mar 2026",
      companion: "with Ravi Kumar",
      image:
        "https://images.unsplash.com/photo-1742106855258-2d7dd403f84a?auto=format&fit=crop&w=900&q=80",
      href: "/chapters/kerala/munnar",
    },
    {
      id: "trip-wayanad",
      title: "Wayanad",
      stateName: "Kerala",
      date: "Apr 2026",
      companion: "with Arjun Menon",
      image:
        "https://images.unsplash.com/photo-1655128633542-b6b7e86e93b4?auto=format&fit=crop&w=900&q=80",
      href: "/chapters/kerala/wayanad",
    },
  ],
  photos: [
    {
      id: "photo-varkala",
      location: "Varkala Cliffs",
      image:
        "https://images.unsplash.com/photo-1621788546583-7ecc391343f6?auto=format&fit=crop&w=700&q=80",
      likes: 42,
    },
    {
      id: "photo-munnar",
      location: "Munnar Tea Gardens",
      image:
        "https://images.unsplash.com/photo-1736950825214-1b5e2bdbb5f8?auto=format&fit=crop&w=700&q=80",
      likes: 67,
    },
    {
      id: "photo-wayanad",
      location: "Wayanad Falls",
      image:
        "https://images.unsplash.com/photo-1633037499870-d105eb8b1daf?auto=format&fit=crop&w=700&q=80",
      likes: 38,
    },
    {
      id: "photo-pondicherry",
      location: "Pondicherry",
      image:
        "https://images.unsplash.com/photo-1677951221673-09be408d2ddf?auto=format&fit=crop&w=700&q=80",
      likes: 51,
    },
    {
      id: "photo-goa",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1515307638821-8c2ece10bf6a?auto=format&fit=crop&w=700&q=80",
      likes: 29,
    },
    {
      id: "photo-gokarna",
      location: "Gokarna",
      image:
        "https://images.unsplash.com/photo-1592463926267-59e4f1fee124?auto=format&fit=crop&w=700&q=80",
      likes: 33,
    },
    {
      id: "photo-varkala-boat",
      location: "Varkala Backwaters",
      image:
        "https://images.unsplash.com/photo-1663480450637-a635e10ac562?auto=format&fit=crop&w=700&q=80",
      likes: 58,
    },
  ],
};
