import Link from "next/link";
import { Camera, MessageCircle, Users } from "lucide-react";

import { navigation } from "@/lib/config/navigation";

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

export default function Footer() {
  return (
    <footer className="mx-6 mb-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:mx-8">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-1">
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-foreground"
          >
            Oyestore.
          </Link>
          <p className="mt-3 max-w-[220px] text-sm text-muted-foreground">
            Curated small-group journeys to India&apos;s hidden places.
          </p>
        </div>

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

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oyestore. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {social.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
