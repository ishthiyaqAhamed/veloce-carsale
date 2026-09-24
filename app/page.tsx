import HeroSection from "./components/HeroSection";
import FeaturedVehicles from "./components/FeaturedVehicles";
import TradeInValuation from "./components/TradeInValuation";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <HeroSection />
      <FeaturedVehicles />
      <TradeInValuation />
      <WhyChooseUs />
      <CtaBanner />
      <Footer />
    </main>
  );
}