"use client";

import { useCarousel } from "@/lib/hooks/useCarousel";
import Image from "next/image";
import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
  {
    id: 1,
    src: "/images/close-up-portrait-of-the-bride-and-groom-a-moment-2024-10-14-23-53-59-utc.jpg",
    caption:
      "از ابتدا تا انتها کاملاً بی‌نقص! نمی‌توانستیم تیم بهتری بخواهیم...",
    author: "سارا & علی",
  },
  {
    id: 2,
    src: "/images/DSC04614.jpg",
    caption: "تمام لحظات با دقت ثبت شدند و همه چیز عالی بود. بهترین انتخاب ما!",
    author: "مریم & رضا",
  },
  {
    id: 3,
    src: "/images/DSC07655.jpg",
    caption: "برنامه‌ریزی دقیق و اجرای بی‌نقص باعث شد شب ما به یادماندنی شود.",
    author: "نازنین & امیر",
  },
  {
    id: 4,
    src: "/images/close-up-portrait-of-the-bride-and-groom-a-moment-2024-10-14-23-53-59-utc.jpg",
    caption:
      "از ابتدا تا انتها کاملاً بی‌نقص! نمی‌توانستیم تیم بهتری بخواهیم...",
    author: "سارا & علی",
  },
  {
    id: 5,
    src: "/images/DSC04614.jpg",
    caption: "تمام لحظات با دقت ثبت شدند و همه چیز عالی بود. بهترین انتخاب ما!",
    author: "مریم & رضا",
  },
  {
    id: 6,
    src: "/images/DSC07655.jpg",
    caption: "برنامه‌ریزی دقیق و اجرای بی‌نقص باعث شد شب ما به یادماندنی شود.",
    author: "نازنین & امیر",
  },
];
export default function ServicesCarousel() {
  const { refCarousel } = useCarousel();
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="overflow-hidden" ref={refCarousel}>
        <div className="flex -me-3">
          {data.map((slide) => (
            <div
              key={slide.id}
              className="gorw-0 shrink-0 w-full md:w-1/2 lg:w-1/3 aspect-square pe-3 select-none"
            >
              <div className="w-full h-full relative">
                <Image
                  src={slide.src}
                  draggable={false}
                  alt={slide.caption}
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute z-20 inset-0 bg-black/30 rounded-2xl flex flex-col gap-5 justify-end items-center p-5 select-none text-center">
                  <span className="md:text-2xl text-white">{slide.author}</span>
                  <p className="text-base text-white/80">{slide.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
