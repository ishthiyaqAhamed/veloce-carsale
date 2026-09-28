import FeaturedVehicles from "../components/FeaturedVehicles";
import Footer from "../components/Footer";
import { Sparkles, Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Vehicle Inventory | Hansagiri Auto Traders Beruwala",
  description: "Browse high-quality new and pre-owned vehicles at Hansagiri Auto Traders in Beruwala.",
};

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-18 sm:pt-20">
      
      {/* Header Banner */}
      <div className="bg-white py-8 sm:py-14 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase text-slate-500 font-bold mb-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              <span>Live Showroom Inventory · 586 Galle Rd, Beruwala</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase text-slate-900 mb-2 leading-tight">
              Available Fleet
            </h1>
            <p className="text-xs sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Certified Japanese and European luxury, performance, and family vehicles ready for immediate delivery.
            </p>
          </div>

          {/* Quick Help Box for Mobile / Desktop */}
          <div className="flex items-center gap-2.5 shrink-0 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200">
            <a
              href="https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20am%20looking%20for%20a%20vehicle%20in%20your%20inventory."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Inquiry</span>
            </a>
            <a
              href="tel:0777778298"
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Phone size={14} className="text-lime-400" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      <FeaturedVehicles showBodyTypeFilter={true} />
      <Footer />
    </main>
  );
}
