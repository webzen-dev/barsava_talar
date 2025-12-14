import Image from "next/image";
import Link from "next/link";

import { LuCalendarHeart } from "react-icons/lu";
import { IoFlowerOutline, IoLogoInstagram } from "react-icons/io5";
import { PiCampfireLight, PiTelegramLogoLight } from "react-icons/pi";

import ScrollFadeProvider from "../ScrollFadeProvider";

const data = [
  {
    id: 1,
    title: "گل‌آرایی اختصاصی",
    icon: <IoFlowerOutline className="h-10 w-10 text-[var(--gold)]" />,
    caption:
      "طراحی گل‌آرایی متناسب با سبک مراسم، سلیقه شما و فضاسازی لوکس برای ثبت لحظه‌های ماندگار.",
  },
  {
    id: 2,
    title: "تدارک آتش‌بازی",
    icon: <PiCampfireLight className="h-10 w-10 text-[var(--gold)]" />,
    caption:
      "اجرای آتش‌بازی ایمن و حرفه‌ای برای خلق اوج هیجان و پایان‌بندی باشکوه مراسم.",
  },

  {
    id: 3,
    title: "مشاوره و برنامه‌ریزی",
    icon: <LuCalendarHeart className="h-10 w-10 text-[var(--gold)]" />,
    caption:
      "همراهی کامل از ایده‌پردازی تا اجرا برای مدیریت دقیق، آرامش شما و اجرای بی‌نقص مراسم.",
  },
];

export default function OtherServices() {
  return (
    <div className="bg-[var(--dark-background)]">
      <ScrollFadeProvider selector=".other-services" />
      
      <div className="container mx-auto px-5 md:px-10 py-10 flex flex-col gap-5 md:gap-10 text-[var(--page-background)]">
        <div className="w-full flex gap-5 md:gap-10 h-auto lg:h-112 flex-col lg:flex-row">
          <div className="flex-1 h-full bg-[var(--page-background)]/20 rounded-2xl flex flex-col gap-5 p-5 other-services">
            <Image
              src={"/images/barsava logo(gold).PNG"}
              alt="logo"
              width={86}
              height={93.4}
              className="object-cover"
            />

            <b className="text-lg md:text-3xl">
              خدمات تکمیلی تالار برای خلق مراسمی متفاوت، شخصی‌سازی‌شده و
              بی‌دغدغه از تا اجرا
            </b>

            <span className="text-[var(--page-background)]/80 xl:max-w-4/6 text-sm md:text-base">
              اینجاست که جزئیات بازی رو عوض می‌کنن؛ از ایده‌پردازی تا اجرا،
              همه‌چیز دقیق، هماهنگ و مطابق سلیقه شما طراحی میشه تا مراسم فقط
              «برگزار» نشه، موندگار بشه ✨
            </span>

            <div className="flex-1 flex items-end gap-2">
              <a
                href="https://instagram.com/talar__barsava"
                className="bg-[var(--dark-background)]/80 text-[var(--gold)] p-1.5 rounded-lg"
                target="_blank"
              >
                <IoLogoInstagram className="w-8 h-8" />
              </a>

              <a
                href="https://t.me/seelenz"
                className="bg-[var(--dark-background)]/80 text-[var(--gold)] p-1.5 rounded-lg"
                target="_blank"
              >
                <PiTelegramLogoLight className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="h-full aspect-2/1 lg:aspect-square relative other-services">
            <Image
              src={"/images/other-images/other-2.webp"}
              alt="services image"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="w-full flex gap-5 md:gap-10 items-stretch flex-col lg:flex-row">
          <div className="flex items-stretch gap-5 md:gap-10 flex-col md:flex-row flex-4/6">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex-1/5 bg-[var(--page-background)]/5 rounded-2xl flex flex-col gap-4 p-4 other-services"
              >
                {item.icon}
                <b className="md:text-lg">{item.title}</b>
                <p className="text-[var(--page-background)]/80 text-sm md:text-base">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-2/6 bg-[var(--page-background)]/5 rounded-2xl flex flex-col gap-4 p-4 other-services">
            <b className="md:text-lg">رزرو آنلاین مراسم</b>

            <p className="text-[var(--page-background)]/80 text-sm md:text-base">
              بدون تماس و مراجعه حضوری، تاریخ مراسمت رو آنلاین انتخاب کن، جزئیات
              رو ثبت کن و با خیال راحت رزروت رو نهایی کن؛ سریع، شفاف و همیشه در
              دسترس 📅✨
            </p>

            <Link
              href="/reservation"
              className="text-[var(--page-background)] bg-[var(--gold)]/50 w-36 py-2 rounded-lg text-sm cursor-pointer flex items-center justify-center"
            >
              رزرو کنید !
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
