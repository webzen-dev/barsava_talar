"use client";
import Link from "next/link";
import { useState } from "react";
import { LuCalendarClock, LuMessageSquareText } from "react-icons/lu";
import { SlLock } from "react-icons/sl";
import { CiLogout } from "react-icons/ci";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa6";

const dashboardLinks = [
  {
    label: "رزرو ها",
    href: "/dashboard/reservations-list",
    icon: <LuCalendarClock />,
  },
  {
    label: "پیام ها",
    href: "/dashboard/messages",
    icon: <LuMessageSquareText />,
  },
  {
    label: "کامنت  ها",
    href: "/dashboard/comments",
    icon: <FaRegCommentDots />,
  },
  {
    label: "پسورد",
    href: "/dashboard/password",
    icon: <SlLock />,
  },
];

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="fixed top-5 right-5 z-50 text-3xl md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <IoMdMenu />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(161,161,161,0.6)] z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white border-l-[#e5e7eb] border-l-1 p-5 flex flex-col items-center gap-10 z-50
          transform transition-transform duration-300
          md:relative md:translate-x-0 md:w-[20%]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="absolute top-5 left-5 text-2xl md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose />
        </button>

        <b className="text-2xl">داشبورد بارثاوا</b>

        <div className="flex flex-col w-full items-start gap-5 h-full">
          <b className="text-lg">منو اصلی</b>
          <ul className="flex flex-col gap-2.5 w-full flex-1">
            {dashboardLinks.map((link, index) => (
              <li key={index} className="w-full">
                <Link
                  href={link.href}
                  className="text-[#b9b9b9] py-2.5 flex gap-2.5 items-center w-full px-5 rounded-lg border-[#e5e7eb] border-1 border-solid"
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={"/"}
            className="text-red-500 py-2.5 flex gap-2.5 items-center w-full px-5 rounded-lg border-red-500 border-1 border-solid cursor-pointer"
          >
            <CiLogout />
            خروج
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
