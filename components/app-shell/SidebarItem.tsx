"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-white text-black shadow-lg"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      )}
    >
      <Icon size={20} strokeWidth={2} />

      <span>{title}</span>
    </Link>
  );
}