import Image from "next/image";

export default function ServicesHero() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-full z-10">
        <Image
          src={"/images/DSC04614.jpg"}
          fill
          alt="services hero image"
          className="object-cover rounded-2xl z-20"
        />
        <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
        {/* <div
          className="absolute gap-5 z-30 top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] rounded-2xl to-[rgba(0,0,0,0.7)] flex flex-col justify-start pt-20 text-[#F7F1EA] p-10  
        2xl:pt-30 2xl:px-15 max-md:p-5 max-md:pt-20
        "
        >
          <h2 className="font-bold text-lg sm:text-2xl 2xl:text-4xl">
            تبدیل داستان عشق شما به
          </h2>
          <b className="font-bold text-lg sm:text-2xl 2xl:text-4xl">
            لحظات ماندگار عروسی
          </b>
          <p className="text-sm sm:text-base 2xl:text-2xl">
            بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
            خوشبختی ابدی خود لذت می‌برید.
          </p>
        </div> */}
      </div>
    </div>
  );
}
