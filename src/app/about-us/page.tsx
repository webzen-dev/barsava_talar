"use client";

import AboutHeroSlider from "@/components/about-us/AboutHeroSlider";
import AboutIntroVideo from "@/components/about-us/AboutIntroVideo";
import IntroAboutUs, {
  IntroAboutUsProps,
} from "@/components/about-us/intro-about-us";
import IntroductionVideosSlider from "@/components/about-us/IntroductionVideosSlider";
import Reviews from "@/components/about-us/reviews";
import dynamic from "next/dynamic";
import Image from "next/image";

const TimelessMoments = dynamic(
  () => import("@/components/landing/TimelessMoments")
);

const Faq = dynamic(() => import("@/components/landing/Faq"));

const introAboutUsData: IntroAboutUsProps[] = [
  {
    direction: "rtl",
    content: {
      title: "تالار مجلل بارثاوا",
      caption:
        "این باغ تالار با ظرفیت 200 نفر، طراحی لوکس و فضای دلنشین، مناسب برگزاری مراسم شماست.",

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

const AboutUs = () => {
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] flex flex-col w-full overflow-hidden container mx-auto">
        <div className="pt-[80px] flex flex-col p-10 w-full gap-10 justify-between max-md:p-5 max-md:pt-[80px] px-10">
          <div className="flex flex-col gap-5">
            <b className="text-4xl max-md:text-2xl">تبدیل داستان عشق شما به</b>
            <b className="text-3xl max-md:text-lg">لحظات ماندگار عروسی</b>
            <div className="flex justify-between gap-10 text-base hero-text-box max-sm:flex-col max-sm:text-sm">
              <b>
                بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به
                سوی خوشبختی ابدی خود لذت می‌برید.
              </b>
            </div>
          </div>

          <AboutHeroSlider />
        </div>
        <div className="py-12 flex flex-col md:flex-col-reverse gap-4 md:text-center md:items-center pb-10 max-md:px-5 md:max-w-[70%] mx-auto">
          <div className="flex flex-col gap-2 md:items-center">
            <b className="text-4xl max-sm:text-xl">درباره بارثاوا</b>
            <b className="text-lg text-[#575757] max-w-[70%] max-md:max-w-[90%] max-sm:text-sm">
              بارثاوا با الهام از زیبایی لحظات ناب، تجربه‌ای منحصر به فرد از عشق
              و شادی خلق می‌کند. ما باور داریم که هر جشن باید با ظرافت و جزئیاتی
              ویژه، داستان هر زوج را به یاد ماندنی کند.
            </b>
          </div>
          <div className="flex items-center gap-2.5 w-full">
            <div className="h-[0.5px] bg-[#423A2F] flex-1 max-md:hidden"></div>
            <Image
              className="object-cover"
              draggable="false"
              src="/images/flower.svg"
              alt="flower"
              width={60}
              height={60}
            />
            <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          {introAboutUsData.map((item, index) => (
            <IntroAboutUs
              key={index}
              direction={item.direction}
              content={item.content}
            />
          ))}
        </div>

      <Reviews />
        <div className="px-5 md:px-10 mt-20 pb-15  flex flex-col gap-10 w-full h-auto">
          <b className="text-lg  md:text-2xl m-auto text-center">
            ویدیو های معرفی تالار مجلل بارثاوا
          </b>
          <IntroductionVideosSlider />
        </div>
        <AboutIntroVideo />
        <TimelessMoments />
        <Faq />
    </div>
  );
};

export default AboutUs;
