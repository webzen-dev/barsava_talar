export default function CommentItem({
  data,
}: {
  data: {
    id: number;
    fullName: string;
    title: string;
    message: string;
    phoneNumber: string;
  };
}) {
  return (
    <div className="w-full p-5 flex flex-col gap-2 bg-white/50 rounded-lg shadow-md shadow-black/5">
      <div className="grid md:flex gap-2">
        <span className="font-bold md:text-lg">عنوان :</span>
        <p className="text-black/60">{data.title}</p>
      </div>
      <div className="grid md:flex gap-2">
        <span className="font-bold md:text-lg">پیام :</span>
        <p className="text-black/60">{data.message}</p>
      </div>
      <div className="grid md:flex gap-2">
        <span className="font-bold md:text-lg">نام و نام خانوادگی :</span>
        <span className="text-black/60">{data.fullName}</span>
      </div>
      <div className="grid md:flex gap-2">
        <span className="font-bold md:text-lg">شماره تلفن :</span>
        <span className="text-black/60">{data.phoneNumber}</span>
      </div>

      {/* control button */}
      <div className="flex flex-col md:flex-row gap-3 *:text-white">
        <button className="bg-green-400 px-5 py-1.5 rounded-md cursor-pointer">
          ثبت
        </button>

        <button className="bg-red-400 px-5 py-1.5 rounded-md cursor-pointer">
          حذف
        </button>
      </div>
    </div>
  );
}
