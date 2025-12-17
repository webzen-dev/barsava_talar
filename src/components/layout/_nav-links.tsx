"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

export function NavLinks({
  link,
}: {
  link: {
    label: string;
    href: string;
    icon: ReactNode;
  };
}) {
  const pathname = usePathname();

  return (
    <Link
      key={link.href}
      href={link.href}
      className={clsx(
        "flex flex-col font-bold transition-colors duration-300 pe-7 border-e-2 border-e-black/10 last:border-none text-nowrap",
        pathname === link.href ? "text-[var(--gold)]" : "text-[var(--brown)]"
      )}
    >
      {link.label}
    </Link>
  );
}
