"use client";

import Image from "next/image";
import clsx from "clsx";

import { facilitiesDataType } from "./_facilities";
import { useCarousel } from "@/lib/hooks/useCarousel";

interface facilitiesCarouselProps {
  data: facilitiesDataType[];
  className?: string;
}

export default function FacilitiesCarousel({
  data,
  className,
}: facilitiesCarouselProps) {
  const { refCarousel } = useCarousel();

  return (
    <div ref={refCarousel} className="overflow-hidden">
      <div className="flex -me-4">
        {data.map((item) => (
          <div
            className={clsx(
              "shrink-0 grow-0 w-4/6 md:w-1/2 lg:w-1/3 lg:min-w-1/3 aspect-square pe-4 select-none",
              className
            )}
            key={item.id}
          >
            <div className="w-full p-5 relative h-full">
              <Image
                src={item.image}
                fill
                alt={item.title}
                className="object-cover rounded-2xl"
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/70 z-20 flex pb-5 md:pb-10 items-end justify-center text-lg md:text-2xl text-white text-center">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
