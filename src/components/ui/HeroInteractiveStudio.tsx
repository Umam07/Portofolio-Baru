"use client";

import React, { useState } from "react";

type TabType = "preview" | "tokens" | "terminal";
type GrantStatus = "Approved" | "In Review" | "Grant Active";

export const HeroInteractiveStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [copied, setCopied] = useState(false);

  // Interactive sandbox state
  const [radius, setRadius] = useState<number>(12);
  const [accentColor, setAccentColor] = useState<string>("#6e7fbf");
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
  themes: ["Night Studio (#0b0e24)", "Surface Card (#151d43)"],
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
    <div className="w-full max-w-xl mx-auto rounded-xl bg-[#0b0e24] border border-[#33406e] shadow-2xl overflow-hidden text-[#d8def0] font-mono text-xs transition-all duration-300">
      
      {/* Window Top Chrome */}
      <div className="h-11 px-4 bg-[#111633] border-b border-[#33406e] flex items-center justify-between select-none">
        
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></span>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-1 bg-[#0b0e24] p-0.5 rounded-md border border-[#33406e]">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
              activeTab === "preview"
                ? "bg-[#20294f] text-[#f6f3ef]"
                : "text-[#8792b4] hover:text-[#f6f3ef]"
            }`}
          >
            PentaDosen UI
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tokens")}
            className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
              activeTab === "tokens"
                ? "bg-[#20294f] text-[#f6f3ef]"
                : "text-[#8792b4] hover:text-[#f6f3ef]"
            }`}
          >
            Tokens.ts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("terminal")}
            className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
              activeTab === "terminal"
                ? "bg-[#20294f] text-[#f6f3ef]"
                : "text-[#8792b4] hover:text-[#f6f3ef]"
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
          className="flex items-center gap-1.5 text-xs text-[#8792b4] hover:text-[#b9c8f2] transition-colors focus:outline-none min-h-[36px]"
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
              className="p-4 sm:p-5 bg-[#111633] border border-[#33406e] transition-all duration-200 shadow-lg"
              style={{ borderRadius: `${radius}px` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full transition-colors"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span className="text-xs font-sans text-[#8792b4] uppercase tracking-wider font-semibold">
                      PentaDosen · YARSI
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#f6f3ef] leading-snug">
                    Distributed Data Architecture in Academic Portal
                  </h4>
                </div>

                {/* Interactive Status Badge Toggle */}
                <button
                  type="button"
                  onClick={handleToggleStatus}
                  title="Click to cycle status"
                  className="px-2.5 py-1 rounded-full text-xs font-sans font-medium inline-flex items-center gap-1.5 bg-[#20294f] border border-[#33406e] hover:border-[#6e7fbf] transition-colors cursor-pointer"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      status === "Approved"
                        ? "bg-[#10b981]"
                        : status === "In Review"
                        ? "bg-[#b9c8f2]"
                        : "bg-[#6e7fbf]"
                    }`}
                  />
                  <span className="text-[#d8def0]">{status}</span>
                </button>
              </div>

              {/* Progress & Milestone Meta */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#8792b4]">Research Milestone Progress</span>
                  <span className="font-medium text-[#f6f3ef]">85% Completed</span>
                </div>
                <div className="w-full h-1.5 bg-[#20294f] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: "85%", backgroundColor: accentColor }}
                  />
                </div>
              </div>

              {/* Action Strip */}
              <div className="mt-4 pt-3 border-t border-[#33406e] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setVerifiedCount((c) => c + 1)}
                  style={{
                    backgroundColor: accentColor,
                    borderRadius: `${Math.min(radius, 8)}px`,
                  }}
                  className="px-3.5 py-1.5 text-[#0b0e24] font-sans text-xs font-semibold hover:opacity-90 active:scale-95 transition-all"
                >
                  Verify Milestone ({verifiedCount})
                </button>

                <span className="text-xs text-[#8792b4] font-mono">
                  radius: {radius}px
                </span>
              </div>
            </div>

            {/* Sandbox Live Controls Strip */}
            <div className="p-3 rounded-lg bg-[#111633] border border-[#33406e] flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Color Swatches */}
              <div className="flex items-center gap-2">
                <span className="text-[#8792b4] font-sans font-medium">Accent:</span>
                <div className="flex items-center gap-2">
                  {["#6e7fbf", "#4a5aa0", "#b9c8f2", "#33406e"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setAccentColor(color)}
                      style={{ backgroundColor: color }}
                      aria-label={`Select accent color ${color}`}
                      className={`w-4 h-4 rounded-full transition-transform ${
                        accentColor === color
                          ? "ring-2 ring-[#b9c8f2] scale-110"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Radius Range Slider */}
              <div className="flex items-center gap-2">
                <span className="text-[#8792b4] font-sans font-medium">Radius:</span>
                <input
                  type="range"
                  min="4"
                  max="20"
                  value={radius}
                  aria-label="Component border radius"
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-20 h-1.5 accent-[#6e7fbf] cursor-pointer"
                />
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: AUTHENTIC DESIGN TOKENS TS */}
        {activeTab === "tokens" && (
          <div className="p-3.5 rounded-lg bg-[#111633] border border-[#33406e] overflow-x-auto text-xs leading-relaxed">
            <pre className="text-[#d8def0]">
              <span className="text-[#8792b4]">// Umam Night-Studio Design System Tokens</span>{"\n"}
              <span className="text-[#b9c8f2]">export const</span> designTokens = {"{"}{"\n"}
              {"  "}engineer: <span className="text-[#10b981]">"Muhammad Syafi'ul Umam"</span>,{"\n"}
              {"  "}specialization: <span className="text-[#10b981]">"Frontend & UI/UX"</span>,{"\n"}
              {"  "}flagship: <span className="text-[#10b981]">"PentaDosen Academic Portal"</span>,{"\n"}
              {"  "}themes: {"{"}{"\n"}
              {"    "}canvas: <span className="text-[#10b981]">"#0b0e24"</span>, <span className="text-[#8792b4]">// Night Studio</span>{"\n"}
              {"    "}surface: <span className="text-[#10b981]">"#151d43"</span>,  <span className="text-[#8792b4]">// Card</span>{"\n"}
              {"    "}primary: <span className="text-[#10b981]">"#6e7fbf"</span>, <span className="text-[#8792b4]">// Azure</span>{"\n"}
              {"    "}ice: <span className="text-[#10b981]">"#b9c8f2"</span>   <span className="text-[#8792b4]">// Ice accent</span>{"\n"}
              {"  "}{"}"},{"\n"}
              {"  "}standards: [<span className="text-[#10b981]">"Figma Fidelity"</span>, <span className="text-[#10b981]">"WCAG AA"</span>, <span className="text-[#10b981]">"100% Lighthouse"</span>]{"\n"}
              {"}"};
            </pre>
          </div>
        )}

        {/* TAB 3: CLI TERMINAL */}
        {activeTab === "terminal" && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-lg bg-[#111633] border border-[#33406e] min-h-[160px] flex flex-col justify-start text-xs leading-relaxed space-y-1.5">
              <span className="text-[#8792b4]">System initialized · Node v22 · Astro v5.3 · Night Studio</span>
              {terminalHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    item.startsWith("→")
                      ? "text-[#b9c8f2] pl-2 font-medium"
                      : item.startsWith("$")
                        ? "text-[#f6f3ef] font-semibold"
                        : "text-[#8792b4]"
                  }
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Quick Command Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#8792b4] font-sans font-medium">Run:</span>
              <button
                type="button"
                onClick={() => handleRunCommand("pentadosen")}
                className="px-2.5 py-1 rounded bg-[#20294f] hover:bg-[#33406e] hover:text-[#b9c8f2] text-xs border border-[#33406e] transition-colors"
              >
                pentadosen()
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand("stack")}
                className="px-2.5 py-1 rounded bg-[#20294f] hover:bg-[#33406e] hover:text-[#b9c8f2] text-xs border border-[#33406e] transition-colors"
              >
                stack()
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand("contact")}
                className="px-2.5 py-1 rounded bg-[#20294f] hover:bg-[#33406e] hover:text-[#b9c8f2] text-xs border border-[#33406e] transition-colors"
              >
                contact()
              </button>
            </div>
          </div>
        )}

        {/* Window Footer Status Bar */}
        <div className="mt-3 pt-2.5 border-t border-[#33406e] flex items-center justify-between text-xs text-[#8792b4] select-none">
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
            <span className="text-[#b9c8f2]">React 19 + Astro 5</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroInteractiveStudio;
