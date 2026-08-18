"use client";

import React, { useState } from "react";

type TabType = "preview" | "tokens" | "terminal";

export const HeroInteractiveStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [copied, setCopied] = useState(false);

  // Interactive sandbox state
  const [radius, setRadius] = useState<number>(10);
  const [accentColor, setAccentColor] = useState<string>("#cc785c");
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [clickCount, setClickCount] = useState<number>(0);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "bun test --all: 18 tests passed (12ms)",
    "git status: working tree clean, on branch main",
  ]);

  const handleCopyCode = () => {
    const code = `const developer = {
  name: "Muhammad Syafi'ul Umam",
  role: "Frontend Developer & UI/UX Designer",
  stack: ["React", "TypeScript", "Tailwind CSS", "Astro", "Next.js"],
  status: "Available for freelance & fulltime roles"
};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCommand = (cmd: string) => {
    let output = "";
    if (cmd === "stack") {
      output = "→ [React 19, TypeScript, Tailwind v4, Astro 5, Figma, Next.js]";
    } else if (cmd === "stats") {
      output = "→ 3+ Projects Delivered · 100% Lighthouse Score · Universitas YARSI";
    } else if (cmd === "contact") {
      output = "→ Email: syafiulumam147@gmail.com · Jakarta, Indonesia";
    }
    setTerminalHistory((prev) => [...prev.slice(-3), `$ umam.${cmd}()`, output]);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl bg-[#141311] border border-[#2e2b26] shadow-2xl overflow-hidden text-[#e8e6e1] font-mono text-xs transition-all duration-300">
      
      {/* Window Top Chrome */}
      <div className="h-10 px-3.5 bg-[#1a1916] border-b border-[#2e2b26] flex items-center justify-between select-none">
        
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 hover:opacity-100 transition-opacity"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 hover:opacity-100 transition-opacity"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 hover:opacity-100 transition-opacity"></span>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-1 bg-[#12110f] p-0.5 rounded-md border border-[#2e2b26]">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === "preview"
                ? "bg-[#282622] text-[#faf9f5] shadow-xs"
                : "text-[#8e8b82] hover:text-[#e8e6e1]"
            }`}
          >
            UI Sandbox
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tokens")}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === "tokens"
                ? "bg-[#282622] text-[#faf9f5] shadow-xs"
                : "text-[#8e8b82] hover:text-[#e8e6e1]"
            }`}
          >
            Tokens.ts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("terminal")}
            className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-all ${
              activeTab === "terminal"
                ? "bg-[#282622] text-[#faf9f5] shadow-xs"
                : "text-[#8e8b82] hover:text-[#e8e6e1]"
            }`}
          >
            CLI
          </button>
        </div>

        {/* Copy Code / Action Button */}
        <button
          type="button"
          onClick={handleCopyCode}
          title="Copy snippet"
          className="flex items-center gap-1 text-[11px] text-[#8e8b82] hover:text-[#cc785c] transition-colors focus:outline-none"
        >
          {copied ? (
            <span className="text-[#5db872] flex items-center gap-1 font-sans">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </span>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Panel Content Area */}
      <div className="p-4 sm:p-5 min-h-[300px] flex flex-col justify-between">
        
        {/* TAB 1: UI SANDBOX */}
        {activeTab === "preview" && (
          <div className="space-y-4">
            
            {/* Live Interactive Preview Card */}
            <div
              className="p-4 sm:p-5 bg-[#1b1a17] border border-[#2e2b26] transition-all duration-200"
              style={{ borderRadius: `${radius}px` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-xs"
                    style={{ backgroundColor: accentColor }}
                  >
                    U
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#faf9f5]">
                      Muhammad Syafi'ul Umam
                    </h4>
                    <p className="text-[11px] text-[#8e8b82] font-sans">
                      Frontend Developer & UI/UX
                    </p>
                  </div>
                </div>

                {/* Pulsing Status Badge */}
                <button
                  type="button"
                  onClick={() => setIsAvailable(!isAvailable)}
                  title="Toggle status"
                  className="px-2 py-0.5 rounded-full text-[10px] font-sans font-medium inline-flex items-center gap-1.5 bg-[#252320] border border-[#3d3a33] hover:border-[#cc785c] transition-colors cursor-pointer"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isAvailable ? "bg-[#5db872] animate-pulse" : "bg-[#8e8b82]"
                    }`}
                  />
                  <span className="text-[#d4cfc7]">
                    {isAvailable ? "Available" : "Busy"}
                  </span>
                </button>
              </div>

              {/* Action Button Strip */}
              <div className="mt-4 pt-3 border-t border-[#2e2b26] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setClickCount((c) => c + 1)}
                  style={{
                    backgroundColor: accentColor,
                    borderRadius: `${Math.min(radius, 8)}px`,
                  }}
                  className="px-3 py-1.5 text-white font-sans text-xs font-medium hover:opacity-90 active:scale-95 transition-all shadow-xs"
                >
                  Interactive CTA · {clickCount} clicks
                </button>

                <span className="text-[11px] text-[#a09d96] font-mono">
                  radius: {radius}px
                </span>
              </div>
            </div>

            {/* Sandbox Live Controls Strip */}
            <div className="p-2.5 rounded-lg bg-[#181715] border border-[#2e2b26] flex flex-wrap items-center justify-between gap-3 text-[11px]">
              
              {/* Color Swatches */}
              <div className="flex items-center gap-2">
                <span className="text-[#8e8b82] font-sans">Accent:</span>
                <div className="flex items-center gap-1.5">
                  {["#cc785c", "#5db8a6", "#e8a55a", "#818cf8"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setAccentColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-4 h-4 rounded-full transition-transform ${
                        accentColor === color
                          ? "ring-2 ring-white scale-110"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Radius Range Slider */}
              <div className="flex items-center gap-2">
                <span className="text-[#8e8b82] font-sans">Radius:</span>
                <input
                  type="range"
                  min="4"
                  max="24"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-20 h-1.5 accent-[#cc785c] cursor-pointer"
                />
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: DESIGN TOKENS TS */}
        {activeTab === "tokens" && (
          <div className="p-3 rounded-lg bg-[#181715] border border-[#2e2b26] overflow-x-auto text-[11.5px] leading-relaxed">
            <pre className="text-[#d4cfc7]">
              <span className="text-[#8e8b82]">// Claude Editorial Design System Tokens</span>{"\n"}
              <span className="text-[#cc785c]">export const</span> designTokens = {"{"}{"\n"}
              {"  "}brand: {"{"}{"\n"}
              {"    "}primary: <span className="text-[#5db872]">"#cc785c"</span>, <span className="text-[#8e8b82]">// Signature Warm Coral</span>{"\n"}
              {"    "}canvas: <span className="text-[#5db872]">"#faf9f5"</span>,  <span className="text-[#8e8b82]">// Tinted Warm Cream</span>{"\n"}
              {"    "}darkSurface: <span className="text-[#5db872]">"#181715"</span> <span className="text-[#8e8b82]">// Obsidian Product Card</span>{"\n"}
              {"  "}{"}"},{"\n"}
              {"  "}typography: {"{"}{"\n"}
              {"    "}display: <span className="text-[#5db872]">"Newsreader, Copernicus Serif"</span>,{"\n"}
              {"    "}body: <span className="text-[#5db872]">"Inter, StyreneB Sans"</span>,{"\n"}
              {"    "}mono: <span className="text-[#5db872]">"JetBrains Mono"</span>{"\n"}
              {"  "}{"}"},{"\n"}
              {"  "}craft: [<span className="text-[#5db872]">"Accessible"</span>, <span className="text-[#5db872]">"Fluid Motion"</span>, <span className="text-[#5db872]">"Tailwind v4"</span>]{"\n"}
              {"}"};
            </pre>
          </div>
        )}

        {/* TAB 3: CLI TERMINAL */}
        {activeTab === "terminal" && (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-[#181715] border border-[#2e2b26] min-h-[160px] flex flex-col justify-start text-[11px] leading-relaxed space-y-1">
              <span className="text-[#8e8b82]">System initialized · Node v22.13 · Astro v5.3</span>
              {terminalHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    item.startsWith("→")
                      ? "text-[#5db872] pl-2"
                      : item.startsWith("$")
                        ? "text-[#cc785c] font-semibold"
                        : "text-[#a09d96]"
                  }
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Quick Command Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-[#8e8b82] font-sans">Run:</span>
              <button
                type="button"
                onClick={() => handleRunCommand("stack")}
                className="px-2 py-1 rounded bg-[#252320] hover:bg-[#312e2a] hover:text-[#cc785c] text-[10.5px] border border-[#3d3a33] transition-colors"
              >
                stack()
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand("stats")}
                className="px-2 py-1 rounded bg-[#252320] hover:bg-[#312e2a] hover:text-[#cc785c] text-[10.5px] border border-[#3d3a33] transition-colors"
              >
                stats()
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand("contact")}
                className="px-2 py-1 rounded bg-[#252320] hover:bg-[#312e2a] hover:text-[#cc785c] text-[10.5px] border border-[#3d3a33] transition-colors"
              >
                contact()
              </button>
            </div>
          </div>
        )}

        {/* Window Footer Status Bar */}
        <div className="mt-3 pt-2.5 border-t border-[#252320] flex items-center justify-between text-[10px] text-[#8e8b82] select-none">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[#5db872]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5db872]"></span>
              Ready
            </span>
            <span>·</span>
            <span>TypeScript 5.7</span>
          </div>
          <div className="flex items-center gap-2">
            <span>UTF-8</span>
            <span>·</span>
            <span className="text-[#cc785c]">React 19 + Astro 5</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroInteractiveStudio;
