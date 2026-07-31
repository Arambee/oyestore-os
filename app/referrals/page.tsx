import AppShell from "@/components/dashboard/AppShell";
import MilestonesList from "@/components/referrals/MilestonesList";
import ReferralCodeBox from "@/components/referrals/ReferralCodeBox";
import ReferralStatsGrid from "@/components/referrals/ReferralStatsGrid";
import ReferredUsersList from "@/components/referrals/ReferredUsersList";

export default function ReferralsPage() {
  return (
    <AppShell>
      <div>
        <h1 className="text-4xl font-black text-foreground sm:text-5xl">
          Invite your people
        </h1>
        <p className="mt-2 text-muted-foreground">
          Share adventures, earn rewards together
        </p>
      </div>

      <ReferralStatsGrid />
      <ReferralCodeBox />
      <MilestonesList />
      <ReferredUsersList />
    </AppShell>
  );
}
