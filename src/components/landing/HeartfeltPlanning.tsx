"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeartfeltPlanning = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const headerEls = headerRef.current.children;
        gsap.from(headerEls, {
          opacity: 0,
          y: 40,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        });
      }

      if (boxesRef.current.length) {
        gsap.from(boxesRef.current, {
          opacity: 0,
          y: 60,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boxesRef.current[0],
            start: "top 80%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const boxes = [
    {
      icon: "/images/Invitation.png",
      title: "اجرای بی‌نقص",
      desc: "هر مراسم با دقت، نظم و هماهنگی کامل برگزار می‌شود تا تجربه‌ای فراموش‌نشدنی رقم بخورد.",
    },
    {
      icon: "/images/Heart-Love-Romance-Wedding.png",
      title: "تیم مورد اعتماد",
      desc: "تیمی حرفه‌ای و باتجربه در کنار شماست تا با آرامش خاطر جشن‌تان را برگزار کنید.",
    },
    {
      icon: "/images/ring.png",
      title: "تجربه سفارشی",
      desc: "تمام جزئیات مراسم براساس سلیقه و رویاهای شما طراحی می‌شود تا خاص‌ترین روزتان خلق شود.",
    },
    {
      icon: "/images/Heand-Love-Heart.png",
      title: "لمس خلاقانه",
      desc: "با طراحی‌های منحصربه‌فرد و ایده‌های نو، هر بخش از جشن شما جلوه‌ای خاص می‌یابد.",
    },
  ];

  return (
    <div className="p-10 flex flex-col items-center w-full max-md:p-5">
      <div ref={headerRef} className="flex flex-col items-center w-full">
        <div className="flex items-center gap-2.5 w-[40%] max-md:w-[90%]">
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          <Image
            className="object-cover"
            draggable={false}
            src={"/images/flower.svg"}
            alt="flower"
            width={60}
            height={60}
          />
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        </div>
        <b className="text-4xl pb-10 pt-5 max-sm:text-lg">
          برنامه‌ریزی صمیمانه
        </b>
      </div>

      <div className="flex h-[300px] w-full justify-between items-center gap-10 max-lg:flex-wrap max-lg:h-auto max-md:flex-col max-md:gap-5">
        {boxes.map((box, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) boxesRef.current[i] = el;
            }}
            className={`w-[calc(25%-20px)] h-full border-1 border-solid border-[#dec39a] rounded-2xl flex p-5 relative max-lg:h-[300px] max-lg:min-w-[calc(50%-20px)] max-md:w-full
            text-[#423A2F]
            `}
          >
            <div className="absolute top-0 left-0 bottom-0 right-0">
              <Image
                src={"/images/BG-Card.png"}
                fill
                alt="BG Card"
                className={`object-cover opacity-30`}
              />
              <div className="z-20 relative flex flex-col items-center px-2.5 justify-between w-full h-full py-5 text-center">
                <Image
                  src={box.icon}
                  height={80}
                  width={80}
                  alt="icon"
                  className="object-cover"
                />
                <b className="text-3xl max-sm:text-lg">{box.title}</b>
                <span className="max-md:text-base">{box.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeartfeltPlanning;
