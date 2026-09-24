"use client";

import { useState } from "react";
import { vehicles, Vehicle } from "../lib/dummyData";
import VehicleCard from "./VehicleCard";
import BodyTypeSelector, { VehicleBodyType } from "./BodyTypeSelector";
import { Car, SlidersHorizontal, Sparkles } from "lucide-react";

export default function FeaturedVehicles() {
  const [selectedBodyType, setSelectedBodyType] = useState<VehicleBodyType>("all");

  const filteredVehicles =
    selectedBodyType === "all"
      ? vehicles
      : vehicles.filter((v) => {
          if (v.bodyType) {
            return v.bodyType === selectedBodyType;
          }
          // Fallback matching
          if (selectedBodyType === "cars") return v.category === "sedan" || v.category === "sports";
          if (selectedBodyType === "suv") return v.category === "suv";
          if (selectedBodyType === "double-cab" || selectedBodyType === "trucks") return v.category === "truck";
          return true;
        });

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto" id="inventory">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              Showroom Fleet
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
            Browse by Body Type
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
          <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 font-bold text-slate-900">
            {filteredVehicles.length} Vehicles Available
          </span>
          {selectedBodyType !== "all" && (
            <button
              onClick={() => setSelectedBodyType("all")}
              className="text-xs font-mono text-[#E11D48] hover:underline cursor-pointer font-bold"
            >
              Reset Filters (Show All)
            </button>
          )}
        </div>
      </div>

      {/* Visual Vehicle Body Type Selector Bar */}
      <BodyTypeSelector
        selectedType={selectedBodyType}
        onSelect={(type) => setSelectedBodyType(type)}
      />

      {/* Vehicles Grid */}
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 p-8">
          <Car size={40} className="mx-auto text-slate-300 mb-3" />
          <h3 className="font-display font-bold text-lg uppercase text-slate-800 mb-1">
            No Vehicles Listed in This Category
          </h3>
          <p className="text-xs font-mono text-slate-500 mb-4">
            We are constantly receiving new shipments at our Beruwala showroom.
          </p>
          <button
            onClick={() => setSelectedBodyType("all")}
            className="px-5 py-2.5 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-lime-500 hover:text-slate-950 transition-colors cursor-pointer"
          >
            View All Stock ({vehicles.length})
          </button>
        </div>
      )}

    </section>
  );
}