import { ShieldCheck, Truck, Clock } from "lucide-react";

const perks = [
  {
    icon: ShieldCheck,
    title: "150-Point Certified Inspection",
    color: "#84CC16", // Lime
    description:
      "Every vehicle undergoes an exhaustive mechanical, electrical, and structural inspection by certified technicians before being listed.",
  },
  {
    icon: Clock,
    title: "Fast & Flexible Financing",
    color: "#0284C7", // Cyan
    description:
      "Competitive financing rates and tailored loan packages with rapid online approvals for all credit profiles.",
  },
  {
    icon: Truck,
    title: "Nationwide Doorstep Delivery",
    color: "#E11D48", // Pink
    description:
      "Direct, fully insured vehicle transport delivered right to your home or office anywhere across the country.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold block mb-2">
            The Hansagiri Advantage
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase text-slate-900 tracking-tight">
            Why Buy With Hansagiri
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
            Dedicated to providing the best vehicle deals, honest pricing, and highly dependable customer service in Beruwala and nationwide.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col items-start shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <div
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-6"
                  style={{ color: perk.color }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-black text-2xl text-slate-900 uppercase mb-3">
                  {perk.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
