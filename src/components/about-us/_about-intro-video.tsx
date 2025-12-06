export default function AboutIntroVideo(){
  return (
    <div className="px-5 md:px-10 flex flex-col gap-10 items-center w-full max-md:px-5 -mt-10 ">
      <b className="text-2xl max-sm:text-lg">ویدیو معرفی باغ تالار</b>

      <div className="w-full relative max-md:aspect-square md:h-[70vh]">
        <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
        <video
          className="h-full w-full object-cover z-20 relative rounded-2xl"
          src="/videos/spzylftmodqgb3391519668101053225.mp4"
          poster="/images/640A0952.JPG"
          controls
          loop
        />
      </div>
    </div>
  );
};

