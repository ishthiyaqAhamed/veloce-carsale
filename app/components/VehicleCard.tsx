"use client";

import { useState } from "react";
import Image from "next/image";
import { Gauge, Zap, Calendar, ArrowRight } from "lucide-react";
import { Vehicle } from "../lib/dummyData";
import TestDriveModal from "./TestDriveModal";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0E0E1F] border border-[#1E1E3F] rounded-2xl overflow-hidden hover:border-[#C9FF00]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg">
        
        {/* Image Container */}
        <div>
          <div className="relative h-60 w-full overflow-hidden bg-[#06060E]">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E1F] via-transparent to-transparent opacity-80" />

            {/* Badge */}
            {vehicle.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#06060E]/80 border border-[#1E1E3F] text-[#C9FF00] backdrop-blur-sm">
                {vehicle.badge}
              </span>
            )}

            {/* Year Tag */}
            <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-xs font-mono bg-[#06060E]/80 border border-[#1E1E3F] text-white/80 backdrop-blur-sm">
              {vehicle.year}
            </span>
          </div>

          {/* Details */}
          <div className="p-6">
            
            <p className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider mb-1">
              {vehicle.brand}
            </p>

            <h3 className="font-display font-black text-2xl text-white uppercase mb-2 group-hover:text-[#C9FF00] transition-colors">
              {vehicle.name}
            </h3>

            <p className="text-xs text-[#6B6B8E] mb-5 line-clamp-2 leading-relaxed">
              {vehicle.tagline}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1E1E3F] text-xs font-mono mb-5">
              <div>
                <span className="text-[10px] text-[#6B6B8E] block uppercase">Mileage</span>
                <span className="text-white font-medium">{vehicle.mileage.toLocaleString()} mi</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6B8E] block uppercase">Power</span>
                <span className="text-[#C9FF00] font-medium">{vehicle.horsepower} HP</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6B6B8E] block uppercase">0-60</span>
                <span className="text-white font-medium">{vehicle.acceleration}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer with Price and Button */}
        <div className="p-6 pt-0">
          <div className="flex items-center justify-between pt-4 border-t border-[#1E1E3F]">
            <div>
              <p className="text-[10px] text-[#6B6B8E] uppercase font-mono">Price</p>
              <p className="font-display font-black text-2xl text-white">
                ${vehicle.price.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2.5 bg-[#141428] border border-[#1E1E3F] text-white hover:text-[#06060E] hover:bg-[#C9FF00] hover:border-[#C9FF00] font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
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