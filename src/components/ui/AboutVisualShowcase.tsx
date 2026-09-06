"use client";

import React, { useState } from "react";

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
    // Aug burst
    { w: 3, d: 2, count: 4 },
    { w: 3, d: 5, count: 2 },
    { w: 4, d: 1, count: 3 },
    { w: 4, d: 4, count: 5 },
    // Sep burst
    { w: 8, d: 2, count: 6 },
    { w: 8, d: 5, count: 4 },
    { w: 9, d: 3, count: 2 },
    { w: 10, d: 1, count: 5 },
    { w: 10, d: 4, count: 3 },
    // Oct burst
    { w: 13, d: 0, count: 2 },
    { w: 13, d: 3, count: 4 },
    { w: 14, d: 2, count: 7 },
    { w: 15, d: 4, count: 3 },
    // Nov burst
    { w: 17, d: 1, count: 4 },
    { w: 18, d: 3, count: 5 },
    { w: 19, d: 2, count: 3 },
    { w: 20, d: 5, count: 6 },
    // Dec burst
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
  const [activeSocial, setActiveSocial] = useState<string | null>(null);

  const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const levelColorMap: Record<number, string> = {
    0: "bg-zinc-200/70 dark:bg-zinc-800/80 hover:bg-zinc-300 dark:hover:bg-zinc-700",
    1: "bg-emerald-300 dark:bg-emerald-900/90 hover:brightness-110",
    2: "bg-emerald-400 dark:bg-emerald-700 hover:brightness-110",
    3: "bg-emerald-500 dark:bg-emerald-500 hover:brightness-110",
    4: "bg-emerald-600 dark:bg-emerald-400 hover:brightness-125 shadow-[0_0_8px_rgba(52,211,153,0.4)]",
  };

  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* 1. GitHub Contributions Card */}
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-zinc-900/95 dark:bg-[#0e1015] border border-zinc-700/60 dark:border-white/10 text-white shadow-xl backdrop-blur-md transition-all hover:border-zinc-500/50 dark:hover:border-white/20">
        
        {/* Card Header: Profile Info & GitHub Link */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-zinc-800 dark:border-white/5">
          <a
            href="https://github.com/Umam07"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded-lg p-0.5 transition-opacity hover:opacity-90"
          >
            {/* User Avatar */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-zinc-600 dark:border-white/20 bg-zinc-800 flex items-center justify-center shrink-0">
              <img
                src="https://github.com/Umam07.png"
                alt="Muhammad Syafi'ul Umam"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-bold text-zinc-300">MU</span>
            </div>
            <div>
              <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#38bdf8] transition-colors block leading-tight">
                @Umam07
              </span>
              <span className="text-[11px] text-zinc-400 font-mono block">github.com/Umam07</span>
            </div>
          </a>

          {/* View Profile Link with Octocat */}
          <a
            href="https://github.com/Umam07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
          >
            <span>View Profile</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Section Sub-heading */}
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span className="text-[11px] sm:text-xs">Real-time GitHub Contributions (2026)</span>
        </div>

        {/* Contribution Grid Wrapper (Scrollable on small screens) */}
        <div className="mt-3 overflow-x-auto pb-1 scrollbar-none">
          <div className="min-w-[460px]">
            {/* Month Labels */}
            <div className="grid grid-cols-6 text-[11px] text-zinc-400 font-mono mb-1.5 px-0.5">
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
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoveredDay({ day, x: rect.left + rect.width / 2, y: rect.top });
                      }}
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tooltip */}
        {hoveredDay && (
          <div className="mt-2 text-xs font-mono text-zinc-300 bg-zinc-800/90 border border-zinc-700 rounded px-2.5 py-1 inline-flex items-center gap-1.5 animate-in fade-in duration-150">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>
              {hoveredDay.day.count > 0
                ? `${hoveredDay.day.count} contribution${hoveredDay.day.count > 1 ? "s" : ""} on ${hoveredDay.day.date}`
                : `No contributions on ${hoveredDay.day.date}`}
            </span>
          </div>
        )}

        {/* Card Footer: Total Count & Legend */}
        <div className="mt-4 pt-3 border-t border-zinc-800 dark:border-white/5 flex items-center justify-between text-[11px] sm:text-xs text-zinc-400 font-mono">
          <span>{contributionData.totalContributions} contributions in 2026</span>

          <div className="flex items-center gap-1">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-700/80"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500"></span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400"></span>
            <span>More</span>
          </div>
        </div>

      </div>

      {/* 2. Fanned Social & Interactive Cards Deck */}
      <div className="relative pt-2 pb-6 px-2 flex justify-center items-center">
        <div className="flex items-center justify-center -space-x-4 sm:-space-x-6 w-full max-w-lg">
          
          {/* Instagram Card */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveSocial('instagram')}
            onMouseLeave={() => setActiveSocial(null)}
            className={`group relative flex flex-col justify-between w-36 sm:w-44 h-48 sm:h-52 p-4 sm:p-5 rounded-2xl bg-zinc-900/95 dark:bg-[#111317] border border-zinc-700/60 dark:border-white/10 shadow-lg text-white transition-all duration-300 cursor-pointer ${
              activeSocial === 'instagram'
                ? 'z-30 -translate-y-4 rotate-0 scale-105 shadow-2xl border-pink-500/50'
                : activeSocial !== null
                ? '-rotate-6 opacity-60'
                : '-rotate-6 hover:-translate-y-2 hover:rotate-0 hover:z-20'
            }`}
          >
            <div>
              {/* Instagram Squircle Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h4 className="mt-3 font-semibold text-sm sm:text-base text-white group-hover:text-pink-400 transition-colors">
                Instagram
              </h4>
              <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 block mt-0.5">
                SOCIAL
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Daily life & updates
            </p>
          </a>

          {/* LinkedIn Card (Center, Upright & Elevated) */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveSocial('linkedin')}
            onMouseLeave={() => setActiveSocial(null)}
            className={`group relative flex flex-col justify-between w-38 sm:w-48 h-52 sm:h-56 p-4 sm:p-5 rounded-2xl bg-zinc-900/98 dark:bg-[#14161c] border border-zinc-700/80 dark:border-white/15 shadow-xl text-white transition-all duration-300 cursor-pointer ${
              activeSocial === 'linkedin'
                ? 'z-30 -translate-y-5 rotate-0 scale-105 shadow-2xl border-[#0077b5]'
                : activeSocial !== null
                ? 'z-10 opacity-70'
                : 'z-10 hover:-translate-y-3 hover:scale-105 hover:z-20'
            }`}
          >
            <div>
              {/* LinkedIn Squircle Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#0077b5] flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h4 className="mt-3.5 font-semibold text-sm sm:text-base text-white group-hover:text-[#38bdf8] transition-colors">
                LinkedIn
              </h4>
              <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 block mt-0.5">
                WORK
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Professional networking
            </p>
          </a>

          {/* Spotify Card */}
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveSocial('spotify')}
            onMouseLeave={() => setActiveSocial(null)}
            className={`group relative flex flex-col justify-between w-36 sm:w-44 h-48 sm:h-52 p-4 sm:p-5 rounded-2xl bg-zinc-900/95 dark:bg-[#111317] border border-zinc-700/60 dark:border-white/10 shadow-lg text-white transition-all duration-300 cursor-pointer ${
              activeSocial === 'spotify'
                ? 'z-30 -translate-y-4 rotate-0 scale-105 shadow-2xl border-emerald-500/50'
                : activeSocial !== null
                ? 'rotate-6 opacity-60'
                : 'rotate-6 hover:-translate-y-2 hover:rotate-0 hover:z-20'
            }`}
          >
            <div>
              {/* Spotify Squircle Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#1db954] flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <h4 className="mt-3 font-semibold text-sm sm:text-base text-white group-hover:text-emerald-400 transition-colors">
                Spotify
              </h4>
              <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 block mt-0.5">
                MUSIC
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Playlists & jams
            </p>
          </a>

        </div>
      </div>

    </div>
  );
};
