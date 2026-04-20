"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { FloatingMapIcon } from "./FloatingMapIcon";
import { EnrichedDataCard } from "./EnrichedDataCard";

const { enrichment } = BENTO_GRID_DATA;

/**
 * Enrichment section showcasing AI-powered data enrichment.
 *
 * Features a floating map/Intercom icon at the card edge and an
 * enriched data card pulled toward the bottom. The outer wrapper
 * applies top margin on desktop to align with the adjacent grid column.
 */
export function FeatureEnrichment() {
  return (
    <div
      className="relative w-full h-full lg:mt-12 md:mt-16"
      role="group"
      aria-label={enrichment.title}
    >
      {/* Floating icons — positioned at the right edge */}
      <div className="absolute top-[42%] -right-4 md:-right-6 z-30">
        <FloatingMapIcon />
      </div>

      <div className="w-full h-full bg-[#feebce] rounded-[32px] pt-6 px-6 md:pt-8 md:px-8 flex flex-col justify-between overflow-hidden border border-black/10">
        {/* Section text — full width on mobile, constrained on desktop */}
        <div className="max-w-full md:max-w-[75%] pb-6 md:pb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7c3700] mb-1 md:mb-2">
            {enrichment.title}
          </h2>
          <p className="text-sm text-[#a05a20] leading-relaxed">
            {enrichment.description}
          </p>
        </div>

        {/* Data card — anchored to bottom edge */}
        <div className="mt-auto relative z-10 w-full translate-y-2">
          <EnrichedDataCard />
        </div>
      </div>
    </div>
  );
}
