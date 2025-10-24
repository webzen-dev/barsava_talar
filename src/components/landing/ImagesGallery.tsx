import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const ImagesGallery = () => {
  return (
    <div className="w-full  flex-col flex p-10 text-[#423A2F] max-sm:p-5 ">
      <div className="flex flex-col gap-2.5 items-center text-center relative z-20 pb-10">
        <div className="flex items-center gap-2.5 w-[40%] max-md:w-[90%]">
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          <Image
            className="object-cover"
            draggable="false"
            src={
              "/images/flower.svg"
            }
            alt="flower"
            width={60}
            height={60}
          />
          <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
        </div>
        <b className="text-4xl font-bold">گالری تصاویر</b>
      </div>
      <Link
        href={"/image-gallery"}
        className="flex justify-between  items-start w-full relative group "
      >
        <div className="h-[330px] w-[300px] rounded-2xl rotate-[-9deg] relative z-20   2xl:w-[370px] 2xl:h-[360px]max-lg:w-[300px] max-lg:h-[250px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
          <Image
            src={"/images/gallery/1.jpg"}
            className="object-cover rounded-2xl shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0 max-sm:grayscale-0"
            fill
            alt=""
          />
        </div>
        <div className="absolute w-[50%] h-full flex justify-center  items-start pt-7.5  2xl:justify-end 2xl:pl-[200px] max-lg:pr-[100px]  max-md:pr-0">
          <div className="h-[330px] w-[300px] rounded-2xl rotate-[-5deg] z-20 2xl:w-[370px]  2xl:h-[380px] max-lg:w-[300px] max-lg:h-[270px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
            <Image
              src={"/images/gallery/5.jpg"}
              className="object-cover rounded-2xl  shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0"
              fill
              alt=""
            />
          </div>
        </div>
        <div className="h-[375px] w-[375px] bg-[#423A2F]  rounded-2xl relative z-30 2xl:w-[440px] 2xl:h-[425px] max-lg:w-[320px] max-lg:h-[320px]  max-md:w-[200px] max-md:h-[200px]  max-sm:w-[120px] max-sm:h-[120px]">
          <Image
            src={"/images/gallery/4.jpg"}
            className="object-cover rounded-2xl shadow-2xl  cursor-pointer  transition-all delay-150 duration-300 ease-in-out"
            fill
            alt=""
          />
        </div>
        <div className="absolute w-[50%] h-full flex justify-center items-start pt-7.5 left-0 2xl:justify-start 2xl:pr-[200px]  max-lg:pl-[100px]  max-md:pl-0">
          <div className="h-[330px] w-[300px] rounded-2xl rotate-[5deg] z-20   2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[270px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
            <Image
              src={"/images/gallery/3.jpg"}
              className="object-cover rounded-2xl  shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0"
              fill
              alt=""
            />
          </div>
        </div>{" "}
        <div className="h-[330px] w-[300px] rounded-2xl rotate-[9deg] 2xl:w-[370px] 2xl:h-[360px] max-lg:w-[300px] max-lg:h-[250px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
          <Image
            src={"/images/gallery/2.jpg"}
            className="object-cover rounded-2xl  shadow-2xl transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:grayscale-0 max-sm:grayscale-0"
            fill
            alt=""
          />
        </div>
      </Link>
      <div className="flex items-center py-10 max-sm:mt-4">
        <Link
          href={"/image-gallery"}
          className="w-[240px] h-[50px] border-[#423A2F] border-[1px] border-solid cursor-pointer flex items-center justify-between rounded-2xl  p-5 transition-all delay-150 duration-300 ease-in-out hover:shadow-lg 
          
          max-md:text-sm max-md:w-[200px] max-md:h-[30px]
          "
        >
          <span> مشاهده گالری تصاویر</span>
          <IoIosArrowBack />
        </Link>
      </div>
    </div>
  );
};

export default ImagesGallery;
