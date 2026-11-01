"use client";

import React from "react";
import Image from "next/image";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholder-images";

const MARQUEE_TAGS_1 = [
  "Pre-Book Your Slot",
  "Pickup or Delivery",
  "Skip the Long Queue",
  "Real-Time Availability",
  "Student Delivery Network",
  "Lower Delivery Cost",
];

const MARQUEE_TAGS_2 = [
  "VIT-AP Campus Specific",
  "Zero Long Waits",
  "Fast Hostel Delivery",
  "Support Campus Outlets",
  "Earn Pocket Money",
  "Affordable Flat Fees",
];

export const IconMarquee: React.FC = () => {
  return (
    <section className="relative bg-dark py-8 overflow-hidden select-none border-b-3 border-dark text-cream">
      {/* Ribbon 1: Moving Left */}
      <div className="flex whitespace-nowrap overflow-hidden py-2">
        <div className="flex items-center gap-6 animate-marquee-left shrink-0">
          {MARQUEE_TAGS_1.concat(MARQUEE_TAGS_1).map((tag, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-londrina uppercase text-2xl sm:text-3xl tracking-wide text-orange">
                {tag}
              </span>
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src={
                    idx % 2 === 0
                      ? PLACEHOLDER_IMAGES.stickerBurger
                      : PLACEHOLDER_IMAGES.stickerStar
                  }
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ribbon 2: Moving Right */}
      <div className="flex whitespace-nowrap overflow-hidden py-2 border-t border-cream/15 mt-2">
        <div className="flex items-center gap-6 animate-marquee-right shrink-0">
          {MARQUEE_TAGS_2.concat(MARQUEE_TAGS_2).map((tag, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-londrina uppercase text-2xl sm:text-3xl tracking-wide text-cream">
                {tag}
              </span>
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src={
                    idx % 2 === 0
                      ? PLACEHOLDER_IMAGES.stickerSparkle
                      : PLACEHOLDER_IMAGES.stickerPizza
                  }
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
