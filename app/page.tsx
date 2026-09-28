import HeroSection from "./components/HeroSection";
import MobileHero from "./components/MobileHero";
import MobileVehicleScroller from "./components/MobileVehicleScroller";
import MobileTradeInWidget from "./components/MobileTradeInWidget";
import MobileMomentsPreview from "./components/MobileMomentsPreview";
import BrandShowcase from "./components/BrandShowcase";
import FeaturedVehicles from "./components/FeaturedVehicles";
import TradeInValuation from "./components/TradeInValuation";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      
      {/* Desktop Hero Layout (>= md) */}
      <div className="hidden md:block">
        <HeroSection />
      </div>

      {/* Dedicated Mobile App-First Hero Layout (< md) */}
      <div className="block md:hidden pt-18">
        <MobileHero />
        <MobileVehicleScroller title="Hot Showroom Picks" />
      </div>

      {/* Verified Fleet Grid */}
      <FeaturedVehicles />

      {/* Desktop Trade-In Section (>= md) */}
      <div className="hidden md:block">
        <TradeInValuation />
      </div>

      {/* Mobile Interactive Trade-In Estimator (< md) */}
      <div className="block md:hidden">
        <MobileTradeInWidget />
        <MobileMomentsPreview />
      </div>

      {/* Manufacturer Brand Showcase */}
      <BrandShowcase />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Sourcing Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </main>
  );
}