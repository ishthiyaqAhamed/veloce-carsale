"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, DollarSign, RefreshCw, ShieldCheck, Sparkles, TrendingUp, Key } from "lucide-react";
import TestDriveModal from "./TestDriveModal";

export default function TradeInValuation() {
  const [modalOpen, setModalOpen] = useState(false);

  const perks = [
    {
      title: "Top Dollar Market Appraisal",
      desc: "We analyze real-time national market transactions to guarantee you receive the highest fair market value for your vehicle.",
      badge: "Best Offer",
    },
    {
      title: "Every Make & Model Accepted",
      desc: "Whether you drive a Toyota, Honda, Hyundai, Ford, electric vehicle, or luxury SUV—we evaluate and trade all models.",
      badge: "100% Eligible",
    },
    {
      title: "Instant Equity & Sales Tax Offset",
      desc: "Apply your vehicle's trade value directly toward your next purchase and pay sales tax only on the cash difference.",
      badge: "Tax Savings",
    },
    {
      title: "Zero-Hassle Loan & Lease Payoff",
      desc: "Still paying off your current vehicle? Our finance department handles the lien payoff and title transfers directly for you.",
      badge: "Full Support",
    },
  ];

  return (
    <>
      <section className="py-24 px-6 max-w-7xl mx-auto" id="trade-in">
        <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl">
          
          {/* Subtle background decoration */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-lime-100/70 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-100/70 rounded-full blur-3xl pointer-events-none" />

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-50 border border-lime-200 mb-4 shadow-xs">
                <RefreshCw size={14} className="text-lime-600 animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                  Official Trade-In & Equity Exchange Program
                </span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-slate-900 tracking-tight leading-[0.92]">
                Trade In Your Vehicle <br />
                <span className="text-lime-600">Get Top Market Value</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-4">
                Looking to upgrade your daily commute or family SUV? We accept all makes, models, and years. Receive a certified valuation in under 15 minutes.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-lime-600" /> Free Appraisal</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-lime-600" /> Zero Obligation</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-lime-600" /> 7-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Main Visual & Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 mb-12">
            
            {/* Left Column: Big Vector Car Graphic & Visual Showcase (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
              
              {/* Glow accents */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute right-10 bottom-10 w-60 h-60 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

              {/* Vector Car & Exchange Artwork */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#C9FF00] text-xs font-mono uppercase font-bold">
                    <TrendingUp size={14} />
                    <span>Live Market Appraisal Algorithm</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Step 1 of 2</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-4xl uppercase text-white tracking-tight mb-3 leading-tight">
                  Exchange Any Car, Truck or SUV
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  Whether you own a Toyota, Honda, Hyundai, Ford, EV, or premium German SUV, our live appraisal engine credits maximum equity toward your next purchase.
                </p>
              </div>

              {/* Vector Illustration Container */}
              <div className="my-6 relative py-4 flex items-center justify-center">
                <svg className="w-full max-w-lg h-auto drop-shadow-2xl" viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Road Grid Line */}
                  <line x1="20" y1="210" x2="580" y2="210" stroke="#334155" strokeWidth="2" strokeDasharray="8 8" />
                  <line x1="20" y1="212" x2="580" y2="212" stroke="#1E293B" strokeWidth="1" />
                  
                  {/* Background Trade-In SUV (Vector) */}
                  <g opacity="0.95">
                    {/* Car Body */}
                    <path d="M70 180 L100 130 Q120 100 160 95 L340 95 Q380 95 410 120 L480 145 Q520 155 530 180 L520 190 L70 190 Z" fill="url(#carGradient)" />
                    {/* Roof & Windows */}
                    <path d="M155 105 L270 105 L270 140 L120 140 Q135 115 155 105 Z" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    <path d="M285 105 L370 105 Q395 105 415 125 L435 140 L285 140 Z" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    {/* Headlights */}
                    <polygon points="510,160 535,168 515,178" fill="#C9FF00" opacity="0.9" />
                    <circle cx="525" cy="170" r="4" fill="#FFFFFF" />
                    {/* Taillights */}
                    <rect x="68" y="155" width="10" height="20" rx="3" fill="#F43F5E" />
                    {/* Body Contour Lines */}
                    <path d="M110 150 Q280 150 490 165" stroke="#C9FF00" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
                    {/* Front Wheel */}
                    <circle cx="430" cy="190" r="30" fill="#0F172A" stroke="#475569" strokeWidth="6" />
                    <circle cx="430" cy="190" r="16" fill="#1E293B" stroke="#C9FF00" strokeWidth="3" />
                    <circle cx="430" cy="190" r="6" fill="#FFFFFF" />
                    {/* Rear Wheel */}
                    <circle cx="160" cy="190" r="30" fill="#0F172A" stroke="#475569" strokeWidth="6" />
                    <circle cx="160" cy="190" r="16" fill="#1E293B" stroke="#C9FF00" strokeWidth="3" />
                    <circle cx="160" cy="190" r="6" fill="#FFFFFF" />
                  </g>

                  {/* Dynamic Floating Trade Badges */}
                  <g>
                    {/* Badge 1: Trade Valuation */}
                    <rect x="350" y="20" width="190" height="52" rx="14" fill="#0F172A" stroke="#C9FF00" strokeWidth="2" />
                    <circle cx="375" cy="46" r="12" fill="#C9FF00" />
                    <text x="371" y="50" fill="#0F172A" fontSize="12" fontWeight="bold" fontFamily="monospace">$</text>
                    <text x="395" y="40" fill="#94A3B8" fontSize="10" fontFamily="monospace">INSTANT VALUATION</text>
                    <text x="395" y="58" fill="#FFFFFF" fontSize="15" fontWeight="bold" fontFamily="sans-serif">+ $3,500 Over KBB</text>

                    {/* Circular Trade Arrows */}
                    <circle cx="280" cy="46" r="22" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                    <path d="M272 40 L288 40 M288 40 L282 34 M288 52 L272 52 M272 52 L278 58" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="carGradient" x1="70" y1="95" x2="530" y2="190" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="50%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div>
                  <p className="text-[11px] text-slate-400 font-mono uppercase">Typical Turnaround</p>
                  <p className="font-display font-bold text-xl text-white">Same-Day Completion</p>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 bg-[#C9FF00] hover:bg-white text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer font-bold transform hover:scale-[1.02]"
                >
                  <span>Value Your Vehicle Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

            {/* Right Column: 4 Key Value Benefit Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {perks.map((p, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-lime-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase font-bold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      {p.badge}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-500" />
                  </div>

                  <h4 className="font-display font-bold text-lg text-slate-900 uppercase mb-1.5 leading-snug">
                    {p.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Trust & Transparency Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 relative z-10">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck size={18} className="text-lime-600" />
              <span>Complimentary On-Site Inspection & Immediate Bank Wire Settlement</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-slate-700">
              <Sparkles size={16} className="text-lime-600" />
              <span>No Purchase Obligation Required</span>
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
