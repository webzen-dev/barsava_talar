
import HeaderSections from "../header-sections";
import ServicesCarousel from "./_services-carousel";

export default function WeddingPlans() {
  return (
    <div className="flex w-full gap-10 flex-col ">
      <div className="flex flex-col text-center items-center w-full">
        <HeaderSections />

        <b className="text-lg md:text-2xl mb-5">برنامه‌ریزی کامل عروسی</b>

        <p className="text-sm md:text-base text-black/70 max-w-9/10 md:max-w-4/5">
          برنامه‌ریزی عروسی می‌تواند طاقت‌فرسا باشد - اما لازم نیست اینطور باشد.
          خدمات کامل برنامه‌ریزی عروسی ما برای زوج‌هایی طراحی شده است که
          می‌خواهند جشنی بدون استرس و زیبا از ابتدا تا انتها برگزار شود. از پیدا
          کردن محل برگزاری تا مراسم بدرقه نهایی، ما تمام جزئیات را با
          حرفه‌ای‌گری، خلاقیت و دقت مدیریت می‌کنیم.
        </p>

        {/* <Link
          href={"/reservation"}
          className="bg-[var(--gold)] text-white rounded-2xl text-sm flex justify-around items-center cursor-pointer"
        >
          <span>رزرو کنید</span>

          <MdOutlineKeyboardArrowLeft className="text-lg" />
        </Link> */}
      </div>

      <ServicesCarousel />
    </div>
  );
}
