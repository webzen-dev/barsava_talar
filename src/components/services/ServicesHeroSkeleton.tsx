import Skeleton from "react-loading-skeleton";

export default function ServicesHeroSkeleton() {
  return (
    <div className="pt-[90px] relative w-full h-[100vh] p-10 max-md:p-2.5 max-md:pt-[90px]">
      {/* Overlay background skeleton */}
      <div className="absolute top-0 left-0 h-full right-0 bottom-0 rounded-2xl z-10 flex flex-col justify-start pt-20 p-10 2xl:pt-30 2xl:px-15 max-md:p-5 max-md:pt-20 gap-5">
        <Skeleton width="60%" height={60} />
        <Skeleton width="40%" height={40} /> 
        <Skeleton width="80%" height={20} /> 
        <Skeleton width="50%" height={20} /> 
      </div>
    </div>
  );
}
