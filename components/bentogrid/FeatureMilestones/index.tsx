"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { SlackNotificationCard } from "./SlackNotificationCard";

const { milestones } = BENTO_GRID_DATA;

export function FeatureMilestones() {
  return (
    <div className="relative w-full bg-[#f6e3f9] rounded-[32px] pt-10 px-10 pb-12 overflow-visible flex flex-col border border-black/10">

      {/* Text block */}
      <div className="mb-6">
        <h2 className="text-4xl md:text-3xl font-bold text-[#5b1e8c] mb-2">
          {milestones.title}
        </h2>
        <p className="text-xl text-[#7c4da0] leading-relaxed">
          {milestones.description}
        </p>
      </div>

      {/* Slack card — centered and slightly narrowed so it floats within the section */}
      <div className="flex-1 flex items-start justify-center mt-6">
        <div className="w-full max-w-sm">
          <SlackNotificationCard />
        </div>
      </div>

    </div>
  );
}
