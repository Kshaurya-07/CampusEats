"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Instagram, Linkedin, Twitter } from "lucide-react";
import { BrandWordmark } from "../common/BrandWordmark";
import { FooterWordmark } from "../FooterWordmark";
import { BRAND_NAME, CAMPUS_LOCATION, CONTACT_EMAIL, SOCIAL_LINKS } from "@/constants/brand";
import { NAV_ITEMS } from "@/constants/navigation";

interface FooterProps {
  onOpenPrivacy: () => void;
  onJoinWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onJoinWaitlist }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-dark text-cream pt-16 pb-8 overflow-hidden select-none border-t-2 border-cream/20">
      {/* Upper Footer: Nav links, contact, brand, socials */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream/15">
          {/* Col 1: Wordmark & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <BrandWordmark theme="cream" />
            <p className="max-w-md font-inter text-sm sm:text-base text-cream/70 leading-relaxed">
              Simplifying campus food for VIT-AP University. Quick, reliable and affordable
              deliveries from campus food street right to your hostel block doorstep.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="CampusEats Instagram"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-orange hover:text-dark flex items-center justify-center transition-colors border border-cream/20"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="CampusEats LinkedIn"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-orange hover:text-dark flex items-center justify-center transition-colors border border-cream/20"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="CampusEats X / Twitter"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-orange hover:text-dark flex items-center justify-center transition-colors border border-cream/20"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-andika font-bold text-xs uppercase tracking-wider text-orange mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 font-inter text-sm text-cream/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-orange transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={onJoinWaitlist}
                  className="hover:text-orange transition-colors inline-block text-left"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus & Contact Details */}
          <div>
            <h4 className="font-andika font-bold text-xs uppercase tracking-wider text-orange mb-4">
              Campus Headquarters
            </h4>
            <div className="space-y-2 font-inter text-sm text-cream/80">
              <p>{CAMPUS_LOCATION}</p>
              <p>Andhra Pradesh, India</p>
              <p className="pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline hover:text-orange transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-xs text-cream/50 pt-2">
                Pre-launch Stage · MVP Onboarding Jan 2027
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed oversized Footer Wordmark */}
      <div className="w-full relative my-6 sm:my-8 z-10">
        <FooterWordmark />
      </div>

      {/* Small bottom bar */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 z-10 pt-4 border-t border-cream/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter text-cream/60">
          <p>© {new Date().getFullYear()} {BRAND_NAME} · {CAMPUS_LOCATION}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-cream underline transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-orange transition-colors font-andika font-bold"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
