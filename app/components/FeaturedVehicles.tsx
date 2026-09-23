"use client";

import { useState } from "react";
import { vehicles } from "../lib/dummyData";
import VehicleCard from "./VehicleCard";

export default function FeaturedVehicles() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Vehicles" },
    { id: "sports", label: "Sports & Supercars" },
    { id: "luxury", label: "Luxury Sedans" },
    { id: "suv", label: "Luxury SUVs" },
  ];

  const filteredVehicles =
    activeCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="inventory">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9FF00] block mb-2">
            Curated Collection
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-white tracking-tight">
            Featured Inventory
          </h2>
        </div>
        <p className="text-sm text-[#6B6B8E] max-w-md leading-relaxed">
          Every vehicle is thoroughly inspected, certified, and maintained to meet our stringent quality standards.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-[#C9FF00] text-[#06060E] font-bold shadow-md"
                : "bg-[#0E0E1F] text-[#6B6B8E] hover:text-white border border-[#1E1E3F]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

    </section>
  );
}