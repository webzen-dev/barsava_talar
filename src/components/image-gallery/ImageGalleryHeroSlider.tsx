  "use client";
  import Image from "next/image";
  import { useKeenSlider } from "keen-slider/react";
  import "keen-slider/keen-slider.min.css";
  import { useEffect } from "react";

  const slides: string[] = [
    "/images/DSC07665.jpg",
    "/images/DSC07610.jpg",
    "/images/DSC07755.jpg",
    "/images/DSC07766.jpg",
  ];

  const ImageGalleryHeroSlider = () => {
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
        "(min-width: 1536px)": {
          slides: { perView: 4, spacing: 20 },
        },
        "(max-width: 1280px)": {
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

    return (
      <div
        ref={sliderRef}
        className="keen-slider w-full h-[300px] 2xl:h-[500px]"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide relative w-full h-full cursor-pointer"
          >
            <Image
              src={slide}
              alt={`slide-${index}`}
              fill
              className="object-cover rounded-2xl select-none bg-gradient-to-tr from-gray-400 to-gray-300"
              draggable={false}
            />
          </div>
        ))}
      </div>
    );
  }; 

  export default ImageGalleryHeroSlider;
