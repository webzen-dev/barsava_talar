import HeroSection from "@/components/landing/hero-section";

import AboutSection from "@/components/landing/about-section";
import Faq from "@/components/landing/Faq";
import HeartfeltPlanning from "@/components/landing/HeartfeltPlanning";
import ImagesGallery from "@/components/landing/ImagesGallery";
import OurServicesSections from "@/components/landing/OurServicesSections";
import TimelessMoments from "@/components/landing/TimelessMoments";
import WeddingPackage from "@/components/landing/WeddingPackage";

export default function Home() {
  return (
    <div className="bg-[#F7F1EA] overflow-hidden pt-20 px-5 md:px-10 container mx-auto" dir="rtl">
      {/* <HeroSection /> */}
      <AboutSection />
      {/* <HeartfeltPlanning />
      <OurServicesSections />
      <WeddingPackage />
      <TimelessMoments />
      <Faq />
      <ImagesGallery /> */}
    </div>
  );
}
