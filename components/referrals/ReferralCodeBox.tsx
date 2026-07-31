"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { referralCode } from "@/lib/data/referrals";

export default function ReferralCodeBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard permission denied or unavailable -- nothing to recover from.
    }
  };

  return (
    <div className="glass-dark premium-shadow rounded-2xl p-6">
      <h3 className="text-lg font-bold text-foreground">Your referral code</h3>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-card/60 px-5 py-4">
        <span className="text-gradient text-2xl font-black tracking-wider">
          {referralCode}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-full bg-pearl px-4 py-2 text-sm font-medium text-midnight transition hover:bg-pearl/90"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Share this code with friends. When they book their first trip, both
        of you get ₹1,000 in travel credits!
      </p>
    </div>
  );
}
