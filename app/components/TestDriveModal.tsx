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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-lime-100 text-lime-600 border border-lime-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-slate-900 mb-2">
                  Request Received
                </h3>
                <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900">{form.name}</strong>. Our team will contact you shortly to confirm your appointment for the <strong className="text-lime-700">{carName}</strong>.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-lime-500 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-display font-black text-2xl uppercase text-slate-900 mb-1">
                  Schedule an Appointment
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Target: <span className="text-lime-700 font-semibold">{carName}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-slate-700 uppercase mb-1 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 uppercase mb-1 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-700 uppercase mb-1 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 uppercase mb-1 font-semibold">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 uppercase mb-1 font-semibold">
                      Vehicle Notes or Trade-In Details (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Current car make, model, year, mileage..."
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-lime-500 hover:bg-lime-600 text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md mt-2 cursor-pointer"
                  >
                    Submit Request
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
