"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Briefcase, Compass, Home, Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import MobileContinueBar from "./MobileContinueBar";
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
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 lg:hidden">
        <div className="px-3 pb-3">
          <div className="mb-2">
            <MobileContinueBar />
          </div>

          <nav className="glass-dark premium-shadow flex items-stretch justify-around gap-1 rounded-full border border-white/10 p-1.5">
            {TABS.map((tab) => {
              const active = pathname === tab.href;
              const Icon = tab.icon;

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    "flex min-w-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-2 text-[10.5px] font-semibold transition-all",
                    active
                      ? "bg-gradient-to-br from-accent-red to-accent-red/70 text-pearl shadow-[0_4px_14px_-2px_rgba(200,16,46,0.55)]"
                      : "text-muted-foreground",
                  )}
                >
                  <Icon
                    size={19}
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
                "flex min-w-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-2 text-[10.5px] font-semibold transition-all",
                moreOpen
                  ? "bg-gradient-to-br from-accent-red to-accent-red/70 text-pearl shadow-[0_4px_14px_-2px_rgba(200,16,46,0.55)]"
                  : "text-muted-foreground",
              )}
            >
              <Menu
                size={19}
                strokeWidth={moreOpen ? 2.5 : 2}
              />
              More
            </button>
          </nav>
        </div>
      </div>

      <MobileMoreSheet
        open={moreOpen}
        onOpenChange={setMoreOpen}
      />
    </>
  );
}
