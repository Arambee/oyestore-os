import Image from "next/image";
import { Heart, Pencil, Stamp } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import PassportStamp from "@/components/profile/PassportStamp";
import { myProfile } from "@/lib/data/profile";

const STAMP_ROTATIONS = [-7, 5, -4, 8, -6, 3];

export default function ProfilePage() {
  const { name, memberSince, coverImage, stats, trips, photos } = myProfile;

  return (
    <AppShell>
      <section className="premium-shadow relative overflow-hidden rounded-3xl">
        <div className="relative h-36 w-full sm:h-64">
          <Image
            src={coverImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="glass-dark relative flex flex-col gap-3 p-4 pt-0 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-6">
          <div className="-mt-8 flex items-end gap-3 sm:-mt-12 sm:gap-5">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-[3px] border-background bg-white/10 text-xl font-bold text-foreground sm:size-24 sm:border-4 sm:text-3xl">
              {name.charAt(0)}
            </div>
            <div className="pb-1">
              <h1 className="text-2xl font-black text-foreground sm:text-3xl">{name}</h1>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Member since {memberSince}
              </p>
            </div>
          </div>

          <button className="glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground transition hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-sm">
            <Pencil size={13} className="sm:size-[15px]" />
            Edit Profile
          </button>
        </div>

        <div className="glass-dark grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl px-4 py-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 sm:px-6 sm:py-5">
          <Stat
            value={stats.tripsAttended}
            label="Trips attended"
          />
          <Divider />
          <Stat
            value={stats.photosShared}
            label="Photos shared"
          />
          <Divider />
          <Stat
            value={stats.savedExperiences}
            label="Saved experiences"
          />
          <Divider />
          <Stat
            value={stats.followers}
            label="Followers"
          />
          <Divider />
          <Stat
            value={stats.following}
            label="Following"
            className="col-span-2 justify-self-center sm:col-span-auto sm:justify-self-auto"
          />
        </div>
      </section>

      <div>
        <div className="flex items-center gap-2">
          <Stamp
            size={20}
            className="text-platinum"
          />
          <h2 className="text-2xl font-black text-foreground">Travel Passport</h2>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Every chapter you&apos;ve completed, stamped for good.
        </p>

        <div className="glass-dark premium-shadow relative mt-6 overflow-hidden rounded-3xl p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-platinum) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          <div className="relative flex flex-wrap justify-center gap-4 sm:gap-10">
            {trips.map((trip, index) => (
              <PassportStamp
                key={trip.id}
                placeName={trip.title}
                stateName={trip.stateName}
                date={trip.date}
                image={trip.image}
                href={trip.href}
                rotate={STAMP_ROTATIONS[index % STAMP_ROTATIONS.length]}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-black text-foreground">Your photos</h2>
        <div className="mt-6 grid grid-cols-3 gap-1 sm:gap-2">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg sm:rounded-xl"
            >
              <Image
                src={photo.image}
                alt={photo.location}
                fill
                sizes="(min-width: 1024px) 20vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/50 opacity-100 transition sm:bg-black/0 sm:opacity-0 sm:group-hover:bg-black/50 sm:group-hover:opacity-100">
                <div className="flex items-center gap-1.5 text-pearl">
                  <Heart
                    size={16}
                    className="fill-current"
                  />
                  <span className="text-sm font-bold">{photo.likes}</span>
                </div>
                <p className="text-xs text-white/80">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

function Stat({
  value,
  label,
  className,
}: {
  value: number;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xl font-black text-foreground sm:text-2xl">{value}</p>
      <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-8 w-px bg-white/10 sm:block" />;
}
