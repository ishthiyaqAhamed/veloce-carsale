"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Volume2, VolumeX, Play, Pause, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import TestDriveModal from "./TestDriveModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch(() => {
        // Auto-play might require user gesture if unmuted
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#06060E] pt-28 pb-12 px-6 sm:px-12">
        
        {/* ================= FULL-BLEED VIDEO BACKGROUND ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          >
            <source src="/hero-car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Cinematic darkness and vignette overlays for crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06060E]/95 via-[#06060E]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06060E] via-transparent to-[#06060E]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06060E]/70 via-transparent to-transparent" />

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
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E0E1F]/80 border border-[#1E1E3F] backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9FF00] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/90">
              Premier Luxury & Exotic Dealership
            </span>
          </motion.div>
        </div>

        {/* Center Main Headline & CTAs */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-8">
          <div className="max-w-3xl">
            
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.92] mb-6"
            >
              Drive The <br />
              <span 
                className="block text-[#C9FF00]"
                style={{ textShadow: "0 0 50px rgba(201,255,0,0.35)" }}
              >
                Extraordinary
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-white/85 max-w-xl font-body leading-relaxed mb-10"
            >
              Explore our handpicked collection of high-performance sports cars, luxury sedans, and exotic vehicles available for immediate delivery.
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
                className="px-8 py-4 bg-[#C9FF00] text-[#06060E] font-display font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(201,255,0,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Inventory</span>
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="px-7 py-4 bg-[#0E0E1F]/80 border border-[#1E1E3F] text-white font-display font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:border-white hover:text-white transition-all backdrop-blur-md cursor-pointer"
              >
                Book Test Drive
              </button>
            </motion.div>

          </div>
        </div>

        {/* ================= BOTTOM BAR CONTROLS & LIVE STATS ================= */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 border-t border-[#1E1E3F]/80 flex flex-wrap items-center justify-between gap-4">
          
          {/* Stats Bar */}
          <div className="flex items-center gap-6 sm:gap-10 text-xs font-mono">
            <div>
              <span className="text-[#6B6B8E] block uppercase text-[10px]">Vehicles</span>
              <span className="font-display font-black text-lg text-white">50+ Ready</span>
            </div>
            <div className="w-px h-6 bg-[#1E1E3F]" />
            <div>
              <span className="text-[#6B6B8E] block uppercase text-[10px]">Quality</span>
              <span className="font-display font-black text-lg text-[#C9FF00]">100% Certified</span>
            </div>
            <div className="w-px h-6 bg-[#1E1E3F]" />
            <div>
              <span className="text-[#6B6B8E] block uppercase text-[10px]">Delivery</span>
              <span className="font-display font-black text-lg text-[#00E5FF]">Nationwide</span>
            </div>
          </div>

          {/* Video Playback Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2.5 rounded-lg bg-[#0E0E1F]/80 border border-[#1E1E3F] text-white hover:text-[#C9FF00] hover:border-[#C9FF00] transition-colors backdrop-blur-md cursor-pointer"
              title={isPlaying ? "Pause Video" : "Play Video"}
              aria-label="Toggle video playback"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            <button
              onClick={toggleMute}
              className="p-2.5 rounded-lg bg-[#0E0E1F]/80 border border-[#1E1E3F] text-white hover:text-[#C9FF00] hover:border-[#C9FF00] transition-colors backdrop-blur-md cursor-pointer"
              title={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
              aria-label="Toggle audio"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#C9FF00]" />}
            </button>
          </div>

        </div>

      </section>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName="Luxury Sports Vehicle"
      />
    </>
  );
}