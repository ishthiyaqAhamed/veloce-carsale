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
    <section className="py-14 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Subtle Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-700 font-bold">
              Trusted Automotive Makes
            </span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-slate-900 tracking-tight">
            Brands In Our Showroom
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
            Certified Japanese and European manufacturers imported with genuine auction verification.
          </p>
        </div>

        {/* Brand Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-5 items-center justify-center">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="h-20 sm:h-22 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 hover:bg-white p-3 flex items-center justify-center transition-all duration-300 group shadow-2xs"
            >
              <div className="relative w-full h-10 flex items-center justify-center grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  width={140}
                  height={70}
                  className="max-h-9 sm:max-h-10 w-full max-w-[100px] object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
