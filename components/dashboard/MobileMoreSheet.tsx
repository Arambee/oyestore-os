"use client";

import Link from "next/link";
import { X } from "lucide-react";

import { navigationGroups } from "@/lib/config/navigation";
import { currentUser } from "@/lib/data/dashboard";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogPopup,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

interface MobileMoreSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Home, Explore, Trips, and Saved already live on the tab bar -- don't repeat them here.
const TAB_BAR_HREFS = new Set(["/", "/explore", "/trips", "/saved"]);

const moreGroups = navigationGroups
  .map((group) => ({
    ...group,
    items: group.items.filter((item) => !TAB_BAR_HREFS.has(item.href)),
  }))
  .filter((group) => group.items.length > 0);

export default function MobileMoreSheet({ open, onOpenChange }: MobileMoreSheetProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogPortal keepMounted>
        <DialogBackdrop
          className={cn(
            "transition-opacity duration-200",
            open ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        />

        <DialogPopup
          className={cn(
            "safe-bottom fixed inset-x-0 top-auto bottom-0 left-0 max-h-[80vh] w-full max-w-none translate-x-0 overflow-y-auto rounded-t-3xl rounded-b-none p-6 transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "translate-y-full",
          )}
        >
          <DialogTitle className="sr-only">More</DialogTitle>

          <div className="flex items-center justify-between">
            <Link
              href="/profile"
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-3"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-foreground">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground">{currentUser.plan}</p>
              </div>
            </Link>

            <DialogClose
              aria-label="Close"
              className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground"
            >
              <X size={18} />
            </DialogClose>
          </div>

          <div className="mt-6 space-y-6">
            {moreGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 px-1 text-xs font-medium tracking-wider text-muted-foreground">
                  {group.label.toUpperCase()}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => onOpenChange(false)}
                        className="glass flex min-h-11 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
                      >
                        <Icon size={18} />
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
