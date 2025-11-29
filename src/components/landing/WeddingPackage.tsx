"use client";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const WeddingPackage = () => {
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wedding-package-container",
          start: "top 100%",
        },
      });

      tl.from(".wedding-package-title", {
        y: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });
      if (boxesRef.current.length) {
        gsap.from(boxesRef.current, {
          opacity: 0,
          y: 60,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boxesRef.current[0],
            start: "top 80%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className=" wedding-package-container p-10 flex flex-col items-center w-full gap-15 max-md:p-5">
      <div className="flex flex-col gap-2.5 text-center w-full items-center">
        <div className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]">
          {/* line */}
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          <Image
            className="object-cover"
            draggable="false"
            src={"/images/flower.svg"}
            alt="flower"
            width={60}
            height={60}
          />

          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        </div>
        <b className="wedding-package-title text-4xl pb-2.5 max-md:text-lg">
          پکیج عروسی
        </b>

        <b className="wedding-package-title text-sm  text-[#575757] max-w-[70%] max-md:max-w-[90%] max-md:text-xs">
          پکیج‌های عروسی منتخب که متناسب با سبک، نیازها و بودجه شما طراحی
          شده‌اند را بررسی کنید تا جشنی داشته باشید که واقعاً حس و حال شما را
          داشته باشد
        </b>
      </div>
      {/* package Box */}
      <div className="flex justify-between items-center gap-5  h-[300px] w-full max-lg:h-auto max-lg:flex-wrap">
        <div
          ref={(el) => {
            if (el) boxesRef.current[0] = el;
          }}
          className="h-full border-1 border-solid border-[#423A2F] w-1/4  rounded-2xl flex flex-col justify-between p-10     gap-5 cursor-pointer max-lg:w-[calc(40%-20px)] max-lg:min-w-[calc(40%-20px)] max-lg:h-[300px] max-md:w-full max-md:h-[300px]  max-sm:h-auto max-md:p-5"
        >
          <Image
            src={"/images/Flowers-Bouquet.png"}
            height={60}
            width={60}
            alt="box icon"
            className="object-cover"
          />
          {/* title */}
          <b className="text-3xl text-[#423a3f] flex-1 flex items-center max-md:text-lg">
            سابقه درخشان تالار بارثاوا
          </b>
          {/* caption */}
          <div className="text-[#423a2f] text-sm max-md:text-xs">
            با ۲۵ سال سابقه برگزاری مراسم، در کنار شما هستیم.
          </div>
        </div>
        <div
          ref={(el) => {
            if (el) boxesRef.current[1] = el;
          }}
          className="h-full flex-1 rounded-2xl flex items-end p-5 gap-5 cursor-pointer relative group max-lg:w-[60%] max-lg:min-w-[60%] max-lg:h-[300px] max-md:w-full  max-md:min-h-[300px]  max-sm:h-auto max-md:p-2"
        >
                  <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

          <Image
            src={"/images/DSC07656.jpg"}
            fill
            alt="image"
            className="object-cover rounded-2xl absolute top-0 left-0 right-0 bottom-0 z-20"
          />

          <div className="
      flex flex-col justify-between w-full h-[70%] 
      bg-[#f7f1ea] rounded-2xl relative z-20 p-10
      translate-y-10 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100
      transition-all duration-500 ease-out
      max-md:opacity-100 max-md:translate-y-0 max-md:p-5"
          >
            <Image
              src={"/images/signature-50.png"}
              height={60}
              width={60}
              alt="box icon"
              className="object-cover"
            />
            <b className="text-3xl text-[#423a3f] flex-1 flex items-center  max-md:text-lg">
              بسته ویژه
            </b>
            <div className="text-[#423a2f] text-sm max-md:text-xs">
              یک تجربه کامل برنامه‌ریزی از ابتدا تا انتها. شامل انتخاب محل
              برگزاری، مدیریت فروشندگان، طراحی مفهومی و هماهنگی کامل روز عروسی.
            </div>
          </div>
        </div>

        <div
          ref={(el) => {
            if (el) boxesRef.current[2] = el;
          }}
          className="h-full border-1 border-solid border-[#423A2F] w-1/4  rounded-2xl flex flex-col justify-between p-10     gap-5 cursor-pointer max-lg:w-[100%] max-lg:h-[300px] max-sm:h-auto max-md:p-5 "
        >
          <Image
            src={"/images/Group-2.png"}
            height={60}
            width={60}
            alt="box icon"
            className="object-cover"
          />

          {/* title */}
          <b className="text-3xl text-[#423a3f] flex-1 flex items-center max-md:text-lg">
            فضای منحصر به فرد
          </b>
          {/* caption */}
          <div className="text-[#423a2f] text-sm max-md:text-xs">
            مجموعه با ظرفیت ۵۰۰ نفر، دارای سالن‌های مرتفع و بدون ستون است.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPackage;
