import { Car, IndianRupee, Plane } from "lucide-react";

import type { BudgetTier } from "@/lib/types/dashboard";

interface PracticalGuideProps {
  gettingThere: string;
  gettingAround: string;
  budgetPerDay: BudgetTier[];
}

export default function PracticalGuide({
  gettingThere,
  gettingAround,
  budgetPerDay,
}: PracticalGuideProps) {
  return (
    <section>
      <p className="text-xs font-medium tracking-wider text-platinum">
        THE PRACTICAL STUFF
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-muted-foreground">
            <Plane size={12} />
            GETTING THERE
          </p>
          <p className="mt-2 text-sm text-foreground">{gettingThere}</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-muted-foreground">
            <Car size={12} />
            GETTING AROUND
          </p>
          <p className="mt-2 text-sm text-foreground">{gettingAround}</p>
        </div>
      </div>

      <div className="glass-dark mt-4 rounded-3xl p-6">
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <IndianRupee size={12} />
          WHAT IT COSTS, PER DAY
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {budgetPerDay.map((tier) => (
            <div
              key={tier.tier}
              className="rounded-2xl bg-white/5 p-4"
            >
              <p className="text-xs font-medium tracking-wider text-muted-foreground">
                {tier.tier.toUpperCase()}
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">{tier.range}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{tier.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
