import Image from "next/image";

const OtherPhoto = () => {
  return (
    <div className="flex flex-col h-auto">
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
          <b className="pb-2.5 text-4xl max-md:text-base">
            تصاویر ورودی باغ تالار
          </b>
        </div>
      </div>

      <div
        className="
          grid w-full min-h-screen h-auto pb-5 px-10 gap-5 
          grid-cols-2 auto-rows-[250px]
          sm:grid-cols-2 sm:auto-rows-[250px]
          md:grid-cols-3 md:auto-rows-[300px] md:grid-rows-6
          lg:grid-cols-5 lg:grid-rows-5 lg:auto-rows-auto lg:h-screen
          max-md:p-2.5 max-md:px-5 max-md:gap-2
        "
      >
        <div className="relative flex items-center justify-center font-bold text-white rounded-xl md:col-span-4 md:row-span-2">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src="/images/DSC07600.JPG"
            alt="image"
            fill
            draggable={false}
            className="object-cover rounded-2xl select-none z-20"
          />
        </div>

        <div className="relative flex items-center justify-center font-bold text-white rounded-xl md:col-span-1 md:row-span-2 md:col-start-5">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src="/images/640A0928.JPG"
            alt="image"
            fill
            draggable={false}
            className="object-cover rounded-2xl select-none z-20"
          />
        </div>

        <div className="relative flex items-center justify-center font-bold text-white rounded-xl md:col-span-3 md:row-span-2 md:col-start-3 md:row-start-3">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src="/images/DSC07610.jpg"
            alt="image"
            fill
            draggable={false}
            className="object-cover rounded-2xl select-none z-20"
          />
        </div>

        <div className="relative flex items-center justify-center font-bold text-white rounded-xl md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-3">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src="/images/640A0952.JPG"
            alt="image"
            fill
            draggable={false}
            className="object-cover rounded-2xl select-none z-20"
          />
        </div>

        <div className="relative flex items-center justify-center font-bold text-white rounded-xl md:col-span-5 md:row-span-4 md:row-start-5 col-span-4">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src="/images/640A0953.JPG"
            alt="image"
            fill
            draggable={false}
            className="object-cover rounded-2xl select-none z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherPhoto;
