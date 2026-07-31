import { Gift, Target, Trophy, Users } from "lucide-react";

import { referralStats } from "@/lib/data/referrals";

export default function ReferralStatsGrid() {
  const { totalReferrals, creditsEarned, milestones } = referralStats;
  const nextMilestone =
    milestones.find((m) => m.count > totalReferrals) ??
    milestones[milestones.length - 1];
  const moreToUnlock = Math.max(nextMilestone.count - totalReferrals, 0);

  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      <StatCard
        icon={Users}
        value={String(totalReferrals)}
        label="Total referrals"
        gradient="from-white/20 to-white/5"
      />
      <StatCard
        icon={Gift}
        value={`₹${creditsEarned.toLocaleString("en-IN")}`}
        label="Credits earned"
        gradient="from-platinum/30 to-platinum/5"
      />
      <StatCard
        icon={Trophy}
        value={`₹${nextMilestone.creditAmount.toLocaleString("en-IN")}`}
        label="Next milestone"
        gradient="from-pearl/20 to-pearl/5"
      />
      <StatCard
        icon={Target}
        value={String(moreToUnlock)}
        label="More to unlock"
        gradient="from-slate/40 to-slate/10"
      />
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  gradient,
}: {
  icon: typeof Users;
  value: string;
  label: string;
  gradient: string;
}) {
  return (
    <div
      className={`glass premium-shadow rounded-2xl bg-gradient-to-br p-5 ${gradient}`}
    >
      <Icon
        size={22}
        className="text-foreground"
      />
      <p className="mt-4 text-3xl font-black text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
