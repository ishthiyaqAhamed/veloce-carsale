"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Sliders, Shield, Palette, Layers, CircleDot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import VipBookingModal from "./VipBookingModal";

interface AtelierColor {
  id: string;
  name: string;
  hex: string;
  price: number;
  previewImage: string;
  accentFilter: string;
}

const colors: AtelierColor[] = [
  {
    id: "acid-lime",
    name: "Acid Veloce Lime (PTS Special)",
    hex: "#C9FF00",
    price: 32000,
    previewImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
    accentFilter: "hue-rotate(60deg) brightness(1.1)",
  },
  {
    id: "cyber-cyan",
    name: "Cyber Cyan Liquid Metallic",
    hex: "#00E5FF",
    price: 28000,
    previewImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=85",
    accentFilter: "hue-rotate(180deg) brightness(1.05)",
  },
  {
    id: "hyper-pink",
    name: "Monaco Hyper Pink Pearl",
    hex: "#FF1F6E",
    price: 35000,
    previewImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=85",
    accentFilter: "hue-rotate(310deg) saturate(1.2)",
  },
  {
    id: "void-obsidian",
    name: "Void Obsidian Exposed Carbon",
    hex: "#06060E",
    price: 48000,
    previewImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
    accentFilter: "grayscale(100%) contrast(1.2)",
  },
];

const wheels = [
  { id: "w1", name: "20\"/21\" Monoblock Forged Alloy", price: 0, desc: "Ultra-rigid aircraft-grade titanium" },
  { id: "w2", name: "20\"/21\" Exposed Carbon Center-Lock", price: 18500, desc: "1.8kg rotational mass saving per corner" },
  { id: "w3", name: "20\"/21\" Diamond-Cut Aero Turbine", price: 12000, desc: "Integrated brake cooling aero blades" },
];

const calipers = [
  { id: "c-lime", name: "Acid Lime Lacquer", hex: "#C9FF00" },
  { id: "c-cyan", name: "Cyber Cyan Anodized", hex: "#00E5FF" },
  { id: "c-pink", name: "Hyper Pink Racing", hex: "#FF1F6E" },
  { id: "c-black", name: "Gloss Black Carbon-Ceramic", hex: "#141428" },
];

const aeroPacks = [
  { id: "a-standard", name: "Standard Active DRS Aerodynamics", price: 0 },
  { id: "a-weissach", name: "Weissach Carbon High-Downforce Aero (860kg)", price: 42000 },
  { id: "a-le-mans", name: "Le Mans GT3 Carbon Canards & Underfloor Diffuser", price: 65000 },
];

