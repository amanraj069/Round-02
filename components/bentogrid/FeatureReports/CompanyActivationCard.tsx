import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";

const { reports } = BENTO_GRID_DATA;

export function CompanyActivationCard() {
  return (
    <div
      className="
        relative z-20
        w-80 bg-white
        rounded-2xl p-5 border border-gray-100
        transition-transform duration-300 hover:-translate-y-1
      "
    >
      {/* Title */}
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">
        {reports.activation.title}
      </p>

      {/* Big percentage */}
      <p className="text-4xl font-bold text-gray-900 mb-5">
        {reports.activation.percentage}
      </p>

      {/* Progress rows */}
      <div className="space-y-2.5">
        {reports.activation.steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[11px]">
            <span className="w-20 text-gray-500 shrink-0">{step.label}</span>
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${step.progress}%` }}
              />
            </div>
            <span className="w-9 text-right font-semibold text-indigo-500">
              {step.progress}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
