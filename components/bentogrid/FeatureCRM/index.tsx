"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { CRMTableCard } from "./CRMTableCard";

const { crm } = BENTO_GRID_DATA;

export function FeatureCRM() {
  return (
    <div className="relative w-full h-full bg-[#dcfce0] rounded-[32px] pt-8 pl-8 overflow-visible flex flex-col justify-between border border-black/10">
      {/* Text block */}
      <div className="relative pr-8 pb-10">
        <h2 className="text-[22px] font-bold text-[#0d5920] tracking-tight mb-2">
          {crm.title}
        </h2>
        <p className="text-[14px] text-[#1b7a30] leading-[1.6] mb-2">
          {crm.description}
        </p>
      </div>

      {/* Badges on the absolute left edge of the green CRM container */}
      <div className="absolute -left-[60px] sm:-left-[80px] md:-left-[100px] lg:-left-[120px] top-[50%] sm:top-[60%] flex flex-col gap-16 z-20">
        {/* Badge 1 */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm w-fit border border-black/5 relative">
          {/* Green connection line */}
          <div className="absolute top-1/2 right-full w-16 sm:w-20 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent to-[#4ade80] -translate-y-1/2 opacity-60"></div>
          <svg
            className="w-4 h-4 text-[#4ade80] fill-current"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-[13px] font-medium text-gray-700">
            Last seen
          </span>
          <span className="text-[12px] font-medium text-[#0d5920] bg-[#dcfce0] px-2 rounded-full py-0.5">
            today
          </span>
        </div>

        {/* Badge 2 */}
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm w-fit border border-black/5 relative ml-6 sm:ml-10">
          {/* Green connection line */}
          <div className="absolute top-1/2 right-full w-16 sm:w-20 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent to-[#4ade80] -translate-y-1/2 opacity-60"></div>
          <svg
            className="w-4 h-4 text-[#4ade80] fill-current"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-[13px] font-medium text-gray-700">
            Activated
          </span>
          <span className="text-[12px] font-medium text-[#0d5920] bg-[#dcfce0] px-2 rounded-full py-0.5">
            true
          </span>

          {/* Handwritten text and arrow */}
          <div className="absolute -left-[340px] md:-left-[380px] top-[-60%] flex flex-col items-center pointer-events-none">
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
        </div>
      </div>

      {/* CRM table card perfectly tucked into bottom right corner via ml-auto */}
      <div className="mt-auto ml-auto w-[85%] sm:w-[90%] xl:w-[82%] shadow-[-12px_-12px_32px_rgba(0,0,0,0.03)] z-10 flex rounded-br-[32px] overflow-hidden relative">
        <CRMTableCard />
      </div>
    </div>
  );
}
