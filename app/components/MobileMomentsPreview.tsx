"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, Camera, ShieldCheck, Heart } from "lucide-react";

const MOMENTS = [
  {
    image: "/gallery/suzuki-every-family-handover.jpg",
    title: "Family Delivery Celebration",
    caption: "Suzuki Every Key Handover with Grand Key",
    tag: "Delivery",
  },
  {
    image: "/gallery/honda-vezel-rs-handover.jpg",
    title: "Honda Vezel RS Handover",
    caption: "Platinum White Pearl Handover in Beruwala",
    tag: "Handover",
  },
  {
    image: "/gallery/aerial-showroom-grand-opening.jpg",
    title: "Grand Opening Aerial",
    caption: "Sunset view over 586 Galle Rd showroom",
    tag: "Showroom",
  },
  {
    image: "/gallery/official-ribbon-cutting.jpg",
    title: "Official Ribbon Cutting",
    caption: "Inauguration ceremony with dignitaries",
    tag: "Opening",
  },
  {
    image: "/gallery/mini-jcw-ceremonial-ribbon.jpg",
    title: "MINI JCW Ceremonial Ribbon",
    caption: "Midnight Black JCW Countryman showcase",
    tag: "Spotlight",
  },
];

export default function MobileMomentsPreview() {
  return (
    <div className="md:hidden w-full py-6 px-4 bg-white border-b border-slate-200/80">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
            <Camera size={12} className="text-lime-600" />
            Showroom Moments
          </span>
          <h2 className="font-display font-black text-2xl uppercase text-slate-900 tracking-tight leading-tight">
            Happy Deliveries
          </h2>
        </div>

        <Link
          href="/gallery"
          className="text-xs font-mono font-bold text-slate-700 hover:text-slate-950 flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200"
        >
          <span>View All</span>
          <ArrowRight size={12} />
        </Link>
      </div>

      {/* 5-Star Rating Pill */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-amber-900">5.0 / 5.0</span>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase bg-white px-2 py-0.5 rounded-md border border-amber-200 text-amber-800">
          Verified Reviews
        </span>
      </div>

      {/* Horizontal Swipe Rail */}
      <div className="flex items-stretch gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
        {MOMENTS.map((m, idx) => (
          <Link
            key={idx}
            href="/gallery"
            className="w-[240px] shrink-0 snap-center rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 relative group flex flex-col justify-end aspect-[4/3]"
          >
            <Image
              src={m.image}
              alt={m.title}
              fill
              sizes="240px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

            <div className="relative z-10 p-3 text-white">
              <span className="inline-block px-2 py-0.5 rounded-md bg-lime-400 text-slate-950 font-mono text-[9px] font-bold uppercase mb-1">
                {m.tag}
              </span>
              <h4 className="font-display font-black text-sm uppercase text-white leading-tight line-clamp-1">
                {m.title}
              </h4>
              <p className="text-[10px] text-slate-300 font-mono line-clamp-1">
                {m.caption}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
