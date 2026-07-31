import { referralStats } from "@/lib/data/referrals";

export default function ReferredUsersList() {
  return (
    <div>
      <h3 className="text-2xl font-black text-foreground">Your referrals</h3>

      <div className="mt-5 space-y-3">
        {referralStats.referredUsers.map((user) => (
          <div
            key={user.id}
            className="glass flex items-center justify-between rounded-2xl p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-foreground">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-foreground">{user.name}</p>
                <p className="text-sm text-muted-foreground">
                  Joined {user.joinedDate} • Booked {user.bookedTrip}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-foreground">
                +₹{user.creditsEarned.toLocaleString("en-IN")}
              </p>
              <p className="text-xs text-muted-foreground">Earned</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
