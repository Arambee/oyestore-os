export const SUNRISE_HOUR = 6;
export const SUNSET_HOUR = 18;

export function isRainCondition(condition: string): boolean {
  return /rain/i.test(condition);
}

export interface SunPosition {
  leftPct: number;
  topPct: number;
  isDaytime: boolean;
}

/** Maps the current local time onto a day-arc position for the sun. */
export function getSunPosition(date: Date): SunPosition {
  const hours = date.getHours() + date.getMinutes() / 60;
  const isDaytime = hours >= SUNRISE_HOUR && hours <= SUNSET_HOUR;
  const dayFraction = Math.min(
    Math.max((hours - SUNRISE_HOUR) / (SUNSET_HOUR - SUNRISE_HOUR), 0),
    1,
  );
  const arc = Math.sin(dayFraction * Math.PI);
  return {
    leftPct: 10 + dayFraction * 80,
    topPct: 68 - arc * 50,
    isDaytime,
  };
}
