"use client";

import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

import DateObject from "react-date-object";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { reservationSchema } from "@/lib/validation/schema";

export default function ReservationForm() {
  const [first_name, setFirst_Name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [guests, setGuests] = useState<number>();
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const data = {
    first_name,
    last_name,
    phone_number,
    guests,
    date,
    description,
    memberId: 2,
  };
  async function onSubmit(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = reservationSchema.safeParse(data);
    if (!result.success) {
      toast.error("فرم نامعتبر است");
      return;
    }
    try {
      const res = await axios.post("/api/reservation", data);
      if (res.status === 200) {
        toast.success("پیام شما با موفقیت ارسال شد");
        setFirst_Name("");
        setLast_name("");
        setGuests(0);
        setDate("");
        setPhoneNumber("");
        setDescription("");
      } else {
        toast.error("مشکلی در ارسال درخواست رزرو شما پیش آمده  !");
      }
    } catch (error) {
      toast.error("مشکلی در ارسال درخواست رزرو شما پیش آمده  !");
      console.error(error);
    }
  }

  return (
    <div className="flex-1 bg-[var(--page-background)] flex flex-col text-[var(--brown)] p-5 items-center gap-5 2xl:p-10 2xl:gap-10">
      <b className="text-2xl max-sm:text-lg">رزرو کنید !</b>
      <span className="text-[var(--brow)]/70 text-sm text-center max-sm:text-xs">
        رویایی‌ترین لحظه‌های زندگی‌تان اینجاست! شما و عزیزانتان فقط یک قدم با
        برگزاری جشن باشکوه در تالار لوکس فاصله دارید.
      </span>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 w-full flex-1 2xl:gap-7.5"
      >
        <div className="flex justify-between gap-5 w-full max-sm:flex-col">
          {/* input box */}
          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full">
            <span>نام</span>
            <input
              value={first_name}
              onChange={(e) => setFirst_Name(e.target.value)}
              type="text"
              className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)]   bg-[rgba(66,58,47,0.1)] rounded-t-lg"
              placeholder="علی"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full ">
            <span>نام خوانوادگی</span>
            <input
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
              type="text"
              className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)]  bg-[rgba(66,58,47,0.1)] rounded-t-lg"
              placeholder="رضایی"
            />
          </div>
        </div>{" "}
        <div className="flex justify-between gap-5 w-full max-sm:flex-col">
          {/* input box */}

          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full">
            <span>تاریخ مراسم</span>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              placeholder="تاریخ را انتخاب کنید"
              minDate={new Date()}
              value={date ? new DateObject(date) : null}
              onChange={(d: DateObject) => setDate(d.toDate().toISOString())}
              inputClass="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)] bg-[rgba(66,58,47,0.1)] rounded-t-lg"
              className="custom-calendar"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full ">
            <span>تعداد مهمان ها </span>
            <input
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              type="number"
              className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)]  bg-[rgba(66,58,47,0.1)] rounded-t-lg"
              placeholder="حداکثر 500 نفر"
            />
          </div>
        </div>{" "}
        <div className="flex flex-col gap-2.5 w-full ">
          <span>شماره تلفن</span>
          <input
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)]  bg-[rgba(66,58,47,0.1)] rounded-t-lg"
            placeholder="0915000000"
          />
        </div>
        <div className="flex justify-between gap-5 w-full">
          {/* input box */}
          <div className="flex flex-col gap-2.5 w-full ">
            <span>توضیحات</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-5 text-sm flex items-center h-[90px] border-b-2 border-b-solid border-b-[var(--brown)]  bg-[rgba(66,58,47,0.1)] rounded-t-lg resize-none
                  "
              placeholder="تایپ کنید ..."
            />
          </div>
        </div>
        <button
          className="w-full h-[40px] rounded-sm bg-[var(--gold)] cursor-pointer"
          type="submit"
        >
          رزرو
        </button>
      </form>
    </div>
  );
}
