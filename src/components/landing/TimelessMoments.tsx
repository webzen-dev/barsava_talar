"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import HeaderSections from "../header-sections";
gsap.registerPlugin(ScrollTrigger);
const TimelessMoments = () => {
  const headerEls = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!headerEls?.current.length) return;

    const ctx = gsap.context(() => {
      gsap.from(headerEls.current, {
        y: 60,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: headerEls?.current[0],
          start: "top 90%",
        },
      });
      gsap.from(".timelessImage1", {
        x: 60,
        opacity: 0,
        stagger: 0.5,
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: headerEls?.current[2],
          start: "top 80%",
        },
      });
      gsap.from(".timelessImage2", {
        x: -60,
        opacity: 0,
        stagger: 0.5,
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: headerEls?.current[3],
          start: "top 50%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-10 max-sm:p-5 max-sm:overflow-hidden">
      <div className="flex flex-col items-center w-full text-center gap-2.5">
        <HeaderSections />

        <div
          ref={(el) => {
            if (el) headerEls.current[1] = el;
          }}
          className="pb-2.5 text-lg md:text-2xl font-bold"
        >
          لحظات بی‌زمان
        </div>

        <div
          ref={(el) => {
            if (el) headerEls.current[2] = el;
          }}
          className="text-sm md:text-base font-bold text-black/70 w-9/10 md:w-4/5"
        >
          به جشن‌های فراموش‌نشدنی که ما ترتیب داده‌ایم قدم بگذارید - هر عکس
          داستانی را روایت می‌کند
        </div>
      </div>

      <div className="relative flex items-end justify-between w-full group max-sm:flex-col max-sm:items-center max-sm:h-auto">
        <div className="timelessImage1 relative z-20 h-[330px] w-[300px] rotate-[9deg] rounded-2xl 2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[250px] max-md:w-[150px] max-md:h-[150px] max-sm:h-[400px] max-sm:w-full">
          <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
          <Image
            src="/images/romantic-married-couple-celebrating-beach-wedding-2024-10-19-01-56-07-utc_11zon.jpg"
            alt=""
            fill
            className="z-20 object-cover rounded-2xl grayscale shadow-2xl transition-all duration-300 ease-in-out delay-150 hover:grayscale-0 cursor-pointer max-sm:grayscale-0"
          />
        </div>

        <div className="absolute flex h-full w-[50%] items-start justify-center pt-7.5 2xl:justify-end 2xl:pl-[200px] 2xl:pt-5 max-lg:pr-[100px] max-md:pr-0 max-sm:relative max-sm:w-full max-sm:p-0">
          <div className="timelessImage1 relative z-20 h-[330px] w-[300px] rotate-[5deg] rounded-2xl 2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[270px] max-md:w-[150px] max-md:h-[150px] max-sm:h-[400px] max-sm:w-full max-sm:rotate-[9deg]">
            <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
            <Image
              src="/images/cheerful-redhead-groom-swinging-with-bride-in-whit-2024-11-08-12-52-10-utc_11zon.jpg"
              alt=""
              fill
              className="z-20 object-cover rounded-2xl grayscale shadow-2xl transition-all duration-300 ease-in-out delay-150 hover:grayscale-0 cursor-pointer"
            />
          </div>
        </div>

        <div
          ref={(el) => {
            if (el) headerEls.current[3] = el;
          }}
          className="relative z-30 h-[375px] w-[375px] rounded-2xl bg-[#423A2F] 2xl:w-[440px] 2xl:h-[425px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[200px] max-md:h-[200px] max-sm:h-[400px] max-sm:w-full max-sm:rotate-[9deg]"
        >
          <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
          <Image
            src="/images/newlyweds-walking-in-amazing-blossoming-flowers-fi-2024-09-16-08-59-12-utc_11zon.jpg"
            alt=""
            fill
            className="z-20 object-cover rounded-2xl shadow-2xl grayscale-0 transition-all duration-300 ease-in-out delay-150 group-hover:grayscale hover:grayscale-0"
          />
        </div>

        <div className="absolute left-0 flex h-full w-[50%] items-start justify-center pt-7.5 2xl:justify-start 2xl:pr-[200px] 2xl:pt-5 max-lg:pl-[100px] max-md:pl-0 max-sm:relative max-sm:w-full max-sm:p-0">
          <div className="timelessImage2 relative z-20 h-[330px] w-[300px] rotate-[-5deg] rounded-2xl 2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[270px] max-md:w-[150px] max-md:h-[150px] max-sm:h-[400px] max-sm:w-full max-sm:rotate-[9deg]">
            <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
            <Image
              src="/images/couple-just-married-together-on-the-majestic-agri-2025-03-18-20-58-56-utc_11zon.jpg"
              alt=""
              fill
              className="z-20 object-cover rounded-2xl grayscale shadow-2xl transition-all duration-300 ease-in-out delay-150 hover:grayscale-0 cursor-pointer"
            />
          </div>
        </div>

        <div className="timelessImage2 h-[330px] w-[300px] rotate-[-9deg] rounded-2xl 2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[250px] max-md:w-[150px] max-md:h-[150px] max-sm:h-[400px] max-sm:w-full max-sm:rotate-[9deg]">
          <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
          <Image
            src="/images/a-couple-in-love-a-guy-and-a-girl-on-a-walk-in-the-2025-01-08-22-32-48-utc-e1747808112273.jpg"
            alt=""
            fill
            className="z-20 object-cover rounded-2xl grayscale shadow-2xl transition-all duration-300 ease-in-out delay-150 hover:grayscale-0 cursor-pointer max-sm:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelessMoments;