export default function AtelierConfigurator() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedWheel, setSelectedWheel] = useState(wheels[1]);
  const [selectedCaliper, setSelectedCaliper] = useState(calipers[0]);
  const [selectedAero, setSelectedAero] = useState(aeroPacks[1]);
  const [monogram, setMonogram] = useState("VLC-01");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basePrice = 2250000;
  const totalPrice = basePrice + selectedColor.price + selectedWheel.price + selectedAero.price;

  return (
    <section className="py-24 px-6 bg-[#06060E] border-b border-[#1E1E3F] relative overflow-hidden">
      
      {/* Background Accent Glows */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 transition-colors duration-700"
        style={{ background: selectedColor.hex }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9FF00]" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9FF00]">
                Interactive Customizer
              </p>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase text-white leading-none">
              Bespoke Atelier <br />
              <span className="text-[#6B6B8E]">Studio Configurator</span>
            </h2>
          </div>
          <p className="font-body text-sm text-[#6B6B8E] max-w-md leading-relaxed">
            Tailor paint-to-sample finishes, carbon fiber aeronautics, forged magnesium wheels, and customized client monograms with real-time bespoke build telemetry.
          </p>
        </div>

        {/* 2-Column Grid: Left Preview / Right Customizer Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Live Interactive Preview Stage (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#1E1E3F] bg-[#0E0E1F] shadow-2xl">
              
              {/* Dynamic Car Canvas Render */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={selectedColor.previewImage}
                    alt={selectedColor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060E] via-transparent to-transparent opacity-80" />
                </motion.div>
              </AnimatePresence>

              {/* Monogram / Client Badge Stamp */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-md bg-[#06060E]/80 backdrop-blur-md border border-[#1E1E3F] flex items-center gap-2">
                <Shield size={14} className="text-[#C9FF00]" />
                <span className="font-mono text-xs uppercase tracking-widest text-white">
                  SPEC: {monogram || "BESPOKE"}
                </span>
              </div>

              {/* Color Accent Indicator Pill */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#06060E]/80 backdrop-blur-md border border-[#1E1E3F]">
                <span 
                  className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
                  style={{ background: selectedColor.hex }}
                />
                <span className="font-mono text-xs text-white">
                  {selectedColor.name.split(" ")[0]} Finish
                </span>
              </div>

              {/* Bottom Spec Overview Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-[#06060E]/85 backdrop-blur-md border border-[#1E1E3F] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] text-[#6B6B8E] uppercase tracking-wider">
                    Configured Hypercar
                  </p>
                  <p className="font-display font-black text-xl text-white uppercase">
                    Ferrari Daytona SP3 Atelier
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] text-[#6B6B8E] uppercase tracking-wider">
                    Calculated Allocation Price
                  </p>
                  <p className="font-display font-black text-2xl text-[#C9FF00]">
                    ${totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>

            </div>

            {/* Config Summary Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#0E0E1F] border border-[#1E1E3F] text-xs font-mono">
              <div>
                <span className="text-[#6B6B8E] block uppercase text-[10px]">Aero Spec</span>
                <span className="text-white font-semibold truncate block">{selectedAero.name.split(" ")[0]} Carbon</span>
              </div>
              <div>
                <span className="text-[#6B6B8E] block uppercase text-[10px]">Wheels</span>
                <span className="text-white font-semibold truncate block">{selectedWheel.name.split(" ")[1]}</span>
              </div>
              <div>
                <span className="text-[#6B6B8E] block uppercase text-[10px]">Caliper Accent</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: selectedCaliper.hex }} />
                  <span className="text-white font-semibold">{selectedCaliper.name.split(" ")[0]}</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Bespoke Customization Controls (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 p-6 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F]">
            
            {/* 1. Paint Finish Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-mono text-xs uppercase tracking-wider text-white flex items-center gap-2">
                  <Palette size={14} className="text-[#C9FF00]" />
                  <span>1. Bespoke Livery & Paint Finish</span>
                </label>
                <span className="font-mono text-xs text-[#6B6B8E]">
                  +${selectedColor.price.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c)}
                    className={`p-3 rounded-lg border text-left flex items-center gap-3 transition-all cursor-pointer ${
                      selectedColor.id === c.id
                        ? "border-[#C9FF00] bg-[#141428] shadow-[0_0_15px_rgba(201,255,0,0.15)]"
                        : "border-[#1E1E3F] bg-[#06060E] hover:border-white/40"
                    }`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full border border-white/20 shrink-0" 
                      style={{ background: c.hex }}
                    />
                    <div className="truncate">
                      <p className="font-display font-bold text-xs text-white uppercase truncate">
                        {c.name}
                      </p>
                      <p className="font-mono text-[10px] text-[#6B6B8E]">
                        ${c.price.toLocaleString()}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Aerodynamic Package */}
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                <Layers size={14} className="text-[#00E5FF]" />
                <span>2. Aerodynamic Aero Suite</span>
              </label>

              <div className="space-y-2">
                {aeroPacks.map((aero) => (
                  <button
                    key={aero.id}
                    onClick={() => setSelectedAero(aero)}
                    className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedAero.id === aero.id
                        ? "border-[#00E5FF] bg-[#141428]"
                        : "border-[#1E1E3F] bg-[#06060E] hover:border-white/30"
                    }`}
                  >
                    <div>
                      <p className="font-display font-bold text-xs text-white uppercase">
                        {aero.name}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#00E5FF] shrink-0 ml-2">
                      {aero.price === 0 ? "Included" : `+$${aero.price.toLocaleString()}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Forged Wheels Selection */}
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                <CircleDot size={14} className="text-[#FF1F6E]" />
                <span>3. Lightweight Forged Wheelsets</span>
              </label>

              <div className="space-y-2">
                {wheels.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWheel(w)}
                    className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedWheel.id === w.id
                        ? "border-[#FF1F6E] bg-[#141428]"
                        : "border-[#1E1E3F] bg-[#06060E] hover:border-white/30"
                    }`}
                  >
                    <div>
                      <p className="font-display font-bold text-xs text-white uppercase">{w.name}</p>
                      <p className="font-body text-[11px] text-[#6B6B8E]">{w.desc}</p>
                    </div>
                    <span className="font-mono text-xs text-[#FF1F6E] shrink-0 ml-2">
                      {w.price === 0 ? "Standard" : `+$${w.price.toLocaleString()}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Caliper Color + Monogram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-white mb-2">
                  Caliper Accent
                </label>
                <div className="flex gap-2">
                  {calipers.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCaliper(c)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                        selectedCaliper.id === c.id ? "scale-110 border-white shadow" : "border-[#1E1E3F]"
                      }`}
                      style={{ background: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-white mb-2">
                  Chassis Monogram
                </label>
                <input
                  type="text"
                  maxLength={10}
                  value={monogram}
                  onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                  placeholder="e.g. VIP-007"
                  className="w-full px-3 py-2 bg-[#06060E] border border-[#1E1E3F] rounded text-xs font-mono text-white focus:outline-none focus:border-[#C9FF00]"
                />
              </div>
            </div>

            {/* Reserve Allocation CTA */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-[#C9FF00] text-[#06060E] font-display font-black text-xs uppercase tracking-[0.2em] rounded hover:bg-white hover:text-black transition-all shadow-[0_0_25px_rgba(201,255,0,0.3)] cursor-pointer"
            >
              Lock In Atelier Build & Inquire
            </button>

          </div>

        </div>

      </div>

      <VipBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicleName={`Custom Atelier Build (${selectedColor.name})`}
      />
    </section>
  );
}
