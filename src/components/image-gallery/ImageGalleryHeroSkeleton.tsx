import Skeleton from "react-loading-skeleton";

export default function ImageGalleryHeroSkeleton() {
  return (
    <div className="flex flex-col justify-between h-[100vh] py-10">
      {/* Hero Section Text Box Skeleton */}
      <div className="flex items-center justify-center pt-[80px] p-10 flex-1">
        <div className="flex flex-col gap-2.5 text-center w-full items-center">
          <div className="flex items-center justify-center gap-2.5 w-[40%] max-md:w-[90%]">
            <Skeleton circle height={60} width={60} />
          </div>
          <Skeleton width={200} height={40} className="mt-2.5" />
          <Skeleton width={300} height={20} className="mt-1" />
        </div>
      </div>

      <div className="px-10 h-auto overflow-hidden">
        <div className="grid grid-flow-col max-md:auto-cols-[calc(100%)] md:auto-cols-[calc(100%/2-10px)] lg:auto-cols-[calc(100%/3-10px)] xl:auto-cols-[calc(100%/4-15px)]  gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="keen-slider__slide relative w-full h-[300px] 2xl:h-[500px] rounded-2xl"
            >
              <Skeleton className="w-full h-full rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
