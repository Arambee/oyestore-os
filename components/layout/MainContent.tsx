import Hero from "@/components/home/hero/Hero";
import FeaturedSection from "@/components/sections/FeaturedSection";
import TrendingSection from "@/components/sections/TrendingSection";
import SeasonsSection from "@/components/sections/SeasonsSection";

export default function MainContent() {
  return (
    <main className="flex-1 overflow-hidden rounded-3xl bg-neutral-900">
      <Hero />
      <FeaturedSection />
      <TrendingSection />
      <SeasonsSection />
    </main>
  );
}