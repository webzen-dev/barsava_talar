import HeroSection from "@/components/landing/hero-section";
import AboutSection from "@/components/landing/about-section";

import Faq from "@/components/landing/Faq";
import HeartfeltPlanning from "@/components/landing/HeartfeltPlanning";
import ImagesGallery from "@/components/landing/ImagesGallery";
import OurServicesSections from "@/components/landing/OurServicesSections";
import TimelessMoments from "@/components/landing/TimelessMoments";
import WeddingPackage from "@/components/landing/WeddingPackage";

const config = {
  aboutSliderData: [
    {
      id: 1,
      title: "مراسم عروسی",
      caption: "لحظه‌ای خاص از حلقه انداختن",
      link: "/image-gallery",
      src: "/images/landing-images/about-slider-1.webp",
    },
    {
      id: 2,
      title: "حلقه‌های ازدواج",
      caption: "نمادی از عشق ابدی",
      link: "/image-gallery",
      src: "/images/landing-images/about-slider-2.webp",
    },
    {
      id: 3,
      title: "عروس و داماد",
      caption: "پرتره نزدیک از یک لحظه عاشقانه",
      link: "/image-gallery",
      src: "/images/landing-images/about-slider-3.webp",
    },
    {
      id: 4,
      title: "سالن پذیرایی",
      caption: "نمایی از دکوراسیون و میزهای جشن",
      link: "/image-gallery",
      src: "/images/landing-images/about-slider-4.webp",
    },
  ],
};

export default function Home() {
  return (
    <div
      className="flex flex-col gap-10 bg-[var(--page-background)] overflow-hidden pt-20 px-5 md:px-10 container mx-auto"
      dir="rtl"
    >
      <HeroSection />
      <AboutSection data={config.aboutSliderData} />
      {/* <HeartfeltPlanning />
      <OurServicesSections />
      <WeddingPackage />
      <TimelessMoments />
      <Faq />
      <ImagesGallery /> */}
    </div>
  );
}
