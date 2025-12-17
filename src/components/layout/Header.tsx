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
  const pathname = "/";

  // const pathname = usePathname();

  // if (pathname?.startsWith("/dashboard")) return null;
  // if (pathname?.startsWith("/reservation")) return null;
  // if (pathname?.startsWith("/login")) return null;

  return (
    <header className="fixed h-20 w-full top-0 left-0 right-0 flex justify-center z-50 bg-[var(--page-background)] text-[var(--brown)]">
      <ScrollFadeProvider
        selector=".header-fade"
        translateY={-40}
        duration={1}
        enabledStagger={false}
        enableScrollTrigger={false}
      />

      <div className="container flex justify-between gap-12 items-center px-5 md:px-10 header-fade">
        <Link href={"/"} className="flex items-center gap-3">
          <Image
            src={"/images/barsava logo(gold).PNG"}
            alt="logo"
            width={68}
            height={73.85}
            className="object-cover cursor-pointer"
          />
          <div className="flex flex-col gap-1.5 text-sm font-semibold">
            رزرو تالار رؤیایی شما؛ <br />
            لحظاتی به یاد ماندنی
          </div>
        </Link>

        {/* menu item */}
        <div className="hidden items-center flex-1 gap-7 md:flex">
          {menuLinks.slice(0, 4).map((link, i) => (
            <Link
              key={i}
              className={clsx(
                "flex flex-col duration-300 ease-in-out transition-colors items-center hover:text-black  text-nowrap font-bold border-e-2 border-e-black/10 pe-7 last:border-none",
                pathname === link.href
                  ? "text-[var(--gold)]"
                  : "text-[var(--brown)]"
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* cta box */}
        <div className="hidden gap-4 md:flex">
          <a
            download
            href={menuLinks[6].href}
            className={clsx(
              "group bg-[var(--gold)] text-[var(--page-background)] w-12 cursor-pointer h-12.5 ",
              "rounded-lg flex justify-center items-center text-3xl transition-[width,opacity] duration-300",
              " hover:w-38 hover:justify-around ease-in-out"
            )}
          >
            <span className="opacity-0 invisible transition-opacity duration-1000 text-sm absolute group-hover:relative group-hover:opacity-100 group-hover:visible">
              {menuLinks[6].label}
            </span>
            {menuLinks[6].icon}
          </a>

          <Link
            href={menuLinks[4].href}
            className={clsx(
              "w-12 h-12.5 border border-[var(--gold)] text-[var(--gold)] flex justify-center items-center hover:justify-around group",
              "cursor-pointer rounded-lg text-3xl transition-[width,opacity] duration-300 ease-in-out hover:w-38"
            )}
          >
            {menuLinks[4].icon}
            <span className="opacity-0 invisible transition-opacity duration-1000 text-sm absolute group-hover:relative group-hover:opacity-100 group-hover:visible">
              {menuLinks[4].label}
            </span>
          </Link>

          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-1">
              <a href="tel:09153016115" className="font-bold text-lg">
                09153016115
              </a>
              <span className="text-xs">منتظر تماس شما هستیم</span>
            </div>
            <Link
              href={menuLinks[5].href}
              className={clsx(
                "w-12 h-12.5 bg-[var(--gold)] text-[var(--page-background)] flex justify-center items-center hover:justify-around group",
                "cursor-pointer rounded-lg text-3xl transition-[width,opacity] duration-300 ease-in-out hover:w-38"
              )}
            >
              <span className="opacity-0 invisible transition-opacity duration-1000 text-sm absolute group-hover:relative group-hover:opacity-100 group-hover:visible">
                {menuLinks[5].label}
              </span>
              {menuLinks[5].icon}
            </Link>
          </div>
        </div>

        <ToggleMenuButton />
      </div>
    </header>
  );
}
