import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06060E] border-t border-[#1E1E3F] pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1E1E3F]">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-3xl font-black tracking-widest text-[#C9FF00] block mb-3">
              VELOCE
            </Link>
            <p className="text-sm text-[#6B6B8E] max-w-sm leading-relaxed mb-6">
              Premier dealership specializing in certified luxury, exotic, and high-performance vehicles.
            </p>
            <div className="space-y-2 text-xs text-[#6B6B8E] font-mono">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#00E5FF]" />
                <span>468 N Rodeo Drive, Beverly Hills, CA 90210</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#00E5FF]" />
                <span>(800) 555-0199</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#00E5FF]" />
                <span>sales@velocecars.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base uppercase text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B6B8E]">
              <li>
                <Link href="/inventory" className="hover:text-[#C9FF00] transition-colors">
                  All Inventory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C9FF00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9FF00] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-display font-bold text-base uppercase text-white mb-4">
              Showroom Hours
            </h4>
            <ul className="space-y-2 text-xs text-[#6B6B8E] font-mono">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-[#C9FF00]">By Appointment</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B8E]">
          <p>© {new Date().getFullYear()} VELOCE Motors. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/inventory" className="hover:text-white">Inventory</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
