"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock, Users, Utensils, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { PillBadge } from "../common/PillBadge";
import { Button } from "../ui/Button";
import { BRAND_NAME } from "@/constants/brand";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholder-images";

interface AboutSectionProps {
  onOpenDemo: () => void;
  onJoinWaitlist: () => void;
}

interface AboutCard {
  id: number;
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
  bgRotate: string;
}

const ABOUT_CARDS: AboutCard[] = [
  {
    id: 1,
    title: "Solving Campus Congestion",
    tag: "The Mission",
    description:
      "Lunch and dinner breaks cause 20+ minute counter bottlenecks at Food Street. CampusEats spreads demand evenly through pre-booked slots.",
    icon: <Clock className="w-6 h-6 text-orange" />,
    bgRotate: "-rotate-1",
  },
  {
    id: 2,
    title: "Designed For Student Schedules",
    tag: "Convenience",
    description:
      "Schedule meals between back-to-back lectures or lab sessions. Your food is prepared fresh and ready exactly when you step out.",
    icon: <Utensils className="w-6 h-6 text-orange" />,
    bgRotate: "rotate-2",
  },
  {
    id: 3,
    title: "Student-Powered Deliveries",
    tag: "Community",
    description:
      "Fellow students earn ₹5–₹10 per delivery during free hours, providing pocket earnings without rigid shifts or outside riders.",
    icon: <Users className="w-6 h-6 text-orange" />,
    bgRotate: "-rotate-2",
  },
  {
    id: 4,
    title: "Empowering Local Food Outlets",
    tag: "Partnership",
    description:
      "Helps campus stalls manage rush hours, reduce counter chaos, and showcase fresh menus digitally without high aggregator commissions.",
    icon: <ShieldCheck className="w-6 h-6 text-orange" />,
    bgRotate: "rotate-1",
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenDemo,
  onJoinWaitlist,
}) => {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="about" className="relative bg-cream text-dark py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Our Story"
          badgeVariant="orange"
          title="Solving Campus Congestion"
          subtitle="Campus life comes with a familiar problem—strictly limited break times and endless queues at the Food Street. CampusEats is designed to give you your time back."
          theme="cream"
        />

        {/* Story & Video Teaser Row */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative Box */}
          <div className="lg:col-span-6 bg-dark text-cream p-8 sm:p-10 rounded-4xl border-3 border-dark shadow-[6px_8px_0px_#ff9500] relative">
            <span className="inline-block px-3 py-1 bg-orange text-dark font-andika font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Why CampusEats Exists
            </span>
            <h3 className="font-londrina uppercase text-3xl sm:text-4xl text-cream leading-tight">
              Less Waiting. Less Crowd. More Time For What Matters.
            </h3>
            <p className="mt-4 font-inter text-sm sm:text-base text-cream/80 leading-relaxed">
              Every day at VIT-AP, thousands of students rush to Food Street during short breaks.
              Standing 20 minutes in line just to place an order leaves barely 5 minutes to eat.
            </p>
            <p className="mt-3 font-inter text-sm sm:text-base text-cream/80 leading-relaxed">
              {BRAND_NAME} connects students, hostelers, and campus outlets on one unified platform.
              Whether you need a hot meal delivered to your hostel doorstep or prefer grabbing your
              pre-booked tray without waiting, we make campus dining seamless.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                variant="orange"
                size="md"
                onClick={onOpenDemo}
                className="group"
              >
                <Play className="w-4 h-4 fill-current mr-1 transition-transform group-hover:scale-125" />
                Watch Demo
              </Button>
              <button
                onClick={onJoinWaitlist}
                className="font-andika font-bold text-sm text-cream hover:text-orange transition-colors flex items-center gap-1.5"
              >
                Join Launch Waitlist <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Video Thumbnail / Demo Teaser Box */}
          <div className="lg:col-span-6">
            <div
              onClick={onOpenDemo}
              className="group relative cursor-pointer rounded-4xl overflow-hidden border-3 border-dark bg-dark aspect-[4/3] shadow-[6px_8px_0px_#401500] transition-transform hover:-translate-y-1"
            >
              <Image
                src={PLACEHOLDER_IMAGES.videoDemoPoster}
                alt="CampusEats Walkthrough Preview"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-orange text-dark border-3 border-dark shadow-[4px_4px_0px_#401500] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <span className="text-xs font-andika font-bold uppercase tracking-wider text-orange">
                  Interactive Video
                </span>
                <h4 className="font-londrina text-2xl uppercase tracking-wide text-cream mt-0.5">
                  See CampusEats In Action
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Feature Cards (Hotbite rotating cards aesthetic) */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-londrina text-3xl sm:text-4xl uppercase tracking-tight text-dark">
              Core Pillars of the Campus Platform
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_CARDS.map((card, idx) => (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(idx)}
                className={`p-6 rounded-3xl border-3 border-dark transition-all duration-300 cursor-pointer ${
                  activeCard === idx
                    ? "bg-dark text-cream shadow-[6px_8px_0px_#ff9500] -translate-y-2 scale-[1.02]"
                    : "bg-white text-dark shadow-[4px_5px_0px_#401500] hover:shadow-[6px_7px_0px_#401500]"
                } ${card.bgRotate}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-andika font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      activeCard === idx
                        ? "bg-orange text-dark border-dark"
                        : "bg-cream text-dark border-dark/30"
                    }`}
                  >
                    {card.tag}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center ${
                      activeCard === idx ? "bg-cream" : "bg-orange"
                    }`}
                  >
                    {card.icon}
                  </div>
                </div>

                <h4
                  className={`font-londrina uppercase text-2xl tracking-wide leading-tight mb-2 ${
                    activeCard === idx ? "text-cream" : "text-dark"
                  }`}
                >
                  {card.title}
                </h4>

                <p
                  className={`font-inter text-xs sm:text-sm leading-relaxed ${
                    activeCard === idx ? "text-cream/80" : "text-dark/75"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
