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
          viewBox="0 0 160 60"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car Body Gradient */}
          <defs>
            <linearGradient id="carRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E11D48" />
              <stop offset="45%" stopColor="#BE123C" />
              <stop offset="85%" stopColor="#881337" />
              <stop offset="100%" stopColor="#4C0519" />
            </linearGradient>
            <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="80" cy="54" rx="72" ry="3.5" fill="#000000" fillOpacity="0.25" />

          {/* Sedan Main Body Shape */}
          <path
            d="M 12 45 L 8 41 C 7 38 10 34 16 33 L 34 32 C 45 32 55 24 64 17 C 72 11 86 10 114 11 C 126 11 135 15 142 22 L 152 32 C 156 34 157 37 156 41 L 153 45 C 150 46 142 46 138 46 C 137 38 128 32 119 32 C 110 32 101 38 100 46 L 60 46 C 59 38 50 32 41 32 C 32 32 23 38 22 46 Z"
            fill="url(#carRed)"
          />

          {/* Roof & Pillars Highlight */}
          <path
            d="M 64 17 C 72 11 86 10 114 11 C 126 11 135 15 142 22 L 140 23 C 133 16 125 12 114 12 C 86 12 73 13 65 18 Z"
            fill="#FDA4AF"
            fillOpacity="0.6"
          />

          {/* Windows / Greenhouse */}
          <path
            d="M 66 18 C 73 13 84 12 102 12 L 102 29 L 46 29 C 53 23 60 19 66 18 Z"
            fill="url(#glass)"
          />
          <path
            d="M 105 12 C 116 12 125 14 133 21 L 138 29 L 105 29 Z"
            fill="url(#glass)"
          />

          {/* Window Chrome Trim */}
          <path
            d="M 44 30 L 140 30 L 134 21 C 126 14 116 12 104 12 C 85 12 73 13 65 18 C 58 20 51 24 44 30 Z"
            stroke="#94A3B8"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />

          {/* Door Lines & Creases */}
          <line x1="103" y1="12" x2="103" y2="45" stroke="#4C0519" strokeWidth="1" />
          <line x1="68" y1="29" x2="66" y2="45" stroke="#4C0519" strokeWidth="1" />
          <path d="M 28 34 L 145 34" stroke="#FB7185" strokeWidth="0.6" strokeOpacity="0.7" />

          {/* Headlight & Taillight */}
          <path d="M 152 33 L 156 35 L 152 38 Z" fill="#F8FAFC" />
          <path d="M 8 36 L 14 36 L 12 40 L 7 39 Z" fill="#EF4444" />

          {/* Wheels */}
          {/* Front Wheel */}
          <circle cx="119" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="119" cy="46" r="7" fill="#94A3B8" />
          <circle cx="119" cy="46" r="6" fill="#0F172A" />
          <circle cx="119" cy="46" r="2.5" fill="#E2E8F0" />
          <line x1="119" y1="40" x2="119" y2="52" stroke="#E2E8F0" strokeWidth="0.8" />
          <line x1="113" y1="46" x2="125" y2="46" stroke="#E2E8F0" strokeWidth="0.8" />

          {/* Rear Wheel */}
          <circle cx="41" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="41" cy="46" r="7" fill="#94A3B8" />
          <circle cx="41" cy="46" r="6" fill="#0F172A" />
          <circle cx="41" cy="46" r="2.5" fill="#E2E8F0" />
          <line x1="41" y1="40" x2="41" y2="52" stroke="#E2E8F0" strokeWidth="0.8" />
          <line x1="35" y1="46" x2="47" y2="46" stroke="#E2E8F0" strokeWidth="0.8" />
        </svg>
      ),
    },
    {
      id: "suv",
      label: "SUV",
      icon: (
        <svg
          viewBox="0 0 160 60"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="80" cy="54" rx="72" ry="3.5" fill="#000000" fillOpacity="0.25" />

          {/* Roof Rails */}
          <path d="M 52 7 L 118 7" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="56" y1="7" x2="56" y2="10" stroke="#334155" strokeWidth="1.5" />
          <line x1="114" y1="7" x2="114" y2="10" stroke="#334155" strokeWidth="1.5" />

          {/* SUV Body Shape */}
          <path
            d="M 10 44 L 8 36 C 8 28 14 26 22 26 L 46 25 C 52 16 60 10 74 9 L 122 9 C 130 9 136 14 142 22 L 151 28 C 155 31 156 36 155 43 L 152 46 C 148 47 141 47 137 47 C 136 37 125 30 115 30 C 105 30 94 37 93 47 L 62 47 C 61 37 50 30 40 30 C 30 30 19 37 18 47 L 11 47 Z"
            fill="url(#carRed)"
          />

          {/* Windows */}
          <path
            d="M 50 24 C 55 17 62 12 73 11 L 96 11 L 96 24 Z"
            fill="url(#glass)"
          />
          <path
            d="M 99 11 L 118 11 L 118 24 L 99 24 Z"
            fill="url(#glass)"
          />
          <path
            d="M 121 11 C 128 11 133 14 138 20 L 140 24 L 121 24 Z"
            fill="url(#glass)"
          />

          {/* Side Creases & Wheel Arches */}
          <path d="M 10 32 L 153 32" stroke="#FB7185" strokeWidth="0.6" strokeOpacity="0.7" />
          <line x1="97" y1="11" x2="97" y2="46" stroke="#4C0519" strokeWidth="1" />
          <line x1="119" y1="11" x2="119" y2="46" stroke="#4C0519" strokeWidth="1" />

          {/* Headlight & Taillight */}
          <path d="M 150 30 L 155 32 L 150 35 Z" fill="#F8FAFC" />
          <path d="M 9 27 L 14 27 L 13 32 L 8 32 Z" fill="#EF4444" />

          {/* Rugged SUV Wheels */}
          <circle cx="115" cy="46" r="11" fill="url(#wheelGrad)" />
          <circle cx="115" cy="46" r="7.5" fill="#64748B" />
          <circle cx="115" cy="46" r="6" fill="#0F172A" />
          <circle cx="115" cy="46" r="2.5" fill="#E2E8F0" />

          <circle cx="40" cy="46" r="11" fill="url(#wheelGrad)" />
          <circle cx="40" cy="46" r="7.5" fill="#64748B" />
          <circle cx="40" cy="46" r="6" fill="#0F172A" />
          <circle cx="40" cy="46" r="2.5" fill="#E2E8F0" />
        </svg>
      ),
    },
    {
      id: "double-cab",
      label: "Double Cab",
      icon: (
        <svg
          viewBox="0 0 160 60"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="80" cy="54" rx="72" ry="3.5" fill="#000000" fillOpacity="0.25" />

          {/* Roll Bar / Sports Bar */}
          <path
            d="M 52 24 L 56 12 L 64 12 L 68 24"
            stroke="#334155"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Double Cab Body (Cabin + Open Bed) */}
          <path
            d="M 10 44 L 8 28 L 52 28 L 56 16 C 60 12 68 11 82 11 L 112 11 C 122 11 128 15 134 22 L 148 27 C 154 30 156 34 155 42 L 152 46 C 148 47 141 47 136 47 C 135 37 124 30 114 30 C 104 30 93 37 92 47 L 62 47 C 61 37 50 30 39 30 C 29 30 18 37 17 47 L 10 47 Z"
            fill="url(#carRed)"
          />

          {/* Open Bed Tailgate Step */}
          <line x1="8" y1="28" x2="52" y2="28" stroke="#475569" strokeWidth="1.2" />

          {/* Cabin Windows */}
          <path
            d="M 59 24 L 57 15 C 64 13 72 12 84 12 L 84 24 Z"
            fill="url(#glass)"
          />
          <path
            d="M 87 12 L 106 12 C 114 12 120 15 125 21 L 128 24 L 87 24 Z"
            fill="url(#glass)"
          />

          {/* Door Lines */}
          <line x1="85" y1="12" x2="85" y2="46" stroke="#4C0519" strokeWidth="1" />
          <line x1="110" y1="24" x2="110" y2="46" stroke="#4C0519" strokeWidth="1" />

          {/* Pickup Headlight & Taillight */}
          <path d="M 148 28 L 154 30 L 149 33 Z" fill="#F8FAFC" />
          <path d="M 8 29 L 12 29 L 11 34 L 8 34 Z" fill="#EF4444" />

          {/* High Clearance Wheels */}
          <circle cx="114" cy="46" r="11" fill="url(#wheelGrad)" />
          <circle cx="114" cy="46" r="7.5" fill="#94A3B8" />
          <circle cx="114" cy="46" r="6" fill="#0F172A" />
          <circle cx="114" cy="46" r="2.5" fill="#E2E8F0" />

          <circle cx="39" cy="46" r="11" fill="url(#wheelGrad)" />
          <circle cx="39" cy="46" r="7.5" fill="#94A3B8" />
          <circle cx="39" cy="46" r="6" fill="#0F172A" />
          <circle cx="39" cy="46" r="2.5" fill="#E2E8F0" />
        </svg>
      ),
    },
    {
      id: "vans",
      label: "Vans",
      icon: (
        <svg
          viewBox="0 0 160 60"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="80" cy="54" rx="72" ry="3.5" fill="#000000" fillOpacity="0.25" />

          {/* Boxy High Roof Van Body */}
          <path
            d="M 12 45 L 8 40 C 8 26 10 16 16 13 C 22 10 40 10 80 10 C 114 10 134 11 142 16 L 152 26 C 156 30 156 36 155 43 L 152 46 C 148 47 141 47 137 47 C 136 37 125 30 115 30 C 105 30 94 37 93 47 L 62 47 C 61 37 50 30 40 30 C 30 30 19 37 18 47 L 12 47 Z"
            fill="url(#carRed)"
          />

          {/* Van Tinted Side Windows Array */}
          <path
            d="M 18 14 C 28 13 42 13 54 13 L 54 26 L 16 26 C 16 20 17 16 18 14 Z"
            fill="url(#glass)"
          />
          <path
            d="M 57 13 L 94 13 L 94 26 L 57 26 Z"
            fill="url(#glass)"
          />
          <path
            d="M 97 13 L 122 13 L 122 26 L 97 26 Z"
            fill="url(#glass)"
          />
          <path
            d="M 125 13 C 132 13 138 16 142 20 L 148 26 L 125 26 Z"
            fill="url(#glass)"
          />

          {/* Sliding Door Rail & Seams */}
          <line x1="56" y1="28" x2="120" y2="28" stroke="#334155" strokeWidth="1" />
          <line x1="55" y1="13" x2="55" y2="46" stroke="#4C0519" strokeWidth="1" />
          <line x1="123" y1="13" x2="123" y2="46" stroke="#4C0519" strokeWidth="1" />

          {/* Van Wheels */}
          <circle cx="115" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="115" cy="46" r="7" fill="#64748B" />
          <circle cx="115" cy="46" r="5.5" fill="#0F172A" />
          <circle cx="115" cy="46" r="2.5" fill="#E2E8F0" />

          <circle cx="40" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="40" cy="46" r="7" fill="#64748B" />
          <circle cx="40" cy="46" r="5.5" fill="#0F172A" />
          <circle cx="40" cy="46" r="2.5" fill="#E2E8F0" />
        </svg>
      ),
    },
    {
      id: "mpv",
      label: "MPV",
      icon: (
        <svg
          viewBox="0 0 160 60"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="80" cy="54" rx="72" ry="3.5" fill="#000000" fillOpacity="0.25" />

          {/* Streamlined Luxury MPV Body */}
          <path
            d="M 10 44 L 8 36 C 8 24 14 17 22 15 C 32 12 55 11 88 11 C 112 11 128 13 138 20 L 150 28 C 155 31 156 36 155 43 L 152 46 C 148 47 141 47 137 47 C 136 37 125 30 115 30 C 105 30 94 37 93 47 L 62 47 C 61 37 50 30 40 30 C 30 30 19 37 18 47 L 10 47 Z"
            fill="url(#carRed)"
          />

          {/* Sweeping Windows */}
          <path
            d="M 22 17 C 32 14 50 13 65 13 L 65 25 L 20 25 C 20 21 21 18 22 17 Z"
            fill="url(#glass)"
          />
          <path
            d="M 68 13 L 104 13 L 104 25 L 68 25 Z"
            fill="url(#glass)"
          />
          <path
            d="M 107 13 C 118 13 128 15 135 20 L 144 26 L 107 26 Z"
            fill="url(#glass)"
          />

          {/* Chrome Floating Roof Accent */}
          <path d="M 22 14 C 45 11 90 10 140 20" stroke="#CBD5E1" strokeWidth="0.8" />

          {/* Wheels */}
          <circle cx="115" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="115" cy="46" r="7" fill="#94A3B8" />
          <circle cx="115" cy="46" r="5.5" fill="#0F172A" />
          <circle cx="115" cy="46" r="2.5" fill="#E2E8F0" />

          <circle cx="40" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="40" cy="46" r="7" fill="#94A3B8" />
          <circle cx="40" cy="46" r="5.5" fill="#0F172A" />
          <circle cx="40" cy="46" r="2.5" fill="#E2E8F0" />
        </svg>
      ),
    },
    {
      id: "buses",
      label: "Buses",
      icon: (
        <svg
          viewBox="0 0 160 60"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="80" cy="54" rx="74" ry="3.5" fill="#000000" fillOpacity="0.25" />

          {/* Aerodynamic Luxury Coach Bus Body */}
          <path
            d="M 8 46 L 6 34 C 6 20 8 13 14 10 C 20 8 40 8 90 8 C 120 8 138 9 146 14 C 152 18 154 26 154 44 L 152 47 C 148 48 141 48 137 48 C 136 39 126 33 116 33 C 106 33 96 39 95 48 L 56 48 C 55 39 45 33 35 33 C 25 33 15 39 14 48 L 8 48 Z"
            fill="url(#carRed)"
          />

          {/* Panoramic Bus Passenger Glass Continuous Ribbon */}
          <path
            d="M 14 12 C 30 11 80 11 135 11 C 142 11 148 14 150 20 L 152 26 L 12 26 C 12 20 13 15 14 12 Z"
            fill="url(#glass)"
          />

          {/* Window Partition Mullions */}
          {[32, 52, 72, 92, 112, 132].map((x) => (
            <line key={x} x1={x} y1="11" x2={x} y2="26" stroke="#334155" strokeWidth="0.8" />
          ))}

          {/* Driver Mirror */}
          <path d="M 148 15 L 154 13 L 155 17 Z" fill="#334155" />

          {/* Bus Dual Axle Wheels */}
          <circle cx="116" cy="46" r="10" fill="url(#wheelGrad)" />
          <circle cx="116" cy="46" r="6" fill="#64748B" />
          <circle cx="116" cy="46" r="4.5" fill="#0F172A" />

          <circle cx="35" cy="46" r="10" fill="url(#wheelGrad)" />
          <circle cx="35" cy="46" r="6" fill="#64748B" />
          <circle cx="35" cy="46" r="4.5" fill="#0F172A" />
        </svg>
      ),
    },
    {
      id: "trucks",
      label: "Trucks",
      icon: (
        <svg
          viewBox="0 0 160 60"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="80" cy="54" rx="72" ry="3.5" fill="#000000" fillOpacity="0.25" />

          {/* Rear Flatbed Chassis & Steel Frame */}
          <rect x="10" y="32" width="95" height="4" fill="#334155" rx="1" />
          <rect x="12" y="36" width="91" height="6" fill="#1E293B" rx="1" />
          
          {/* Cab-Over Commercial Truck Cabin */}
          <path
            d="M 106 44 L 105 16 C 105 12 110 10 118 10 L 142 10 C 148 10 153 14 154 20 L 155 42 L 152 46 C 148 47 141 47 137 47 C 136 37 125 30 115 30 C 111 30 108 32 106 35 Z"
            fill="url(#carRed)"
          />

          {/* Truck Windshield & Side Window */}
          <path
            d="M 110 13 L 138 13 C 145 13 149 16 151 22 L 151 26 L 110 26 Z"
            fill="url(#glass)"
          />

          {/* Front Bumper & Steps */}
          <rect x="146" y="38" width="9" height="7" fill="#334155" rx="1" />
          <line x1="110" y1="26" x2="110" y2="44" stroke="#4C0519" strokeWidth="1" />

          {/* Truck Wheels (Dual Rear + Heavy Front) */}
          <circle cx="126" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="126" cy="46" r="6.5" fill="#64748B" />
          <circle cx="126" cy="46" r="5" fill="#0F172A" />

          <circle cx="34" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="34" cy="46" r="6.5" fill="#64748B" />
          <circle cx="34" cy="46" r="5" fill="#0F172A" />

          <circle cx="58" cy="46" r="10.5" fill="url(#wheelGrad)" />
          <circle cx="58" cy="46" r="6.5" fill="#64748B" />
          <circle cx="58" cy="46" r="5" fill="#0F172A" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200 py-6 px-4 mb-12 shadow-2xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(isSelected ? "all" : cat.id)}
                className="flex-1 min-w-[105px] max-w-[160px] flex flex-col items-center justify-end group transition-all cursor-pointer relative pb-3"
              >
                {/* Vehicle Side Profile Graphic */}
                <div className="w-full h-12 sm:h-14 flex items-center justify-center mb-2 px-1">
                  {cat.icon}
                </div>

                {/* Active Red Underline */}
                <div
                  className={`w-full h-[3px] rounded-full transition-all duration-300 mb-2 ${
                    isSelected
                      ? "bg-[#E11D48] opacity-100 scale-x-100 shadow-xs"
                      : "bg-transparent opacity-0 scale-x-50 group-hover:bg-slate-200 group-hover:opacity-100 group-hover:scale-x-75"
                  }`}
                />

                {/* Category Label */}
                <span
                  className={`text-xs sm:text-sm font-sans font-bold transition-colors whitespace-nowrap ${
                    isSelected
                      ? "text-[#E11D48]"
                      : "text-slate-800 group-hover:text-slate-950"
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
