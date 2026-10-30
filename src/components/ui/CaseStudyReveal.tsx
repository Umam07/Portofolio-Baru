"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  inView?: boolean;
}

/** Buttery staggered entrance for case-study blocks. Respects reduced motion. */
export function Reveal({ children, delay = 0, y = 28, className, inView = false }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  if (inView) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface HeroMediaProps {
  children: ReactNode;
  className?: string;
}

/** Slow settle-zoom for the hero image so the shared-element handoff feels continuous. */
export function HeroMedia({ children, className }: HeroMediaProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
