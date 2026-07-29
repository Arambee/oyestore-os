import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import ExperienceCard from "@/components/cards/ExperienceCard";

import { featuredExperiences } from "@/lib/data/experiences";

export default function FeaturedSection() {
  return (
    <HorizontalCarousel
      title="Featured This Week"
      action={
        <button className="text-white/60 transition hover:text-white">
          View All →
        </button>
      }
    >
      {featuredExperiences.map((trip) => (
        <ExperienceCard key={trip.title} {...trip} />
      ))}
    </HorizontalCarousel>
  );
}