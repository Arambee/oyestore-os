import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";

import AppShell from "@/components/dashboard/AppShell";
import { nextDeparture } from "@/lib/data/dashboard";
import { myProfile } from "@/lib/data/profile";

export default function BookingsPage() {
  return (
    <AppShell>
      <div>
        <p className="text-xs font-medium tracking-wider text-platinum">BOOKINGS</p>
        <h1 className="mt-2 text-4xl font-black text-foreground sm:text-5xl">Your Trips</h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Everything you&apos;ve got coming up, and everywhere you&apos;ve already been.
        </p>
      </div>

      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <CalendarCheck size={12} />
          UPCOMING
        </p>

        <Link
          href={nextDeparture.href}
          className="glass-dark premium-shadow group mt-4 flex flex-col gap-6 overflow-hidden rounded-3xl p-6 sm:flex-row sm:items-center"
        >
          <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:w-56">
            <Image
              src={nextDeparture.image}
              alt={nextDeparture.destination}
              fill
              sizes="(min-width: 640px) 224px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-black text-foreground">{nextDeparture.destination}</h2>
            <p className="mt-1 text-muted-foreground">{nextDeparture.date}</p>
            <p className="mt-3 text-xs font-medium tracking-wider text-platinum">
              {nextDeparture.daysLeft} DAYS LEFT
            </p>
          </div>
          <ArrowRight
            size={20}
            className="shrink-0 text-foreground transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div>
        <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
          <CheckCircle2 size={12} />
          PAST
        </p>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {myProfile.trips.map((trip) => (
            <Link
              key={trip.id}
              href={trip.href}
              className="glass-dark premium-shadow group overflow-hidden rounded-3xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-xl font-black text-pearl">
                  {trip.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{trip.stateName}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{trip.date}</span>
                  <span>{trip.companion}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
