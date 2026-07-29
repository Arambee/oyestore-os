import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import SeasonCard from "@/components/cards/SeasonCard";
import { seasons } from "@/lib/data/seasons";

export default function SeasonsSection() {
  return (
    <HorizontalCarousel title="Seasons">
      {seasons.map((season) => (
        <SeasonCard key={season.chapter} {...season} />
      ))}
    </HorizontalCarousel>
  );
}