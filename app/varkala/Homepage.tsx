"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { CalendarChapter } from "./TripCalendar";

const INSTAGRAM_URL = "https://www.instagram.com/oyestoreforgram/";
const WHATSAPP_NUMBER = "918400181281";
const GENERIC_WHATSAPP_MESSAGE = "Hi! I'm looking at Oyestore's upcoming chapters. Can you share more details?";
const genericWaHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GENERIC_WHATSAPP_MESSAGE)}`;

// Same brand promise + "why us" copy used on every chapter detail page -
// this is Oyestore's actual philosophy, not homepage-specific marketing.
const oyestorePromise = "You pick the place. We take care of the rest.";

const oyestoreAdvantage = [
  "Stay in handpicked places",
  "Curated local experiences",
  "Everything planned before you arrive",
  "No itinerary headaches",
  "Real-time trip updates",
  "A host who actually knows the destination",
];

const diyComparison = [
  { task: "Find a place to stay", diy: "Hours of scrolling listings", oyestore: "Handpicked, already done" },
  { task: "Figure out transport", diy: "Compare cabs, buses, routes", oyestore: "Planned for you" },
  { task: "Research what's worth seeing", diy: "Dig through blogs and reels", oyestore: "Curated by people who've been" },
  { task: "Build an itinerary", diy: "Piece it together yourself", oyestore: "Done before you arrive" },
  { task: "Coordinate everything on the day", diy: "You're the trip manager", oyestore: "You just show up" },
];

const ecosystemPillars = [
  "A themed chapter every season - Raksha Bandhan, Onam, Munnar x Vagamon, and expeditions like The Odyssey - never the same trip twice",
  "A destinations vault written by locals and creators who've actually been there, not scraped listings",
  "A creator network - real hosts building a track record chapter by chapter, not a rotating agency guide",
  "A community feed that grows with every trip - the photos, stories and recommendations feed straight back into the next chapter",
];

interface MonthDef {
  label: string;
  month: number; // 0-indexed
  year: number;
}

const MONTHS: MonthDef[] = [
  { label: "AUGUST", month: 7, year: 2026 },
  { label: "SEPTEMBER", month: 8, year: 2026 },
  { label: "OCTOBER", month: 9, year: 2026 },
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
      />
      <circle
        cx="17.2"
        cy="6.8"
        r="1.1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function OyestoreDot() {
  return (
    <span
      aria-hidden
      className="ml-px inline-block size-[0.16em] shrink-0 rounded-full bg-red-500 align-baseline"
      style={{ animation: "oye-dot-pulse 1.8s ease-in-out infinite" }}
    />
  );
}

export default function Homepage({ chapters }: { chapters: CalendarChapter[] }) {
  // Default to the first month that actually has a chapter running.
  const defaultIndex = Math.max(
    0,
    MONTHS.findIndex((m) => chapters.some((c) => c.month === m.month)),
  );
  const [activeMonthIndex, setActiveMonthIndex] = useState(defaultIndex === -1 ? 0 : defaultIndex);
  const activeMonth = MONTHS[activeMonthIndex];
  const monthChapters = chapters.filter((c) => c.month === activeMonth.month);
  const heroTiles = chapters.slice(0, 4);

  // Multiple calendar entries can be the same recurring experience on
  // different dates (e.g. the Varkala Weekend departures) - one mystery
  // host card per distinct experience, not one per date.
  const uniqueHostChapters = chapters.filter(
    (c, i) => chapters.findIndex((other) => other.navLabel === c.navLabel) === i,
  );
  const mysteryBackdrop =
    chapters.find((c) => c.destination.includes("Munnar")) ?? uniqueHostChapters[0] ?? chapters[0];

  return (
    <div className="relative min-h-screen bg-background">
      <style>{`
        @keyframes oye-dot-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }
      `}</style>
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
        <div
          className="absolute -left-40 -top-40 size-[32rem] rounded-full opacity-[0.12] blur-[120px] transition-colors duration-500"
          style={{ backgroundColor: monthChapters[0]?.themeColor ?? "#FB7185" }}
        />
        <div className="absolute right-0 top-1/3 size-[28rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
      </div>

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
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
          <span aria-label="Oyestore.">
            Oyestore<OyestoreDot />
          </span>
        </Link>
        <div className="flex items-center gap-2.5">
          <Link
            href="/host"
            className="flex items-center gap-1.5 rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 px-3 py-2 text-xs font-medium text-foreground/90 transition hover:bg-[#fffff0]/10 hover:text-foreground sm:px-4 sm:text-sm"
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">Host with us</span>
            <span className="sm:hidden">Host</span>
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Oyestore on Instagram"
            className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={genericWaHref}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-medium text-midnight transition hover:scale-[1.03] hover:bg-pearl/90 sm:flex"
          >
            <MessageCircle size={16} />
            WhatsApp us
          </a>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl space-y-10 px-4 sm:space-y-16 sm:px-6">
        <section className="relative overflow-hidden rounded-[2rem]">
          <div className="grid h-[430px] grid-cols-2 grid-rows-2 gap-1.5 sm:h-[580px] sm:grid-cols-4 sm:grid-rows-2">
            {heroTiles.map((c, i) => (
              <div
                key={c.id}
                className={`group relative overflow-hidden ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : i === 3 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={c.heroImage}
                  alt={c.navLabel}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
                <span
                  className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-[10px] font-semibold tracking-wide text-white/90 sm:bottom-3.5 sm:left-3.5 sm:text-xs"
                  style={{ color: c.themeColor }}
                >
                  {c.icon}
                  <span className="text-white/90">{c.navLabel}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <div className="glass-dark premium-shadow pointer-events-auto max-w-lg rounded-[1.75rem] px-6 py-8 text-center sm:px-12 sm:py-11">
              <p className="flex items-center justify-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
                <Sparkles size={12} />
                THE OYESTORE CALENDAR
              </p>
              <h1 className="mt-3 text-2xl font-black leading-[1.15] tracking-tight text-foreground sm:text-4xl">
                Tired of the same old, boring &amp; silly trips?
              </h1>
              <p className="text-gradient mt-1 text-2xl font-black leading-[1.05] tracking-tight sm:text-4xl">
                Let&apos;s bring better.
              </p>
              <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground sm:text-base">
                {`${oyestorePromise} Pick a month below to see what's on.`}
              </p>
              <a
                href="#months"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-medium text-midnight transition hover:scale-[1.03] hover:bg-pearl/90"
              >
                See what&apos;s coming
                <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </section>

        <section id="months" className="scroll-mt-6">
          <p className="text-xs font-medium tracking-wider text-platinum">THIS SEASON</p>
          <h2 className="mt-2 max-w-md text-2xl font-black leading-snug text-foreground sm:text-3xl">
            Pick your month.
          </h2>

          {/* Mobile: compact pills, each marked with the chapters (and places) running that month. */}
          <div className="scrollbar-none mt-5 flex gap-2 overflow-x-auto sm:hidden">
            {MONTHS.map((m, i) => {
              const monthList = chapters.filter((c) => c.month === m.month);
              const active = i === activeMonthIndex;
              return (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setActiveMonthIndex(i)}
                  className={`flex shrink-0 flex-col rounded-2xl border px-4 py-2.5 text-left transition ${
                    active
                      ? "border-[#fffff0]/25 bg-[#fffff0]/10 text-foreground"
                      : "border-[#fffff0]/10 bg-[#fffff0]/[0.02] text-muted-foreground"
                  }`}
                >
                  <span className="text-sm font-bold tracking-wide">{`${m.label} '26`}</span>
                  {monthList.length > 0 ? (
                    <span className="mt-1 flex items-center gap-1">
                      {monthList.map((c) => (
                        <span
                          key={c.id}
                          className="flex items-center gap-0.5 text-[10px] font-medium"
                          style={{ color: c.themeColor }}
                        >
                          {c.icon}
                        </span>
                      ))}
                      <span className="text-[10px] text-muted-foreground">
                        {Array.from(new Set(monthList.map((c) => c.destination))).join(" · ")}
                      </span>
                    </span>
                  ) : (
                    <span className="mt-1 text-[10px] text-muted-foreground">Nothing yet</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop: full photo-backed cards. */}
          <div className="mt-5 hidden gap-3 sm:grid sm:grid-cols-3 sm:gap-4">
            {MONTHS.map((m, i) => {
              const monthList = chapters.filter((c) => c.month === m.month);
              const cover = monthList[0];
              const active = i === activeMonthIndex;
              return (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setActiveMonthIndex(i)}
                  className={`group relative h-40 overflow-hidden rounded-3xl text-left transition sm:h-48 ${
                    active ? "ring-2 ring-[#fffff0]/60" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {cover ? (
                    <>
                      <Image
                        src={cover.heroImage}
                        alt={m.label}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                    </>
                  ) : (
                    <div className="glass-dark absolute inset-0" />
                  )}
                  <div className="relative flex h-full flex-col justify-end p-5">
                    <p className="text-2xl font-black text-foreground sm:text-3xl">
                      {m.label} <span className="font-bold text-muted-foreground/80">&apos;26</span>
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      {monthList.length > 0
                        ? `${monthList.length} chapter${monthList.length > 1 ? "s" : ""} running`
                        : "Nothing confirmed yet"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          {monthChapters.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {monthChapters.map((c, i) => {
                // Odd count: center the trailing card instead of leaving it
                // flush left with blank space beside it.
                const isTrailingOdd = monthChapters.length % 2 !== 0 && i === monthChapters.length - 1;
                return (
                <Link
                  key={c.id}
                  href={`/varkala?chapter=${c.id}`}
                  className={`group premium-border premium-shadow relative overflow-hidden rounded-3xl transition hover:scale-[1.01] ${
                    isTrailingOdd ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""
                  }`}
                >
                  <div className="relative h-56 w-full sm:h-64">
                    <Image
                      src={c.heroImage}
                      alt={c.navLabel}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
                    <span
                      className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-[#fffff0]/15 bg-card/70 px-3 py-1 text-[11px] font-medium tracking-wider text-platinum backdrop-blur-xl"
                      style={{ color: c.themeColor }}
                    >
                      {c.icon}
                      {c.dateChip}
                    </span>
                    <div className="relative flex h-full flex-col justify-end p-5">
                      <p className="text-xl font-black text-foreground sm:text-2xl">{c.navLabel}</p>
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-white/70">
                        <MapPin size={11} />
                        {c.destination}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground/90">{c.price}</span>
                        <span className="flex items-center gap-1 text-xs font-medium text-foreground/80 transition group-hover:translate-x-1 group-hover:text-foreground">
                          See the chapter
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>
          ) : (
            <div className="glass-dark premium-shadow flex flex-col items-center gap-3 rounded-3xl border border-dashed border-[#fffff0]/15 py-12 text-center">
              <p className="text-lg font-bold text-foreground">
                Nothing confirmed for {activeMonth.label.charAt(0) + activeMonth.label.slice(1).toLowerCase()} yet.
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                The next chapter is still taking shape. Message us to be the first to know when it drops.
              </p>
              <a
                href={genericWaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#052e16] transition hover:scale-[1.03]"
              >
                <MessageCircle size={14} />
                Notify me
              </a>
            </div>
          )}
        </section>

        <section className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10 sm:py-20">
          {mysteryBackdrop && (
            <Image
              src={mysteryBackdrop.heroImage}
              alt=""
              fill
              aria-hidden
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />

          <div className="relative">
            <p className="flex items-center justify-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
              <Lock size={12} />
              MEET YOUR HOST
            </p>
            <h2 className="text-gradient mx-auto mt-3 max-w-2xl text-3xl font-black leading-[1.1] sm:text-5xl">
              Every chapter has a host. Who stays a mystery - until 72 hours before departure.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
              Real creators and community hosts, not rotating agency guides. Names, faces and the full
              reveal drop right before you travel - same as the rest of the itinerary.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5 sm:gap-8">
              {uniqueHostChapters.map((c) => (
                <div
                  key={c.navLabel}
                  className="flex w-28 flex-col items-center gap-3 sm:w-36"
                >
                  <div className="relative flex size-20 shrink-0 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 backdrop-blur-xl sm:size-24">
                    <UserRound
                      size={32}
                      className="text-white/40"
                    />
                    <span className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full border-2 border-background bg-card">
                      <Lock
                        size={12}
                        className="text-platinum"
                      />
                    </span>
                  </div>
                  <p
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold"
                    style={{ color: c.themeColor }}
                  >
                    {c.icon}
                    {c.navLabel}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/50">Revealed 72h before departure, every chapter.</p>

            <Link
              href="/host"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-pearl px-6 py-3 text-sm font-medium text-midnight transition hover:scale-[1.03] hover:bg-pearl/90"
            >
              Got an audience? Apply to host a chapter
              <ArrowUpRight
                size={14}
                className="shrink-0 transition group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px]"
              />
            </Link>
          </div>
        </section>

        <section className="glass-dark premium-shadow rounded-3xl p-6 sm:p-10">
          <p className="text-gradient max-w-xl text-2xl font-black leading-snug sm:text-3xl">{oyestorePromise}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-wider text-platinum">WHY OYESTORE?</p>
              <ul className="mt-3 space-y-2.5">
                {oyestoreAdvantage.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#25D366]"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-wider text-platinum">PLAN IT YOURSELF, OR DON&apos;T</p>
              <div className="mt-3 space-y-2.5">
                {diyComparison.map((row) => (
                  <div
                    key={row.task}
                    className="rounded-xl border border-[#fffff0]/10 bg-[#fffff0]/[0.03] p-3"
                  >
                    <p className="text-sm font-medium text-foreground/90">{row.task}</p>
                    <div className="mt-1.5 flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground/70 line-through decoration-[#fffff0]/20">
                        {row.diy}
                      </span>
                      <ArrowRight
                        size={11}
                        className="shrink-0 text-muted-foreground/50"
                      />
                      <span className="font-medium text-[#25D366]">{row.oyestore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="site-footer"
        className="relative mx-auto mt-16 max-w-6xl px-4 pb-32 sm:px-6 sm:pb-16"
      >
        <div className="glass-dark premium-shadow rounded-3xl p-6 sm:p-10">
          <div className="max-w-md">
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
              <span aria-label="Oyestore.">
                Oyestore<OyestoreDot />
              </span>
            </Link>
            <p className="text-gradient mt-2 text-xs font-bold uppercase tracking-[0.2em]">
              Building Better. One Chapter at a Time.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Oyestore is a creator-led community travel platform - small-group chapters hosted by
              real people who&apos;ve actually made the trip, not a booking engine. This page covers
              what&apos;s live right now; there&apos;s a much bigger vault of destinations, creators
              and community stories being built behind it.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={genericWaHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Message Oyestore on WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Oyestore on Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="mailto:central@oyestore.in"
                aria-label="Email Oyestore"
                className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-wider text-platinum">WHAT WE&apos;RE BUILDING</p>
              <ul className="mt-3 space-y-2.5">
                {ecosystemPillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[#fffff0]/25" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-wider text-platinum">THIS SEASON</p>
              <ul className="mt-3 space-y-3">
                {chapters.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/varkala?chapter=${c.id}`}
                      className="group flex items-center justify-between gap-2 text-sm text-foreground/90 transition hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        {c.icon}
                        {c.navLabel}
                        <span className="text-muted-foreground">· {c.dateChip}</span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-muted-foreground opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/host"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition hover:text-foreground"
            >
              Got an audience? Host a chapter with us
              <ArrowUpRight
                size={14}
                className="shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] group-hover:text-foreground"
              />
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 border-t border-[#fffff0]/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Oyestore. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Building Better - one chapter at a time.</p>
          </div>
        </div>
      </footer>

      <a
        href={genericWaHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Oyestore on WhatsApp"
        className="premium-shadow fixed inset-x-4 bottom-4 z-20 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-semibold text-[#052e16] sm:hidden"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>
    </div>
  );
}
