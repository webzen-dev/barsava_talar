import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[var(--page-background)] flex items-center justify-center flex-col w-full h-screen">
      <div className="flex-col flex text-center gap-5">
        <h2 className="text-9xl text-[var(--gold)]">404</h2>
        <b className="text-2xl text-black/70">
          {"(:"} صفحه ی مورد نظر یافت نشد{" "}
        </b>
        <Link href={"/"} className="text-gray-400 ">
          بازگشت به خانه
        </Link>
        
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    </div>
  );
}
