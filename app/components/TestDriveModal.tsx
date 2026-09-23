"use client";

import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName?: string;
}

export default function TestDriveModal({
  isOpen,
  onClose,
  carName = "Luxury Vehicle",
}: TestDriveModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#06060E]/85 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-[#0E0E1F] border border-[#1E1E3F] rounded-2xl p-6 sm:p-8 z-10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 text-[#6B6B8E] hover:text-white rounded-lg transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-[#C9FF00]/10 text-[#C9FF00] border border-[#C9FF00]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-white mb-2">
                  Request Received
                </h3>
                <p className="text-sm text-[#6B6B8E] mb-6">
                  Thank you, <strong className="text-white">{form.name}</strong>. Our team will contact you shortly to confirm your appointment for the <strong className="text-[#C9FF00]">{carName}</strong>.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-display font-black text-2xl uppercase text-white mb-1">
                  Schedule a Test Drive
                </h3>
                <p className="text-xs text-[#6B6B8E] mb-6">
                  Vehicle: <span className="text-[#C9FF00] font-semibold">{carName}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#6B6B8E] uppercase mb-1 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#6B6B8E] uppercase mb-1 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#6B6B8E] uppercase mb-1 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-2.5 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#6B6B8E] uppercase mb-1 font-medium">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C9FF00] text-[#06060E] font-display font-black text-xs uppercase tracking-wider rounded-lg hover:bg-white transition-colors mt-2 cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            )}
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
