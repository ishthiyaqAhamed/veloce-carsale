"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Coins, Globe } from "lucide-react";
import TestDriveModal from "./TestDriveModal";
import { useCurrency, CURRENCIES, CurrencyCode } from "../context/CurrencyContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-slate-900 leading-none">
                HANSAGIRI<span className="text-lime-600">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-bold -mt-0.5">
                Auto Traders · Beruwala
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
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
              href="/gallery" 
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Gallery
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

          {/* Action button & Currency Converter */}
          <div className="hidden lg:flex items-center gap-4">
            
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

            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-slate-900 text-white hover:bg-lime-500 hover:text-slate-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Inquire Now
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile quick currency select */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="px-2.5 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-900"
            >
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                <option key={code} value={code}>
                  {CURRENCIES[code].flag} {code}
                </option>
              ))}
            </select>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-800 border border-slate-200 rounded-lg"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

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
              href="/gallery" 
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-slate-900 hover:text-[#84CC16]"
            >
              Gallery
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

            {/* Currency selector inside mobile menu */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">Display Currency</span>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setCurrency(code);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center justify-between border ${
                      currency === code
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    <span>{CURRENCIES[code].flag} {code}</span>
                    <span className="text-[10px] opacity-70">{CURRENCIES[code].symbol}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full py-3 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg text-center mt-2"
            >
              Inquire Now
            </button>
          </div>
        )}
      </header>

      <TestDriveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}