"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";

import NavItem from "./NavItem";
import { navigation } from "./navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-2xl">

        {/* Logo */}

        <Link
          href="/"
          className="text-xl font-black tracking-tight text-white"
        >
          Oyestore.
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavItem
              key={item.title}
              {...item}
            />
          ))}
        </nav>

        {/* Actions */}

        <div className="flex items-center gap-4">

          <button className="rounded-full border border-white/10 p-3 text-white/70 transition hover:bg-white/10 hover:text-white">
            <Search size={18} />
          </button>

          <button className="rounded-full border border-white/10 p-3 text-white/70 transition hover:bg-white/10 hover:text-white">
            <User size={18} />
          </button>

        </div>
      </div>
    </header>
  );
}