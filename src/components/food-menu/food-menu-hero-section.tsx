import Image from "next/image";

const FoodMenu = [
  {
    src: "/images/food-menu/beef.jpg",
    label: "گوشت درسته",
    description: "پخت آرام و سرو ویژه.",
    category: "گوشت قرمز",
  },
  {
    src: "/images/food-menu/morgh.jpg",
    label: "مرغ بریان",
    description: "پوسته طلایی و طعم ملایم.",
    category: "طیور",
  },
  {
    src: "/images/food-menu/boogh.webp",
    label: "بوقلمون",
    description: "برشته با طعم ملایم.",
    category: "طیور",
  },
  {
    src: "/images/food-menu/fish.webp",
    label: "ماهی",
    description: "فیله تازه و سبک.",
    category: "دریایی",
  },
  {
    src: "/images/food-menu/beef-s.jpg",
    label: "بیف استروگانف",
    description: "سس خامه‌ای و گوشت ورقه‌ای.",
    category: "غذای فرنگی",
  },
  {
    src: "/images/food-menu/kabab.jpg",
    label: "کباب سیخی",
    description: "کباب ذغالی آبدار.",
    category: "کباب",
  },
  {
    src: "/images/food-menu/koko.jpg",
    label: "کوکو شیرین",
    description: "طعم اصیل و شیرین.",
    category: "غذای ایرانی",
  },
  {
    src: "/images/food-menu/tahchin.webp",
    label: "ته‌چین مرغ",
    description: "زعفرانی و خوش‌عطر.",
    category: "غذای ایرانی",
  },
  {
    src: "/images/food-menu/goosht-tike.webp",
    label: "گوشت تکه‌ای",
    description: "نرم با طعم سنتی.",
    category: "گوشت قرمز",
  },
  {
    src: "/images/food-menu/beef.jpg",
    label: "خوراک زبان",
    description: "نرم و لذیذ.",
    category: "غذای ویژه",
  },
];

export default function FoodMenuHeroSection() {
  return (
    <div className="flex flex-col gap-10 px-5 pt-15">
      <div className="flex flex-col gap-4">
        <b className="text-lg md:text-4xl">
          گزینه‌های غذایی باغ تالار برای هر سلیقه
        </b>

        <span className="text-sm text-[#dec39a] md:text-2xl">
          تمام منوها با استاندارد پذیرایی باغ تالار آماده شده‌اند تا بهترین
          انتخاب را برای مراسم خود داشته باشید.
        </span>
      </div>

      <div className="relative flex w-full flex-col gap-4 rounded-2xl bg-white/10 p-5 md:gap-10">
        <span className="text-base font-bold md:text-2xl">منو انتخابی:</span>

        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {FoodMenu.map((menu, index) => (
            <div
              key={index}
              className="relative flex h-68 items-center gap-2 rounded-2xl border-2 border-black/10 lg:flex-[calc(33.33%-16px)] xl:flex-[calc(25%-16px)] flex-[calc(50%-8px)] md:h-34 md:gap-8 max-md:flex-col"
            >
              <div className="relative aspect-square max-md:max-h-42 md:h-full max-md:w-full">
                <Image
                  src={menu.src}
                  alt={menu.label}
                  fill
                  draggable="false"
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="flex h-full flex-1 flex-col justify-start gap-2 md:justify-center md:pe-2 max-md:px-2 max-md:text-center">
                <span className="text-lg font-bold">{menu.label}</span>

                <span className="text-sm text-black/70">{menu.description}</span>

                <span className="absolute -bottom-[2px] -right-[2px] rounded-tl-2xl rounded-br-2xl bg-[#dec39a] px-4 py-2 text-xs text-black/80">
                  {menu.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
