"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { IntercomProfileCard } from "./IntercomProfileCard";
import { CompanyActivationCard } from "./CompanyActivationCard";

const { reports } = BENTO_GRID_DATA;

export function FeatureReports() {
  return (
    <div className="relative w-full min-h-[360px] bg-[#d1f1fd] rounded-[32px] pl-8 pt-8 overflow-visible flex flex-col md:flex-row border border-black/10">
      {/* Left: Heading text */}
      <div className="md:w-2/5 flex items-start pt-2 pr-8 md:pr-4 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] leading-tight">
          {reports.title}
        </h2>
      </div>

      {/* Right: Shared card zone */}
      <div className="relative flex-1 min-h-[280px] w-full mt-4 md:mt-0">
        {/* Shared background container — tucked nicely to the bottom right */}
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-white/80 rounded-tl-2xl rounded-br-[32px] z-0"></div>

        {/* Intercom card */}
        <div className="absolute left-6 top-8 md:left-8 md:top-12 z-10">
          <IntercomProfileCard />
        </div>

        {/* Activation card */}
        <div className="absolute right-[-12px] md:-right-[-16] -bottom-10 z-30 -rotate-[3deg]">
          <CompanyActivationCard />
        </div>
      </div>
    </div>
  );
}
