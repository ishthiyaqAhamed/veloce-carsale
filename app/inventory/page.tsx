import FeaturedVehicles from "../components/FeaturedVehicles";
import Footer from "../components/Footer";

export const metadata = {
  title: "Vehicle Inventory | Hansagiri Auto Traders Beruwala",
  description: "Browse high-quality new and pre-owned vehicles at Hansagiri Auto Traders in Beruwala.",
};

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-20">
      <div className="bg-white py-14 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              Showroom Selection
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-slate-900 mb-3">
            Available Inventory
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            All vehicles in our showroom are multi-point certified, pre-inspected, and available for immediate test drives and nationwide delivery.
          </p>
        </div>
      </div>

      <FeaturedVehicles />
      <Footer />
    </main>
  );
}
