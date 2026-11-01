"use client";

import React from "react";
import { CheckCircle2, MessageSquareQuote, HeartHandshake } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import {
  LEGITIMATE_PROOF_CARDS,
  SHOW_TESTIMONIALS,
  SAMPLE_TESTIMONIALS,
} from "@/data/proof-data";

export const ProofSection: React.FC = () => {
  return (
    <section className="relative bg-dark text-cream py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Validation & Trust"
          badgeVariant="orange"
          title="Campus Tested & Verified"
          subtitle="Real on-ground validation focused on solving student convenience and kitchen rush hours—without fabricated statistics."
          theme="dark"
        />

        {/* 3 Real Proof Cards (No Numbers) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEGITIMATE_PROOF_CARDS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#301000] p-8 rounded-4xl border-3 border-cream/20 shadow-[6px_8px_0px_rgba(255,239,217,0.2)] hover:border-orange transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-andika font-bold uppercase tracking-wider text-orange">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center border border-cream/20">
                    <CheckCircle2 className="w-4 h-4 text-orange" />
                  </div>
                </div>

                <h3 className="font-londrina uppercase text-2xl sm:text-3xl text-cream leading-tight mb-3">
                  {item.title}
                </h3>

                <p className="font-inter text-xs sm:text-sm text-cream/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream/15 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange" />
                <span className="text-xs font-andika font-bold text-cream/60">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Testimonials - Shown ONLY if SHOW_TESTIMONIALS is true */}
        {SHOW_TESTIMONIALS && (
          <div className="mt-16 pt-12 border-t border-cream/15">
            <div className="text-center mb-8">
              <span className="text-xs font-andika font-bold uppercase tracking-wider text-orange">
                Sample Community Feedback (Preview)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SAMPLE_TESTIMONIALS.map((test) => (
                <div
                  key={test.id}
                  className="bg-cream/5 p-6 rounded-3xl border border-cream/20"
                >
                  <MessageSquareQuote className="w-6 h-6 text-orange mb-3" />
                  <p className="font-inter text-xs sm:text-sm text-cream/80 italic mb-4">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                  <div>
                    <strong className="block text-sm font-andika text-cream">
                      {test.author}
                    </strong>
                    <span className="text-xs text-cream/50 font-inter">{test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
