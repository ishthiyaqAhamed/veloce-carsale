"use client";

import { useState } from "react";
import Link from "next/link";
import { vehicles, Vehicle } from "../lib/dummyData";
import VehicleCard from "./VehicleCard";
import BodyTypeSelector, { VehicleBodyType } from "./BodyTypeSelector";
import { Car, ArrowRight, SlidersHorizontal, Sparkles } from "lucide-react";

interface FeaturedVehiclesProps {
  showBodyTypeFilter?: boolean;
}

export default function FeaturedVehicles({
  showBodyTypeFilter = false,
}: FeaturedVehiclesProps) {
  const [selectedBodyType, setSelectedBodyType] = useState<VehicleBodyType>("all");

  const filteredVehicles =
    selectedBodyType === "all"
      ? vehicles
      : vehicles.filter((v) => {
          if (v.bodyType) {
            return v.bodyType === selectedBodyType;
          }
          if (selectedBodyType === "cars") return v.category === "sedan" || v.category === "sports";
          if (selectedBodyType === "suv") return v.category === "suv";
          if (selectedBodyType === "double-cab" || selectedBodyType === "trucks") return v.category === "truck";
          return true;
        });

  // On Home page, display top 6 or filtered list
  const displayedVehicles = showBodyTypeFilter ? filteredVehicles : filteredVehicles.slice(0, 6);

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto" id="inventory">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase text-slate-500 font-bold mb-1">
            <Sparkles size={12} className="text-lime-600" />
            <span>Showroom Fleet · 586 Galle Rd</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-slate-900 tracking-tight leading-tight">
            {showBodyTypeFilter ? "Browse by Body Type" : "Verified Fleet"}
          </h2>
          {!showBodyTypeFilter && (
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal mt-1 leading-relaxed">
              Explore our hand-picked selection of verified Japanese and European luxury, performance, and everyday vehicles in Beruwala.
            </p>
          )}
        </div>

        {showBodyTypeFilter ? (
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-500">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 font-bold text-slate-900">
              {filteredVehicles.length} Units Available
            </span>
            {selectedBodyType !== "all" && (
              <button
                onClick={() => setSelectedBodyType("all")}
                className="text-xs font-mono text-[#E11D48] hover:underline cursor-pointer font-bold"
              >
                Reset Filters
              </button>
            )}
          </div>
        ) : (
          <Link
            href="/inventory"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-lime-500 hover:text-slate-950 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xs active:scale-95"
          >
            <span>View All Fleet ({vehicles.length})</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>

      {/* Visual Vehicle Body Type Selector Bar */}
      {showBodyTypeFilter && (
        <BodyTypeSelector
          selectedType={selectedBodyType}
          onSelect={(type) => setSelectedBodyType(type)}
        />
      )}

      {/* Vehicles Grid */}
      {displayedVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {displayedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="py-12 sm:py-16 text-center bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <Car size={36} className="mx-auto text-slate-300 mb-3" />
          <h3 className="font-display font-bold text-base sm:text-lg uppercase text-slate-800 mb-1">
            No Vehicles Listed in This Category
          </h3>
          <p className="text-xs font-mono text-slate-500 mb-4 max-w-sm mx-auto">
            We receive weekly shipments from Japan and international auctions.
          </p>
          <button
            onClick={() => setSelectedBodyType("all")}
            className="px-5 py-2.5 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-lime-500 hover:text-slate-950 transition-colors cursor-pointer"
          >
            View All Stock ({vehicles.length})
          </button>
        </div>
      )}

      {/* Bottom CTA on Home Page */}
      {!showBodyTypeFilter && (
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/inventory"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-lime-500 hover:text-slate-950 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm active:scale-98"
          >
            <span>Browse Full Vehicle Fleet ({vehicles.length} Total Units)</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      )}

    </section>
  );
}