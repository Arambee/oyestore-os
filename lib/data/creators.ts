import type { Creator } from "@/lib/types/dashboard";

export const creators: Creator[] = [
  {
    id: "mehar-sachdeva",
    name: "Mehar Sachdeva",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    tagline: "Cliffs, cafés and slow mornings",
    bio: "Mehar has hosted travellers along Kerala's coast for six seasons running, and still starts every trip with the same cliffside sunset walk she took on her first visit to Varkala.",
    hostedPlaces: [{ stateId: "kerala", placeId: "varkala" }],
  },
  {
    id: "aakash-malhotra",
    name: "Aakash Malhotra",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    tagline: "Tea estates, peaks and pre-dawn treks",
    bio: "A former trekking guide who moved from the Himalayas to the Western Ghats, Aakash hosts the kind of mornings that start before sunrise and end with tea picked that same day.",
    hostedPlaces: [
      { stateId: "kerala", placeId: "munnar" },
      { stateId: "kerala", placeId: "wayanad" },
    ],
  },
  {
    id: "rhea-sharma",
    name: "Rhea Sharma",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    tagline: "French quarters and quiet backwaters",
    bio: "Rhea grew up between Pondicherry's colonial lanes and its backwaters, and hosts the only tour that treats both halves of the town as equally worth slowing down for.",
    hostedPlaces: [{ stateId: "tamil-nadu", placeId: "pondicherry" }],
  },
  {
    id: "kabir-anand",
    name: "Kabir Anand",
    verified: false,
    image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=800&q=80",
    tagline: "Coastlines, forts and quiet coves",
    bio: "Kabir spends his monsoons chasing the coastline south from Goa into Karnataka, hosting small groups who'd rather find a fort at sunset than a crowded beach at noon.",
    hostedPlaces: [
      { stateId: "goa", placeId: "goa" },
      { stateId: "karnataka", placeId: "gokarna" },
    ],
  },
];
