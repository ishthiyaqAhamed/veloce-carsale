"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCw, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";
import TestDriveModal from "./TestDriveModal";

export default function MobileTradeInWidget() {
  const [modalOpen, setModalOpen] = useState(false);
  const [brand, setBrand] = useState("Toyota");
  const [year, setYear] = useState("2021");
  const [condition, setCondition] = useState("Excellent");
  const { formatPrice } = useCurrency();

  // Simple heuristic valuation boost for demo
  const getBaseValue = () => {
    let base = 12000000;
    if (brand === "Toyota") base = 16000000;
    if (brand === "Lexus" || brand === "Mercedes-Benz" || brand === "BMW") base = 32000000;
    if (brand === "Suzuki") base = 7500000;
    if (brand === "Nissan") base = 14000000;
    if (brand === "Honda") base = 15000000;

    const yearDiff = parseInt(year) - 2018;
    const yearBonus = yearDiff * 1200000;

    let condMultiplier = 1.0;
    if (condition === "Mint") condMultiplier = 1.15;
    if (condition === "Excellent") condMultiplier = 1.05;
    if (condition === "Good") condMultiplier = 0.95;

    return Math.round((base + yearBonus) * condMultiplier);
  };

  const estimatedValue = getBaseValue();

  return (
    <div className="md:hidden px-4 py-6 bg-[#F8FAFC]" id="mobile-trade-in">
      <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white p-5 border border-slate-800 shadow-xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-lime-400 font-bold bg-lime-950/70 border border-lime-500/30 px-2.5 py-0.5 rounded-full">
            <RefreshCw size={11} className="animate-spin-slow" />
            <span>Instant Equity Estimator</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 font-bold">15 Min Appraisal</span>
        </div>

        <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-1.5 leading-tight">
          Value Your Current Car
        </h3>
        <p className="text-xs text-slate-300 mb-4 font-normal leading-relaxed">
          Exchange any make, model, or year. Apply immediate cash equity toward your next upgrade.
        </p>

        {/* Interactive Selector Inputs */}
        <div className="space-y-3 mb-4">
          
          {/* Brand Selection */}
          <div>
            <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
              Vehicle Make
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {["Toyota", "Honda", "Nissan", "Suzuki", "Lexus", "Mercedes", "BMW", "Other"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`py-1.5 text-xs font-mono font-bold rounded-xl border transition-all ${
                    brand === b
                      ? "bg-[#C9FF00] text-slate-950 border-[#C9FF00]"
                      : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Year Selection */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                Model Year
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-white focus:outline-none"
              >
                {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map((y) => (
                  <option key={y} value={y.toString()}>
                    {y} Model
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                Condition
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-white focus:outline-none"
              >
                <option value="Mint">Mint / Showroom</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good / Daily Driven</option>
              </select>
            </div>
          </div>

        </div>

        {/* Estimated Value Display Card */}
        <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
            <span className="uppercase text-[10px]">Estimated Trade-In Equity</span>
            <span className="text-lime-400 font-bold flex items-center gap-1">
              <Sparkles size={11} />
              Instant Offer
            </span>
          </div>
          <div className="font-display font-black text-2xl sm:text-3xl text-[#C9FF00] tracking-tight">
            {formatPrice(estimatedValue)}
          </div>
          <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
            Based on {year} {brand} in {condition} condition
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20would%20like%20to%20get%20an%20official%20trade-in%20valuation%20for%20my%20${encodeURIComponent(year)}%20${encodeURIComponent(brand)}%20(${encodeURIComponent(condition)}%20condition).`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <MessageCircle size={15} />
            <span>Lock On WhatsApp</span>
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="py-3 px-4 bg-[#C9FF00] text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-xl active:scale-95 transition-all"
          >
            Book Slot
          </button>
        </div>

        {/* Trust Note */}
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <ShieldCheck size={14} className="text-lime-400 shrink-0" />
          <span>Complimentary On-Site Inspection · Immediate Bank Wire</span>
        </div>

      </div>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName={`Trade-In (${year} ${brand})`}
      />
    </div>
  );
}
