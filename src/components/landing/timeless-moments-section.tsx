import Image from "next/image";
import clsx from "clsx";

import HeaderSections from "../header-sections";
import TimelessLoadImageProvider from "./_timeless-load-images-Provider";
import ScrollFadeProvider from "../ScrollFadeProvider";

export default function TimelessMoments() {
  return (
    <div className="flex flex-col items-center w-full gap-10 max-sm:p-5">
      <ScrollFadeProvider
        selector=".timeless-moments-header"
        enableScrollTrigger={true}
      />
      <TimelessLoadImageProvider />

      <div className="flex flex-col items-center w-full text-center">
        <HeaderSections className="timeless-moments-header" />

        <div className="pb-2.5 text-lg md:text-2xl font-bold timeless-moments-header">
          لحظات بی‌زمان
        </div>

        <div className="text-sm md:text-base font-bold text-black/70 timeless-moments-header">
          به جشن‌های فراموش‌نشدنی که ما ترتیب داده‌ایم قدم بگذارید <br /> هر عکس
          داستانی را روایت می‌کند
        </div>
      </div>

      <div className="relative flex items-end justify-between w-full flex-col md:flex-row grayscale gap-5 md:gap-0 px-2 md:px-0">
        <Image
          src="/images/romantic-married-couple-celebrating-beach-wedding-2024-10-19-01-56-07-utc_11zon.jpg"
          alt="timeless moments image"
          height={260}
          width={260}
          className="object-cover rounded-2xl w-full rotate-[9deg] aspect-square md:max-w-65 timeless-moments-element"
        />

        <div
          className={clsx(
            "md:absolute flex h-full md:w-1/2 justify-center md:pt-7.5",
            "timeless-moments-element"
          )}
        >
          <Image
            src="/images/cheerful-redhead-groom-swinging-with-bride-in-whit-2024-11-08-12-52-10-utc_11zon.jpg"
            alt="timeless moments image"
            height={300}
            width={300}
            className="object-cover rounded-2xl w-full rotate-[9deg] md:rotate-[5deg] aspect-square md:max-w-75"
          />
        </div>

        <div className="relative w-full md:w-100 aspect-square z-30 timeless-moments-element">
          <Image
            src="/images/newlyweds-walking-in-amazing-blossoming-flowers-fi-2024-09-16-08-59-12-utc_11zon.jpg"
            alt="timeless moments image"
            fill
            className="object-cover rounded-2xl rotate-[9deg] md:rotate-0"
          />
        </div>

        <div
          className={clsx(
            "md:absolute flex md:h-full md:w-1/2 justify-center md:pt-7.5 z-20 left-0",
            "timeless-moments-element"
          )}
        >
          <Image
            src="/images/couple-just-married-together-on-the-majestic-agri-2025-03-18-20-58-56-utc_11zon.jpg"
            alt="timeless moments image"
            height={300}
            width={300}
            className="object-cover rounded-2xl w-full rotate-[9deg] md:rotate-[-5deg] aspect-square md:max-w-75"
          />
        </div>

        <Image
          src="/images/a-couple-in-love-a-guy-and-a-girl-on-a-walk-in-the-2025-01-08-22-32-48-utc-e1747808112273.jpg"
          alt="timeless moments image"
          height={260}
          width={260}
          className="object-cover rounded-2xl w-full rotate-[9deg] md:rotate-[-9deg] aspect-square md:max-w-65 timeless-moments-element"
        />
      </div>
    </div>
  );
}
