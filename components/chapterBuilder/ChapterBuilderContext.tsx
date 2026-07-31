"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import {
  ROOM_SHARING_OPTIONS,
  STAY_OPTIONS,
  TRANSPORT_OPTIONS,
  ACTIVITY_OPTIONS,
  HOST_OPTIONS,
  GUIDE_OPTIONS,
  TRAVEL_STYLE_OPTIONS,
  TRAVEL_STYLE_TO_GUIDE,
} from "@/lib/data/chapterBuilder";
import type {
  GuideAssignment,
  HostOption,
  PartyType,
  PriceBreakdown,
  TripMode,
} from "@/lib/types/chapterBuilder";

export const AUTO_MATCH = "auto-match" as const;

interface ChapterBuilderValue {
  placeName: string;

  partyType: PartyType;
  setPartyType: (type: PartyType) => void;
  tripMode: TripMode;
  setTripMode: (mode: TripMode) => void;

  selectedStay: string;
  setSelectedStay: (id: string) => void;
  selectedStayProperty: string;
  setSelectedStayProperty: (id: string) => void;

  guideAssignment: GuideAssignment;
  setGuideAssignment: (value: GuideAssignment) => void;
  selectedGuide: string;
  setSelectedGuide: (id: string) => void;
  effectiveGuideId: string;

  selectedTravelStyle: string;
  setSelectedTravelStyle: (id: string) => void;

  selectedActivities: string[];
  toggleActivity: (id: string) => void;

  selectedFood: string[];
  toggleFood: (id: string) => void;

  selectedTransport: string;
  setSelectedTransport: (id: string) => void;
  selectedTransportVendor: string;
  setSelectedTransportVendor: (id: string) => void;

  selectedRoomSharing: string;
  setSelectedRoomSharing: (id: string) => void;

  isGroupLocked: boolean;
  groupHostChoice: string | null;
  setGroupHostChoice: (id: string | null) => void;
  matchedHost: HostOption | null;

  priceBreakdown: PriceBreakdown;
}

const ChapterBuilderCtx = createContext<ChapterBuilderValue | null>(null);

interface ChapterBuilderProviderProps {
  placeName: string;
  basePrice: number;
  children: ReactNode;
}

function computeBreakdown(
  basePrice: number,
  stayId: string,
  activityIds: string[],
  transportId: string,
  roomSharingId: string,
  stayPropertyId?: string,
  transportVendorId?: string,
): PriceBreakdown {
  const stayOption = STAY_OPTIONS.find((s) => s.id === stayId);
  const stayProperty = stayOption?.properties.find((p) => p.id === stayPropertyId);
  const stay = (stayOption?.priceDelta ?? 0) + (stayProperty?.priceDelta ?? 0);

  const activities = activityIds.reduce(
    (sum, id) => sum + (ACTIVITY_OPTIONS.find((a) => a.id === id)?.cost ?? 0),
    0,
  );

  const transportOption = TRANSPORT_OPTIONS.find((t) => t.id === transportId);
  const transportVendor = transportOption?.vendors.find((v) => v.id === transportVendorId);
  const transport = (transportOption?.priceDelta ?? 0) + (transportVendor?.priceDelta ?? 0);

  const addOns = ROOM_SHARING_OPTIONS.find((r) => r.id === roomSharingId)?.priceDelta ?? 0;
  const total = basePrice + stay + activities + transport + addOns;
  return { base: basePrice, stay, activities, transport, addOns, total };
}

