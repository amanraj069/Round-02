"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { FloatingMapIcon } from "./FloatingMapIcon";
import { EnrichedDataCard } from "./EnrichedDataCard";

const { enrichment } = BENTO_GRID_DATA;

export function FeatureEnrichment() {
  return (
    // overflow-hidden on the inner container clips the card to the bottom
    <div className="relative w-full h-full mt-16">
      
      {/* Floating circular icons — absolute at right edge, mid-card vertically */}
      <div className="absolute top-[42%] -right-6 z-30">
        <FloatingMapIcon />
      </div>

      <div className="w-full h-full bg-[#feebce] rounded-[32px] pt-8 px-8 flex flex-col justify-between overflow-hidden border border-black/10">
        {/* Text block — max-width to avoid overlap with the icons */}
        <div className="max-w-[75%] pb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#7c3700] mb-2">
            {enrichment.title}
          </h2>
          <p className="text-sm text-[#a05a20] leading-relaxed">
            {enrichment.description}
          </p>
        </div>

        {/* Enriched data card pulled down to the bottom */}
        <div className="mt-auto relative z-10 w-full translate-y-2">
          <EnrichedDataCard />
        </div>
      </div>
      
    </div>
  );
}

