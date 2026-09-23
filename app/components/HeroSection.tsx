"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, RotateCw, Sparkles, Compass, Eye, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TestDriveModal from "./TestDriveModal";

interface CarColor {
  id: string;
  name: string;
  hex: string;
  glow: string;
  image: string;
  price: string;
  tagline: string;
  power: string;
  accel: string;
  topSpeed: string;
}

const colorVariants: CarColor[] = [
  {
    id: "lime",
    name: "Acid Veloce Lime",
    hex: "#C9FF00",
    glow: "rgba(201, 255, 0, 0.4)",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90",
    price: "$285,000",
    tagline: "4.0L High-Revving Naturally Aspirated Flat-6 · 518 HP",
    power: "518 HP",
    accel: "3.0s",
    topSpeed: "184 MPH",
  },
  {
    id: "cyan",
    name: "Cyber Cyan Metallic",
    hex: "#00E5FF",
    glow: "rgba(0, 229, 255, 0.4)",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=2000&q=90",
    price: "$298,000",
    tagline: "Track Aerodynamics with Active DRS Aerofoil",
    power: "525 HP",
    accel: "2.9s",
    topSpeed: "188 MPH",
  },
  {
    id: "pink",
    name: "Monaco Hyper Pink",
    hex: "#FF1F6E",
    glow: "rgba(255, 31, 110, 0.4)",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2000&q=90",
    price: "$310,000",
    tagline: "Bespoke PTS Heritage Allocation Spec",
    power: "530 HP",
    accel: "2.9s",
    topSpeed: "190 MPH",
  },
  {
    id: "obsidian",
    name: "Obsidian Void Carbon",
    hex: "#1E1E3F",
    glow: "rgba(255, 255, 255, 0.25)",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2000&q=90",
    price: "$325,000",
    tagline: "Exposed Carbon-Weave Lightweight Package",
    power: "540 HP",
    accel: "2.8s",
    topSpeed: "192 MPH",
  },
];

