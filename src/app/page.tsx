import HeroSection from "@/components/landing/hero-section";
import AboutSection from "@/components/landing/about-section";
import HeartfeltPlanning from "@/components/landing/heartfelt-planning";
import ServicesSection from "@/components/landing/services-section";

import Faq from "@/components/landing/Faq";
import ImagesGallery from "@/components/landing/ImagesGallery";
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
  heartfeltPlanningData: [
    {
      icon: "/images/Invitation.png",
      title: "اجرای بی‌نقص",
      description:
        "هر مراسم با دقت، نظم و هماهنگی کامل برگزار می‌شود تا تجربه‌ای فراموش‌نشدنی رقم بخورد.",
    },
    {
      icon: "/images/Heart-Love-Romance-Wedding.png",
      title: "تیم مورد اعتماد",
      description:
        "تیمی حرفه‌ای و باتجربه در کنار شماست تا با آرامش خاطر جشن‌تان را برگزار کنید.",
    },
    {
      icon: "/images/ring.png",
      title: "تجربه سفارشی",
      description:
        "تمام جزئیات مراسم براساس سلیقه و رویاهای شما طراحی می‌شود تا خاص‌ترین روزتان خلق شود.",
    },
    {
      icon: "/images/Heand-Love-Heart.png",
      title: "لمس خلاقانه",
      description:
        "با طراحی‌های منحصربه‌فرد و ایده‌های نو، هر بخش از جشن شما جلوه‌ای خاص می‌یابد.",
    },
  ],
};

export default function Home() {
  return (
    <div
      className="flex flex-col gap-10 bg-[var(--page-background)] overflow-hidden pt-20 px-5 md:px-10 container mx-auto"
    >
      <HeroSection />
      <AboutSection data={config.aboutSliderData} />
      <HeartfeltPlanning data={config.heartfeltPlanningData} />
      <ServicesSection />
      {/* <WeddingPackage />
      <TimelessMoments />
      <Faq />
      <ImagesGallery /> */}
    </div>
  );
}
