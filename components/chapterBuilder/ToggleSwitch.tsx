import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  checked: boolean;
  className?: string;
}

export default function ToggleSwitch({ checked, className }: ToggleSwitchProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 ease-out",
        checked ? "bg-pearl" : "bg-white/15",
        className,
      )}
    >
      <span
        className={cn(
          "inline-block size-4 transform rounded-full bg-midnight transition-transform duration-300 ease-out",
          checked ? "translate-x-6" : "translate-x-1",
        )}
      />
    </span>
  );
}
