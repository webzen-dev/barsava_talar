import Image from "next/image";
import Link from "next/link";

export default function ServicesGridBox() {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <b className="text-3xl">خدمات بارثاوا</b>

      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-5
        gap-5 
        w-full
      "
      >
        <div className="lg:col-span-3 lg:row-span-2 p-5 md:p-10 flex flex-col gap-5 border-black/20 border-2 rounded-lg">
          <h3 className="font-bold text-lg md text-lg:md:text-2xl">برنامه‌ریزی دقیق مراسم</h3>
          <p className="text-black/70 text-sm md text-sm:md:text-base flex-1">
            همه جزئیات جشن شما با دقت چیده می‌شود تا از لحظه ورود مهمان‌ها تا
            پایان مراسم، تجربه‌ای منظم، روان و بدون استرس داشته باشید.
          </p>
          <Link
            href="/about"
            className="w-fit px-4 py-2 bg-[#dec39a] text-white rounded-lg text-sm"
          >
            بیشتر بدانید
          </Link>
        </div>

        <div className="relative rounded-lg overflow-hidden aspect-square md:aspect-auto lg:col-start-4 lg:col-span-2 lg:row-span-6">
          <Image
            src={"/images/DSC07772.jpg"}
            alt="services grid box image"
            fill
            className="object-cover"
          />
        </div>

<div className="relative rounded-lg overflow-hidden aspect-square md:aspect-auto md:row-span-1 lg:row-start-3 lg:row-span-4
  order-2 md:order-1">
  <Image
    src={"/images/640A0972.jpg"}
    alt="services grid box image"
    fill
    className="object-cover"
  />
</div>

<div className="p-5 md:p-10 flex flex-col gap-5 border-black/20 border-2 rounded-lg lg:row-start-3 lg:col-span-2 lg:row-span-2
  order-1 md:order-2">
  <h3 className="font-bold text-lg md:text-2xl">دیزاین و دکور اختصاصی</h3>
  <p className="text-black/70 text-sm md:text-base flex-1">
    فضا با توجه به سلیقه شما طراحی می‌شود تا هویت مراسم کاملا مطابق
    حال‌وهوای مورد نظرتان باشد.
  </p>
  <Link
    href="/image-gallery"
    className="w-fit px-4 py-2 bg-[#dec39a] text-white rounded-lg text-sm"
  >
    مشاهده نمونه‌کارها
  </Link>
</div>


        <div className="p-5 md:p-10 flex flex-col gap-5 border-black/20 border-2 rounded-lg md:col-span-1 lg:col-start-2 lg:row-start-5 lg:col-span-2 lg:row-span-2">
          <h3 className="font-bold text-lg md:text-2xl">مدیریت مهمان‌ها</h3>
          <p className="text-black/70 text-sm md:text-base flex-1">
            حرکت، جای‌نشینی و هماهنگی مهمان‌ها به شکلی حرفه‌ای مدیریت می‌شود تا
            فضا روان و بدون ازدحام پیش برود.
          </p>
          <Link
            href="/about"
            className="w-fit px-4 py-2 bg-[#dec39a] text-white rounded-lg text-sm"
          >
            بررسی جزئیات
          </Link>
        </div>

        <div className="relative rounded-lg overflow-hidden aspect-square md:aspect-auto lg:row-start-7 lg:col-span-2 lg:row-span-2">
          <Image
            src={"/images/DSC07655.jpg"}
            alt="services grid box image"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5 md:p-10 flex flex-col gap-5 border-black/20 border-2 rounded-lg col-span-full  order-2 lg:row-start-7 lg:col-span-3 lg:row-span-2">
          <h3 className="font-bold text-lg md:text-2xl">اجرای بی‌وقفه مراسم</h3>
          <p className="text-black/70 text-sm md:text-base flex-1">
            نور، صدا، زمان‌بندی و هماهنگی پشت‌صحنه با یک تیم متخصص کنترل می‌شود
            تا هیچ لحظه‌ای از مراسم از ریتم طبیعی خودش خارج نشود. تمام اجزای جشن
            به صورت زنده رصد و مدیریت می‌شوند؛ از ورود مهمان‌ها تا اجراهای اصلی،
            از هماهنگی با گروه موزیک تا آماده‌سازی صحنه برای بخش‌های مختلف. تیم
            ما در جریان تمام جزئیات است و هر اتفاق احتمالی به سرعت و بدون جلب
            توجه مدیریت می‌شود، تا شما و مهمان‌ها فقط تجربه‌ای روان، لوکس و بدون
            نگرانی داشته باشید.
          </p>
          <Link
            href="/reservation"
            className="w-fit px-4 py-2 bg-[#dec39a] text-white rounded-lg text-sm"
          >
            رزرو مراسم
          </Link>
        </div>
      </div>
    </div>
  );
}
