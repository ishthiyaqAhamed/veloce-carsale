"use client";

import React from "react";
import Image from "next/image";

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
  image: string;
}

const categories: CategoryOption[] = [
  {
    id: "cars",
    label: "Cars",
    image: "/body-types/cars.png",
  },
  {
    id: "suv",
    label: "SUV",
    image: "/body-types/suv.png",
  },
  {
    id: "double-cab",
    label: "Double Cab",
    image: "/body-types/double-cab.png",
  },
  {
    id: "vans",
    label: "Vans",
    image: "/body-types/vans.png",
  },
  {
    id: "mpv",
    label: "MPV",
    image: "/body-types/mpv.png",
  },
  {
    id: "buses",
    label: "Buses",
    image: "/body-types/buses.png",
  },
  {
    id: "trucks",
    label: "Trucks",
    image: "/body-types/trucks.png",
  },
];

export default function BodyTypeSelector({
  selectedType,
  onSelect,
}: BodyTypeSelectorProps) {
  return (
    <div className="w-full bg-white border-y border-slate-200 py-3.5 px-2 sm:px-4 mb-10 shadow-2xs">
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
                {/* Exact Black Vehicle Icon */}
                <div className="w-full h-7 sm:h-8 flex items-center justify-center mb-1.5 px-0.5">
                  <div className="relative w-20 sm:w-24 h-6 sm:h-7 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </div>
                </div>

                {/* Active Red Underline */}
                <div
                  className={`w-full h-[2.5px] rounded-full transition-all duration-300 mb-1.5 ${
                    isSelected
                      ? "bg-[#E11D48] opacity-100 scale-x-100 shadow-xs"
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
