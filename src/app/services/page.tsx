import ServicesHero from "@/components/services/_services-hero";
import OtherServices from "@/components/services/_other-services";
import Facilities from "@/components/services/_facilities";
import FoodMenuBox from "@/components/services/food-menu/_food-menu-box";
import FaqsSection from "@/components/landing/faq-section";

import { menuData } from "@/data/food-menu-data";

export default function Services() {
  return (
    <div className="flex flex-col gap-30 pt-30">
      <div className="container mx-auto px-5 md:px-10 gap-30 flex flex-col">
        <ServicesHero />
      </div>

      <OtherServices />

      <div className="container mx-auto px-5 md:px-10 gap-30 flex flex-col">
        <Facilities />
        <FoodMenuBox menuData={menuData} />
        <FaqsSection />
      </div>
    </div>
  );
}
