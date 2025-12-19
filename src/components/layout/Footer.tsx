"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTelegramLogoLight } from "react-icons/pi";

import {
  IoCalendarOutline,
  IoCallOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoSparklesOutline,
} from "react-icons/io5";

const footerLinks = [
  {
    title: "صفحات اصلی",
    links: [
      { label: "خانه", href: "/", icon: <IoHomeOutline className="w-6 h-6" /> },
      {
        label: "درباره",
        href: "/about-us",
        icon: <IoDocumentTextOutline className="w-6 h-6" />,
      },
      {
        label: "خدمات و منو غذایی",
        href: "/services",
        icon: <IoSparklesOutline className="w-6 h-6" />,
      },
    ],
  },
  {
    title: "دسترسی سریع",
    links: [
      {
        label: "گالری تصاویر",
        href: "/image-gallery",
        icon: <IoImagesOutline className="w-6 h-6" />,
      },
      {
        label: "رزرو آنلاین",
        href: "/reservation",
        icon: <IoCalendarOutline className="w-6 h-6" />,
      },
      {
        label: "تماس با ما",
        href: "/contact-us",
        icon: <IoCallOutline className="w-6 h-6" />,
      },
    ],
  },
] as const;

const socialLiks = [
  [
    {
      icon: <BiPhoneCall />,
      label: "09154013935",
      href: "tel:09154013935",
    },
    {
      icon: <BiPhoneCall />,
      label: "09153016115",
      href: "tel:09153016115",
    },
    {
      icon: <HiOutlineLocationMarker />,
      label: " مشهد, جاده شاندیز , مدرس ۱/۶",
      href: "tel:09154013935",
    },
  ],
  [
    {
      icon: <IoLogoInstagram />,
      label: "اینستاگرام",
      href: "https://instagram.com/talar__barsava",
    },
    {
      icon: <PiTelegramLogoLight />,
      label: "تلگرام",
      href: "https://t.me/seelenz",
    },
  ],
];

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/dashboard")) return null;
  if (pathname?.startsWith("/reservation")) return null;
  return (
    <footer className="mt-20 grid gap-10 rounded-t-2xl bg-[#403D39] px-5 py-10 md:p-10 text-[var(--page-background)] w-full">
      <div className="flex justify-between gap-5 max-md:flex-col max-md:items-center">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-3 bg-[var(--dark-background)] rounded-lg w-full md:w-80 min-w-80"
        >
          <Image
            src={"/images/barsava logo(gold).PNG"}
            alt="logo"
            width={68}
            height={73.85}
            className="object-cover cursor-pointer"
          />
          <div className="md:text-lg font-bold text-nowrap">
            رزرو تالار رؤیایی شما؛ <br /> لحظاتی به یاد ماندنی
          </div>
        </Link>

        <div className="grid gap-2">
          <b className="text-lg">درباره ما</b>
          <p className="text-sm md:text-base">
            تالار بارثاوا با فضایی باشکوه و امکاناتی بی‌نظیر، میزبان لحظه‌های
            به‌یادماندنی شماست. از جشن‌های عروسی و نامزدی تا همایش‌های رسمی و
            گردهمایی‌های دوستانه، تیم حرفه‌ای ما در کنار شماست. خدمات ویژه، منوی
            متنوع و محیطی دلنشین، تجربه‌ای فراموش‌نشدنی برای میهمانان گرامی رقم
            خواهد زد. افتخار ما، رضایت شماست.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-10 w-full *:text-nowrap flex-col lg:flex-row">
        <div className="flex justify-between gap-10 flex-1 flex-col md:flex-row w-full">
          {footerLinks.map((section, i) => (
            <div key={i} className="flex flex-col gap-5 flex-1">
              <div className="flex items-center gap-2.5">
                <b>{section.title}</b>
              </div>

              <ul className="flex opacity-95 gap-3 flex-col flex-1 text-[var(--page-background)]/70">
                {section.links.map((link, index) => (
                  <li key={index} className="flex gap-2.5 items-center">
                    {link.icon}
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-1 gap-10 justify-between flex-col md:flex-row">
          {socialLiks.map((section, i) => (
            <div key={i} className="flex flex-col gap-3 flex-1">
              {section.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-2.5"
                  target="_blank"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--dark-background)] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
