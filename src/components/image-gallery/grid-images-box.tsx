import clsx from "clsx";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery/1.jpg", column: 0 },
  { src: "/images/gallery/2.jpg", column: 1 },
  { src: "/images/gallery/2.webp", column: 2 },
  { src: "/images/gallery/3.jpg", column: 1 },
  { src: "/images/gallery/4.jpg", column: 0 },
  { src: "/images/gallery/4.webp", column: 1 },
  { src: "/images/gallery/5.jpg", column: 2 },
  { src: "/images/gallery/5.webp", column: 0 },
  { src: "/images/gallery/6.jpg", column: 2 },
  { src: "/images/gallery/6.webp", column: 2 },
  { src: "/images/gallery/1.jpg", column: 0 },
  { src: "/images/gallery/2.jpg", column: 1 },
  { src: "/images/gallery/2.webp", column: 2 },
  { src: "/images/gallery/3.jpg", column: 1 },
  { src: "/images/gallery/4.jpg", column: 0 },
  { src: "/images/gallery/4.webp", column: 1 },
  { src: "/images/gallery/5.jpg", column: 2 },
  { src: "/images/gallery/5.webp", column: 0 },
  { src: "/images/gallery/6.jpg", column: 2 },
  { src: "/images/gallery/6.webp", column: 0 },
  { src: "/images/gallery/6.webp", column: 1 },
];

function shuffleArray() {
  const shuffled = [...galleryImages];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
const randomizedImages = shuffleArray();

export default function GridImagesBox() {
  const columns = Array.from({ length: 4 }, (_, i) =>
    randomizedImages
      .filter((img) => img.column === i)
      .sort((a, b) => a.column - b.column)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full px-10">
      {columns.map((col, i) => (
        <div key={i} className="flex flex-col gap-6 items-stretch">
          {col.map((img, i) => (
            <div
              key={i}
              className={clsx(
                "relative rounded-2xl",
                i === galleryImages.length - 1 &&
                  i === col.length - 1 &&
                  "col-span-full md:col-span-full lg:col-span-1 w-full"
              )}
            >
              <Image
                src={img.src}
                alt=""
                width={400}
                height={400}
                className="object-contain min-w-full rounded-2xl"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
