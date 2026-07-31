export type IndiaRegion = "North" | "South" | "East" | "West" | "Central" | "Northeast";

export interface IndiaState {
  id: string;
  name: string;
  region: IndiaRegion;
}

// The full index of states & union territories the vault is meant to cover.
// Most entries have no chapter written yet -- that's the point. As real
// intel comes in from creators and the community, a matching chapter
// appears in seasonsByOyestore.ts and this entry stops being a stub.
export const statesOfIndia: IndiaState[] = [
  { id: "punjab", name: "Punjab", region: "North" },
  { id: "haryana", name: "Haryana", region: "North" },
  { id: "himachal-pradesh", name: "Himachal Pradesh", region: "North" },
  { id: "uttarakhand", name: "Uttarakhand", region: "North" },
  { id: "uttar-pradesh", name: "Uttar Pradesh", region: "North" },
  { id: "rajasthan", name: "Rajasthan", region: "North" },
  { id: "delhi", name: "Delhi", region: "North" },
  { id: "chandigarh", name: "Chandigarh", region: "North" },
  { id: "jammu-and-kashmir", name: "Jammu and Kashmir", region: "North" },
  { id: "ladakh", name: "Ladakh", region: "North" },

  { id: "kerala", name: "Kerala", region: "South" },
  { id: "tamil-nadu", name: "Tamil Nadu", region: "South" },
  { id: "karnataka", name: "Karnataka", region: "South" },
  { id: "andhra-pradesh", name: "Andhra Pradesh", region: "South" },
  { id: "telangana", name: "Telangana", region: "South" },
  { id: "puducherry", name: "Puducherry", region: "South" },
  { id: "lakshadweep", name: "Lakshadweep", region: "South" },
  { id: "andaman-and-nicobar-islands", name: "Andaman and Nicobar Islands", region: "South" },

  { id: "goa", name: "Goa", region: "West" },
  { id: "maharashtra", name: "Maharashtra", region: "West" },
  { id: "gujarat", name: "Gujarat", region: "West" },
  {
    id: "dadra-and-nagar-haveli-and-daman-and-diu",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    region: "West",
  },

  { id: "west-bengal", name: "West Bengal", region: "East" },
  { id: "odisha", name: "Odisha", region: "East" },
  { id: "bihar", name: "Bihar", region: "East" },
  { id: "jharkhand", name: "Jharkhand", region: "East" },

  { id: "madhya-pradesh", name: "Madhya Pradesh", region: "Central" },
  { id: "chhattisgarh", name: "Chhattisgarh", region: "Central" },

  { id: "assam", name: "Assam", region: "Northeast" },
  { id: "arunachal-pradesh", name: "Arunachal Pradesh", region: "Northeast" },
  { id: "manipur", name: "Manipur", region: "Northeast" },
  { id: "meghalaya", name: "Meghalaya", region: "Northeast" },
  { id: "mizoram", name: "Mizoram", region: "Northeast" },
  { id: "nagaland", name: "Nagaland", region: "Northeast" },
  { id: "sikkim", name: "Sikkim", region: "Northeast" },
  { id: "tripura", name: "Tripura", region: "Northeast" },
];

export const regionOrder: IndiaRegion[] = [
  "North",
  "South",
  "West",
  "East",
  "Central",
  "Northeast",
];
