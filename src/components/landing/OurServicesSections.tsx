"use client";

import Image from "next/image";
import FirstComponents from "./OurServicesSection/FirstComponents";
import LastComponents from "./OurServicesSection/LastComponents";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const firstdata = [
  {
    image: "/images/DSC04614.jpg",
    description: [
      {
        score: 4.9,
        reviews: 1500,
        title: "برنامه‌ریزی کامل عروسی",
        caption:
          "از انتخاب محل برگزاری تا مراسم بدرقه نهایی، ما تمام جزئیات را از ابتدا تا انتها مدیریت می‌کنیم",
      },
      {
        score: 4.9,
        reviews: 1500,
        title: "هماهنگی پذیرایی",
        caption:
          "تیم ما همه چیز از آشپزخانه اختصاصی تا خدمات نوشیدنی را هماهنگ می‌کند.",
      },
      {
        score: 4.9,
        reviews: 1500,
        title: "دیزاین و دکوراسیون",
        caption:
          "از گل‌آرایی تا نورپردازی، دکوراسیونی رؤیایی برای شما خلق می‌کنیم.",
      },
    ],
  },
  {
    image: "/images/DSC07655.jpg",
    description: [
      {
        score: 4.6,
        reviews: 1100,
        title: "برنامه‌ریزی جشن تولد",
        caption: "تمام جزئیات تولد شما با دقت و خلاقیت برنامه‌ریزی می‌شود.",
      },
      {
        score: 4.8,
        reviews: 1000,
        title: "پذیرایی و سرو غذا",
        caption: "آشپزخانه اختصاصی حرفه‌ای با منوی متنوع و نوشیدنی‌های خوشمزه.",
      },
      {
        score: 4.7,
        reviews: 950,
        title: "تزئینات و نورپردازی",
        caption: "خلق فضایی شاد و رنگارنگ برای جشن شما.",
      },
    ],
  },
];
const lastData = [
  {
    images: ["/images/DSC04795.jpg", "/images/DSC07687.jpg"],
    description: [
      {
        score: 4.9,
        reviews: 1500,
        title: "برنامه‌ریزی کامل عروسی",
        caption:
          "از انتخاب محل برگزاری تا مراسم بدرقه نهایی، ما تمام جزئیات را مدیریت می‌کنیم.",
      },
      {
        score: 4.8,
        reviews: 1120,
        title: "فیلم‌برداری مراسم و فرمالیته",
        caption:
          "لحظه‌های ناب شما را با تیم حرفه‌ای فیلم‌برداری، در زیباترین قاب‌ها ثبت می‌کنیم تا خاطراتتان جاودانه بماند.",
      },
      {
        score: 4.8,
        reviews: 1200,
        title: "هماهنگی پذیرایی",
        caption:
          "از آشپزخانه اختصاصی تا نوشیدنی، همه‌چیز با بالاترین کیفیت ارائه می‌شود.",
      },
      {
        score: 5.0,
        reviews: 2000,
        title: "دیزاین و دکوراسیون",
        caption: "گل‌آرایی، نورپردازی و دکور رؤیایی برای شب خاص شما.",
      },
      {
        score: 4.7,
        reviews: 900,
        title: "موزیک و سرگرمی",
        caption: "بهترین دی‌جی‌ها و گروه‌های موسیقی برای یک شب فراموش‌نشدنی.",
      },
      {
        score: 4.9,
        reviews: 1600,
        title: "عکاسی و فیلم‌برداری",
        caption: "تمام لحظات خاص شما با کیفیت سینمایی ثبت خواهد شد.",
      },
      {
        score: 4.8,
        reviews: 1100,
        title: "مدیریت مهمانان",
        caption:
          "از دعوت‌نامه تا جای‌گذاری مهمانان، همه‌چیز دقیق مدیریت می‌شود.",
      },
    ],
  },
  {
    images: ["/images/DSC07791.jpg", "/images/DSC07634.jpg"],
    description: [
      {
        score: 4.9,
        reviews: 1280,
        title: "برگزاری فرمالیته عروس و داماد",
        caption:
          "تیم ما با فضاسازی رؤیایی، دکوراسیون اختصاصی و برنامه‌ریزی حرفه‌ای، روز فرمالیته شما را به خاطره‌ای ماندگار تبدیل می‌کند.",
      },

      {
        score: 4.8,
        reviews: 1200,
        title: "اجرای کنسرت و موسیقی زنده",
        caption:
          "برگزاری اجراهای موسیقی زنده با گروه‌های حرفه‌ای برای تجربه‌ای هیجان‌انگیز.",
      },
      {
        score: 4.7,
        reviews: 900,
        title: "برگزاری جشن‌ها و مهمانی‌ها",
        caption:
          "طراحی و اجرای جشن‌های خصوصی و دوستانه با تمام جزئیات برنامه‌ریزی شده.",
      },
      {
        score: 4.9,
        reviews: 1280,
        title: "برگزاری فرمالیته عروس و داماد",
        caption:
          "تیم ما با فضاسازی رؤیایی، دکوراسیون اختصاصی و برنامه‌ریزی حرفه‌ای، روز فرمالیته شما را به خاطره‌ای ماندگار تبدیل می‌کند.",
      },
    ],
  },
];
const OurServicesSections = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const headerEls = headerRef?.current.children;
    const ctx = gsap.context(() => {
      gsap.from(headerEls, {
        opacity: 0,
        y: 40,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className=" bg-[#f7f1ea] px-[50px] text-[#423A2F] flex flex-col relative py-20 gap-10 w-full h-auto max-md:px-5">
      <div
        ref={headerRef}
        className="flex flex-col gap-2.5 items-center text-center relative z-20 pb-10"
      >
        <div className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]">
          {/* line */}
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          <Image
            className="object-cover "
            draggable="false"
            src={"/images/flower.svg"}
            alt="flower"
            width={60}
            height={60}
          />

          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        </div>
        <b className="text-4xl font-bold max-sm:text-lg  ">خدمات ما</b>
        <b className="max-sm:text-sm">
          برگزاری مراسمات فراموش‌نشدنی با دقت، خلاقیت و اجرای بی‌نقص در هر زمان.
        </b>
      </div>
      <FirstComponents
        image={firstdata[0].image}
        description={firstdata[0].description}
        dir="flex-row"
      />
      {/* section */}
      <LastComponents
        description={lastData[0].description}
        images={lastData[0].images}
      />{" "}
      <FirstComponents
        image={firstdata[1].image}
        description={firstdata[1].description}
        dir="flex-row-reverse"
      />
      <LastComponents
        description={lastData[1].description}
        images={lastData[1].images}
      />{" "}
    </div>
  );
};

export default OurServicesSections;
