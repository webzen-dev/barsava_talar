import Image from "next/image";

const TitleImagesBox = () => {
  return (
      <div className="flex items-center  justify-center p-10">
        <div className="flex flex-col gap-2.5 text-center w-full items-center">
          <div className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]">
            {/* line */}
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
          <b className="text-4xl pb-2.5 max-md:text-base">تصاویر سالن اقایان</b>{" "}
        </div>
      </div>
  );
};

export default TitleImagesBox;
