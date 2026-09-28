"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, Image as ImageIcon, RefreshCw, Phone, MessageCircle, MapPin, X } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [contactSheetOpen, setContactSheetOpen] = useState(false);
  const { activeCurrencyConfig } = useCurrency();

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Inventory",
      href: "/inventory",
      icon: Car,
      isActive: pathname === "/inventory",
    },
    {
      label: "Trade-In",
      href: "/#trade-in",
      icon: RefreshCw,
      isActive: false,
    },
    {
      label: "Gallery",
      href: "/gallery",
      icon: ImageIcon,
      isActive: pathname === "/gallery",
    },
  ];

  return (
    <>
      {/* Fixed Mobile Bottom Navigation Bar */}
      <nav 
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-2 py-1.5 safe-area-pb"
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
                  item.isActive
                    ? "text-slate-950 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-transform duration-200 ${
                    item.isActive ? "scale-105 text-slate-950" : "text-slate-500"
                  }`}
                />
                <span className="text-[10px] font-sans mt-1 tracking-tight leading-none">
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Quick Contact Action Button */}
          <button
            onClick={() => setContactSheetOpen(true)}
            className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-slate-700 active:scale-95 transition-all cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-slate-900 text-lime-400 flex items-center justify-center">
              <Phone size={14} />
            </div>
            <span className="text-[10px] font-sans mt-1 font-semibold text-slate-900 tracking-tight leading-none">
              Contact
            </span>
          </button>
        </div>
      </nav>

      {/* Quick Contact Bottom Sheet Modal */}
      {contactSheetOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-end justify-center animate-in fade-in duration-200"
          onClick={() => setContactSheetOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white rounded-t-3xl p-6 border-t border-slate-200 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto"
          >
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                  Hansagiri Auto Traders
                </span>
                <h3 className="font-display font-black text-xl text-slate-900 uppercase">
                  Contact Showroom
                </h3>
              </div>
              <button
                onClick={() => setContactSheetOpen(false)}
                className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 mb-5">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20am%20interested%20in%20inquiring%20about%20a%20vehicle."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="font-display font-black text-sm uppercase block text-emerald-950">
                      WhatsApp Live Chat
                    </span>
                    <span className="text-xs text-emerald-700 font-mono">
                      +94 77 777 8298 · Instant reply
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold uppercase bg-emerald-500 text-white px-2.5 py-1 rounded-lg">
                  Chat
                </span>
              </a>

              {/* Direct Call */}
              <a
                href="tel:0777778298"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="font-display font-black text-sm uppercase block text-white">
                      Call Showroom Desk
                    </span>
                    <span className="text-xs text-slate-300 font-mono">
                      077 777 8298 · 8 AM - 8 PM
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold uppercase bg-lime-400 text-slate-950 px-2.5 py-1 rounded-lg">
                  Call
                </span>
              </a>

              {/* Google Maps Directions */}
              <a
                href="https://www.google.com/search?q=hansagiri+auto+traders+beruwala"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-display font-black text-sm uppercase block text-slate-900">
                      Showroom Directions
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      586 Galle Rd, Beruwala 61010
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold uppercase bg-sky-100 text-sky-700 px-2.5 py-1 rounded-lg">
                  Maps
                </span>
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Status: <strong className="text-lime-600">Open Daily · Closes 8 PM</strong></span>
              <span>Currency: <strong>{activeCurrencyConfig.code}</strong></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
