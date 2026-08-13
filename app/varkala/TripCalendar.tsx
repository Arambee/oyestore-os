"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export interface CalendarChapter {
  id: string;
  navLabel: string;
  dateChip: string;
  themeColor: string;
  heroImage: string;
  price: string;
  waHref: string;
  icon: React.ReactNode;
  month: number; // 0-indexed (7 = August)
  startDay: number;
  endDay: number;
}

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

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function buildGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function TripCalendar({ chapters }: { chapters: CalendarChapter[] }) {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const activeMonth = MONTHS[activeMonthIndex];
  const grid = buildGrid(activeMonth.year, activeMonth.month);

  const monthChapters = chapters.filter((c) => c.month === activeMonth.month);

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === activeMonth.year && today.getMonth() === activeMonth.month;

  function chaptersForDay(day: number) {
    return monthChapters.filter((c) => day >= c.startDay && day <= c.endDay);
  }

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <Sparkles size={12} />
        THE OYESTORE CALENDAR
      </p>
      <h2 className="text-gradient mt-2 max-w-xl text-2xl font-black leading-snug sm:text-3xl">
        See what&apos;s coming, pick your window.
      </h2>

      <div className="scrollbar-none mt-5 flex gap-2 overflow-x-auto">
        {MONTHS.map((m, i) => (
          <button
            key={m.label}
            type="button"
            onClick={() => setActiveMonthIndex(i)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold tracking-wide transition ${
              i === activeMonthIndex
                ? "border-[#fffff0]/25 bg-[#fffff0]/10 text-foreground"
                : "border-[#fffff0]/10 bg-[#fffff0]/[0.02] text-muted-foreground hover:bg-[#fffff0]/5"
            }`}
          >
            {m.label} &apos;26
          </button>
        ))}
      </div>

      <div className="glass-dark premium-shadow mt-4 rounded-3xl p-4 sm:p-8">
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {WEEKDAYS.map((w, i) => (
            <div
              key={`${w}-${i}`}
              className="flex h-6 items-center justify-center text-[10px] font-semibold tracking-wider text-muted-foreground/60 sm:text-xs"
            >
              {w}
            </div>
          ))}

          {grid.map((day, i) => {
            if (day === null) {
              return (
                <div
                  key={`empty-${i}`}
                  className="aspect-square"
                />
              );
            }

            const active = chaptersForDay(day);
            const isToday = isCurrentMonth && today.getDate() === day;

            return (
              <div
                key={day}
                className={`relative aspect-square overflow-hidden rounded-lg sm:rounded-xl ${
                  active.length === 0 ? "bg-[#fffff0]/[0.03]" : ""
                } ${isToday ? "ring-2 ring-[#fffff0]/50" : ""}`}
              >
                {active.length === 1 && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: `${active[0].themeColor}33` }}
                  >
                    <span
                      className="absolute inset-0 opacity-40"
                      style={{ backgroundColor: active[0].themeColor }}
                    />
                  </div>
                )}
                {active.length >= 2 && (
                  <div className="absolute inset-0 flex flex-col">
                    {active.slice(0, 2).map((c) => (
                      <div
                        key={c.id}
                        className="flex-1 opacity-40"
                        style={{ backgroundColor: c.themeColor }}
                      />
                    ))}
                  </div>
                )}
                <span
                  className={`relative flex size-full items-center justify-center text-[11px] font-semibold sm:text-sm ${
                    active.length > 0 ? "text-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {day}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 border-t border-[#fffff0]/10 pt-6">
          {monthChapters.length > 0 ? (
            <div className="space-y-3">
              {monthChapters.map((c) => (
                <Link
                  key={c.id}
                  href={`/varkala?chapter=${c.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-[#fffff0]/10 bg-[#fffff0]/[0.02] p-3 transition hover:bg-[#fffff0]/5"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl sm:size-20">
                    <Image
                      src={c.heroImage}
                      alt={c.navLabel}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className="flex items-center gap-1.5 text-xs font-medium"
                      style={{ color: c.themeColor }}
                    >
                      {c.icon}
                      {c.dateChip}
                    </span>
                    <p className="mt-0.5 truncate font-bold text-foreground">{c.navLabel}</p>
                    <p className="text-sm text-muted-foreground">{c.price}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground"
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[#fffff0]/15 py-8 text-center">
              <p className="font-semibold text-foreground">
                Nothing confirmed for{" "}
                {activeMonth.label.charAt(0) + activeMonth.label.slice(1).toLowerCase()} yet.
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                The next chapter is still taking shape. Message us to be the first to know when it drops.
              </p>
              <a
                href={chapters[0]?.waHref}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#052e16] transition hover:scale-[1.03]"
              >
                <MessageCircle size={14} />
                Notify me
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
