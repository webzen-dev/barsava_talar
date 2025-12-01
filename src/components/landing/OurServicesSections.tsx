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
        title: "مدیریت کامل مراسم",
        caption:
          "هماهنگی تمام مراحل برگزاری از شروع تا پایان، با نظارت دقیق تیم تشریفات مجموعه.",
      },
      {
        score: 4.9,
        reviews: 1500,
        title: "پذیرایی مجلل و حرفه‌ای",
        caption:
          "ارائه منوی کامل غذا و نوشیدنی با کیفیت عالی و سرویس‌دهی همزمان و منظم.",
      },
      {
        score: 4.9,
        reviews: 1500,
        title: "طراحی فضا و دکوراسیون",
        caption:
          "چیدمان اختصاصی سالن و باغ با گل‌آرایی، نورپردازی و فضاسازی لوکس و چشم‌نواز.",
      },
    ],
  },
  {
    image: "/images/DSC07655.jpg",
    description: [
      {
        score: 4.6,
        reviews: 1100,
        title: "برگزاری جشن‌های مناسبتی",
        caption:
          "پشتیبانی کامل برای تولد، سالگرد، و مهمانی‌های خانوادگی با فضایی زیبا و منظم.",
      },
      {
        score: 4.8,
        reviews: 1000,
        title: "سرویس غذا و نوشیدنی",
        caption:
          "آشپزخانه اختصاصی و سرویس حرفه‌ای همراه با منوی متنوع و انتخابی.",
      },
      {
        score: 4.7,
        reviews: 950,
        title: "تزئینات و نورپردازی تخصصی",
        caption:
          "آماده‌سازی فضایی شاد و جذاب با نورپردازی پویا و دکور مناسب جشن شما.",
      },
    ],
  },
];
const lastData = [
  {
    images: ["/images/hero-image.webp", "/images/DSC07687.jpg"],
    description: [
      {
        score: 4.9,
        reviews: 1500,
        title: "مراسم عروسی تشریفاتی",
        caption:
          "طراحی و اجرای مراسم عروسی با چیدمان اختصاصی، تشریفات کامل و مدیریت لحظه‌به‌لحظه.",
      },
      {
        score: 4.8,
        reviews: 1200,
        title: "پذیرایی و سرویس مهمانان",
        caption:
          "ارائه خدمات پذیرایی سطح‌بالا، سرویس حرفه‌ای و مدیریت دقیق میزبانان و مهمانان.",
      },
      {
        score: 5.0,
        reviews: 2000,
        title: "فضاسازی و دکور اختصاصی",
        caption:
          "گل‌آرایی، نورپردازی و طراحی فضا برای خلق محیطی زیبا، منظم و کاملاً هم‌سطح با مراسم لوکس.",
      },
      {
        score: 4.7,
        reviews: 900,
        title: "موزیک و اجرای جشن",
        caption:
          "هماهنگی تیم موسیقی، دی‌جی و اجرای زنده برای ایجاد فضایی پرنشاط و به‌یادماندنی.",
      },
      {
        score: 4.8,
        reviews: 1100,
        title: "تشریفات پذیرش و مهمان‌داری",
        caption:
          "مدیریت ورودی، راهنمایی مهمانان و هماهنگی کامل در طول مراسم برای تجربه‌ای بدون دغدغه.",
      },
    ],
  },
  {
    images: ["/images/DSC07791.jpg", "/images/DSC07634.jpg"],
    description: [
      {
        score: 4.9,
        reviews: 1280,
        title: "اجرای مراسم فرمالیته",
        caption:
          "طراحی و آماده‌سازی کامل روز فرمالیته با دکوراسیون لوکس، برنامه‌ریزی دقیق و فضاسازی رویایی.",
      },
      {
        score: 4.8,
        reviews: 1200,
        title: "اجرای موسیقی و سرگرمی",
        caption:
          "هماهنگی اجرای زنده و برنامه‌های سرگرمی برای ایجاد فضایی متفاوت و پرانرژی.",
      },
      {
        score: 4.7,
        reviews: 900,
        title: "برگزاری ایونت‌ها و مهمانی‌ها",
        caption:
          "برنامه‌ریزی و اجرای مهمانی‌ها، گردهمایی‌ها و جشن‌های خصوصی با استانداردهای تشریفاتی بالا.",
      },
      {
        score: 4.9,
        reviews: 1280,
        title: "برگزاری مراسم فرمالیته",
        caption:
          "فضاسازی ویژه، چیدمان اختصاصی و مدیریت کامل برای ساختن روزی خاص و متفاوت.",
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
        <b className="text-sm md:text-base md:max-w-2/5">
ارائه خدمات تخصصی برای برگزاری عروسی‌ها و جشن‌های به‌یادماندنی، با برنامه‌ریزی دقیق و اجرای هماهنگ. همچنین امکان میزبانی ایونت‌ها و سمینار با همان کیفیت و نظم همیشگی در تالار مجلل بارثاوا.        </b>
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
