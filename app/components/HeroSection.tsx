"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import TestDriveModal from "./TestDriveModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-slate-950 pt-28 pb-14 px-6 sm:px-12 text-white">
        
        {/* ================= FULL-BLEED VIDEO BACKGROUND ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-90"
          >
            <source src="/hero-car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Cinematic darkness gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

          {/* Subtle Ambient Accent Glow */}
          <div 
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[180px] opacity-20 pointer-events-none"
            style={{ background: "#C9FF00" }}
          />
        </div>

        {/* ================= FOREGROUND HERO CONTENT ================= */}
        
        {/* Top Tag */}
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#C9FF00]">
              <span>★ 5.0</span>
              <span className="text-white/80 font-normal">(2 Google Reviews)</span>
            </span>
          </motion.div>
        </div>

        {/* Center Main Headline & CTAs */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-6">
          <div className="max-w-3xl">
            
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.92] mb-6"
            >
              Hansagiri <br />
              <span 
                className="block text-[#C9FF00]"
                style={{ textShadow: "0 0 50px rgba(201,255,0,0.4)" }}
              >
                Auto Traders
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 max-w-xl font-body leading-relaxed mb-10 font-normal"
            >
              Beruwala&apos;s premier auto dealership specializing in high-quality new and pre-owned vehicles. Honest pricing, guaranteed transparency, and dependable customer service.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/inventory"
                className="px-8 py-4 bg-[#C9FF00] text-slate-950 font-display font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-lg flex items-center gap-2 cursor-pointer font-bold"
              >
                <span>Browse Vehicles</span>
                <ArrowRight size={15} />
              </Link>
            </motion.div>

          </div>
        </div>

        {/* ================= BOTTOM STATS BAR ================= */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          
          {/* Stats Bar */}
          <div className="flex items-center gap-6 sm:gap-10 text-xs font-mono">
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Quality</span>
              <span className="font-display font-black text-lg text-[#C9FF00]">100% Inspected</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Location</span>
              <span className="font-display font-black text-lg text-white">Beruwala, LK</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Delivery</span>
              <span className="font-display font-black text-lg text-sky-400">Islandwide</span>
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