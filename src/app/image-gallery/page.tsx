import ImageCarousel from "@/components/image-gallery/image-carousel";
import ImageBox from "@/components/image-gallery/ImageBox";
import OtherPhoto from "@/components/image-gallery/OtherPhoto";
import TitleImagesBox from "@/components/image-gallery/TitleImagesBox";
import WomensHall from "@/components/image-gallery/WomensHall";

export default function ImageGallery() {
  return (
    <div className="bg-[var(--page-background)] flex flex-col w-full pt-30">
      <ImageCarousel />
      <TitleImagesBox />
      <ImageBox />
      <WomensHall />
      <OtherPhoto />
    </div>
  );
}
