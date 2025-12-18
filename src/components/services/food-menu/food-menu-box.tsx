import clsx from "clsx";
import Image from "next/image";

import { MenuItem } from "@/data/food-menu-data";

import FoodMenuItem from "./_food-menu-item";
import HeaderSections from "@/components/header-sections";
import ScrollFadeProvider from "@/components/ScrollFadeProvider";

interface FoodMenuBoxProps {
  menuData: MenuItem[];
}

export default function FoodMenuBox({ menuData }: FoodMenuBoxProps) {
  return (
    <div className="flex flex-col gap-10">
      <ScrollFadeProvider selector=".food-menu" />
      <div className="w-full flex flex-col gap-2 text-center items-center">
        <HeaderSections className="food-menu" />

        <b className="text-lg md:text-2xl food-menu">
          گزینه‌های غذایی باغ تالار برای هر سلیقه
        </b>

        <span className="text-sm text-black/70 md:text-base max-w-9/10 md:max-w-4/5 food-menu">
          تمام منوها با استاندارد پذیرایی باغ تالار آماده شده‌اند تا بهترین
          انتخاب را برای مراسم خود داشته باشید.
        </span>
      </div>

      <div className="flex flex-wrap gap-y-14 md:gap-y-10 items-stretch">
        {menuData.map((item, index) => (
          <label
            key={index}
            className="flex-1 max-md:min-w-full md:flex-1/2 lg:flex-1/3 xl:flex-1/4 md:p-4 xl:max-w-1/4"
          >
            <input type="checkbox" className="peer hidden" />

            <div className="h-full w-full rounded-2xl relative flex flex-col gap-2 food-menu">
              <div className="w-full aspect-square relative shadow-2xl max-h-98">
                <div
                  className={clsx(
                    "absolute flex items-center justify-center inset-0 bg-black/50 rounded-md overflow-hidden",
                    "before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%-32px)] before:aspect-square before:rounded-md before:bg-black/50",
                    "after:absolute after:top-8 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-64px)] after:aspect-square after:rounded-md after:bg-black/30"
                  )}
                >
                  <Image
                    src={"/images/barsava logo(gold).PNG"}
                    alt="logo"
                    width={68}
                    height={73.85}
                    className="object-cover cursor-pointer drop-shadow-[0_0_30px] drop-shadow-amber-400 relative z-30"
                  />
                </div>
              </div>
              
              <div className="flex  flex-col py-4 px-4 bg-white/90 gap-4 rounded-lg shadow-2xl flex-1">
                <b className="text-lg">{item.title}</b>

                <span className="text-black/60 text-sm flex-1">
                  {item.description}
                </span>

                <span className="text-sm bg-[var(--gold)] py-2 rounded-lg cursor-pointer text-white flex justify-center">
                  مشاهده ایتم های منو
                </span>
              </div>
            </div>

            <FoodMenuItem menuData={item} />

            <span className="fixed bg-red-400 rounded-lg bottom-5 left-5 z-70 px-4 py-2 text-white hidden peer-checked:flex cursor-pointer">
              بستن منو
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
