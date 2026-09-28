"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import TestDriveModal from "./TestDriveModal";

interface Story {
  id: string;
  title: string;
  category: string;
  previewImage: string;
  fullImage: string;
  tagline: string;
  price?: string;
  specs?: string;
  badge?: string;
  linkHref?: string;
}

const STORIES: Story[] = [
  {
    id: "gtr",
    title: "Nissan GT-R",
    category: "Supercar",
    previewImage: "/inventory/nissan-gtr-r35.jpg",
    fullImage: "/inventory/nissan-gtr-r35.jpg",
    tagline: "565 HP Twin-Turbo VR38DETT AWD Flagship. Showroom centerpiece.",
    price: "LKR 85,000,000",
    specs: "0-100: 2.8s · 4,800 km · 2021",
    badge: "🔥 Supercar Flagship",
    linkHref: "/inventory",
  },
  {
    id: "prado",
    title: "Land Cruiser",
    category: "Luxury SUV",
    previewImage: "/inventory/toyota-land-cruiser-250.png",
    fullImage: "/inventory/toyota-land-cruiser-250.png",
    tagline: "All-New 250 Series Prado Turbo Hybrid in Silver. Brand New.",
    price: "LKR 58,000,000",
    specs: "326 HP · Hybrid · 2024",
    badge: "✨ Brand New",
    linkHref: "/inventory",
  },
  {
    id: "vezel",
    title: "Vezel RS",
    category: "Hybrid SUV",
    previewImage: "/inventory/honda-vezel-rs.jpg",
    fullImage: "/inventory/honda-vezel-rs.jpg",
    tagline: "e:HEV Dual-Motor RS Sport in Platinum White Pearl. 26.0 km/L.",
    price: "LKR 19,500,000",
    specs: "26.0 km/L · 3,200 km · 2024",
    badge: "⚡ Eco-Hybrid",
    linkHref: "/inventory",
  },
  {
    id: "raize",
    title: "Raize Aero",
    category: "Compact SUV",
    previewImage: "/inventory/toyota-raize-modellista.jpg",
    fullImage: "/inventory/toyota-raize-modellista.jpg",
    tagline: "Authentic Modellista Aero body kit with blue signature LED lights.",
    price: "LKR 17,200,000",
    specs: "Turbo · 6,800 km · 2023",
    badge: "💎 Modellista",
    linkHref: "/inventory",
  },
  {
    id: "handover",
    title: "Handovers",
    category: "Moments",
    previewImage: "/gallery/official-ribbon-cutting.jpg",
    fullImage: "/gallery/suzuki-every-family-handover.jpg",
    tagline: "Celebrating happy car deliveries with grand ceremonial keys!",
    badge: "🤝 Happy Clients",
    linkHref: "/gallery",
  },
  {
    id: "tradein",
    title: "Trade-In",
    category: "Top Cash",
    previewImage: "/hansagiri-showroom.jpg",
    fullImage: "/hansagiri-showroom-night.png",
    tagline: "Exchange any make or model for guaranteed top valuation equity.",
    badge: "💰 Top Valuation",
    linkHref: "/#trade-in",
  },
];

export default function MobileStories() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const activeStory = activeStoryIndex !== null ? STORIES[activeStoryIndex] : null;

  const nextStory = () => {
    if (activeStoryIndex !== null) {
      if (activeStoryIndex < STORIES.length - 1) {
        setActiveStoryIndex(activeStoryIndex + 1);
      } else {
        setActiveStoryIndex(null);
      }
    }
  };

  const prevStory = () => {
    if (activeStoryIndex !== null && activeStoryIndex > 0) {
      setActiveStoryIndex(activeStoryIndex - 1);
    }
  };

  return (
    <div className="w-full py-2.5 px-4 overflow-x-auto scrollbar-none">
      {/* Stories Rail */}
      <div className="flex items-center gap-3.5 min-w-max">
        {STORIES.map((story, idx) => (
          <button
            key={story.id}
            onClick={() => setActiveStoryIndex(idx)}
            className="flex flex-col items-center gap-1.5 focus:outline-none group cursor-pointer"
          >
            {/* Gradient Ring Wrapper */}
            <div className="w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-lime-500 via-amber-400 to-rose-500 shadow-xs group-active:scale-95 transition-transform">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden relative bg-slate-900">
                <Image
                  src={story.previewImage}
                  alt={story.title}
                  fill
                  className="object-cover object-center"
                  sizes="64px"
                />
              </div>
            </div>

            {/* Label */}
            <span className="text-[11px] font-sans font-semibold text-slate-800 tracking-tight max-w-[68px] truncate text-center leading-tight">
              {story.title}
            </span>
          </button>
        ))}
      </div>

      {/* Full-Screen Mobile Story Viewer */}
      {activeStory && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950 flex flex-col justify-between p-4 animate-in fade-in duration-150"
          onClick={nextStory}
        >
          {/* Top Progress Bars */}
          <div className="relative z-20 flex items-center gap-1.5 pt-2">
            {STORIES.map((_, i) => (
              <div key={i} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    activeStoryIndex !== null && i === activeStoryIndex
                      ? "w-full"
                      : activeStoryIndex !== null && i < activeStoryIndex
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Top Header */}
          <div className="relative z-20 flex items-center justify-between mt-3 text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-white/40 relative">
                <Image
                  src={activeStory.previewImage}
                  alt={activeStory.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-display font-black text-sm uppercase tracking-wide block leading-none">
                  {activeStory.title}
                </span>
                <span className="text-[10px] font-mono text-lime-400 uppercase font-bold">
                  {activeStory.category}
                </span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveStoryIndex(null);
              }}
              className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20"
            >
              <X size={18} />
            </button>
          </div>

          {/* Center Visual */}
          <div className="relative flex-1 my-4 rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
            <Image
              src={activeStory.fullImage}
              alt={activeStory.title}
              fill
              className="object-contain sm:object-cover"
              priority
            />

            {/* Tap Navigation Overlays */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevStory();
              }}
              className="absolute left-0 top-0 bottom-0 w-1/3 z-10 focus:outline-none"
              aria-label="Previous"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStory();
              }}
              className="absolute right-0 top-0 bottom-0 w-2/3 z-10 focus:outline-none"
              aria-label="Next"
            />
          </div>

          {/* Bottom Story Info & Action Deck */}
          <div 
            className="relative z-20 bg-slate-900/90 backdrop-blur-lg border border-white/15 rounded-2xl p-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {activeStory.badge && (
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-lime-400 text-slate-950 font-mono text-[10px] font-bold uppercase mb-2">
                {activeStory.badge}
              </span>
            )}

            <p className="text-sm font-sans font-medium text-slate-100 leading-snug mb-2">
              {activeStory.tagline}
            </p>

            {activeStory.price && (
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-slate-400 font-bold uppercase">Showroom Price</span>
                <span className="text-lime-300 font-display font-black text-base">{activeStory.price}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/94777778298?text=Hello%20Hansagiri%20Auto%20Traders,%20I%20saw%20the%20${encodeURIComponent(activeStory.title)}%20on%20your%20stories%20and%20want%20more%20details.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-emerald-500 text-white rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Inquiry</span>
              </a>

              <Link
                href={activeStory.linkHref || "/inventory"}
                onClick={() => setActiveStoryIndex(null)}
                className="px-4 py-3 bg-white text-slate-950 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1"
              >
                <span>View</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <TestDriveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
