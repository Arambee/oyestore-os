import LeftPanel from "./LeftPanel";
import MainContent from "./MainContent";
import RightPanel from "./RightPanel";

export default function Layout() {
  return (
    <section className="mx-auto flex max-w-[1800px] gap-2 px-2 pb-4 pt-28">
      <LeftPanel />
      <MainContent />
      <RightPanel />
    </section>
  );
}