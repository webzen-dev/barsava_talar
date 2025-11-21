"use client";
import { MenuItem } from "@/app/food-menu/global-data";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

interface FoodMenuBoxProps {
  menuName: string;
  menuData: MenuItem[];
}

const FoodMenuItem = dynamic(() => import("./food-menu-item"));

export default function FoodMenuBox({ menuData, menuName }: FoodMenuBoxProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="flex flex-col p-10          gap-13">
      <b className="text-2xl md:text-3xl text-center">{menuName}</b>
      <div className="flex flex-wrap gap-y-14 md:gap-y-10 items-stretch">
        {menuData.map((item, index) => (
          <div
            key={index}
            className="flex-1 max-md:min-w-full md:flex-1/2 lg:flex-1/3 xl:flex-1/4 md:p-4 "
          >
            <div className="h-full w-full rounded-2xl relative flex flex-col gap-2">
              <div className="w-full aspect-square relative shadow-2xl max-h-98">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-sm z-20"
                />
                <div className="absolute -top-4 w-[calc(100%-32px)] z-10 h-full left-1/2 transform -translate-x-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-sm opacity-50"
                  />
                </div>{" "}
                <div className="absolute -top-8 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2 z-0 h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-sm opacity-30"
                  />
                </div>
              </div>
              <div className="flex  flex-col py-4 px-4 bg-white/90 gap-4 rounded-lg shadow-2xl flex-1">
                <b className="text-lg">{item.title}</b>
                <span className="text-black/60 text-sm flex-1">
                  {item.description}
                </span>
                <button
                  className="text-sm bg-[#dec39a] py-2 rounded-lg cursor-pointer text-white "
                  onClick={() => setShowMenu(!showMenu)}
                >
                  مشاهده ایتم های منو
                </button>
              </div>
            </div>
            {showMenu && (
              <FoodMenuItem isOpen={() => setShowMenu(false)} menuData={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
