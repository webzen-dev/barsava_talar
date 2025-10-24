"use  client";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";
// import profilePic from "../../../public/images/DSC04795.jpg";
const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".profile-img",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
      }
    );
    gsap.fromTo(
      ".hero-text-box",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        stagger: 0.8,
      }
    );
  }, []);

  return (
    <div className="relative h-auto w-full pt-[70px] flex justify-between">
      <div className="p-10 w-full h-full flex xl:flex-col flex-col justify-between gap-5 max-sm:p-5 ">
        <div className="flex items-center relative">
          <Image
            src="/images/demo/demo (1).jpg"
            width={62}
            height={62}
            loading="lazy"
            alt="profile"
            className="profile-img object-cover rounded-full"
          />

          <Image
            src="/images/demo/demo (2).jpg"
            width={62}
            loading="lazy"
            height={62}
            alt="profile"
            className="profile-img object-cover rounded-full absolute right-[52px] z-10"
          />
          <Image
            src="/images/demo/demo (3).jpg"
            loading="lazy"
            width={62}
            height={62}
            alt="profile"
            className="profile-img object-cover rounded-full absolute right-[100px] z-20"
          />
        </div>

        <div className="flex flex-col gap-5 hero-text-box">
          <b className="text-6xl max-sm:text-lg">از عشق شما الهام می‌گیریم،</b>
          <b className="text-2xl max-sm:text-base">
            و خاطراتی می‌سازیم که هیچ‌گاه رنگ کهنگی نمی‌گیرند
          </b>
        </div>

        <div className="flex justify-between gap-10  hero-text-box max-sm:flex-col max-sm:text-sm">
          <b>
            بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
            خوشبختی ابدی خود لذت می‌برید.
          </b>
          <div className="flex  gap-1.5 flex-col text-lg max-md:text-sm"></div>
        </div>
        <div className="hero-text-box flex-1 flex w-full min-h-[100vh]  h-[100vh] relative max-md:min-h-[calc(50vh)] max-md:h-[50vh]">
          <div className="w-full h-[100vh] bg-gradient-to-br from-[#ececec] to-[#b1b1b1] rounded-2xl flex-wrap flex items-center justify-between gap-10 max-md:h-[50vh] max-md:gap-5">
            <Image
              src={"/images/DSC04795.jpg"}
              alt="hero image"
              fill
              className="object-cover rounded-2xl"
            />{" "}
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
            </svg>{" "}
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
      </div>
    </div>
  );
};

export default HeroSection;
