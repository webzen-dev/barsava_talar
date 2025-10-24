"use client";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const toEnglishDigits = (str: string) => {
  return str.replace(/[\u06F0-\u06F9\u0660-\u0669]/g, (d) =>
    String("۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩".indexOf(d))
  );
};

const phoneSchema = z
  .string()
  .transform((val) => toEnglishDigits(val))
  .refine((val) => /^09\d{9}$/.test(val), {
    message: "شماره تلفن معتبر نیست (باید با 09 شروع شود و 11 رقم باشد).",
  });

const Register = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      const firstError =
        result.error.issues[0]?.message || "شماره وارد شده معتبر نیست";
      toast.error(firstError);
    } else {
      setPhone("");
      router.push("/otp-code");
      toast.success("کد با موفقیت ارسال شد !  ");
    }
  };

  return (
    <div className="w-full h-[100vh] p-10 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <b className="text-2xl">برای رزرو ابتدا شماره تلفن خود را وارد کنید</b>
        <div className="w-[250px] h-[40px] border-[2px] border-solid border-[#dec39a] rounded-lg">
          <input
            dir="ltr"
            type="number"
            className="bg-none outline-none border-none w-full h-full px-2 text-black/30"
            placeholder="09150000000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          className="w-[250px] h-[30px] border-none bg-[#dec39a] rounded-lg cursor-pointer text-sm"
          type="submit"
        >
          دریافت کد
        </button>
      </form>
    </div>
  );
};

export default Register;
