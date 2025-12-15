/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {  useState } from "react";
// import axios from "axios";
// import { toast } from "sonner";

interface MessageType {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const res = await axios.get("/api/contact-us");
  //       setMessages(res.data.data);
  //     } catch (err) {
  //       toast.error("خطا در دریافت پیام‌ها");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMessages();
  // }, []);

//   const handleDelete = async (id: number) => {
//     try {
//       await axios.delete(`/api/contact-us/${id}`);
//       setMessages((prev) => prev.filter((msg) => msg.id !== id));
//       toast.success("پیام با موفقیت حذف شد");
//     } catch (err) {
//       toast.error("خطا در حذف پیام");
//     }
//   };
// ;

  return (
    <div className="h-full w-full bg-[rgba(236,236,236,0.8)] p-5 flex max-h-full overflow-y-auto gap-5 flex-col">
      <b className="text-xl">پیام ها</b>
      {loading && <b>در حال بارگذاری پیام</b>}
      {messages.length === 0 || loading && <p>هیچ پیامی یافت نشد.</p>}

      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`w-full py-2.5 px-5 bg-white flex gap-5 flex-col rounded-lg shadow-lg text-[rgba(94,94,94,0.8)] transition-opacity duration-300 ${
            msg.isRead ? "opacity-50" : ""
          }`}
        >
          <div className="flex w-full flex-1 justify-between gap-5 items-start max-md:flex-col">
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2.5 items-center max-md:flex-col">
                <span>نام :</span>
                <span>{msg.first_name}</span>
              </div>
              <div className="flex gap-2.5 items-center max-md:flex-col">
                <span>نام خانوادگی :</span>
                <span>{msg.last_name}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2.5 items-center max-md:flex-col">
                <span>شماره تلفن :</span>
                <span>{msg.phone_number}</span>
              </div>
              <div className="flex gap-2.5 items-center max-md:flex-col">
                <span>تاریخ ثبت :</span>
                <span>
                  {new Date(msg.createdAt).toLocaleString("fa-IR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              <span>توضیحات:</span>
              <span>{msg.message}</span>
            </div>

            <div className="flex flex-col gap-2.5 max-md:w-full
            ">
              {/* <button
                className="px-2.5 py-[4px] text-sm cursor-pointer bg-green-500 rounded-sm text-white disabled:opacity-50 max-md:w-full"
                disabled={msg.isRead}
                onClick={() => handleCheck(msg.id)}
              >
                برسی شد
              </button> */}
              <button
                className="px-2.5 py-[4px] text-sm cursor-pointer bg-red-500 rounded-sm text-white max-md:w-full"
                // onClick={() => handleDelete(msg.id)}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
