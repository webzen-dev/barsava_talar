"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import clsx from "clsx";

import { AboutDataProps } from "./about-section";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
{/* 
      <div
        className={clsx(
          " absolute w-full h-full top-0 left-0 flex flex-col items-center justify-end p-10 gap-4 z-30",
          "text-white rounded-2xl backdrop-blur-2xl opacity-0 translate-y-full",
          "transition-opacity duration-500 ease-out",
          "group-hover:opacity-100"
        )}
      >
        <div className="text-2xl underline font-bold">{slide.title}</div>
        <span>{slide.caption}</span>
        <Link
          className="border-2 border-solid border-white py-2.5 w-4/5 flex items-center justify-center rounded-3xl cursor-pointer underline"
          href={slide.link}
        >
          مشاهده
        </Link>
      </div> */}
    </div>
  );
}

export default function AboutSectionCarousel({
  slides,
}: {
  slides: AboutDataProps[];
}) {
  const [current, setCurrent] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    loop: true,
    align: "start",
    breakpoints: {
      "(max-width: 780px)": { align: "center" },
    },
  });

  useEffect(() => {
    if (!emblaApi) return;

    function onSelect(api: EmblaCarouselType) {
      setCurrent(api.selectedScrollSnap());
    }

    emblaApi.on("select", onSelect);
    onSelect(emblaApi);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-full h-auto flex flex-col gap-5 relative">
      <div className="flex justify-end items-center gap-3 w-full md:pe-2.5">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className={clsx(
            "flex items-center justify-center w-8 h-8 cursor-pointer about-section-fade-up",
            "text-2xl shadow-lg bg-[var(--gold)] text-white rounded-lg"
          )}
        >
          <IoIosArrowForward />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className={clsx(
            "flex items-center justify-center w-8 h-8 cursor-pointer about-section-fade-up",
            "text-2xl shadow-lg bg-[var(--gold)] text-white rounded-lg"
          )}
        >
          <IoIosArrowBack />
        </button>
      </div>

      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="flex touch-pan-x touch-pinch-zoom will-change-scroll">
          {slides.map((slide) => (
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
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-8 rounded-full transition-colors ${
                i === current ? "bg-[var(--gold)]" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
