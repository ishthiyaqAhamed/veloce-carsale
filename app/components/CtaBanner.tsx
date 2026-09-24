"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TestDriveModal from "./TestDriveModal";

export default function CtaBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9FF00] block mb-2 font-semibold">
              Looking for a Specific Model?
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight mb-3">
              We Source Any Car Nationwide
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Whether you need a reliable Toyota Camry, Hyundai Tucson, Honda CR-V, or a bespoke luxury trim, our direct sourcing team finds and delivers it directly to you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 bg-[#C9FF00] hover:bg-white text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer font-bold"
            >
              Request Custom Sourcing
            </button>
            <Link
              href="/inventory"
              className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700 hover:border-slate-500 transition-all"
            >
              Browse All Inventory
            </Link>
          </div>

        </div>
      </section>

      <TestDriveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} carName="Custom Vehicle Sourcing" />
    </>
  );
}
