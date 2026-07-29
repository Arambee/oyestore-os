import { MapPin, Sun } from "lucide-react";

export default function WeatherWidget() {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-muted-foreground">
        WHERE ARE WE?
      </p>

      <div className="mt-3 flex items-center gap-2 text-foreground">
        <MapPin
          size={16}
          className="text-champagne"
        />
        <span className="font-bold">Bengaluru</span>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <Sun
          size={15}
          className="text-champagne"
        />
        <span>22°C · Light Rain</span>
      </div>
    </div>
  );
}
