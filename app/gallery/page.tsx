"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Calendar, MapPin, Users, Heart, Award, ArrowRight, X, ZoomIn } from "lucide-react";
import Footer from "../components/Footer";

interface GalleryItem {
  id: string;
  title: string;
  category: "customer" | "event" | "delivery" | "function";
  categoryLabel: string;
  image: string;
  date: string;
  location: string;
  caption: string;
  customerName?: string;
  vehicleModel?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "grand-opening-ceremony",
    title: "Grand Opening & Inauguration Gala",
    category: "event",
    categoryLabel: "Showroom Event",
    image: "/hansagiri-showroom-night.png",
    date: "September 05, 2026",
    location: "586 Galle Rd, Beruwala",
    caption: "Official night grand opening celebration of Hansagiri Auto Traders Beruwala featuring our flagship Nissan GT-R R35 and valued community guests.",
    vehicleModel: "Nissan GT-R R35 & Premium Lineup",
  },
  {
    id: "showroom-daylight-reception",
    title: "Daytime Showroom Launch & Vehicle Preview",
    category: "function",
    categoryLabel: "Special Function",
    image: "/hansagiri-showroom.jpg",
    date: "September 05, 2026",
    location: "Beruwala Showroom",
    caption: "Welcoming our first clients to explore our multi-point certified inventory on Galle Road.",
    vehicleModel: "Complete Certified Inventory",
  },
  {
    id: "gtr-flagship-reveal",
    title: "Flagship Supercar Handover & Showcase",
    category: "event",
    categoryLabel: "VIP Event",
    image: "/inventory/nissan-gtr-r35.jpg",
    date: "September 2026",
    location: "Beruwala Showroom",
    caption: "Unveiling the legendary Nissan GT-R R35 Premium Edition with custom titanium performance quad exhausts.",
    customerName: "VIP Client Allocation",
    vehicleModel: "Nissan GT-R R35 Premium Edition",
  },
  {
    id: "lexus-rx500h-delivery",
    title: "Lexus RX500h F SPORT DIRECT4 Handover",
    category: "customer",
    categoryLabel: "Customer Delivery",
    image: "/inventory/lexus-rx500h-fsport.jpg",
    date: "September 2026",
    location: "Beruwala Showroom",
    caption: "Congratulating our client on driving away in the flagship Lexus RX 500h F SPORT Turbo Hybrid with bespoke interior.",
    customerName: "Esteemed Corporate Client",
    vehicleModel: "Lexus RX 500h F SPORT Performance",
  },
  {
    id: "mini-jcw-celebration",
    title: "MINI Countryman JCW Brand New Delivery",
    category: "delivery",
    categoryLabel: "Key Handover",
    image: "/inventory/mini-countryman-jcw.jpg",
    date: "September 2026",
    location: "Hansagiri Auto Traders",
    caption: "Handing over the keys to a stunning Chili Red two-tone 2024 MINI Countryman John Cooper Works ALL4.",
    customerName: "Happy Young Family",
    vehicleModel: "MINI Countryman JCW ALL4",
  },
  {
    id: "jaguar-xe-delivery",
    title: "Jaguar XE R-Sport Executive Handover",
    category: "customer",
    categoryLabel: "Customer Delivery",
    image: "/inventory/jaguar-xe-rsport.jpg",
    date: "September 2026",
    location: "Beruwala Showroom",
    caption: "Delivering the metallic Firenze Red Jaguar XE luxury executive sedan with full registration dossier to our smiling buyer.",
    customerName: "Mr. Fernando & Family",
    vehicleModel: "Jaguar XE R-Sport Luxury Sedan",
  },
  {
    id: "toyota-raize-modellista-handover",
    title: "Toyota Raize Modellista Edition Key Handover",
    category: "delivery",
    categoryLabel: "Key Handover",
    image: "/inventory/toyota-raize-modellista.jpg",
    date: "September 2026",
    location: "Showroom Forecourt",
    caption: "Celebration moment handing over the keys to the all-new Toyota Raize with authentic Modellista blue illumination aero kit.",
    customerName: "Happy Customer Couple",
    vehicleModel: "Toyota Raize Z Modellista",
  },
  {
    id: "honda-vezel-rs-handover",
    title: "New Generation Honda Vezel e:HEV RS Delivery",
    category: "delivery",
    categoryLabel: "Key Handover",
    image: "/inventory/honda-vezel-rs.jpg",
    date: "September 2026",
    location: "Beruwala Showroom",
    caption: "Another happy family driving away in the ultra-efficient 2024 Honda Vezel e:HEV RS Dual-Motor Hybrid.",
    customerName: "Dr. & Mrs. Perera",
    vehicleModel: "Honda Vezel e:HEV RS Sport",
  },
  {
    id: "toyota-pixis-handover",
    title: "Toyota Pixis Epoch Fresh Import Handover",
    category: "customer",
    categoryLabel: "Customer Delivery",
    image: "/inventory/toyota-pixis-epoch.jpg",
    date: "September 2026",
    location: "Beruwala Showroom",
    caption: "Handing over the keys to a fuel-efficient Grade 4.5 Toyota Pixis Epoch Eco-Idle to a proud first-time buyer.",
    customerName: "Mr. Rasool & Family",
    vehicleModel: "Toyota Pixis Epoch Eco-Idle",
  },
  {
    id: "suzuki-every-delivery",
    title: "Suzuki Every High-Roof Commercial Delivery",
    category: "delivery",
    categoryLabel: "Key Handover",
    image: "/inventory/suzuki-every-van.jpg",
    date: "September 2026",
    location: "Hansagiri Auto Traders",
    caption: "Keys handed over for the versatile Suzuki Every High-Roof Wagon in rare Cool Khaki metallic finish.",
    customerName: "Greenline Logistics",
    vehicleModel: "Suzuki Every PC High-Roof",
  },
  {
    id: "land-cruiser-250-showcase",
    title: "Toyota Land Cruiser 250 Prado Arrival & Preview",
    category: "function",
    categoryLabel: "Special Function",
    image: "/inventory/toyota-land-cruiser-250.png",
    date: "September 2026",
    location: "Beruwala Showroom",
    caption: "Showcasing the flagship 2024 Toyota Land Cruiser 250 Prado Hybrid with heritage grille to enthusiastic buyers.",
    vehicleModel: "Toyota Land Cruiser 250 Prado",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: "all", label: "All Moments" },
    { id: "customer", label: "Happy Customers & Handovers" },
    { id: "delivery", label: "Car Selling & Keys" },
    { id: "event", label: "Grand Opening & Events" },
    { id: "function", label: "Showroom Functions" },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-20">
      
      {/* Hero Banner */}
      <section className="bg-white py-14 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              Hansagiri Gallery & Moments
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-slate-900 mb-4 tracking-tight">
            Happy Customers & <span className="text-lime-600">Celebrations</span>
          </h1>

          <p className="text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
            Take a look at real moments from our showroom in Beruwala — including key handover celebrations, grand opening events, VIP deliveries, and proud customers with their dream cars.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
              <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 block">500+</span>
              <span className="text-xs font-mono text-slate-500 font-semibold">Delivered Vehicles</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
              <span className="font-display font-black text-2xl sm:text-3xl text-lime-600 block">5.0 ★</span>
              <span className="text-xs font-mono text-slate-500 font-semibold">Google Customer Rating</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
              <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 block">100%</span>
              <span className="text-xs font-mono text-slate-500 font-semibold">Verified Inspections</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
              <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 block">Daily</span>
              <span className="text-xs font-mono text-slate-500 font-semibold">Deliveries & Test Drives</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white font-bold shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-400 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900/85 text-lime-400 backdrop-blur-sm shadow-xs">
                    {item.categoryLabel}
                  </span>

                  {/* Zoom Indicator */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-lime-600" />
                      {item.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-lime-600" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-900 uppercase group-hover:text-lime-600 transition-colors leading-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-semibold truncate max-w-[200px]">
                    {item.vehicleModel || "Hansagiri Auto Traders"}
                  </span>
                  <span className="text-lime-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-lime-400 text-xs font-mono uppercase font-bold mb-3">
              <Heart size={13} fill="currentColor" />
              <span>Join Our Family of Happy Drivers</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase leading-tight mb-2">
              Ready For Your Dream Car?
            </h2>
            <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
              Visit our Beruwala showroom today to experience premium customer service, transparent vehicle pricing, and effortless key handovers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/inventory"
              className="w-full sm:w-auto px-7 py-3.5 bg-lime-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-lime-400 transition-all text-center"
            >
              Browse Inventory
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-800 border border-slate-700 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-700 transition-all text-center"
            >
              Visit Showroom
            </Link>
          </div>
        </div>

      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
              aria-label="Close Preview"
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-[420px] w-full bg-slate-900">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900/80 text-lime-400 backdrop-blur-sm">
                {selectedImage.categoryLabel}
              </div>
            </div>

            {/* Modal Info */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-2">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-lime-600" />
                  {selectedImage.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-lime-600" />
                  {selectedImage.location}
                </span>
                {selectedImage.customerName && (
                  <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <Users size={14} className="text-lime-600" />
                    {selectedImage.customerName}
                  </span>
                )}
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase mb-3">
                {selectedImage.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {selectedImage.caption}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-700">
                  Vehicle: {selectedImage.vehicleModel || "Hansagiri Auto Traders"}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
