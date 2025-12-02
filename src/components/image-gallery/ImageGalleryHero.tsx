import Image from "next/image";
import ImageGalleryHeroSlider from "./ImageGalleryHeroSlider";

const ImageGalleryHero = () => {
  return (
    <div className="flex flex-col justify-between py-10">
      {/* Hero Section Text Box */}
      <div className="flex items-center  justify-center pt-20 p-10 flex-1">
        <div className="flex flex-col gap-2.5 text-center w-full items-center">
          <div className="flex  items-center gap-2.5 w-[40%] max-md:w-[90%]">
            {/* line */}
            <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
            <Image
              className="object-cover"
              draggable="false"
              src={
                "/images/flower.svg"
              }
              alt="flower"
              width={60}
              height={60}
            />
            <div className="h-[0.5px] bg-[#423A2F] flex-1"></div>
          </div>
          <b className="text-4xl pb-2.5 max-md:text-base">گالری تصاویر</b>
          <b className="text-sm  text-[#575757] max-w-[70%] max-md:max-w-[90%] max-md:text-xs">
            یه نگاه کوتاه کافیه تا حس و حال خاص باغ تالاربارثاوا رو لمس کنی.
            اینجاست که هر گوشه‌ش خاطره‌ساز میشه.{" "}
          </b>
        </div>
      </div>
      <div className="flex items-center px-10 h-auto">
        <ImageGalleryHeroSlider />
      </div>
    </div>
  );
};

export default ImageGalleryHero;
