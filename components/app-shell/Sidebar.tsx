"use client";

import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { navigation } from "@/lib/config/navigation";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-[#0A0A0A]">
      {/* Logo */}
      <div className="px-8 pt-8 pb-6">
        <Link href="/app">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Oyestore.
          </h1>
        </Link>

        <p className="mt-2 text-sm text-zinc-500">
          Bringing Better.
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4">
        {navigation.map((item) => (
          <SidebarItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-6">
        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-sm font-semibold text-white">
            Explorer Passport
          </p>

          <p className="mt-2 text-xs leading-5 text-zinc-400">
            Unlock exclusive experiences and member-only journeys.
          </p>
        </div>
      </div>
    </aside>
  );
}