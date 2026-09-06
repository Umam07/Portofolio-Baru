"use client";

import React, { useState } from "react";

type TabType = "preview" | "tokens" | "terminal";
type GrantStatus = "Approved" | "In Review" | "Grant Active";

export const HeroInteractiveStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [copied, setCopied] = useState(false);

  // Interactive sandbox state
  const [radius, setRadius] = useState<number>(12);
  const [accentColor, setAccentColor] = useState<string>("#38bdf8");
  const [status, setStatus] = useState<GrantStatus>("Approved");
  const [verifiedCount, setVerifiedCount] = useState<number>(18);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "bun test --all: 24 unit tests passed (11ms)",
    "git status: on branch main, working tree clean",
  ]);

  const handleCopyCode = () => {
    const code = `// Umam Engineering Profile & Design Tokens
export const engineer = {
  name: "Muhammad Syafi'ul Umam",
  role: "Frontend Developer & UI/UX Designer",
  flagship: "PentaDosen Academic Portal",
  themes: ["Swiss Light Mode (#fff)", "Obsidian Cyber Ice (#080808)"],
  stack: ["React 19", "TypeScript", "Tailwind v4", "Astro 5", "Figma"],
  status: "Open for Frontend Roles & Projects"
};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleStatus = () => {
    if (status === "Approved") setStatus("In Review");
    else if (status === "In Review") setStatus("Grant Active");
    else setStatus("Approved");
  };

  const handleRunCommand = (cmd: string) => {
    let output = "";
    if (cmd === "pentadosen") {
      output = "→ PentaDosen: Lecturer research & HKI portal (React + TypeScript + Tailwind)";
    } else if (cmd === "stack") {
      output = "→ Stack: [React 19, TypeScript, Tailwind CSS, Astro 5, Vite, Figma]";
    } else if (cmd === "contact") {
      output = "→ Email: muhammadumamsyafiul@gmail.com · Jakarta, Indonesia";
    }
    setTerminalHistory((prev) => [...prev.slice(-3), `$ umam.${cmd}()`, output]);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl bg-[#0e1013] dark:bg-[#0d0e11] border border-zinc-800 dark:border-white/10 shadow-2xl overflow-hidden text-zinc-200 font-mono text-xs transition-all duration-300">
      
      {/* Window Top Chrome */}
      <div className="h-11 px-4 bg-[#15171c] dark:bg-[#121316] border-b border-zinc-800 dark:border-white/10 flex items-center justify-between select-none">
        
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></span>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-1 bg-[#090a0d] p-0.5 rounded-md border border-zinc-800 dark:border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
              activeTab === "preview"
                ? "bg-[#222630] text-white shadow-xs"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            PentaDosen UI
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tokens")}
            className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
              activeTab === "tokens"
                ? "bg-[#222630] text-white shadow-xs"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Tokens.ts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("terminal")}
            className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
              activeTab === "terminal"
                ? "bg-[#222630] text-white shadow-xs"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            CLI
          </button>
        </div>

        {/* Copy Code / Action Button */}
        <button
          type="button"
          onClick={handleCopyCode}
          aria-label="Copy code snippet"
          title="Copy snippet"
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#38bdf8] transition-colors focus:outline-none min-h-[36px]"
        >
          {copied ? (
            <span className="text-[#10b981] flex items-center gap-1 font-sans font-medium">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </span>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Panel Content Area */}
      <div className="p-4 sm:p-5 min-h-[300px] flex flex-col justify-between">
        
        {/* TAB 1: AUTHENTIC PENTADOSEN COMPONENT PREVIEW */}
        {activeTab === "preview" && (
          <div className="space-y-4">
            
            {/* Live Interactive Component Card */}
            <div
              className="p-4 sm:p-5 bg-[#14161b] border border-zinc-800 dark:border-white/10 transition-all duration-200 shadow-lg"
              style={{ borderRadius: `${radius}px` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full transition-colors"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span className="text-xs font-sans text-zinc-400 uppercase tracking-wider font-semibold">
                      PentaDosen · YARSI
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-white leading-snug">
                    Distributed Data Architecture in Academic Portal
                  </h4>
                </div>

                {/* Interactive Status Badge Toggle */}
                <button
                  type="button"
                  onClick={handleToggleStatus}
                  title="Click to cycle status"
                  className="px-2.5 py-1 rounded-full text-xs font-sans font-medium inline-flex items-center gap-1.5 bg-[#1e222b] border border-zinc-700 hover:border-[#38bdf8] transition-colors cursor-pointer"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      status === "Approved"
                        ? "bg-[#10b981]"
                        : status === "In Review"
                        ? "bg-[#f59e0b]"
                        : "bg-[#38bdf8]"
                    }`}
                  />
                  <span className="text-zinc-200">{status}</span>
                </button>
              </div>

              {/* Progress & Milestone Meta */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-zinc-400">Research Milestone Progress</span>
                  <span className="font-medium text-white">85% Completed</span>
                </div>
                <div className="w-full h-1.5 bg-[#1e222b] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: "85%", backgroundColor: accentColor }}
                  />
                </div>
              </div>

              {/* Action Strip */}
              <div className="mt-4 pt-3 border-t border-zinc-800 dark:border-white/10 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setVerifiedCount((c) => c + 1)}
                  style={{
                    backgroundColor: accentColor,
                    borderRadius: `${Math.min(radius, 8)}px`,
                  }}
                  className="px-3.5 py-1.5 text-zinc-950 font-sans text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  Verify Milestone ({verifiedCount})
                </button>

                <span className="text-xs text-zinc-400 font-mono">
                  radius: {radius}px
                </span>
              </div>
            </div>

            {/* Sandbox Live Controls Strip */}
            <div className="p-3 rounded-lg bg-[#14161b] border border-zinc-800 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Color Swatches */}
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 font-sans font-medium">Accent:</span>
                <div className="flex items-center gap-2">
                  {["#38bdf8", "#0284c7", "#10b981", "#818cf8"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setAccentColor(color)}
                      style={{ backgroundColor: color }}
                      aria-label={`Select accent color ${color}`}
                      className={`w-4 h-4 rounded-full transition-transform ${
                        accentColor === color
                          ? "ring-2 ring-white scale-110 shadow-sm"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Radius Range Slider */}
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 font-sans font-medium">Radius:</span>
                <input
                  type="range"
                  min="4"
                  max="20"
                  value={radius}
                  aria-label="Component border radius"
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-20 h-1.5 accent-[#38bdf8] cursor-pointer"
                />
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: AUTHENTIC DESIGN TOKENS TS */}
        {activeTab === "tokens" && (
          <div className="p-3.5 rounded-lg bg-[#14161b] border border-zinc-800 dark:border-white/10 overflow-x-auto text-xs leading-relaxed">
            <pre className="text-zinc-300">
              <span className="text-zinc-500">// Umam Dual-Mode Design System Tokens</span>{"\n"}
              <span className="text-[#38bdf8]">export const</span> designTokens = {"{"}{"\n"}
              {"  "}engineer: <span className="text-[#10b981]">"Muhammad Syafi'ul Umam"</span>,{"\n"}
              {"  "}specialization: <span className="text-[#10b981]">"Frontend & UI/UX"</span>,{"\n"}
              {"  "}flagship: <span className="text-[#10b981]">"PentaDosen Academic Portal"</span>,{"\n"}
              {"  "}themes: {"{"}{"\n"}
              {"    "}lightCanvas: <span className="text-[#10b981]">"#ffffff"</span>, <span className="text-zinc-500">// Swiss Studio Precision</span>{"\n"}
              {"    "}darkCanvas: <span className="text-[#10b981]">"#080808"</span>,  <span className="text-zinc-500">// Sleek Obsidian Cyber</span>{"\n"}
              {"    "}primaryLight: <span className="text-[#10b981]">"#0284c7"</span>, <span className="text-zinc-500">// Mediterranean Blue</span>{"\n"}
              {"    "}primaryDark: <span className="text-[#10b981]">"#38bdf8"</span>   <span className="text-zinc-500">// Electric Ice Cyan</span>{"\n"}
              {"  "}{"}"},{"\n"}
              {"  "}standards: [<span className="text-[#10b981]">"Figma Fidelity"</span>, <span className="text-[#10b981]">"WCAG AA"</span>, <span className="text-[#10b981]">"100% Lighthouse"</span>]{"\n"}
              {"}"};
            </pre>
          </div>
        )}

        {/* TAB 3: CLI TERMINAL */}
        {activeTab === "terminal" && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-lg bg-[#14161b] border border-zinc-800 dark:border-white/10 min-h-[160px] flex flex-col justify-start text-xs leading-relaxed space-y-1.5">
              <span className="text-zinc-500">System initialized · Node v22 · Astro v5.3 · Dual Theme</span>
              {terminalHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    item.startsWith("→")
                      ? "text-[#38bdf8] pl-2 font-medium"
                      : item.startsWith("$")
                        ? "text-white font-semibold"
                        : "text-zinc-400"
                  }
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Quick Command Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-400 font-sans font-medium">Run:</span>
              <button
                type="button"
                onClick={() => handleRunCommand("pentadosen")}
                className="px-2.5 py-1 rounded bg-[#1e222b] hover:bg-[#282e3a] hover:text-[#38bdf8] text-xs border border-zinc-700 transition-colors"
              >
                pentadosen()
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand("stack")}
                className="px-2.5 py-1 rounded bg-[#1e222b] hover:bg-[#282e3a] hover:text-[#38bdf8] text-xs border border-zinc-700 transition-colors"
              >
                stack()
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand("contact")}
                className="px-2.5 py-1 rounded bg-[#1e222b] hover:bg-[#282e3a] hover:text-[#38bdf8] text-xs border border-zinc-700 transition-colors"
              >
                contact()
              </button>
            </div>
          </div>
        )}

        {/* Window Footer Status Bar */}
        <div className="mt-3 pt-2.5 border-t border-zinc-800 dark:border-white/10 flex items-center justify-between text-xs text-zinc-400 select-none">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[#10b981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
              Ready
            </span>
            <span>·</span>
            <span>TypeScript 5.7</span>
          </div>
          <div className="flex items-center gap-2">
            <span>UTF-8</span>
            <span>·</span>
            <span className="text-[#38bdf8]">React 19 + Astro 5</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroInteractiveStudio;
