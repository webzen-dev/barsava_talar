export default function AboutIntroVideo() {
  return (
    <div className="flex flex-col gap-10 items-center w-full -mt-10">
      <b className="text-base md:text-2xl">ویدیو معرفی باغ تالار</b>

      <div className="w-full relative max-md:aspect-9/16">
        <div className="absolute inset-0 z-10 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-gray-400 to-gray-300" />
        <video
          className="h-full w-full object-cover z-20 relative rounded-2xl"
          src="/videos/spzylftmodqgb3391519668101053225.mp4"
          poster="/images/gallery/5.webp"
          controls
          loop
        />
      </div>
    </div>
  );
}
