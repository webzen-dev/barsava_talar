"use client";
import FaqsSection from "@/components/landing/faq-section";
import ServicesGridBox from "@/components/services/services-grid-box";
import dynamic from "next/dynamic";

const ServicesHeroComponent = dynamic(
  () => import("@/components/services/ServicesHero")
);

const FullWeddingPlanningComponents = dynamic(
  () => import("@/components/services/FullWeddingPlanning")
);

const TimelessMomentsComponent = dynamic(
  () => import("@/components/landing/TimelessMoments")
);
const faqsData = [
  {
    id: 1,
    question: "ظرفیت تالار چقدر است؟",
    answer: "مجموعه با ظرفیت حداکثری ۵۰۰ نفر، امکان پذیرایی دارد.",
  },
  {
    id: 2,
    question: "اطلاع از تاریخ برگزاری؟",
    answer:
      "جهت استعلام تاریخ برگزاری مراسم، لطفاً با شماره‌های درج‌شده تماس حاصل فرمایید.",
  },
  {
    id: 3,
    question: "آیا امکان تزئینات دلخواه وجود دارد؟",
    answer:
      "بله، شما می‌توانید نوع دکور، رنگ‌بندی و چینش میزها را مطابق سلیقه خود انتخاب کنید.",
  },
  {
    id: 4,
    question: "آیا برای عکاسی و فیلم‌برداری محدودیت دارید؟",
    answer:
      "خیر، امکان همکاری با گروه عکاسی دلخواه شما وجود دارد و از طرف مجموعه محدودیتی اعمال نمی‌شود.",
  },
  {
    id: 5,
    question: "پارکینگ مجموعه چطور است؟",
    answer: "مجموعه دارای پارکینگ اختصاصی با ظرفیت مناسب برای مهمانان شما است.",
  },
];
const Services = () => {
  return (
    <div className="bg-[#F7F1EA] overflow-hidden pt-18 px-5 md:px-10 flex flex-col pb-10 gap-10">
      <ServicesHeroComponent />
      <div className="container mx-auto flex flex-col gap-10">
        {/* <OurServicesSectionsComponent /> */}
        <ServicesGridBox />
        <FullWeddingPlanningComponents />
        <FaqsSection faqs={faqsData} />

        <TimelessMomentsComponent />
      </div>
    </div>
  );
};

export default Services;
