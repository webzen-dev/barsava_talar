import Image from "next/image";
import ScrollFadeProvider from "../ScrollFadeProvider";

export default function DescriptionBox() {
  return (
    <div className="flex flex-col md:flex-col-reverse gap-4 md:text-center md:items-center px-4 rounded-sm py-12 border-[rgba(0,0,0,0.2)] border-2 relative">
      <ScrollFadeProvider selector=".about-el-fade-up" position="top 40%" />

      <div className="flex flex-col gap-5 text-center items-center">
        <b className="text-xl sm:text-2xl about-el-fade-up">درباره بارثاوا</b>
        <b className="text-base text-black/70 sm:text-base about-el-fade-up">
          بارثاوا با الهام از زیبایی لحظات ناب، تجربه‌ای منحصر به فرد از عشق و
          شادی خلق می‌کند. ما باور داریم که هر جشن باید با ظرافت و جزئیاتی ویژه،
          داستان هر زوج را به یاد ماندنی کند.
        </b>
      </div>
      <Image
        className="object-cover absolute -top-[30px] left-1/2 transform -translate-x-1/2 bg-[var(--page-background)] about-el-fade-up"
        draggable="false"
        src="/images/flower.svg"
        alt="flower"
        width={60}
        height={60}
      />
    </div>
  );
}
