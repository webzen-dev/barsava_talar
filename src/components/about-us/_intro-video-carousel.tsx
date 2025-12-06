"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCarousel } from "@/lib/hooks/useCarousel";

interface IntroductionVideosProps {
  id: number;
  src: string;
  poster: string;
}

export default function IntroductionVideosSlider({
  data,
}: {
  data: IntroductionVideosProps[];
}) {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const { refCarousel, api, snaps, selectedIndex } = useCarousel();
  function handlePlay(index: number) {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) video.pause();
    });
  }

  return (
    <div className="relative w-full flex flex-col gap-5">
      <div className="flex justify-end gap-4">
        <button
          onClick={() => api?.scrollNext()}
          className="z-20
          w-8 h-8 flex justify-center items-center text-xl 
          bg-[#dec39a] text-white rounded-lg shadow-lg lg:hidden"
        >
          <IoIosArrowForward />
        </button>

        <button
          onClick={() => api?.scrollPrev()}
          className="z-20
          w-8 h-8 flex justify-center items-center text-xl 
          bg-[#dec39a] text-white rounded-lg shadow-lg lg:hidden"
        >
          <IoIosArrowBack />
        </button>
      </div>

      <div ref={refCarousel} className="overflow-hidden">
        <div className="flex -me-6">
          {data.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)] pe-6"
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={slide.src}
                poster={slide.poster}
                className="w-full h-full object-cover rounded-2xl"
                playsInline
                controls
                onPlay={() => handlePlay(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center lg:hidden mb-2" dir="ltr">
        {snaps.map((_, i) => (
          <span
            key={i}
            className={`h-[5px] w-[35px] rounded-full transition-all ${
              i === selectedIndex ? "bg-[#dec39a]" : "bg-[#c2c2c2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
