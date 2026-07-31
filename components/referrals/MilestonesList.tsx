import { Check } from "lucide-react";

import { referralStats } from "@/lib/data/referrals";
import { cn } from "@/lib/utils";

export default function MilestonesList() {
  const { totalReferrals, milestones } = referralStats;

  return (
    <div className="space-y-3">
      {milestones.map((milestone) => {
        const unlocked = totalReferrals >= milestone.count;

        return (
          <div
            key={milestone.count}
            className={cn(
              "flex items-center justify-between rounded-2xl border p-5 transition",
              unlocked
                ? "border-white/25 bg-white/10"
                : "glass border-transparent",
            )}
          >
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  unlocked
                    ? "bg-white/15 text-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {unlocked ? <Check size={18} /> : milestone.count}
              </div>
              <div>
                <p className="font-bold text-foreground">
                  {milestone.count} referrals
                </p>
                <p className="text-sm text-muted-foreground">
                  Unlock ₹{milestone.creditAmount.toLocaleString("en-IN")} in
                  credits
                </p>
              </div>
            </div>

            {unlocked && (
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-foreground">
                Unlocked!
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
