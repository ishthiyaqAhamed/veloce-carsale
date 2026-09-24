"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import TestDriveModal from "./TestDriveModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-3xl font-black tracking-widest text-slate-900">
              VELOCE<span className="text-[#84CC16]">.</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/inventory" 
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Inventory
            </Link>
            <Link 
              href="/#trade-in" 
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Trade-In
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+18005550199" 
              className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors font-mono font-medium"
            >
              <Phone size={13} className="text-slate-700" />
              <span>(800) 555-0199</span>
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-slate-900 text-white hover:bg-black font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-xs"
            >
              Book Test Drive
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-800 border border-slate-200 rounded-lg"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-lg">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-slate-900 hover:text-[#84CC16]"
            >
              Home
            </Link>
            <Link 
              href="/inventory" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-slate-900 hover:text-[#84CC16]"
            >
              Inventory
            </Link>
            <Link 
              href="/#trade-in" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-slate-900 hover:text-[#84CC16]"
            >
              Trade-In
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-slate-900 hover:text-[#84CC16]"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-slate-900 hover:text-[#84CC16]"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full py-3 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg text-center mt-2"
            >
              Book Test Drive
            </button>
          </div>
        )}
      </header>

      <TestDriveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}