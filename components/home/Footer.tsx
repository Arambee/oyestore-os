import Image from "next/image";
import Link from "next/link";
import { Camera, LifeBuoy, MessageCircle, Sparkles, Users } from "lucide-react";

import { navigation } from "@/lib/config/navigation";

const quickTiles = [
  { title: "Host a trip", href: "/creators/host", icon: Sparkles },
  { title: "Community", href: "/communities", icon: Users },
  { title: "Help centre", href: "/help", icon: LifeBuoy },
];

const company = [
  { title: "About Oyestore", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Press", href: "/press" },
];

const support = [
  { title: "Help Center", href: "/help" },
  { title: "Safety", href: "/safety" },
  { title: "Contact Us", href: "/contact" },
];

const legal = [
  { title: "Terms of Service", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Cookie Policy", href: "/cookies" },
];

const social = [
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
  { label: "Twitter", href: "https://twitter.com", icon: MessageCircle },
  { label: "Community", href: "https://facebook.com", icon: Users },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-muted-foreground">
        {title.toUpperCase()}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-foreground/80 transition hover:text-foreground"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mobileLinks = [...company, ...support, ...legal];

export default function Footer() {
  return (
    <footer className="mx-4 mb-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:mx-6 sm:p-8 lg:mx-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-black tracking-tight text-foreground sm:text-xl"
      >
        <Image
          src="/brand/oyestore-logo.png"
          alt="Oyestore"
          width={28}
          height={28}
          className="rounded-full sm:size-8"
        />
        Oyestore.
      </Link>
      <p className="mt-2 max-w-[220px] text-xs text-muted-foreground sm:mt-3 sm:text-sm">
        Curated small-group journeys to India&apos;s hidden places.
      </p>

      {/* Full sitemap: tablet/desktop only -- mobile already has this via the bottom tab bar + More sheet */}
      <div className="mt-8 hidden gap-8 sm:grid sm:grid-cols-3 lg:grid-cols-4">
        <FooterColumn
          title="Discover"
          links={navigation}
        />
        <FooterColumn
          title="Company"
          links={company}
        />
        <FooterColumn
          title="Support"
          links={support}
        />
        <FooterColumn
          title="Legal"
          links={legal}
        />
      </div>

      {/* Quick-action tiles: mobile only */}
      <div className="mt-5 grid grid-cols-3 gap-2 sm:hidden">
        {quickTiles.map(({ title, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-2 rounded-2xl border border-accent-red/20 bg-accent-red/10 px-2 py-3 text-center"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-accent-red/15 text-accent-red">
              <Icon size={15} />
            </span>
            <span className="text-[10px] font-semibold leading-tight text-foreground">
              {title}
            </span>
          </Link>
        ))}
      </div>

      {/* Condensed link row: mobile only, covers the links that aren't already in the tab bar/nav sheet */}
      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 sm:hidden">
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-foreground/70 transition hover:text-foreground"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-10 sm:flex-row sm:gap-4 sm:pt-6">
        <p className="text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} Oyestore. All rights reserved.
        </p>

        <div className="flex items-center gap-2 sm:gap-3">
          {social.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition hover:bg-white/10 hover:text-foreground sm:size-11"
            >
              <Icon size={14} className="sm:size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
