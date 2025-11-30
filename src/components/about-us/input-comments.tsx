import { GoComment, GoMegaphone, GoPencil, GoPerson } from "react-icons/go";

export default function InputComments() {
  return (
    <div className="w-full px-5 md:px-10">
      <div className="w-full h-full p-5 md:p-10 border-[rgba(0,0,0,0.1)] border-2 rounded-xl flex flex-col gap-10">
        <b className="text-xl md:text-2xl text-[rgba(0,0,0,0.7)]">
          نظر خود را درباره تالار بارثاوا بنویسید !
        </b>
        <div className="flex flex-col  gap-5">
          <div className="flex gap-5 flex-col md:flex-row">
            <label className="w-full md:w-1/2 relative h-16 rounded-lg items-center shadow-none shadow-[rgba(0,0,0,0.1)] flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2 ">
              <GoPerson className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
              <input
                type="text"
                className="flex-1 h-full outline-none bg-none"
              />

              <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)]">
                نام خانوادگی :
              </span>
            </label>{" "}
            <label className="w-full md:w-1/2 relative h-16 rounded-lg items-center shadow-none shadow-[rgba(0,0,0,0.1)] flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2 ">
              <GoMegaphone className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
              <input
                type="text"
                className="flex-1 h-full outline-none bg-none"
              />

              <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)]">
                شماره تماس :
              </span>
            </label>
          </div>
          <label className="w-full relative h-16 rounded-lg items-center shadow-none shadow-[rgba(0,0,0,0.1)] flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2 ">
            <GoPencil className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
            <input type="text" className="flex-1 h-full outline-none bg-none" />

            <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)]">
              عنوان پیام :
            </span>
          </label>{" "}
          <label className="w-full relative h-32 rounded-lg pt-4 shadow-none shadow-[rgba(0,0,0,0.1)] flex gap-2 ps-4 border-[rgba(0,0,0,0.1)] border-2 ">
            <GoComment className="h-7 w-7 text-[rgba(0,0,0,0.3)]" />
            <textarea className="flex-1 h-full outline-none  resize-none" />

            <span className="absolute -top-6 transform translate-y-1/2 bg-[#F7F1EA] px-2 text-[rgba(0,0,0,0.3)]">
               پیام :
            </span>
          </label>
        </div>
        <button className="bg-[#dec39a] text-white w-full md:w-60 py-2 rounded-lg cursor-pointer">ثبت نظر</button>
      </div>
    </div>
  );
}
