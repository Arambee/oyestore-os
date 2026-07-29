import CategoryChips from "./CategoryChips";
import ChapterHero from "./ChapterHero";
import CreatorCarousel from "./CreatorCarousel";
import GreetingBanner from "./GreetingBanner";
import RightRail from "./RightRail";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function DashboardShell() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />

      <div className="mx-auto flex max-w-[1800px]">
        <Sidebar />

        <main className="min-w-0 flex-1 space-y-8 py-8">
          <div className="space-y-8 px-6">
            <GreetingBanner />
            <ChapterHero />
            <CategoryChips />
          </div>

          <CreatorCarousel />
        </main>

        <RightRail />
      </div>
    </div>
  );
}
