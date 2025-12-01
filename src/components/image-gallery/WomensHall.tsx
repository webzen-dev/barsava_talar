import Image from "next/image";

const WomensHall = () => {
  return (
    <div className="flex flex-col h-auto">
      <div className="flex items-center  justify-center p-10">
        <div className="flex flex-col gap-2.5 text-center w-full items-center">
          <div className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]">
            {/* line */}
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
          <b className="text-4xl pb-2.5 max-md:text-base">تصاویر سالن بانوان</b>{" "}
        </div>
      </div>{" "}
      <div
        className="
        min-h-[100vh]
        h-auto
        grid gap-4 w-full px-10
        grid-cols-2 auto-rows-[250px] 
        sm:grid-cols-3 sm:auto-rows-[200px] 
        md:grid-cols-4 md:auto-rows-[220px] 
        lg:grid-cols-6 lg:grid-rows-6 lg:auto-rows-auto
        max-md:gap-2
        max-md:px-5
      "
      >
        <div className="rounded-xl shadow-md lg:col-start-6 lg:row-start-1 lg:row-span-2 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src={"/images/women/DSC07773-Edit.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none z-20"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-4 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src={"/images/women/IMG_0346.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none z-20"
            draggable={false}
          />
        </div>

        <div className=" rounded-xl shadow-md lg:col-start-6 lg:row-start-3 lg:row-span-2 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src={"/images/women/DSC07630.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none z-20"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md lg:col-start-5 lg:row-start-5 lg:col-span-2 lg:row-span-2 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src={"/images/women/IMG_0348.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none z-20"
            draggable={false}
          />
        </div>

        <div className=" rounded-xl shadow-md lg:col-start-3 lg:row-start-5 lg:col-span-2 lg:row-span-2 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src={"/images/women/juwqghdf.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none z-20"
            draggable={false}
          />
        </div>

        <div className=" rounded-xl shadow-md lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-4 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src={"/images/women/DSC07617.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none z-20"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md lg:col-start-1 lg:row-start-1 lg:row-span-6 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />
          <Image
            src={"/images/women/DSC07610.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none z-20"
            draggable={false}
          />
        </div>


        <div className="rounded-xl shadow-md col-span-1 lg:col-start-2 lg:row-start-5 lg:row-span-2 relative">
          <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

          <Image
            src={"/images/women/IMG_0349.webp"}
            alt="image"
            fill
            className="object-cover rounded-2xl select- z-20"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default WomensHall;
