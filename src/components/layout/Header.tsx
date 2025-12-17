import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import {
  IoCalendarOutline,
  IoCallOutline,
  IoDocumentTextOutline,
  IoDownloadOutline,
  IoHomeOutline,
  IoImagesOutline,
  IoSparklesOutline,
} from "react-icons/io5";

import ToggleMenuButton from "./_toggle-menu-button";
import ScrollFadeProvider from "../ScrollFadeProvider";
import { NavLinks } from "./_nav-links";

export const menuLinks = [
  { label: "خانه", href: "/", icon: <IoHomeOutline className="w-6 h-6" /> },
  {
    label: "درباره",
    href: "/about-us",
    icon: <IoDocumentTextOutline className="w-6 h-6" />,
  },
  {
    label: "خدمات",
    href: "/services",
    icon: <IoSparklesOutline className="w-6 h-6" />,
  },
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
  {
    label: "دانلود کاتالوگ",
    href: "/cc.pdf",
    icon: <IoDownloadOutline className="w-6 h-6" />,
  },
] as const;

export default function Header() {
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 h-20 w-full",
        "flex justify-center",
        "bg-[var(--page-background)] text-[var(--brown)]"
      )}
    >
      <ScrollFadeProvider
        selector=".header-fade"
        translateY={-40}
        duration={1}
        enabledStagger={false}
        enableScrollTrigger={false}
      />

      <div
        className={clsx(
          "container header-fade",
          "flex items-center justify-between gap-12",
          "px-5 md:px-10"
        )}
      >
        <Link href="/" className="flex items-center gap-3 md:hidden lg:flex">
          <Image
            src="/images/barsava logo(gold).PNG"
            alt="logo"
            width={68}
            height={73.85}
            className="object-cover cursor-pointer"
          />

          <div className="text-sm font-bold leading-6 text-nowrap md:hidden xl:block">
            رزرو تالار رؤیایی شما؛ <br />
            لحظاتی به یاد ماندنی
          </div>
        </Link>

        <div className="hidden md:flex flex-1 items-center gap-7">
          {menuLinks.slice(0, 4).map((link, i) => (
            <NavLinks link={link} key={i} />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            download
            href={menuLinks[6].href}
            className={clsx(
              "group flex items-center justify-center",
              "w-12 h-12.5",
              "bg-[var(--gold)] rounded-lg",
              "text-3xl text-[var(--page-background)]",
              "cursor-pointer transition-[width,opacity] duration-300 ease-in-out",
              "hover:w-38 hover:justify-around"
            )}
          >
            <span
              className={clsx(
                "absolute text-sm",
                "invisible opacity-0",
                "transition-opacity duration-1000",
                "group-hover:relative group-hover:visible group-hover:opacity-100"
              )}
            >
              {menuLinks[6].label}
            </span>

            {menuLinks[6].icon}
          </a>

          <Link
            href={menuLinks[4].href}
            className={clsx(
              "group flex items-center justify-center",
              "w-12 h-12.5",
              "border border-[var(--gold)] rounded-lg",
              "text-3xl text-[var(--gold)]",
              "cursor-pointer transition-[width,opacity] duration-300 ease-in-out",
              "hover:w-38 hover:justify-around"
            )}
          >
            <span
              className={clsx(
                "absolute text-sm",
                "opacity-0 invisible",
                "transition-opacity duration-1000",
                "group-hover:relative group-hover:opacity-100 group-hover:visible"
              )}
            >
              {menuLinks[4].label}
            </span>
            {menuLinks[4].icon}
          </Link>

          <div className="grid gap-1">
            <a href="tel:09153016115" className="text-md font-bold">
              09153016115
            </a>

            <span className="text-xs text-nowrap">منتظر تماس شما هستیم</span>
          </div>

          <Link
            href={menuLinks[5].href}
            className={clsx(
              "group flex items-center justify-center",
              "w-12 h-12.5",
              "bg-[var(--gold)] rounded-lg",
              "text-3xl text-[var(--page-background)]",
              "cursor-pointer transition-[width] duration-300 ease-in-out",
              "hover:w-38 hover:justify-around"
            )}
          >
            <span
              className={clsx(
                "absolute text-sm",
                "opacity-0 invisible",
                "transition-opacity duration-1000",
                "group-hover:relative group-hover:opacity-100 group-hover:visible"
              )}
            >
              {menuLinks[5].label}
            </span>
            {menuLinks[5].icon}
          </Link>
        </div>

        <ToggleMenuButton />
      </div>
    </header>
  );
}
