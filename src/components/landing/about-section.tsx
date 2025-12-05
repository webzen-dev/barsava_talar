import Image from "next/image";

import ScrollFadeProvider from "../ScrollFadeProvider";
import AboutSectionCarousel from "./about-section-carousel";

export interface AboutDataProps {
  id: number;
  title: string;
  caption: string;
  link: string;
  src: string;
}

export default function AboutSection({ data }: { data: AboutDataProps[] }) {
  return (
    <div className="flex flex-col justify-center gap-6 items-center">
      <ScrollFadeProvider
        selector=".about-section-fade-up"
        enabledStagger={true}
        staggerTimeLine={0.8}
      />

      <div className="flex flex-col gap-2.5 text-center items-center">
        <div className="w-full h-0.5 md:max-w-[40%] relative border-1 border-[var(--brown)] mb-10 about-section-fade-up">
          <Image
            className="object-cover bg-[var(--page-background)] absolute -top-1/2 left-1/2 transform -translate-1/2 p-3"
            draggable="false"
            src="/images/flower.svg"
            alt="flower icon"
            width={72}
            height={72}
          />
        </div>

        <div className="flex flex-col items-center gap-4 about-section-fade-up">
          <b className="text-lg md:text-2xl">
            درباره بارثاوا
          </b>

          <p className="text-sm md:text-base text-black/70 max-w-9/10u md:max-w-4/5 about-section-fade-up">
            بارثاوا با تکیه بر تجربه حرفه‌ای در برگزاری جشن‌ها و مراسم‌ رسمی،
            جایگاهی قابل‌اعتماد میان برگزارکنندگان و مهمانان به دست آورده است.
            تمرکز مجموعه بر کیفیت پذیرایی، اجرای دقیق جزئیات و رضایت مهمانان
            است؛ ارزش‌هایی که بارثاوا را به انتخابی مطمئن برای عروسی‌ها، جشن‌ها
            و رویدادهای سازمانی تبدیل کرده است
          </p>
        </div>
      </div>

      <AboutSectionCarousel slides={data} />
    </div>
  );
}
