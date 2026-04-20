"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { FloatingMapIcon } from "./FloatingMapIcon";
import { EnrichedDataCard } from "./EnrichedDataCard";

const { enrichment } = BENTO_GRID_DATA;

export function FeatureEnrichment() {
  return (
    // overflow-visible so floating icons bleed outside the card boundary
    <div className="relative w-full bg-[#feebce] rounded-[32px] p-8 overflow-visible flex flex-col gap-4">

      {/* Floating circular icons — absolute at right edge, mid-card vertically */}
      <div className="absolute top-[42%] -right-6 z-30">
        <FloatingMapIcon />
      </div>

      {/* Text block — max-width to avoid overlap with the icons */}
      <div className="max-w-[75%]">
        <h2 className="text-xl md:text-2xl font-bold text-[#7c3700] mb-2">
          {enrichment.title}
        </h2>
        <p className="text-sm text-[#a05a20] leading-relaxed">
          {enrichment.description}
        </p>
      </div>

      {/* Enriched data card */}
      <EnrichedDataCard />

    </div>
  );
}

