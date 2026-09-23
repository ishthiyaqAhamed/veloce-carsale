"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, ShieldCheck, ArrowRight } from "lucide-react";
import VipBookingModal from "./VipBookingModal";

export default function FinanceCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(1500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [termMonths, setTermMonths] = useState(36);
  const [rateTier, setRateTier] = useState(4.2); // 4.2% Private Wealth
  const [isModalOpen, setIsModalOpen] = useState(false);

  const downPaymentAmount = (vehiclePrice * downPaymentPercent) / 100;
  const principal = vehiclePrice - downPaymentAmount;
  const monthlyRate = rateTier / 100 / 12;
  
  // Amortization calculation
  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);

  const totalFinanceCost = monthlyPayment * termMonths;
  const totalInterest = totalFinanceCost - principal;

  return (
    <section className="py-24 px-6 bg-[#06060E] border-b border-[#1E1E3F] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calculator size={16} className="text-[#C9FF00]" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9FF00]">
                Private Wealth Structuring
              </p>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase text-white leading-none">
              Asset Finance <br />
              <span className="text-[#6B6B8E]">& Lease Estimator</span>
            </h2>
          </div>
          <p className="font-body text-sm text-[#6B6B8E] max-w-md leading-relaxed">
            Tailor high-value bespoke financing structures, balloon lease configurations, and international escrow settlement schedules.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Controls (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F] flex flex-col justify-between gap-6 shadow-2xl">
            
            {/* Vehicle Value Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-mono text-xs uppercase tracking-wider text-[#6B6B8E]">
                  Asset Valuation
                </label>
                <span className="font-display font-black text-2xl text-white">
                  ${vehiclePrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={200000}
                max={5000000}
                step={50000}
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(Number(e.target.value))}
                className="w-full h-2 bg-[#06060E] rounded-lg appearance-none cursor-pointer accent-[#C9FF00]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#6B6B8E] mt-1">
                <span>$200,000</span>
                <span>$2,500,000</span>
                <span>$5,000,000+</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-mono text-xs uppercase tracking-wider text-[#6B6B8E]">
                  Initial Deposit ({downPaymentPercent}%)
                </label>
                <span className="font-display font-black text-xl text-[#C9FF00]">
                  ${downPaymentAmount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={60}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#06060E] rounded-lg appearance-none cursor-pointer accent-[#C9FF00]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#6B6B8E] mt-1">
                <span>10% (Minimum)</span>
                <span>30% (Standard)</span>
                <span>60% (Max)</span>
              </div>
            </div>

            {/* Term Selection */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#6B6B8E] mb-3">
                Financing Term Duration
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[24, 36, 48, 60].map((term) => (
                  <button
                    key={term}
                    onClick={() => setTermMonths(term)}
                    className={`py-3 rounded-xl font-mono text-xs uppercase transition-all cursor-pointer ${
                      termMonths === term
                        ? "bg-[#C9FF00] text-[#06060E] font-bold shadow-[0_0_15px_rgba(201,255,0,0.25)]"
                        : "bg-[#06060E] border border-[#1E1E3F] text-white hover:border-white/40"
                    }`}
                  >
                    {term} Mo
                  </button>
                ))}
              </div>
            </div>

            {/* Tier selection */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#6B6B8E] mb-3">
                Client Tier Structure
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setRateTier(4.2)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    rateTier === 4.2
                      ? "border-[#00E5FF] bg-[#141428]"
                      : "border-[#1E1E3F] bg-[#06060E]"
                  }`}
                >
                  <p className="font-mono text-xs uppercase font-bold text-white">Private Wealth Tier</p>
                  <p className="font-mono text-[11px] text-[#00E5FF]">4.2% Fixed APR · Escrow Priority</p>
                </button>
                <button
                  onClick={() => setRateTier(5.8)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    rateTier === 5.8
                      ? "border-[#FF1F6E] bg-[#141428]"
                      : "border-[#1E1E3F] bg-[#06060E]"
                  }`}
                >
                  <p className="font-mono text-xs uppercase font-bold text-white">Corporate Asset Tier</p>
                  <p className="font-mono text-[11px] text-[#FF1F6E]">5.8% Flexible APR · Tax Optimized</p>
                </button>
              </div>
            </div>

          </div>

          {/* Right: Calculated Amortization Result (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F] flex flex-col justify-between shadow-2xl relative">
            
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1E1E3F]">
                <ShieldCheck size={16} className="text-[#C9FF00]" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C9FF00]">
                  Estimated Amortization
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-wider text-[#6B6B8E] mb-2">
                Estimated Monthly Allocation
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display font-black text-5xl sm:text-6xl text-white">
                  ${Math.round(monthlyPayment).toLocaleString()}
                </span>
                <span className="font-mono text-xs text-[#6B6B8E]">/ month</span>
              </div>

              {/* Financial breakdown */}
              <div className="space-y-4 border-t border-[#1E1E3F] pt-6 mb-8 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#6B6B8E]">Asset Valuation:</span>
                  <span className="text-white font-semibold">${vehiclePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B8E]">Initial Deposit ({downPaymentPercent}%):</span>
                  <span className="text-[#C9FF00] font-semibold">${downPaymentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B8E]">Financed Principal:</span>
                  <span className="text-white font-semibold">${principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B8E]">Term & Rate:</span>
                  <span className="text-[#00E5FF] font-semibold">{termMonths} Months @ {rateTier}% APR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B8E]">Estimated Finance Charge:</span>
                  <span className="text-[#FF1F6E] font-semibold">${Math.round(totalInterest).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-[#C9FF00] text-[#06060E] font-display font-black text-xs uppercase tracking-[0.2em] rounded hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(201,255,0,0.3)] cursor-pointer"
            >
              <span>Submit For Private Pre-Approval</span>
              <ArrowRight size={14} />
            </button>

          </div>

        </div>

      </div>

      <VipBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicleName={`Custom Finance Structure ($${Math.round(monthlyPayment).toLocaleString()}/mo)`}
      />
    </section>
  );
}
