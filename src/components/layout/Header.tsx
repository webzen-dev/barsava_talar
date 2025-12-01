"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCalendarOutline, IoDownloadOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const MobileHeader = dynamic(()=>import('./MobileHeader'))
export default function Header() {
  const pathname = usePathname();
  const [responsive, setResponsive] = useState<boolean>(false);

  const header = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (header.current) {
      gsap.fromTo(
        header.current,

        {
          y: -50,
          duration: 1,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
        }
      );
    }
  }, []);

  // reservation
  if (pathname?.startsWith("/dashboard")) return null;
  if (pathname?.startsWith("/reservation")) return null;
  if (pathname?.startsWith("/login")) return null;

  return (
    <header
      className="fixed h-[80px] items-center w-full top-0 left-0 right-0 2xl:px-[200px] xl:px-[100px] flex  gap-5 z-50 bg-none backdrop-blur-lg bg-[#f7f1ea] max-md:justify-between max-md:px-10  max-md:backdrop-blur-2xl max-sm:px-5 text-[#423A2F] "
      dir="rtl"
      ref={header}
    >
      <Link href={"/"} className="flex items-center  gap-3">
        <Image
          src={"/images/barsava logo(gold).PNG"}
          alt="logo"
          width={68}
          height={73.85}
          className="object-cover cursor-pointer"
        />
        <div
          className="flex flex-col gap-1.5 text-[13px] font-semibold md:hidden lg:flex
"
        >
          <span>رزرو تالار رؤیایی شما؛</span>
          <span>لحظاتی به یاد ماندنی (:</span>
        </div>
      </Link>
      {/* menu item */}
      <div className="flex items-center flex-1 max-md:hidden">
        <Link
          className={`flex flex-col items-center  w-[100px]  duration-300 ease-in-out transition-all hover:text-black ${
            pathname === "/" ? "text-[#dec39a]" : "text-[#423A2F]"
          }`}
          href={"/"}
        >
          <span className="font-bold">خانه</span>
        </Link>
        <div className="h-[35px] w-[1px] bg-gray-300"></div>
        <Link
          className={`flex flex-col  items-center  w-[120px] text-[#423A2F] duration-300 ease-in-out transition-all hover:text-black   ${
            pathname === "/about-us" ? "text-[#dec39a]" : "text-[#423A2F]"
          }`}
          href={"/about-us"}
          prefetch
        >
          <span className="font-bold">درباره</span>
        </Link>
        <div className="h-[35px] w-[1px] bg-gray-300"></div>
        <Link
          className={`flex flex-col  items-center  w-[120px] text-[#423A2F] duration-300 ease-in-out transition-all hover:text-black  ${
            pathname === "/services" ? "text-[#dec39a]" : "text-[#423A2F]"
          }`}
          href={"/services"}
          prefetch
        >
          <span className="font-bold">خدمات </span>
        </Link>
        <div className="h-[35px] w-[1px] bg-gray-300"></div>
        <Link
          className={`flex flex-col  items-center  w-[120px] text-[#423A2F] duration-300 ease-in-out transition-all hover:text-black  ${
            pathname === "/image-gallery" ? "text-[#dec39a]" : "text-[#423A2F]"
          }`}
          href={"/image-gallery"}
        >
          <span className="font-bold">گالری تصاویر</span>
        </Link>{" "}
        <div className="h-[35px] w-[1px] bg-gray-300"></div>
        <Link
          className={`flex flex-col  items-center  px-4 text-[#423A2F] duration-300 ease-in-out transition-all hover:text-black  ${
            pathname === "/food-menu" ? "text-[#dec39a]" : "text-[#423A2F]"
          }`}
          href={"/food-menu"}
        >
          <span className="font-bold">منو غذایی </span>
        </Link>
      </div>
      {/* cta box */}
      <div className="flex gap-4 max-md:hidden">
        <a
          download
          href="/cc.pdf"
          className="group bg-[#dec39a] text-white w-[48px] cursor-pointer h-[50px] rounded-lg flex justify-center items-center text-3xl duration-300 ease-in-out transition-all hover:w-[150px] hover:justify-around"
        >
          <IoDownloadOutline className="text-3xl" />
          <span className="opacity-0 invisible transition-opacity duration-1000 text-sm absolute group-hover:relative group-hover:opacity-100 group-hover:visible">
            دانلود کاتالوگ
          </span>
        </a>

        <Link
          href={"/reservation"}
          className="group bg-none border border-[#dec39a] text-[#dec39a] w-[48px] cursor-pointer h-[50px] rounded-lg flex justify-center items-center text-3xl duration-300 ease-in-out transition-all
    hover:w-[120px] hover:justify-around"
        >
          <IoCalendarOutline className="text-3xl" />
          <span className="opacity-0 invisible  transition-opacity duration-1000 text-sm absolute group-hover:relative group-hover:opacity-100 group-hover:visible ">
            رزرو آنلاین
          </span>
        </Link>
        <div className="flex items-center gap-5 ">
          <div className="flex flex-col gap-1">
            <a href="tel:09154013935" className="font-bold text-lg">
              09154013935
            </a>
            <span className="text-[11px]">منتظر تماس شما هستیم</span>
          </div>
          <Link
            href={"/contact-us"}
            className="group  border-none bg-[#dec39a] text-white w-[48px] cursor-pointer h-[50px] rounded-lg flex justify-center items-center text-2xl  duration-300 ease-in-out transition-all
    hover:w-[120px] hover:justify-around"
          >
            <span className="opacity-0 invisible  transition-opacity duration-1000 text-sm absolute group-hover:relative group-hover:opacity-100 group-hover:visible ">
              تماس با ما
            </span>
            <FiPhoneCall />
          </Link>
        </div>
      </div>
      <button
        className="text-3xl text-[#dec39a] rounded-lg w-[40px] h-[40px] flex items-center justify-center  md:hidden"
        onClick={() => setResponsive(!responsive)}
      >
        {responsive ? <MdOutlineClose /> : <HiOutlineMenuAlt1 />}
      </button>
      {responsive && (
        <MobileHeader responsive={responsive} setResponsive={setResponsive} />
      )}
    </header>
  );
}
