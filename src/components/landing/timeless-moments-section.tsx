import Image from "next/image";

import HeaderSections from "../header-sections";
import ScrollFadeProvider from "../ScrollFadeProvider";
import TimelessLoadImageProvider from "./_timeless-load-images-Provider";

export default function TimelessMoments() {
  return (
    <div className="flex flex-col items-center w-full gap-15">
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

      <div className="relative flex items-end justify-around w-full flex-col md:flex-row gap-5 md:gap-0 px-2 md:px-0 max-w-320 group">
        <Image
          src="/images/romantic-married-couple-celebrating-beach-wedding-2024-10-19-01-56-07-utc_11zon.jpg"
          alt="timeless moments image"
          height={260}
          width={260}
          className="object-cover rounded-2xl w-full rotate-[9deg] aspect-square timeless-moments-element md:max-w-35 lg:max-w-65 transition-[filter] duration-300 ease-in-out grayscale hover:grayscale-0 relative z-10"
        />

        <Image
          src="/images/cheerful-redhead-groom-swinging-with-bride-in-whit-2024-11-08-12-52-10-utc_11zon.jpg"
          alt="timeless moments image"
          height={300}
          width={300}
          className="object-cover rounded-2xl w-full rotate-[9deg] md:rotate-[5deg] aspect-square md:max-w-45 lg:max-w-75 relative z-20 md:-ms-30 transition-[filter] duration-300 ease-in-out grayscale hover:grayscale-0 timeless-moments-element"
        />

        <div className="md:absolute w-full md:w-70 lg:w-85 aspect-square z-30 timeless-moments-element md:-top-15">
          <Image
            src="/images/newlyweds-walking-in-amazing-blossoming-flowers-fi-2024-09-16-08-59-12-utc_11zon.jpg"
            alt="timeless moments image"
            fill
            className="object-cover rounded-2xl rotate-[9deg] md:rotate-0 transition-[filter] duration-300 ease-in-out hover:grayscale-0 group-hover:grayscale"
          />
        </div>

        <Image
          src="/images/couple-just-married-together-on-the-majestic-agri-2025-03-18-20-58-56-utc_11zon.jpg"
          alt="timeless moments image"
          height={300}
          width={300}
          className="object-cover rounded-2xl w-full rotate-[9deg] md:rotate-[-5deg] aspect-square md:max-w-45 lg:max-w-75 md:-me-30 relative z-20 transition-[filter] duration-300 ease-in-out grayscale hover:grayscale-0 timeless-moments-element"
        />

        <Image
          src="/images/a-couple-in-love-a-guy-and-a-girl-on-a-walk-in-the-2025-01-08-22-32-48-utc-e1747808112273.jpg"
          alt="timeless moments image"
          height={260}
          width={260}
          className="object-cover rounded-2xl w-full rotate-[9deg] md:rotate-[-9deg] aspect-square timeless-moments-element md:max-w-35 lg:max-w-65 transition-[filter] duration-300 ease-in-out grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
}
