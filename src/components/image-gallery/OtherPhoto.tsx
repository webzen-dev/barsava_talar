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
<div
  className="
    grid gap-4 w-full px-10 pb-5 max-md:p-2.5
    grid-cols-1  
    sm:grid-cols-2 sm:auto-rows-[250px]
    md:grid-cols-3 md:auto-rows-[300px]
    lg:grid-cols-5 lg:grid-rows-5 lg:auto-rows-auto
    h-auto lg:h-screen
    max-md:gap-2
    max-md:px-5
  "
>

      <div className="w-full aspect-square sm:w-auto sm:aspect-auto lg:col-span-2 lg:row-span-3 relative rounded-xl shadow-md overflow-hidden ">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/other-images/other-3.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="lg:col-start-3 lg:row-span-3 relative rounded-xl shadow-md overflow-hidden w-full aspect-square sm:w-auto sm:aspect-auto">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/other-images/other-4.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="relative rounded-xl shadow-md overflow-hidden lg:col-start-1 lg:row-start-4 lg:row-span-2 w-full aspect-square sm:w-auto sm:aspect-auto">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/other-images/other-1.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="relative rounded-xl shadow-md overflow-hidden lg:col-start-2 lg:row-start-4 lg:col-span-2 lg:row-span-2  w-full aspect-square sm:w-auto sm:aspect-auto">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/food-menu/DSC07600.webp "}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>


      <div className="relative rounded-xl shadow-md overflow-hidden sm:col-span-2 lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-5 bg-gradient-to-tr w-full aspect-square sm:w-auto sm:aspect-auto">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/other-images/other-2.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>
    </div>
    </div>
  );
};

export default OtherPhoto;
