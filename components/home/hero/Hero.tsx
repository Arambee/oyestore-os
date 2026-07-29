"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07090F]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#312E81_0%,transparent_45%)] opacity-40" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
          Curated Weekends • Creator Led • Small Groups
        </span>

        <h1 className="max-w-4xl text-6xl font-black leading-none tracking-tight text-white md:text-8xl">
          Where Will
          <br />
          Your Story
          <br />
          Begin?
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          Hidden places. Extraordinary people. Carefully curated journeys that
          feel less like holidays and more like stories you&apos;ll tell for years.
        </p>

        <div className="mt-10">
          <Link
            href="/explore"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-black transition hover:scale-105"
          >
            Explore Experiences
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}