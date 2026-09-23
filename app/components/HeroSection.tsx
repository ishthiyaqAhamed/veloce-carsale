"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Gauge, Zap, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles } from "../lib/dummyData";
import TestDriveModal from "./TestDriveModal";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const currentCar = vehicles[currentIndex];

  const nextCar = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prevCar = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextCar, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#06060E]">
        
        {/* Ambient background glow */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-all duration-700"
          style={{ background: currentIndex % 2 === 0 ? "#C9FF00" : "#00E5FF" }}
        />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left: Text & CTA (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141428] border border-[#1E1E3F] w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C9FF00] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B8E]">
                Exclusive Luxury Dealership
              </span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.95] mb-6">
              Drive The <br />
              <span className="text-[#C9FF00]">Extraordinary</span>
            </h1>

            <p className="text-base text-[#6B6B8E] max-w-md leading-relaxed mb-8">
              Explore our handpicked collection of high-performance sports cars, luxury sedans, and exotic vehicles available for immediate delivery.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/inventory"
                className="px-7 py-3.5 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-white transition-colors flex items-center gap-2"
              >
                <span>View Inventory</span>
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 bg-[#0E0E1F] border border-[#1E1E3F] text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:border-[#C9FF00] hover:text-[#C9FF00] transition-colors cursor-pointer"
              >
                Book Test Drive
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-[#1E1E3F]">
              <div>
                <p className="font-display font-black text-2xl text-white">50+</p>
                <p className="text-xs text-[#6B6B8E] uppercase font-mono">Vehicles Ready</p>
              </div>
              <div className="w-px h-8 bg-[#1E1E3F]" />
              <div>
                <p className="font-display font-black text-2xl text-[#C9FF00]">100%</p>
                <p className="text-xs text-[#6B6B8E] uppercase font-mono">Inspected</p>
              </div>
              <div className="w-px h-8 bg-[#1E1E3F]" />
              <div>
                <p className="font-display font-black text-2xl text-white">5★</p>
                <p className="text-xs text-[#6B6B8E] uppercase font-mono">Client Rating</p>
              </div>
            </div>

          </div>

          {/* Right: Interactive Car Showcase with Smooth Animations (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Main Car Frame */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0E0E1F] border border-[#1E1E3F] shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCar.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentCar.image}
                    alt={currentCar.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060E] via-transparent to-transparent opacity-80" />
                </motion.div>
              </AnimatePresence>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#06060E]/80 border border-[#1E1E3F] text-[#C9FF00] backdrop-blur-sm">
                  {currentCar.badge}
                </span>
              </div>

              {/* Navigation arrows */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={prevCar}
                  className="w-9 h-9 rounded-lg bg-[#06060E]/80 border border-[#1E1E3F] text-white hover:text-[#C9FF00] hover:border-[#C9FF00] flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer"
                  aria-label="Previous Vehicle"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextCar}
                  className="w-9 h-9 rounded-lg bg-[#06060E]/80 border border-[#1E1E3F] text-white hover:text-[#C9FF00] hover:border-[#C9FF00] flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer"
                  aria-label="Next Vehicle"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Bottom Car Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-[#06060E]/85 border border-[#1E1E3F] backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#6B6B8E] font-mono uppercase">{currentCar.brand} · {currentCar.year}</p>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase">{currentCar.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#6B6B8E] uppercase font-mono">Price</p>
                  <p className="font-display font-black text-2xl text-[#C9FF00]">
                    ${currentCar.price.toLocaleString()}
                  </p>
                </div>
              </div>

            </div>

            {/* Dynamic Specs Bar Below Image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3.5 rounded-xl bg-[#0E0E1F] border border-[#1E1E3F] text-center">
                <span className="text-[10px] font-mono text-[#6B6B8E] uppercase block mb-1">0-60 mph</span>
                <span className="font-display font-black text-lg text-white">{currentCar.acceleration}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0E0E1F] border border-[#1E1E3F] text-center">
                <span className="text-[10px] font-mono text-[#6B6B8E] uppercase block mb-1">Horsepower</span>
                <span className="font-display font-black text-lg text-[#C9FF00]">{currentCar.horsepower} HP</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0E0E1F] border border-[#1E1E3F] text-center">
                <span className="text-[10px] font-mono text-[#6B6B8E] uppercase block mb-1">Top Speed</span>
                <span className="font-display font-black text-lg text-white">{currentCar.topSpeed}</span>
              </div>
            </div>

            {/* Thumbnail dots selector */}
            <div className="flex justify-center gap-2 mt-4">
              {vehicles.map((car, idx) => (
                <button
                  key={car.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-8 bg-[#C9FF00]" : "w-3 bg-[#1E1E3F] hover:bg-white/40"
                  }`}
                  aria-label={`Select ${car.name}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        carName={currentCar.name}
      />
    </>
  );
}