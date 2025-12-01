"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiPhoneCall } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegImages } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineContactPhone, MdRestaurantMenu } from "react-icons/md";
import { PiReadCvLogo, PiTelegramLogoLight } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/dashboard")) return null;
  if (pathname?.startsWith("/reservation")) return null;
  return (
    <footer className="" dir="rtl">
      <div className="flex flex-col p-10 bg-[#403D39] gap-10 rounded-t-2xl">
        <div className="flex justify-between gap-5 max-md:flex-col max-md:items-center">
          <Link
            href={"/"}
            className="flex items-center  gap-3 bg-[#353330] p-2.5 text-white  rounded-lg w-[298px] min-w-[298px]"
          >
            {" "}
            <Image
              src={"/images/barsava logo(gold).PNG"}
              alt="logo"
              width={68}
              height={73.85}
              className="object-cover  cursor-pointer"
            />{" "}
            <div
              className="flex flex-col gap-1.5 text-lg font-bold
"
            >
              <span>رزرو تالار رؤیایی شما؛</span>
              <span>لحظاتی به یاد ماندنی (:</span>
            </div>
          </Link>
          <div className="h-[100px] opacity-9 w-[1.5px] bg-gray-300 max-md:h-[2px] max-md:w-full"></div>
          <div className="flex flex-col gap-5 text-white ">
            <b className="text-lg">درباره ما</b>
            <p
              className="
            text-sm max-sm:text-xs"
            >
              تالار بارثاوا با فضایی باشکوه و امکاناتی بی‌نظیر، میزبان لحظه‌های
              به‌یادماندنی شماست. از جشن‌های عروسی و نامزدی تا همایش‌های رسمی و
              گردهمایی‌های دوستانه، تیم حرفه‌ای ما در کنار شماست. خدمات ویژه،
              منوی متنوع و محیطی دلنشین، تجربه‌ای فراموش‌نشدنی برای میهمانان
              گرامی رقم خواهد زد. افتخار ما، رضایت شماست.{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between text-gray-300 gap-10 max-md:flex-wrap max-md:gap-[20px]">
          <div className="flex flex-col  gap-3 max-md:w-[calc(50%-10px)] max-sm:w-full">
            <a href={"tel:09154013935"} className="flex items-center gap-2.5 ">
              <div className="w-[35px] h-[35px] rounded-lg text-[#dec39a] bg-[#353330] flex items-center justify-center ">
                <BiPhoneCall />
              </div>
              <span className="text-gray-200 font-[100] text-sm">
                {" "}
                09154013935{" "}
              </span>
            </a>{" "}
            <a
              href="tel:09153016115"
              className="flex items-center gap-2.5 "
              target="_blank"
            >
              <div className="w-[35px] h-[35px] rounded-lg text-[#dec39a] bg-[#353330] flex items-center justify-center ">
                <BiPhoneCall />
              </div>
              <span className="text-gray-200 font-[100] text-sm">
                {" "}
                09153016115
              </span>
            </a>
            <div className="flex items-center gap-2.5 ">
              <div className="w-[35px] h-[35px] min-w-[35px] min-h-[35px]  rounded-lg text-[#dec39a] bg-[#353330] flex items-center justify-center ">
                <HiOutlineLocationMarker />
              </div>
              <span className="text-gray-200 font-[100] text-sm max-md:text-xs">
                مشهد, جاده شاندیز , مدرس ۱/۶
              </span>
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col  gap-3 max-md:w-[calc(50%-10px)] max-sm:w-full">
            <div className="flex items-center gap-2.5 text-white">
              <b>دسترسی سریع </b>
            </div>{" "}
            <ul className="flex  opacity-95 gap-3   flex-col">
              <li className="flex gap-2.5 items-center">
                <MdOutlineContactPhone />
                <Link href={"/contact-us"}>تماس با ما</Link>
              </li>{" "}
              <li className="flex gap-2.5 items-center">
                <FaRegImages />
                <Link href={"/image-gallery"}>گالری تصاویر</Link>
              </li>{" "}
              <li className="flex gap-2.5 items-center">
                <MdRestaurantMenu />
                <Link href={"/reservation"}> رزرو </Link>
              </li>
            </ul>
          </div>{" "}
          <div className="flex flex-col  gap-3 max-md:w-[calc(50%-10px)] max-sm:flex-col">
            <div className="flex items-center gap-2.5 text-white">
              <b>صفحات اصلی </b>
            </div>{" "}
            <ul className="flex  opacity-95 gap-3   flex-col">
              <li className="flex gap-2.5 items-center">
                <CiCircleInfo />
                <Link href={"/about-us"}>درباره</Link>
              </li>{" "}
              <li className="flex gap-2.5 items-center">
                <RiCustomerService2Line />
                <Link href={"/services"}>خدمات </Link>
              </li>{" "}
              <li className="flex gap-2.5 items-center">
                <PiReadCvLogo />
                <Link href={"/"}>خانه</Link>
              </li>
            </ul>
          </div>{" "}
          <div className="flex flex-col  gap-3 max-md:w-[calc(50%-10px)] max-sm:w-full">
            <a
              href="https://instagram.com/talar__barsava"
              className="flex items-center gap-2.5 "
              target="_blank"
            >
              <div className="w-[35px] h-[35px] rounded-lg text-[#dec39a] bg-[#353330] flex items-center justify-center ">
                <IoLogoInstagram />
              </div>
              <span className="text-gray-200 font-[100] text-sm">
                {" "}
                اینستاگرام
              </span>
            </a>{" "}
            <a
              href="https://t.me/seelenz"
              className="flex items-center gap-2.5 "
              target="_blank"
            >
              <div className="w-[35px] h-[35px] rounded-lg text-[#dec39a] bg-[#353330] flex items-center justify-center ">
                <PiTelegramLogoLight />
              </div>
              <span className="text-gray-200 font-[100] text-sm"> تلگرام</span>
            </a>{" "}
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
