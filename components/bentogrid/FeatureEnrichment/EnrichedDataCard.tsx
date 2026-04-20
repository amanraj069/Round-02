import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";

const { enrichment } = BENTO_GRID_DATA;

// Icons per key
const iconMap: Record<string, string> = {
  Website: "🌐",
  Location: "📍",
  Employees: "👥",
  Twitter: "𝕏",
  Funding: "💰",
  Qualified: "✅",
};

export function EnrichedDataCard() {
  return (
    <div className="w-full bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100 overflow-hidden">
      {/* AI Badge */}
      <div className="px-4 pt-4 pb-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-violet-600 bg-violet-50 border border-violet-100 rounded-full px-3 py-1">
          ✦ {enrichment.badge}
        </span>
      </div>

      {/* 2-column data grid */}
      <div className="grid grid-cols-2 divide-x divide-orange-100 border-t border-orange-100">
        {enrichment.details.map((item, idx) => (
          <div
            key={idx}
            className={`px-4 py-2.5 flex items-start gap-2 ${idx >= 2 ? "border-t border-orange-100" : ""}`}
          >
            <span className="text-sm mt-0.5 shrink-0">{iconMap[item.key] ?? "•"}</span>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">{item.key}</p>
              <p
                className={`text-[12px] font-semibold ${
                  item.type === "boolean" ? "text-green-500" : "text-gray-800"
                }`}
              >
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
