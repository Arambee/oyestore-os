import Link from "next/link";
import { ArrowRight, PartyPopper } from "lucide-react";

interface HighlightStripProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
}

export default function HighlightStrip({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  href,
}: HighlightStripProps) {
  return (
    <Link
      href={href}
      className="premium-shadow relative block overflow-hidden rounded-3xl border border-accent-red/25 bg-gradient-to-br from-accent-red/25 via-card to-background p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-accent-red/25 blur-3xl"
      />

      <div className="relative flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-accent-red">
        <PartyPopper size={13} />
        {eyebrow}
      </div>

      <h2 className="relative mt-2 text-2xl font-black leading-tight text-foreground">
        {title}
      </h2>
      <p className="relative mt-1.5 max-w-xs text-sm text-muted-foreground">{subtitle}</p>

      <span className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-accent-red/40 px-4 py-2 text-xs font-bold text-foreground">
        {ctaLabel}
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}
