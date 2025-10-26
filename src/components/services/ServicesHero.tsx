import Image from "next/image";

const ServicesHero = () => {
  return (
    <div className="pt-[90px] relative w-[100%] h-[100vh] p-10 max-md:p-2.5 max-md:pt-[90px]">
      <div className="relative w-full h-full z-10">
        <svg
          className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-30"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height="50px"
          width="200px"
          transform="rotate(0) scale(1, 1)"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
            fill="#f7f1ea"
            fillOpacity="1"
          ></path>
        </svg>{" "}
        <svg
          className="absolute top-0 left-[50%] transform translate-x-[-50%] z-30 rotate-[180deg]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height="50px"
          width="200px"
          transform="rotate(0) scale(1, 1)"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
            fill="#f7f1ea"
            fillOpacity="1"
          ></path>
        </svg>
        <Image
          src={"/images/DSC04614.jpg"}
          fill
          alt="services hero image"
          className="object-cover rounded-2xl  z-20"
        />
        <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
        <div
          className="absolute gap-5 z-30 top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] rounded-2xl to-[rgba(0,0,0,0.7)] flex flex-col justify-start pt-20 text-[#F7F1EA] p-10  
        2xl:pt-30 2xl:px-15 max-md:p-5 max-md:pt-20
        "
        >
          <h2 className="text-5xl font-bold 2xl:text-6xl max-md:text-4xl max-sm:text-2xl">
            تبدیل داستان عشق شما به
          </h2>
          <b className="text-3xl 2xl:text-4xl max-md:text-2xl max-sm:text-lg">
            لحظات ماندگار عروسی
          </b>
          <p className="text-lg 2xl:text-2xl max-md:text-base max-sm:text-sm">
            بگذارید ما تمام جزئیات را مدیریت کنیم در حالی که شما از سفر به سوی
            خوشبختی ابدی خود لذت می‌برید.
          </p>
        </div>
        {/* <div className="absolute bottom-10 left-10 bg-[rgba(255,255,255,0.5)] backdrop-blur-xs z-40 w-[300px] h-[170px] flex items-center justify-center rounded-2xl overflow-hidden">
          <video
            src="/videos/ssvid.net---Wedding-Film-W-T-Borgo-Stomennano-Tuscany-Italy_v720P.mp4"
            width={280}
            height={150}
            className="rounded-2xl object-cover w-[280px] h-[150px]"
            autoPlay
            loop
            muted
            playsInline
          />
        </div> */}
      </div>
    </div>
  );
};

export default ServicesHero;
