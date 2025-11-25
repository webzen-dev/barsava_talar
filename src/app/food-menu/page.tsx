import FoodMenuBox from "@/components/food-menu/food-menu-box";
import FoodMenuHeroSection from "@/components/food-menu/food-menu-hero-section";
import { menuData } from "./global-data";

export default function FoodMenu() {
  return (
    <div className="pt-[90px] flex flex-col min-h-screen">
      <FoodMenuHeroSection />
      <FoodMenuBox menuName="منو انتخابی" menuData={menuData.SelectedMenu} />
      <FoodMenuBox menuName="منو پرسی" menuData={menuData.PorsiMenus} />
      <FoodMenuBox menuName="منو سلف" menuData={menuData.SelfMenus} />
    </div>
  );
}
