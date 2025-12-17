import { GoComment, GoMegaphone, GoPencil, GoPerson } from "react-icons/go";

export default function InputComments() {
  return (
    <div className="w-full">
      <div className="w-full h-full p-5 md:p-10 border-[rgba(0,0,0,0.1)] border-2 rounded-xl flex flex-col gap-10">
        <b className="text-base md:text-2xl text-[rgba(0,0,0,0.7)]">
          نظر خود را درباره تالار بارثاوا بنویسید !
        </b>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 flex-col md:flex-row">
            {/* Fullname */}
            <label className="w-full md:w-1/2 relative h-16 rounded-lg items-center flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2 ">
              <GoPerson className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
              <input
                type="text"
                className="flex-1 h-full outline-none bg-none"
              />

              <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)] text-sm md:text-base">
                نام و نام خانوادگی :
              </span>
            </label>

            {/* Phone */}
            <label className="w-full md:w-1/2 relative h-16 rounded-lg items-center flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2">
              <GoMegaphone className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
              <input
                type="text"
                className="flex-1 h-full outline-none bg-none"
              />

              <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)] text-sm md:text-base">
                شماره تماس :
              </span>
            </label>
          </div>

          {/* Title */}
          <label className="w-full relative h-16 rounded-lg items-center flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2">
            <GoPencil className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
            <input type="text" className="flex-1 h-full outline-none bg-none" />

            <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)] text-sm md:text-base">
              عنوان پیام :
            </span>
          </label>

          {/* Message */}
          <label className="w-full relative h-32 rounded-lg pt-4 flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2">
            <GoComment className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
            <textarea className="flex-1 h-full outline-none resize-none" />

            <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)] text-sm md:text-base">
              پیام :
            </span>
          </label>
        </div>

        <button className="bg-[var(--gold)] text-white w-full md:w-60 py-2 rounded-lg cursor-pointer disabled:opacity-60">
          ثبت نظر
        </button>
      </div>
    </div>
  );
}
