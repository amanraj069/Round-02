"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { CRMTableCard } from "./CRMTableCard";

const { crm } = BENTO_GRID_DATA;

/** Reusable lightning bolt SVG used in floating CRM badges. */
function BoltIcon() {
  return (
    <svg className="w-4 h-4 text-[#4ade80] fill-current" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** Handwritten annotation with a curved arrow — decorative flourish. */
function HandwrittenAnnotation() {
  return (
    <div className="absolute -left-[380px] top-[-60%] flex flex-col items-center pointer-events-none" aria-hidden="true">
      <span
        className="text-[26px] font-bold text-[#374151] whitespace-nowrap -rotate-[8deg] mr-8"
        style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
      >
        Also done for you
      </span>
      <svg
        width="90"
        height="60"
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform translate-x-3 -translate-y-2"
      >
        <path
          d="M 1 18 C 18 50, 40 55, 50 35 C 60 15, 45 10, 40 22 C 35 35, 50 55, 75 50 C 85 48, 90 44, 96 38"
          stroke="#374151"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 82 36 L 96 38 L 88 50"
          stroke="#374151"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * CRM integration section with floating data-sync badges (desktop only)
 * and a CRM table card tucked into the bottom-right corner.
 */
export function FeatureCRM() {
  return (
    <div
      className="relative w-full h-full bg-[#dcfce0] rounded-[32px] pt-6 pl-6 md:pt-8 md:pl-8 overflow-visible flex flex-col justify-between border border-black/10"
      role="group"
      aria-label={crm.title}
    >
      {/* Section text */}
      <div className="relative pr-6 md:pr-8 pb-6 md:pb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0d5920] tracking-tight mb-1 md:mb-2">
          {crm.title}
        </h2>
        <p className="text-[14px] text-[#1b7a30] leading-[1.6] mb-2">
          {crm.description}
        </p>
      </div>

      {/* Floating badges — desktop only (positioned off the left edge) */}
      <div className="hidden md:flex absolute md:-left-[100px] lg:-left-[120px] md:top-[66%] flex-col md:gap-16 z-20">
        {/* Badge: Last seen */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm w-fit border border-black/5 relative">
          <div className="absolute top-1/2 right-full w-32 h-[1.5px] bg-gradient-to-r from-transparent to-[#4ade80] -translate-y-1/2 opacity-60" />
          <BoltIcon />
          <span className="text-[13px] font-medium text-gray-700">Last seen</span>
          <span className="text-[12px] font-medium text-[#0d5920] bg-[#dcfce0] px-2 rounded-full py-0.5">
            today
          </span>
        </div>

        {/* Badge: Activated */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm w-fit border border-black/5 relative ml-10">
          <div className="absolute top-1/2 right-full w-32 h-[1.5px] bg-gradient-to-r from-transparent to-[#4ade80] -translate-y-1/2 opacity-60" />
          <BoltIcon />
          <span className="text-[13px] font-medium text-gray-700">Activated</span>
          <span className="text-[12px] font-medium text-[#0d5920] bg-[#dcfce0] px-2 rounded-full py-0.5">
            true
          </span>
          <HandwrittenAnnotation />
        </div>
      </div>

      {/* CRM table card — tucked into the bottom-right corner */}
      <div className="mt-auto ml-auto w-[95%] sm:w-[90%] md:w-[85%] xl:w-[82%] shadow-[-12px_-12px_32px_rgba(0,0,0,0.03)] z-10 flex rounded-br-[32px] overflow-hidden relative">
        <CRMTableCard />
      </div>
    </div>
  );
}
