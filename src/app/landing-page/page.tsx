import LandingPageLayout from "@/components/landingPage/LandingPageLayout";
import CleintSection3 from "@/components/landingPage/sections/Clients/CleintSection3";
import ClientSection1 from "@/components/landingPage/sections/Clients/ClientSection1";
import ClientSection2 from "@/components/landingPage/sections/Clients/ClientSection2";
import ContactSection1 from "@/components/landingPage/sections/Contact/ContactSection1";
import ContactSection2 from "@/components/landingPage/sections/Contact/ContactSection2";
import FAQSection1 from "@/components/landingPage/sections/FAQ/FAQSection1";
import FAQSection2 from "@/components/landingPage/sections/FAQ/FAQSection2";
import FeatureSection1 from "@/components/landingPage/sections/Features/FeatureSection1";
import FeatureSection2 from "@/components/landingPage/sections/Features/FeatureSection2";
import GallerySection1 from "@/components/landingPage/sections/Gallery/GallerySection1";
import GallerySection2 from "@/components/landingPage/sections/Gallery/GallerySection2";
import HeroSection from "@/components/landingPage/sections/Hero/HeroSection";
import HeroSection2 from "@/components/landingPage/sections/Hero/HeroSection2";
import HeroSection3 from "@/components/landingPage/sections/Hero/HeroSection3";
import HeroSection4 from "@/components/landingPage/sections/Hero/HeroSection4";
import HeroSection5 from "@/components/landingPage/sections/Hero/HeroSection5";
import HeroWithForm from "@/components/landingPage/sections/Hero/HeroWithForm";
import PricingSection1 from "@/components/landingPage/sections/Pricing/PricingSection1";
import PricingSection2 from "@/components/landingPage/sections/Pricing/PricingSection2";
import TeamSection1 from "@/components/landingPage/sections/Team/TeamSection1";
import TeamSection2 from "@/components/landingPage/sections/Team/TeamSection2";
import TimelineSection1 from "@/components/landingPage/sections/Timeline/TimelineSection1";
import React from "react";

function page() {
  return (
    <LandingPageLayout>
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HeroWithForm />
      <FeatureSection1 />
      <FeatureSection2 />
      <ClientSection1 />
      <ClientSection2 />
      <CleintSection3 />
      <TimelineSection1 />
      <PricingSection1 />
      <PricingSection2 />
      <GallerySection1 />
      <GallerySection2 />
      <FAQSection1 />
      <FAQSection2 />
      <TeamSection1 />
      <TeamSection2 />
      <ContactSection1 />
      <ContactSection2 />
    </LandingPageLayout>
  );
}

export default page;
