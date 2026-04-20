import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";

const { reports } = BENTO_GRID_DATA;

export function IntercomProfileCard() {
  return (
    <div
      className="
        relative z-10
        w-72 bg-white
        rounded-2xl p-5 shadow-sm border border-gray-100
        transition-transform duration-300 hover:scale-[1.02]
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3 mb-5">
        {/* Gradient strip at the top of the shared background */}
        {/* <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-r from-rose-200 via-pink-200 to-red-200 opacity-80" /> */}
        <div className="w-10 h-10 bg-[#0a2540] rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-widest">
          |||||
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{reports.profile.company}</p>
          <p className="text-xs text-gray-500">{reports.profile.joined}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        {reports.profile.stats.map((stat, idx) => (
          <div key={idx} className="flex justify-between items-center text-xs border-t border-gray-100 pt-2">
            <span className="flex items-center gap-1.5 text-gray-600">
              <span className="text-green-500 text-sm">⚡</span>
              {stat.label}
            </span>
            <span className="font-semibold text-gray-900">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
