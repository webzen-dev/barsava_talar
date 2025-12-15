import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import Image from "next/image";

export default function Reservation() {
  return (
    <div className="w-full fixed inset-0 z-60 flex flex-col text-[var(--brown)] h-auto min-h-screen md:h-screen">
      {/* reservation Header */}
      <div className="w-full flex justify-between items-center p-6 absolute z-30 top-0 left-0 right-0 text-[var(--page-background)]">
        <Link href={"/"} className="text-3xl text-[var(--brown)]">
          <IoIosArrowBack />
        </Link>
      </div>
      <div className="flex w-full h-full justify-between">
        {/* reservation form */}

        <div className="relative h-full flex-1 hidden md:block 2xl:w-3/5">
          <Image
            src={"/images/DSC07687.jpg"}
            fill
            alt="Reservation Image"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-end justify-center p-20 bg-gradient-to-t from-black/80 to-transparent">
            <b className="text-4xl text-[var(--page-background)]">
              تالار بارثاوا
            </b>

            <span className="text-[var(--page-background)]/60 text-2xl">
              شبی رویایی در کنار عزیزانتان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
