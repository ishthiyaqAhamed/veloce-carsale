"use client";

import React from "react";

export type VehicleBodyType =
  | "all"
  | "cars"
  | "suv"
  | "double-cab"
  | "vans"
  | "mpv"
  | "buses"
  | "trucks";

interface BodyTypeSelectorProps {
  selectedType: VehicleBodyType;
  onSelect: (type: VehicleBodyType) => void;
}

interface CategoryOption {
  id: VehicleBodyType;
  label: string;
  icon: React.ReactNode;
}

export default function BodyTypeSelector({
  selectedType,
  onSelect,
}: BodyTypeSelectorProps) {
  const categories: CategoryOption[] = [
    {
      id: "cars",
      label: "Cars",
      icon: (
        <svg
          viewBox="0 0 120 40"
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sedan Car Silhouette */}
          <path
            d="M 10 28 C 8 28 6 26 6 24 C 6 21 8 19 12 19 L 26 19 C 34 19 41 14 47 9 C 53 5 62 4 82 4 C 92 4 98 7 103 12 L 110 18 C 113 19 114 21 114 24 C 114 27 112 28 108 28 L 99 28 C 98 22 93 17 86 17 C 79 17 74 22 73 28 L 47 28 C 46 22 41 17 34 17 C 27 17 22 22 21 28 Z"
          />
          {/* Windows Cutout */}
          <path
            d="M 48 10 C 53 6 61 6 72 6 L 72 17 L 35 17 C 40 13 44 11 48 10 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 75 6 L 82 6 C 89 6 94 8 98 12 L 102 17 L 75 17 Z"
            fill="#FFFFFF"
          />
          {/* Wheels */}
          <circle cx="86" cy="28" r="7.5" fill="currentColor" />
          <circle cx="86" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="86" cy="28" r="2.5" fill="currentColor" />

          <circle cx="34" cy="28" r="7.5" fill="currentColor" />
          <circle cx="34" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="34" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "suv",
      label: "SUV",
      icon: (
        <svg
          viewBox="0 0 120 40"
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Roof Rails */}
          <path d="M 38 2 L 86 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* SUV Body Silhouette */}
          <path
            d="M 8 28 C 6 28 5 25 5 21 C 5 16 9 14 15 14 L 33 14 C 38 8 44 4 54 4 L 88 4 C 94 4 99 8 103 13 L 111 17 C 114 19 115 22 114 26 C 114 28 111 28 107 28 L 98 28 C 97 22 92 17 85 17 C 78 17 73 22 72 28 L 48 28 C 47 22 42 17 35 17 C 28 17 23 22 22 28 Z"
          />
          {/* Windows Cutout */}
          <path
            d="M 36 14 C 40 9 45 6 53 6 L 68 6 L 68 14 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 71 6 L 85 6 L 85 14 L 71 14 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 88 6 C 92 6 96 8 99 12 L 102 14 L 88 14 Z"
            fill="#FFFFFF"
          />
          {/* SUV Wheels */}
          <circle cx="85" cy="28" r="8" fill="currentColor" />
          <circle cx="85" cy="28" r="5" fill="#FFFFFF" />
          <circle cx="85" cy="28" r="2.5" fill="currentColor" />

          <circle cx="35" cy="28" r="8" fill="currentColor" />
          <circle cx="35" cy="28" r="5" fill="#FFFFFF" />
          <circle cx="35" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "double-cab",
      label: "Double Cab",
      icon: (
        <svg
          viewBox="0 0 120 40"
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sports Bar */}
          <path d="M 40 15 L 43 7 L 49 7 L 52 15" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          {/* Double Cab Body */}
          <path
            d="M 6 28 L 5 17 L 38 17 L 41 8 C 44 5 50 5 60 5 L 81 5 C 88 5 93 8 97 13 L 107 17 C 112 19 114 22 113 26 C 113 28 110 28 106 28 L 97 28 C 96 22 91 17 84 17 C 77 17 72 22 71 28 L 47 28 C 46 22 41 17 34 17 C 27 17 22 22 21 28 Z"
          />
          {/* Cabin Windows */}
          <path
            d="M 43 15 L 42 8 C 47 7 53 6 61 6 L 61 15 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 64 6 L 78 6 C 83 6 87 8 91 13 L 93 15 L 64 15 Z"
            fill="#FFFFFF"
          />
          {/* Wheels */}
          <circle cx="84" cy="28" r="8" fill="currentColor" />
          <circle cx="84" cy="28" r="5" fill="#FFFFFF" />
          <circle cx="84" cy="28" r="2.5" fill="currentColor" />

          <circle cx="34" cy="28" r="8" fill="currentColor" />
          <circle cx="34" cy="28" r="5" fill="#FFFFFF" />
          <circle cx="34" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "vans",
      label: "Vans",
      icon: (
        <svg
          viewBox="0 0 120 40"
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Van Body */}
          <path
            d="M 8 28 L 6 24 C 6 15 8 8 13 6 C 18 4 32 4 60 4 C 84 4 98 5 104 9 L 111 16 C 114 19 114 23 113 27 C 113 28 110 28 106 28 L 98 28 C 97 22 92 17 85 17 C 78 17 73 22 72 28 L 47 28 C 46 22 41 17 34 17 C 27 17 22 22 21 28 Z"
          />
          {/* Van Windows */}
          <path
            d="M 14 7 C 22 6 32 6 41 6 L 41 15 L 12 15 C 12 11 13 8 14 7 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 44 6 L 70 6 L 70 15 L 44 15 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 73 6 L 90 6 L 90 15 L 73 15 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 93 6 C 98 6 102 8 105 11 L 109 15 L 93 15 Z"
            fill="#FFFFFF"
          />
          {/* Wheels */}
          <circle cx="85" cy="28" r="7.5" fill="currentColor" />
          <circle cx="85" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="85" cy="28" r="2.5" fill="currentColor" />

          <circle cx="34" cy="28" r="7.5" fill="currentColor" />
          <circle cx="34" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="34" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "mpv",
      label: "MPV",
      icon: (
        <svg
          viewBox="0 0 120 40"
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Streamlined MPV Body */}
          <path
            d="M 8 28 L 6 22 C 6 14 11 9 17 8 C 25 6 42 5 66 5 C 84 5 96 7 103 12 L 111 17 C 114 19 114 23 113 27 C 113 28 110 28 106 28 L 98 28 C 97 22 92 17 85 17 C 78 17 73 22 72 28 L 47 28 C 46 22 41 17 34 17 C 27 17 22 22 21 28 Z"
          />
          {/* Windows */}
          <path
            d="M 17 9 C 24 7 38 6 50 6 L 50 15 L 15 15 C 15 12 16 10 17 9 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 53 6 L 79 6 L 79 15 L 53 15 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 82 6 C 90 6 98 8 103 12 L 107 15 L 82 15 Z"
            fill="#FFFFFF"
          />
          {/* Wheels */}
          <circle cx="85" cy="28" r="7.5" fill="currentColor" />
          <circle cx="85" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="85" cy="28" r="2.5" fill="currentColor" />

          <circle cx="34" cy="28" r="7.5" fill="currentColor" />
          <circle cx="34" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="34" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "buses",
      label: "Buses",
      icon: (
        <svg
          viewBox="0 0 120 40"
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bus Body */}
          <path
            d="M 6 28 L 5 18 C 5 8 7 4 12 3 C 18 2 34 2 70 2 C 92 2 105 3 111 6 C 115 9 116 15 116 26 C 116 28 114 28 110 28 L 98 28 C 97 22 92 17 85 17 C 78 17 73 22 72 28 L 44 28 C 43 22 38 17 31 17 C 24 17 19 22 18 28 Z"
          />
          {/* Panoramic Bus Windows Strip */}
          <path
            d="M 11 4 C 23 3 60 3 102 3 C 107 3 111 5 113 9 L 114 14 L 9 14 C 9 9 10 5 11 4 Z"
            fill="#FFFFFF"
          />
          {/* Mullion divider lines */}
          {[24, 39, 54, 69, 84, 99].map((x) => (
            <line key={x} x1={x} y1="3" x2={x} y2="14" stroke="currentColor" strokeWidth="1" />
          ))}
          {/* Wheels */}
          <circle cx="85" cy="28" r="7.5" fill="currentColor" />
          <circle cx="85" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="85" cy="28" r="2.5" fill="currentColor" />

          <circle cx="31" cy="28" r="7.5" fill="currentColor" />
          <circle cx="31" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="31" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "trucks",
      label: "Trucks",
      icon: (
        <svg
          viewBox="0 0 120 40"
          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flatbed Chassis */}
          <rect x="5" y="19" width="72" height="3" fill="currentColor" rx="1" />
          <rect x="8" y="22" width="68" height="4" fill="currentColor" rx="1" />
          
          {/* Truck Cab */}
          <path
            d="M 80 28 L 79 8 C 79 5 83 4 89 4 L 107 4 C 112 4 115 7 116 11 L 116 26 C 116 28 113 28 110 28 L 104 28 C 103 22 98 17 91 17 C 88 17 85 19 83 22 L 80 22 Z"
          />
          {/* Cab Window */}
          <path
            d="M 83 6 L 104 6 C 109 6 112 8 114 12 L 114 15 L 83 15 Z"
            fill="#FFFFFF"
          />
          {/* Wheels */}
          <circle cx="91" cy="28" r="7.5" fill="currentColor" />
          <circle cx="91" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="91" cy="28" r="2.5" fill="currentColor" />

          <circle cx="23" cy="28" r="7.5" fill="currentColor" />
          <circle cx="23" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="23" cy="28" r="2.5" fill="currentColor" />

          <circle cx="41" cy="28" r="7.5" fill="currentColor" />
          <circle cx="41" cy="28" r="4.5" fill="#FFFFFF" />
          <circle cx="41" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200 py-4 px-2 sm:px-4 mb-10 shadow-2xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-1 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(isSelected ? "all" : cat.id)}
                className="flex-1 min-w-[78px] sm:min-w-[95px] max-w-[130px] flex flex-col items-center justify-end group transition-all cursor-pointer relative pb-2"
              >
                {/* Vehicle Side Profile Graphic (Fully Black Vector, Compact Height) */}
                <div
                  className={`w-full h-7 sm:h-8 flex items-center justify-center mb-1.5 px-0.5 transition-colors ${
                    isSelected
                      ? "text-[#E11D48]"
                      : "text-slate-900 group-hover:text-black"
                  }`}
                >
                  {cat.icon}
                </div>

                {/* Active Indicator Underline */}
                <div
                  className={`w-full h-[2.5px] rounded-full transition-all duration-300 mb-1.5 ${
                    isSelected
                      ? "bg-[#E11D48] opacity-100 scale-x-100"
                      : "bg-transparent opacity-0 scale-x-50 group-hover:bg-slate-300 group-hover:opacity-100 group-hover:scale-x-75"
                  }`}
                />

                {/* Category Label */}
                <span
                  className={`text-[11px] sm:text-xs font-sans font-bold transition-colors whitespace-nowrap ${
                    isSelected
                      ? "text-[#E11D48]"
                      : "text-slate-700 group-hover:text-slate-950"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
