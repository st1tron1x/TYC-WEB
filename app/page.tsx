/*import Navbar from "../components/navbar/Navbar";*/
import Hero from "../components/hero/Hero";
import FeaturesBar from "../components/features/FeaturesBar";
import StatsSection from "../components/stats/StatsSection";
import ServicesSection from "../components/services/ServicesSection";
import TechnologySection from "../components/technology/TechnologySection";
/*import Footer from "../components/footer/Footer";*/
import ClientsMarquee from "../components/clients/ClientsMarquee";

export default function Home() {
  return (
    <main className="bg-[#071120]">
      
      <Hero />
      <FeaturesBar />
      <StatsSection />
      <ServicesSection />
      <TechnologySection />
      <ClientsMarquee />
      
    </main>
  );
}