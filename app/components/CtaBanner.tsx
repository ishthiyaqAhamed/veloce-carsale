"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TestDriveModal from "./TestDriveModal";

export default function CtaBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F] p-8 sm:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9FF00] block mb-2">
              Ready to Upgrade?
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight mb-3">
              Looking for a Specific Model?
            </h2>
            <p className="text-sm text-[#6B6B8E] leading-relaxed">
              If you don&apos;t see the exact specification you are searching for, our vehicle procurement team can source it directly for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-white transition-colors cursor-pointer"
            >
              Contact Sales
            </button>
            <Link
              href="/inventory"
              className="px-6 py-3.5 bg-[#141428] border border-[#1E1E3F] text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:text-[#C9FF00] hover:border-[#C9FF00] transition-colors"
            >
              Browse All Cars
            </Link>
          </div>

        </div>
      </section>

      <TestDriveModal isOpen={modalOpen} onClose={() => setModalOpen(false)} carName="Vehicle Sourcing Inquiry" />
    </>
  );
}
