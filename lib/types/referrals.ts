export interface Milestone {
  count: number;
  creditAmount: number;
}

export interface ReferredUser {
  id: string;
  name: string;
  joinedDate: string;
  bookedTrip: string;
  creditsEarned: number;
}

export interface ReferralStats {
  totalReferrals: number;
  creditsEarned: number;
  milestones: Milestone[];
  referredUsers: ReferredUser[];
}
