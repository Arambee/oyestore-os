import HorizontalCarousel from "@/components/carousel/HorizontalCarousel";
import ExperienceCard from "@/components/cards/ExperienceCard";

const featuredTrips = [
  {
    title: "Varkala",
    duration: "72 Hours",
    price: "₹12,999",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    seatsLeft: 16,
    location: "Kerala",
    featured: true,
  },
  {
    title: "Munnar",
    duration: "3 Days",
    price: "₹14,999",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    seatsLeft: 12,
    location: "Kerala",
  },
  {
    title: "Pondicherry",
    duration: "Weekend",
    price: "₹11,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    seatsLeft: 9,
    location: "Tamil Nadu",
  },
];

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
      {featuredTrips.map((trip) => (
        <ExperienceCard key={trip.title} {...trip} />
      ))}
    </HorizontalCarousel>
  );
}