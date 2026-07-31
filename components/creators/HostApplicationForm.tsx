"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { MIN_FOLLOWERS } from "@/lib/constants/creators";
import { currentSeason } from "@/lib/data/seasonsByOyestore";
import { cn } from "@/lib/utils";

type SocialPlatform = "Instagram" | "YouTube" | "TikTok" | "X" | "Other";

const PLATFORMS: SocialPlatform[] = ["Instagram", "YouTube", "TikTok", "X", "Other"];

export default function HostApplicationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<SocialPlatform>("Instagram");
  const [handle, setHandle] = useState("");
  const [followerCount, setFollowerCount] = useState("");
  const [interestedIn, setInterestedIn] = useState<string[]>([]);
  const [pitch, setPitch] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const followers = Number(followerCount.replace(/[^0-9]/g, "")) || 0;
  const isEligible = followers >= MIN_FOLLOWERS;
  const hasTypedFollowers = followerCount.trim().length > 0;

  const isComplete =
    fullName.trim() &&
    email.trim() &&
    handle.trim() &&
    interestedIn.length > 0 &&
    pitch.trim().length >= 20 &&
    isEligible;

  const toggleChapter = (chapterId: string) => {
    setInterestedIn((prev) =>
      prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId],
    );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isComplete) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-dark premium-shadow flex flex-col items-center gap-3 rounded-3xl p-12 text-center">
        <CheckCircle2
          size={28}
          className="text-platinum"
        />
        <h2 className="text-xl font-bold text-foreground">Application Received</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          {`We review every host application by hand - no auto-approvals. If ${fullName.split(" ")[0]} and this chapter are a fit, our team will reach out directly.`}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-dark premium-shadow flex flex-col gap-6 rounded-3xl p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:bg-white/10"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:bg-white/10"
          />
        </Field>

        <Field label="Primary Platform">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value as SocialPlatform)}
            className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none focus:bg-white/10"
          >
            {PLATFORMS.map((p) => (
              <option
                key={p}
                value={p}
                className="bg-background"
              >
                {p}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Handle">
          <input
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="@yourhandle"
            className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:bg-white/10"
          />
        </Field>
      </div>

      <Field label="Follower Count">
        <input
          inputMode="numeric"
          value={followerCount}
          onChange={(e) => setFollowerCount(e.target.value)}
          placeholder="e.g. 42000"
          className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:bg-white/10"
        />
        {hasTypedFollowers && (
          <p
            className={cn(
              "mt-2 flex items-center gap-1.5 text-xs font-medium",
              isEligible ? "text-platinum" : "text-muted-foreground",
            )}
          >
            <ShieldCheck size={12} />
            {isEligible
              ? "You meet the 25,000-follower minimum to apply."
              : `You need at least ${MIN_FOLLOWERS.toLocaleString()} followers to apply - you're at ${followers.toLocaleString()}.`}
          </p>
        )}
      </Field>

      <div>
        <p className="text-xs font-medium tracking-wider text-muted-foreground">
          WHERE WOULD YOU WANT TO HOST?
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {currentSeason.chapters.map((chapter) => {
            const selected = interestedIn.includes(chapter.id);
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => toggleChapter(chapter.id)}
                aria-pressed={selected}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-sm font-medium transition",
                  selected
                    ? "border-white/25 bg-white/10 text-foreground"
                    : "border-transparent bg-white/5 text-muted-foreground hover:bg-white/10",
                )}
              >
                {chapter.name}
              </button>
            );
          })}
        </div>
      </div>

      <Field label="Why should we let you host?">
        <textarea
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
          rows={4}
          placeholder="Tell us about your trips, your audience, and the kind of chapter you'd want to run."
          className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:bg-white/10"
        />
      </Field>

      <button
        type="submit"
        disabled={!isComplete}
        className="rounded-full bg-pearl px-6 py-3 text-sm font-bold text-background transition enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Submit Application
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium tracking-wider text-muted-foreground">
        {label.toUpperCase()}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
