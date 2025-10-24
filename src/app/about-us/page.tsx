"use client";

import AboutHeroSection from "@/components/about-us/AboutHero";
import AboutIntroVideo from "@/components/about-us/AboutIntroVideo";
import IntroductionVideosSlider from "@/components/about-us/IntroductionVideosSlider";
import dynamic from "next/dynamic";


const AboutSection = dynamic(() => import("@/components/landing/AboutSection"));

const HeartfeltPlanning = dynamic(
  () => import("@/components/landing/HeartfeltPlanning")
);

const TimelessMoments = dynamic(
  () => import("@/components/landing/TimelessMoments")
);

const Faq = dynamic(() => import("@/components/landing/Faq"));

const AboutUs = () => {
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] flex flex-col w-full overflow-hidden">
      <AboutHeroSection />
      <AboutSection />
      <AboutIntroVideo />
      <HeartfeltPlanning />
      <TimelessMoments />
      <Faq />
      <div className="px-5 md:px-10 pt-5 pb-15  flex flex-col gap-10 w-full h-auto">
        <b className="text-lg  md:text-2xl m-auto text-center">ویدیو های معرفی تالار مجلل بارثاوا</b>
        <IntroductionVideosSlider />
      </div>
    </div>
  );
};

export default AboutUs;
