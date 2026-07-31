import {
  Home,
  Compass,
  Map,
  Briefcase,
  Users,
  Ticket,
  BookOpen,
  ClipboardList,
  Bookmark,
  History,
  Globe,
  Gift,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface NavigationGroup {
  label: string;
  items: NavigationItem[];
}

export const homeItem: NavigationItem = {
  title: "Home",
  href: "/",
  icon: Home,
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Discover",
    items: [
      { title: "Explore", href: "/explore", icon: Compass },
      { title: "Destinations", href: "/destinations", icon: Map },
      { title: "Trips", href: "/trips", icon: Briefcase },
      { title: "Creators", href: "/creators", icon: Users },
      { title: "Experiences", href: "/experiences", icon: Ticket },
      { title: "Stories", href: "/stories", icon: BookOpen },
    ],
  },
  {
    label: "Library",
    items: [
      { title: "Bookings", href: "/bookings", icon: ClipboardList },
      { title: "Saved", href: "/saved", icon: Bookmark },
      { title: "Continue", href: "/continue", icon: History },
    ],
  },
  {
    label: "Community",
    items: [
      { title: "Communities", href: "/communities", icon: Globe },
      { title: "Invite & Earn", href: "/referrals", icon: Gift },
    ],
  },
];

// Flat view of every nav destination -- used by the footer's site map column.
export const navigation: NavigationItem[] = navigationGroups.flatMap(
  (group) => group.items,
);
