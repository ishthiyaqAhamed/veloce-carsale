"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Car, Banknote, Clock, FileCheck } from "lucide-react";
import TestDriveModal from "./TestDriveModal";

export default function TradeInValuation() {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Bring or Submit Details",
      desc: "Share your vehicle's make, model, year, and mileage via WhatsApp or visit our Beruwala showroom.",
      icon: Car,
    },
    {
      num: "02",
      title: "15-Minute Live Inspection",
      desc: "Our certified evaluators conduct a transparent physical and mechanical condition appraisal.",
      icon: FileCheck,
    },
    {
      num: "03",
      title: "Immediate Equity or Cash",
      desc: "Receive top market value credited toward your new car or settled directly via bank transfer.",
      icon: Banknote,
    },
  ];

  const perks = [
    {
      title: "Top Market Appraisal",
      desc: "We evaluate real-time transaction data in Sri Lanka to guarantee you receive the highest fair market trade value.",
    },
    {
      title: "All Makes & Models Accepted",
      desc: "Toyota, Honda, Nissan, Suzuki, Lexus, Mercedes, BMW, Hyundai, vans, and commercial vehicles.",
    },
    {
      title: "Instant Sales Tax & Equity Offset",
      desc: "Apply your vehicle equity directly toward any car in our showroom and pay only the difference.",
    },
    {
      title: "Lease & Loan Settlement Assistance",
      desc: "Still paying off your current vehicle? Our finance team assists with title transfers and settlement.",
    },
  ];

  return (
    <>
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="trade-in">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-12 lg:p-14 shadow-sm">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-lime-700 font-bold block mb-2">
                Hansagiri Trade-In & Upgrade
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900 tracking-tight leading-tight">
                Trade In Your Vehicle <br className="hidden sm:block" />
                <span className="text-lime-600">Get Top Market Value</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-3">
                Looking to upgrade your car? We accept all Japanese and European makes and models. Receive a fair, certified valuation in under 15 minutes.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-lime-600" /> Free Appraisal</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-lime-600" /> Zero Obligation</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-lime-600" /> Same-Day Payout</span>
              </div>
            </div>
          </div>

          {/* 3 Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-lime-400 flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono font-bold text-slate-400 text-sm">{s.num}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg uppercase text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Visual & Key Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8">
            
            {/* Real Showroom Image Feature Card */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-slate-950 text-white min-h-[320px] sm:min-h-[380px] flex flex-col justify-between p-6 sm:p-8">
              <Image
                src="/hansagiri-showroom.jpg"
                alt="Hansagiri Auto Traders Showroom Beruwala"
                fill
                className="object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase bg-lime-400 text-slate-950 px-2.5 py-1 rounded-md font-bold inline-block mb-3">
                  Beruwala Showroom Appraisal
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-tight leading-tight">
                  Exchange Any Vehicle Today
                </h3>
              </div>

              <div className="relative z-10 pt-6">
                <p className="text-xs sm:text-sm text-slate-200 mb-4 leading-relaxed">
                  Visit 586 Galle Rd, Beruwala with your vehicle registration book and keys for an on-the-spot inspection.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-3 bg-lime-400 hover:bg-white text-slate-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Valuation</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href="https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20would%20like%20to%20get%20a%20trade-in%20valuation%20for%20my%20vehicle."
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-sm transition-all"
                  >
                    WhatsApp Details
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Perks Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 uppercase mb-1.5 leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-lime-600" />
              <span>Complimentary Inspection & Direct Bank Wire Settlement</span>
            </div>
            <span>No Purchase Obligation Required</span>
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
