import Image from "next/image";

const OtherPhoto = () => {
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
              src={
                "/images/flower.svg"
              }
              alt="flower"
              width={60}
              height={60}
            />
            <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          </div>
          <b className="text-4xl pb-2.5 max-md:text-base">تصاویر دیگر </b>{" "}
        </div>
      </div>{" "}
      <div
        className=" md:grid-rows-6 gap-5 px-10 min-h-screen       grid  w-full pb-5 max-md:p-2.5
        grid-cols-2 auto-rows-[250px]  
        sm:grid-cols-2 sm:auto-rows-[250px] 
        md:grid-cols-3 md:auto-rows-[300px] 
        lg:grid-cols-5 lg:grid-rows-5 lg:auto-rows-auto 
        h-auto lg:h-screen
        max-md:gap-2
        max-md:px-5 "
      >
        <div
          className="flex items-center justify-center text-white font-bold rounded-xl 
                      bg-gradient-to-r from-indigo-500 to-purple-500 relative
                      md:col-span-4 md:row-span-2"
        >
          <Image
            src={"/images/058A0053 - Copy.JPG"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div
          className="flex items-center justify-center text-white font-bold rounded-xl 
                      bg-gradient-to-r from-green-400 to-emerald-600 relative
                      md:col-span-1 md:row-span-2 md:col-start-5"
        >
          {" "}
          <Image
            src={"/images/640A0928.JPG"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div
          className="flex items-center justify-center text-white font-bold rounded-xl 
                      bg-gradient-to-r from-pink-500 to-rose-600 relative
                      md:col-span-3 md:row-span-2 md:col-start-3 md:row-start-3"
        >
          <Image
            src={"/images/640A1000.JPG"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div
          className="flex items-center justify-center text-white font-bold rounded-xl 
                      bg-gradient-to-r from-yellow-400 to-orange-500 relative
                      md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-3"
        >
          {" "}
          <Image
            src={"/images/640A0952.JPG"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div
          className="flex items-center justify-center text-white font-bold rounded-xl 
                      bg-gradient-to-r from-cyan-400 to-blue-600 relative
                      md:col-span-5 md:row-span-4 col-span-2 md:row-start-5"
        >
          {" "}
          <Image
            src={"/images/640A0953.JPG"}
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
