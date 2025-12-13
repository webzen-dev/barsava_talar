import { MenuItem } from "@/data/food-menu-data";

interface FoodMenuItemProps {
  isOpen: () => void;
  menuData: MenuItem;
}

export default function FoodMenuItem({ menuData, isOpen }: FoodMenuItemProps) {
  return (
    <div className="min-h-screen bg-black/10 backdrop-blur-lg w-full fixed inset-0 z-60 overflow-y-auto">
      <div className="w-9/10 md:w-4/5 lg:w-2/3 xl:w-1/2 min-h-full bg-white h-auto flex flex-col gap-7 p-10 relative">
        <b className="text-4xl text-center">{menuData.title}</b>
        <div className="flex-col flex md:flex-row gap-5 w-full justify-between">
          <div
            className={`flex gap-7 flex-col flex-1/2 md:border-l-2 md:border-l-black/20 ${
              !menuData.desserts?.length
                ? "border-l-none flex-1 justify-center min-w-full items-center text-center border-none"
                : ""
            }`}
          >
            <b className="text-2xl">غذای اصلی:</b>
            <div className="flex gap-5 text-black/70 flex-col text-sm">
              {menuData?.mainFood?.map((food: string, index: number) => (
                <span key={index}>{food}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-7 flex-col  flex-1/2 max-md:pt-5 b">
            {menuData.sections
              .slice(0, 2)
              .map(
                (
                  section: { title: string; items: string[] },
                  index: number
                ) => (
                  <div className="flex flex-col gap-7" key={index}>
                    <b className="text-2xl">{section.title} :</b>
                    <div className="flex gap-5 text-black/70 flex-col text-sm">
                      {section.items.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>

        <div className="flex-col flex md:flex-row gap-5 w-full justify-between ">
          {menuData.sections
            .slice(2, 4)
            .map(
              (section: { title: string; items: string[] }, index: number) => (
                <div
                  className="flex gap-5 max-md:py-2.5 md:gap-7 flex-col flex-1/2 md:border-l-2 md:border-l-black/20 last:border-none"
                  key={index}
                >
                  <b className="text-2xl">{section.title} :</b>
                  <div className="flex gap-5 text-black/70 flex-col text-sm">
                    {section.items.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </div>
              )
            )}
        </div>
        <div className="flex-col flex md:flex-row gap-5 w-full justify-between flex-1">
          <div className="flex gap-7 flex-col flex-1/2 ">
            {menuData.ceremonies.length > 1 && (
              <b className="text-2xl"> تشریفات :</b>
            )}
            <div className="flex gap-5 text-black/70 flex-wrap text-sm ">
              {menuData.ceremonies.map((ce: string, index: number) => (
                <span
                  key={index}
                  className="w-fit max-md:border-b-2 max-md:border-b-black/10 max-md:w-full max-md:pb-5 md:border-l-2 md:border-l-black/10 pl-5 last:border-none"
                >
                  {ce}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          className=" bg-red-400 text-white py-2 px-4 rounded-lg cursor-pointer text-sm mt-10"
          onClick={isOpen}
        >
          بستن منو
        </button>
      </div>
    </div>
  );
}
