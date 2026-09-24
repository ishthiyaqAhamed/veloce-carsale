"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, DollarSign, RefreshCw, ShieldCheck } from "lucide-react";
import TestDriveModal from "./TestDriveModal";

export default function TradeInValuation() {
  const [modalOpen, setModalOpen] = useState(false);

  const perks = [
    {
      title: "Top Dollar Market Value",
      desc: "We use live market data to ensure you receive the most competitive offer for your car.",
      color: "#C9FF00",
    },
    {
      title: "All Makes & Models Welcome",
      desc: "From Toyota, Honda, and Hyundai to premium SUVs and trucks—we buy and trade every brand.",
      color: "#00E5FF",
    },
    {
      title: "Instant Equity & Tax Savings",
      desc: "Apply your trade equity immediately toward your new purchase and reduce your sales tax.",
      color: "#FF1F6E",
    },
  ];

  return (
    <>
      <section className="py-16 px-6 max-w-7xl mx-auto" id="trade-in">
        <div className="relative rounded-3xl bg-[#0E0E1F] border border-[#1E1E3F] p-8 sm:p-12 overflow-hidden shadow-xl">
          
          {/* Ambient background glow */}
          <div 
            className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none"
            style={{ background: "#C9FF00" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Information (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141428] border border-[#1E1E3F] mb-4">
                <RefreshCw size={13} className="text-[#C9FF00]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#C9FF00]">
                  Vehicle Trade-In Program
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight mb-4">
                Trade In Your Current Vehicle With Us
              </h2>

              <p className="text-sm text-[#6B6B8E] leading-relaxed mb-6">
                Looking to upgrade your daily commute or family SUV? We make selling or trading your current vehicle simple, transparent, and hassle-free. Get a fair appraisal and drive home in your next car today.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-7 py-3.5 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-white transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(201,255,0,0.2)]"
                >
                  <span>Get Trade-In Appraisal</span>
                  <ArrowRight size={14} />
                </button>
                <span className="text-xs font-mono text-[#6B6B8E]">
                  Free · No Obligation · Instant Quote
                </span>
              </div>
            </div>

            {/* Right Column: 3 Benefit Badges (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {perks.map((p, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-[#06060E]/80 border border-[#1E1E3F] flex items-start gap-3.5"
                >
                  <div 
                    className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" 
                    style={{ background: p.color }} 
                  />
                  <div>
                    <h3 className="font-display font-bold text-sm text-white uppercase mb-0.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#6B6B8E] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName="Vehicle Trade-In Valuation"
      />
    </>
  );
}
