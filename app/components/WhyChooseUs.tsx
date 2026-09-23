import { ShieldCheck, Truck, Clock } from "lucide-react";

const perks = [
  {
    icon: ShieldCheck,
    title: "150-Point Inspection",
    color: "#C9FF00",
    description:
      "Every vehicle undergoes an exhaustive mechanical and cosmetic inspection by factory-trained technicians.",
  },
  {
    icon: Clock,
    title: "Flexible Financing",
    color: "#00E5FF",
    description:
      "Competitive financing and customized lease packages tailored to your preferences with quick approvals.",
  },
  {
    icon: Truck,
    title: "Enclosed Nationwide Delivery",
    color: "#FF1F6E",
    description:
      "Direct, fully insured enclosed vehicle transport right to your doorstep anywhere in the country.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-[#0E0E1F]/60 border-y border-[#1E1E3F]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] block mb-2">
            The Veloce Difference
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
            Why Buy With Us
          </h2>
          <p className="text-sm text-[#6B6B8E] mt-3 leading-relaxed">
            We provide a transparent, hassle-free buying experience for high-performance and luxury vehicles.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#0E0E1F] border border-[#1E1E3F] flex flex-col items-start shadow-md"
              >
                <div
                  className="p-3.5 rounded-xl bg-[#141428] border border-[#1E1E3F] mb-6"
                  style={{ color: perk.color }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-black text-xl text-white uppercase mb-3">
                  {perk.title}
                </h3>
                <p className="text-sm text-[#6B6B8E] leading-relaxed">
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
