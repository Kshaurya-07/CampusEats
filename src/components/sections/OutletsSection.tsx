"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Utensils, Clock, ShoppingBag, Bike, Sparkles, AlertCircle } from "lucide-react";
import { SAMPLE_OUTLETS_DATA, MenuItem } from "@/data/sample-outlets";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "../ui/Button";

interface OutletsSectionProps {
  onJoinWaitlist: () => void;
}

export const OutletsSection: React.FC<OutletsSectionProps> = ({ onJoinWaitlist }) => {
  const [activeTab, setActiveTab] = useState<"meals" | "snacks" | "beverages">("meals");
  const [deliveryMode, setDeliveryMode] = useState<"all" | "pickup" | "delivery">("all");

  const filteredItems = SAMPLE_OUTLETS_DATA.filter((item) => {
    if (item.category !== activeTab) return false;
    if (deliveryMode === "pickup" && !item.supportsPickup) return false;
    if (deliveryMode === "delivery" && !item.supportsDelivery) return false;
    return true;
  });

  return (
    <section id="outlets" className="relative bg-cream text-dark py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Campus Outlets & Menus"
          badgeVariant="orange"
          title="Explore VIT-AP Food Street"
          subtitle="A digital preview of beloved campus eateries, freshly prepared meals, and late-night snacks."
          theme="cream"
        />

        {/* SAMPLE DATA Notice Banner */}
        <div className="mt-8 max-w-2xl mx-auto bg-dark/5 border-2 border-dashed border-dark/30 rounded-2xl p-3 sm:p-4 flex items-center gap-3 text-xs sm:text-sm font-inter text-dark/80">
          <AlertCircle className="w-5 h-5 text-orange shrink-0" />
          <p>
            <strong>SAMPLE DATA PREVIEW:</strong> Outlets and menu pricing shown below represent
            sample campus offerings. Official partner onboarding for 5–10 outlets is scheduled for Jan 2027.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-b-2 border-dark/15 pb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-dark/10 rounded-full border border-dark/20">
            {(["meals", "snacks", "beverages"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-andika text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-dark text-cream shadow-[2px_3px_0px_#ff9500]"
                    : "text-dark/80 hover:text-dark hover:bg-dark/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Delivery Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-andika font-bold uppercase tracking-wider text-dark/70">
              Service:
            </span>
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border-2 border-dark shadow-[2px_2px_0px_#401500]">
              <button
                onClick={() => setDeliveryMode("all")}
                className={`px-3 py-1 rounded-full text-xs font-andika font-bold transition-all ${
                  deliveryMode === "all" ? "bg-orange text-dark" : "text-dark hover:bg-dark/5"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDeliveryMode("pickup")}
                className={`px-3 py-1 rounded-full text-xs font-andika font-bold flex items-center gap-1 transition-all ${
                  deliveryMode === "pickup" ? "bg-orange text-dark" : "text-dark hover:bg-dark/5"
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" /> Pickup
              </button>
              <button
                onClick={() => setDeliveryMode("delivery")}
                className={`px-3 py-1 rounded-full text-xs font-andika font-bold flex items-center gap-1 transition-all ${
                  deliveryMode === "delivery" ? "bg-orange text-dark" : "text-dark hover:bg-dark/5"
                }`}
              >
                <Bike className="w-3.5 h-3.5" /> Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border-3 border-dark shadow-[5px_6px_0px_#401500] hover:shadow-[7px_9px_0px_#ff9500] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Item Photo + Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark/20 border-b-2 border-dark">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Real-time Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-andika font-bold border-2 border-dark shadow-[2px_2px_0px_#401500] ${
                      item.status === "open"
                        ? "bg-green-400 text-dark"
                        : item.status === "busy"
                        ? "bg-amber-300 text-dark"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.status === "open"
                          ? "bg-dark animate-pulse"
                          : item.status === "busy"
                          ? "bg-dark"
                          : "bg-gray-500"
                      }`}
                    />
                    {item.statusText}
                  </span>
                </div>

                {/* Veg / Non-Veg Indicator */}
                <div className="absolute top-3 right-3 bg-white p-1 rounded-md border border-dark">
                  <span
                    className={`w-3 h-3 rounded-full block border ${
                      item.isVeg ? "bg-green-600 border-green-700" : "bg-red-600 border-red-700"
                    }`}
                  />
                </div>
              </div>

              {/* Item Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-andika font-bold text-dark/60 block truncate mb-1">
                    {item.outletName}
                  </span>
                  <h3 className="font-londrina uppercase text-2xl text-dark tracking-wide leading-tight group-hover:text-orange-logo transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-inter text-xs text-dark/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t-2 border-dark/10 flex items-center justify-between">
                  <div>
                    <span className="font-londrina text-3xl text-dark leading-none">
                      ₹{item.priceINR}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-inter text-dark/60 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{item.prepTimeMinutes}</span>
                    </div>
                  </div>

                  <button
                    onClick={onJoinWaitlist}
                    className="px-4 py-2 bg-orange text-dark font-andika font-bold text-xs rounded-full border-2 border-dark shadow-[2px_2px_0px_#401500] hover:bg-orange-hover hover:scale-105 active:scale-95 transition-all"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="font-inter text-sm text-dark/70 mb-4">
            Are you a VIT-AP campus food outlet manager? We are onboarding partners for the Jan 2027 pilot.
          </p>
          <Button variant="dark" size="md" onClick={onJoinWaitlist} showArrow>
            Partner With CampusEats
          </Button>
        </div>
      </div>
    </section>
  );
};
