"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Users,
  Store,
  Zap,
  Gift,
  Coins,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { BRAND_NAME, PRICING_INFO } from "@/constants/brand";

interface FeatureCard {
  title: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const ADVANTAGES: FeatureCard[] = [
  {
    title: "Campus-Specific Platform",
    badge: "Tailored for VIT-AP",
    description:
      "Unlike generic delivery apps, CampusEats is custom-engineered for VIT-AP academic blocks, central plazas, and hostel dorm regulations.",
    icon: <MapPin className="w-6 h-6 text-dark" />,
  },
  {
    title: "Real-Time Outlet Availability",
    badge: "No Disappointments",
    description:
      "Live status badges let you know instantly if a stall is open, busy, or preparing fresh batches—saving you wasted trips across campus.",
    icon: <Clock className="w-6 h-6 text-dark" />,
  },
  {
    title: "Student-Powered Delivery Network",
    badge: "100% Student Driven",
    description:
      "Deliveries are fulfilled by verified fellow students walking or cycling along your dorm route, avoiding outside delivery rider security restrictions.",
    icon: <Users className="w-6 h-6 text-dark" />,
  },
  {
    title: "Direct Outlet Partnerships",
    badge: "Close Vendor Synergy",
    description:
      "Direct integration with Food Street vendors ensures orders are prepared for your scheduled pickup slot rather than sitting cold on a counter.",
    icon: <Store className="w-6 h-6 text-dark" />,
  },
  {
    title: "Lower Delivery Time & Cost",
    badge: "Ultra Fast & Cheap",
    description:
      "Micro-distance on-campus delivery eliminates city traffic delays and exorbitant outside delivery markups.",
    icon: <Zap className="w-6 h-6 text-dark" />,
  },
  {
    title: PRICING_INFO.joinFee,
    badge: "Zero Commitment",
    description:
      "Completely free for students to browse, pre-book, and order. No hidden subscription fees or compulsory memberships.",
    icon: <Gift className="w-6 h-6 text-dark" />,
    highlight: true,
  },
  {
    title: `Delivery Fee Just ${PRICING_INFO.deliveryFee}`,
    badge: "Student Budget Friendly",
    description:
      "Affordable flat delivery fees starting at just ₹10–20, keeping delicious food accessible for every student.",
    icon: <Coins className="w-6 h-6 text-dark" />,
    highlight: true,
  },
];

export const WhyCampusEats: React.FC = () => {
  return (
    <section className="relative bg-cream text-dark py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Why CampusEats"
          badgeVariant="orange"
          title="The Campus Food Advantage"
          subtitle="Engineered specifically to solve university dining bottlenecks with speed, reliability, and fair student pricing."
          theme="cream"
        />

        {/* 7 Feature Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ADVANTAGES.map((card, idx) => (
            <div
              key={card.title}
              className={`p-7 rounded-4xl border-3 border-dark transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                card.highlight
                  ? "bg-orange text-dark shadow-[6px_8px_0px_#401500] hover:shadow-[8px_10px_0px_#401500]"
                  : "bg-white text-dark shadow-[5px_6px_0px_#401500] hover:shadow-[7px_9px_0px_#ff9500]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl border-2 border-dark flex items-center justify-center ${
                      card.highlight ? "bg-cream" : "bg-orange"
                    }`}
                  >
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-andika font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-dark/10 border border-dark/20">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-londrina uppercase text-2xl sm:text-3xl text-dark leading-tight mb-2">
                  {card.title}
                </h3>

                <p className="font-inter text-xs sm:text-sm text-dark/80 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dark/10 flex items-center justify-between text-xs font-andika font-bold text-dark/60">
                <span>{BRAND_NAME} Guarantee</span>
                <ShieldCheck className="w-4 h-4 text-dark" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
