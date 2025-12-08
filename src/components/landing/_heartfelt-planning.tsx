import Image from "next/image";
import HeaderSections from "../header-sections";
import ScrollFadeProvider from "../ScrollFadeProvider";

interface HeartfeltPlanningProps {
  icon: string;
  title: string;
  description: string;
}

export default function HeartfeltPlanning({
  data,
}: {
  data: HeartfeltPlanningProps[];
}) {
  return (
    <div className="flex flex-col items-center w-full gap-7">
      <ScrollFadeProvider
        selector=".heart-felt-planning"
        enabledStagger={true}
        position="top 50%"
        staggerTimeLine={0.3}
      />
      <div className="flex flex-col items-center w-full">
        <HeaderSections className="heart-felt-planning" />
        <b className="text-lg md:text-2xl heart-felt-planning">
          برنامه‌ریزی صمیمانه
        </b>
      </div>

      <div className="flex w-full justify-between items-stretch gap-5 flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
        {data.map((box, i) => (
          <div
            key={i}
            className="w-full md:w-[calc(100%/2-10px)] lg:w-1/4 flex flex-col items-start gap-5 border-2 border-solid border-[var(--brown)] rounded-2xl p-5 heart-felt-planning"
          >
            <Image
              src={box.icon}
              height={80}
              width={80}
              alt="icon"
              className="object-cover"
            />

            <b className="text-base md:text-lg">{box.title}</b>
            <p className="text-sm md:text-base text-black/70 flex-1">
              {box.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
