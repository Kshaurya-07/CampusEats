"use client";

import React from "react";
import { PillBadge } from "./PillBadge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "cream" | "orange" | "dark";
  title: string;
  subtitle?: string;
  theme?: "dark" | "cream"; // dark = dark section (cream text), cream = cream section (dark text)
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = "orange",
  title,
  subtitle,
  theme = "cream",
  align = "center",
  className = "",
}) => {
  const isDark = theme === "dark";
  const titleColor = isDark ? "text-cream" : "text-dark";
  const subtitleColor = isDark ? "text-cream/80" : "text-dark/80";

  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <div className="mb-3">
          <PillBadge variant={badgeVariant}>{badge}</PillBadge>
        </div>
      )}
      <h2
        className={`font-londrina uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl font-inter text-base sm:text-lg md:text-xl leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
