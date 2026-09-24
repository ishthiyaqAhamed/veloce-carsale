import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Star, ExternalLink, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-16 w-48 bg-slate-950 rounded-2xl p-2 flex items-center justify-center border border-slate-800 shadow-sm overflow-hidden">
                <Image
                  src="/hansagiri-logo.png"
                  alt="Hansagiri Auto Traders Logo"
                  width={180}
                  height={60}
                  className="object-contain max-h-full w-auto"
                />
              </div>
            </Link>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-4">
              Hansagiri Auto Traders · Car Dealer in Beruwala
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold mb-4">
              <span className="flex items-center text-amber-500">
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
              </span>
              <span>5.0 (2 Google Reviews)</span>
            </div>

            <p className="text-sm text-slate-600 max-w-lg leading-relaxed mb-6 font-normal">
              Hansagiri Auto Traders is a premier auto dealership specializing in high-quality new and pre-owned vehicles. We are dedicated to providing the best vehicle deals, honest pricing, and highly dependable customer service. Visit our showroom today and drive with confidence every time.
            </p>
            
            <div className="space-y-2.5 text-xs text-slate-600 font-mono">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-lime-600 shrink-0" />
                <span>586 Galle Rd, Beruwala 61010</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-lime-600 shrink-0" />
                <a href="tel:0777778298" className="hover:text-slate-900 font-bold">077 777 8298</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} className="text-lime-600 shrink-0" />
                <span>Open Daily · Closes 8 PM</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base uppercase text-slate-900 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-lime-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="hover:text-lime-600 transition-colors">
                  Vehicles For Sale
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-lime-600 transition-colors">
                  Customer Gallery & Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-lime-600 transition-colors">
                  About Hansagiri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lime-600 transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-display font-bold text-base uppercase text-slate-900 mb-4">
              Showroom Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-mono">
              <li className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>Monday - Saturday:</span>
                <span className="text-slate-900 font-bold">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>Sunday:</span>
                <span className="text-slate-900 font-bold">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Status:</span>
                <span className="text-lime-600 font-bold">Open · Closes 8 PM</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://www.google.com/search?q=hansagiri+auto+traders+beruwala"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-700 hover:text-lime-800 font-bold"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hansagiri Auto Traders. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <Link href="/inventory" className="hover:text-slate-900 transition-colors">Inventory</Link>
            <Link href="/#trade-in" className="hover:text-slate-900 transition-colors">Trade-In</Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
