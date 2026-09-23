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
    <main className="min-h-screen bg-[#06060E] text-white pt-20">
      
      {/* Header */}
      <div className="bg-[#0E0E1F]/50 py-16 px-6 border-b border-[#1E1E3F]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9FF00] block mb-2">
            Get in Touch
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase text-white mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-[#6B6B8E] max-w-lg leading-relaxed">
            Have questions about a vehicle in our inventory or want to schedule a private viewing? Reach out to our team today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-[#C9FF00]/10 text-[#C9FF00] border border-[#C9FF00]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-white mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-[#6B6B8E] mb-6">
                  Thank you, <strong className="text-white">{form.name}</strong>. A member of our sales team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-display font-black text-2xl uppercase text-white mb-4">
                  Send a Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-[#6B6B8E] mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-[#6B6B8E] mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-[#6B6B8E] mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-[#6B6B8E] mb-1.5 font-medium">
                      Inquiry Type
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Schedule Test Drive">Schedule Test Drive</option>
                      <option value="Vehicle Sourcing">Vehicle Sourcing Request</option>
                      <option value="Trade-In Evaluation">Trade-In Evaluation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-[#6B6B8E] mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about the vehicle you are interested in..."
                    className="w-full px-4 py-3 bg-[#06060E] border border-[#1E1E3F] rounded-lg text-sm text-white focus:outline-none focus:border-[#C9FF00] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C9FF00] text-[#06060E] font-display font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-white transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F]">
              <h3 className="font-display font-black text-xl uppercase text-white mb-6">
                Showroom Location
              </h3>
              <div className="space-y-4 text-sm text-[#6B6B8E]">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#C9FF00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Beverly Hills Showroom</strong>
                    <span>468 N Rodeo Drive, Beverly Hills, CA 90210</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#00E5FF] shrink-0" />
                  <span>(800) 555-0199</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#FF1F6E] shrink-0" />
                  <span>sales@velocecars.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F]">
              <div className="flex items-center gap-2 text-white font-display font-bold uppercase text-base mb-4">
                <Clock size={18} className="text-[#C9FF00]" />
                <span>Opening Hours</span>
              </div>
              <ul className="space-y-2 text-sm text-[#6B6B8E] font-mono">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-[#C9FF00]">By Appointment</span>
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
