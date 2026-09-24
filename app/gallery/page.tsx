"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Footer from "../components/Footer";

interface GalleryPhoto {
  id: string;
  image: string;
  alt: string;
  category: "all" | "handover" | "opening" | "showroom";
}

const photos: GalleryPhoto[] = [
  {
    id: "aerial-opening",
    image: "/gallery/aerial-showroom-grand-opening.jpg",
    alt: "Aerial Drone Sunset View of Hansagiri Auto Traders Showroom Grand Opening",
    category: "opening",
  },
  {
    id: "entrance-arch",
    image: "/gallery/grand-opening-entrance-arch.jpg",
    alt: "Hansagiri Auto Traders Grand Opening Entrance Arch & Welcome",
    category: "opening",
  },
  {
    id: "ribbon-cutting",
    image: "/gallery/official-ribbon-cutting.jpg",
    alt: "Hansagiri Auto Traders Official Ribbon Cutting Ceremony",
    category: "opening",
  },
  {
    id: "customer-consultation-ceremony",
    image: "/gallery/customer-ceremony-consultation.jpg",
    alt: "Customer Vehicle Walkaround & Inspection at Grand Opening",
    category: "showroom",
  },
  {
    id: "guests-selfie",
    image: "/gallery/guests-dinner-selfie.jpg",
    alt: "Guests and Team Celebration at Grand Opening Reception",
    category: "showroom",
  },
  {
    id: "staff-selfie",
    image: "/gallery/staff-selfie-celebration.jpg",
    alt: "Hansagiri Staff Celebration at Grand Opening",
    category: "showroom",
  },
  {
    id: "ceremony-attendees",
    image: "/gallery/grand-opening-ceremony-attendees.jpg",
    alt: "Formal Grand Opening Ceremony Dignitaries & Audience",
    category: "opening",
  },
  {
    id: "suzuki-every-handover",
    image: "/gallery/suzuki-every-family-handover.jpg",
    alt: "Family Delivery Celebration with Suzuki Every and Grand Key",
    category: "handover",
  },
  {
    id: "honda-vezel-handover",
    image: "/gallery/honda-vezel-rs-handover.jpg",
    alt: "Honda Vezel RS Customer Delivery Key Handover Celebration",
    category: "handover",
  },
  {
    id: "hansagiri-group-toyota",
    image: "/gallery/hansagiri-group-toyota-handover.jpg",
    alt: "Hansagiri Group Customer Delivery Key Handover Plate K26-0743",
    category: "handover",
  },
  {
    id: "nissan-clipper",
    image: "/gallery/nissan-clipper-handover.jpg",
    alt: "Nissan Clipper Vehicle Delivery Key Handover",
    category: "handover",
  },
  {
    id: "family-key-handover",
    image: "/gallery/family-grand-key-handover.jpg",
    alt: "Family Grand Key Handover Celebration",
    category: "handover",
  },
  {
    id: "lady-customer-handover",
    image: "/gallery/lady-customer-key-handover.jpg",
    alt: "Customer Key Handover Celebration Demo Plate K26-0744",
    category: "handover",
  },
  {
    id: "customer-handshake",
    image: "/gallery/customer-handshake-delivery.jpg",
    alt: "Vehicle Delivery Handshake Celebration Demo Plate K26-0746",
    category: "handover",
  },
  {
    id: "customer-handover-1",
    image: "/gallery/customer-key-handover-1.jpg",
    alt: "Hansagiri Auto Traders Customer Delivery Key Handover",
    category: "handover",
  },
  {
    id: "drummer-procession",
    image: "/gallery/grand-cultural-drummer-procession.jpg",
    alt: "Traditional Cultural Drummer Procession on Red Carpet",
    category: "opening",
  },
  {
    id: "directors-showroom",
    image: "/gallery/directors-defender-gtr.jpg",
    alt: "Showroom Showcase with Land Rover Defender and Nissan GT-R",
    category: "showroom",
  },
  {
    id: "vip-garland",
    image: "/gallery/vip-garland-procession.jpg",
    alt: "VIP Guests Garland Welcome with Cultural Marching Band",
    category: "opening",
  },
  {
    id: "staff-lineup",
    image: "/gallery/staff-red-carpet-lineup.jpg",
    alt: "Hansagiri Auto Traders Full Staff Lineup on Red Carpet",
    category: "showroom",
  },
  {
    id: "twin-gtr",
    image: "/gallery/twin-nissan-gtr-showcase.jpg",
    alt: "Twin Nissan GT-R Supercars Showcase in Showroom",
    category: "showroom",
  },
  {
    id: "mini-ribbon",
    image: "/gallery/mini-jcw-ceremonial-ribbon.jpg",
    alt: "MINI Countryman JCW with Grand Opening Ceremonial Ribbon",
    category: "handover",
  },
  {
    id: "grand-key",
    image: "/gallery/grand-key-presentation.jpg",
    alt: "Hansagiri Auto Traders Grand Key Handover Presentation",
    category: "handover",
  },
  {
    id: "opening-night-gala",
    image: "/hansagiri-showroom-night.png",
    alt: "Hansagiri Auto Traders Night Grand Opening Gala with Nissan GT-R",
    category: "opening",
  },
  {
    id: "opening-keynote",
    image: "/gallery/opening-keynote-speech.jpg",
    alt: "Grand Opening Keynote Address & Red Carpet Audience",
    category: "opening",
  },
  {
    id: "cultural-performance",
    image: "/gallery/traditional-cultural-performance.jpg",
    alt: "Traditional Cultural Dance & Drum Performance on Stage",
    category: "opening",
  },
  {
    id: "host-address",
    image: "/gallery/opening-host-address.jpg",
    alt: "Opening Ceremony Official Address at the Podium",
    category: "opening",
  },
  {
    id: "opening-crowd",
    image: "/gallery/grand-opening-crowd.jpg",
    alt: "Grand Opening Ceremony Audience & Showroom Reception",
    category: "opening",
  },
  {
    id: "opening-dignitaries",
    image: "/gallery/grand-opening-dignitaries.jpg",
    alt: "Hansagiri Auto Traders Directors & VIP Dignitaries",
    category: "opening",
  },
  {
    id: "team-celebration",
    image: "/gallery/team-staff-celebration.jpg",
    alt: "Hansagiri Auto Traders Management & Staff Celebration",
    category: "showroom",
  },
  {
    id: "client-consultation",
    image: "/gallery/client-consultation-showroom.jpg",
    alt: "Client Consultation & Vehicle Walkaround",
    category: "showroom",
  },
  {
    id: "showroom-daylight",
    image: "/hansagiri-showroom.jpg",
    alt: "Hansagiri Auto Traders Beruwala Daytime Showroom Fleet",
    category: "showroom",
  },
  {
    id: "gtr-showcase",
    image: "/inventory/nissan-gtr-r35.jpg",
    alt: "Nissan GT-R R35 Flagship at Hansagiri Auto Traders",
    category: "showroom",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "opening", label: "Grand Opening & Ceremony" },
    { id: "handover", label: "Key Handovers & Deliveries" },
    { id: "showroom", label: "Showroom & Fleet" },
  ];

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex(
        (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-20">
      
      {/* Page Header */}
      <section className="bg-white py-12 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              Hansagiri Momentum & Memories
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-slate-900 mb-3 tracking-tight">
            Our Moments
          </h1>
          <p className="text-sm text-slate-500 font-mono">
            Milestones, vehicle handovers, grand opening celebrations, and showroom momentum at Hansagiri Auto Traders Beruwala.
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === f.id
                  ? "bg-slate-900 text-white font-bold shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Pure Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all duration-300 cursor-pointer group"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                priority={index < 6}
              />

              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Full-screen Lightbox Viewer */}
      {currentIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          {/* Previous button */}
          {filteredPhotos.length > 1 && (
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Next button */}
          {filteredPhotos.length > 1 && (
            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Main Lightbox Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] sm:h-[80vh] flex items-center justify-center"
          >
            <Image
              src={filteredPhotos[currentIndex].image}
              alt={filteredPhotos[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Image count indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono">
            {currentIndex + 1} / {filteredPhotos.length}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
