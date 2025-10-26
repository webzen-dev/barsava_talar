"use client";

import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SlideType {
  id: number;
  title: string;
  caption: string;
  link: string;
  src: string;
}

const slides: SlideType[] = [
  {
    id: 1,
    title: "مراسم عروسی",
    caption: "لحظه‌ای خاص از حلقه انداختن",
    link: "/image-gallery",
    src: "/images/640A1010.jpg",
  },
  {
    id: 2,
    title: "حلقه‌های ازدواج",
    caption: "نمادی از عشق ابدی",
    link: "/image-gallery",
    src: "/images/640A0992.jpg",
  },
  {
    id: 3,
    title: "عروس و داماد",
    caption: "پرتره نزدیک از یک لحظه عاشقانه",
    link: "/image-gallery",
    src: "/images/640A0972.jpg",
  },
  {
    id: 4,
    title: "سالن پذیرایی",
    caption: "نمایی از دکوراسیون و میزهای جشن",
    link: "/image-gallery",
    src: "/images/DSC07772.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger);

const AboutSectionSlider = () => {
  const fadeUpEl = useRef<HTMLDivElement[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 1440px)": {
        slides: { perView: 4, spacing: 20 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 860px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 479px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    created(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    if (instanceRef.current) instanceRef.current.update();

    if (fadeUpEl.current) {
      const ctx = gsap.context(() => {
        gsap.from(fadeUpEl.current, {
          y: 60,
          opacity: 0,
          stagger: 0.3,
          ease: "power3.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: fadeUpEl.current[0],
            start: "top 50%",
          },
        });
      }, fadeUpEl);

      ScrollTrigger.refresh();

      return () => ctx.revert();
    }
  }, [instanceRef]);

  const nextSlide = () => instanceRef.current?.next();
  const prevSlide = () => instanceRef.current?.prev();

  return (
    <div className="w-full h-auto flex flex-col gap-[20px] relative">
      <div ref={sliderRef} className="keen-slider w-full">
        {slides.map((slide, index) => (
          <div
            ref={(el) => {
              if (el) fadeUpEl.current[index] = el;
            }}
            key={index}
            className="keen-slider__slide relative w-full h-[500px] cursor-pointer group overflow-hidden rounded-2xl "
          >
            <div className="absolue w-full h-full z-10 animate-pulse inset-0  bg-gradient-to-tr from-gray-400 to-gray-300 "></div>
            <Image
              src={slide.src}
              alt={`slide-${index}`}
              fill
              loading="lazy"
              className="object-cover rounded-2xl select-none z-20"
              draggable={false}
            />

            <div
              className="
              absolute w-full h-full top-0 left-0 flex flex-col items-center justify-end p-10 gap-4
              text-white rounded-2xl backdrop-blur-2xl
              opacity-0 translate-y-full
              transition-all duration-500 ease-out
              group-hover:opacity-100 group-hover:translate-y-0
            "
            >
              <div className="text-2xl underline font-bold">{slide.title}</div>
              <span>{slide.caption}</span>
              <Link
                className="border-2 border-solid border-white py-2.5 w-[80%] flex items-center justify-center rounded-3xl cursor-pointer underline"
                href={slide.link}
              >
                مشاهده
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center gap-5 items-center">
        <div className="flex gap-3 justify-center lg:hidden" dir="ltr">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-[40px] h-[4px] rounded-2xl transition-all duration-300 ${
                currentSlide === index ? "bg-[#dec39a]" : "bg-[#c2c2c2]"
              }`}
            ></span>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-[40px] h-[40px] text-2xl shadow-lg bg-[#dec39a] text-white flex items-center justify-center
           rounded-lg absolute z-20 right-[-15px] cursor-pointer top-[calc(50%-25px)] transform -translate-y-1/2"
        >
          <IoIosArrowForward />
        </button>

        <button
          onClick={prevSlide}
          className="w-[40px] h-[40px] text-2xl shadow-lg bg-[#dec39a] text-white flex items-center justify-center
           rounded-lg absolute z-20 left-[-15px] cursor-pointer top-[calc(50%-25px)] transform -translate-y-1/2"
        >
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
};

export default AboutSectionSlider;