export default function HeroSection() {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0]);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto slow rotation on turntable
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isRotating]);

  // 3D Parallax Tilt calculation from mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15; // -7.5 to +7.5 deg
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // 3D Holographic Ground Grid & Laser Scanner Particle Canvas
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

    let scanProgress = 0;

    // Floating light particles
    const particleCount = 45;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.5 ? selectedColor.hex : "#00E5FF",
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height * 0.68;

      // 1. 3D Perspective Elliptical Podium Ring
      const radiusX = Math.min(width * 0.45, 520);
      const radiusY = radiusX * 0.32;

      // Outer Neon Ring
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = selectedColor.hex;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = selectedColor.hex;
      ctx.shadowBlur = 25;
      ctx.stroke();

      // Inner Concentric Ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX * 0.75, radiusY * 0.75, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "#1E1E3F";
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 0;
      ctx.stroke();

      // Rotating tick marks on the podium rim
      const ticks = 36;
      for (let i = 0; i < ticks; i++) {
        const angle = (i * (Math.PI * 2) / ticks) + (rotationAngle * Math.PI / 180);
        const px = centerX + Math.cos(angle) * radiusX;
        const py = centerY + Math.sin(angle) * radiusY;
        const px2 = centerX + Math.cos(angle) * (radiusX - 8);
        const py2 = centerY + Math.sin(angle) * (radiusY - 3);

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px2, py2);
        ctx.strokeStyle = i % 4 === 0 ? selectedColor.hex : "#1E1E3F";
        ctx.lineWidth = i % 4 === 0 ? 2 : 1;
        ctx.stroke();
      }
      ctx.restore();

      // 2. Laser Scan Vertical Sweep Line
      scanProgress = (scanProgress + 0.008) % 1;
      const scanX = centerX - radiusX * 0.7 + (radiusX * 1.4 * scanProgress);
      
      ctx.save();
      const laserGrad = ctx.createLinearGradient(0, centerY - 180, 0, centerY + 80);
      laserGrad.addColorStop(0, "transparent");
      laserGrad.addColorStop(0.5, selectedColor.hex);
      laserGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.strokeStyle = laserGrad;
      ctx.lineWidth = 2;
      ctx.shadowColor = selectedColor.hex;
      ctx.shadowBlur = 15;
      ctx.moveTo(scanX, centerY - 200);
      ctx.lineTo(scanX, centerY + 60);
      ctx.stroke();
      ctx.restore();

      // 3. Floating Ambient Particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedColor, rotationAngle]);

  return (
    <>
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[96vh] w-full flex flex-col justify-between overflow-hidden bg-[#06060E] pt-24 pb-10 px-6 sm:px-12 select-none"
      >
        
        {/* ================= BACKGROUND 3D STAGE & GRAPHICS ================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          
          {/* GIANT ARCHITECTURAL BACKGROUND WATERMARK */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.04] font-display font-black text-[18vw] uppercase tracking-tighter leading-none pointer-events-none select-none">
            VELOCE 911
          </div>

          {/* 3D Holographic Grid Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          />

          {/* Ambient Volumetric Glow Cone */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[160px] opacity-20 transition-all duration-700 pointer-events-none"
            style={{ background: selectedColor.hex }}
          />

          {/* Top & Bottom Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06060E] via-transparent to-[#06060E]/80" />
        </div>

        {/* ================= TOP CONTENT: HEADLINE & BADGE ================= */}
        <div className="relative z-30 max-w-7xl mx-auto w-full text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E0E1F]/90 border border-[#1E1E3F] backdrop-blur-md mb-4"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: selectedColor.hex }} />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/90">
              3D Interactive Atelier Showcase
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none mb-3"
          >
            Porsche 911 <span style={{ color: selectedColor.hex }}>GT3 RS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#6B6B8E] max-w-lg mx-auto"
          >
            {selectedColor.tagline}
          </motion.p>

        </div>

        {/* ================= CENTER 3D CAR PODIUM STAGE ================= */}
        <div className="relative z-20 my-auto w-full max-w-5xl mx-auto h-[46vh] sm:h-[50vh] flex items-center justify-center">
          
          {/* 3D Tilted Wrapper that reacts to mouse position */}
          <motion.div
            animate={{
              rotateY: mousePos.x,
              rotateX: mousePos.y,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full h-full max-w-4xl flex items-center justify-center perspective-[1200px]"
          >
            
            {/* CAR IMAGE CONTAINER WITH SHADOW & GLOW */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedColor.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.03, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Underglow shadow reflection */}
                <div 
                  className="absolute bottom-6 w-3/4 h-16 rounded-full blur-2xl opacity-60 pointer-events-none transition-colors duration-500"
                  style={{ background: selectedColor.glow }}
                />

                <Image
                  src={selectedColor.image}
                  alt="3D Porsche 911 GT3 RS"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Interactive 3D Turntable Spin Indicator */}
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="absolute top-2 right-2 p-2.5 rounded-full bg-[#0E0E1F]/80 border border-[#1E1E3F] text-[#6B6B8E] hover:text-white hover:border-[#C9FF00] transition-colors backdrop-blur-md cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title="Toggle Auto 3D Turntable"
            >
              <RotateCw size={14} className={isRotating ? "animate-spin" : ""} style={{ animationDuration: "6s" }} />
              <span className="hidden sm:inline">{isRotating ? "3D Active" : "Paused"}</span>
            </button>

          </motion.div>

        </div>

        {/* ================= BOTTOM INTERACTIVE BAR & COLOR CUSTOMIZER ================= */}
        <div className="relative z-30 max-w-7xl mx-auto w-full pt-4 border-t border-[#1E1E3F]/80 flex flex-wrap items-center justify-between gap-4">
          
          {/* 1. Interactive 3D Paint Finish Switcher */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B8E] hidden sm:inline">
              Bespoke Livery:
            </span>
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0E0E1F]/90 border border-[#1E1E3F] backdrop-blur-md">
              {colorVariants.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c)}
                  className={`w-7 h-7 rounded-lg transition-all flex items-center justify-center cursor-pointer ${
                    selectedColor.id === c.id
                      ? "scale-110 shadow-[0_0_12px_rgba(255,255,255,0.4)] ring-2 ring-white"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={{ background: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* 2. Real-time Specs Readout */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[#6B6B8E]">0-60:</span>
              <strong className="text-white font-bold">{selectedColor.accel}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#6B6B8E]">OUTPUT:</span>
              <strong style={{ color: selectedColor.hex }}>{selectedColor.power}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#6B6B8E]">PRICE:</span>
              <strong className="text-white font-bold">{selectedColor.price}</strong>
            </div>
          </div>

          {/* 3. Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/inventory"
              className="px-6 py-2.5 text-[#06060E] font-display font-black text-xs uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(201,255,0,0.25)] flex items-center gap-1.5 cursor-pointer"
              style={{ background: selectedColor.hex }}
            >
              <span>Inventory</span>
              <ArrowRight size={13} />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-[#0E0E1F] border border-[#1E1E3F] text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:border-white transition-colors cursor-pointer"
            >
              Test Drive
            </button>
          </div>

        </div>

      </section>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName={`Porsche 911 GT3 RS (${selectedColor.name})`}
      />
    </>
  );
}