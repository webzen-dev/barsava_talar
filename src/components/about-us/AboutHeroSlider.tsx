"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  { id: 0, src: "/images/DSC07665.jpg" },
  { id: 1, src: "/images/DSC07610.jpg" },
  { id: 2, src: "/images/DSC07755.jpg" },
  { id: 3, src: "/images/DSC07755.jpg" },
];

const AboutHeroSlider = () => {
  const [emblaRef] = useEmblaCarousel({
    direction: "rtl",
    loop: true,
    align: "center",
  });

  return (
    <div className="relative h-[40vh] overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden h-full">

        <div className="flex h-full">

          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%]"  
            >
              <div className="w-full h-full bg-amber-400">
                <Image
                  src={slide.src}
                  fill
                  alt="slide"
                  className="object-cover"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AboutHeroSlider;
