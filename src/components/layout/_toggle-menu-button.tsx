"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const MobileHeader = dynamic(() => import("./_mobile-header"), { ssr: false });

export default function ToggleMenuButton() {
  const [responsive, setResponsive] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setResponsive(!responsive)}
        className="text-3xl text-[var(--gold)] rounded-lg w-20 h-20 flex items-center justify-center md:hidden"
      >
        {responsive ? <MdOutlineClose /> : <HiOutlineMenuAlt1 />}
      </button>
      {responsive && <MobileHeader responsive setResponsive={setResponsive} />}
    </>
  );
}
