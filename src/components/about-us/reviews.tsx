"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

// export const comments = [
//   {
//     id: 1,
//     name: "محمد رضایی",
//     title: "بارثاوا بهترینه!",
//     comment:
//       "جشنمون دقیقا همون vibesی شد که می‌خواستیم. همه چیز تمیز، مینیمال و خیلی شیک ✨🎉",
//   },
//   {
//     id: 2,
//     name: "الهه مرادی",
//     title: "واقعا متفاوت بود!",
//     comment:
//       "تمام جزئیات با وسواس طراحی شده بود. حس کردیم همه چیز داره برای ما اجرا میشه 💐",
//   },
//   {
//     id: 3,
//     name: "سینا کریمی",
//     title: "پیشنهاد می‌کنم!",
//     comment:
//       "مراسم بدون استرس و فوق‌العاده زیبا بود. تیم خیلی حرفه‌ای عمل کردن 😎",
//   },
//   {
//     id: 4,
//     name: "هانیه نیک‌پور",
//     title: "فراتر از انتظار!",
//     comment: "دکور، موزیک، نظم... همه چیز عالی بود. حس کردیم تو فیلمیم 🎬",
//   },
//   {
//     id: 5,
//     name: "پارمیس سادات",
//     title: "بی‌نقص و آروم!",
//     comment: "از لحظه ورود فهمیدیم همه چیز تحت کنترله. واقعا آرامش‌بخش بود ☁️",
//   },
//   {
//     id: 6,
//     name: "آرین باقری",
//     title: "واقعا حرفه‌ای!",
//     comment:
//       "تیم اجرا انگار دقیقا می‌دونستن چی می‌خوایم. همه چیز دقیق انجام شد 🔥",
//   },
//   {
//     id: 7,
//     name: "پرنیا احمدی",
//     title: "دکور فوق‌العاده!",
//     comment:
//       "چیدمان گل و نورها انقدر قشنگ بود که همه مهمونا داشتن عکس می‌گرفتن 📸",
//   },
//   {
//     id: 8,
//     name: "یاسین شریفی",
//     title: "خاطره‌انگیز!",
//     comment:
//       "یکی از بهترین شب‌های زندگیمون شد. فضای مراسم فوق‌العاده شاعرانه بود 🌙",
//   },
// ];
export interface CommentType {
  id: number;
  fullName: string;
  title: string;
  message: string;
}

export default function Reviews() {
  const [emblaRef] = useEmblaCarousel(
    {
      direction: "rtl",
      loop: true,
      align: "start",
      breakpoints: {
        "(max-width: 768px)": { align: "center" },
      },
    },
    [
      Autoplay({
        delay: 1500,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );
  const [comments, setComments] = useState<CommentType[]>([]);

  async function GetComments() {
    try {
      const res = await axios.get("/api/comment/");
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    GetComments();
  }, [comments]);

  return (
    <div className="w-full flex flex-col gap-10 relative">
      <b className="text-2xl text-center">نظرات کاربران درباره بارثاوا</b>
      <div className="overflow-hidden pb-10 h-90" ref={emblaRef}>
        <div className="flex h-full">
          {comments.map((coment) => (
            <div
              key={coment.id}
              className="flex-[0_0_70%] md:flex-[0_0_33%] lg:flex-[0_0_24%] h-full bg-[rgba(255,255,255,0.3)] shadow-lg  shadow-[rgba(0,0,0,0.1)] mx-2 p-6 select-none rounded-2xl"
            >
              <div className="w-full h-full flex flex-col gap-5 relative">
                <Image
                  src="/images/icons8-bride-and-groom-50.png"
                  height={50}
                  width={50}
                  alt="bride and groom"
                />

                <b className="text-xl">{coment.title}</b>

                <span className="text-[rgba(0,0,0,0.6)] flex-1">
                  {coment.message}
                </span>

                <div className="flex gap-2 text-[rgba(0,0,0,0.6)]">
                  <IoPersonCircleOutline className="h-7 w-7" />
                  <span className="font-bold text-lg">{coment.fullName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
