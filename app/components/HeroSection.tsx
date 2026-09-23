"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TestDriveModal from "./TestDriveModal";

interface BackgroundCar {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  price: string;
  accentColor: string;
  bgImage: string;
}

const backgroundCars: BackgroundCar[] = [
  {
    id: "porsche-gt3",
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    tagline: "Naturally Aspirated Motorsport Perfection",
    price: "$285,000",
    accentColor: "#C9FF00", // Lime
    bgImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90",
  },
  {
    id: "ferrari-f8",
    name: "Ferrari Daytona SP3",
    brand: "Ferrari",
    tagline: "Naturally Aspirated 6.5L Mid-Rear V12",
    price: "$2,250,000",
    accentColor: "#FF1F6E", // Pink
    bgImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2400&q=90",
  },
  {
    id: "bugatti-chiron",
    name: "Bugatti Chiron Pur Sport",
    brand: "Bugatti",
    tagline: "Quad-Turbo W16 Aerodynamic Masterpiece",
    price: "$3,800,000",
    accentColor: "#00E5FF", // Cyan
    bgImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2400&q=90",
  },
  {
    id: "amg-gt",
    name: "Mercedes-AMG GT Coupe",
    brand: "Mercedes-Benz",
    tagline: "Handcrafted Twin-Turbo V8 Power",
    price: "$178,000",
    accentColor: "#C9FF00", // Lime
    bgImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2400&q=90",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const car = backgroundCars[current];

  const nextCar = () => setCurrent((c) => (c + 1) % backgroundCars.length);
  const prevCar = () => setCurrent((c) => (c - 1 + backgroundCars.length) % backgroundCars.length);

  // Auto carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(nextCar, 7000);
    return () => clearInterval(timer);
  }, [current]);

  // Dynamic laser wind stream & floating particle canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const count = 35;
    const particles: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      thickness: number;
      color: string;
    }> = [];

    const colors = [car.accentColor, "#FFFFFF", "#00E5FF"];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 2,
        opacity: Math.random() * 0.4 + 0.1,
        thickness: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x -= p.speed;
        if (p.x < -p.length) {
          p.x = width + Math.random() * 100;
          p.y = Math.random() * height;
        }

        const gradient = ctx.createLinearGradient(p.x, p.y, p.x + p.length, p.y);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, p.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.thickness;
        ctx.globalAlpha = p.opacity;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [current, car.accentColor]);

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#06060E] pt-28 pb-12 px-6 sm:px-12">
        
        {/* ================= BACKGROUND FULL-SCREEN CAR ANIMATION ================= */}
        <div className="absolute inset-0 z-0">
          
          {/* Full bleed animated images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={car.bgImage}
                alt={car.name}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              
              {/* Studio cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#06060E]/95 via-[#06060E]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060E] via-transparent to-[#06060E]/60" />
            </motion.div>
          </AnimatePresence>

          {/* Dynamic Laser Wind Particle Canvas Overlay */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          />

          {/* Glowing Ambient Light Beam Cone */}
          <div 
            className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none transition-colors duration-1000"
            style={{ background: car.accentColor }}
          />
        </div>

        {/* ================= FOREGROUND HERO CONTENT ================= */}
        
        {/* Top Tag */}
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E0E1F]/80 border border-[#1E1E3F] backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full animate-ping" style={{ background: car.accentColor }} />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/90">
              {car.brand} · In Showroom Vault
            </span>
          </motion.div>
        </div>

        {/* Center Main Headline & CTA */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-8">
          <div className="max-w-3xl">
            <motion.h1
              key={`title-${car.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.92] mb-6"
            >
              The Pursuit of <br />
              <span 
                className="block"
                style={{ 
                  color: car.accentColor,
                  textShadow: `0 0 40px ${car.accentColor}40`
                }}
              >
                {car.name.split(" ").slice(-2).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              key={`sub-${car.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-xl font-body leading-relaxed mb-8"
            >
              {car.tagline}. Certified with verified provenance, multi-point inspection, and immediate delivery.
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/inventory"
                className="px-8 py-4 text-[#06060E] font-display font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(201,255,0,0.3)] flex items-center gap-2 cursor-pointer"
                style={{ background: car.accentColor }}
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
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR CONTROLS ================= */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 border-t border-[#1E1E3F]/80 flex flex-wrap items-center justify-between gap-4">
          
          {/* Car selector tabs */}
          <div className="flex items-center gap-2">
            {backgroundCars.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setCurrent(idx)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase transition-all cursor-pointer flex items-center gap-2 ${
                  current === idx
                    ? "bg-white text-[#06060E] font-bold shadow-lg"
                    : "bg-[#0E0E1F]/80 text-[#6B6B8E] hover:text-white border border-[#1E1E3F]"
                }`}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ background: current === idx ? "#06060E" : c.accentColor }} 
                />
                <span>{c.brand}</span>
              </button>
            ))}
          </div>

          {/* Navigation Arrows & Index */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#6B6B8E] tracking-widest">
              0{current + 1} / 0{backgroundCars.length}
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={prevCar}
                className="w-9 h-9 rounded-lg bg-[#0E0E1F]/80 border border-[#1E1E3F] text-white hover:text-[#C9FF00] hover:border-[#C9FF00] flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
                aria-label="Previous Car"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextCar}
                className="w-9 h-9 rounded-lg bg-[#0E0E1F]/80 border border-[#1E1E3F] text-white hover:text-[#C9FF00] hover:border-[#C9FF00] flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
                aria-label="Next Car"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </section>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName={car.name}
      />
    </>
  );
}