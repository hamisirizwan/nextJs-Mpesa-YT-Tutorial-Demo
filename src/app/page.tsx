import LandingPageLayout from "@/components/landingPage/LandingPageLayout";
import HeroSection from "@/components/landingPage/sections/Hero/HeroSection";
import HeroSection2 from "@/components/landingPage/sections/Hero/HeroSection2";
import PricingSection2 from "@/components/landingPage/sections/Pricing/PricingSection2";

export default function Home() {
  return (
    <LandingPageLayout>
      <HeroSection2 />
      <PricingSection2 />
    </LandingPageLayout>
  );
}
