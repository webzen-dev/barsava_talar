"use client";

import Image from "next/image";
import { useCarousel } from "@/lib/hooks/useCarousel";

const data = [
  { id: 0, src: "/images/about/DSC07665.webp" },
  { id: 1, src: "/images/women/DSC07610.webp" },
  { id: 2, src: "/images/about/DSC07790.webp" },
  { id: 3, src: "/images/about/DSC07755.webp" },
  { id: 4, src: "/images/about/DSC07665.webp" },
  { id: 5, src: "/images/women/DSC07610.webp" },
  { id: 6, src: "/images/about/DSC07790.webp" },
  { id: 7, src: "/images/about/DSC07755.webp" },
];

export default function AboutHeroSlider() {
  const { autoPlayRefCarousel } = useCarousel();

  return (
    <div ref={autoPlayRefCarousel} className="overflow-hidden">
      <div className="flex -me-5">
        {data.map((slide) => (
          <div
            key={slide.id}
            className="flex-[0_0_70%] md:flex-[0_0_50%] md:max-w-1/2 lg:flex-[0_0_calc(100%/4)] lg:max-w-1/3 pe-5 aspect-square"
          >
            <div className="w-full h-full relative select-none">
              <Image
                src={slide.src}
                fill
                draggable="false"
                alt="تصویر قسمتی از تالار مجلل بارثاوا"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
