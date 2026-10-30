"use client";

import React, { useState } from "react";

type CodeTab = "component" | "types" | "tokens";

export const SkillsInteractiveStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CodeTab>("component");
  const [isCopied, setIsCopied] = useState(false);

  const snippets: Record<CodeTab, { filename: string; language: string; code: string }> = {
    component: {
      filename: "ComponentArchitecture.tsx",
      language: "tsx",
      code: `import React from 'react';
import type { ComponentProps } from '@/types';

// Production-ready component architecture
export const ResponsiveView: React.FC<ComponentProps> = ({
  title,
  theme = 'sky',
  isAccessible = true
}) => {
  return (
    <article className="p-6 rounded-2xl bg-white border border-[#B9D4F5] shadow-xs">
      <header className="flex items-center justify-between pb-3 border-b border-[#B9D4F5]">
        <h3 className="font-display font-semibold text-xl text-[#0E1B3D]">{title}</h3>
        <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#DCEBFF] text-[#123A86] border border-[#B9D4F5]">
          React 19 + TS
        </span>
      </header>
      <p className="mt-3 text-sm text-[#24365C] leading-relaxed">
        Structured state boundaries with WCAG AA compliance and fluid responsiveness.
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
      code: `      /* Sky-light tokens */
:root {
        --color-canvas:  #eaf3ff;
        --color-surface: #ffffff;
        --color-accent:  #1f5fd6; /* Sky Primary */
  --font-display:  "Plus Jakarta Sans", "Inter", sans-serif;
  --font-sans:     "Inter", sans-serif;
  --font-mono:     "JetBrains Mono", monospace;
  --ease-spring:   cubic-bezier(0.16, 1, 0.3, 1);
}`,
    },
  };

  const current = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setIsCopied(false);
    setTimeout(() => setIsCopied(true), 50);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl bg-white border border-[#B9D4F5] shadow-xl overflow-hidden font-mono text-xs">
      {/* Chrome Top Bar */}
      <div className="px-4 py-2.5 bg-[#F2F7FF] border-b border-[#B9D4F5] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70"></span>
          </div>

          {/* Active File Label */}
          <div className="flex items-center gap-1.5 text-xs text-[#0E1B3D] font-mono">
            <svg className="w-3.5 h-3.5 text-[#123A86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>{current.filename}</span>
          </div>
        </div>

        {/* Tab Pills & Copy Action */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white p-0.5 rounded-md border border-[#B9D4F5]">
            <button
              type="button"
              onClick={() => setActiveTab("component")}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                activeTab === "component"
                  ? "bg-[#1F5FD6] text-white font-semibold"
                  : "text-[#2F4166] hover:text-[#0E1B3D]"
              }`}
            >
              Component
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("types")}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                activeTab === "types"
                  ? "bg-[#1F5FD6] text-white font-semibold"
                  : "text-[#2F4166] hover:text-[#0E1B3D]"
              }`}
            >
              Types.ts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tokens")}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                activeTab === "tokens"
                  ? "bg-[#1F5FD6] text-white font-semibold"
                  : "text-[#2F4166] hover:text-[#0E1B3D]"
              }`}
            >
              Tokens.css
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            title="Copy code"
            className="p-1.5 rounded text-[#2F4166] hover:text-[#123A86] hover:bg-[#DCEBFF] transition-colors cursor-pointer"
          >
            {isCopied ? (
              <span className="text-xs text-[#10b981] px-1 font-sans">Copied!</span>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 bg-white overflow-x-auto max-h-[260px] text-xs leading-relaxed select-text">
        <pre className="text-[#0E1B3D]">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Code Window Footer */}
      <div className="px-4 py-2 bg-[#F2F7FF] border-t border-[#B9D4F5] flex items-center justify-between text-xs text-[#2F4166]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
          <span>Syntax Validated</span>
        </div>
        <span className="text-[#123A86]">TypeScript Strict Mode</span>
      </div>
    </div>
  );
};
