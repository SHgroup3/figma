import Navbar from "../components/navbar";
import HeroSection from "../components/HomeComponents/heroSection";
import TechLogos from "../components/footer";
import RiskSection from "../components/HomeComponents/riskSection";
import SolutionsSection from "../components/HomeComponents/solutionSection";
import EngineersSection from "../components/HomeComponents/enginerSection";
import GuaranteeSection from "../components/HomeComponents/guranteeSection";
import WhyChooseUs from "../components/HomeComponents/chooseSection";
import FoundersSection from "../components/HomeComponents/founderSection";
import CodingLanguagesSection from "../components/HomeComponents/codingSection";
import PastProjects from "../components/HomeComponents/projects";
import ContactSection from "../components/HomeComponents/contactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col items-center pt-16 md:pt-20 lg:pt-12">
        <HeroSection />
        <TechLogos />
        <RiskSection />
        <SolutionsSection />
        <EngineersSection />
        <GuaranteeSection />
        <TechLogos />
        <WhyChooseUs />
        <CodingLanguagesSection />
        <PastProjects />
        <FoundersSection />
        <ContactSection />
      </main>
    </div>
  );
}
