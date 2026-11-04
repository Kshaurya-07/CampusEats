"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

/**
 * Full 3D pack - hero layer.
 * Mouse-parallax 3D floating cards + a scroll-linked rotating layer.
 * No new dependencies: CSS 3D transforms + Framer Motion only,
 * so the bundle stays light and mobile stays fast.
 * Renders nothing interactive and is pointer-events-none.
 */
export const Hero3D: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      ref={ref}
      aria-hidden
      onMouseMove={onMove}
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block"
      style={{ perspective: 1000 }}
    >
      <motion.div className="absolute inset-0" style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
        <motion.div
          className="absolute left-[8%] top-[18%] rounded-3xl border-4 border-cream/80 bg-orange px-5 py-3 font-londrina text-xl text-cream shadow-[6px_8px_0px_#ffefd9]"
          style={{ transform: "translateZ(60px)", y: scrollY }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          Queue-Free
        </motion.div>
        <motion.div
          className="absolute right-[9%] top-[30%] rounded-3xl border-4 border-cream/80 bg-cream px-5 py-3 font-londrina text-xl text-dark shadow-[6px_8px_0px_#ff9500]"
          style={{ transform: "translateZ(110px)" }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          ₹10–20 Delivery
        </motion.div>
        <motion.div
          className="absolute bottom-[16%] left-[16%] rounded-full border-2 border-orange/60 bg-dark/60 px-4 py-2 text-sm font-bold text-cream"
          style={{ transform: "translateZ(40px)", rotate: scrollRotate }}
        >
          VIT-AP Food Street
        </motion.div>
        <motion.div
          className="absolute bottom-[22%] right-[14%] h-24 w-24 rounded-full bg-orange/30 blur-md"
          style={{ transform: "translateZ(80px)" }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};
