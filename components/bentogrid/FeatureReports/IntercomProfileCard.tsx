import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import type { ProfileStat } from "@/constants/bentoGridData";

const { reports } = BENTO_GRID_DATA;

/** Single stat row inside the Intercom profile card. */
function StatRow({ stat }: { stat: ProfileStat }) {
  return (
    <div className="flex justify-between items-center text-xs border-t border-gray-100 pt-2">
      <span className="flex items-center gap-1.5 text-gray-600">
        <span className="text-green-500 text-sm" aria-hidden="true">⚡</span>
        {stat.label}
      </span>
      <span className="font-semibold text-gray-900">{stat.value}</span>
    </div>
  );
}

/** Intercom-style profile summary card displaying company metadata. */
export function IntercomProfileCard() {
  return (
    <div
      className="
        relative z-10 overflow-hidden
        w-72 bg-white
        rounded-2xl p-5 shadow-sm border border-gray-100
        transition-transform duration-300 hover:scale-[1.02]
      "
    >
      {/* Decorative top bar */}
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-[#fce7eb] to-[#f8d0d8]" />

      {/* Company header */}
      <div className="relative flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 bg-[#0a2540] rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-widest"
          aria-label="Intercom logo"
        >
          |||||
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{reports.profile.company}</p>
          <p className="text-xs text-gray-500">{reports.profile.joined}</p>
        </div>
      </div>

      {/* Stats list */}
      <div className="space-y-3">
        {reports.profile.stats.map((stat, idx) => (
          <StatRow key={idx} stat={stat} />
        ))}
      </div>
    </div>
  );
}
