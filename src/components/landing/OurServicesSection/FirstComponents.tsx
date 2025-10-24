"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { useKeenSlider } from "keen-slider/react";

import React, { useEffect } from "react";
interface Description {
  score: number;
  reviews: number;
  title: string;
  caption: string;
}

interface Props {
  image: string;
  description: Description[];
  dir: string;
}
const FirstComponents: React.FC<Props> = ({ image, description, dir }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true, 
    rtl: true,
    mode: "snap",
    slides: {
      perView: 1,
    },
    drag: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 7000);

    return () => clearInterval(timer);
  }, [instanceRef]);
  return (
    <div
      className={`${dir} w-full flex h-[340px] gap-5 relative z-20 max-md:flex-col max-md:h-auto max-md:gap-10
    `}
    >
      <div className="relative w-[50%] h-full min-w-[50%] max-md:h-[300px] max-md:w-[100%]">
        <Image
          draggable="false"
          fill
          src={image}
          alt="our services image"
          className="rounded-2xl object-cover"
        />
      </div>
      {/* section */}

      <div
        ref={sliderRef}
        className={`keen-slider ${
          dir === "flex-row"
            ? "w-[50%] max-w-[50%] max-md:w-full max-md:max-w-full"
            : "w-[25%]  max-w-[25%] max-md:w-full max-md:max-w-full"
        } max-md:w-full max-md:max-w-full  `}
      >
        {/* box 1 */}
        {description.map((des, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col justify-between p-4 cursor-pointer max-md:h-[200px] max-md:w-full max-md:px-0"
          >
            {/* <div></div> */}
            <div className="flex  gap-1.5 text-lg items-center">
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
              {/* <div className="flex text-[#698371] gap-1.5 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>
                {des.reviews} {des.score} نقد
              </span> */}
            </div>
            <div
              className={`flex flex-col gap-5 max-w-[50%]  ${
                dir === "flex-row"
                  ? "w-[100%] max-w-[100%]"
                  : "w-[100%]  max-w-[100%]  max-md:max-w-[100%]  max-md:w-[100%]"
              }  max-md:max-w-[100%] `}
            >
              <b className="text-2xl">{des.title}</b>
              <span className="text-sm">{des.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstComponents;
