import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import BigFiveSection from "@/components/BigFiveSection";
import DemoSection from "@/components/DemoSection";
import TrustSignals from "@/components/TrustSignals";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <BigFiveSection />
      <DemoSection />
      <TrustSignals />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
