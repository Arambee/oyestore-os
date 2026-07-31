"use client";

import { useEffect, useState } from "react";
import { CloudRain, Moon, Sun } from "lucide-react";

import { getSunPosition, isRainCondition } from "@/lib/utils/weather";

interface WeatherConditionIconProps {
  condition: string;
  size?: number;
  className?: string;
}

export default function WeatherConditionIcon({
  condition,
  size = 15,
  className = "text-platinum",
}: WeatherConditionIconProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (isRainCondition(condition)) {
    return (
      <CloudRain
        size={size}
        className={className}
      />
    );
  }

  const { isDaytime } = getSunPosition(now ?? new Date());
  return isDaytime ? (
    <Sun
      size={size}
      className={className}
    />
  ) : (
    <Moon
      size={size}
      className={className}
    />
  );
}
