import Image from "next/image";

const ImageBox = () => {
  return (
    <div
      className="
        grid gap-4 w-full px-10 pb-5 max-md:p-2.5
        grid-cols-2 auto-rows-[250px]  
        sm:grid-cols-2 sm:auto-rows-[250px] 
        md:grid-cols-3 md:auto-rows-[300px] 
        lg:grid-cols-5 lg:grid-rows-5 lg:auto-rows-auto 
        h-auto lg:h-screen
        max-md:gap-2
        max-md:px-5
      "
    >
      <div className="lg:col-span-2 lg:row-span-3 relative rounded-xl shadow-md overflow-hidden ">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/men/men-2.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="lg:col-start-3 lg:row-span-2 relative rounded-xl shadow-md overflow-hidden ">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/men/men-7.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="relative rounded-xl shadow-md overflow-hidden lg:col-start-1 lg:row-start-4 lg:row-span-2 ">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/men/men-6.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="relative rounded-xl shadow-md overflow-hidden lg:col-start-2 lg:row-start-4 lg:col-span-2 lg:row-span-2 0">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/men/men-1.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="relative rounded-xl shadow-md overflow-hidden lg:col-start-3 lg:row-start-3">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/men/men-4.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>

      <div className="relative rounded-xl shadow-md overflow-hidden lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-5 bg-gradient-to-tr">
        <div className="absolute inset-0 z-10 w-full h-full animate-pulse bg-gradient-to-tr from-gray-400 to-gray-300 rounded-2xl" />

        <Image
          src={"/images/men/men-3.webp"}
          alt="image"
          fill
          className="object-cover rounded-2xl select-none z-20"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ImageBox;
