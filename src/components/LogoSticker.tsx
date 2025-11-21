import Image from "next/image";
import { memo } from "react";

function LogoSticker() {
  return (
    <Image
      src={"/images/barsava logo(gold).PNG"}
      alt="logo"
      width={86}
      height={93.4}
      className="fixed bottom-[30px] left-[30px] object-cover z-50"
    />
  );
}

export default memo(LogoSticker);
