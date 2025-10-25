"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides: string[] = [
  "/images/DSC07665.jpg",
  "/images/DSC07610.jpg",
  "/images/DSC07755.jpg",
];

const AboutHeroSlider = () => {

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 1080px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(max-width: 1080px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 767px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  // Auto play effect
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);
  const nextSlide = () => slider.current?.next();
  const prevSlide = () => slider.current?.prev();
  return (
    <div ref={sliderRef} className="keen-slider w-full relative pt-[40px] h-[70%]">
      <button
        onClick={nextSlide}
        className="w-[30px] h-[30px] text-lg shadow-lg bg-[#dec39a] text-white flex items-center justify-center
                 rounded-lg absolute z-20 left-[40px] cursor-pointer top-0  transform"
      >
        <IoIosArrowForward />
      </button>

      <button
        onClick={prevSlide}
        className="w-[30px] h-[30px] text-lg shadow-lg bg-[#dec39a] text-white flex items-center justify-center
                 rounded-lg absolute z-20 left-0 cursor-pointer top-0  transform"
      >
        <IoIosArrowBack />
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide relative w-full h-full cursor-pointer"
        >
          <svg
            className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-30"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            height="50px"
            width="200px"
            transform="rotate(0) scale(1, 1)"
          >
            {" "}
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="shape-fill"
              fill="#f7f1ea"
              fillOpacity="1"
            ></path>{" "}
          </svg>{" "}
          <svg
            className="absolute top-0 left-[50%] transform translate-x-[-50%] z-30 rotate-[180deg]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            height="50px"
            width="200px"
            transform="rotate(0) scale(1, 1)"
          >
            {" "}
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="shape-fill"
              fill="#f7f1ea"
              fillOpacity="1"
            ></path>{" "}
          </svg>{" "}
          <svg
            className="absolute left-[-80px] top-[50%] transform translate-y-[-50%] z-30 rotate-[90deg] "
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            height="50px"
            width="200px"
            transform="rotate(0) scale(1, 1)"
          >
            {" "}
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="shape-fill"
              fill="#f7f1ea"
              fillOpacity="1"
            ></path>{" "}
          </svg>{" "}
          <svg
            className="absolute right-[-80px] top-[50%] transform translate-y-[-50%] z-30 rotate-[270deg] "
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            height="50px"
            width="200px"
            transform="rotate(0) scale(1, 1)"
          >
            {" "}
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="shape-fill"
              fill="#f7f1ea"
              fillOpacity="1"
            ></path>{" "}
          </svg>
          <Image
            src={slide}
            alt={`slide-${index}`}
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutHeroSlider;
