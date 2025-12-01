"use client";
import { ContactUsScheme } from "@/lib/validation/schema";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { toast } from "sonner";

const ContactUsForm = () => {
  const [first_name, setFirst_Name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneError, setPhoneError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (!/^09\d{9}$/.test(value)) {
      setPhoneError("شماره تلفن باید 11 رقم باشد و با 09 شروع شود");
    } else {
      setPhoneError("");
    }
  };

  const [message, setMessage] = useState<string>("");
  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (phoneError) {
      toast.error("شماره تلفن نامعتبر است");
      return;
    }
    if (!isChecked) {
      toast.error("لطفا با دریافت پیام‌های ارتباطی موافقت کنید");
      return;
    }

    const formData = {
      first_name,
      last_name,
      phone_number: phoneNumber,
      message,
    };

    const result = ContactUsScheme.safeParse(formData);
    if (!result.success) {
      toast.error("فرم نامعتبر است");
      return;
    }

    try {
      const res = await axios.post("/api/contact-us", formData);

      if (res.status === 201) {
        toast.success("پیام شما با موفقیت ارسال شد");
        setFirst_Name("");
        setLast_name("");
        setPhoneNumber("");
        setMessage("");
      } else {
        toast.error("مشکلی در ارسال پیام رخ داد");
      }
    } catch (error) {
      toast.error("ارسال پیام ناموفق بود");
      console.error(error);
    }
  }

  return (
    <div className="w-full flex gap-10 justify-between items-start  max-md:flex-col">
      {/* ContactUsFormls */}

      <div className="flex  flex-col gap-2.5 w-[50%] max-w-[600px]  max-md:w-full max-md:max-w-none">
        <b className="text-2xl">بیایید صحبت کنیم !</b>
        <span>
          با استفاده از فرم درخواست یا اطلاعات تماس زیر با ما تماس بگیرید
        </span>
        <form
          // action=""
          onSubmit={Submit}
          className="flex flex-col border-[1px] border-solid border-[rgba(0,0,0,0.2)] rounded-lg p-5  gap-5 "
        >
          <div className="flex justify-between  items-center gap-2.5 w-full max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-2 w-[50%] max-sm:w-full">
              <span className="text-base">نام</span>
              <input
                type="text"
                onChange={(e) => setFirst_Name(e.target.value)}
                className="w-[100%] border-[1px] h-[40px]  rounded-sm  border-solid border-[rgba(0,0,0,0.2)] flex items-center px-2 text-sm  text-[rgba(0,0,0,0.5)]"
                placeholder="علی"
                value={first_name}
              />
            </div>
            <div className="flex flex-col gap-2 w-[50%] max-sm:w-full">
              <span className="text-base">نام خانوادگی</span>
              <input
                type="text"
                onChange={(e) => setLast_name(e.target.value)}
                className="w-[100%] border-[1px] h-[40px]  rounded-sm  border-solid border-[rgba(0,0,0,0.2)] flex items-center px-2 text-sm  text-[rgba(0,0,0,0.5)]"
                placeholder="رضایی"
                value={last_name}
              />
            </div>
          </div>{" "}
          <div className="flex justify-between  items-center gap-2.5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-base">شماره تلفن</span>
              <input
                value={phoneNumber}
                onChange={handlePhoneChange}
                type="text"
                className={`w-[100%] border-[1px] h-[40px] rounded-sm px-2 text-sm 
    ${phoneError ? "border-red-500" : "border-[rgba(0,0,0,0.2)]"}`}
                placeholder="09150000000"
              />
            </div>
          </div>{" "}
          <div className="flex justify-between  items-center gap-2.5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-base">پیام</span>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-[100%] border-[1px] h-[80px]  rounded-sm  border-solid border-[rgba(0,0,0,0.2)] flex items-center p-2 resize-none text-sm  text-[rgba(0,0,0,0.5)]"
                placeholder="تایپ کردن چیزی...."
              />
            </div>
          </div>{" "}
          <div className="flex items-center gap-2.5 w-full cursor-pointer text-sm">
            <input
              type="checkbox"
              id="checkbox-contact-form"
              className="hidden peer"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />

            <label
              htmlFor="checkbox-contact-form"
              className="
      w-[18px] h-[18px] border border-black/20 rounded-sm 
      flex items-center justify-center
      peer-checked:bg-sky-300 cursor-pointer
    "
            >
              <MdCheck className="text-[#F7F1EA]" />
            </label>

            <label htmlFor="checkbox-contact-form" className=" cursor-pointer">
              من با دریافت پیام‌های ارتباطی دیگر موافقم{" "}
              <span className="text-red-900">*</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full h-[40px] rounded-lg  cursor-pointer bg-[#423A2F] text-[#F7F1EA]
          
          
          "
          >
            ارسال
          </button>
        </form>
      </div>
      <div className="flex flex-1  w-[50%] pt-[75px]  flex-col gap-5 max-md:w-full">
        <div className="relative w-[100%] h-[300px] ">
          <Image
            fill
            src={"/images/DSC07690.jpg"}
            alt="contact  us image"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex justify-between w-full items-center max-lg:flex-col max-lg:items-start gap-5">
          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] border border-black/20 rounded-sm text-2xl text-[#423A2F] ">
              <TfiEmail />
            </div>
            <div className="flex flex-col text-sm gap-[2px]">
              <span className="font-bold">ایمل ما</span>
              <a href="" className="text-xs">
                barasava@gmail.com
              </a>
            </div>
          </div>{" "}
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] border border-black/20 rounded-sm text-2xl text-[#423A2F] ">
              <CiLocationOn />
            </div>
            <div className="flex flex-col text-sm gap-[2px]">
              <span className="font-bold">ادرس باغ تالار </span>
              <a href="" className="text-xs">
                مشهد_جاده شاندیز روبروی موجهای خروشان مدرس ۱/۶
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full items-center max-md:flex-col max-md:items-start gap-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] border border-black/20 rounded-sm text-2xl text-[#423A2F] ">
              <IoCallOutline />
            </div>
            <div className="flex flex-col text-sm gap-[2px]">
              <span className="font-bold"> شماره تلفن</span>
              <a href="tel:09154013935" className="text-xs">
                09154013935
              </a>
            </div>
          </div>{" "}
          <div className="flex items-center gap-5 w-[320px] max-lg:w-auto">
            <div className="flex items-center justify-center w-[40px] h-[40px] border border-black/20 rounded-sm text-2xl text-[#423A2F] ">
              <IoCallOutline />
            </div>
            <div className="flex flex-col text-sm gap-[2px]">
              <span className="font-bold"> شماره تلفن</span>
              <a href="tel:09153016115" className="text-xs">
                09153016115
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
