"use client";

import ImageGalleryHeroSkeleton from "@/components/image-gallery/ImageGalleryHeroSkeleton";
import dynamic from "next/dynamic";

const ImageGalleryHero = dynamic(
  () => import("@/components/image-gallery/ImageGalleryHero"),
  {
    // Skeleton Loading 
    loading: () => (
      <ImageGalleryHeroSkeleton/>
    ),
  }
);

const TitleImagesBox = dynamic(
  () => import("@/components/image-gallery/TitleImagesBox"),
  {
    // images only > no need for SSR, no SEO impact
    ssr: false,
    loading: () => (
      <div className="h-20 bg-gray-200 animate-pulse w-full mb-4" />
    ),
  }
);

const ImageBox = dynamic(() => import("@/components/image-gallery/ImageBox"), {
  // images only > no need for SSR, no SEO impact
  ssr: false,
  loading: () => <div className="h-80 bg-gray-200 animate-pulse w-full mb-4" />,
});

const WomensHall = dynamic(
  () => import("@/components/image-gallery/WomensHall"),
  {
    // images only > no need for SSR, no SEO impact
    ssr: false,
    loading: () => (
      <div className="h-60 bg-gray-200 animate-pulse w-full mb-4" />
    ),
  }
);

const OtherPhoto = dynamic(
  () => import("@/components/image-gallery/OtherPhoto"),
  {
    // images only > no need for SSR, no SEO impact
    ssr: false,
    loading: () => (
      <div className="h-64 bg-gray-200 animate-pulse w-full mb-4" />
    ),
  }
);

const ImageGallery = () => {
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] flex flex-col w-full">
      <ImageGalleryHero />
      <TitleImagesBox />
      <ImageBox />
      <WomensHall />
      <OtherPhoto />
    </div>
  );
};

export default ImageGallery;
