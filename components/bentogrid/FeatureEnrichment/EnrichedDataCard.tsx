import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { Globe, Users, Banknote, CheckCircle2, Sparkles } from "lucide-react";

const { enrichment } = BENTO_GRID_DATA;

// Icons per key
const iconMap: Record<string, React.ReactNode> = {
  Website: <Globe className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Location: <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Employees: <Users className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Twitter: <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Funding: <Banknote className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Qualified: <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />,
};

export function EnrichedDataCard() {
  return (
    <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-sm relative z-0">
      {/* AI Badge Header */}
      <div className="px-5 sm:px-6 pt-5 pb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[#b477f1] fill-[#b477f1]" />
        <span className="text-[15px] font-bold text-[#b477f1] tracking-wide">
          {enrichment.badge}
        </span>
      </div>

      {/* 2-column data grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 sm:px-6 pb-6 gap-y-3 gap-x-2">
        {enrichment.details.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="shrink-0 flex items-center justify-center">
              {iconMap[item.key] ?? <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />}
            </div>
            <div className="flex gap-2 items-center w-full">
              <p className="text-[13px] text-[#a1a1aa] font-medium w-[72px] shrink-0">{item.key}</p>
              <p
                className={`text-[13px] font-medium truncate ${
                  item.type === "boolean" ? "text-emerald-500" : "text-[#3f3f46]"
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
