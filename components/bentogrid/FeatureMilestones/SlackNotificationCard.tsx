import React from "react";
import { BENTO_GRID_DATA } from "@/constants/bentoGridData";

const { milestones } = BENTO_GRID_DATA;
const { alert } = milestones;

export function SlackNotificationCard() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-sm">
      
      {/* Slack-style top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          {/* June icon */}
          <div className="w-6 h-6 rounded-md bg-violet-500 flex items-center justify-center text-white text-[10px] font-bold">
            J
          </div>
          <span className="font-semibold text-gray-800 text-xs">{alert.app}</span>
          <span className="text-gray-400 text-xs">{alert.time}</span>
        </div>
        {/* Slack # icon */}
        <div className="w-6 h-6 rounded flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
            <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zM9.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5S11 2.67 11 3.5v5c0 .83-.67 1.5-1.5 1.5zM20.5 14.5h-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM20.5 9.5h-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="#E01E5A"/>
            <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5zM14.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S13 21.33 13 20.5v-5c0-.83.67-1.5 1.5-1.5zM3.5 9.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5S2.67 9.5 3.5 9.5zM3.5 14.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z" fill="#ECB22E"/>
          </svg>
        </div>
      </div>

      {/* Message body */}
      <div className="px-4 pt-3 pb-1">
        <p className="text-xs font-semibold text-gray-700 mb-1">
          🏆 {alert.title}
        </p>
        <p className="text-xs text-gray-500 mb-3">
          👤 {alert.user}{" "}
          <a className="text-violet-500 hover:underline">{alert.email}</a>
        </p>
      </div>

      {/* Details 2-column table */}
      <div className="mx-4 mb-4 border border-gray-100 rounded-xl overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-gray-100">
          {Object.entries(alert.details).map(([key, value], idx) => (
            <div
              key={idx}
              className={`px-3 py-2 ${idx >= 2 ? "border-t border-gray-100" : ""}`}
            >
              <p className="text-[10px] font-semibold text-gray-500">{key}</p>
              <p
                className={`text-[11px] mt-0.5 ${
                  value === "View profile" || value === "View company" || value === "intercom.io"
                    ? "text-violet-500"
                    : "text-gray-800 font-medium"
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
