"use client";

import React from "react";

interface PillBadgeProps {
  children: React.ReactNode;
  variant?: "cream" | "orange" | "dark" | "outline";
  rotate?: string; // e.g. "-rotate-3", "rotate-2", "-rotate-6"
  className?: string;
  icon?: React.ReactNode;
}

export const PillBadge: React.FC<PillBadgeProps> = ({
  children,
  variant = "cream",
  rotate = "",
  className = "",
  icon,
}) => {
  const variantStyles = {
    cream: "bg-cream text-dark border-2 border-dark shadow-[2px_3px_0px_#401500]",
    orange: "bg-orange text-dark font-bold border-2 border-dark shadow-[2px_3px_0px_#401500]",
    dark: "bg-dark text-cream border-2 border-cream/30 shadow-[2px_3px_0px_rgba(255,239,217,0.3)]",
    outline: "bg-transparent text-dark border-2 border-dark/60",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-andika font-bold tracking-tight uppercase transition-transform duration-200 hover:scale-105 select-none ${rotate} ${variantStyles} ${className}`}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
