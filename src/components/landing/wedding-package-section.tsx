  import Image from "next/image";
  import HeaderSections from "../header-sections";
  import clsx from "clsx";
  import ScrollFadeProvider from "../ScrollFadeProvider";

  export default function WeddingPackage() {
    return (
      <div className="flex flex-col items-center w-full gap-6">
        <ScrollFadeProvider
          selector=".wedding-package"
          enabledStagger={true}
          position="top 50%"
          staggerTimeLine={0.3}
        />
        <div className="flex flex-col gap-2.5 text-center w-full items-center">
          <HeaderSections className="wedding-package" />

          <b className="text-lg md:text-2xl wedding-package">پکیج عروسی</b>

          <b className="text-sm md:text-base text-black/70 w-9/10 md:w-4/5 wedding-package">
            مجموعه‌ای از پکیج‌های اختصاصی که برای جشنی باشکوه، منظم و هماهنگ با
            سلیقه شما طراحی شده‌اند. هر پکیج شامل خدمات حرفه‌ای باغ تالار بوده و
            به شما امکان می‌دهد مراسم خود را آنلاین انتخاب و رزرو کنید.
          </b>
        </div>

        <div className="flex justify-between items-stretch gap-5 w-full flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
          <div
            className={clsx(
              "flex flex-col gap-5 p-5 rounded-2xl cursor-pointer wedding-package",
              "w-full md:w-[calc(40%-20px)] md:min-w-[calc(40%-20px)] lg:min-w-auto lg:w-1/4",
              "border-2 border-solid border-[var(--brown)] justify-between"
            )}
          >
            <Image
              src={"/images/Flowers-Bouquet.png"}
              height={60}
              width={60}
              alt="box icon"
              className="object-cover"
            />
            <b className="text-lg md:text-2xl text-[var(--brown)] flex items-center">
              سابقه درخشان تالار بارثاوا
            </b>
            <div className="text-black/70 text-sm md:text-base">
              با ۲۵ سال سابقه برگزاری مراسم، در کنار شما هستیم.
            </div>
          </div>

          <div
            className={clsx(
              "h-full flex-1 rounded-2xl flex items-end md:p-5 gap-5 cursor-pointer relative group"
              ,'wedding-package'
            )}
          >
            <Image
              src={"/images/DSC07655.webp"}
              fill
              alt="image"
              className="object-cover rounded-2xl absolute top-0 left-0 right-0 bottom-0 z-20"
            />

            <div
              className={clsx(
                "flex flex-col justify-between w-full h-8/10 gap-2.5",
                "backdrop-blur-sm md:bg-[var(--page-background)] rounded-2xl relative z-20 p-5",
                "opacity-0 max-md:opacity-100",
                "group-hover:opacity-100",
                "transition-opacity duration-500 ease-out"
              )}
            >
              <Image
                src={"/images/signature-50.png"}
                height={60}
                width={60}
                alt="box icon"
                className="object-cover"
              />

              <b className="text-lg md:text-2xl text-[var(--page-background)] md:text-[var(--brown)] flex items-center">
                بسته ویژه
              </b>

              <div className="text-[var(--page-background)]/90  md:text-[var(--brown)]/70 text-sm md:text-base">
                یک تجربه کامل برنامه‌ریزی از ابتدا تا انتها. شامل انتخاب محل
                برگزاری، مدیریت فروشندگان، طراحی مفهومی و هماهنگی کامل روز عروسی.
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col gap-5 p-5 rounded-2xl cursor-pointer",
              "w-full lg:min-w-auto lg:w-1/4 wedding-package",
              "border-2 border-solid border-[var(--brown)] justify-between"
            )}
          >
            <Image
              src={"/images/Group-2.png"}
              height={60}
              width={60}
              alt="box icon"
              className="object-cover"
            />

            <b className="text-lg md:text-2xl text-[var(--brown)] flex items-center">
              فضای منحصر به فرد
            </b>
            
            <div className="text-black/70 text-sm md:text-base">
              مجموعه با ظرفیت ۵۰۰ نفر، دارای سالن‌های مرتفع و بدون ستون است.
            </div>
          </div>
        </div>
      </div>
    );
  }
