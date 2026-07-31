"use client";

import { useState } from "react";

import ActivitiesSection from "./ActivitiesSection";
import { AUTO_MATCH, useChapterBuilder } from "./ChapterBuilderContext";
import FoodSection from "./FoodSection";
import GuideSection from "./GuideSection";
import HostSection from "./HostSection";
import ItinerarySection from "./ItinerarySection";
import LockedTripSummary from "./LockedTripSummary";
import MobilePriceBar from "./MobilePriceBar";
import RoomSharingSection from "./RoomSharingSection";
import StaySection from "./StaySection";
import TransportSection from "./TransportSection";
import TravelStyleSection from "./TravelStyleSection";
import WhosTravellingSection from "./WhosTravellingSection";

type SectionKey =
  | "stay"
  | "guide"
  | "travelStyle"
  | "activities"
  | "food"
  | "transport"
  | "roomSharing"
  | "host";

export default function ChapterBuilderSections() {
  const { isGroupLocked, groupHostChoice, matchedHost } = useChapterBuilder();
  const [openSection, setOpenSection] = useState<SectionKey | null>(
    isGroupLocked ? "travelStyle" : "stay",
  );

  const toggle = (key: SectionKey) => () =>
    setOpenSection((current) => (current === key ? null : key));

  return (
    <>
      <WhosTravellingSection />

      <MobilePriceBar />

      {isGroupLocked ? (
        <>
          <TravelStyleSection isOpen={openSection === "travelStyle"} onToggle={toggle("travelStyle")} />
          <HostSection isOpen={openSection === "host"} onToggle={toggle("host")} />
          {matchedHost && (
            <LockedTripSummary
              host={matchedHost}
              wasAutoMatched={groupHostChoice === AUTO_MATCH}
            />
          )}
          <ItinerarySection />
        </>
      ) : (
        <>
          <StaySection isOpen={openSection === "stay"} onToggle={toggle("stay")} />
          <GuideSection isOpen={openSection === "guide"} onToggle={toggle("guide")} />
          <TravelStyleSection isOpen={openSection === "travelStyle"} onToggle={toggle("travelStyle")} />
          <ActivitiesSection isOpen={openSection === "activities"} onToggle={toggle("activities")} />
          <FoodSection isOpen={openSection === "food"} onToggle={toggle("food")} />
          <TransportSection isOpen={openSection === "transport"} onToggle={toggle("transport")} />
          <RoomSharingSection isOpen={openSection === "roomSharing"} onToggle={toggle("roomSharing")} />
          <ItinerarySection />
        </>
      )}
    </>
  );
}
