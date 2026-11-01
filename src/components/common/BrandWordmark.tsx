"use client";

import React from "react";
import Link from "next/link";
import { BRAND_NAME } from "@/constants/brand";

interface BrandWordmarkProps {
  theme?: "dark" | "cream"; // dark = dark text on cream bg, cream = cream text on dark bg
  className?: string;
  showIcon?: boolean;
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  theme = "dark",
  className = "",
  showIcon = true,
}) => {
  const campusColor = theme === "dark" ? "text-dark" : "text-cream";

  return (
    <Link
      href="#hero"
      aria-label={`${BRAND_NAME} Home`}
      className={`inline-flex items-center gap-1.5 font-londrina uppercase tracking-wide leading-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <span className={`text-2xl sm:text-3xl ${campusColor}`}>CAMPUS</span>
      <span className="text-2xl sm:text-3xl text-orange-logo flex items-center gap-1">
        EATS
        {showIcon && (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 inline-block fill-current -mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Fork and spoon icon */}
            <path
              d="M7 2v5a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2M9 2v5M7 2h4M9 9v13M15 2c-1.66 0-3 1.79-3 4s1.34 4 3 4v12h2V10c1.66 0 3-1.79 3-4s-1.34-4-3-4z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </Link>
  );
};
