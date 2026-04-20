"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { IntercomProfileCard } from "./IntercomProfileCard";
import { CompanyActivationCard } from "./CompanyActivationCard";

const { reports } = BENTO_GRID_DATA;

/**
 * Top-row bento card showcasing automatic customer report generation.
 *
 * Renders two distinct layouts:
 * - **Mobile** (`<md`): Cards stacked vertically with the activation card
 *   popping out of the bottom via `translate-y`.
 * - **Desktop** (`≥md`): Cards overlap with absolute positioning inside
 *   a shared translucent white zone.
 */
export function FeatureReports() {
  return (
    <div
      className="relative w-full min-h-[360px] bg-[#d1f1fd] rounded-[32px] pl-8 pt-8 overflow-visible flex flex-col md:flex-row border border-black/10"
      role="group"
      aria-label={reports.title}
    >
      {/* Section heading */}
      <div className="md:w-2/5 flex items-start pt-2 pr-8 md:pr-4 pb-4 md:pb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] leading-tight">
          {reports.title}
        </h2>
      </div>

      {/* Mobile layout — stacked cards with activation overflow */}
      <div className="md:hidden relative flex-1 w-full overflow-visible">
        <div className="absolute inset-0 bg-white/80 rounded-tl-2xl rounded-br-[32px] z-0" />

        <div className="relative z-10 pt-4 px-5">
          <IntercomProfileCard />
        </div>

        <div className="relative z-20 px-5 pt-2 translate-y-10 -rotate-[2deg] scale-[0.9] origin-top">
          <CompanyActivationCard />
        </div>
      </div>

      {/* Desktop layout — overlapping absolute-positioned cards */}
      <div className="hidden md:block relative flex-1 min-h-[280px] w-full">
        <div className="absolute inset-0 bg-white/80 rounded-tl-2xl rounded-br-[32px] z-0" />

        <div className="absolute left-8 top-12 z-10">
          <IntercomProfileCard />
        </div>

        <div className="absolute right-[-12px] -bottom-10 z-30 -rotate-[3deg]">
          <CompanyActivationCard />
        </div>
      </div>
    </div>
  );
}
