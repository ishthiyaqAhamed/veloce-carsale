"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Coins, User, Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import TestDriveModal from "./TestDriveModal";
import { useCurrency, CURRENCIES, CurrencyCode } from "../context/CurrencyContext";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currencyModalOpen, setCurrencyModalOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const { currency, setCurrency, activeCurrencyConfig } = useCurrency();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCurrencyDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCurrency = (code: CurrencyCode) => {
    setCurrency(code);
    setCurrencyDropdownOpen(false);
    setCurrencyModalOpen(false);
  };

  // Hide Navbar on Admin Portal routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative h-9 w-26 sm:h-12 sm:w-36 flex items-center justify-center transition-transform group-hover:scale-102">
              <Image
                src="/hansagiri-logo.png"
                alt="Hansagiri Auto Traders Logo"
                width={180}
                height={65}
                className="w-full h-full object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-xl font-black tracking-wider text-slate-900 leading-none">
                HANSAGIRI<span className="text-lime-600">.</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase text-slate-500 font-bold mt-0.5">
                Beruwala · Showroom
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link 
              href="/" 
              className={`text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-slate-950 font-bold" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/inventory" 
              className={`text-sm font-semibold transition-colors ${
                pathname === "/inventory" ? "text-slate-950 font-bold" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              Inventory
            </Link>
            <Link 
              href="/gallery" 
              className={`text-sm font-semibold transition-colors ${
                pathname === "/gallery" ? "text-slate-950 font-bold" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-semibold transition-colors ${
                pathname === "/about" ? "text-slate-950 font-bold" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-semibold transition-colors ${
                pathname === "/contact" ? "text-slate-950 font-bold" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Action button & Currency Converter & Admin Link */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Currency Converter Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs text-slate-900 flex items-center gap-2 transition-all font-mono font-bold cursor-pointer shadow-2xs"
                aria-label="Currency Converter"
              >
                <span className="text-base leading-none">{activeCurrencyConfig.flag}</span>
                <span className="font-display font-black">{activeCurrencyConfig.code}</span>
                <ChevronDown size={14} className={`text-slate-500 transition-transform duration-200 ${currencyDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5">
                    <Coins size={12} className="text-lime-600" />
                    <span>Select Currency</span>
                  </div>
                  <div className="p-1">
                    {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                      const item = CURRENCIES[code];
                      const isSelected = currency === code;
                      return (
                        <button
                          key={code}
                          onClick={() => handleSelectCurrency(code)}
                          className={`w-full px-3 py-2 text-left rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-lime-50 text-slate-950 font-bold border border-lime-200"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base leading-none">{item.flag}</span>
                            <div>
                              <span className="font-display font-bold block leading-tight">{item.code}</span>
                              <span className="text-[10px] text-slate-500 block">{item.name}</span>
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-slate-400 font-semibold">{item.symbol}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Admin Portal User Icon */}
            <Link
              href="/admin"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-950 transition-all cursor-pointer shadow-2xs flex items-center justify-center group"
              title="Admin Portal"
              aria-label="Admin Portal"
            >
              <User size={16} className="text-slate-700 group-hover:text-slate-950 transition-transform group-hover:scale-110" />
            </Link>

            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-slate-900 text-white hover:bg-lime-500 hover:text-slate-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Inquire Now
            </button>
          </div>

          {/* Mobile Top Header Controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            
            {/* Mobile Currency Pill Button */}
            <button
              onClick={() => setCurrencyModalOpen(true)}
              className="px-2.5 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 flex items-center gap-1.5 active:bg-slate-200"
              aria-label="Change Currency"
            >
              <span className="text-sm">{activeCurrencyConfig.flag}</span>
              <span>{activeCurrencyConfig.code}</span>
            </button>

            {/* Mobile WhatsApp Quick Action */}
            <a
              href="https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-emerald-500 text-white rounded-xl active:scale-95 transition-transform"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-800 border border-slate-200 rounded-xl bg-white active:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Down Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-5 py-5 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
            
            {/* Navigation Links with Icons */}
            <div className="space-y-1">
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  pathname === "/" ? "bg-slate-900 text-white font-bold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>Home</span>
                <span className="text-xs font-mono opacity-70">Showroom</span>
              </Link>

              <Link 
                href="/inventory" 
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  pathname === "/inventory" ? "bg-slate-900 text-white font-bold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>Available Vehicles</span>
                <span className="text-xs font-mono font-bold text-lime-600 bg-lime-50 px-2 py-0.5 rounded-md">Stock</span>
              </Link>

              <Link 
                href="/gallery" 
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  pathname === "/gallery" ? "bg-slate-900 text-white font-bold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>Moments & Handovers</span>
                <span className="text-xs font-mono opacity-70">Deliveries</span>
              </Link>

              <Link 
                href="/about" 
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  pathname === "/about" ? "bg-slate-900 text-white font-bold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>About Hansagiri</span>
                <span className="text-xs font-mono opacity-70">Story</span>
              </Link>

              <Link 
                href="/contact" 
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  pathname === "/contact" ? "bg-slate-900 text-white font-bold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>Contact & Location</span>
                <span className="text-xs font-mono opacity-70">586 Galle Rd</span>
              </Link>
            </div>

            {/* Fast Touch Action Buttons */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href="tel:0777778298"
                className="py-3 px-3 rounded-xl bg-slate-100 text-slate-900 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <Phone size={14} className="text-lime-600" />
                <span>Call Showroom</span>
              </a>

              <a
                href="https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Admin Portal Link */}
            <Link 
              href="/admin" 
              onClick={() => setMenuOpen(false)}
              className="text-xs font-mono font-bold text-slate-600 hover:text-lime-600 uppercase flex items-center gap-2 pt-2 border-t border-slate-100 justify-center"
            >
              <User size={13} />
              <span>Admin Management Portal</span>
            </Link>

            {/* Inquire CTA */}
            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full py-3 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-md active:scale-98 transition-transform mt-1"
            >
              Inquire About a Vehicle
            </button>
          </div>
        )}
      </header>

      {/* Mobile Currency Bottom Sheet */}
      {currencyModalOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-end justify-center animate-in fade-in duration-200"
          onClick={() => setCurrencyModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white rounded-t-3xl p-6 border-t border-slate-200 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[75vh] overflow-y-auto"
          >
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                  Hansagiri Multi-Currency
                </span>
                <h3 className="font-display font-black text-xl text-slate-900 uppercase">
                  Select Currency
                </h3>
              </div>
              <button
                onClick={() => setCurrencyModalOpen(false)}
                className="p-2 rounded-full bg-slate-100 text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                const item = CURRENCIES[code];
                const isSelected = currency === code;
                return (
                  <button
                    key={code}
                    onClick={() => handleSelectCurrency(code)}
                    className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 font-bold shadow-sm"
                        : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.flag}</span>
                      <div>
                        <span className="font-display font-bold text-sm block leading-none">{item.code}</span>
                        <span className="text-[10px] opacity-70 block mt-0.5">{item.name}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs opacity-70">{item.symbol}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <TestDriveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}