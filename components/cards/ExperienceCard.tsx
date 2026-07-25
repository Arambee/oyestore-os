"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  duration: string;
  price: string;
  image: string;
  seatsLeft: number;
  location?: string;
  featured?: boolean;
}

export default function ExperienceCard({
  title,
  duration,
  price,
  image,
  seatsLeft,
  location,
  featured = false,
}: ExperienceCardProps) {
  return (
    <Link
      href={`/experiences/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="group block w-[340px] overflow-hidden rounded-3xl border border-white/10 bg-[#11141C] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
    >
      <div className="relative h-[440px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {featured && (
          <span className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-xl">
            FEATURED
          </span>
        )}

        <div className="absolute bottom-0 w-full p-6">
          {location && (
            <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
              <MapPin size={15} />
              {location}
            </div>
          )}

          <h3 className="text-3xl font-black text-white">
            {title}
          </h3>

          <p className="mt-1 text-white/70">
            {duration}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-white/50">
                Starting From
              </p>

              <p className="text-xl font-bold text-white">
                {price}
              </p>
            </div>

            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-lg">
              {seatsLeft} Seats
            </span>
          </div>

          <div className="mt-6 flex items-center gap-2 font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            Explore
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}