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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#06060E]/90 backdrop-blur-md border-b border-[#1E1E3F]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-3xl font-black tracking-widest text-[#C9FF00]">
              VELOCE
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-white/80 hover:text-[#C9FF00] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/inventory" 
              className="text-sm font-medium text-white/80 hover:text-[#C9FF00] transition-colors"
            >
              Inventory
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-white/80 hover:text-[#C9FF00] transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-white/80 hover:text-[#C9FF00] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+18005550199" 
              className="text-xs text-[#6B6B8E] hover:text-white flex items-center gap-1.5 transition-colors font-mono"
            >
              <Phone size={13} className="text-[#00E5FF]" />
              <span>(800) 555-0199</span>
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-white transition-all cursor-pointer"
            >
              Book Test Drive
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#C9FF00] border border-[#1E1E3F] rounded-lg"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0E0E1F] border-b border-[#1E1E3F] px-6 py-6 flex flex-col gap-4">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-[#C9FF00]"
            >
              Home
            </Link>
            <Link 
              href="/inventory" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-[#C9FF00]"
            >
              Inventory
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-[#C9FF00]"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white hover:text-[#C9FF00]"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full py-3 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg text-center mt-2"
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