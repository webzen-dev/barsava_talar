"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import clsx from "clsx";

import { menuLinks } from "./Header";

interface Prop {
  responsive: boolean;
  setResponsive: (value: boolean) => void;
}

const MobileHeader: React.FC<Prop> = ({ responsive, setResponsive }) => {
  const pathname = usePathname();

  const mobileHeader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mobileHeader.current) return;

    gsap.to(mobileHeader.current, { x: 0, opacity: 100, duration: 0.9 });
  }, [responsive]);

  return (
    <div
      ref={mobileHeader}
      className={clsx(
        "fixed top-20 right-0 w-full pt-10 min-h-screen overflow-y-auto items-center",
        "flex flex-col gap-10 px-5 z-50 bg-[var(--page-background)] text-base transform translate-x-full opacity-0 transition-all duration-300 ease-in-out"
      )}
      onClick={() => setResponsive(false)}
    >
      <div className="flex w-full flex-col items-center">
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
