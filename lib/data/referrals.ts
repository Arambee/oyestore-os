import type { ReferralStats } from "@/lib/types/referrals";

export const referralCode = "OYEACT2026";

export const referralStats: ReferralStats = {
  totalReferrals: 8,
  creditsEarned: 8000,
  milestones: [
    { count: 5, creditAmount: 5000 },
    { count: 10, creditAmount: 10000 },
    { count: 20, creditAmount: 20000 },
    { count: 50, creditAmount: 50000 },
  ],
  referredUsers: [
    {
      id: "rohit-sharma",
      name: "Rohit Sharma",
      joinedDate: "Apr 15, 2026",
      bookedTrip: "Wayanad Trek",
      creditsEarned: 1000,
    },
    {
      id: "anjali-verma",
      name: "Anjali Verma",
      joinedDate: "Apr 10, 2026",
      bookedTrip: "Munnar Tea Gardens",
      creditsEarned: 1000,
    },
    {
      id: "karthik-iyer",
      name: "Karthik Iyer",
      joinedDate: "Mar 28, 2026",
      bookedTrip: "Varkala Cliffs",
      creditsEarned: 1000,
    },
    {
      id: "sneha-reddy",
      name: "Sneha Reddy",
      joinedDate: "Mar 22, 2026",
      bookedTrip: "Athirappilly Falls",
      creditsEarned: 1000,
    },
    {
      id: "aditya-menon",
      name: "Aditya Menon",
      joinedDate: "Mar 15, 2026",
      bookedTrip: "Backwaters Journey",
      creditsEarned: 1000,
    },
    {
      id: "divya-nair",
      name: "Divya Nair",
      joinedDate: "Mar 8, 2026",
      bookedTrip: "Coorg Coffee Trail",
      creditsEarned: 1000,
    },
    {
      id: "rahul-kumar",
      name: "Rahul Kumar",
      joinedDate: "Feb 28, 2026",
      bookedTrip: "Wayanad Trek",
      creditsEarned: 1000,
    },
    {
      id: "priya-nambiar",
      name: "Priya Nambiar",
      joinedDate: "Feb 20, 2026",
      bookedTrip: "Gokarna Beaches",
      creditsEarned: 1000,
    },
  ],
};
