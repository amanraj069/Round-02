import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import type { ActivationStep } from "@/constants/bentoGridData";

const { reports } = BENTO_GRID_DATA;

/** Emoji icons mapped to each activation step label. */
const STEP_EMOJIS: Record<string, string> = {
  "Signed up": "👋",
  Setup: "⚙️",
  "Aha moment": "🥳",
  Activated: "🌗",
  Active: "🏃",
};

/** Single progress row inside the activation card. */
function ProgressRow({ step }: { step: ActivationStep }) {
  const emoji = STEP_EMOJIS[step.label] ?? "✨";

  return (
    <div className="flex items-center justify-between gap-1 text-[14px]">
      <span className="w-[110px] text-[#4e5b6e] flex items-center gap-[8px]">
        <span className="text-[15px] grayscale-[0.2]" aria-hidden="true">
          {emoji}
        </span>
        {step.label}
      </span>

      {/* Progress bar */}
      <div
        className="flex-1 h-[6px] bg-[#f0f0f5] rounded-full flex"
        role="progressbar"
        aria-valuenow={step.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${step.label}: ${step.progress}%`}
      >
        <div
          className="h-full bg-[#6a5ced] rounded-full shadow-sm transition-all duration-500"
          style={{ width: `${step.progress}%` }}
        />
      </div>

      <span className="w-10 text-right text-[13px] font-semibold text-[#6a5ced]">
        {step.progress}%
      </span>
    </div>
  );
}

/** Company activation funnel card showing progress across onboarding steps. */
export function CompanyActivationCard() {
  return (
    <div
      className="
        relative z-20
        w-80 min-h-[300px] bg-white flex flex-col
        rounded-[16px] p-6 border border-black/5 shadow-xl
        transition-transform duration-300 hover:-translate-y-1
      "
    >
      <p className="text-[17px] font-semibold text-[#4e5b6e] mb-2 leading-tight">
        {reports.activation.title}
      </p>

      <p className="text-[46px] font-bold text-[#1d2331] mb-2 leading-[1.1] tracking-tight">
        {reports.activation.percentage}
      </p>

      <div className="space-y-3 flex-1 flex flex-col justify-end mt-2">
        {reports.activation.steps.map((step, idx) => (
          <ProgressRow key={idx} step={step} />
        ))}
      </div>
    </div>
  );
}
