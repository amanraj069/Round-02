import React from "react";

// Circular floating icons — map thumbnail (behind) + Intercom logo (front)
// Positioned via parent absolute container in FeatureEnrichment/index.tsx
export function FloatingMapIcon() {
  return (
    <div className="flex items-center">
      {/* Circular map thumbnail — sits behind */}
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 flex items-center justify-center shrink-0 z-10">
        <svg viewBox="0 0 40 40" className="w-10 h-10 opacity-70">
          <rect x="4" y="8" width="13" height="24" rx="1" fill="#86efac" stroke="#4ade80" strokeWidth="0.5"/>
          <rect x="21" y="4" width="15" height="15" rx="1" fill="#6ee7b7" stroke="#34d399" strokeWidth="0.5"/>
          <rect x="21" y="23" width="15" height="13" rx="1" fill="#a7f3d0" stroke="#6ee7b7" strokeWidth="0.5"/>
          <line x1="4" y1="20" x2="36" y2="20" stroke="#4ade80" strokeWidth="0.5"/>
          <line x1="18" y1="4" x2="18" y2="36" stroke="#4ade80" strokeWidth="0.5"/>
          <circle cx="11" cy="14" r="2.5" fill="#22c55e"/>
        </svg>
      </div>

      {/* Circular Intercom logo — overlaps map, sits in front */}
      <div className="w-12 h-12 rounded-full bg-[#0a2540] flex items-center justify-center shadow-lg -ml-3 z-20 border-2 border-white shrink-0">
        <span className="text-white text-[9px] font-bold tracking-widest">|||||</span>
      </div>
    </div>
  );
}

