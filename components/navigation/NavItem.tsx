"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  href: string;
}

export default function NavItem({
  title,
  href,
}: NavItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-all duration-300 ${
        active
          ? "text-white"
          : "text-white/60 hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
}