"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Compass, CalendarClock, Bike } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { TornEdge } from "../common/TornEdge";

const DARK_BROWN_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDYiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjYiIGZpbGw9IiM0MDE1MDAiLz48L3N2Zz4=";

interface HowItWorksStep {
  step: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

const STEPS: HowItWorksStep[] = [
  {
    step: "01",
    badge: "Step 1: Explore",
    title: "Discover campus menus",
    description:
      "Browse live menus, breakfast specials, lunch combos, and snacks from Food Street stalls right from your phone.",
    image: "/images/how-it-works/step-1-explore.jpg",
    alt: "Spread of Indian dishes: biryani, curry, naan, samosas and chai",
    icon: <Compass className="w-5 h-5 text-dark" />,
  },
  {
    step: "02",
    badge: "Step 2: Schedule",
    title: "Pre-book your time slot",
    description:
      "Know when your class ends? Lock in your delivery or pickup time window in advance so outlets prepare your meal on schedule.",
    image: "/images/how-it-works/step-2-schedule.jpg",
    alt: "Steaming latte with latte art",
    icon: <CalendarClock className="w-5 h-5 text-dark" />,
  },
  {
    step: "03",
    badge: "Step 3: Enjoy",
    title: "Skip queues & grab food",
    description:
      "Collect your freshly packed meal straight from the pickup counter without waiting, or have student partners deliver to your hostel block.",
    image: "/images/how-it-works/step-3-enjoy.jpg",
    alt: "Cheeseburger with fries",
    icon: <Bike className="w-5 h-5 text-dark" />,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative bg-dark text-cream py-24 px-4 sm:px-6 overflow-hidden">
      {/* Top Torn Edge Transition from Cream About Section */}
      <div className="absolute top-0 left-0 right-0">
        <TornEdge position="top" color="dark" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10 pt-4">
        {/* Section Heading */}
        <SectionHeading
          badge="How CampusEats Works"
          badgeVariant="orange"
          title="Three Steps to Effortless Campus Dining"
          subtitle="Designed to eliminate rush-hour congestion and save valuable time between classes and labs."
          theme="dark"
        />

        {/* 3 Step Cards Grid (Hotbite Specials layout) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="group bg-[#331000] rounded-3xl border-3 border-cream/20 shadow-[6px_8px_0px_rgba(255,239,217,0.2)] overflow-hidden flex flex-col justify-between hover:border-orange transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_12px_0px_#ff9500]"
            >
              {/* Visual Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#401500] border-b-2 border-cream/20">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={DARK_BROWN_BLUR_DATA_URL}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Light top-to-transparent dark gradient to enhance badge contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#401500]/50 via-transparent to-transparent pointer-events-none z-[1]"
                  aria-hidden="true"
                />
                <div className="absolute top-3 left-3 bg-orange text-dark font-londrina text-xl px-3 py-0.5 rounded-full border-2 border-dark shadow-[2px_2px_0px_#401500] z-10">
                  {item.step}
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center border border-dark">
                      {item.icon}
                    </div>
                    <span className="text-xs font-andika font-bold uppercase tracking-wider text-orange">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-londrina uppercase text-2xl sm:text-3xl text-cream tracking-wide leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-inter text-xs sm:text-sm text-cream/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream/15 flex items-center justify-between text-xs font-andika font-bold text-cream/60 group-hover:text-orange transition-colors">
                  <span>VIT-AP Food Street</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Torn Edge Transition to Cream Outlets Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <TornEdge position="bottom" color="cream" />
      </div>
    </section>
  );
};
