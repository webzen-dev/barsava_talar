"use client";
import Image from "next/image";
import AboutSectionSlider from "./AboutSectionSlider";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const fadeUpEl = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!fadeUpEl.current) return;

    const ctx = gsap.context(() => {
      gsap.from(fadeUpEl.current, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: fadeUpEl.current,
          start: "top 50%",
        },
        duration: 1.5,
      });
    }, fadeUpEl);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center gap-10 items-center about-section-container px-10 md:px-5">
      <div
        className="flex flex-col gap-2.5 text-center items-center"
        ref={fadeUpEl}
      >
        <div className="flex items-center gap-2.5 w-full max-w-[90%] md:max-w-[40%]">
          {/* line */}
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
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

        <b className="text-lg md:text-2xl ">درباره بارثاوا</b>
        <span className="text-sm md:text-lg text-[#575757] max-w-[90%] md:max-w-[50%] ">
          بارثاوا با تکیه بر تجربه حرفه‌ای در برگزاری جشن‌ها و مراسم‌ رسمی،
          جایگاهی قابل‌اعتماد میان برگزارکنندگان و مهمانان به دست آورده است.
          تمرکز مجموعه بر کیفیت پذیرایی، اجرای دقیق جزئیات و رضایت مهمانان است؛
          ارزش‌هایی که بارثاوا را به انتخابی مطمئن برای عروسی‌ها، جشن‌ها و
          رویدادهای سازمانی تبدیل کرده است{" "}
        </span>
      </div>
      <AboutSectionSlider />
    </div>
  );
};

export default AboutSection;
