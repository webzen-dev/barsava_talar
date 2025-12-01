import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import FullWeddingPlanningSlider from "./FullWeddingPlanningSlider";

const FullWeddingPlanning = () => {
  return (
    <div className="flex gap-10 flex-col items-center">
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
            <b className="text-lg md:text-2xl">برنامه‌ریزی کامل عروسی</b>
            <p className="text-sm md:text-base text-black/60">
              برنامه‌ریزی عروسی می‌تواند طاقت‌فرسا باشد - اما لازم نیست اینطور
              باشد. خدمات کامل برنامه‌ریزی عروسی ما برای زوج‌هایی طراحی شده است
              که می‌خواهند جشنی بدون استرس و زیبا از ابتدا تا انتها برگزار شود.
              از پیدا کردن محل برگزاری تا مراسم بدرقه نهایی، ما تمام جزئیات را
              با حرفه‌ای‌گری، خلاقیت و دقت مدیریت می‌کنیم.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>1.</span>
                <span>انتخاب سالن و مشاوره رزرو</span>
              </div>
            </div>

            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>2.</span>
                <span>طراحی سناریو و دکور اختصاصی</span>
              </div>
            </div>

            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>3.</span>
                <span>برنامه‌ریزی مالی و زمان‌بندی مراسم</span>
              </div>
            </div>

            <div className="border-t-solid border-t-[1px] border-t-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>4.</span>
                <span>مدیریت مهمانان و هماهنگی دعوت‌ها</span>
              </div>
            </div>

            <div className="border-y-solid border-y-[1px] border-y-[#423a2f] w-full h-[80px] flex items-center gap-2.5 max-lg:h-[65px] max-md:h-[60px]">
              <div className="flex items-center gap-2.5 text-lg font-bold max-lg:text-base max-md:text-sm">
                <span>5.</span>
                <span>هماهنگی کامل و اجرای روز مراسم</span>
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
