"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const ContactUsHero = () => {
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
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-auto">
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
            src={
              "/images/flower.svg"
            }
            alt="flower"
            width={60}
            height={60}
          />

          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        </div>
        <b className="text-4xl font-bold max-sm:text-lg  ">تماس با ما</b>
        <b className="max-sm:text-sm">
          هر سوال، ایده یا پیشنهادی دارید، خوشحال می‌شویم از شما بشنویم. با ما
          در تماس باشید تا تجربه‌ای سریع و صمیمانه داشته باشید.{" "}
        </b>
      </div>
    </div>
  );
};

export default ContactUsHero;
