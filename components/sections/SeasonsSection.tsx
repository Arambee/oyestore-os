import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import SeasonCard from "@/components/cards/SeasonCard";

export default function SeasonsSection() {
  return (
    <HorizontalCarousel title="Seasons">
      <SeasonCard
        chapter="Keralam"
        subtitle="Season One"
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      />

      <SeasonCard
        chapter="Tamil Nadu"
        subtitle="Season Two"
        image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
      />
    </HorizontalCarousel>
  );
}