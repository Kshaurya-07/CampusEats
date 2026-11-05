"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Full 3D pack - hero layer, adaptive per device class.
 *
 * - Laptop/desktop (fine pointer, width >= 1024px): full mouse-parallax
 *   3D floating cards, gentle float animation, scroll-linked rotation.
 * - Tablet (640-1023px, or coarse pointer at that width): light form -
 *   smaller cards, gentler tilt, no mouse-parallax dependency.
 * - Mobile phone (width < 640px): light static version - small chips are
 *   VISIBLE (not hidden), no mouse parallax, no float animation, and
 *   nothing overflows horizontally or covers the headline/CTAs (the
 *   layer sits behind the hero content at z-0, pointer-events-none).
 *
 * No new dependencies: CSS 3D transforms + Framer Motion only.
 * Respects prefers-reduced-motion: all float/parallax/scroll motion is
 * switched off and the chips render statically.
 *
 * Transform-conflict fix: each card is a plain positioned div (which
 * carries the static translateZ) wrapping a motion.div (which carries
 * the float animation) - scroll-linked motion lives on its own nested
 * motion.div, so no single element mixes a static transform string
 * with framer-motion transform values.
 */
type Variant = "desktop" | "tablet" | "mobile";

export const Hero3D: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [variant, setVariant] = useState<Variant>("desktop");

  useEffect(() => {
    const update = () => {
      const fine = window.matchMedia("(pointer: fine)").matches;
      const w = window.innerWidth;
      if (w < 640) setVariant("mobile");
      else if (w < 1024 || !fine) setVariant("tablet");
      else setVariant("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const isDesktop = variant === "desktop" && !reduceMotion;
  const isTablet = variant === "tablet" && !reduceMotion;

  const onMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Float animation: full on desktop, gentler on tablet, none on mobile/reduced-motion.
  const floatA: { y: number[]; duration: number } | null = isDesktop
    ? { y: [0, -14, 0], duration: 5 }
    : isTablet
      ? { y: [0, -6, 0], duration: 7 }
      : null;
  const floatB: { y: number[]; duration: number; delay: number } | null = isDesktop
    ? { y: [0, 12, 0], duration: 6, delay: 0.6 }
    : isTablet
      ? { y: [0, 5, 0], duration: 8, delay: 0.6 }
      : null;

  const cardSize =
    variant === "mobile"
      ? "px-2.5 py-1 text-[11px] rounded-full border-2"
      : isTablet
        ? "px-3.5 py-2 text-base rounded-2xl border-[3px]"
        : "px-5 py-3 text-xl rounded-3xl border-4";

  return (
    <div
      ref={ref}
      aria-hidden
      onMouseMove={onMove}
      className="pointer-events-none absolute inset-0 z-0 block overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX: isDesktop ? rx : 0,
          rotateY: isDesktop ? ry : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card 1 - Queue-Free (scroll-linked rise lives on its own wrapper) */}
        <div
          className={
            variant === "mobile"
              ? "absolute left-2 top-2"
              : "absolute left-[8%] top-[18%]"
          }
          style={{ transform: variant === "mobile" ? undefined : "translateZ(60px)" }}
        >
          <motion.div style={{ y: isDesktop ? scrollY : 0 }}>
            <motion.div
              className={`bg-orange font-londrina text-cream shadow-[4px_5px_0px_#ffefd9] ${cardSize} border-cream/80`}
              animate={floatA ? { y: floatA.y } : undefined}
              transition={floatA ? { duration: floatA.duration, repeat: Infinity, ease: "easeInOut" } : undefined}
            >
              Queue-Free
            </motion.div>
          </motion.div>
        </div>

        {/* Card 2 - delivery fee */}
        <div
          className={
            variant === "mobile"
              ? "absolute right-2 top-2"
              : "absolute right-[9%] top-[30%]"
          }
          style={{ transform: variant === "mobile" ? undefined : "translateZ(110px)" }}
        >
          <motion.div
            className={`bg-cream font-londrina text-dark shadow-[4px_5px_0px_#ff9500] ${cardSize} border-cream/80`}
            animate={floatB ? { y: floatB.y } : undefined}
            transition={floatB ? { duration: floatB.duration, repeat: Infinity, ease: "easeInOut", delay: floatB.delay } : undefined}
          >
            ₹10–20 Delivery
          </motion.div>
        </div>

        {/* Pill chip - VIT-AP Food Street (scroll rotation on desktop only) */}
        {variant !== "mobile" && (
          <div
            className="absolute bottom-[16%] left-[16%]"
            style={{ transform: "translateZ(40px)" }}
          >
            <motion.div style={{ rotate: isDesktop ? scrollRotate : 0 }}>
              <span className="rounded-full border-2 border-orange/60 bg-dark/60 px-4 py-2 text-sm font-bold text-cream">
                VIT-AP Food Street
              </span>
            </motion.div>
          </div>
        )}

        {/* Soft orb - desktop/tablet only, keeps mobile clean */}
        {variant !== "mobile" && (
          <div
            className="absolute bottom-[22%] right-[14%]"
            style={{ transform: "translateZ(80px)" }}
          >
            <motion.div
              className="h-16 w-16 rounded-full bg-orange/30 blur-md md:h-24 md:w-24"
              animate={isDesktop || isTablet ? { scale: [1, 1.25, 1] } : undefined}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};
