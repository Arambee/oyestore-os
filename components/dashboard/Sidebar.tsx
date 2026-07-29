"use client";

import Link from "next/link";

import { communitiesItem, navigation } from "@/lib/config/navigation";
import { currentUser } from "@/lib/data/dashboard";

import SidebarNav from "./SidebarNav";
import WeatherWidget from "./WeatherWidget";

export default function Sidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[280px] shrink-0 flex-col justify-between overflow-y-auto border-r border-sidebar-border bg-sidebar px-6 py-8 lg:flex">
      <div>
        <WeatherWidget />

        <p className="mt-6 text-sm text-muted-foreground">
          Let&apos;s get you somewhere better.
        </p>

        <div className="my-6 border-t border-sidebar-border" />

        <SidebarNav items={navigation} />

        <div className="my-6 border-t border-sidebar-border" />

        <Link
          href={communitiesItem.href}
          className="flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <communitiesItem.icon size={18} />
          {communitiesItem.title}
        </Link>
      </div>

      <div className="flex items-center gap-3 border-t border-sidebar-border pt-6">
        <div className="flex size-9 items-center justify-center rounded-full bg-royal-blue text-sm font-bold text-pearl">
          {currentUser.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            {currentUser.name}
          </p>
          <p className="text-xs text-muted-foreground">{currentUser.plan}</p>
        </div>
      </div>
    </aside>
  );
}
