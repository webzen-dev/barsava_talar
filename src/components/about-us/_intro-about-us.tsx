import Image from "next/image";
import Link from "next/link";

export  interface IntroAboutUsProps {
    direction: "rtl" | "ltr",
    content: {
        title: string,
        caption: string,
        src: string,
        link: {
            label: string,
            href: string
        }
    }
}

export default function IntroAboutUs({ direction, content }: IntroAboutUsProps) {
    return (
        <div className={`w-full flex relative px-5 md:px-10 items-center flex-col gap-5 
            ${direction === "rtl" ? "md:flex-row" : "md:flex-row-reverse"} 
        `}>
            <div className={`md:w-3/5 lg:w-2/5 bg-[#F7F1EA] flex flex-col gap-8 p-10 transform z-10 rounded-xl shadow-xl
                ${direction === "rtl"?"md:-translate-x-1/5":"md:translate-x-1/5" }
                `}>
                <b className="text-2xl">{content?.title}</b>
                <span className="text-[rgba(0,0,0,0.7)]">{content?.caption}</span>
                <Link href={content?.link.href} className="text-white bg-[#dec39a] max-w-48 py-2 rounded-lg cursor-pointer flex items-center justify-center">{content.link.label}</Link>
            </div>

            <div className="aspect-square md:aspect-auto md:h-98 w-full md:w-4/5 relative">
                <Image src={content?.src}
                    className="object-cover relative rounded-xl"
                    fill
                    alt={content?.title}    
                />
            </div>
        </div>
    )
}