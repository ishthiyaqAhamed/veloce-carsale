import Footer from "../components/Footer";
import { ShieldCheck, Award, Users, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | VELOCE Luxury Dealership",
  description: "Learn more about VELOCE and our passion for fine luxury automobiles.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#06060E] text-white pt-20">
      
      {/* Header */}
      <div className="bg-[#0E0E1F]/50 py-16 px-6 border-b border-[#1E1E3F]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] block mb-2">
            Our Story
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-white mb-4">
            About VELOCE
          </h1>
          <p className="text-base text-[#6B6B8E] max-w-2xl leading-relaxed">
            Founded with a passion for automotive excellence, VELOCE connects discerning enthusiasts with the world&apos;s finest luxury and sports automobiles.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F]">
            <div className="p-3 w-fit rounded-xl bg-[#141428] text-[#C9FF00] mb-6">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-white mb-3">
              Certified Quality
            </h3>
            <p className="text-sm text-[#6B6B8E] leading-relaxed">
              Every vehicle undergoes a thorough multipoint mechanical, structural, and cosmetic inspection before entering our inventory.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F]">
            <div className="p-3 w-fit rounded-xl bg-[#141428] text-[#00E5FF] mb-6">
              <Award size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-white mb-3">
              Transparent Pricing
            </h3>
            <p className="text-sm text-[#6B6B8E] leading-relaxed">
              We believe in upfront, straightforward pricing with no hidden dealer fees, straightforward trade-ins, and flexible financing.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F]">
            <div className="p-3 w-fit rounded-xl bg-[#141428] text-[#FF1F6E] mb-6">
              <Users size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-white mb-3">
              Personalized Service
            </h3>
            <p className="text-sm text-[#6B6B8E] leading-relaxed">
              Our dedicated automotive specialists assist you throughout the entire selection, financing, and delivery process.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
