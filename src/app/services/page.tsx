import FaqsSection from "@/components/landing/faq-section";
import TimelessMoments from "@/components/landing/timeless-moments-section";
import WeddingPlans from "@/components/services/_wedding-palans";
import ServicesGridBox from "@/components/services/services-grid-box";
import ServicesHero from "@/components/services/ServicesHero";



export default function Services() {
  return (
    <div className="px-5 md:px-10 flex flex-col pb-10 gap-10 pt-30">
      <ServicesHero />
      <div className="container mx-auto flex flex-col gap-10">
        <ServicesGridBox />
        <WeddingPlans />
        <FaqsSection  />  
        <TimelessMoments />
      </div>
    </div>
  );
}
