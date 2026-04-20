"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { CRMTableCard } from "./CRMTableCard";

const { crm } = BENTO_GRID_DATA;

export function FeatureCRM() {
  return (
    // overflow-visible so CRM table card can bleed downward
    <div className="relative w-full bg-[#dbf6d6] rounded-[32px] p-8 overflow-visible flex flex-col gap-4">

      {/* Text block */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#1a6e2e] mb-2">
          {crm.title}
        </h2>
        <p className="text-sm text-[#3a8b4e] leading-relaxed">
          {crm.description}
        </p>
      </div>

      {/* CRM table card — absolutely positioned to pop out of the bottom-right */}
      <div className="absolute bottom-[-2rem] right-[-16] w-[88%] z-20 shadow-xl rounded-2xl">
        <CRMTableCard />
      </div>

      {/* Spacer to ensure the card doesn't collapse the section height */}
      <div className="h-32" />

    </div>
  );
}
