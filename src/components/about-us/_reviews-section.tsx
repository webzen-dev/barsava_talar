"use client";

import { useCarousel } from "@/lib/hooks/useCarousel";
import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";

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
      <b className="text-2xl text-center">نظرات کاربران درباره بارثاوا</b>

      <div className="overflow-hidden pb-10 h-90" ref={autoPlayRefCarousel}>
        <div className="flex items-stretch -me-6">
          {data.map((coment) => (
            <div
              key={coment.id}
              className="flex-[0_0_70%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pe-6 select-none touch-pan-y touch-pinch-zoom will-change-scroll cursor-pointer"
            >
              <div className="w-full h-full flex flex-col gap-5 relative bg-white/50 shadow-lg shadow-black/10 p-6 rounded-2xl">
                <Image
                  src="/images/icons8-bride-and-groom-50.png"
                  height={50}
                  width={50}
                  alt="bride and groom"
                />

                <b className="text-xl">{coment.title}</b>

                <span className="text-black/60 flex-1">{coment.message}</span>

                <div className="flex gap-2 text-black/60">
                  <IoPersonCircleOutline className="h-7 w-7" />

                  <span className="font-bold text-lg">{coment.fullName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
