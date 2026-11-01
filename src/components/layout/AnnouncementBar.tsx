"use client";

import React from "react";
import Image from "next/image";
import { CAMPUS_LOCATION, LAUNCH_TIMELINE, PRICING_INFO } from "@/constants/brand";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholder-images";

interface AnnouncementBarProps {
  onJoinWaitlist?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onJoinWaitlist }) => {
  return (
    <div className="relative bg-orange text-dark border-b-2 border-dark z-40 py-1.5 px-3 sm:px-4 text-xs sm:text-sm font-andika font-bold tracking-tight overflow-hidden select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Item */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-4 h-4 relative shrink-0">
            <Image
              src={PLACEHOLDER_IMAGES.stickerPin}
              alt="Location"
              fill
              className="object-contain"
            />
          </div>
          <span className="truncate">{CAMPUS_LOCATION}</span>
        </div>

        {/* Center Item (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2 text-xs">
          <div className="w-4 h-4 relative shrink-0">
            <Image
              src={PLACEHOLDER_IMAGES.stickerBurger}
              alt="Food"
              fill
              className="object-contain"
            />
          </div>
          <span>Delivery fee just {PRICING_INFO.deliveryFee}</span>
          <span className="text-dark/40">•</span>
          <div className="w-4 h-4 relative shrink-0">
            <Image
              src={PLACEHOLDER_IMAGES.stickerPizza}
              alt="Fast"
              fill
              className="object-contain"
            />
          </div>
          <span>Doorstep or Counter Pickup</span>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden md:inline-block font-semibold text-xs">
            {LAUNCH_TIMELINE}
          </span>
          <button
            onClick={onJoinWaitlist}
            className="bg-dark text-cream text-[10px] sm:text-xs font-andika font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-dark hover:bg-[#2c0e00] transition-colors cursor-pointer shrink-0"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};
