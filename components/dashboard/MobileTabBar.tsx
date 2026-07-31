"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Briefcase, Compass, Home, Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import MobileMoreSheet from "./MobileMoreSheet";

const TABS = [
  { title: "Home", href: "/", icon: Home },
  { title: "Explore", href: "/explore", icon: Compass },
  { title: "Trips", href: "/trips", icon: Briefcase },
  { title: "Saved", href: "/saved", icon: Bookmark },
];

export default function MobileTabBar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      <nav className="glass-dark safe-bottom fixed inset-x-0 bottom-0 z-40 flex h-16 items-stretch justify-around border-t border-white/10 lg:hidden">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex min-w-11 flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors",
                active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.5 : 2}
              />
              {tab.title}
            </Link>
          );
        })}

        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          aria-label="More"
          className={cn(
            "flex min-w-11 flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors",
            moreOpen ? "text-foreground" : "text-muted-foreground",
          )}
        >
          <Menu
            size={20}
            strokeWidth={moreOpen ? 2.5 : 2}
          />
          More
        </button>
      </nav>

      <MobileMoreSheet
        open={moreOpen}
        onOpenChange={setMoreOpen}
      />
    </>
  );
}
