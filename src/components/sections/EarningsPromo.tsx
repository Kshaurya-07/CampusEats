"use client";

import React from "react";
import { Sparkles, Bike, DollarSign } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { EarningsSlider } from "../ui/EarningsSlider";
import { Button } from "../ui/Button";

interface EarningsPromoProps {
  onJoinDeliveryWaitlist: () => void;
}

export const EarningsPromo: React.FC<EarningsPromoProps> = ({
  onJoinDeliveryWaitlist,
}) => {
  return (
    <section className="relative bg-orange py-20 px-4 sm:px-6 overflow-hidden border-y-3 border-dark text-dark">
      {/* Decorative Background Elements */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-dark text-cream text-xs font-andika font-bold uppercase tracking-wider border border-dark">
              <Bike className="w-4 h-4 text-orange" /> Student Opportunities
            </span>

            <h2 className="font-londrina uppercase text-4xl sm:text-6xl text-dark leading-[0.95] tracking-tight">
              Earn ₹5–₹10 Per Delivery During Your Free Hours
            </h2>

            <p className="font-inter text-base sm:text-lg text-dark/85 leading-relaxed">
              Walking back from your academic block to the hostel? Pick up an order on your route and
              earn pocket money effortlessly. No rigid shifts, no boss, 100% student-powered.
            </p>

            <ul className="space-y-2.5 font-inter text-sm sm:text-base text-dark/90 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-dark text-cream flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                Deliver on foot or cycle between classes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-dark text-cream flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                Keep 100% of your delivery earnings (₹5–₹10 per drop)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-dark text-cream flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                Zero platform cuts or hidden commission deductions
              </li>
            </ul>

            <div className="pt-2">
              <Button
                variant="dark"
                size="lg"
                onClick={onJoinDeliveryWaitlist}
                showArrow
              >
                Become a Delivery Partner
              </Button>
            </div>
          </div>

          {/* Right Interactive Earnings Calculator */}
          <div className="lg:col-span-6">
            <EarningsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
