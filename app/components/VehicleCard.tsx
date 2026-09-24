"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Fuel, Gauge } from "lucide-react";
import { Vehicle } from "../lib/dummyData";
import TestDriveModal from "./TestDriveModal";
import { useCurrency } from "../context/CurrencyContext";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { formatPrice } = useCurrency();

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs">
        
        {/* Image Container */}
        <div>
          <div className="relative h-60 w-full overflow-hidden bg-slate-100">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            {/* Badge */}
            {vehicle.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-slate-900/85 text-[#C9FF00] backdrop-blur-sm shadow-xs">
                {vehicle.badge}
              </span>
            )}

            {/* Year & Fuel Tag */}
            <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-xs font-mono bg-white/90 text-slate-800 backdrop-blur-sm font-semibold shadow-xs">
              {vehicle.year} · {vehicle.fuelType}
            </span>
          </div>

          {/* Details */}
          <div className="p-6">
            
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
              {vehicle.brand}
            </p>

            <h3 className="font-display font-black text-2xl text-slate-900 uppercase mb-2 group-hover:text-[#84CC16] transition-colors leading-tight">
              {vehicle.name}
            </h3>

            <p className="text-xs text-slate-600 mb-5 line-clamp-2 leading-relaxed">
              {vehicle.tagline}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs font-mono mb-5 bg-slate-50/70 rounded-lg px-3">
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">Mileage</span>
                <span className="text-slate-900 font-bold">{vehicle.mileage.toLocaleString()} km</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">Power</span>
                <span className="text-slate-900 font-bold">{vehicle.horsepower} HP</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">0-100</span>
                <span className="text-slate-900 font-bold">{vehicle.acceleration}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer with Price and Button */}
        <div className="p-6 pt-0">
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Price</p>
              <p className="font-display font-black text-xl text-slate-950">
                {formatPrice(vehicle.price)}
              </p>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2.5 bg-slate-900 text-white hover:bg-slate-800 font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Inquire</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

      </div>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName={vehicle.name}
      />
    </>
  );
}