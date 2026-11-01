"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { HERO_HEADLINE, BRAND_TAGLINE, PRICING_INFO, CAMPUS_LOCATION } from "@/constants/brand";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholder-images";
import { PillBadge } from "../common/PillBadge";
import { Button } from "../ui/Button";
import { TornEdge } from "../common/TornEdge";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

interface SlideItem {
  id: number;
  label: string;
  badge: string;
  image: string;
  caption: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    label: "Order Food",
    badge: "Queue-Free Ordering",
    image: PLACEHOLDER_IMAGES.heroSlide1,
    caption: "Order directly from VIT-AP Food Street outlets without standing in long counter queues.",
  },
  {
    id: 2,
    label: "Pre-book Orders",
    badge: "Slot Scheduling",
    image: PLACEHOLDER_IMAGES.heroSlide2,
    caption: "Book your lunch or snack slot between lecture breaks so meals are ready when you arrive.",
  },
  {
    id: 3,
    label: "Dorm Delivery",
    badge: "Doorstep Drop-off",
    image: PLACEHOLDER_IMAGES.heroSlide3,
    caption: "Get food delivered directly to your hostel block for an affordable fee of just ₹10–20.",
  },
  {
    id: 4,
    label: "Earn on Campus",
    badge: "Student Delivery",
    image: PLACEHOLDER_IMAGES.heroSlide4,
    caption: "Earn ₹5–₹10 per delivery during your free hours as a student delivery partner.",
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinWaitlist }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto advance slides every 6s unless reduced motion is preferred
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section id="hero" className="relative bg-dark text-cream pt-12 sm:pt-16 pb-16 overflow-hidden">
      {/* Decorative Floating Tilted Sticker Chips (Hotbite signature aesthetic) */}
      <div className="absolute top-10 left-6 sm:left-16 z-20 pointer-events-none hidden md:block">
        <PillBadge variant="orange" rotate="-rotate-6" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Quick
        </PillBadge>
      </div>
      <div className="absolute top-14 right-8 sm:right-20 z-20 pointer-events-none hidden md:block">
        <PillBadge variant="cream" rotate="rotate-4">
          Reliable
        </PillBadge>
      </div>
      <div className="absolute bottom-28 left-8 sm:left-24 z-20 pointer-events-none hidden lg:block">
        <PillBadge variant="dark" rotate="-rotate-3">
          Affordable ({PRICING_INFO.deliveryFee})
        </PillBadge>
      </div>
      <div className="absolute bottom-32 right-10 sm:right-24 z-20 pointer-events-none hidden lg:block">
        <PillBadge variant="orange" rotate="rotate-6">
          Real-time Availability
        </PillBadge>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* Top Location Pill */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-cream/15 text-cream border border-cream/30 px-4 py-1 rounded-full text-xs font-andika uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            {CAMPUS_LOCATION} · Pre-launch MVP
          </span>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-londrina uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-[0.92] text-cream">
            <span className="block sm:inline">Your Campus. </span>
            <span className="block sm:inline">Your Food. </span>
            <span className="block sm:inline">Your Time.</span>
          </h1>
          <p className="mt-5 text-base sm:text-xl md:text-2xl font-inter text-cream/80 max-w-3xl mx-auto leading-relaxed">
            {BRAND_TAGLINE}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="orange" size="lg" onClick={onJoinWaitlist} showArrow>
              Join the Waitlist
            </Button>
            <a
              href="#about"
              className="px-6 py-3.5 rounded-full border-2 border-cream/40 text-cream font-andika font-bold text-base sm:text-lg hover:bg-cream/10 transition-colors inline-block"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Interactive Carousel Visual Box */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="relative bg-cream rounded-3xl border-4 border-cream shadow-[8px_12px_0px_#ff9500] overflow-hidden text-dark">
            {/* Visual Frame */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-dark">
              {HERO_SLIDES.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    priority={index <= 1}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Caption on image */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-16 sm:right-24 text-cream z-20">
                    <span className="inline-block px-3 py-1 bg-orange text-dark font-andika font-bold text-xs rounded-full uppercase tracking-wider mb-1.5 border border-dark">
                      {slide.badge}
                    </span>
                    <h3 className="font-londrina text-2xl sm:text-4xl uppercase tracking-wide leading-tight">
                      {slide.label}
                    </h3>
                    <p className="text-xs sm:text-sm font-inter text-cream/90 max-w-lg mt-1 line-clamp-2">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Round Carousel Navigation Arrows (Hotbite style) */}
              <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous hero slide"
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-cream text-dark border-2 border-dark shadow-[2px_2px_0px_#401500] hover:bg-orange hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next hero slide"
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-cream text-dark border-2 border-dark shadow-[2px_2px_0px_#401500] hover:bg-orange hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Carousel Tabs under preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t-2 border-dark divide-x-2 divide-dark bg-cream">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  className={`py-3 px-2 sm:px-4 text-center transition-colors font-andika text-xs sm:text-sm font-bold uppercase tracking-tight flex items-center justify-center gap-1.5 ${
                    index === activeSlide
                      ? "bg-dark text-cream"
                      : "text-dark/80 hover:bg-dark/5"
                  }`}
                >
                  <span>0{index + 1}.</span>
                  <span className="truncate">{slide.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Torn Paper Edge Transitioning to Section 4 (Big Marquee) */}
      <div className="absolute bottom-0 left-0 right-0">
        <TornEdge position="bottom" color="cream" />
      </div>
    </section>
  );
};
