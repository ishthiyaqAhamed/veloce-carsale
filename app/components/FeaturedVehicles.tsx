"use client";

import { useState } from "react";
import { vehicles } from "../lib/dummyData";
import VehicleCard from "./VehicleCard";

export default function FeaturedVehicles() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Vehicles" },
    { id: "suv", label: "SUVs & Utility" },
    { id: "sedan", label: "Sedans" },
    { id: "hybrid", label: "Hybrid & Eco" },
    { id: "sports", label: "Sports & Performance" },
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
          <span className="text-xs font-mono uppercase tracking-widest text-[#84CC16] font-bold block mb-2">
            Quality Inventory
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
            Featured Vehicles
          </h2>
        </div>
        <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
          Explore our wide selection of popular SUVs, sedans, hybrids, and trucks from Toyota, Honda, Hyundai, BMW, Mercedes-Benz, and more.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-slate-900 text-white font-bold shadow-sm"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
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