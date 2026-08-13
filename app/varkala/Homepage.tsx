"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import type { CalendarChapter } from "./TripCalendar";

const INSTAGRAM_URL = "https://www.instagram.com/oyestoreforgram/";
const WHATSAPP_NUMBER = "918400181281";
const GENERIC_WHATSAPP_MESSAGE = "Hi! I'm looking at Oyestore's upcoming chapters. Can you share more details?";
const genericWaHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GENERIC_WHATSAPP_MESSAGE)}`;

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
          style={{ backgroundColor: activeMonth ? monthChapters[0]?.themeColor ?? "#FB7185" : "#FB7185" }}
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

      <main className="relative mx-auto max-w-6xl space-y-10 px-4 sm:space-y-14 sm:px-6">
        <section className="pt-4 text-center sm:pt-10">
          <p className="flex items-center justify-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <Sparkles size={12} />
            THE OYESTORE CALENDAR
          </p>
          <h1 className="text-gradient mx-auto mt-3 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Pick a month. Pick your trip.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
            Every chapter Oyestore is running this season, laid out by month. Choose one to see who&apos;s
            going, when, and for how much.
          </p>
        </section>

        <section>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {MONTHS.map((m, i) => {
              const count = chapters.filter((c) => c.month === m.month).length;
              const monthPhotos = chapters.filter((c) => c.month === m.month).slice(0, 4);
              const active = i === activeMonthIndex;
              return (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setActiveMonthIndex(i)}
                  className={`glass-dark premium-shadow relative overflow-hidden rounded-3xl p-5 text-left transition sm:p-6 ${
                    active ? "ring-2 ring-[#fffff0]/40" : "hover:bg-[#fffff0]/[0.03]"
                  }`}
                >
                  <p className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {m.label} <span className="text-muted-foreground">&apos;26</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {count > 0 ? `${count} chapter${count > 1 ? "s" : ""} running` : "Nothing confirmed yet"}
                  </p>
                  {monthPhotos.length > 0 && (
                    <div className="mt-4 flex items-center">
                      {monthPhotos.map((c, idx) => (
                        <div
                          key={c.id}
                          className="relative size-9 shrink-0 overflow-hidden rounded-full border-2 border-background"
                          style={{ marginLeft: idx === 0 ? 0 : -10, zIndex: 4 - idx }}
                        >
                          <Image
                            src={c.heroImage}
                            alt={c.navLabel}
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          {monthChapters.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {monthChapters.map((c) => (
                <Link
                  key={c.id}
                  href={`/varkala?chapter=${c.id}`}
                  className="group premium-border premium-shadow relative overflow-hidden rounded-3xl transition hover:scale-[1.01]"
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
              ))}
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
