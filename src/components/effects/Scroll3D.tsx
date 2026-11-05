"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Scroll-linked 3D progress bar at the very top of the page. Works on all devices. */
export const ScrollProgress3D: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[9996] h-1 origin-left bg-orange"
      style={{ scaleX }}
    />
  );
};

/**
 * Scroll 3D reveal wrapper: each wrapped section enters with a
 * subtle rotateX / rise in 3D space as it scrolls into view.
 * When prefers-reduced-motion is set, sections render statically with
 * no opacity/transform entrance (framer-motion JS animations are not
 * covered by the CSS reduced-motion rule in globals.css, so this
 * check is needed here).
 */
export const ScrollReveal3D: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div>{children}</div>;
  }
  return (
    <motion.div
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 48, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
