"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
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
          // markers: true,
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
    <div className="p-10 flex flex-col items-center w-full gap-15 max-sm:p-5 max-sm:overflow-hidden">
      <div className="flex flex-col gap-2.5 text-center w-full items-center">
        <div
          ref={(el) => {
            if (el) headerEls.current[0] = el;
          }}
          className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]"
        >
          {/* line */}
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          <Image
            className="object-cover"
            draggable="false"
            src={
              "/images/flower.svg"
            }
            alt="flower"
            width={60}
            height={60}
          />

          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        </div>
        <div
          ref={(el) => {
            if (el) headerEls.current[1] = el;
          }}
          className="text-4xl pb-2.5 font-bold max-sm:text-lg"
        >
          لحظات بی‌زمان
        </div>

        <div
          ref={(el) => {
            if (el) headerEls.current[2] = el;
          }}
          className="text-sm  text-[#575757] w-[70%] max-md:w-[90%] font-bold"
        >
          به جشن‌های فراموش‌نشدنی که ما ترتیب داده‌ایم قدم بگذارید - هر عکس
          داستانی را روایت می‌کند
        </div>
      </div>
      <div className="flex justify-between  items-end w-full relative group max-sm:flex-col max-sm:items-center max-sm:h-auto  ">
        <div className="timelessImage1 h-[330px] w-[300px] rounded-2xl rotate-[9deg] relative z-20 2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[250px] max-md:w-[150px] max-md:h-[150px] max-sm:w-[100%] max-sm:h-[400px]">
          <Image
            src={
              "/images/romantic-married-couple-celebrating-beach-wedding-2024-10-19-01-56-07-utc_11zon.jpg"
            }
            className="object-cover rounded-2xl grayscale shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0 max-sm:grayscale-0  "
            fill
            alt=""
          />
        </div>
        <div className="absolute w-[50%] h-full flex justify-center  items-start pt-7.5 2xl:justify-end 2xl:pl-[200px] 2xl:pt-5 max-lg:pr-[100px] max-md:pr-0  max-sm:relative max-sm:w-full max-sm:p-0">
          <div className="timelessImage1 h-[330px] w-[300px] rounded-2xl rotate-[5deg] z-20  2xl:w-[370px]  2xl:h-[380px]  max-lg:w-[300px] max-lg:h-[270px] max-md:w-[150px] max-md:h-[150px]  max-sm:w-[100%] max-sm:h-[400px] max-sm:rotate-[9deg]  ">
            <Image
              src={
                "/images/cheerful-redhead-groom-swinging-with-bride-in-whit-2024-11-08-12-52-10-utc_11zon.jpg"
              }
              className="object-cover rounded-2xl  grayscale shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0"
              fill
              alt=""
            />
          </div>
        </div>
        <div
          ref={(el) => {
            if (el) headerEls.current[3] = el;
          }}
          className="h-[375px] w-[375px] bg-[#423A2F]  rounded-2xl relative z-30 2xl:w-[440px] 2xl:h-[425px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[200px]  max-md:h-[200px] max-sm:w-[100%] max-sm:h-[400px] max-sm:rotate-[9deg]"
        >
          <Image
            src={
              "/images/newlyweds-walking-in-amazing-blossoming-flowers-fi-2024-09-16-08-59-12-utc_11zon.jpg"
            }
            className="object-cover rounded-2xl shadow-2xl  grayscale-0 group-hover:grayscale hover:grayscale-0  transition-all delay-150 duration-300 ease-in-out"
            fill
            alt=""
          />
        </div>
        <div className="absolute w-[50%] h-full flex justify-center items-start pt-7.5 left-0  2xl:justify-start 2xl:pr-[200px] 2xl:pt-5  max-lg:pl-[100px] max-md:pl-0 max-sm:relative max-sm:w-full max-sm:p-0 ">
          <div className=" timelessImage2 h-[330px] w-[300px] rounded-2xl rotate-[-5deg] z-20 2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[270px]  max-md:w-[150px] max-md:h-[150px]  max-sm:w-[100%] max-sm:h-[400px] max-sm:rotate-[9deg] ">
            <Image
              src={
                "/images/couple-just-married-together-on-the-majestic-agri-2025-03-18-20-58-56-utc_11zon.jpg"
              }
              className="object-cover rounded-2xl  grayscale shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0"
              fill
              alt=""
            />
          </div>
        </div>{" "}
        <div className="timelessImage2 h-[330px] w-[300px] rounded-2xl rotate-[-9deg] 2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[250px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[100%] max-sm:h-[400px] max-sm:rotate-[9deg] ">
          <Image
            src={
              "/images/a-couple-in-love-a-guy-and-a-girl-on-a-walk-in-the-2025-01-08-22-32-48-utc-e1747808112273.jpg "
            }
            className="object-cover rounded-2xl  grayscale shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0 max-sm:grayscale-0"
            fill
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TimelessMoments;
