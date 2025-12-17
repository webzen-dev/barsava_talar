"use client";

import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  IoCalendarOutline,
  IoCallOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import { menuLinks } from "./Header";
import clsx from "clsx";

interface Prop {
  responsive: boolean;
  setResponsive: (value: boolean) => void;
}

const MobileHeader: React.FC<Prop> = ({ responsive, setResponsive }) => {
  const pathname = "/about-us";

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
      className={clsx(
        "fixed top-20 right-0 w-full pt-10 min-h-screen overflow-y-auto",
        "flex flex-col gap-10 px-5 z-50 bg-[var(--page-background)] text-base"
      )}
      onClick={() => setResponsive(false)}
    >
      <div className="flex w-full flex-col">
        {menuLinks.slice(0, 4).map((link, i) => (
          <Link
            key={i}
            className={clsx(
              "text-nowrap flex gap-3 py-3",
              pathname === link.href
                ? "text-[var(--gold)]"
                : "text-[var(--brown)]"
            )}
            href={link.href}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col text-black/70">
        {menuLinks.slice(4, 7).map((link, i) => (
          <Link href={link.href} key={i} className="flex gap-3 underline py-3">
            {link.icon}

            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileHeader;
