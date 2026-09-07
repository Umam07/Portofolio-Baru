"use client";

import React, { useState, useRef } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Generate realistic 24-week contribution data mirroring high-value open-source activity
const generateContributionData = (): { weeks: ContributionDay[][]; totalContributions: number } => {
  const weeks: ContributionDay[][] = [];
  const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let total = 0;

  // Active dates seed
  const activeSeed = [
    { w: 3, d: 2, count: 4 },
    { w: 3, d: 5, count: 2 },
    { w: 4, d: 1, count: 3 },
    { w: 4, d: 4, count: 5 },
    { w: 8, d: 2, count: 6 },
    { w: 8, d: 5, count: 4 },
    { w: 9, d: 3, count: 2 },
    { w: 10, d: 1, count: 5 },
    { w: 10, d: 4, count: 3 },
    { w: 13, d: 0, count: 2 },
    { w: 13, d: 3, count: 4 },
    { w: 14, d: 2, count: 7 },
    { w: 15, d: 4, count: 3 },
    { w: 17, d: 1, count: 4 },
    { w: 18, d: 3, count: 5 },
    { w: 19, d: 2, count: 3 },
    { w: 20, d: 5, count: 6 },
    { w: 22, d: 2, count: 4 },
    { w: 23, d: 1, count: 2 },
    { w: 23, d: 4, count: 5 },
  ];

  for (let w = 0; w < 24; w++) {
    const days: ContributionDay[] = [];
    const monthIndex = Math.min(Math.floor(w / 4), months.length - 1);
    const dayBase = ((w % 4) * 7) + 1;

    for (let d = 0; d < 7; d++) {
      const match = activeSeed.find((s) => s.w === w && s.d === d);
      const count = match ? match.count : 0;
      total += count;

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count >= 5) level = 4;
      else if (count >= 3) level = 3;
      else if (count >= 2) level = 2;
      else if (count >= 1) level = 1;

      days.push({
        date: `${months[monthIndex]} ${dayBase + d}, 2026`,
        count,
        level,
      });
    }
    weeks.push(days);
  }

  return { weeks, totalContributions: total };
};

const contributionData = generateContributionData();

export const AboutVisualShowcase: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<{ day: ContributionDay; x: number; y: number } | null>(null);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const levelColorMap: Record<number, string> = {
    0: "bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-zinc-300 dark:hover:bg-zinc-700",
    1: "bg-emerald-300 dark:bg-emerald-900/90 hover:brightness-110",
    2: "bg-emerald-400 dark:bg-emerald-700 hover:brightness-110",
    3: "bg-emerald-500 dark:bg-emerald-500 hover:brightness-110",
    4: "bg-emerald-600 dark:bg-emerald-400 hover:brightness-125 shadow-[0_0_8px_rgba(52,211,153,0.4)]",
  };

  return (
    <div className="flex flex-col gap-5 w-full select-none">
      {/* 1. GitHub Contributions Card (Clean & Dual-Mode) */}
      <div
        ref={cardRef}
        className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#0c0e12] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white shadow-sm dark:shadow-2xl transition-all"
      >
        {/* Floating Tooltip Melayang (Clean, No Dot, True Floating Balloon) */}
        {hoveredDay && (
          <div
            style={{
              left: `${hoveredDay.x}px`,
              top: `${hoveredDay.y}px`,
              transform: "translate(-50%, -100%) translateY(-7px)",
            }}
            className="pointer-events-none absolute z-50 whitespace-nowrap text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 shadow-xl border border-zinc-700/60 dark:border-zinc-200 flex items-center gap-1.5 animate-in fade-in duration-100"
          >
            <span className="font-semibold">
              {hoveredDay.day.count > 0
                ? `${hoveredDay.day.count} contribution${hoveredDay.day.count > 1 ? "s" : ""}`
                : "No contributions"}
            </span>
            <span className="opacity-40">·</span>
            <span className="opacity-80 text-[10px]">
              {hoveredDay.day.date}
            </span>
            {/* Arrow Pointing to Tile */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-white w-0 h-0" />
          </div>
        )}
        
        {/* Card Header: Profile Info & GitHub Link */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-white/5">
          <a
            href="https://github.com/Umam07"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-0.5 transition-opacity hover:opacity-90"
          >
            {/* User Avatar */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-zinc-300 dark:border-white/20 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              {!imgError ? (
                <img
                  src="https://github.com/Umam07.png"
                  alt="Muhammad Syafi'ul Umam"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-xs font-bold text-zinc-500 dark:text-zinc-300">MU</span>
              )}
            </div>
            <div>
              <span className="font-semibold text-sm sm:text-base text-zinc-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors block leading-tight">
                @Umam07
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono block">github.com/Umam07</span>
            </div>
          </a>

          {/* View Profile Link */}
          <a
            href="https://github.com/Umam07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/70 dark:hover:bg-white/10 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/10"
          >
            <span>GitHub Profile</span>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Section Sub-heading */}
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <span className="text-[11px] sm:text-xs font-medium">Interactive Contribution Heatmap (2026)</span>
        </div>

        {/* Contribution Grid Wrapper */}
        <div
          className="mt-3 overflow-x-auto pb-1 scrollbar-none"
          onScroll={() => setHoveredDay(null)}
        >
          <div className="min-w-[460px]">
            {/* Month Labels */}
            <div className="grid grid-cols-6 text-[11px] text-zinc-400 dark:text-zinc-500 font-mono mb-1.5 px-0.5">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            {/* 7 rows x 24 columns heat map */}
            <div className="flex gap-1">
              {contributionData.weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 rounded-[2px] cursor-pointer transition-colors duration-150 ${levelColorMap[day.level]}`}
                      onMouseEnter={(e) => {
                        if (cardRef.current) {
                          const cardRect = cardRef.current.getBoundingClientRect();
                          const tileRect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            day,
                            x: tileRect.left - cardRect.left + tileRect.width / 2,
                            y: tileRect.top - cardRect.top,
                          });
                        }
                      }}
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer: Total Count & Legend */}
        <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/5 flex items-center justify-between text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <span>{contributionData.totalContributions} contributions in 2026</span>

          <div className="flex items-center gap-1">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-200 dark:bg-zinc-800"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-300 dark:bg-emerald-900"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 dark:bg-emerald-700"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600 dark:bg-emerald-400"></span>
            <span>More</span>
          </div>
        </div>

        {/* Direct Channels Strip */}
        <div className="mt-3.5 pt-3 border-t border-zinc-200/80 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Jakarta, ID (UTC+7)</span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/Umam07"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/70 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 transition-colors text-[11px] font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/70 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 transition-colors text-[11px] font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200/70 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 transition-colors text-[11px] font-medium"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
