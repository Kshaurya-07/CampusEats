"use client";

import React from "react";
import Image from "next/image";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholder-images";

export const BigMarquee: React.FC = () => {
  const marqueeItems = [
    "Quick",
    "Reliable",
    "Affordable",
    "Quick",
    "Reliable",
    "Affordable",
  ];

  return (
    <section className="relative bg-cream py-6 sm:py-8 overflow-hidden select-none border-b-2 border-dark">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-6 sm:gap-10 animate-marquee-left shrink-0">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-10">
              <span className="font-londrina uppercase text-5xl sm:text-7xl md:text-8xl text-dark tracking-tight">
                {text}.
              </span>
              <div className="w-8 h-8 sm:w-12 sm:h-12 relative rotate-12 shrink-0">
                <Image
                  src={
                    idx % 3 === 0
                      ? PLACEHOLDER_IMAGES.stickerBurger
                      : idx % 3 === 1
                      ? PLACEHOLDER_IMAGES.stickerPizza
                      : PLACEHOLDER_IMAGES.stickerSparkle
                  }
                  alt="Sticker"
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
