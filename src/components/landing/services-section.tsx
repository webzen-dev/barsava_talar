import HeaderSections from "../header-sections";

export default function ServicesSection() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col items-center text-center gap-4">
        <HeaderSections />
        <b className="text-lg md:text-2xl">خدمات ما</b>
        <p className="text-sm md:text-base md:max-w-4/5 text-black/70">
          ارائه خدمات تخصصی برای برگزاری عروسی‌ها و جشن‌های به‌یادماندنی، با
          برنامه‌ریزی دقیق و اجرای هماهنگ. همچنین امکان میزبانی ایونت‌ها و
          سمینار با همان کیفیت و نظم همیشگی در تالار مجلل بارثاوا.
        </p>
      </div>
      {/* services list */}
      <div className="w-full bg-[var(--brown)] h-screen rounded-2xl">
        <div className="flex h-full w-full p-10">
            <div className="flex-[0_0_30%] aspect-square border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
}
