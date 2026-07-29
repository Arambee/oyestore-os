import Link from "next/link";
import { Bell, Home, Search, User } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="flex items-center gap-6 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 text-xl font-black tracking-tight text-foreground"
        >
          Oyestore.
        </Link>

        <Link
          href="/"
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <Home size={18} />
        </Link>

        <div className="flex flex-1 items-center gap-3 rounded-full border border-border bg-muted px-4 py-2.5">
          <Search
            size={18}
            className="text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Where to next?"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <span className="rounded border border-border bg-card px-1.5 py-0.5 text-xs text-muted-foreground">
            ⌘K
          </span>
        </div>

        <button className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground">
          <Bell size={18} />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-burgundy" />
        </button>

        <button className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
