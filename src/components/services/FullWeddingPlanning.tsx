import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import FullWeddingPlanningSlider from "./FullWeddingPlanningSlider";

const FullWeddingPlanning = () => {
  return (
    <div className="py-10 px-20 flex gap-10 flex-col items-center max-lg:px-5">
      {/* text box */}

      <div className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]">
        {/* line */}
        <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        <Image
          className="object-cover"
          draggable="false"
          src={"/images/flower.svg"}
          alt="flower"
          width={60}
          height={60}
        />

        <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
      </div>
      <div className="flex w-full justify-between gap-10 max-md:flex-col">
        <div className="flex flex-col min-w-[50%] gap-20 flex-1 max-lg:gap-10 max-md:w-full ">
          <div className="flex flex-col gap-5">
            <b className="text-3xl 2xl:text-4xl max-lg:text-2xl max-md:text-lg">برنامه‌ریزی کامل عروسی</b>
            <p className="text-sm 2xl:text-lg max-md:text-xs  ">
              برنامه‌ریزی عروسی می‌تواند طاقت‌فرسا باشد - اما لازم نیست اینطور
              باشد. خدمات کامل برنامه‌ریزی عروسی ما برای زوج‌هایی طراحی شده است
              که می‌خواهند جشنی بدون استرس و زیبا از ابتدا تا انتها برگزار شود.
              از پیدا کردن محل برگزاری تا مراسم بدرقه نهایی، ما تمام جزئیات را
              با حرفه‌ای‌گری، خلاقیت و دقت مدیریت می‌کنیم.
            </p>
          </div>
          <div className="flex  flex-col  w-full">
            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>1.</span>
                <span> مکان برگزاری و یافتن فروشنده</span>
              </div>
            </div>{" "}
            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>2.</span>
                <span> طراحی و خلق ایده</span>
              </div>
            </div>{" "}
            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>3.</span>
                <span>مدیریت بودجه و جدول زمانی</span>
              </div>
            </div>{" "}
            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>4.</span>
                <span>هماهنگی مهمانان و مدیریت RSVP</span>
              </div>
            </div>{" "}
            <div className="border-y-solid border-y-[1px] border-y-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>5.</span>
                <span>هماهنگی روزانه </span>
              </div>
            </div>
          </div>
          <Link
            href={"/reservation"}
            className="w-[200px] h-[35px] border-[#423a2f] border-[1px] border-solid rounded-2xl text-sm flex justify-around items-center cursor-pointer"
          >
            <span>رزرو کنید</span>

            <MdOutlineKeyboardArrowLeft className="text-lg" />
          </Link>
        </div>
        {/* image box */}
        <FullWeddingPlanningSlider />
      </div>
    </div>
  );
};

export default FullWeddingPlanning;
