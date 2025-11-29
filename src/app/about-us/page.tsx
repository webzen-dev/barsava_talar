"use client";

import AboutHeroSection from "@/components/about-us/AboutHero";
import AboutIntroVideo from "@/components/about-us/AboutIntroVideo";
import IntroAboutUs, { IntroAboutUsProps } from "@/components/about-us/intro-about-us";
import IntroductionVideosSlider from "@/components/about-us/IntroductionVideosSlider";
import dynamic from "next/dynamic";

const HeartfeltPlanning = dynamic(
  () => import("@/components/landing/HeartfeltPlanning")
);

const TimelessMoments = dynamic(
  () => import("@/components/landing/TimelessMoments")
);

const Faq = dynamic(() => import("@/components/landing/Faq"));
const introAboutUsData: IntroAboutUsProps[] = [
  {
    direction: "rtl",
    content: {
      title: "تالار مجلل بارثاوا",
      caption: "این باغ تالار با ظرفیت 200 نفر، طراحی لوکس و فضای دلنشین، مناسب برگزاری مراسم شماست.",

      src: "/images/istockphoto-1147779582-612x612.jpg",
      link: { label: "رزور کنید", href: "/reservation" },
    },
  },
  {
    direction: "ltr",
    content: {
      title: "امکانات و خدمات ویژه",
      caption: "نورپردازی حرفه‌ای، سیستم صوتی پیشرفته و فضای عکاسی اختصاصی برای مراسم شما.",

      src: "/images/istockphoto-1147779582-612x612.jpg",
      link: { label: "مشاهده گالری تصاویر", href: "/image-gallery" },
    },
  },
];


const AboutUs = () => {
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] flex flex-col w-full overflow-hidden">
      <AboutHeroSection />

      <div className="flex flex-col gap-10">
        {introAboutUsData.map((item, index) => (
          <IntroAboutUs key={index} direction={item.direction} content={item.content} />
        ))}
      </div>

      {/* <AboutIntroVideo /> */}
      {/* <div className="px-5 md:px-10 pt-5 pb-15  flex flex-col gap-10 w-full h-auto">
        <b className="text-lg  md:text-2xl m-auto text-center">ویدیو های معرفی تالار مجلل بارثاوا</b>
        <IntroductionVideosSlider />
      </div>
      <HeartfeltPlanning />
      <TimelessMoments /> */}
      {/* <Faq /> */}
    </div>
  );
};

export default AboutUs;
