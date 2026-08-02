import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bus,
  Calendar,
  Check,
  Compass,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
  Tag,
  Users,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "918400181281";
const WHATSAPP_MESSAGE =
  "Hi! I'm interested in the Varkala chapter (₹12,999 · 3 Days/4 Nights). Can you share the next available dates?";

function whatsappHref(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const metadata: Metadata = {
  title: "Varkala, Kerala | Oyestore",
  description:
    "Chapter Freedom - a 3 day, 4 night community trip to Varkala departing from Bangalore. Message us on WhatsApp for the next available dates.",
};

const perfectFor = ["Solo Travellers", "Friends", "Couples", "Creators", "First-Time Group Travellers"];

const chapterDays = [
  {
    day: "0",
    title: "The City Stays Behind",
    description: "Thursday night, the city stays behind and the weekend starts on the highway.",
    activities: [
      "Departure from Bangalore, Thursday night",
      "Work ends, notifications slowly stop mattering",
      "Highway replaces traffic, music replaces meetings",
      "Introductions become conversations",
      "Overnight journey to Varkala",
    ],
  },
  {
    day: "1",
    title: "The Cliffs Know Your Name Now",
    description: "Arrival day, taken slow - the cliff is yours to explore at your own pace.",
    activities: [
      "Arrive, freshen up, breakfast - nobody is waiting for you here",
      "Cliffside walks along the Varkala cliff",
      "Ocean-view cafés and hidden stairways down to the beach",
      "Independent exploration - go wherever looks interesting",
      "Sunset over the Arabian Sea",
      "Evening: welcome bonfire, music, food and stories as the group forms",
    ],
  },
  {
    day: "2",
    title: "The Best Plans Are Never Planned",
    description: "A scooter, the coastline, and no fixed plan - today belongs to curiosity.",
    activities: [
      "Scooter exploration along the coastline",
      "Stop wherever a café or view looks interesting",
      "Beach hopping to spots that never needed a name",
      "Watching locals go about their day",
      "Sunset viewpoints and a few surprises along the way",
      "Night: music, laughter, and people who didn't know each other yesterday",
    ],
  },
  {
    day: "3",
    title: "Leave Different",
    description: "One unhurried last morning, then the highway back to Bangalore.",
    activities: [
      "Wake up without an alarm, one final cliffside walk",
      "Coffee without checking the time, one last look at the sea",
      "Late checkout",
      "Begin the journey back to Bangalore",
      "Somewhere on the highway home, everyone starts planning the next chapter",
    ],
  },
];

const experiences = [
  "Ocean-view cafés",
  "Scenic scooter routes",
  "Cliffside sunsets",
  "Coastal culture",
  "Hidden local gems",
  "Community experiences",
  "Photography-friendly locations",
  "Slow travel",
  "Surprise moments",
];

const included = [
  "Accommodation",
  "Breakfasts",
  "Surprise Host",
  "Scooter Exploration",
  "Backwater Experience",
  "Community Activities",
  "Beachside Experiences",
  "Unlimited Main Character Moments",
  "Horse Riding",
];

const notIncluded = [
  "Lunch & Dinner",
  "Personal Expenses",
  "Adventure Activities not listed above",
  "Shopping",
  "AC Transportation from Bangalore (we can book it for you)",
];

const whyOyestore = [
  {
    icon: Sparkles,
    title: "Creator-led, not corporate",
    description: "Hosted by real creators who've made the trip themselves, not a rotating agency guide.",
  },
  {
    icon: Users,
    title: "Small chapters, never a tour bus",
    description: "Capped at 20 people - closer to a friend group than a coach full of strangers.",
  },
  {
    icon: Heart,
    title: "Built on a real community",
    description: "Every chapter feeds back into Oyestore's community feed - real photos, real people, before you even book.",
  },
];

const sneakPeek = [
  {
    id: "sneak-1",
    alt: "Travellers from a past Oyestore chapter",
    image: "/varkala/sneak-1.jpg",
    className: "col-span-2 row-span-2",
  },
  {
    id: "sneak-2",
    alt: "A candid moment from a past chapter",
    image: "/varkala/sneak-2.jpg",
    className: "col-span-2",
  },
  {
    id: "sneak-3",
    alt: "Looking out over the valley on a past chapter",
    image: "/varkala/sneak-3.jpg",
    className: "col-span-2",
  },
];

const hiddenSpots = [
  {
    name: "Jatayu Earth Center",
    description: "The world's largest bird sculpture, carved into a hilltop.",
  },
  {
    name: "Papanasam Beach Cliff Walk",
    description: "A quiet clifftop trail above the main beach, best at dusk.",
  },
];

const refundTiers = [
  { window: "30+ days before departure", refund: "75% refund" },
  { window: "15-29 days before departure", refund: "50% refund" },
  { window: "7-14 days before departure", refund: "25% refund" },
  { window: "Less than 7 days / no-show", refund: "No refund" },
];

export default function VarkalaLandingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fffff0 1px, transparent 1px), linear-gradient(to bottom, #fffff0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -left-40 -top-40 size-[32rem] rounded-full bg-accent-red/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 size-[28rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
      </div>

      <header className="relative mx-auto flex max-w-4xl items-center justify-between px-4 py-6 sm:px-6">
        <Link
          href="/varkala"
          className="flex items-center gap-2 text-lg font-black tracking-tight text-foreground"
        >
          <Image
            src="/brand/oyestore-logo.png"
            alt="Oyestore"
            width={30}
            height={30}
            className="rounded-full"
          />
          Oyestore.
        </Link>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-medium text-midnight transition hover:scale-[1.03] hover:bg-pearl/90 sm:flex"
        >
          <MessageCircle size={16} />
          WhatsApp us
        </a>
      </header>

      <main className="relative mx-auto max-w-4xl space-y-20 px-4 pb-32 sm:space-y-28 sm:px-6 sm:pb-20">
        <section>
          <div className="premium-border premium-shadow relative rounded-3xl">
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl sm:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1655394602738-eff266100405?auto=format&fit=crop&w=1200&q=80"
                alt="Varkala"
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

              <span className="absolute left-6 top-6 z-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#fffff0]/15 bg-card/70 px-3 py-1 text-[11px] font-medium tracking-wider text-platinum backdrop-blur-xl sm:px-4 sm:py-1.5 sm:text-xs">
                <span className="size-1.5 rounded-full bg-accent-red" />
                RIGHT NOW · ONLY VARKALA
              </span>

              <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
                <h1 className="text-gradient max-w-xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
                  Varkala asks you to stay.
                </h1>
                <p className="mt-3 max-w-md text-[#fffff0]/70">
                  Some places ask you to visit. This one doesn&apos;t let you leave on time.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#052e16] transition hover:scale-[1.03]"
                  >
                    <MessageCircle size={16} />
                    Message us on WhatsApp
                  </a>
                  <a
                    href="#the-chapter"
                    className="inline-flex items-center gap-2 rounded-full border border-[#fffff0]/20 bg-[#fffff0]/5 px-5 py-2.5 text-sm font-medium text-pearl backdrop-blur-xl transition hover:bg-[#fffff0]/10"
                  >
                    See the chapter
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-dark premium-shadow relative z-10 mx-6 -mt-8 hidden grid-cols-4 gap-4 rounded-2xl p-6 sm:grid">
              <Stat
                icon={Tag}
                label="Starts From"
                value="₹12,999"
              />
              <Stat
                icon={Calendar}
                label="Duration"
                value="3D / 4N"
              />
              <Stat
                icon={Bus}
                label="Departs"
                value="Bangalore"
              />
              <Stat
                icon={Users}
                label="Seats"
                value="20 people"
              />
            </div>
          </div>

          <div className="scrollbar-none relative z-10 mx-1 -mt-5 flex gap-2 overflow-x-auto sm:hidden">
            <StatChip
              icon={Tag}
              value="₹12,999"
            />
            <StatChip
              icon={Calendar}
              value="3D / 4N"
            />
            <StatChip
              icon={Bus}
              value="Bangalore"
            />
            <StatChip
              icon={Users}
              value="20 seats"
            />
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {whyOyestore.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-dark premium-shadow flex items-start gap-3 rounded-2xl p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fffff0]/5 text-platinum">
                <Icon size={16} />
              </span>
              <div>
                <p className="font-bold text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </section>

        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">ABOUT THE CHAPTER</p>
          <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
            Days begin with ocean air, drift through cafés overlooking the Arabian Sea, and end
            with sunsets that convince everyone to postpone tomorrow.
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            This chapter isn&apos;t designed around rushing from one attraction to another - it&apos;s
            built around freedom. Freedom to stop wherever the road feels beautiful, to have
            conversations that weren&apos;t planned, to remember what weekends are supposed to
            feel like. Your official trip title, host and surprise experiences are revealed 72
            hours before departure - because some stories deserve to unfold naturally.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {perfectFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#fffff0]/10 bg-[#fffff0]/5 px-3 py-1.5 text-xs text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section id="the-chapter">
          <p className="text-xs font-medium tracking-wider text-platinum">THE CHAPTER</p>
          <div className="relative mt-6 space-y-8 border-l border-[#fffff0]/10 pl-8">
            {chapterDays.map((day) => (
              <div
                key={day.day}
                className="relative"
              >
                <span className="absolute -left-[calc(2rem+1px)] top-0 flex size-8 items-center justify-center rounded-full border border-[#fffff0]/15 bg-background text-xs font-bold text-foreground">
                  {day.day}
                </span>
                <p className="text-xs font-medium tracking-wider text-platinum">DAY {day.day}</p>
                <h3 className="mt-1 text-xl font-bold text-foreground">{day.title}</h3>
                <p className="mt-1.5 max-w-2xl text-sm text-foreground/80">{day.description}</p>
                <ul className="mt-3 max-w-2xl space-y-1.5">
                  {day.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#fffff0]/25" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">WHAT YOU&apos;LL EXPERIENCE</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {experiences.map((experience) => (
              <span
                key={experience}
                className="rounded-full border border-[#fffff0]/10 bg-[#fffff0]/5 px-3 py-1.5 text-xs text-foreground/80"
              >
                {experience}
              </span>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium tracking-wider text-platinum">SNEAK PEEK</p>
          <div className="mt-4 grid h-64 grid-cols-4 grid-rows-2 gap-3 sm:h-80">
            {sneakPeek.map((photo) => (
              <div
                key={photo.id}
                className={`premium-border relative overflow-hidden rounded-2xl ${photo.className}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="glass-dark premium-shadow mt-4 rounded-2xl p-5">
            <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
              <Compass size={12} />
              A COUPLE OF SPOTS YOU&apos;LL FIND
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {hiddenSpots.map((spot) => (
                <div key={spot.name}>
                  <p className="font-semibold text-foreground">{spot.name}</p>
                  <p className="text-sm text-muted-foreground">{spot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="glass-dark premium-shadow rounded-2xl p-5">
            <p className="text-xs font-medium tracking-wider text-platinum">INCLUDED</p>
            <ul className="mt-3 space-y-2.5">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[#3ddc84]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-dark premium-shadow rounded-2xl p-5">
            <p className="text-xs font-medium tracking-wider text-platinum">NOT INCLUDED</p>
            <ul className="mt-3 space-y-2.5">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <X
                    size={16}
                    className="mt-0.5 shrink-0 text-muted-foreground"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="glass-dark premium-shadow rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-medium tracking-wider text-platinum">BEFORE YOU BOOK</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Every chapter is intentionally designed to stay flexible - weather changes, people
            change, and some of the best discoveries aren&apos;t found on Google Maps. The itinerary
            above is an overview of the experience; your official trip title, host reveal,
            meeting points, timings and surprise experiences are shared 72 hours before
            departure. Dates are TBA - message us on WhatsApp and we&apos;ll walk you through the
            next available chapter.
          </p>
        </section>

        <section className="glass-dark premium-shadow rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-medium tracking-wider text-platinum">CANCELLATION & REFUND POLICY</p>
          <div className="mt-3 divide-y divide-[#fffff0]/10">
            {refundTiers.map((tier) => (
              <div
                key={tier.window}
                className="flex items-center justify-between gap-3 py-3"
              >
                <span className="text-sm text-foreground/90">{tier.window}</span>
                <span className="shrink-0 text-sm font-bold text-foreground">{tier.refund}</span>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            <li>
              If Oyestore cancels the chapter (low sign-ups, weather, safety) - full refund or
              credit toward a future chapter, your choice.
            </li>
            <li>One free date change if requested 15+ days before departure, subject to seat availability.</li>
          </ul>
        </section>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="glass-dark premium-shadow group relative flex items-center justify-between overflow-hidden rounded-3xl p-6 sm:p-8"
        >
          <div className="relative">
            <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
              <MessageCircle size={12} />
              STILL HAVE QUESTIONS?
            </p>
            <h3 className="mt-1 text-2xl font-bold text-pearl sm:text-3xl">Chat with us on WhatsApp</h3>
            <p className="mt-1 text-sm text-pearl/60 sm:text-base">+91 84001 81281</p>
          </div>
          <ArrowRight
            size={22}
            className="relative shrink-0 text-pearl transition-transform group-hover:translate-x-1"
          />
        </a>

        <p className="pb-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Oyestore. All rights reserved.
        </p>
      </main>

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Oyestore on WhatsApp"
        className="glass-dark premium-shadow fixed inset-x-4 bottom-4 z-20 flex items-center justify-center gap-2 rounded-full bg-[#25D366]/95 py-4 text-sm font-semibold text-[#052e16] sm:hidden"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>
    </div>
  );
}

function StatChip({ icon: Icon, value }: { icon: typeof Users; value: string }) {
  return (
    <div className="glass-dark premium-shadow flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold text-foreground">
      <Icon
        size={14}
        className="text-platinum"
      />
      {value}
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={16}
        className="text-platinum"
      />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-base font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
