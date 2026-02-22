import Navbar from "@/components/Navbar";
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
      <Navbar />
      <HeroSection />
      <div className="h-24 bg-gradient-to-b from-transparent to-background" />
      <HowItWorks />
      <div className="h-24 bg-gradient-to-b from-background via-background to-background" />
      <FeaturesGrid />
      <div className="h-24 bg-gradient-to-b from-background to-background" />
      <BigFiveSection />
      <div className="h-24 bg-gradient-to-b from-background to-background" />
      <DemoSection />
      <div className="h-24 bg-gradient-to-b from-background to-background" />
      <TrustSignals />
      <div className="h-24 bg-gradient-to-b from-background to-background" />
      <FAQSection />
      <div className="h-24 bg-gradient-to-b from-background to-background" />
      <FooterSection />
    </div>
  );
};

export default Index;
