import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import HeaderSections from "../header-sections";

const ImagesGallery = () => {
  return (
    <div className="w-full  flex-col flex p-10 text-[#423A2F] max-sm:p-5 ">
      <div className="flex flex-col gap-2.5 items-center text-center relative z-20 pb-10">
        <div className="flex items-center gap-2.5 w-full">
          <HeaderSections className="mx-auto" />
        </div>
        <b className="text-lg md:text-2xl font-bold">گالری تصاویر</b>
      </div>
      <Link
        href={"/image-gallery"}
        className="flex justify-between items-start w-full relative"
      >
        <div className="h-[330px] w-[300px] rounded-2xl rotate-[-9deg] relative z-20   2xl:w-[370px] 2xl:h-[360px]max-lg:w-[300px] max-lg:h-[250px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
          <Image
            src={"/images/other-images/other-1.webp"}
            className="z-20 object-cover rounded-2xl shadow-2xl cursor-pointer"
            fill
            alt="سالن رقص بارثاوا"
          />
        </div>
        <div className="absolute w-[50%] h-full flex justify-center  items-start pt-7.5  2xl:justify-end 2xl:pl-[200px] max-lg:pr-[100px]  max-md:pr-0">
          <div className="h-[330px] w-[300px] rounded-2xl rotate-[-5deg] z-20 2xl:w-[370px]  2xl:h-[380px] max-lg:w-[300px] max-lg:h-[270px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
            <Image
              src={"/images/gallery/5.webp"}
              className="z-20 object-cover rounded-2xl  shadow-2xl cursor-pointer "
              fill
              alt="سالن رقص بارثاوا"
            />
          </div>
        </div>
        <div className="h-[375px] w-[375px] bg-[#423A2F]  rounded-2xl relative z-30 2xl:w-[440px] 2xl:h-[425px] max-lg:w-[320px] max-lg:h-[320px]  max-md:w-[200px] max-md:h-[200px]  max-sm:w-[120px] max-sm:h-[120px]">
          <Image
            src={"/images/gallery/4.webp"}
            className="z-20 object-cover rounded-2xl shadow-2xl  cursor-pointer "
            fill
            alt="سالن رقص بارثاوا"
          />
        </div>
        <div className="absolute w-[50%] h-full flex justify-center items-start pt-7.5 left-0 2xl:justify-start 2xl:pr-[200px]  max-lg:pl-[100px]  max-md:pl-0">
          <div className="h-[330px] w-[300px] rounded-2xl rotate-[5deg] z-20   2xl:w-[370px] 2xl:h-[380px] max-lg:w-[300px] max-lg:h-[270px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
            <Image
              src={"/images/gallery/2.webp"}
              className="z-20 object-cover rounded-2xl  shadow-2xl cursor-pointer "
              fill
              alt="سالن رقص بارثاوا"
            />
          </div>
        </div>
        <div className="h-[330px] w-[300px] rounded-2xl rotate-[9deg] 2xl:w-[370px] 2xl:h-[360px] max-lg:w-[300px] max-lg:h-[250px]  max-md:w-[150px] max-md:h-[150px] max-sm:w-[90px] max-sm:h-[90px]">
          <Image
            src={"/images/DSC07655.webp"}
            className="z-20 object-cover rounded-2xl shadow-2xl cursor-pointer"
            fill
            alt="سالن رقص بارثاوا"
          />
        </div>
      </Link>
      <div className="flex items-center py-10 max-sm:mt-4">
        <Link
          href={"/image-gallery"}
          className="w-[240px] h-[50px] border-[#423A2F] border-[1px] border-solid cursor-pointer flex items-center justify-between rounded-2xl  p-5 hover:shadow-lg 
        
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
