import { MapPin } from "lucide-react";

import WeatherConditionIcon from "./WeatherConditionIcon";
import WeatherScene from "./WeatherScene";

const LOCATION = "Bengaluru";
const TEMP_C = 28;
const CONDITION = "Sunny";

export default function WeatherWidget() {
  return (
    <div className="glass relative shrink-0 overflow-hidden rounded-2xl p-4">
      <WeatherScene condition={CONDITION} />

      <div className="relative">
        <p className="text-xs font-medium tracking-wider text-muted-foreground">
          WHERE ARE WE?
        </p>

        <div className="mt-3 flex items-center gap-2 text-foreground">
          <MapPin
            size={16}
            className="text-platinum"
          />
          <span className="font-bold">{LOCATION}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <WeatherConditionIcon condition={CONDITION} />
          <span>
            {TEMP_C}°C · {CONDITION}
          </span>
        </div>
      </div>
    </div>
  );
}
