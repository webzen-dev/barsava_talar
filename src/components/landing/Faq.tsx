"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FAQ {
  question: string;
  answer: string;
}

const faq: FAQ[] = [
  {
    question: "ظرفیت تالار چقدر است؟",
    answer: "مجموعه با ظرفیت حداکثری ۵۰۰ نفر، امکان پذیرایی دارد.",
  },
  {
    question: "اطلاع از تاریخ برگزاری؟",
    answer:
      "جهت استعلام تاریخ برگزاری مراسم، لطفاً با شماره‌های درج‌شده تماس حاصل فرمایید.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-[90px] flex-col flex p-10 px-[100px] text-[#423A2F]  max-lg:px-[50px] max-sm:p-5">
      <div className="flex flex-col gap-2.5 items-center text-center relative z-20 pb-10">
        <div className="flex items-center gap-2.5 w-[40%] max-md:w-[90%]">
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
        <b className="text-4xl font-bold">سوالات متداول</b>
      </div>

      <div className="flex flex-col gap-5">
        {faq.map((f, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className={`flex flex-col p-4 rounded-2xl border  border-[#423a2f] cursor-pointer transition duration-300 ease-in-out hover:shadow-lg  max-sm:text-sm ${
                isOpen ? "gap-2.5" : "gap-0"
              }`}
            >
              <div className="flex items-center w-full gap-5">
                <b className="text-lg max-sm:text-base">{index + 1}.</b>
                <span className="flex-1">{f.question}</span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out 
        ${isOpen ? "max-h-40 opacity-100 p-2" : "max-h-0 opacity-0 p-0"}
        text-base text-[#8f7f68] max-sm:text-sm`}
              >
                {f.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
