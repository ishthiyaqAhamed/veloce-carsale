import Footer from "../components/Footer";
import { ShieldCheck, Award, Users, Star, MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "About Us | Hansagiri Auto Traders Beruwala",
  description: "Learn about Hansagiri Auto Traders, a premier car dealership in Beruwala specializing in high-quality new and pre-owned vehicles with honest pricing.",
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
              About Hansagiri Auto Traders
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-slate-900 mb-4">
            Beruwala&apos;s Trusted Auto Dealership
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed font-normal">
            &ldquo;Hansagiri Auto Traders is a premier auto dealership specializing in high-quality new and pre-owned vehicles. We are dedicated to providing the best vehicle deals, honest pricing, and highly dependable customer service. Whether you are looking to buy a brand-new car or a budget-friendly used vehicle in excellent condition, our expert team is here to put you in the right ride. We guarantee transparency in every transaction. Visit our showroom today and drive with confidence every time.&rdquo;
          </p>

          {/* Quick Business Highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-full border border-amber-200 font-bold">
              <Star size={14} className="text-amber-500" fill="currentColor" />
              <span>5.0 Rating (2 Google Reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 font-semibold">
              <MapPin size={14} className="text-lime-600" />
              <span>586 Galle Rd, Beruwala 61010</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 font-semibold">
              <Phone size={14} className="text-lime-600" />
              <span>077 777 8298</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Pillars */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3.5 w-fit rounded-2xl bg-lime-100 text-lime-700 mb-6">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-3">
              Guaranteed Transparency
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We guarantee absolute transparency in every transaction. From clean vehicle histories to clear documentation, we ensure your buying experience is 100% stress-free.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3.5 w-fit rounded-2xl bg-sky-100 text-sky-700 mb-6">
              <Award size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-3">
              Best Vehicle Deals & Honest Pricing
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Whether you want a brand-new vehicle or a reliable pre-owned car, we provide honest, competitive market prices that maximize your value.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3.5 w-fit rounded-2xl bg-rose-100 text-rose-700 mb-6">
              <Users size={26} />
            </div>
            <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-3">
              Dependable Customer Service
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Our expert automotive staff is dedicated to putting you in the right ride with ongoing post-sale support and vehicle exchange assistance.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
