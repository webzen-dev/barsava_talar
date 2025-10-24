"use client";

import AboutSection from "@/components/landing/AboutSection";
import Faq from "@/components/landing/Faq";
import FoodMenu from "@/components/landing/FoodMenu";
import HeartfeltPlanning from "@/components/landing/HeartfeltPlanning";
import HeroSection from "@/components/landing/HeroSection";
import ImagesGallery from "@/components/landing/ImagesGallery";
import OurServicesSections from "@/components/landing/OurServicesSections";
import TimelessMoments from "@/components/landing/TimelessMoments";
import WeddingPackage from "@/components/landing/WeddingPackage";
import Loader from "@/components/loading/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] overflow-hidden" dir="rtl">
      {isLoaded ? (
        <>
        {/* dark pallet 423A2F */}
          <HeroSection />
          <AboutSection />
          <HeartfeltPlanning />
          <OurServicesSections />
          <FoodMenu/>
          <WeddingPackage />
          <TimelessMoments />
          <Faq /> 
          <ImagesGallery />
        </>
      ) : (
        <Loader />
      )}
{/* <FoodMenu/> */}
    </div>
  );
}
