import clsx from "clsx";
import { LuFlower } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import { MdAddTask, MdGroups } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import ScrollFadeProvider from "../ScrollFadeProvider";

const data = [
  {
    id: 1,
    icon: <LuFlower />,
    title: "طراحی و دکوراسیون اختصاصی",
    src: "/images/women/DSC07610.webp",
    caption:
      "فضاسازی و چیدمان سالن مطابق با تم و سلیقه مراسم شما، از گل‌آرایی تا نورپردازی حرفه‌ای",
  },
  {
    id: 2,
    icon: <ImSpoonKnife />,
    title: "پذیرایی مجلل",
    src: "/images/women/DSC07630.webp",
    caption:
      "منوی متنوع غذا و دسر با بهترین مواد اولیه، ارائه پذیرایی با کیفیت و منظم",
  },
  {
    id: 3,
    icon: <MdGroups />,
    title: "تیم حرفه‌ای تشریفات",
    src: "/images/women/juwqghdf.webp",
    caption:
      "پرسنل آموزش‌دیده و مجرب که با نظم، احترام و دقت در خدمت شما و مهمانانتان هستند",
  },
  {
    id: 4,
    icon: <MdAddTask />,
    title: "مدیریت کامل مراسم",
    src: "/images/gallery/6.webp",
    caption:
      "هماهنگی صفر تا صد مراسم، زمان‌بندی و کنترل جریان اجرا بدون کوچک‌ترین نگرانی",
  },
  {
    id: 5,
    icon: <GiMusicalNotes />,
    title: "موسیقی و سرگرمی",
    src: "/images/gallery/4.webp",
    caption:
      "برگزاری برنامه‌های موسیقی زنده یا DJ و سرگرمی‌های متنوع برای تجربه‌ای جذاب و فراموش‌نشدنی",
  },
];

export default function ServicesHero() {
  return (
    <section className="w-full flex flex-col gap-10">
      <ScrollFadeProvider
        selector=".services-hero"
        enableScrollTrigger={false}
        staggerTimeLine={0.5}
      />

      <div className="flex flex-col gap-3">
        <b className="text-lg md:text-3xl services-hero">
          میزبان خاطرات بی نظیر شما با خدمات ویژه هستیم
        </b>

        <p className="text-base md:text-lg text-black/70 md:max-w-1/2 services-hero">
          در مجموعه بارثاوا هر بخش با دقت و ظرافت طراحی شده تا تجربه ای فراتر از
          یک مراسم عادی رقم بخورد
        </p>
      </div>

      <div className="flex flex-wrap gap-y-4 -me-4">
        {data.map((service) => (
          <div
            key={service.id}
            className="pe-4 w-full min-w-full md:min-w-1/2 md:w-1/2 lg:min-w-1/3 lg:w-1/3 flex flex-col services-hero"
          >
            <div
              className={clsx(
                "bg-[var(--dark-background)]/80 text-[var(--page-background)] rounded-xl p-4 py-6 relative w-full",
                "flex flex-col gap-2.5",
                "after:content-[''] after:absolute after:w-10 after:h-10 after:rounded-full after:bg-[var(--page-background)] after:-bottom-5 after:-right-5",
                "before:content-[''] before:absolute before:w-10 before:h-10 before:rounded-full before:bg-[var(--page-background)] before:-bottom-5 before:-left-5"
              )}
            >
              <span className="text-5xl text-[var(--gold)]">
                {service.icon}
              </span>
              
              <b className="text-base md:text-lg">{service.title}</b>

              <p className="text-[var(--page-background)]/70 text-sm md:text-base">
                {service.caption}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
