import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-3xl font-black tracking-widest text-slate-900 block mb-3">
              VELOCE<span className="text-lime-600">.</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed mb-6 font-normal">
              Premier dealership specializing in reliable family SUVs, sedans, trucks, electric vehicles, and certified pre-owned automobiles.
            </p>
            <div className="space-y-2.5 text-xs text-slate-600 font-mono">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-lime-600" />
                <span>468 N Rodeo Drive, Beverly Hills, CA 90210</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-lime-600" />
                <span>(800) 555-0199</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-lime-600" />
                <span>sales@velocecars.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base uppercase text-slate-900 mb-4">
              Explore Showroom
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/inventory" className="hover:text-lime-600 transition-colors">
                  All Inventory
                </Link>
              </li>
              <li>
                <Link href="/#trade-in" className="hover:text-lime-600 transition-colors">
                  Vehicle Trade-In
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-lime-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lime-600 transition-colors">
                  Contact Us
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
                <span>Mon - Fri:</span>
                <span className="text-slate-900 font-bold">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>Saturday:</span>
                <span className="text-slate-900 font-bold">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-lime-600 font-bold">By Appointment</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VELOCE Motors. All rights reserved.</p>
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
