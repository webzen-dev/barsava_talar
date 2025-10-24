"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const OtpCode = () => {
  const router = useRouter()
  const numInputs = 6;
  const [otp, setOtp] = useState<string[]>(Array(numInputs).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < numInputs - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    router.push("/reservation")
    console.log("OTP entered:", otpCode);

  };

  return (
    <div
      className="w-full h-[100vh] p-10 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-5">
        <b className="text-2xl">کد ارسال شده را وارد نمایید</b>
        <div className="h-[40px] flex gap-2.5" dir="ltr">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el!;
              }}
              dir="ltr"
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="bg-none outline-none border-[2px] border-solid border-[#dec39a] w-[40px] h-[40px] px-2 text-center text-black/30 rounded-sm"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-[250px] h-[30px] border-none bg-[#dec39a] rounded-lg cursor-pointer text-sm"
        >
          بررسی کد
        </button>
      </div>
    </div>
  );
};

export default OtpCode;
