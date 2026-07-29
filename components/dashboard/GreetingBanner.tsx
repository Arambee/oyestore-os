"use client";

import { currentUser } from "@/lib/data/dashboard";

function getGreeting(hour: number) {
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function GreetingBanner() {
  const greeting = getGreeting(new Date().getHours());

  return (
    <h1 className="text-2xl font-bold text-foreground">
      {greeting}, {currentUser.name}.
    </h1>
  );
}
