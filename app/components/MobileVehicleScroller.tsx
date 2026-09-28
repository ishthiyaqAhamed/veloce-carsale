"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Fuel, Gauge, Sparkles, SlidersHorizontal } from "lucide-react";
import { Vehicle, vehicles } from "../lib/dummyData";
import { useCurrency } from "../context/CurrencyContext";
import TestDriveModal from "./TestDriveModal";

interface MobileVehicleScrollerProps {
  title?: string;
  subtitle?: string;
}

export default function MobileVehicleScroller({
  title = "Showroom Highlights",
  subtitle = "Swipe through our top verified vehicles",
}: MobileVehicleScrollerProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const { formatPrice } = useCurrency();

  const featuredList = vehicles.slice(0, 8);

  return (
    <div className="md:hidden w-full py-6 px-4 bg-white border-y border-slate-200/80">
      
      {/* Header with View All Link */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-lime-700 font-bold flex items-center gap-1">
            <Sparkles size={12} className="text-lime-600" />
            Featured Inventory
          </span>
          <h2 className="font-display font-black text-2xl uppercase text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        <Link
          href="/inventory"
          className="text-xs font-mono font-bold text-slate-700 hover:text-slate-950 flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200"
        >
          <span>All ({vehicles.length})</span>
          <ArrowRight size={12} />
        </Link>
      </div>

      {/* Horizontal Snap Scroller */}
      <div className="flex items-stretch gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
        {featuredList.map((vehicle) => (
          <div
            key={vehicle.id}
            className="w-[290px] shrink-0 snap-center bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
          >
            {/* Image Area */}
            <div className="relative h-44 w-full bg-slate-900">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                sizes="290px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Badge */}
              {vehicle.badge && (
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-slate-900/90 text-[#C9FF00] backdrop-blur-xs border border-white/10">
                  {vehicle.badge}
                </span>
              )}

              {/* Year & Fuel */}
              <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/90 text-slate-900 font-bold backdrop-blur-xs">
                {vehicle.year} · {vehicle.fuelType}
              </span>
            </div>

            {/* Info Area */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                  {vehicle.brand}
                </span>
                <h3 className="font-display font-black text-lg text-slate-900 uppercase leading-snug line-clamp-1 mb-1">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 font-normal mb-3">
                  {vehicle.tagline}
                </p>

                {/* Compact Spec Chips */}
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100 mb-3">
                  <span className="font-bold text-slate-900">{vehicle.mileage.toLocaleString()} km</span>
                  <span className="text-slate-300">·</span>
                  <span>{vehicle.horsepower} HP</span>
                  <span className="text-slate-300">·</span>
                  <span>{vehicle.acceleration}</span>
                </div>
              </div>

              {/* Price & Quick Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-400 block font-semibold">Price</span>
                  <span className="font-display font-black text-base text-slate-950 block leading-tight">
                    {formatPrice(vehicle.price)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {/* Direct WhatsApp button */}
                  <a
                    href={`https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20am%20interested%20in%20the%20${encodeURIComponent(vehicle.name)}%20priced%20at%20${encodeURIComponent(formatPrice(vehicle.price))}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-emerald-500 text-white rounded-xl active:scale-95 transition-transform"
                    title="WhatsApp"
                    aria-label="WhatsApp Inquiry"
                  >
                    <MessageCircle size={15} />
                  </a>

                  {/* Test Drive / Inquire Modal */}
                  <button
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="px-3.5 py-2.5 bg-slate-900 text-white text-xs font-display font-bold uppercase rounded-xl active:scale-95 transition-transform"
                  >
                    Inquire
                  </button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

      <TestDriveModal
        isOpen={selectedVehicle !== null}
        onClose={() => setSelectedVehicle(null)}
        carName={selectedVehicle?.name || "Vehicle"}
      />
    </div>
  );
}
