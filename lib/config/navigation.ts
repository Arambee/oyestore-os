import {
    Home,
    Compass,
    CalendarDays,
    Users,
    Bookmark,
    Ticket,
    User,
    type LucideIcon,
  } from "lucide-react";
  
  export interface NavigationItem {
    title: string;
    href: string;
    icon: LucideIcon;
  }
  
  export const navigation: NavigationItem[] = [
    {
      title: "Home",
      href: "/app",
      icon: Home,
    },
    {
      title: "Explore",
      href: "/app/explore",
      icon: Compass,
    },
    {
      title: "Seasons",
      href: "/app/seasons",
      icon: CalendarDays,
    },
    {
      title: "Community",
      href: "/app/community",
      icon: Users,
    },
    {
      title: "Bookings",
      href: "/app/bookings",
      icon: Ticket,
    },
    {
      title: "Saved",
      href: "/app/saved",
      icon: Bookmark,
    },
    {
      title: "Profile",
      href: "/app/profile",
      icon: User,
    },
  ];