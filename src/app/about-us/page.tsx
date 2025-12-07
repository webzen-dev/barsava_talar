import Image from "next/image";

import AboutHeroSlider from "@/components/about-us/about-hero-slider";
import AboutIntroVideo from "@/components/about-us/about-intro-video";
import IntroAboutUs, {
  IntroAboutUsProps,
} from "@/components/about-us/intro-about-us";
import IntroductionVideosSlider from "@/components/about-us/intro-video-slider";
import Reviews from "@/components/about-us/reviews";
import Faq from "@/components/landing/faq-section";
import InputComments from "@/components/about-us/input-comments";

const introAboutUsData: IntroAboutUsProps[] = [
  {
    direction: "rtl",
    content: {
      title: "تالار مجلل بارثاوا",
      caption:
        "این باغ تالار با ظرفیت حداکثر 500 نفر، طراحی لوکس و فضای دلنشین، مناسب برگزاری مراسم شماست.",

      src: "/images/DSC04614.jpg",
      link: { label: "رزور کنید", href: "/reservation" },
    },
  },
  {
    direction: "ltr",
    content: {
      title: "امکانات و خدمات ویژه",
      caption:
        "نورپردازی حرفه‌ای، سیستم صوتی پیشرفته و فضای عکاسی اختصاصی برای مراسم شما.",

      src: "/images/DSC07656.jpg",
      link: { label: "مشاهده گالری تصاویر", href: "/image-gallery" },
    },
  },
];

export default function AboutUs() {
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] flex flex-col w-full gap-10 container mx-auto pt-35 pb-10">
      <div className="flex flex-col w-full gap-10  justify-between px-5 md:px-10">
        <div className="flex flex-col gap-2">
          <b className="text-2xl md:text-3xl">تبدیل داستان عشق شما به</b>
          <b className="text-lg md:text-3xl">لحظات ماندگار عروسی</b>
          <div className="flex justify-between gap-10 text-sm  hero-text-box flex-col sm:flex-row md:text-base">
            <b>
              بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
              خوشبختی ابدی خود لذت می‌برید.
            </b>
          </div>
        </div>

        <AboutHeroSlider />
      </div>

      <div className="py-12 flex flex-col md:flex-col-reverse gap-4 md:text-center md:items-center px-4 mx-5 md:mx-10 rounded-sm  border-[rgba(0,0,0,0.2)] border-2 relative">
        <div className="flex flex-col gap-5 text-center items-center">
          <b className="text-xl sm:text-2xl">درباره بارثاوا</b>
          <b className="text-base text-[#575757] sm:text-base">
            بارثاوا با الهام از زیبایی لحظات ناب، تجربه‌ای منحصر به فرد از عشق و
            شادی خلق می‌کند. ما باور داریم که هر جشن باید با ظرافت و جزئیاتی
            ویژه، داستان هر زوج را به یاد ماندنی کند.
          </b>
        </div>
        <Image
          className="object-cover absolute -top-[30px] left-1/2 transform -translate-x-1/2 bg-[#F7F1EA]"
          draggable="false"
          src="/images/flower.svg"
          alt="flower"
          width={60}
          height={60}
        />
      </div>

      <div className="flex flex-col gap-10">
        {introAboutUsData.map((item, index) => (
          <IntroAboutUs
            key={index}
            direction={item.direction}
            content={item.content}
          />
        ))}
      </div>
      <div className="px-5 md:px-10 flex flex-col gap-5 w-full h-auto">
        <b className="text-lg  md:text-2xl m-auto text-center">
          ویدیو های معرفی تالار مجلل بارثاوا
        </b>
        <IntroductionVideosSlider />
      </div>
      <Reviews />
      <AboutIntroVideo />
      <Faq />
      <InputComments />
    </div>
  );
}
