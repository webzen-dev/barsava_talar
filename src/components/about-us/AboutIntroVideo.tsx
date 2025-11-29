"use client";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
// import { useEffect, useRef } from "react";
// gsap.registerPlugin(ScrollTrigger);
const AboutIntroVideo = () => {
  // const headerFadeUp = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     if (headerFadeUp.current) {
  //       const headerEls = headerFadeUp.current.children;
  //       gsap.from(headerEls, {
  //         opacity: 0,
  //         y: 40,
  //         stagger: 0.3,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: headerFadeUp.current,
  //           start: "top 80%",
  //         },
  //       });
  //     }
  //   });
  //   return () => ctx.revert();
  // }, []);
  return (
    <div className="p-10 flex flex-col items-center w-full max-md:p-5">
      <div className="flex flex-col items-center w-full">
      {/* <div ref={headerFadeUp} className="flex flex-col items-center w-full"> */}
        <div className="flex items-center gap-2.5 w-[40%] max-md:w-[90%]">
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          <Image
            className="object-cover"
            draggable={false}
            src={"/images/flower.svg"}
            alt="flower"
            width={60}
            height={60}
          />
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        </div>
        <b className="text-4xl pb-10 pt-5 max-sm:text-lg">
          ویدیو معرفی باغ تالار
        </b>
      </div>
      <div className="w-full relative max-md:aspect-square md:h-[70vh]">
        <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
        <video
          className="h-full w-full object-cover z-20 relative rounded-2xl"
          src="/videos/spzylftmodqgb3391519668101053225.mp4"
          poster="/images/640A0952.JPG"
          controls
          loop
        />
      </div>
    </div>
  );
};

export default AboutIntroVideo;
