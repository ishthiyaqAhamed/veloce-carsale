"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Phone, MessageCircle, MapPin, ArrowRight, ShieldCheck, Sparkles, Filter } from "lucide-react";
import MobileStories from "./MobileStories";
import TestDriveModal from "./TestDriveModal";

export default function MobileHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const quickFilterChips = [
    { label: "All Fleet", href: "/inventory" },
    { label: "SUVs & 4x4", href: "/inventory" },
    { label: "Hybrid Eco", href: "/inventory" },
    { label: "Vans & High-Roof", href: "/inventory" },
    { label: "Double Cab", href: "/inventory" },
  ];

  return (
    <div className="md:hidden w-full bg-[#F8FAFC] pb-4">
      {/* 1. Stories Carousel at Top */}
      <div className="bg-white border-b border-slate-200/80 pt-2 pb-1">
        <div className="px-4 flex items-center justify-between mb-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
            <Sparkles size={11} className="text-lime-600" />
            Showroom Highlights
          </span>
          <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Tap to View
          </span>
        </div>
        <MobileStories />
      </div>

      {/* 2. Main High-Impact Mobile Hero Card */}
      <div className="px-4 pt-3">
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-6 shadow-xl border border-slate-900 flex flex-col justify-between min-h-[360px]">
          
          {/* Background Video */}
          <div className="absolute inset-0 z-0 opacity-80">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover scale-105"
            >
              <source src="/hero-car.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Top Status Badge */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="font-bold text-white">Showroom Open</span>
              <span className="text-slate-400">· Beruwala</span>
            </div>

            <span className="text-[10px] font-mono text-lime-400 font-bold bg-lime-950/70 border border-lime-500/30 px-2 py-0.5 rounded-md">
              586 Galle Rd
            </span>
          </div>

          {/* Title and Value Proposition */}
          <div className="relative z-10 my-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9FF00] font-bold block mb-1">
              Premier Auto Dealer
            </span>
            <h1 className="font-display font-black text-4xl uppercase tracking-tight text-white leading-[0.92] mb-3">
              Hansagiri <br />
              <span className="text-[#C9FF00]">Auto Traders</span>
            </h1>
            <p className="text-xs text-slate-200 font-sans leading-relaxed line-clamp-2">
              Verified Japanese & European vehicles in Beruwala with honest pricing, instant trade-ins & nationwide delivery.
            </p>
          </div>

          {/* Direct CTA Buttons inside Hero Card */}
          <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-white/10">
            <Link
              href="/inventory"
              className="flex-1 py-3 px-4 bg-[#C9FF00] hover:bg-white text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <span>Explore Fleet</span>
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setModalOpen(true)}
              className="py-3 px-4 bg-white/15 hover:bg-white/25 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-sm active:scale-95 transition-all"
            >
              Inquire
            </button>
          </div>

        </div>
      </div>

      {/* 3. Fast Touch Quick Actions Grid (Call, WhatsApp, Maps, Trade-in) */}
      <div className="px-4 pt-4">
        <div className="grid grid-cols-2 gap-2.5">
          {/* Call Showroom */}
          <a
            href="tel:0777778298"
            className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 active:scale-98 transition-all flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-lime-400 flex items-center justify-center shrink-0 shadow-2xs">
              <Phone size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                Direct Call
              </span>
              <span className="font-display font-black text-xs text-slate-900 uppercase block">
                077 777 8298
              </span>
            </div>
          </a>

          {/* WhatsApp Chat */}
          <a
            href="https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20would%20like%20to%20inquire%20about%20your%20available%20cars."
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 shadow-2xs hover:bg-emerald-100/70 active:scale-98 transition-all flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <MessageCircle size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">
                Instant Chat
              </span>
              <span className="font-display font-black text-xs text-emerald-950 uppercase block">
                WhatsApp Us
              </span>
            </div>
          </a>

          {/* Showroom Directions */}
          <a
            href="https://www.google.com/search?q=hansagiri+auto+traders+beruwala"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 active:scale-98 transition-all flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <MapPin size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                Showroom
              </span>
              <span className="font-display font-black text-xs text-slate-900 uppercase block">
                Galle Rd, Beruwala
              </span>
            </div>
          </a>

          {/* Trade-In Valuation */}
          <Link
            href="/#trade-in"
            className="p-3.5 rounded-2xl bg-lime-50 border border-lime-200/80 shadow-2xs hover:bg-lime-100/70 active:scale-98 transition-all flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-lime-500 text-slate-950 flex items-center justify-center shrink-0 shadow-2xs font-mono font-black text-sm">
              Rs
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-lime-800 font-bold block">
                Free Appraisal
              </span>
              <span className="font-display font-black text-xs text-slate-950 uppercase block">
                Trade-In Vehicle
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* 4. Quick Category Search Chips */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {quickFilterChips.map((chip, i) => (
            <Link
              key={i}
              href={chip.href}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 font-semibold whitespace-nowrap hover:border-slate-400 hover:text-slate-950 active:bg-slate-100 transition-colors shadow-2xs"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      </div>

      <TestDriveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} carName="Mobile Vehicle Inquiry" />
    </div>
  );
}
