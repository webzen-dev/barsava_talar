import ScrollFadeProvider from "../ScrollFadeProvider";
import AboutHeroCarousel from "./_hero-carousel";

export default function AboutHeroSection() {
  return (
    <div className="flex flex-col w-full gap-10 justify-between">
      <ScrollFadeProvider
        selector=".about-hero"
        enableScrollTrigger={false}
        enabledStagger={true}
      />
      <div className="flex flex-col gap-2">
        <b className="text-2xl md:text-3xl about-hero">
          تبدیل داستان عشق شما به
        </b>
        <b className="text-lg md:text-3xl about-hero">لحظات ماندگار عروسی</b>
        <div className="flex justify-between gap-10 text-sm flex-col sm:flex-row md:text-base about-hero">
          <b className="about-hero">
            بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
            خوشبختی ابدی خود لذت می‌برید.
          </b>
        </div>
      </div>
      <div className="about-hero">
        <AboutHeroCarousel />
      </div>
    </div>
  );
}
