"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoCalendarOutline, IoDownloadOutline } from "react-icons/io5";
interface Prop {
  responsive: boolean;
  setResponsive: (value: boolean) => void;
}

const MobileHeader: React.FC<Prop> = ({ responsive, setResponsive }) => {
  const mobileHeader = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.fromTo(
      mobileHeader.current,
      {
        x: 500,
        opacity: 0,

        duration: 1,
      },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, [responsive]);
  return (
    <div
      ref={mobileHeader}
      className=" absolute top-[80px] right-0 w-[100%] justify-center  h-[calc(100vh-80px)]  flex flex-col gap-10 py-10 px-5 items-center  z-50 bg-[#f7f1ea]"
      onClick={() => setResponsive(false)}
    >
      <div className="flex w-full items-center flex-col gap-7 ">
        <Link
          className="flex flex-col items-center  w-[100px] text-[#dec39a] hover:text-black"
          href={"/"}
        >
          <span className="font-bold">خانه</span>
        </Link>
        <Link
          className="flex flex-col  items-center w-[100px] text-[#747474] hover:text-black"
          href={"/about-us"}
        >
          <span className="font-bold">درباره</span>
        </Link>
        <Link
          className="flex flex-col items-center  w-[100px] text-[#747474]  hover:text-black"
          href={"/services"}
        >
          <span className="font-bold">خدمات </span>
        </Link>
        <Link
          className="flex flex-col  items-center  w-[120px] text-[#747474]  hover:text-black"
          href={"/image-gallery"}
        >
          <span className="font-bold">گالری تصاویر</span>
        </Link>
      </div>
      <div className="flex gap-4 flex-col-reverse">
        <Link
          href={"/reservation"}
          className="group bg-none border border-[#dec39a] text-[#dec39a]  cursor-pointer h-[50px] rounded-lg flex  items-center text-3xl 
            duration-300 ease-in-out transition-all w-[150px] justify-around"
        >
          <IoCalendarOutline className="text-3xl" />
          <span className="transition-opacity duration-1000 text-sm">
            رزرو آنلاین
          </span>
        </Link>
        <a
          download
          href="/cc.pdf"
          className="group  border-none bg-[#dec39a] text-white cursor-pointer h-[50px] rounded-lg flex items-center text-2xl  duration-300 ease-in-out transition-all
         w-[150px] justify-around"
        >
          <IoDownloadOutline className="text-3xl" />
            <span className="transition-opacity duration-1000 text-sm">
            دانلود کاتالوگ
          </span>
        </a>

        <div className="flex items-center gap-5 flex-col-reverse">
          <div className="flex flex-col gap-1">
            <a href="tel:09154013935" className="font-bold text-lg">
              09154013935
            </a>
            <span className="text-[11px]">منتظر تماس شما هستیم</span>
          </div>
          <Link href={'/contact-us'}
            className="group  border-none bg-[#dec39a] text-white cursor-pointer h-[50px] rounded-lg flex items-center text-2xl  duration-300 ease-in-out transition-all
         w-[150px] justify-around"
          >
            <span className="transition-opacity duration-1000 text-sm">
              تماس با ما
            </span>
            <FiPhoneCall />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
