"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "orange" | "dark" | "cream" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "orange",
  size = "md",
  showArrow = false,
  children,
  className = "",
  onClick,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base sm:text-lg",
    lg: "px-8 py-4 text-lg sm:text-xl",
  }[size];

  const variantStyles = {
    orange:
      "bg-orange text-dark font-andika font-bold border-2 border-dark shadow-[3px_4px_0px_#401500] hover:bg-orange-hover hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_5px_0px_#401500] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#401500]",
    dark:
      "bg-dark text-cream font-andika font-bold border-2 border-dark shadow-[3px_4px_0px_rgba(255,239,217,0.3)] hover:bg-[#301000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px]",
    cream:
      "bg-cream text-dark font-andika font-bold border-2 border-dark shadow-[3px_4px_0px_#401500] hover:bg-cream-light hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px]",
    outline:
      "bg-transparent text-current font-andika font-bold border-2 border-current hover:bg-black/5 active:translate-y-0.5",
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-200 select-none ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
};
