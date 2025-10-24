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
        <div className="rounded-xl shadow-md lg:col-start-6 lg:row-start-1 lg:row-span-2 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07787.jpg"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-4 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07619.jpg"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className=" rounded-xl shadow-md lg:col-start-6 lg:row-start-3 lg:row-span-2 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/640A0972.JPG"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md lg:col-start-5 lg:row-start-5 lg:col-span-2 lg:row-span-2 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07623.jpg"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className=" rounded-xl shadow-md lg:col-start-3 lg:row-start-5 lg:col-span-2 lg:row-span-2 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07630.jpg"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className=" rounded-xl shadow-md lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-4 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07617.jpg"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md lg:col-start-1 lg:row-start-1 lg:row-span-5 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07610.jpg"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md lg:col-start-1 lg:row-start-6 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07790.jpg"}
            alt="image"
            fill
            className="object-cover rounded-2xl select-none"
            draggable={false}
          />
        </div>

        <div className="rounded-xl shadow-md col-span-1 max-md:col-span-2 lg:col-start-2 lg:row-start-5 lg:row-span-2 relative bg-gradient-to-tr from-gray-400 to-gray-300">
          <Image
            src={"/images/DSC07773-Edit.jpg"}
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

export default WomensHall;