export function ChapterBuilderProvider({
  placeName,
  basePrice,
  children,
}: ChapterBuilderProviderProps) {
  const [partyType, setPartyType] = useState<PartyType>("solo");
  const [tripMode, setTripModeState] = useState<TripMode>("private-tour");

  const [selectedStay, setSelectedStay] = useState(STAY_OPTIONS[2].id);
  const [selectedStayProperty, setSelectedStayProperty] = useState(
    STAY_OPTIONS[2].properties[0].id,
  );
  const [guideAssignment, setGuideAssignment] = useState<GuideAssignment>("manual");
  const [selectedGuide, setSelectedGuide] = useState(GUIDE_OPTIONS[0].id);

  const [selectedTravelStyle, setSelectedTravelStyle] = useState(TRAVEL_STYLE_OPTIONS[0].id);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [selectedTransport, setSelectedTransport] = useState(TRANSPORT_OPTIONS[0].id);
  const [selectedTransportVendor, setSelectedTransportVendor] = useState(
    TRANSPORT_OPTIONS[0].vendors[0].id,
  );
  const [selectedRoomSharing, setSelectedRoomSharing] = useState(ROOM_SHARING_OPTIONS[2].id);

  const [groupHostChoice, setGroupHostChoice] = useState<string | null>(null);

  const setTripMode = (mode: TripMode) => {
    setTripModeState(mode);
    if (mode === "private-tour") {
      setGroupHostChoice(null);
    }
  };

  const setSelectedStayWithDefaultProperty = (id: string) => {
    setSelectedStay(id);
    const stay = STAY_OPTIONS.find((s) => s.id === id);
    if (stay) setSelectedStayProperty(stay.properties[0].id);
  };

  const setSelectedTransportWithDefaultVendor = (id: string) => {
    setSelectedTransport(id);
    const transport = TRANSPORT_OPTIONS.find((t) => t.id === id);
    if (transport) setSelectedTransportVendor(transport.vendors[0].id);
  };

  const toggleActivity = (id: string) =>
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const toggleFood = (id: string) =>
    setSelectedFood((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const isGroupLocked = tripMode === "group-travel";

  const matchedHost = useMemo<HostOption | null>(() => {
    if (!isGroupLocked || !groupHostChoice) return null;
    if (groupHostChoice === AUTO_MATCH) {
      const byStyle = HOST_OPTIONS.find((h) => h.matchStyles.includes(selectedTravelStyle));
      return byStyle ?? HOST_OPTIONS[0];
    }
    return HOST_OPTIONS.find((h) => h.id === groupHostChoice) ?? null;
  }, [isGroupLocked, groupHostChoice, selectedTravelStyle]);

  const effectiveGuideId = useMemo(() => {
    if (isGroupLocked) return matchedHost?.package.guideId ?? GUIDE_OPTIONS[0].id;
    if (guideAssignment === "auto") {
      return TRAVEL_STYLE_TO_GUIDE[selectedTravelStyle] ?? GUIDE_OPTIONS[0].id;
    }
    return selectedGuide;
  }, [isGroupLocked, matchedHost, guideAssignment, selectedTravelStyle, selectedGuide]);

  const priceBreakdown = useMemo<PriceBreakdown>(() => {
    if (isGroupLocked && matchedHost) {
      return computeBreakdown(
        basePrice,
        matchedHost.package.stayId,
        matchedHost.package.activityIds,
        matchedHost.package.transportId,
        matchedHost.package.roomSharingId,
      );
    }
    return computeBreakdown(
      basePrice,
      selectedStay,
      selectedActivities,
      selectedTransport,
      selectedRoomSharing,
      selectedStayProperty,
      selectedTransportVendor,
    );
  }, [
    isGroupLocked,
    matchedHost,
    basePrice,
    selectedStay,
    selectedActivities,
    selectedTransport,
    selectedRoomSharing,
    selectedStayProperty,
    selectedTransportVendor,
  ]);

  return (
    <ChapterBuilderCtx.Provider
      value={{
        placeName,
        partyType,
        setPartyType,
        tripMode,
        setTripMode,
        selectedStay,
        setSelectedStay: setSelectedStayWithDefaultProperty,
        selectedStayProperty,
        setSelectedStayProperty,
        guideAssignment,
        setGuideAssignment,
        selectedGuide,
        setSelectedGuide,
        effectiveGuideId,
        selectedTravelStyle,
        setSelectedTravelStyle,
        selectedActivities,
        toggleActivity,
        selectedFood,
        toggleFood,
        selectedTransport,
        setSelectedTransport: setSelectedTransportWithDefaultVendor,
        selectedTransportVendor,
        setSelectedTransportVendor,
        selectedRoomSharing,
        setSelectedRoomSharing,
        isGroupLocked,
        groupHostChoice,
        setGroupHostChoice,
        matchedHost,
        priceBreakdown,
      }}
    >
      {children}
    </ChapterBuilderCtx.Provider>
  );
}

export function useChapterBuilder() {
  const ctx = useContext(ChapterBuilderCtx);
  if (!ctx) {
    throw new Error("useChapterBuilder must be used within a ChapterBuilderProvider");
  }
  return ctx;
}
