import clsx from "clsx";
import Image from "next/image";
import { memo } from "react";

function HeaderSection({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "w-full h-0.5 md:max-w-[40%] relative border-1 border-[var(--brown)] mb-10",
        className
      )}
    >
      <Image
        className="object-cover bg-[var(--page-background)] absolute -top-1/2 left-1/2 transform -translate-1/2 p-3"
        draggable="false"
        src="/images/flower.svg"
        alt="flower icon"
        width={72}
        height={72}
      />
    </div>
  );
}

export default memo(HeaderSection);
