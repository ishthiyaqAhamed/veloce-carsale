"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Fuel, Gauge, MessageCircle, Sparkles } from "lucide-react";
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
      <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-slate-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-2xs">
        
        {/* Image Container */}
        <div>
          <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
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
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-slate-900/90 text-[#C9FF00] backdrop-blur-sm shadow-xs border border-white/10">
                {vehicle.badge}
              </span>
            )}

            {/* Year & Fuel Tag */}
            <span className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono bg-white/95 text-slate-800 backdrop-blur-sm font-bold shadow-xs">
              {vehicle.year} · {vehicle.fuelType}
            </span>
          </div>

          {/* Details */}
          <div className="p-4 sm:p-6">
            
            <p className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
              {vehicle.brand}
            </p>

            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 uppercase mb-1.5 sm:mb-2 group-hover:text-lime-700 transition-colors leading-tight">
              {vehicle.name}
            </h3>

            <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
              {vehicle.tagline}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-2.5 sm:py-3 border-y border-slate-100 text-xs font-mono mb-4 bg-slate-50/80 rounded-xl px-2.5 sm:px-3">
              <div>
                <span className="text-[9px] sm:text-[10px] text-slate-400 block uppercase font-semibold">Mileage</span>
                <span className="text-slate-900 font-bold text-[11px] sm:text-xs">{vehicle.mileage.toLocaleString()} km</span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] text-slate-400 block uppercase font-semibold">Power</span>
                <span className="text-slate-900 font-bold text-[11px] sm:text-xs">{vehicle.horsepower} HP</span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] text-slate-400 block uppercase font-semibold">0-100</span>
                <span className="text-slate-900 font-bold text-[11px] sm:text-xs">{vehicle.acceleration}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer with Price and Buttons */}
        <div className="p-4 sm:p-6 pt-0">
          <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 gap-2">
            <div>
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono font-semibold">Showroom Price</p>
              <p className="font-display font-black text-lg sm:text-xl text-slate-950 leading-tight">
                {formatPrice(vehicle.price)}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20am%20interested%20in%20the%20${encodeURIComponent(vehicle.name)}%20priced%20at%20${encodeURIComponent(formatPrice(vehicle.price))}.`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl active:scale-95 transition-all shadow-xs"
                title="WhatsApp Inquiry"
                aria-label="WhatsApp Inquiry"
              >
                <MessageCircle size={15} />
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="px-3.5 sm:px-4 py-2.5 bg-slate-900 text-white hover:bg-lime-500 hover:text-slate-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1 cursor-pointer shadow-xs active:scale-95"
              >
                <span>Inquire</span>
                <ArrowRight size={13} />
              </button>
            </div>
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