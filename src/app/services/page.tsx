"use client";
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

const FaqComponent = dynamic(() => import("@/components/landing/Faq"));

const Services = () => {
  return (
    <div className="bg-[#F7F1EA] overflow-hidden pt-18 px-5 md:px-10 flex flex-col pb-10 gap-10">
      <ServicesHeroComponent /> 
      <div className="container mx-auto flex flex-col gap-10">
        {/* <OurServicesSectionsComponent /> */}
        <ServicesGridBox />
        <FullWeddingPlanningComponents />
        <TimelessMomentsComponent />
        <FaqComponent />
      </div>
    </div>
  );
};

export default Services;
