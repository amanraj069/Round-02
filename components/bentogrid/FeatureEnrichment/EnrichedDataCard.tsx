import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { Globe, Users, Banknote, CheckCircle2, Sparkles } from "lucide-react";
import type { EnrichmentDetail } from "@/constants/bentoGridData";

const { enrichment } = BENTO_GRID_DATA;

/** Icon mapping for each enrichment data field key. */
const FIELD_ICONS: Record<string, React.ReactNode> = {
  Website: <Globe className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Location: <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Employees: <Users className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Twitter: <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Funding: <Banknote className="w-[18px] h-[18px] text-[#a1a1aa]" />,
  Qualified: <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />,
};

const FALLBACK_ICON = <CheckCircle2 className="w-[18px] h-[18px] text-[#a1a1aa]" />;

/** Single row inside the enriched data card grid. */
function DataField({ item }: { item: EnrichmentDetail }) {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0 flex items-center justify-center">
        {FIELD_ICONS[item.key] ?? FALLBACK_ICON}
      </div>
      <div className="flex gap-2 items-center w-full">
        <p className="text-[13px] text-[#a1a1aa] font-medium w-[72px] shrink-0">
          {item.key}
        </p>
        <p
          className={`text-[13px] font-medium truncate ${
            item.type === "boolean" ? "text-emerald-500" : "text-[#3f3f46]"
          }`}
        >
          {item.value}
        </p>
      </div>
    </div>
  );
}

/** AI-enriched data card showing auto-populated company fields. */
export function EnrichedDataCard() {
  return (
    <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-sm relative z-0">
      {/* AI badge header */}
      <div className="px-5 sm:px-6 pt-5 pb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[#b477f1] fill-[#b477f1]" aria-hidden="true" />
        <span className="text-[15px] font-bold text-[#b477f1] tracking-wide">
          {enrichment.badge}
        </span>
      </div>

      {/* Data grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 sm:px-6 pb-6 gap-y-3 gap-x-2">
        {enrichment.details.map((item) => (
          <DataField key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}
