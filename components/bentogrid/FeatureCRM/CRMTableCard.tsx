import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";

const { crm } = BENTO_GRID_DATA;

const companyColors: Record<string, string> = {
  Intercom: "bg-[#0a2540]",
  Amie: "bg-pink-400",
};

export function CRMTableCard() {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header row */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="text-sm font-semibold text-gray-700">CRM</span>
        <div className="flex items-center gap-2">
          {/* Attio-style logo */}
          <div className="w-6 h-6 rounded-md bg-gray-800 flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">A</span>
          </div>
          {/* HubSpot-style logo */}
          <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">H</span>
          </div>
        </div>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-2 px-4 py-2 border-b border-gray-50">
        {crm.table.headers.map((h, idx) => (
          <span key={idx} className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1">
            {idx === 1 && <span className="text-gray-300">⊕</span>}
            {h}
          </span>
        ))}
      </div>

      {/* Table rows */}
      {crm.table.rows.map((row, idx) => (
        <div key={idx} className={`grid grid-cols-2 px-4 py-3 items-center ${idx !== crm.table.rows.length - 1 ? "border-b border-gray-50" : ""}`}>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-sm ${companyColors[row.company] ?? "bg-gray-400"}`} />
            <span className="text-sm text-gray-800 font-medium">{row.company}</span>
          </div>
          <span className={`text-sm font-semibold ${row.seats.includes("+") ? "text-emerald-600" : "text-red-400"}`}>
            {row.seats}
          </span>
        </div>
      ))}
    </div>
  );
}
