import {
  Compass,
  Map,
  Briefcase,
  Users,
  Bookmark,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navigation: NavigationItem[] = [
  {
    title: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    title: "Destinations",
    href: "/destinations",
    icon: Map,
  },
  {
    title: "Trips",
    href: "/trips",
    icon: Briefcase,
  },
  {
    title: "Creators",
    href: "/creators",
    icon: Users,
  },
  {
    title: "Saved",
    href: "/saved",
    icon: Bookmark,
  },
];

export const communitiesItem: NavigationItem = {
  title: "Communities",
  href: "/communities",
  icon: Globe,
};
