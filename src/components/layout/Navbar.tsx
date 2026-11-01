"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandWordmark } from "../common/BrandWordmark";
import { NAV_ITEMS } from "@/constants/navigation";
import { Button } from "../ui/Button";

interface NavbarProps {
  onJoinWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinWaitlist }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-4 z-40 w-full px-4 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Floating Pill Nav Container */}
          <div className="w-full bg-cream/90 backdrop-blur-md rounded-full border-2 border-dark shadow-[4px_5px_0px_#401500] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
            {/* Wordmark */}
            <BrandWordmark theme="dark" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-andika text-sm font-bold text-dark hover:text-orange-logo transition-colors relative py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Action: CTA & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <Button
                variant="orange"
                size="sm"
                onClick={onJoinWaitlist}
                className="hidden sm:inline-flex text-xs uppercase tracking-wider"
              >
                Join Waitlist
              </Button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden w-10 h-10 rounded-full bg-dark text-cream flex items-center justify-center border-2 border-dark hover:bg-orange hover:text-dark transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-dark text-cream flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          {/* Header in overlay */}
          <div className="flex items-center justify-between">
            <BrandWordmark theme="cream" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation"
              className="w-11 h-11 rounded-full bg-cream text-dark border-2 border-cream flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center justify-center gap-6 my-auto text-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-londrina uppercase text-4xl sm:text-5xl text-cream hover:text-orange transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="flex flex-col gap-3">
            <Button
              variant="orange"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinWaitlist();
              }}
              className="w-full text-center"
            >
              Join the Waitlist
            </Button>
            <p className="text-center text-xs text-cream/60 font-inter">
              VIT-AP Campus, Amaravati · Launching Jan 2027
            </p>
          </div>
        </div>
      )}
    </>
  );
};
