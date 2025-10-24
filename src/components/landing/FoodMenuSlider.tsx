"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const menuData = [
  {
    title: "منو پرسی 2",
    image:
      "/images/White_Black_Minimalist_Floral_Illustration_Wedding_Menu-removebg-preview.png",
    mainFood: ["چلو گوشت"],
    desserts: ["ژله (2 نوع)", "کرم کارامل", "موس", "تیرامیسو"],
    sections: [
      { title: "نوشیدنی", items: ["دلستر", "دوغ", "نوشابه"] },
      {
        title: "پذیرایی عصرانه",
        items: [
          "میوه ۵ نوع (فصل)",
          "شیرینی ۴ نوع",
          "کافه گلاسه همراه با آبمیوه",
        ],
      },
      {
        title: "چایخانه سنتی",
        items: ["چای", "کافه میکس", "دمنوش های متنوع", "تنقلات کامل"],
      },
      { title: "انواع سالاد", items: ["فصل", "ماکارونی"] },
    ],
    ceremonies: [
      "سفره عقد با گل آرایی و شمع آرایی گل آرایی میز روی میز سمت بانوان کیک مراسم",
      "پخش کیلیپ با دستگاه ویدیو پروژه فول اچ دی",
      "دی جی دو طرف",
      "همراه با نور افشانی آتش بازی گرم در ۲ مرحله گل آرایی ماشین و دسته گل",
    ],
  },

  {
    title: "منوی پرسی ۱",
    image:
      "/images/White_Black_Minimalist_Floral_Illustration_Wedding_Menu-removebg-preview.png",
    mainFood: ["چلو ماهیچه"],
    desserts: ["ژله (۲ نوع انتخابی)", "کرم کارامل", "موس", "تیرامیسو"],
    sections: [
      {
        title: "انواع سالاد",
        items: ["فصل", "ماکارونی"],
      },
      {
        title: "نوشیدنی",
        items: ["نوشابه", "دلستر", "دوغ"],
      },
      {
        title: "پذیرایی عصرانه",
        items: [
          "میوه ۵ نوع (فصل)",
          "شیرینی ۴ نوع",
          "کافه گلاسه همراه با آبمیوه",
        ],
      },
      {
        title: "چایخانه سنتی",
        items: ["چای", "کافه میکس", "دمنوش‌های متنوع", "تنقلات کامل"],
      },
    ],
    ceremonies: [
      "سفره عقد با گل‌آرایی و شمع‌آرایی",
      "گل‌آرایی میز مهمانان سمت بانوان",
      "کیک مراسم",
      "پخش کلیپ با دستگاه ویدیو پروجکشن فول اچ دی",
      "دی‌جی دو طرف همراه با نورافشانی",
      "آتش‌بازی گرم در ۲ مرحله",
      "گل‌آرایی ماشین و دسته گل",
    ],
  },
  {
    title: "منوی پرسی ۳",
    image:
      "/images/White_Black_Minimalist_Floral_Illustration_Wedding_Menu-removebg-preview.png",
    mainFood: [
      "برنج زعفرانی باقالی پلو بدون گوشت",
      "جوجه بی استخوان یا مرغ درسته",
      "کباب کوبیده یا رولت گوشت",
      "قیمه",
      "سالاد فصل",
    ],
    desserts: ["ژله (۲ نوع)", "کرم کارامل", "ترکیبی"],
    sections: [
      {
        title: "نوشیدنی",
        items: ["نوشابه", "دوغ"],
      },
      {
        title: "پذیرایی عصرانه",
        items: ["میوه ۴ نوع (فصل)", "شیرینی ۳ نوع", "بستنی سنتی یا کافه گلاسه"],
      },
      {
        title: "چایخانه سنتی",
        items: ["کافه میکس", "دمنوش‌های متنوع", "تنقلات کامل"],
      },
    ],
    ceremonies: [
      "سفره عقد با گل‌آرایی و شمع‌آرایی",
      "کیک مراسم",
      "پخش کلیپ با دستگاه ویدیو پروجکشن فول اچ دی",
      "دی جی دو طرف همراه با نورافشانی",
      "آتش‌بازی گرم در ۲ مرحله",
    ],
  },
  {
    title: "منوی سلف ۳",
    image:
      "/images/White_Black_Minimalist_Floral_Illustration_Wedding_Menu-removebg-preview.png",
    mainFood: [
      "برنج سفید زعفرانی",
      "باقالا پلو با گوشت",
      "شیرین پلو با مرغ",
      "جوجه کباب با استخوان و بدون استخوان",
      "ژیگو",
      "کباب لقمه",
      "ته‌چین مرغ",
      "خورشت قیمه",
      "خورشت فسنجان یا قرمه سبزی",
    ],
    desserts: ["دسر متنوع"],
    sections: [
      {
        title: "نوشیدنی",
        items: ["نوشابه", "دلستر", "دوغ"],
      },
      {
        title: "انواع سالاد",
        items: [
          "فصل",
          "کالباس",
          "ماکارونی",
          "شیرازی (روسی)",
          "اردور",
          "فینگر فود",
        ],
      },
      {
        title: "پذیرایی عصرانه",
        items: ["میوه ۶ نوع", "شیرینی ۵ نوع", "کافه گلاسه همراه با آبمیوه"],
      },
      {
        title: "چایخانه سنتی",
        items: ["چای", "کافه میکس", "دمنوش‌های متنوع", "تنقلات کامل"],
      },
    ],
    ceremonies: [
      "سفره عقد با گل‌آرایی و شمع‌آرایی",
      "گل‌آرایی ورودی",
      "گل‌آرایی میز مهمانان سمت آقایان و بانوان",
      "کیک مراسم",
      "دی‌جی دو طرف همراه با نورافشانی",
      "پخش کلیپ",
      "آتش‌بازی گرم در ۲ مرحله",
      "گل‌آرایی ماشین و دسته گل",
    ],
  },

  {
    title: "منوی سلف ۴",
    image:
      "/images/White_Black_Minimalist_Floral_Illustration_Wedding_Menu-removebg-preview.png",

    mainFood: [
      "برنج سفید زعفرانی",
      "باقالا پلو با گوشت",
      "شیرین پلو با مرغ",
      "جوجه کباب با استخوان و بدون استخوان",
      "رولت گوشت",
      "کباب لقمه",
      "خورشت قیمه",
      "خورشت فسنجان یا قرمه سبزی",
    ],
    desserts: ["دسر متنوع"],
    sections: [
      {
        title: "نوشیدنی",
        items: ["نوشابه", "دلستر", "دوغ"],
      },
      {
        title: "انواع سالاد",
        items: ["فصل", "کالباس", "ماکارونی", "اردور", "فینگر فود"],
      },
      {
        title: "پذیرایی عصرانه",
        items: ["میوه ۵ نوع", "شیرینی ۵ نوع", "کافه گلاسه همراه با آبمیوه"],
      },
      {
        title: "چایخانه سنتی",
        items: ["چای", "کافه میکس", "دمنوش‌های متنوع", "تنقلات کامل"],
      },
    ],
    ceremonies: [
      "سفره عقد با گل‌آرایی و شمع‌آرایی",
      "گل‌آرایی میز مهمانان سمت بانوان",
      "کیک مراسم",
      "دی‌جی دو طرف همراه با نورافشانی",
      "پخش کلیپ",
      "آتش‌بازی گرم در ۲ مرحله",
      "گل‌آرایی ماشین و دسته گل",
    ],
  },
];

const FoodMenuSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    drag: true,
    renderMode: "performance",
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 1080px)": { slides: { perView: 2, spacing: 15 } },
      "(max-width: 767px)": { slides: { perView: 1, spacing: 10 } },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full">
      {menuData.map((menu, index) => (
        <div
          key={index}
          className="keen-slider__slide bg-[#8b7d70] rounded-2xl shadow-lg gap-10 flex h-auto flex-col items-center rounded-t-full p-10 text-white select-none cursor-grab"
        >
          <b className="text-lg">{menu.title}</b>
          <div className="w-[70%] h-[2px] bg-white rounded-full"></div>

          <div className="flex justify-between h-auto w-full flex-1 max-sm:flex-col">
            <div className="flex flex-col gap-5 w-1/2 max-md:w-full max-sm:flex-col-reverse">
              <Image
                src={menu.image}
                alt="menu picture"
                width={132}
                height={297}
                draggable="false"
                className="object-cover max-sm:m-auto"
              />

              <div className="flex gap-2.5 flex-col">
                <b className="text-lg">غذای اصلی</b>
                {menu.mainFood.map((food, i) => (
                  <div key={i} className="text-sm text-menu-gray">
                    {food}
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5 flex-col">
                <b className="text-lg">دسر</b>
                {menu.desserts.map((dessert, i) => (
                  <div key={i} className="text-sm text-menu-gray">
                    {dessert}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 w-1/2 max-sm:w-full">
              {menu.sections.map((section, i) => (
                <div key={i} className="flex gap-2.5 flex-col">
                  <b className="text-lg">{section.title}</b>
                  {section.items.map((item, j) => (
                    <div key={j} className="text-sm text-menu-gray">
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2.5 flex-col w-full">
            <b className="text-lg">تشریفات</b>
            <div className="flex flex-col">
              {menu.ceremonies.map((ceremony, i) => (
                <div key={i} className="text-sm flex-1/2 text-menu-gray ">
                  {ceremony}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodMenuSlider;
