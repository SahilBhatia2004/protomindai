import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import WhySelfHosted from "@/components/WhySelfHosted";
import UseCasesSection from "@/components/UseCasesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <NavBar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <TechnologiesSection />
        <WhySelfHosted />
        <UseCasesSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
