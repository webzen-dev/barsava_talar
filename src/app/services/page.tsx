"use client";
import dynamic from "next/dynamic";

const ServicesHeroComponent = dynamic(
  () => import("@/components/services/ServicesHero")
);
const OurServicesSectionsComponent = dynamic(
  () => import("@/components/landing/OurServicesSections")
);
const FullWeddingPlanningComponents = dynamic(
  () => import("@/components/services/FullWeddingPlanning")
);
const TimelessMomentsComponent = dynamic(
  () => import("@/components/landing/TimelessMoments")
);
const FaqComponent = dynamic(() => import("@/components/landing/Faq"));
const Services = () => {
  return (
    <div className="bg-[#F7F1EA] min-h-[100vh] overflow-hidden ">
      <ServicesHeroComponent />
      <OurServicesSectionsComponent />
      <FullWeddingPlanningComponents />
      <TimelessMomentsComponent />
      <FaqComponent />
    </div>
  );
};

export default Services;
