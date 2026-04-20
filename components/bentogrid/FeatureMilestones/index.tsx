"use client";

import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { SlackNotificationCard } from "./SlackNotificationCard";

const { milestones } = BENTO_GRID_DATA;

/**
 * Milestone celebration section with a Slack-style notification card.
 * Highlights real-time alerts and weekly digests for team visibility.
 */
export function FeatureMilestones() {
  return (
    <div
      className="relative w-full bg-[#f6e3f9] rounded-[32px] pt-8 px-6 pb-10 md:pt-10 md:px-10 md:pb-12 overflow-visible flex flex-col border border-black/10 mt-8 lg:mt-0"
      role="group"
      aria-label={milestones.title}
    >
      {/* Section text */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5b1e8c] mb-2">
          {milestones.title}
        </h2>
        <p className="text-base md:text-xl text-[#7c4da0] leading-relaxed">
          {milestones.description}
        </p>
      </div>

      {/* Notification card — centered with constrained width */}
      <div className="flex-1 flex items-start justify-center my-6">
        <div className="w-full max-w-sm">
          <SlackNotificationCard />
        </div>
      </div>
    </div>
  );
}
