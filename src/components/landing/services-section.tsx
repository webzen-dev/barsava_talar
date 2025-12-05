import Image from "next/image";
import HeaderSections from "../header-sections";
import clsx from "clsx";
import Link from "next/link";
interface ServicesType {
  id: number;
  title: string;
  caption: string;
  src: string;
}

export default function ServicesSection({ items }: { items: ServicesType[] }) {
  return (
    <div className="w-full flex flex-col gap-10">

      <div className="flex flex-col items-center text-center gap-4 container mx-auto px-5 md:px-10">
        <HeaderSections />
        <b className="text-lg md:text-2xl">خدمات ما</b>
        <p className="text-sm md:text-base md:max-w-4/5 text-black/70">
          ارائه خدمات تخصصی برای برگزاری عروسی‌ها و جشن‌های به‌یادماندنی، با
          برنامه‌ریزی دقیق و اجرای هماهنگ. همچنین امکان میزبانی ایونت‌ها و
          سمینار با همان کیفیت و نظم همیشگی در تالار مجلل بارثاوا.
        </p>
      </div>

      <div className={clsx("w-full px-5 py-10 md:px-10 bg-[var(--brown)] relative")}>
        <Image
          src={"/images/aluminum-foil-6961638_960_720.jpg"}
          className="grayscale opacity-10 object-cover"
          fill
          alt="shape"
        />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-10 items-stretch justify-items-center">
          {items.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border-2 border-[var(--gold)] backdrop-blur-xs shadow-2xl flex flex-col gap-5 p-5 w-full"
            >
              <Image
                src={service.src}
                alt={service.title}
                width={100}
                height={100}
                className="object-cover  drop-shadow-[0_0_20px_var(--gold)]"
              />
              
              <b className="text-lg md:text-2xl text-[var(--gold)]">
                {service.title}
              </b>

              <p className="text-white/70 flex-1">{service.caption}</p>

              <Link
                href={"/services"}
                className="flex justify-center w-42 py-1 bg-[var(--gold)] rounded-lg mt-2"
              >
                بیشتر بدانید
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
