import Image from "next/image";
import Link from "next/link";
import ScrollFadeProvider from "../ScrollFadeProvider";
import clsx from "clsx";

export interface IntroAboutUsProps {
  direction: "rtl" | "ltr";
  content: {
    title: string;
    caption: string;
    src: string;
    link: {
      label: string;
      href: string;
    };
  };
}

export default function IntroAboutUs({
  direction,
  content,
}: IntroAboutUsProps) {
  return (
    <div
      className={clsx(
        "w-full flex relative items-center flex-col gap-5",
        direction === "rtl" ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <ScrollFadeProvider selector=".intro-about-page" position="top 40%" />

      <div
        className={clsx(
          "md:w-3/5 lg:w-2/5 bg-[var(--page-background)] flex flex-col gap-8 p-10 transform z-10 rounded-xl shadow-xl intro-about-page",
          direction === "rtl" ? "md:-translate-x-1/5" : "md:translate-x-1/5"
        )}
      >
        <b className="text-2xl intro-about-page">{content?.title}</b>

        <span className="text-[rgba(0,0,0,0.7)] intro-about-page">
          {content?.caption}
        </span>
        <Link
          href={content?.link.href}
          className="text-white bg-[var(--gold)] max-w-48 py-2 rounded-lg cursor-pointer flex items-center justify-center intro-about-page"
        >
          {content.link.label}
        </Link>
      </div>

      <div className="aspect-square md:aspect-auto md:h-98 w-full md:w-4/5 relative">
        <Image
          src={content?.src}
          className="object-cover relative rounded-xl intro-about-page"
          fill
          alt={content?.title}
        />
      </div>
    </div>
  );
}
