import type { Chapter } from "@/lib/types/dashboard";

export const chapters: Chapter[] = [
  {
    id: "varkala",
    slug: "varkala",
    state: "Kerala",
    title: "Varkala",
    subtitle:
      "Cliffs, cafés and conversations that stay long after the sunsets.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    host: {
      name: "Mehar Sachdeva",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    ctaLabel: "See the Story",
    ctaHref: "/chapters/kerala/varkala",
    stats: {
      travellers: 20,
      rating: 4.9,
      durationNights: 3,
      startingPrice: "₹10,999",
      upcomingDate: "Aug 15 – 17",
    },
    weather: { condition: "Light Rain", tempC: 28 },
    season: "Monsoon",
    bestFor: "Perfect for sunsets & cliff cafés",
  },
];
