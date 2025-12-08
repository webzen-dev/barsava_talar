import AboutHeroSection from "@/components/about-us/_about-hero-section";

import AboutIntroVideo from "@/components/about-us/_about-intro-video";
import IntroAboutUs, {
  IntroAboutUsProps,
} from "@/components/about-us/_intro-about-us";
import IntroductionVideosSlider from "@/components/about-us/_intro-video-carousel";
import Reviews from "@/components/about-us/_reviews-section";
import FaqsSection from "@/components/landing/faq-section";
import InputComments from "@/components/about-us/_input-comments";
import DescriptionBox from "@/components/about-us/_desciption-box";

const config = {
  introAboutUsData: [
    {
      direction: "rtl",
      content: {
        title: "تالار مجلل بارثاوا",
        caption:
          "این باغ تالار با ظرفیت حداکثر 500 نفر، طراحی لوکس و فضای دلنشین، مناسب برگزاری مراسم شماست.",

        src: "/images/other-images/other-2.webp",
        link: { label: "رزور کنید", href: "/reservation" },
      },
    },
    {
      direction: "ltr",
      content: {
        title: "امکانات و خدمات ویژه",
        caption:
          "نورپردازی حرفه‌ای، سیستم صوتی پیشرفته و فضای عکاسی اختصاصی برای مراسم شما.",

        src: "/images/women/juwqghdf.webp",
        link: { label: "مشاهده گالری تصاویر", href: "/image-gallery" },
      },
    },
  ] as IntroAboutUsProps[],
  comments: [
    {
      id: 1,
      fullName: "محمد رضایی",
      title: "بارثاوا بهترینه!",
      message:
        "جشنمون دقیقا همون vibesی شد که می‌خواستیم. همه چیز تمیز، مینیمال و خیلی شیک ✨🎉",
    },
    {
      id: 2,
      fullName: "الهه مرادی",
      title: "واقعا متفاوت بود!",
      message:
        "تمام جزئیات با وسواس طراحی شده بود. حس کردیم همه چیز داره برای ما اجرا میشه 💐",
    },
    {
      id: 3,
      fullName: "سینا کریمی",
      title: "پیشنهاد می‌کنم!",
      message:
        "مراسم بدون استرس و فوق‌العاده زیبا بود. تیم خیلی حرفه‌ای عمل کردن 😎",
    },
    {
      id: 4,
      fullName: "هانیه نیک‌پور",
      title: "فراتر از انتظار!",
      message: "دکور، موزیک، نظم... همه چیز عالی بود. حس کردیم تو فیلمیم 🎬",
    },
    {
      id: 5,
      fullName: "پارمیس سادات",
      title: "بی‌نقص و آروم!",
      message:
        "از لحظه ورود فهمیدیم همه چیز تحت کنترله. واقعا آرامش‌بخش بود ☁️",
    },
    {
      id: 6,
      fullName: "آرین باقری",
      title: "واقعا حرفه‌ای!",
      message:
        "تیم اجرا انگار دقیقا می‌دونستن چی می‌خوایم. همه چیز دقیق انجام شد 🔥",
    },
    {
      id: 7,
      fullName: "پرنیا احمدی",
      title: "دکور فوق‌العاده!",
      message:
        "چیدمان گل و نورها انقدر قشنگ بود که همه مهمونا داشتن عکس می‌گرفتن 📸",
    },
    {
      id: 8,
      fullName: "یاسین شریفی",
      title: "خاطره‌انگیز!",
      message:
        "یکی از بهترین شب‌های زندگیمون شد. فضای مراسم فوق‌العاده شاعرانه بود 🌙",
    },
  ],
  introVideos: [
    { id: 1, src: "/videos/v3.mp4", poster: "/images/poster1.jpg" },
    {
      id: 2,
      src: "/videos/v2.mp4",
      poster: "/images/504408630_18307698244212975_6137982630799653769_n.jpg",
    },
    {
      id: 3,
      src: "/videos/v1.mp4",
      poster: "/images/505450223_18307463164212975_2637873274641937436_n.jpg",
    },
  ],
  faqsData: [
    {
      id: 1,
      question: "ظرفیت تالار چقدر است؟",
      answer: "مجموعه با ظرفیت حداکثری ۵۰۰ نفر، امکان پذیرایی دارد.",
    },
    {
      id: 2,
      question: "اطلاع از تاریخ برگزاری؟",
      answer:
        "جهت استعلام تاریخ برگزاری مراسم، لطفاً با شماره‌های درج‌شده تماس حاصل فرمایید.",
    },
    {
      id: 3,
      question: "آیا امکان تزئینات دلخواه وجود دارد؟",
      answer:
        "بله، شما می‌توانید نوع دکور، رنگ‌بندی و چینش میزها را مطابق سلیقه خود انتخاب کنید.",
    },
    {
      id: 4,
      question: "آیا برای عکاسی و فیلم‌برداری محدودیت دارید؟",
      answer:
        "خیر، امکان همکاری با گروه عکاسی دلخواه شما وجود دارد و از طرف مجموعه محدودیتی اعمال نمی‌شود.",
    },
    {
      id: 5,
      question: "پارکینگ مجموعه چطور است؟",
      answer:
        "مجموعه دارای پارکینگ اختصاصی با ظرفیت مناسب برای مهمانان شما است.",
    },
  ],
};

export default function AboutUs() {
  return (
    <div className="bg-[var(--page-background)] flex flex-col w-full gap-10 container mx-auto pt-35 px-5 md:px-10 gap-30">
      <AboutHeroSection />
      <DescriptionBox />

      <div className="flex flex-col gap-10">
        {config.introAboutUsData.map((item, index) => (
          <IntroAboutUs
            key={index}
            direction={item.direction}
            content={item.content}
          />
        ))}
      </div>
      <FaqsSection faqs={config.faqsData} />

      <IntroductionVideosSlider data={config.introVideos} />

      <Reviews data={config.comments} />
      <AboutIntroVideo />
      <InputComments />
    </div>
  );
}
