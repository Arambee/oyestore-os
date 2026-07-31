"use client";

import { Sparkles } from "lucide-react";

import { homeItem, navigationGroups } from "@/lib/config/navigation";
import { currentUser } from "@/lib/data/dashboard";

import SidebarNav from "./SidebarNav";
import WeatherWidget from "./WeatherWidget";

export default function Sidebar() {
  return (
    <aside className="glass-dark scrollbar-none sticky top-16 hidden max-h-[var(--rail-max-h,calc(100vh-5rem))] w-[236px] shrink-0 flex-col self-start overflow-y-auto rounded-3xl px-5 py-6 lg:flex">
      <WeatherWidget />

      <p className="mt-6 text-sm text-muted-foreground">
        Let&apos;s get you somewhere better.
      </p>

      <div className="my-6 border-t border-sidebar-border" />

      <SidebarNav items={[homeItem]} />

      {navigationGroups.map((group) => (
        <div key={group.label}>
          <div className="my-6 border-t border-sidebar-border" />
          <p className="mb-2 px-4 text-xs font-medium tracking-wider text-muted-foreground">
            {group.label.toUpperCase()}
          </p>
          <SidebarNav items={group.items} />
        </div>
      ))}

      <div className="glass mt-6 rounded-2xl p-4">
        <div className="flex size-8 items-center justify-center rounded-full bg-white/10 text-foreground">
          <Sparkles size={15} />
        </div>
        <p className="mt-3 text-sm font-bold text-foreground">Bringing Better</p>
        <p className="mt-1 text-xs text-muted-foreground">
          In places. In people. In stories.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-sidebar-border pt-6">
        <div className="flex size-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-foreground">
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
