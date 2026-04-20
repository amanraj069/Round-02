"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { IntercomProfileCard } from "./IntercomProfileCard";
import { CompanyActivationCard } from "./CompanyActivationCard";

const { reports } = BENTO_GRID_DATA;

export function FeatureReports() {
  return (
    <div className="relative w-full min-h-[360px] bg-[#d1f1fd] rounded-[32px] p-8 overflow-visible flex flex-col md:flex-row gap-8">

      {/* Left: Heading text */}
      <div className="md:w-2/5 flex items-start pt-2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] leading-tight">
          {reports.title}
        </h2>
      </div>

      {/* Right: Shared card zone */}
      <div className="relative flex-1 min-h-[280px]">

        {/* Shared background container — sits behind both cards, gradient visible above Intercom card */}
        <div className="absolute left-0 top-0 right-14 bottom-4 bg-white/80 rounded-2xl overflow-hidden z-0">
          {/* Gradient strip at the top of the shared background */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-r from-rose-200 via-pink-200 to-red-200 opacity-80" />
        </div>

        {/* Intercom card — on top of the shared background, pushed down so gradient is visible above it */}
        <div className="absolute left-4 top-14 z-10">
          <IntercomProfileCard />
        </div>

        {/* Activation card — pops to the right, bleeds below */}
        <div className="absolute right-0 md:-right-10 -bottom-20 z-30 -rotate-[4deg]">
          <CompanyActivationCard />
        </div>

      </div>
    </div>
  );
}

