"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import TestDriveModal from "./TestDriveModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[85vh] sm:min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-slate-950 pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-12 text-white">
        
        {/* ================= FULL-BLEED VIDEO BACKGROUND ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-85 sm:opacity-90"
          >
            <source src="/hero-car.mp4" type="video/mp4" />
          </video>

          {/* Cinematic darkness gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />
        </div>

        {/* ================= FOREGROUND HERO CONTENT ================= */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-4 sm:py-6">
          <div className="max-w-3xl">
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono font-semibold uppercase tracking-wider text-lime-400 mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              586 Galle Rd, Beruwala
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display font-black text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.94] sm:leading-[0.92] mb-4 sm:mb-6"
            >
              Hansagiri <br />
              <span 
                className="block text-[#C9FF00]"
                style={{ textShadow: "0 0 50px rgba(201,255,0,0.3)" }}
              >
                Auto Traders
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-lg text-slate-200 max-w-xl font-body leading-relaxed mb-8 sm:mb-10 font-normal"
            >
              Beruwala&apos;s premier auto dealership specializing in high-quality new and pre-owned vehicles. Honest pricing, guaranteed transparency, and dependable customer service.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/inventory"
                className="px-7 py-3.5 sm:px-8 sm:py-4 bg-[#C9FF00] text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg flex items-center gap-2 cursor-pointer font-bold active:scale-95"
              >
                <span>Browse Fleet</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:0777778298"
                className="px-5 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <Phone size={14} className="text-lime-400" />
                <span>077 777 8298</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* ================= BOTTOM STATS BAR ================= */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-4 sm:pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-5 sm:gap-10 text-xs font-mono">
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Quality</span>
              <span className="font-display font-black text-base sm:text-lg text-[#C9FF00]">100% Inspected</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Showroom</span>
              <span className="font-display font-black text-base sm:text-lg text-white">Beruwala, LK</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Delivery</span>
              <span className="font-display font-black text-base sm:text-lg text-sky-400">Islandwide</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <ShieldCheck size={16} className="text-[#C9FF00]" />
            <span>Guaranteed Transparent Deals</span>
          </div>

        </div>

      </section>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName="Vehicle Inquiry"
      />
    </>
  );
}