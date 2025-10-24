"use client";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import FoodMenuSlider from "./FoodMenuSlider";

gsap.registerPlugin(ScrollTrigger);
const FoodMenu = () => {
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
    <div className="p-10 flex flex-col justify-center items-center about-section-container max-md:p-5 w-full">
      <div
        className="py-12 flex flex-col gap-2.5 text-center items-center pb-25 w-full"
        ref={fadeUpEl}
      >
           <div className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]">
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

        <b className="text-4xl py-5 max-sm:text-lg">منو های غذایی</b>
        <b className="text-sm  text-[#575757] max-w-[70%] max-md:max-w-[90%] max-md:text-xs">
          منوهای متنوع و خوش‌طعم ما، ترکیبی از بهترین غذاها برای هر سلیقه، تا
          لحظات شیرین مراسم شما با طعمی به‌یادماندنی همراه شود.{" "}
        </b>
      </div>{" "}
      <FoodMenuSlider/>
    </div>
  );
};

export default FoodMenu;
