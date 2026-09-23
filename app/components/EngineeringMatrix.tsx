"use client";

import { useState } from "react";
import { Cpu, Wind, Activity, Disc, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const engineeringPillars = [
  {
    id: "monocoque",
    title: "Carbon-Aeronautic Monocoque",
    tag: "Structural Rigidity: 52,000 Nm/deg",
    icon: Shield,
    color: "#C9FF00",
    description:
      "Engineered from T1000 grade autoclave-baked carbon fiber weave. Imparts unyielding torsional stiffness while reducing chassis dry weight under 1,380 kg.",
    metrics: [
      { label: "Dry Weight", value: "1,380 kg" },
      { label: "Crash Energy Absorption", value: "3.2x Steel" },
      { label: "Torsional Stiffness", value: "52k Nm/°" },
    ],
  },
  {
    id: "aero",
    title: "Active DRS Aerofoil Dynamics",
    tag: "Peak Downforce: 860 kg @ 285 km/h",
    icon: Wind,
    color: "#00E5FF",
    description:
      "Dual hydraulic actuators continuously adjust rear wing angle of attack in 0.15 seconds, creating high-speed cornering stability and active airbrake deceleration.",
    metrics: [
      { label: "Actuation Time", value: "0.15s" },
      { label: "Airbrake G-Force", value: "2.1 G" },
      { label: "Drag Reduction", value: "38% in DRS" },
    ],
  },
  {
    id: "powertrain",
    title: "Tri-Motor Hybrid Torque Vectoring",
    tag: "Combined Output: 1,015 HP",
    icon: Activity,
    color: "#FF1F6E",
    description:
      "Naturally aspirated high-revving ICE paired with 3 axial-flux electric motors providing millisecond precision torque vectoring across all four wheels.",
    metrics: [
      { label: "Electric Torque", value: "1,062 Nm" },
      { label: "Rev Ceiling", value: "9,500 RPM" },
      { label: "0-200 km/h", value: "7.0s" },
    ],
  },
  {
    id: "brakes",
    title: "Carbon-Silicon Matrix Ceramic Braking",
    tag: "Thermal Resistance: 1,200°C",
    icon: Disc,
    color: "#C9FF00",
    description:
      "410mm front carbon-silicon composite cross-drilled discs with 10-piston monoblock titanium calipers delivering fade-free track stopping power.",
    metrics: [
      { label: "100-0 km/h Distance", value: "29.5 m" },
      { label: "Disc Diameter", value: "410 mm" },
      { label: "Piston Count", value: "10 Monoblock" },
    ],
  },
];

export default function EngineeringMatrix() {
  const [activePillar, setActivePillar] = useState(engineeringPillars[0]);

  return (
    <section className="py-24 px-6 bg-[#06060E] border-b border-[#1E1E3F] relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 rounded-full blur-[130px] pointer-events-none opacity-15"
        style={{ background: activePillar.color }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-3">
              Telemetry & Craftsmanship
            </p>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase text-white leading-none">
              Aeronautic <br />
              <span className="text-[#6B6B8E]">Engineering Matrix</span>
            </h2>
          </div>
          <p className="font-body text-sm text-[#6B6B8E] max-w-md leading-relaxed">
            Every supercar delivered through Veloce represents the bleeding edge of motorsport aerodynamics, lightweight materials, and powertrain dynamics.
          </p>
        </div>

        {/* 2-Column Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Tab Selectors (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {engineeringPillars.map((p) => {
              const Icon = p.icon;
              const isSelected = activePillar.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p)}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#0E0E1F] border-[#C9FF00] shadow-[0_0_20px_rgba(201,255,0,0.1)]"
                      : "bg-[#0E0E1F]/50 border-[#1E1E3F] hover:border-white/30"
                  }`}
                >
                  <div 
                    className="p-3 rounded-lg shrink-0 transition-colors"
                    style={{ 
                      background: isSelected ? `${p.color}20` : "#141428",
                      color: isSelected ? p.color : "#6B6B8E"
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="truncate">
                    <p className="font-mono text-[11px] text-[#6B6B8E] uppercase tracking-wider mb-1">
                      {p.tag}
                    </p>
                    <h3 className="font-display font-black text-xl text-white uppercase truncate">
                      {p.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Deep-Dive Display Card (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F] flex flex-col justify-between shadow-2xl relative">
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1E1E3F]">
                <span 
                  className="font-mono text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: activePillar.color }}
                >
                  Technical Dossier
                </span>
                <span className="font-mono text-xs text-[#6B6B8E]">
                  ISO-9001 Supercar Standard
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                {activePillar.title}
              </h3>

              <p className="font-body text-base text-[#6B6B8E] leading-relaxed mb-8">
                {activePillar.description}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E1E3F]">
              {activePillar.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#06060E] border border-[#1E1E3F]/80">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B8E] mb-1">
                    {m.label}
                  </p>
                  <p className="font-display font-black text-xl sm:text-2xl text-white">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
