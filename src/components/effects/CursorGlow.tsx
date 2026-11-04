"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Full 3D pack - cursor layer.
 * A soft orange glow + ring that follows the mouse with spring physics,
 * grows over interactive elements (buttons / links), and is disabled
 * on touch devices and when prefers-reduced-motion is set.
 * The native cursor is kept visible so forms stay usable.
 */
export const CursorGlow: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const glowX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const glowY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest("a, button, [data-cursor], input, select, textarea"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden md:block"
        style={{ x: glowX, y: glowY }}
      >
        <div
          className="rounded-full bg-orange/25 blur-2xl transition-all duration-300"
          style={{
            width: hovering ? 220 : 160,
            height: hovering ? 220 : 160,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{ x, y }}
      >
        <div
          className="rounded-full border-2 border-orange transition-all duration-200"
          style={{
            width: hovering ? 56 : 36,
            height: hovering ? 56 : 36,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </>
  );
};
