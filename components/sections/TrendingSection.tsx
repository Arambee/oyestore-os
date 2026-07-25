import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import ExperienceCard from "@/components/cards/ExperienceCard";

import { trendingExperiences } from "@/lib/data/experiences";

export default function TrendingSection() {
  return (
    <HorizontalCarousel
      title="Trending Now"
      action={
        <button className="text-white/60 transition hover:text-white">
          View All →
        </button>
      }
    >
      {trendingExperiences.map((trip) => (
        <ExperienceCard
          key={trip.title}
          {...trip}
        />
      ))}
    </HorizontalCarousel>
  );
}