"use client";

import { ShieldCheck, Plane, FileCheck, KeyRound } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Allocation & Sourcing",
    tag: "Global Off-Market Network",
    icon: FileCheck,
    color: "#C9FF00",
    description:
      "Direct access to factory build slots, private family vault consignments, and homologated limited-run chassis with full provenance verification.",
  },
  {
    number: "02",
    title: "Atelier Inspection & Spec",
    tag: "180-Point Laser Diagnostics",
    icon: ShieldCheck,
    color: "#00E5FF",
    description:
      "Comprehensive telemetry validation, paint meter analysis, and bespoke option verification conducted by certified Master Technicians in Monaco.",
  },
  {
    number: "03",
    title: "Climate-Controlled Airfreight",
    tag: "Enclosed Global Delivery",
    icon: Plane,
    color: "#FF1F6E",
    description:
      "White-glove chartered air cargo directly to your private estate or preferred yacht berth, fully insured with real-time GPS tracking.",
  },
  {
    number: "04",
    title: "Escrow Settlement & Handover",
    tag: "Title & Provenance Vault",
    icon: KeyRound,
    color: "#C9FF00",
    description:
      "Multi-currency bank escrow settlement, duty clearance, registration documentation, and private ceremonial handover with bespoke presentation case.",
  },
];

export default function AcquisitionJourney() {
  return (
    <section className="py-24 px-6 bg-[#0E0E1F]/50 border-b border-[#1E1E3F] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF1F6E]" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF1F6E]">
                Private Client Protocol
              </p>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase text-white leading-none">
              Acquisition <br />
              <span className="text-[#6B6B8E]">Journey & Escrow</span>
            </h2>
          </div>
          <p className="font-body text-sm text-[#6B6B8E] max-w-md leading-relaxed">
            Our seamless concierge protocol guarantees uncompromising confidentiality, legal title protection, and frictionless global delivery for every vehicle.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F] hover:border-[#C9FF00]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span 
                      className="font-display font-black text-4xl"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <div 
                      className="p-3 rounded-xl bg-[#141428] border border-[#1E1E3F] text-[#6B6B8E] group-hover:text-white transition-colors"
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B8E] mb-2">
                    {step.tag}
                  </p>

                  <h3 className="font-display font-black text-2xl text-white uppercase mb-4 group-hover:text-[#C9FF00] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs text-[#6B6B8E] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1E1E3F] flex items-center justify-between text-[11px] font-mono text-[#6B6B8E]">
                  <span>Status: Protocol Verified</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9FF00]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
