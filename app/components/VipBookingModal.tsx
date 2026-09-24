"use client";

import { useState } from "react";
import { X, ShieldCheck, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VipBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleName?: string;
}

export default function VipBookingModal({
  isOpen,
  onClose,
  vehicleName = "Bespoke Hypercar Allocation",
}: VipBookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    experienceType: "Private Vault Viewing & Champagne Reception",
    destination: "Monaco Atelier Vault",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#06060E]/90 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#0E0E1F] border border-[#1E1E3F] rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Top glowing accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-[#00E5FF] via-[#C9FF00] to-[#FF1F6E]" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full border border-[#1E1E3F] text-[#6B6B8E] hover:text-[#C9FF00] hover:border-[#C9FF00] transition-colors bg-[#06060E]/60 z-20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-[#C9FF00]/10 border border-[#C9FF00] flex items-center justify-center mx-auto mb-6 text-[#C9FF00]"
                  >
                    <CheckCircle2 size={42} />
                  </motion.div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 mb-3">
                    VIP Dossier Dispatched
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-3">
                    Allocation Request Confirmed
                  </h3>
                  <p className="font-body text-sm text-[#6B6B8E] max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName || "Esteemed Client"}</span>. Your Private Client Liaison Officer will reach out within 2 hours to confirm security clearance and itinerary for <span className="text-[#C9FF00]">{vehicleName}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3.5 bg-[#C9FF00] text-[#06060E] font-display font-black text-xs uppercase tracking-[0.2em] rounded hover:bg-white transition-all shadow-[0_0_25px_rgba(201,255,0,0.3)]"
                  >
                    Return to Atelier
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#C9FF00]" />
                      <span className="font-body text-xs font-semibold text-[#C9FF00] uppercase tracking-[0.2em]">
                        Private Concierge Desk
                      </span>
                    </div>
                    <h2 className="font-display font-black text-2xl md:text-4xl uppercase text-white tracking-wide">
                      Reserve Private Viewing
                    </h2>
                    <p className="font-body text-xs md:text-sm text-[#6B6B8E] mt-1">
                      Target Vehicle: <span className="text-white font-medium">{vehicleName}</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs uppercase tracking-wider text-[#6B6B8E] mb-1.5">
                          Full Name / Title
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Lord Harrington / Dr. Elena Rostova"
                          className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded text-sm text-white focus:outline-none focus:border-[#C9FF00] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-xs uppercase tracking-wider text-[#6B6B8E] mb-1.5">
                          Private Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@sanctuary.com"
                          className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded text-sm text-white focus:outline-none focus:border-[#C9FF00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs uppercase tracking-wider text-[#6B6B8E] mb-1.5">
                          Direct Telephone / Signal / WhatsApp
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+377 98 00 00 00"
                          className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded text-sm text-white focus:outline-none focus:border-[#C9FF00] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-xs uppercase tracking-wider text-[#6B6B8E] mb-1.5">
                          Preferred Viewing Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded text-sm text-white focus:outline-none focus:border-[#C9FF00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs uppercase tracking-wider text-[#6B6B8E] mb-1.5">
                          Experience Format
                        </label>
                        <select
                          value={formData.experienceType}
                          onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                          className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded text-sm text-white focus:outline-none focus:border-[#C9FF00] transition-colors"
                        >
                          <option value="Private Vault Viewing & Champagne Reception">
                            Private Vault Viewing & Reception
                          </option>
                          <option value="Closed Circuit Track Dynamic Test Drive">
                            Closed Circuit Track Test Session
                          </option>
                          <option value="Enclosed Worldwide Airfreight to Estate">
                            Enclosed Home Delivery & Handover
                          </option>
                          <option value="Virtual 3D Telemetry Inspection & Escrow">
                            Virtual 3D Inspection & Escrow
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-body text-xs uppercase tracking-wider text-[#6B6B8E] mb-1.5">
                          Preferred Atelier Lounge
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded text-sm text-white focus:outline-none focus:border-[#C9FF00] transition-colors"
                        >
                          <option value="Monaco Atelier Vault">Monaco (Avenue Princesse Grace)</option>
                          <option value="London Mayfair Vault">London Mayfair (Berkeley Square)</option>
                          <option value="Dubai DIFC Pavilion">Dubai DIFC (Gate Precinct)</option>
                          <option value="Beverly Hills Atelier">Beverly Hills (Rodeo Drive)</option>
                          <option value="Tokyo Ginza Vault">Tokyo Ginza</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider text-[#6B6B8E] mb-1.5">
                        Special Requests / Security Accreditations
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Helipad coordinate access, nondisclosure agreement request..."
                        className="w-full px-4 py-2.5 bg-[#06060E] border border-[#1E1E3F] rounded text-sm text-white focus:outline-none focus:border-[#C9FF00] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1E1E3F]">
                      <div className="flex items-center gap-2 text-xs text-[#6B6B8E]">
                        <ShieldCheck size={16} className="text-[#C9FF00]" />
                        <span>256-Bit Encrypted Confidential Protocol</span>
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#C9FF00] text-[#06060E] font-display font-black text-xs uppercase tracking-[0.2em] rounded hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(201,255,0,0.25)]"
                      >
                        Submit VIP Request
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
