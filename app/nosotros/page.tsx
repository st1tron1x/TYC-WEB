import AboutHero from "@/components/about/AboutHero";
import AboutCompany from "@/components/about/AboutCompany";
import AboutStats from "@/components/about/AboutStats";
import AboutLocations from "@/components/about/AboutLocations";
import MissionVision from "@/components/about/MissionVision";
import CorporateValues from "@/components/about/CorporateValues";
import AboutCTA from "@/components/about/AboutCTA";

export default function NosotrosPage() {
  return (
    <main className="bg-[#071120] text-white">
      

      <AboutHero />
      <AboutCompany />
      <AboutStats />
      <AboutLocations />
      <MissionVision />
      <CorporateValues />
      <AboutCTA />

      
    </main>
  );
}