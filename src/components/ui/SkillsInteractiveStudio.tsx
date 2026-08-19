"use client";

import React, { useState } from "react";

type CodeTab = "component" | "types" | "tokens";

export const SkillsInteractiveStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CodeTab>("component");
  const [isCopied, setIsCopied] = useState(false);

  const snippets: Record<CodeTab, { filename: string; language: string; code: string }> = {
    component: {
      filename: "FrontendArchitecture.tsx",
      language: "tsx",
      code: `import React from 'react';
import type { ComponentProps } from '@/types';

// Production-ready component architecture
export const ResponsiveView: React.FC<ComponentProps> = ({
  title,
  theme = 'warm-editorial',
  isAccessible = true
}) => {
  return (
    <article className="p-6 rounded-xl bg-[#efe9de] dark:bg-[#181715]">
      <header className="flex items-center justify-between pb-3">
        <h3 className="font-serif text-xl text-[#141413]">{title}</h3>
        <span className="px-2 py-0.5 rounded text-xs font-mono text-[#cc785c]">
          React 19 + TS
        </span>
      </header>
      <p className="text-sm text-[#3d3d3a] leading-relaxed">
        Structured state boundaries with WCAG AA compliance.
      </p>
    </article>
  );
};`,
    },
    types: {
      filename: "contracts.d.ts",
      language: "ts",
      code: `// Strictly-typed domain contracts & props
export interface TechnicalStack {
  readonly core: readonly ["React", "TypeScript", "Tailwind CSS", "Astro"];
  readonly architecture: "Component-Driven" | "Atomic Design" | "Micro-frontend";
  readonly stateManagement: "Zustand" | "Context API" | "React Query";
}

export interface SystemContract {
  id: string;
  endpoint: \`/api/v1/\${string}\`;
  latencyMs: number;
  payload: Record<string, unknown>;
  isTypeSafe: true;
}`,
    },
    tokens: {
      filename: "tokens.css",
      language: "css",
      code: `/* Claude-inspired warm canvas & obsidian tokens */
:root {
  --canvas-cream: #faf9f5;
  --surface-card: #efe9de;
  --surface-dark: #181715;
  --brand-coral:  #cc785c;
  --brand-active: #a9583e;
  --font-display: "Newsreader", "Copernicus", serif;
  --font-sans:    "Inter", "StyreneB", sans-serif;
  --font-mono:    "JetBrains Mono", monospace;
  --ease-spring:  cubic-bezier(0.16, 1, 0.3, 1);
}`,
    },
  };

  const current = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl bg-[#141311] border border-[#2e2b26] shadow-xl overflow-hidden font-mono text-xs">
      {/* Chrome Top Bar */}
      <div className="px-4 py-2.5 bg-[#1a1916] border-b border-[#2e2b26] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70"></span>
          </div>

          {/* Active File Label */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#faf9f5] font-mono">
            <svg className="w-3.5 h-3.5 text-[#cc785c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>{current.filename}</span>
          </div>
        </div>

        {/* Tab Pills & Copy Action */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#12110f] p-0.5 rounded-md border border-[#2e2b26]">
            <button
              type="button"
              onClick={() => setActiveTab("component")}
              className={`px-2 py-0.5 rounded text-[10.5px] transition-all cursor-pointer ${
                activeTab === "component"
                  ? "bg-[#282622] text-[#faf9f5] font-semibold"
                  : "text-[#8e8b82] hover:text-[#d4cfc7]"
              }`}
            >
              Component
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("types")}
              className={`px-2 py-0.5 rounded text-[10.5px] transition-all cursor-pointer ${
                activeTab === "types"
                  ? "bg-[#282622] text-[#faf9f5] font-semibold"
                  : "text-[#8e8b82] hover:text-[#d4cfc7]"
              }`}
            >
              Types.ts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tokens")}
              className={`px-2 py-0.5 rounded text-[10.5px] transition-all cursor-pointer ${
                activeTab === "tokens"
                  ? "bg-[#282622] text-[#faf9f5] font-semibold"
                  : "text-[#8e8b82] hover:text-[#d4cfc7]"
              }`}
            >
              Tokens.css
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            title="Copy code"
            className="p-1 rounded text-[#8e8b82] hover:text-[#cc785c] hover:bg-[#252320] transition-colors cursor-pointer"
          >
            {isCopied ? (
              <span className="text-[10px] text-[#5db872] px-1 font-sans">Copied!</span>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-3.5 sm:p-4 bg-[#141311] overflow-x-auto max-h-[260px] text-[11px] leading-relaxed select-text">
        <pre className="text-[#d4cfc7]">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Code Window Footer */}
      <div className="px-4 py-2 bg-[#181715] border-t border-[#252320] flex items-center justify-between text-[10px] text-[#8e8b82]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5db872]"></span>
          <span>Syntax Validated</span>
        </div>
        <span className="text-[#cc785c]">TypeScript Strict Mode</span>
      </div>
    </div>
  );
};
