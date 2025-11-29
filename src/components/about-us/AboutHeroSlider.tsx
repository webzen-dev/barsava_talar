"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  { id: 0, src: "/images/DSC07665.jpg" },
  { id: 1, src: "/images/DSC07610.jpg" },
  { id: 2, src: "/images/DSC07755.jpg" },
  { id: 3, src: "/images/DSC07790.jpg" },
  { id: 4, src: "/images/DSC07665.jpg" },
  { id: 5, src: "/images/DSC07610.jpg" },
  { id: 6, src: "/images/DSC07755.jpg" },
  { id: 7, src: "/images/DSC07790.jpg" },
];

export default function AboutHeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      direction: "rtl",
      loop: true,
      align: "start",
      breakpoints: {
        "(max-width: 768px)": { align: "center" },
      },
    },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  );

  function nextSlider() {
    emblaApi?.scrollNext();
  }

  function prevSlider() {
    emblaApi?.scrollPrev();
  }

  return (
    <div className="relative md:h-[60vh] overflow-hidden flex flex-col gap-3">
      <div className="flex justify-end items-center gap-4">
        <button
          onClick={() => prevSlider()}
          className="w-8 h-8 bg-[#dec39a] rounded-sm flex items-center justify-center cursor-pointer text-white text-lg"
        >
          <IoIosArrowForward />
        </button>
        <button
          onClick={() => nextSlider()}
          className="w-8 h-8 bg-[#dec39a] rounded-sm flex items-center justify-center cursor-pointer text-white text-lg"
        >
          {" "}
          <IoIosArrowBack />
        </button>
      </div>
      <div ref={emblaRef} className="overflow-hidden flex-1">
        <div className="flex h-full me-6">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33%] mx-2 h-full"
            >
              <div className="w-full h-full relative select-none">
                <Image
                  src={slide.src}
                  fill
                  draggable="false"
                  alt="slide"
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
