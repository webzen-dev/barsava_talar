"use client";

import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

import DateObject from "react-date-object";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { reservationSchema } from "@/lib/validation/schema";

type FormDataType = {
  first_name: string;
  last_name: string;
  phone_number: string;
  guests: number;
  date: string;
  description: string;
};

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormDataType>({
    first_name: "",
    last_name: "",
    phone_number: "",
    guests: 0,
    date: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.type === "number" ? Number(value) : value,
    }));
  };

  const handleDateChange = (d: DateObject) => {
    setFormData((prev) => ({
      ...prev,
      date: d.toDate().toISOString(),
    }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = reservationSchema.safeParse(formData);
    if (!result.success) {
      toast.error("فرم نامعتبر است");
      return;
    }

    try {
      const res = await axios.post("/api/reservation", formData);
      if (res.status === 200) {
        toast.success("پیام شما با موفقیت ارسال شد");
        setFormData({
          first_name: "",
          last_name: "",
          phone_number: "",
          guests: 0,
          date: "",
          description: "",
        });
      } else {
        toast.error("مشکلی در ارسال درخواست رزرو شما پیش آمده  !");
      }
    } catch (error) {
      toast.error("مشکلی در ارسال درخواست رزرو شما پیش آمده  !");
      console.error(error);
    }
  }

  return (
    <div className="flex-1 bg-[var(--page-background)] flex flex-col text-[var(--brown)] pb-20 p-5 items-center gap-5 2xl:p-10 2xl:gap-10">
      <b className="md:text-2xl">رزرو کنید !</b>
      <span className="text-[var(--brown)]/70 text-sm text-center md:text-base">
        رویایی‌ترین لحظه‌های زندگی‌تان اینجاست! شما و عزیزانتان فقط یک قدم با
        برگزاری جشن باشکوه در تالار لوکس فاصله دارید.
      </span>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 w-full flex-1 2xl:gap-7.5"
      >
        <div className="flex justify-between gap-5 w-full max-sm:flex-col">
          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full">
            <span>نام</span>
            <input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              type="text"
              className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)] bg-[var(--brown)]/10 rounded-t-lg"
              placeholder="علی"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full ">
            <span>نام خانوادگی</span>
            <input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              type="text"
              className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)] bg-[var(--brown)]/10 rounded-t-lg"
              placeholder="رضایی"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full max-sm:flex-col">
          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full">
            <span>تاریخ مراسم</span>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              placeholder="تاریخ را انتخاب کنید"
              minDate={new Date()}
              value={formData.date ? new DateObject(formData.date) : null}
              onChange={handleDateChange}
              inputClass="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)] bg-[var(--brown)]/10 rounded-t-lg"
              className="custom-calendar"
            />
          </div>
          <div className="flex flex-col gap-2.5 w-1/2 max-sm:w-full ">
            <span>تعداد مهمان ها </span>
            <input
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              type="number"
              className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)] bg-[var(--brown)]/10 rounded-t-lg"
              placeholder="حداکثر 500 نفر"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2.5 w-full ">
          <span>شماره تلفن</span>
          <input
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            type="text"
            className="w-full px-5 text-sm flex items-center h-[40px] border-b-2 border-b-solid border-b-[var(--brown)] bg-[var(--brown)]/10 rounded-t-lg"
            placeholder="0915000000"
          />
        </div>
        <div className="flex justify-between gap-5 w-full">
          <div className="flex flex-col gap-2.5 w-full ">
            <span>توضیحات</span>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-5 text-sm flex items-center h-[90px] border-b-2 border-b-solid border-b-[var(--brown)] bg-[var(--brown)]/10 rounded-t-lg resize-none"
              placeholder="تایپ کنید ..."
            />
          </div>
        </div>
        <button
          className="w-full h-10 rounded-sm bg-[var(--gold)] cursor-pointer"
          type="submit"
        >
          رزرو
        </button>
      </form>
    </div>
  );
}
