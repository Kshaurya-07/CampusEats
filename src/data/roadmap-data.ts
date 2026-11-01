export interface RoadmapPhase {
  phase: "Now" | "Next" | "Later";
  timeline: string;
  badge: string;
  title: string;
  points: string[];
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Now",
    timeline: "Launching Jan 2027",
    badge: "MVP Stage",
    title: "Core Campus Food Ordering",
    points: [
      "Onboarding 5–10 partner food outlets at VIT-AP Food Street",
      "Slot-based pre-booking to eliminate counter queues",
      "Dorm doorstep delivery & scheduled counter pickup",
      "Student delivery partner network earning ₹5–₹10 per delivery",
      "Affordable flat delivery fee of just ₹10–20",
    ],
  },
  {
    phase: "Next",
    timeline: "Post-Launch Q2 2027",
    badge: "Expansion",
    title: "Loyalty, Perks & More Outlets",
    points: [
      "CampusEats student loyalty rewards & meal subscriptions",
      "Introductory student offers, combos, and flat discounts",
      "Onboarding additional food outlets and nighttime canteens",
      "Live order tracking with automated SMS/WhatsApp alerts",
    ],
  },
  {
    phase: "Later",
    timeline: "Future Horizon",
    badge: "Full Ecosystem",
    title: "Campus-Wide Marketplace",
    points: [
      "Dedicated ordering channels for faculty and campus staff",
      "Club event catering & bulk classroom treats coordination",
      "Everyday student essentials, stationery, and dorm needs",
      "Inter-block micro-logistics and campus utility services",
    ],
  },
];
