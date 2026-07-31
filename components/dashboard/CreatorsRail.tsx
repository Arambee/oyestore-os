import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import CreatorCard from "@/components/cards/CreatorCard";
import { creators } from "@/lib/data/creators";

export default function CreatorsRail() {
  return (
    <HorizontalCarousel
      title="Creators"
      subtitle="The hosts behind every Chapter - follow them into the places they know best."
    >
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          {...creator}
        />
      ))}
    </HorizontalCarousel>
  );
}
