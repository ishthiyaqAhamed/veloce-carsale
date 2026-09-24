import Footer from "../components/Footer";
import { ShieldCheck, Award, Users, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | VELOCE Dealership",
  description: "Learn more about VELOCE and our commitment to transparency, quality vehicles, and fair trades.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-20">
      
      {/* Header */}
      <div className="bg-white py-16 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              Our Story
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-slate-900 mb-4">
            About VELOCE Motors
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Founded with a passion for straightforward car buying and selling, VELOCE connects drivers with quality pre-owned sedans, reliable SUVs, trucks, and luxury automobiles.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3.5 w-fit rounded-2xl bg-lime-100 text-lime-700 mb-6">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-3">
              Certified Multi-Point Quality
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Every Toyota, Honda, Hyundai, and luxury vehicle undergoes a rigorous 150+ point mechanical, safety, and cosmetic inspection before listing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3.5 w-fit rounded-2xl bg-sky-100 text-sky-700 mb-6">
              <Award size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-3">
              Transparent, No-Haggle Pricing
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We believe in clear, upfront pricing with zero hidden documentation fees, straightforward trade-in appraisals, and transparent financing terms.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3.5 w-fit rounded-2xl bg-rose-100 text-rose-700 mb-6">
              <Users size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-3">
              Customer-First Experience
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Our non-commissioned vehicle specialists assist you throughout the entire selection, financing, trade valuation, and nationwide delivery process.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
