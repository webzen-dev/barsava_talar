"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FullWeddingPlanningSlider = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    if (!slider) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 3000);
    };

    autoplay();

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  const slides = [
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
      caption:
        "تمام لحظات با دقت ثبت شدند و همه چیز عالی بود. بهترین انتخاب ما!",
      author: "مریم & رضا",
    },
    {
      id: 3,
      src: "/images/DSC07655.jpg",
      caption:
        "برنامه‌ریزی دقیق و اجرای بی‌نقص باعث شد شب ما به یادماندنی شود.",
      author: "نازنین & امیر",
    },
  ];

  const nextSlide = () => slider.current?.next();
  const prevSlide = () => slider.current?.prev();

  return (
    <div className="w-[50%] h-[580px] flex flex-col gap-[20px] max-w-[450px]  relative 2xl:max-w-[650px] 2xl:h-[750px] max-md:w-full max-md:max-w-full max-md:h-[550px]">
      <div className="flex items-center gap-5 max-md:justify-center">
        <button
          onClick={nextSlide}
          className="w-[40px] h-[40px] text-2xl shadow-lg bg-[#dec39a] text-white flex items-center justify-center
                 rounded-lg z-20 right-[-15px] cursor-pointer top-[calc(50%-25px)] "
        >
          <IoIosArrowForward />
        </button>

        <button
          onClick={prevSlide}
          className="w-[40px] h-[40px] text-2xl shadow-lg bg-[#dec39a] text-white flex items-center justify-center
                 rounded-lg z-20 left-[-15px] cursor-pointer top-[calc(50%-25px)] "
        >
          <IoIosArrowBack />
        </button>
      </div>
      <div
        ref={sliderRef}
        className="keen-slider w-full h-[550px] relative rounded-2xl "
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="keen-slider__slide relative w-full h-full rounded-2xl cursor-pointer"
          >
                    <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />

            <Image
              fill
              src={slide.src}
              alt="wedding slide"
              className="object-cover rounded-2xl z-20"
            />
            <div className="absolute inset-0 rounded-2xl bg-[rgba(0,0,0,0.5)] z-30 flex flex-col justify-end items-center gap-4 p-10 text-center text-white max-md:p-5">
              <b className="text-lg font-bold max-md:text-base">
                {slide.caption}
              </b>
              <span className="max-md:text-sm">{slide.author}</span>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default FullWeddingPlanningSlider;
