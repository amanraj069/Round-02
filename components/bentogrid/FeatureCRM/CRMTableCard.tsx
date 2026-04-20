import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";
import { LayoutGrid } from "lucide-react";

const { crm } = BENTO_GRID_DATA;

const companyColors: Record<string, string> = {
  Intercom: "bg-[#092540]",
  Amie: "bg-pink-400",
};

export function CRMTableCard() {
  return (
    <div className="w-full bg-white rounded-tl-2xl sm:rounded-tl-[24px] shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header row */}
      <div className="flex items-center justify-between px-5 py-4 sm:px-6">
        <span className="text-[15px] font-bold text-[#1f2937]">CRM</span>
        <div className="flex items-center gap-3">
          {/* Attio Logo SVG */}
          <svg viewBox="0 0 24 24" width="22" height="22" className="fill-[#1b1b1b]">
            <path d="M14.63 7.828l-2.222 3.849a2.222 2.222 0 103.85 2.221l2.22-3.848a2.222 2.222 0 10-3.849-2.222zM7.227 15.656L4.72 20h3.585l2.508-4.344H7.227zM8.36 5L3.848 12.822a2.41 2.41 0 00.871 3.29 2.411 2.411 0 003.29-.871L12.52 7.42c.44-.761.183-1.73-.578-2.17A1.6 1.6 0 009.28 5.61l-.92 1.593v-2.2z" />
          </svg>
          {/* HubSpot Logo SVG */}
          <svg viewBox="0 0 24 24" width="24" height="24" className="fill-[#ff7a59]">
            <path d="M12 2a3.5 3.5 0 00-3.4 2.68L4.36 8A3.5 3.5 0 106 9.87l3.8-3C10.02 6.55 10.96 6 12 6c2.72 0 4.93 2.16 4.99 4.88l3.65 1.58A3.5 3.5 0 1022 13.5v-.59l-4-1.74a4.98 4.98 0 01-1.39-4.52A5 5 0 0012 2zm-5.5 13a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
          </svg>
        </div>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-2 px-5 sm:px-6 py-2 border-b border-gray-100/60 pb-3">
        {crm.table.headers.map((h, idx) => (
          <span
            key={idx}
            className="text-[13px] font-medium text-gray-500 capitalize tracking-wide flex items-center gap-1.5"
          >
            {idx === 1 && <LayoutGrid className="w-[14px] h-[14px] text-gray-400 stroke-[2.5]" />}
            {idx === 0 ? "Company" : "Active seats"}
          </span>
        ))}
      </div>

      {/* Table rows */}
      <div className="flex flex-col pt-1 pb-4">
        {crm.table.rows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-2 px-5 sm:px-6 py-2.5 items-center`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center ${companyColors[row.company] ?? "bg-gray-400"}`}
              >
                {row.company === "Intercom" && (
                  <span className="text-white text-[7px] font-bold tracking-[0.1em] scale-75">|||||</span>
                )}
              </div>
              <span className="text-[14px] text-[#374151] font-medium">
                {row.company}
              </span>
            </div>
            <span
              className={`text-[13px] font-semibold ${row.seats.includes("+") ? "text-emerald-500" : "text-red-400/90"}`}
            >
              {row.seats}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
