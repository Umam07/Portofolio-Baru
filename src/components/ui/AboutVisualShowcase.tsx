"use client";

import React from "react";

interface AboutVisualShowcaseProps {
  calendarMarkup: string;
}

export const AboutVisualShowcase: React.FC<AboutVisualShowcaseProps> = ({ calendarMarkup }) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-[#B9D4F5] bg-white shadow-[0_4px_20px_rgba(31,95,214,0.14)]">
        <div className="flex items-center justify-between gap-4 border-b border-[#B9D4F5] px-5 py-4 sm:px-6">
          <a
            href="https://github.com/Umam07"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 items-center gap-3 rounded-lg p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5FD6]"
          >
            <img
              src="https://github.com/Umam07.png"
              alt="Muhammad Syafi'ul Umam"
              loading="lazy"
              className="h-10 w-10 shrink-0 rounded-full border border-[#B9D4F5] object-cover"
            />
            <div className="min-w-0">
              <span className="block text-sm font-semibold leading-tight text-[#0E1B3D] transition-colors group-hover:text-[#123A86]">
                @Umam07
              </span>
              <span className="mt-1 block truncate font-mono text-xs text-[#2F4166]">
                github.com/Umam07
              </span>
            </div>
          </a>
          <a
            href="https://github.com/Umam07"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex min-h-11 items-center rounded-lg border border-[#B9D4F5] px-3 py-2 text-xs font-medium text-[#24365C] transition-colors hover:border-[#1F5FD6] hover:text-[#0E1B3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5FD6]"
          >
            GitHub Profile
          </a>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#2F4166]">
              Contribution activity
            </p>
            <span className="text-xs text-[#2F4166]">Last 6 months</span>
          </div>

          <div className="github-calendar overflow-x-auto rounded-xl border border-[#B9D4F5] bg-[#F2F7FF] px-3 py-4">
            {calendarMarkup ? (
              <div aria-label="GitHub contribution activity for Umam07" dangerouslySetInnerHTML={{ __html: calendarMarkup }} />
            ) : (
              <div className="flex min-h-28 min-w-[680px] items-center justify-center px-4 text-center text-xs text-[#2F4166]">
                GitHub activity could not be loaded during build. View the profile for the latest contributions.
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#B9D4F5] pt-3 text-xs text-[#2F4166]">
            <span>Less</span>
            <div className="flex items-center gap-1.5" aria-label="Contribution intensity legend">
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#DCEBFF]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#B3D9FF]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#80B3FF]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#3D7BE0]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#1F5FD6]" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};
