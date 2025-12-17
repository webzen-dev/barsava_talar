import ScrollFadeProvider from "../ScrollFadeProvider";
import AboutSectionCarousel from "./_about-section-carousel";
import HeaderSection from "../header-sections";

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
          position="top 50%"
          staggerTimeLine={0.8}
        />

      <div className="flex flex-col gap-2.5 text-center items-center">
        <HeaderSection className="about-section-fade-up" />

        <div className="flex flex-col items-center gap-4 about-section-fade-up">
          <b className="text-lg md:text-2xl">درباره بارثاوا</b>

          <p className="text-sm md:text-base text-black/70 max-w-9/10 md:max-w-4/5 about-section-fade-up">
            بارثاوا با تکیه بر تجربه حرفه‌ای در برگزاری جشن‌ها و مراسم‌ رسمی،
            جایگاهی قابل‌اعتماد میان برگزارکنندگان و مهمانان به دست آورده است.
            تمرکز مجموعه بر کیفیت پذیرایی، اجرای دقیق جزئیات و رضایت مهمانان
            است؛ ارزش‌هایی که بارثاوا را به انتخابی مطمئن برای عروسی‌ها، جشن‌ها
            و رویدادهای سازمانی تبدیل کرده است
          </p>
        </div>
      </div>

      <AboutSectionCarousel data={data} />
    </div>
  );
}
