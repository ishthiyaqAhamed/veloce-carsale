"use client";

import { useState } from "react";
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  MessageSquarePlus,
  Share2,
  Check
} from "lucide-react";

export default function CustomerReviewsSection() {
  const [copied, setCopied] = useState(false);

  // Official Google Maps review link for Hansagiri Auto Traders
  const googleReviewUrl = "https://www.google.com/maps/search/?api=1&query=Hansagiri+Auto+Traders+586+Galle+Rd+Beruwala";
  const googleDirectWriteUrl = "https://search.google.com/local/writereview?placeid=ChIJHansagiriAutoTradersBeruwala"; // or google maps query

  const handleShareLink = () => {
    navigator.clipboard.writeText(googleReviewUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="my-16" id="reviews">
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-slate-900 tracking-tight">
              Rate & Review on Google
            </h2>
            
            <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal">
              All reviews and ratings are submitted directly through Google Business Profile, ensuring 100% authentic, verified feedback visible worldwide.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold transition-all cursor-pointer"
              title="Copy Google Review Link"
            >
              {copied ? <Check size={14} className="text-lime-600" /> : <Share2 size={14} />}
              <span>{copied ? "Link Copied!" : "Share Link"}</span>
            </button>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              {/* Google G Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
              </svg>
              <span>Write a Review on Google</span>
              <ExternalLink size={13} className="ml-0.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Rating Metrics & Google Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Rating Score Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 mb-3">
              <span className="text-6xl font-display font-black text-slate-900 tracking-tight">
                5.0
              </span>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
                  Google Verified Rating
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 font-normal leading-relaxed mb-6">
              Rated 5.0 stars by customers for transparent dealings, authentic vehicle documentation, and dedicated after-sales support at 586 Galle Road, Beruwala.
            </p>

            <div className="space-y-2 pt-4 border-t border-slate-200/80 text-xs font-mono text-slate-600">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold text-slate-800">
                  <CheckCircle2 size={14} className="text-lime-600" />
                  <span>5 Stars</span>
                </span>
                <div className="flex-1 mx-3 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-full" />
                </div>
                <span className="font-bold text-slate-700">100%</span>
              </div>
            </div>
          </div>

          {/* How Google Reviews Work (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-display font-black text-xl uppercase text-slate-900 mb-3">
                How to Leave Your Review on Google
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Because Google requires user authentication for authentic ratings, your review is posted directly through your Google Account to the official <strong>Hansagiri Auto Traders</strong> Google Maps profile.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-7 h-7 rounded-xl bg-lime-100 text-lime-800 flex items-center justify-center text-xs font-mono font-bold mb-3">
                    1
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Click Button</h4>
                  <p className="text-xs text-slate-500 leading-normal">
                    Click &ldquo;Write a Review on Google&rdquo; to open our official listing.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-xs font-mono font-bold mb-3">
                    2
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Rate Stars</h4>
                  <p className="text-xs text-slate-500 leading-normal">
                    Select your star rating and write your vehicle buying experience.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-mono font-bold mb-3">
                    3
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Live on Google</h4>
                  <p className="text-xs text-slate-500 leading-normal">
                    Your review publishes immediately to Google Search & Google Maps.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Google Action Link Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/10 text-[#4285F4]">
                  <MessageSquarePlus size={22} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase">Share Your Showroom Experience</h4>
                  <p className="text-xs text-slate-300 font-mono">Help others find their dream vehicle in Beruwala</p>
                </div>
              </div>

              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all text-center shrink-0"
              >
                Post Review Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
