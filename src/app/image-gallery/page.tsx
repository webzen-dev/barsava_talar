import GridImagesBox from "@/components/image-gallery/grid-images-box";
import ImageCarousel from "@/components/image-gallery/image-carousel";
import ImageBox from "@/components/image-gallery/ImageBox";
import ImageGalleryHero from "@/components/image-gallery/ImageGalleryHero";
import OtherPhoto from "@/components/image-gallery/OtherPhoto";
import TitleImagesBox from "@/components/image-gallery/TitleImagesBox";
import WomensHall from "@/components/image-gallery/WomensHall";

const ImageGallery = () => {
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] flex flex-col w-full pt-40">
      <ImageGalleryHero />
      <ImageCarousel />
      <TitleImagesBox />
      <ImageBox />
      <WomensHall />
      <OtherPhoto />
    </div>
  );
};

export default ImageGallery;
