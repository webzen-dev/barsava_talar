"use client";

import { useImageCarousel } from "@/lib/hooks/useImageCarousel";
import clsx from "clsx";
import Image from "next/image";
import HeaderSections from "../header-sections";
import ScrollFadeProvider from "../ScrollFadeProvider";

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
  const { refCarousel, selectedIndex } = useImageCarousel();

  return (
    <div className="flex flex-col gap-7 gallery-images-hero">
      <div className="overflow-hidden pt-6" ref={refCarousel}>
        <div className="flex -me-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="shrink-0 grow-0 w-7/9 md:min-w-1/3 md:w-1/3 lg:min-w-1/5 lg:w-1/5 pe-4"
            >
              <div
                className={clsx(
                  "w-full h-full flex items-center justify-center gap-4 flex-col rounded-2xl relative z-0"
                )}
              >
                <div className="relative flex-1 w-full aspect-square">
                  <Image
                    src={img.src}
                    alt="image carousel item"
                    fill
                    draggable={false}
                    className={clsx(
                      "rounded-2xl object-cover transition-all duration-800 ease-in-out",
                      selectedIndex === i
                        ? "scale-110 z-20 grayscale-0"
                        : "scale-95 grayscale"
                    )}
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

      {/* <div className="flex gap-2 justify-center mb-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            className={clsx(
              "h-1 w-8 rounded-full transition-colors",
              i === selectedIndex ? "bg-[var(--gold)]" : "bg-black/30"
            )}
          />
        ))}
      </div> */}
    </div>
  );
}

export default function ImageCarousel() {
  return (
    <section className="w-full flex flex-col gap-5">
      <ScrollFadeProvider
        selector=".gallery-images-hero"
        enableScrollTrigger={false}
      />
      <div className="flex items-center justify-center px-5 md:px-10">
        <div className="flex flex-col text-center w-full items-center">
          <HeaderSections className="gallery-images-hero" />

          <b className="text-md md:text-2xl mb-2.5 gallery-images-hero">گالری تصاویر</b>

          <b className="text-base text-black/70 sm:text-base gallery-images-hero">
            یه نگاه کوتاه کافیه تا حس و حال خاص باغ تالاربارثاوا رو لمس کنی.
            اینجاست که هر گوشه‌ش خاطره‌ساز میشه.
          </b>
        </div>
      </div>

      <Carousel />
    </section>
  );
}
