import FeaturedVehicles from "../components/FeaturedVehicles";
import Footer from "../components/Footer";

export const metadata = {
  title: "Inventory | VELOCE Luxury Dealership",
  description: "Browse our complete inventory of luxury, sports, and exotic vehicles.",
};

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-[#06060E] text-white pt-20">
      <div className="bg-[#0E0E1F]/50 py-12 px-6 border-b border-[#1E1E3F]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9FF00] block mb-2">
            Showroom Selection
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase text-white mb-2">
            Available Inventory
          </h1>
          <p className="text-sm text-[#6B6B8E] max-w-lg leading-relaxed">
            All vehicles in our showroom are certified, pre-inspected, and available for immediate test drives and nationwide delivery.
          </p>
        </div>
      </div>

      <FeaturedVehicles />
      <Footer />
    </main>
  );
}
