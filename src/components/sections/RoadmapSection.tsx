"use client";

import React from "react";
import { CheckCircle, Clock, Compass } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { ROADMAP_PHASES } from "@/data/roadmap-data";

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="relative bg-cream text-dark py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Product Roadmap"
          badgeVariant="orange"
          title="Our Journey: Now, Next &amp; Beyond"
          subtitle="A clear, realistic rollout plan beginning with food delivery before expanding into the wider campus marketplace."
          theme="cream"
        />

        {/* 3 Milestone Cards (Hotbite 'Why We Hit Different' structure) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROADMAP_PHASES.map((item, idx) => (
            <div
              key={item.phase}
              className={`p-8 rounded-4xl border-3 border-dark transition-all duration-300 flex flex-col justify-between ${
                item.phase === "Now"
                  ? "bg-dark text-cream shadow-[6px_8px_0px_#ff9500] hover:shadow-[8px_10px_0px_#ff9500] -translate-y-2"
                  : "bg-white text-dark shadow-[5px_6px_0px_#401500] hover:shadow-[7px_9px_0px_#401500]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-londrina text-4xl uppercase ${
                      item.phase === "Now" ? "text-orange" : "text-dark"
                    }`}
                  >
                    {item.phase}
                  </span>
                  <span
                    className={`text-xs font-andika font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      item.phase === "Now"
                        ? "bg-orange text-dark border-dark"
                        : "bg-dark/10 text-dark border-dark/20"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div
                  className={`text-xs font-andika font-bold mb-2 ${
                    item.phase === "Now" ? "text-cream/70" : "text-dark/60"
                  }`}
                >
                  {item.timeline}
                </div>

                <h3
                  className={`font-londrina uppercase text-2xl sm:text-3xl leading-tight mb-5 ${
                    item.phase === "Now" ? "text-cream" : "text-dark"
                  }`}
                >
                  {item.title}
                </h3>

                <ul className="space-y-3 font-inter text-xs sm:text-sm">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          item.phase === "Now"
                            ? "bg-orange text-dark text-[10px] font-bold"
                            : "bg-dark text-cream text-[10px] font-bold"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={item.phase === "Now" ? "text-cream/85" : "text-dark/80"}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`mt-8 pt-4 border-t text-xs font-andika font-bold flex items-center justify-between ${
                  item.phase === "Now"
                    ? "border-cream/20 text-orange"
                    : "border-dark/10 text-dark/60"
                }`}
              >
                <span>Status</span>
                <span>{item.phase === "Now" ? "Active Development" : "Planned Phase"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
