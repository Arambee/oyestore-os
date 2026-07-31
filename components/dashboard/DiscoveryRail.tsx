import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import DiscoveryCard from "./DiscoveryCard";

interface DiscoveryRailItem {
  id: string;
  href: string;
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

interface DiscoveryRailProps {
  title: string;
  subtitle?: string;
  items: DiscoveryRailItem[];
}

export default function DiscoveryRail({ title, subtitle, items }: DiscoveryRailProps) {
  return (
    <HorizontalCarousel
      title={title}
      subtitle={subtitle}
    >
      {items.map((item) => (
        <DiscoveryCard
          key={item.id}
          href={item.href}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          badge={item.badge}
        />
      ))}
    </HorizontalCarousel>
  );
}
