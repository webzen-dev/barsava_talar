"use client";

import Image from "next/image";
import clsx from "clsx";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { AboutDataProps } from "./about-section";
import { useCarousel } from "@/lib/hooks/useCarousel";

function SlideItem({ slide }: { slide: AboutDataProps }) {
  return (
    <div className="relative w-full h-full overflow-hidden cursor-pointer rounded-2xl about-section-fade-up">
      <Image
        src={slide.src}
        alt={slide.title}
        fill
        loading="lazy"
        className="object-cover rounded-2xl select-none z-20"
        draggable={false}
      />
    </div>
  );
}

export default function AboutSectionCarousel({
  data,
}: {
  data: AboutDataProps[];
}) {
  const { refCarousel, selectedIndex, snaps, api } = useCarousel();
  return (
    <div className="w-full h-auto flex flex-col gap-5 relative">
      <div className="flex justify-end items-center gap-3 w-full md:pe-2.5">
        <button
          onClick={() => api?.scrollPrev()}
          className={clsx(
            "flex items-center justify-center w-8 h-8 cursor-pointer about-section-fade-up",
            "text-2xl shadow-lg bg-[var(--gold)] text-white rounded-lg"
          )}
        >
          <IoIosArrowForward />
        </button>

        <button
          onClick={() => api?.scrollNext()}
          className={clsx(
            "flex items-center justify-center w-8 h-8 cursor-pointer about-section-fade-up",
            "text-2xl shadow-lg bg-[var(--gold)] text-white rounded-lg"
          )}
        >
          <IoIosArrowBack />
        </button>
      </div>

      <div ref={refCarousel} className="overflow-hidden">
        <div className="flex touch-pan-x touch-pinch-zoom will-change-scroll">
          {data.map((slide) => (
            <div
              key={slide.id}
              className="shrink-0 grow-0 min-w-4/5 md:min-w-1/2 lg:min-w-1/3 aspect-5/6 px-2.5"
            >
              <SlideItem slide={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center gap-5 items-center">
        <div className="flex gap-2 justify-center lg:hidden mb-2">
          {snaps.map((_, i) => (
            <span
              key={i}
              className={clsx(
                "h-1 w-8 rounded-full transition-colors ",
                i === selectedIndex ? "bg-[var(--gold)]" : "bg-black/20"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
