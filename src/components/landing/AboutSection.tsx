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
    <div className="p-10 flex flex-col justify-center items-center about-section-container max-md:p-5">
      <div
        className="py-12 flex flex-col gap-2.5 text-center items-center pb-10"
        ref={fadeUpEl}
      >
        <div className="flex items-center gap-2.5 w-full">
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

        <b className="text-4xl py-5 max-sm:text-lg">درباره بارثاوا</b>
        <b className="text-lg text-[#575757] max-w-[70%] max-md:max-w-[90%] max-sm:text-sm">
          ما معتقدیم که هر داستان عاشقانه‌ای سزاوار جشنی به زیبایی و منحصر به فرد بودن زوج پشت آن است.
        </b>
        <span className="text-sm text-[#575757] max-w-[50%] max-md:max-w-[70%] max-sm:text-xs">
          با اشتیاق به ظرافت بی‌انتها و برنامه‌ریزی متفکرانه تأسیس شد
        </span>
      </div>
      <AboutSectionSlider />
    </div>
  );
};

export default AboutSection;
