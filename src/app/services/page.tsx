import ServicesHero from "@/components/services/services-hero";
import OtherServices from "@/components/services/other-services";
import Facilities from "@/components/services/facilities";
import FoodMenuBox from "@/components/services/food-menu/food-menu-box";
import FaqsSection from "@/components/landing/faq-section";

import { menuData } from "@/data/food-menu-data";

export default function Services() {
  return (
    <div className="grid gap-30">
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
