import FoodMenuBox from "@/components/food-menu/food-menu-box";
import { menuData } from "./global-data";

export default function FoodMenu() {
  return (
    <div className="pt-30 gap-15 flex flex-col min-h-screen container mx-auto px-5 md:px-10">
        <div className="flex flex-col gap-4 px-5 text-center items-center">
          <b className="text-lg md:text-2xl">
            گزینه‌های غذایی باغ تالار برای هر سلیقه
          </b>

          <span className="text-sm text-black/40 md:text-lg lg:max-w-2/5">
            تمام منوها با استاندارد پذیرایی باغ تالار آماده شده‌اند تا بهترین
            انتخاب را برای مراسم خود داشته باشید.
          </span>
        </div>
      <FoodMenuBox menuData={menuData} />
    </div>
  );
}
