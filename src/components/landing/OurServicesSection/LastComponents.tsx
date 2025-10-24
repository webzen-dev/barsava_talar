"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";
  
import { FaStar } from "react-icons/fa6";
interface DescriptionItem {
  score: number;
  reviews: number;
  title: string;
  caption: string;
}

interface LastData {
  images: string[];
  description: DescriptionItem[];
}

const LastComponents:React.FC<LastData> = ({description,images}) => {
  const [sliderRef1, instanceRef1] = useKeenSlider({
    loop: true,
    rtl: true,
    mode: "snap",
    slides: { perView: 1 },
    drag: true,
  });

  const [sliderRef2, instanceRef2] = useKeenSlider({
    loop: true,
    rtl: true,
    mode: "snap",
    slides: { perView: 1 },
    drag: true,
  });

  useEffect(() => {
    const timer1 = setInterval(() => {
      instanceRef1.current?.next();
    }, 7000);

    const timer2 = setInterval(() => {
      instanceRef2.current?.next();
    }, 7000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [instanceRef1, instanceRef2]);

  return (
    <div className="flex justify-between h-[340px] relative z-20 max-md:flex-col max-md:h-auto">
      <div className="w-[50%] min-w-[50%] h-full flex max-md:flex-col max-md:h-auto max-md:w-full max-md:gap-5">
        <div ref={sliderRef1} className="keen-slider w-[50%] h-full max-md:w-full">
          {description.slice(0, 3).map((des, index) => (
            <div
              key={index}
              className="keen-slider__slide h-full w-full flex flex-col justify-between p-4 cursor-pointer max-md:min-h-[200px] max-md:px-0"
            >
              <div className="flex gap-1.5 items-center text-lg">
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
              <div className="flex flex-col gap-5 max-w-[100%]">
                <b className="text-2xl">{des.title}</b>
                <span className="text-sm">{des.caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-[50%] h-full min-w-[50%] max-md:h-[300px] max-md:w-full">
          <Image
            draggable="false"
            src={images[0]}
            fill
            alt="our services image"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="relative w-[25%] h-full min-w-[25%] mr-10 ">
        <Image
          draggable="false"
          src={images[1]}
          fill
          alt="our services image"
          className="rounded-2xl object-cover"
        />
      </div>
      <div ref={sliderRef2} className="keen-slider w-[25%] h-full mr-5 max-md:w-full max-md:mr-0">
        {description.slice(3, 6).map((des, index) => (
          <div
            key={index}
            className="keen-slider__slide h-full w-full flex flex-col justify-between p-4 cursor-pointer max-md:min-h-[200px] gap-5 max-md:px-0"
          >
            <div></div>
            <div className="flex gap-1.5 flex-col text-lg">
              <div className="flex text-[#698371] gap-1.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>
                </span>
            </div>
            <div className="flex flex-col gap-5 max-w-[100%]">
              <b className="text-2xl">{des.title}</b>
              <span className="text-sm">{des.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastComponents;
