"use client";

import { MenuItem } from "@/app/food-menu/global-data";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

interface FoodMenuBoxProps {
  menuData: MenuItem[];
}

const FoodMenuItem = dynamic(() => import("./food-menu-item"), { ssr: false });

export default function FoodMenuBox({ menuData }: FoodMenuBoxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-13">
      <div className="flex flex-wrap gap-y-14 md:gap-y-10 items-stretch">
        {menuData.map((item, index) => (
          <div
            key={index}
            className="flex-1 max-md:min-w-full md:flex-1/2 lg:flex-1/3 xl:flex-1/4 md:p-4 xl:max-w-1/4"
          >
            <div className="h-full w-full rounded-2xl relative flex flex-col gap-2">
              <div className="w-full aspect-square relative shadow-2xl max-h-98">
                {/* <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-sm z-20"
                  /> */}
                <div className="absolute top-4 w-[calc(100%-32px)] z-10 aspect-square left-1/2 rounded-md transform bg-black/50 -translate-x-1/2">
                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md opacity-50"
                  /> */}
                </div>
                <div className="absolute top-8 w-[calc(100%-64px)] rounded-md left-1/2 transform -translate-x-1/2 bg-black/30 z-0 aspect-square">
                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md opacity-30"
                  /> */}
                </div>
                <div className="absolute flex items-center justify-center inset-0 z-20 bg-black/50 rounded-md">
                  <Image
                    src={"/images/barsava logo(gold).PNG"}
                    alt="logo"
                    width={68}
                    height={73.85}
                    className="object-cover cursor-pointer drop-shadow-[0_0_30px] drop-shadow-amber-400"
                  />
                </div>
              </div>
              <div className="flex  flex-col py-4 px-4 bg-white/90 gap-4 rounded-lg shadow-2xl flex-1">
                <b className="text-lg">{item.title}</b>
                <span className="text-black/60 text-sm flex-1">
                  {item.description}
                </span>
                <button
                  className="text-sm bg-[var(--gold)] py-2 rounded-lg cursor-pointer text-white "
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  مشاهده ایتم های منو
                </button>
              </div>
            </div>
            {openIndex === index && (
              <FoodMenuItem isOpen={() => setOpenIndex(null)} menuData={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
