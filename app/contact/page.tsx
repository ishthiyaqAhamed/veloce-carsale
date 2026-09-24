"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-20">
      
      {/* Header */}
      <div className="bg-white py-16 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-slate-900 mb-2">
            Contact Our Team
          </h1>
          <p className="text-base text-slate-600 max-w-lg leading-relaxed font-normal">
            Have questions about a car, test drive booking, financing options, or vehicle trade-in? Reach out to us today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-lime-100 text-lime-600 border border-lime-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-slate-900 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{form.name}</strong>. A member of our sales and appraisal team will get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-lime-500 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display font-black text-2xl uppercase text-slate-900 mb-4">
                  Send a Direct Inquiry
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-1.5 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-1.5 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-1.5 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-1.5 font-semibold">
                      Inquiry Type
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Trade-In Evaluation">Vehicle Trade-In Evaluation</option>
                      <option value="Schedule Test Drive">Schedule Test Drive</option>
                      <option value="Vehicle Sourcing">Vehicle Sourcing Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-700 mb-1.5 font-semibold">
                    Message / Vehicle Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about the vehicle you are interested in or details of your trade-in..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-lime-500 hover:bg-lime-600 text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-6">
                Showroom Location
              </h3>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-lime-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Hansagiri Auto Traders</strong>
                    <span>586 Galle Rd, Beruwala 61010</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-lime-600 shrink-0" />
                  <a href="tel:0777778298" className="hover:text-slate-900 font-bold">077 777 8298</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-lime-600 shrink-0" />
                  <span>Open Daily · Closes 8 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="https://www.google.com/search?q=hansagiri+auto+traders+beruwala"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-block"
                >
                  Get Google Maps Directions →
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold uppercase text-base mb-4">
                <Clock size={18} className="text-lime-600" />
                <span>Showroom Hours</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 font-mono">
                <li className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span>Monday - Saturday:</span>
                  <span className="text-slate-900 font-bold">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span>Sunday:</span>
                  <span className="text-slate-900 font-bold">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Current Status:</span>
                  <span className="text-lime-600 font-bold">Open · Closes 8 PM</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
