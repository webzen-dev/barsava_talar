import { FaStar } from "react-icons/fa6";
import AboutHeroSlider from "./AboutHeroSlider";

const AboutHeroSection = () => {
  return (
    <div
      className="pt-[80px] flex flex-col p-10 w-full h-[100vh]  gap-10  justify-between max-md:p-5 max-md:pt-[80px] px-10"
    >
      <div className="flex-1"></div>
      {/* text box */}
      <div className="flex flex-col  gap-5">
        <b className="text-4xl max-md:text-2xl">تبدیل داستان عشق شما به</b>
        <b className="text-3xl max-md:text-lg">لحظات ماندگار عروسی</b>
        <div className="flex justify-between gap-10 text-base hero-text-box max-sm:flex-col max-sm:text-sm">
          <b >
            بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
            خوشبختی ابدی خود لذت می‌برید.
          </b>
          <div className="flex  gap-1.5 flex-col text-sm">
            <div className="flex text-[#698371] gap-1.5 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>۴.۹ / ۱۵۰۰ نقد</span>
          </div>
        </div>{" "}
      </div>
      {/* image box */}
      <AboutHeroSlider />
    </div>
  );
};

export default AboutHeroSection;
