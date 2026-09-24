import Image from "next/image";
import Footer from "../components/Footer";
import { ShieldCheck, Award, Users, Star, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

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
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
            <div className="max-w-3xl">
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
            </div>

            <div className="shrink-0">
              <div className="relative h-28 w-60 sm:h-36 sm:w-72 bg-slate-950 rounded-2xl p-4 flex items-center justify-center border border-slate-800 shadow-xl overflow-hidden">
                <Image
                  src="/hansagiri-logo.png"
                  alt="Hansagiri Auto Traders Official Gold Logo"
                  width={260}
                  height={100}
                  className="object-contain max-h-full w-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Quick Business Highlights */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 pt-6 border-t border-slate-100">
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

      {/* Showroom Dual Gallery Feature */}
      <section className="pt-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Daytime Showroom View */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
            <div className="relative h-[320px] sm:h-[420px] w-full">
              <Image
                src="/hansagiri-showroom.jpg"
                alt="Hansagiri Auto Traders Showroom Beruwala Daytime View"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-mono font-bold uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#C9FF00]" />
                <span>Showroom & Vehicle Yard</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white drop-shadow-md">
                Beruwala Showroom Fleet
              </h3>
              <p className="text-xs text-slate-300 font-mono mt-1">
                586 Galle Road, Beruwala · Extensive New & Pre-Owned Stock
              </p>
            </div>
          </div>

          {/* Night Grand Opening View */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
            <div className="relative h-[320px] sm:h-[420px] w-full">
              <Image
                src="/hansagiri-showroom-night.png"
                alt="Hansagiri Auto Traders Grand Opening Night View"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-300/40 text-xs font-mono font-bold text-amber-300 uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Grand Opening Showcase</span>
              </div>
              <p className="text-xs text-slate-300 font-mono mt-1">
                State-of-the-art facility featuring luxury and performance vehicles
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Pillars */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
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

        {/* Location & Showroom Map Section */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Location Info (5 cols) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 border border-lime-200 mb-3">
                <MapPin size={13} className="text-lime-600" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-800 font-bold">
                  Visit Our Showroom
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-slate-900 mb-4 tracking-tight">
                Showroom Location & Directions
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Conveniently situated on Galle Road in Beruwala with dedicated customer parking and full showroom facilities.
              </p>

              <div className="space-y-4 text-xs font-mono text-slate-700 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <MapPin size={18} className="text-lime-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm font-sans font-bold">Address</strong>
                    <span>586 Galle Rd, Beruwala 61010</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Phone size={18} className="text-lime-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm font-sans font-bold">Direct Phone</strong>
                    <a href="tel:0777778298" className="hover:text-lime-700 font-bold">077 777 8298</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Clock size={18} className="text-lime-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm font-sans font-bold">Opening Hours</strong>
                    <span>Daily: 8:00 AM – 8:00 PM (Open · Closes 8 PM)</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/search?q=hansagiri+auto+traders+beruwala"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-lime-500 hover:text-slate-950 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                <MapPin size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Embedded Interactive Map (7 cols) */}
            <div className="lg:col-span-7 h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100">
              <iframe
                title="Hansagiri Auto Traders Location Map"
                src="https://maps.google.com/maps?q=Hansagiri+Auto+Traders,+586+Galle+Rd,+Beruwala+61010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
