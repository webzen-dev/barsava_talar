"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Slide {
  id: number;
  src: string;
  poster: string;
}

const slides: Slide[] = [
  { id: 1, src: "/videos/v3.mp4", poster: "/images/poster1.jpg" },
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

export default function IntroductionVideosSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    loop: true,
    align: "center",
    breakpoints: {
      "(max-width: 780px)": { align: "center" },
    },
  });

  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  function handlePlay(index: number) {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) video.pause();
    });
  }

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full flex flex-col gap-5">
      <div className="flex justify-end gap-4">
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="z-20
          w-8 h-8 flex justify-center items-center text-xl 
          bg-[#dec39a] text-white rounded-lg shadow-lg lg:hidden"
        >
          <IoIosArrowForward />
        </button>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="z-20
          w-8 h-8 flex justify-center items-center text-xl 
          bg-[#dec39a] text-white rounded-lg shadow-lg lg:hidden"
        >
          <IoIosArrowBack />
        </button>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)] px-2"
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
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-[5px] w-[35px] rounded-full transition-all ${
              i === current ? "bg-[#dec39a]" : "bg-[#c2c2c2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
