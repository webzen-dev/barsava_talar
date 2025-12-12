import HeroSection from "@/components/landing/_hero-section";
import AboutSection from "@/components/landing/_about-section";
import HeartfeltPlanning from "@/components/landing/_heartfelt-planning";
import ServicesSection from "@/components/landing/services-section";
import WeddingPackage from "@/components/landing/_wedding-package-section";
import FaqsSection from "@/components/landing/faq-section";
import TimelessMoments from "@/components/landing/timeless-moments-section";

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
  servicesItems: [
    {
      id: 1,
      title: "طراحی و دکوراسیون اختصاصی",
      caption:
        "فضاسازی مطابق با سلیقه و تم مراسم شما، از گل‌آرایی تا نورپردازی حرفه‌ای.",
      src: "/images/services/flower.png",
    },
    {
      id: 2,
      title: "پذیرایی مجلل",
      caption:
        "منوی متنوع از غذاها و دسرهای باکیفیت که با بهترین مواد اولیه آماده می‌شوند.",
      src: "/images/services/room.png",
    },
    {
      id: 3,
      title: "تیم حرفه‌ای تشریفات",
      caption:
        "پرسنل آموزش‌دیده با نظم، احترام و دقت در خدمت شما و میهمانانتان خواهند بود.",
      src: "/images/services/management.png",
    },
    {
      id: 4,
      title: "امکانات صوتی و تصویری پیشرفته",
      caption:
        "سیستم‌های نور و صدای حرفه‌ای برای اجرای زنده، موزیک و لحظات خاص مراسم.",
      src: "/images/services/music.png",
    },
    {
      id: 5,
      title: "خدمات مشاوره و برنامه‌ریزی",
      caption:
        "همراهی قدم‌به‌قدم از شروع تا پایان برای طراحی مراسمی بی‌نقص و متناسب با خواسته‌های شما.",
      src: "/images/services/calendar.png",
    },
    {
      id: 6,
      title: "فضاهای لوکس عکاسی",
      caption: "محیط‌هایی شیک و چشم‌نواز برای ثبت زیباترین لحظات زندگی شما.",
      src: "/images/services/camera.png",
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-30 bg-[var(--page-background)] overflow-hidden pt-20">
      <div className="container mx-auto flex flex-col gap-30 px-5 md:px-10 ">
        <HeroSection />
        <AboutSection data={config.aboutSliderData} />
        <HeartfeltPlanning data={config.heartfeltPlanningData} />
      </div>

      <ServicesSection items={config.servicesItems} />

      <div className="container mx-auto flex flex-col gap-30 px-5 md:px-10">
        <WeddingPackage />
        <TimelessMoments />
        <FaqsSection />
      </div>
    </div>
  );
}
