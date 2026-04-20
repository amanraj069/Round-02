"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { CRMTableCard } from "./CRMTableCard";

const { crm } = BENTO_GRID_DATA;

export function FeatureCRM() {
  return (
    <div className="relative w-full h-full bg-[#dcfce0] rounded-[32px] pt-8 pl-8 overflow-hidden flex flex-col justify-between border border-black/10">
      {/* Text block */}
      <div className="pr-8 pb-10">
        <h2 className="text-[22px] font-bold text-[#0d5920] tracking-tight mb-2">
          {crm.title}
        </h2>
        <p className="text-[14px] text-[#1b7a30] leading-[1.6] mb-2">
          {crm.description}
        </p>
      </div>

      {/* CRM table card perfectly tucked into bottom right corner via ml-auto */}
      <div className="mt-auto ml-auto w-[85%] sm:w-[90%] xl:w-[82%] shadow-[-12px_-12px_32px_rgba(0,0,0,0.03)] z-10 flex">
        <CRMTableCard />
      </div>
    </div>
  );
}
