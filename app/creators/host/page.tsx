import { Sparkles } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import HostApplicationForm from "@/components/creators/HostApplicationForm";
import { MIN_FOLLOWERS } from "@/lib/constants/creators";

export default function HostApplicationPage() {
  return (
    <AppShell>
      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <Sparkles size={12} />
          HOST A TRIP
        </p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">
          Turn Your Following Into A Chapter
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          {`If you've got ${MIN_FOLLOWERS.toLocaleString()}+ followers on any platform and an audience that trusts your taste in places, you can apply to host a trip with us. Every application is reviewed by hand before it's approved - nothing is automatic.`}
        </p>
      </div>

      <HostApplicationForm />
    </AppShell>
  );
}
