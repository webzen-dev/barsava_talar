"use client";

import { useCarousel } from "@/lib/hooks/useCarousel";
import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";
import ScrollFadeProvider from "../ScrollFadeProvider";

export interface CommentType {
  id: number;
  fullName: string;
  title: string;
  message: string;
}

export default function Reviews({ data }: { data: CommentType[] }) {
  const { autoPlayRefCarousel } = useCarousel();

  return (
    <div className="w-full flex flex-col gap-10">
      <ScrollFadeProvider selector=".reviews-fade" />
      <b className="text-lg md:text-2xl text-center reviews-fade">
        نظرات کاربران درباره بارثاوا
      </b>

      <div
        className="overflow-hidden pb-10 h-90 reviews-fade"
        ref={autoPlayRefCarousel}
      >
        <div className="flex items-stretch -me-6">
          {data.map((comment) => (
            <div
              key={comment.id}
              className="flex-[0_0_80%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pe-6 select-none touch-pan-y touch-pinch-zoom will-change-scroll cursor-pointer"
            >
              <div className="w-full h-full flex flex-col gap-5 relative bg-white/50 shadow-lg shadow-black/10 p-3 md:p-6 rounded-2xl">
                <Image
                  src="/images/icons8-bride-and-groom-50.png"
                  height={50}
                  width={50}
                  alt="bride and groom"
                />

                <b className="md:text-xl">{comment.title}</b>

                <span className="text-black/60 flex-1 text-sm md:text-base">{comment.message}</span>

                <div className="flex gap-2 text-black/60 items-center">
                  <IoPersonCircleOutline className="w-5 h-5 md:h-7 md:w-7" />

                  <span className="font-bold md:text-lg">{comment.fullName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
