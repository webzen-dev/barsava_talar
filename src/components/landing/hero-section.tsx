import ScrollFadeProvider from "../ScrollFadeProvider";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-auto w-full flex flex-col gap-5 justify-between min-h-screen">
      <ScrollFadeProvider
        selector=".fade-up"
        duration={0.8}
        position="top -100%"
        enableScrollTrigger={false}
        enabledStagger={true}
      />

      <div className="flex items-center relative">
        <Image
          src="/images/demo/demo (1).jpg"
          width={62}
          height={62}
          loading="lazy"
          alt="عروس و داماد خوشحال"
          className="object-cover rounded-full fade-up"
        />

        <Image
          src="/images/demo/demo (2).jpg"
          width={62}
          height={62}
          loading="lazy"
          alt="عروس و داماد در لحظه عاشقانه"
          className="object-cover rounded-full absolute right-13 z-10 fade-up"
        />

        <Image
          src="/images/demo/demo (3).jpg"
          width={62}
          height={62}
          loading="lazy"
          alt="عروس و داماد در حال خنده"
          className="object-cover rounded-full absolute right-25 z-20 fade-up"
        />
      </div>

      <div className="flex flex-col">
        <b className="text-base md:text-2xl fade-up">
          از عشق شما الهام می‌گیریم،
        </b>

        <b className="text-base md:text-2xl fade-up">
          و خاطراتی می‌سازیم که هیچ‌گاه رنگ کهنگی نمی‌گیرند
        </b>

        <p className="text-sm md:text-lg text-black/70 pt-2 fade-up">
          بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
          خوشبختی ابدی خود لذت می‌برید.
        </p>
      </div>

      <div className="flex-1 w-full relative aspect-2/3 md:aspect-2/1 fade-up">
        <Image
          src={"/images/hero-image.webp"}
          alt="hero image"
          fill
          className="object-cover rounded-2xl"
        />
        <svg
          className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-30"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height="50px"
          width="200px"
          transform="rotate(0) scale(1, 1)"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
            fill="#f7f1ea"
            fillOpacity="1"
          ></path>
        </svg>
        <svg
          className="absolute top-0 left-[50%] transform translate-x-[-50%] z-30 rotate-[180deg]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height="50px"
          width="200px"
          transform="rotate(0) scale(1, 1)"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
            fill="#f7f1ea"
            fillOpacity="1"
          ></path>
        </svg>
      </div>
    </div>
  );
}
