import { UtensilsCrossed } from "lucide-react";

interface FoodGuideProps {
  placeName: string;
  mustEat: string[];
}

export default function FoodGuide({ placeName, mustEat }: FoodGuideProps) {
  if (mustEat.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <UtensilsCrossed size={12} />
        WHAT TO EAT
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {`What actually gets ordered twice in ${placeName}.`}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {mustEat.map((dish) => (
          <span
            key={dish}
            className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-foreground"
          >
            {dish}
          </span>
        ))}
      </div>
    </section>
  );
}
