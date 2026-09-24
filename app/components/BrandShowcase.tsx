"use client";

import Image from "next/image";

interface BrandItem {
  name: string;
  image: string;
}

const BRANDS: BrandItem[] = [
  { name: "Toyota", image: "/brands/toyota.png" },
  { name: "Nissan", image: "/brands/nissan.png" },
  { name: "Honda", image: "/brands/honda.png" },
  { name: "Suzuki", image: "/brands/suzuki.png" },
  { name: "Mercedes-Benz", image: "/brands/mercedes-benz.png" },
  { name: "BMW", image: "/brands/bmw.png" },
  { name: "Lexus", image: "/brands/lexus.png" },
  { name: "Audi", image: "/brands/audi.png" },
  { name: "Volkswagen", image: "/brands/volkswagen.png" },
  { name: "Ford", image: "/brands/ford.png" },
  { name: "Mitsubishi", image: "/brands/mitsubishi.png" },
  { name: "Mazda", image: "/brands/mazda.png" },
  { name: "Kia", image: "/brands/kia.png" },
  { name: "Foton", image: "/brands/foton.png" },
];

export default function BrandShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-red-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase text-slate-900 tracking-tight">
            Brands In Our Showroom
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-2 max-w-lg mx-auto">
            Certified Japanese and European manufacturers imported with genuine auction verification.
          </p>
        </div>

        {/* Brand Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3.5 sm:gap-4.5 items-center justify-center">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group relative h-26 sm:h-28 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 p-4 flex flex-col items-center justify-center transition-all duration-300 overflow-hidden"
            >
              {/* Card Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-red-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Logo Presentation */}
              <div className="relative w-full h-14 sm:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  width={240}
                  height={120}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[110px] sm:max-w-[125px] object-contain transition-all duration-300"
                  unoptimized
                />
              </div>

              {/* Brand Label Pill */}
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-800 transition-colors duration-200 mt-1 truncate max-w-full">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
