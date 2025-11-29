import AboutHeroSlider from "./AboutHeroSlider";

export default function AboutHeroSection() {
  return (
    <div className="pt-[80px] flex flex-col p-10 w-full min-h-[100vh] gap-10 justify-between max-md:p-5 max-md:pt-[80px] px-10">
      <div className="flex flex-col gap-5">
        <b className="text-4xl max-md:text-2xl">تبدیل داستان عشق شما به</b>
        <b className="text-3xl max-md:text-lg">لحظات ماندگار عروسی</b>
        <div className="flex justify-between gap-10 text-base hero-text-box max-sm:flex-col max-sm:text-sm">
          <b>
            بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
            خوشبختی ابدی خود لذت می‌برید.
          </b>
        </div>
      </div>

      <AboutHeroSlider />
    </div>
  );
}
