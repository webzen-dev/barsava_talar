"use client";

import { useImageCarousel } from "@/lib/hooks/_useImageCarousel";
import clsx from "clsx";
import Image from "next/image";
const images = [
  { id: 1, src: "/images/women/DSC07610.webp", title: "سالن بانوان" },
  { id: 2, src: "/images/other-images/other-2.webp", title: "ورودی تالار" },
  { id: 3, src: "/images/women/juwqghdf.webp", title: "سالن بانوان" },
  { id: 4, src: "/images/other-images/other-1.webp", title: "ورودی تالار" },
  {
    id: 5,
    src: "/images/landing-images/about-slider-4.webp",
    title: "سالن بانوان",
  },
  { id: 6, src: "/images/other-images/other-4.webp", title: "ورودی تالار" },
  { id: 7, src: "/images/men/men-2.webp", title: "سالن آقایان" },
  { id: 8, src: "/images/other-images/other-3.webp", title: "ورودی تالار" },
  { id: 9, src: "/images/DSC07655.webp", title: "سالن بانوان" },
  {
    id: 10,
    src: "/images/landing-images/about-slider-2.webp",
    title: "سالن بانوان",
  },
];

function Carousel() {
  const { refCarousel, selectedIndex, snaps } = useImageCarousel();

  return (
    <div className="flex flex-col gap-5">
      <div className="overflow-hidden py-10" ref={refCarousel}>
        <div className="flex -me-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="shrink-0 grow-0 w-7/9 md:min-w-1/3 md:w-1/3 lg:min-w-1/5 lg:w-1/5 aspect-square pe-4"
            >
              <div
                className={clsx(
                  "w-full h-full transition-color duration-800 flex items-center justify-center gap-4 flex-col ease-in-out rounded-2xl relative z-0",
                  selectedIndex === i
                    ? "scale-110 z-20 grayscale-0"
                    : "scale-90  grayscale"
                )}
              >
                <div className="relative flex-1 w-full">
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    draggable={false}
                    className="rounded-2xl object-cover"
                  />
                </div>
                <b
                  className={clsx(
                    selectedIndex === i
                      ? "text-lg opacity-100"
                      : "text-sm opacity-50"
                  )}
                >
                  {img.title}
                </b>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center mb-2" dir="ltr">
        {snaps.map((_, i) => (
          <button
            key={i}
            className={clsx(
              "h-1 w-8 rounded-full transition-colors",
              i === selectedIndex ? "bg-[var(--gold)]" : "bg-black/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default function ImageCarousel() {
  return (
    <section className="w-full">
        
      <Carousel />
    </section>
  );
}
