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
  theme = 'dual-mode',
  isAccessible = true
}) => {
  return (
    <article className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-zinc-200 dark:border-white/10 shadow-xs">
      <header className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-white/5">
        <h3 className="font-display font-semibold text-xl text-zinc-950 dark:text-zinc-100">{title}</h3>
        <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50">
          React 19 + TS
        </span>
      </header>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
      code: `/* Swiss Light Precision & Obsidian Cyber Dark Tokens */
:root {
  --color-canvas:  #ffffff;
  --color-surface: #f8fafc;
  --color-accent:  #0284c7; /* Electric Blue */
  --font-display:  "Plus Jakarta Sans", "Inter", sans-serif;
  --font-sans:     "Inter", sans-serif;
  --font-mono:     "JetBrains Mono", monospace;
  --ease-spring:   cubic-bezier(0.16, 1, 0.3, 1);
}

.dark {
  --color-canvas:  #080808; /* Obsidian Canvas */
  --color-surface: #121316; /* Slate Container */
  --color-accent:  #38bdf8; /* Cyber Ice Cyan */
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
    <div className="w-full rounded-xl bg-[#0d0e12] border border-white/10 shadow-xl overflow-hidden font-mono text-xs">
      {/* Chrome Top Bar */}
      <div className="px-4 py-2.5 bg-[#14161c] border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70"></span>
          </div>

          {/* Active File Label */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-200 font-mono">
            <svg className="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>{current.filename}</span>
          </div>
        </div>

        {/* Tab Pills & Copy Action */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#090a0d] p-0.5 rounded-md border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab("component")}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                activeTab === "component"
                  ? "bg-white/15 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Component
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("types")}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                activeTab === "types"
                  ? "bg-white/15 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Types.ts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tokens")}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                activeTab === "tokens"
                  ? "bg-white/15 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Tokens.css
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            title="Copy code"
            className="p-1.5 rounded text-zinc-400 hover:text-sky-400 hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isCopied ? (
              <span className="text-xs text-emerald-400 px-1 font-sans">Copied!</span>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 bg-[#0d0e12] overflow-x-auto max-h-[260px] text-xs leading-relaxed select-text">
        <pre className="text-zinc-300">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Code Window Footer */}
      <div className="px-4 py-2 bg-[#12141a] border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Syntax Validated</span>
        </div>
        <span className="text-sky-400">TypeScript Strict Mode</span>
      </div>
    </div>
  );
};
