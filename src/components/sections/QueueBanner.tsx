"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholder-images";

interface QueueBannerProps {
  onJoinWaitlist: () => void;
}

export const QueueBanner: React.FC<QueueBannerProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="relative bg-orange py-20 px-4 sm:px-6 overflow-hidden border-y-3 border-dark text-dark">
      {/* Decorative Stickers */}
      <div className="absolute -top-6 -right-6 w-24 h-24 pointer-events-none opacity-40 sm:opacity-100 rotate-12">
        <Image
          src={PLACEHOLDER_IMAGES.stickerBurger}
          alt="Decorative sticker"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-dark text-cream text-xs font-andika font-bold uppercase tracking-wider mb-4 border border-dark">
          <Sparkles className="w-4 h-4 text-orange" /> Smart Campus Logistics
        </span>

        <h2 className="font-londrina uppercase text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
          Why Wait in a Queue When Your Campus Can Come to You?
        </h2>

        <p className="mt-5 font-inter text-base sm:text-xl text-dark/85 max-w-2xl mx-auto leading-relaxed">
          Reclaim your breaks between classes. Order ahead, schedule your slot, or get meals
          delivered right to your hostel door.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="dark" size="lg" onClick={onJoinWaitlist} showArrow>
            Join the Waitlist
          </Button>
          <a
            href="#roadmap"
            className="px-6 py-3.5 rounded-full border-2 border-dark text-dark font-andika font-bold text-base sm:text-lg hover:bg-dark/10 transition-colors inline-block"
          >
            Explore Roadmap
          </a>
        </div>
      </div>
    </section>
  );
};
