export default function AboutIntroVideo() {
  return (
    <div className="flex flex-col gap-10 items-center w-full -mt-20">
      <b className="text-base md:text-2xl">ویدیو معرفی باغ تالار</b>

      <div className="w-full relative aspect-2/1">
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
