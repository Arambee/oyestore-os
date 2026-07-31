export function parseINR(value: string): number {
  return Number(value.replace(/[^\d]/g, "")) || 0;
}

export function formatINR(value: number): string {
  const rounded = Math.round(value);
  const sign = rounded < 0 ? "-" : "";
  return `${sign}₹${Math.abs(rounded).toLocaleString("en-IN")}`;
}

export function formatSignedINR(value: number): string {
  if (value === 0) return "Included";
  const sign = value > 0 ? "+" : "-";
  return `${sign}₹${Math.abs(Math.round(value)).toLocaleString("en-IN")}`;
}
