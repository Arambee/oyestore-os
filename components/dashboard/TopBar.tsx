import Image from "next/image";
import Link from "next/link";
import { Bell, Home, Search, User } from "lucide-react";

export default function TopBar() {
  return (
    <header className="glass-dark sticky top-0 z-40">
      <div className="flex items-center gap-3 px-4 py-3 lg:gap-6 lg:px-6 lg:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-xl font-black tracking-tight text-foreground"
        >
          <Image
            src="/brand/oyestore-logo.png"
            alt="Oyestore"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden sm:inline">Oyestore.</span>
        </Link>

        <Link
          href="/"
          className="glass hidden size-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground lg:flex"
        >
          <Home size={18} />
        </Link>

        <div className="glass hidden flex-1 items-center gap-3 rounded-full px-4 py-2.5 lg:flex">
          <Search
            size={18}
            className="text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Where to next?"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <span className="rounded border border-white/10 bg-card/60 px-1.5 py-0.5 text-xs text-muted-foreground">
            ⌘K
          </span>
        </div>

        <Link
          href="/explore"
          aria-label="Search"
          className="glass ml-auto flex size-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground lg:hidden"
        >
          <Search size={18} />
        </Link>

        <button className="glass relative flex size-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground">
          <Bell size={18} />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-accent-red" />
        </button>

        <Link
          href="/profile"
          className="glass flex size-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground"
        >
          <User size={18} />
        </Link>
      </div>
    </header>
  );
}
