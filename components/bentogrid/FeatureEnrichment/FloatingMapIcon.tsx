import React from "react";

// Circular floating icons — map thumbnail (behind) + Intercom logo (front)
// Positioned via parent absolute container in FeatureEnrichment/index.tsx
export function FloatingMapIcon() {
  return (
    <div className="flex items-center">
      {/* Circular map thumbnail — sits behind */}
      <div className="w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-white shadow bg-cover bg-center shrink-0 z-10 relative bg-[#f8f9fa]">
        {/* Simplified map representation */}
        <div className="absolute inset-0 opacity-40">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path d="M10 20 L40 10 L70 30 L90 5" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            <path d="M20 50 L50 40 L80 60 L100 35" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            <path d="M0 80 L30 70 L60 80 L90 60" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            <path d="M30 0 L30 100" stroke="#cbd5e1" strokeWidth="1" fill="none" />
            <path d="M70 0 L70 100" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          </svg>
        </div>
        {/* Location Pin */}
        <div className="absolute top-[35%] left-[40%] flex flex-col items-center">
          <div className="w-2.5 h-2.5 bg-red-400 rounded-full border border-white shadow-sm"></div>
          <div className="bg-red-50 text-red-500 text-[6px] font-bold px-1 rounded-sm shadow-sm mt-0.5">Dublin</div>
        </div>
      </div>

      {/* Circular Intercom logo — overlaps map, sits in front */}
      <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-md -ml-3 z-20 border-2 border-white shrink-0">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#092540]">
           <path d="M12 2C6.477 2 2 6.477 2 12c0 1.705.433 3.313 1.196 4.743.102.193.125.419.065.63l-1.071 3.754c-.161.564.364 1.05.9.833l3.52-1.423a.81.81 0 0 1 .71.045A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-5 8h1v5H7v-5Zm3-1h1v7h-1v-7Zm3 0h1v7h-1v-7Zm3 1h1v5h-1v-5Z" />
        </svg>
      </div>
    </div>
  );
}

