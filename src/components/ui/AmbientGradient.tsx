"use client";

import React, { useEffect, useState } from "react";

/**
 * Site-wide ambient daylight sky gradient (Zephyr light-sky palette).
 * Optimized with pure GPU-composited CSS transforms and soft radial meshes.
 * 0% idle CPU footprint — no Three.js WebGL per-pixel procedural noise loop.
 */
export const AmbientGradient: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = ((e.clientX / window.innerWidth) - 0.5) * 16;
        const y = ((e.clientY / window.innerHeight) - 0.5) * 16;
        setMouseOffset({ x, y });
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none transition-transform duration-700 ease-out"
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
      }}
    >
      {/* Top mist crest — soft sunlight white glow */}
      <div className="ambient-blob-1 absolute -top-[15%] left-[10%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(220,235,255,0.45)_50%,transparent_70%)] blur-3xl opacity-75 will-change-transform" />
      
      {/* Sky haze floating cloud — soft sky blue */}
      <div className="ambient-blob-2 absolute top-[25%] -right-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-[radial-gradient(circle,rgba(179,217,255,0.55)_0%,rgba(128,179,255,0.25)_50%,transparent_70%)] blur-3xl opacity-70 will-change-transform" />
      
      {/* Deep river indigo anchor — bottom atmospheric depth */}
      <div className="ambient-blob-3 absolute -bottom-[15%] left-[20%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(102,153,230,0.25)_0%,rgba(179,217,255,0.30)_45%,transparent_70%)] blur-3xl opacity-60 will-change-transform" />
    </div>
  );
};

export default AmbientGradient;
