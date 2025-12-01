import Image from "next/image";

const OtherPhoto = () => {
  return (
    <div className="flex flex-col h-auto mb-10">
      <div className="flex items-center justify-center p-10">
        <div className="flex flex-col items-center w-full text-center gap-2.5">
          <div className="flex items-center w-[40%] gap-2.5 max-md:w-[90%]">
            <div className="flex-1 h-[0.5px] bg-[#423A2F]" />
            <Image
              src="/images/flower.svg"
              alt="flower"
              width={60}
              height={60}
              draggable="false"
              className="object-cover"
            />
            <div className="flex-1 h-[0.5px] bg-[#423A2F]" />
          </div>
          <b className="pb-2.5 text-4xl max-md:text-base">تصاویر ورودی تالار</b>
        </div>
      </div>

      <div className="flex flex-wrap w-full px-5 md:px-10 gap-5">
        <div className="flex-[calc(100%/2-20px)] rounded-xl shadow-md md:flex-[calc(100%/3-40px)] aspect-square lg:flex-[calc(100%/4-60px)] relative ">
          <Image
            src={"/images/women/DSC07773-Edit.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>{" "}
        <div className="flex-[calc(100%/2-20px)] rounded-xl shadow-md md:flex-[calc(100%/3-40px)] aspect-square lg:flex-[calc(100%/4-60px)] relative ">
          <Image
            src={"/images/women/DSC07773-Edit.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>{" "}
        <div className="flex-[calc(100%/2-20px)] rounded-xl shadow-md md:flex-[calc(100%/3-40px)] aspect-square lg:flex-[calc(100%/4-60px)] relative ">
          <Image
            src={"/images/women/DSC07773-Edit.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>{" "}
        <div className="flex-[calc(100%/2-20px)] rounded-xl shadow-md md:flex-[calc(100%/3-40px)] aspect-square lg:flex-[calc(100%/4-60px)] relative max-h-70 lg:max-h-none">
          <Image
            src={"/images/women/DSC07773-Edit.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherPhoto;
