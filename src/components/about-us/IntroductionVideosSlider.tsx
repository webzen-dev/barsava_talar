"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SlideType {
  id: number;
  src: string;
  poster: string;
}

const slides: SlideType[] = [
  {
    id: 1,
    src: "/videos/v3.mp4",
    poster: "/images/poster1.jpg",
  },
  {
    id: 2,
    src: "/videos/v2.mp4",
    poster: "/images/504408630_18307698244212975_6137982630799653769_n.jpg",
  },
  {
    id: 3,
    src: "/videos/v1.mp4",
    poster: "/images/505450223_18307463164212975_2637873274641937436_n.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger);

const IntroductionVideosSlider = () => {
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
    created(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  function handlePlay(currentIndex: number) {
    videoRefs.current.forEach((video, i) => {
      if (i !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  }

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
        <div ref={sliderRef} className="keen-slider w-full">
          {slides.map((slide, index) => (
            <div
              ref={(el) => {
                if (el) fadeUpEl.current[index] = el;
              }}
              key={index}
              className="keen-slider__slide relative w-full h-[600px] flex justify-center items-center cursor-pointer group overflow-hidden"
            >
              <div className="w-[337px] h-full relative">
                          <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />

                <video
                  ref={(el) => {
                    if (!videoRefs.current) videoRefs.current = [];
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={slide.src}
                  className="object-cover rounded-2xl select-none w-full h-full z-20 relative"
                  poster={slide.poster}
                  controls
                  playsInline
                  onPlay={() => handlePlay(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center gap-5 items-center xl:hidden">
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

export default IntroductionVideosSlider;
