import HeaderSections from "../header-sections";
import FacilitiesCarousel from "./_facilities-carousel";

export type facilitiesDataType = {
  id: number;
  title: string;
  image: string;
};

const facilitiesList: facilitiesDataType[] = [
  {
    id: 1,
    title: "چایخانه سنتی",
    image: "/images/facilities/DSC07755.webp",
  },
  {
    id: 2,
    title: "تجهیزات صوتی و تصویری پیشرفته",
    image: "/images/facilities/4.webp",
  },
  {
    id: 3,
    title: "فضای اختصاصی عروس و داماد",
    image: "/images/facilities/DSC07710.webp",
  },
  {
    id: 4,
    title: "امکان رزرو آنلاین",
    image: "/images/facilities/DSC07787.webp",
  },
  {
    id: 5,
    title: "سالن عقد مجزا",
    image: "/images/women/juwqghdf.webp",
  },
];

export default function Facilities() {
  return (
    <section className="flex flex-col gap-10">
      {/* facilities header */}
      <div className="flex flex-col items-center text-center">
        <HeaderSections />

        <p className="text-lg md:text-2xl mb-2.5">امکانات تالار مجلل بارثاوا</p>

        <p className="text-black/70 text-sm md:text-base">
          بارثاوا یک تالار نیست , ما اینجاییم تا رویای شمارا به وافعیت تبدیل
          کنیم
        </p>
      </div>
      
      {/* facilities carousel  */}
      <FacilitiesCarousel data={facilitiesList} />
    </section>
  );
}
