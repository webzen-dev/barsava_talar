import ImageCarousel from "@/components/image-gallery/image-carousel";
import ImageBox from "@/components/image-gallery/ImageBox";
import WomensHall from "@/components/image-gallery/WomensHall";
import OtherPhoto from "@/components/image-gallery/OtherPhoto";

export default function ImageGallery() {
  return (
    <div className="flex flex-col gap-20 pt-10">
      <ImageCarousel />
      <div className="container mx-auto grid gap-20">
        <ImageBox />
        <WomensHall />
        <OtherPhoto />
      </div>
    </div>
  );
}
