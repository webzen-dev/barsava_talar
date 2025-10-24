"use client";
import Loading from "@/components/loading/Loader";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiFaceSmile, CiLock, CiRead, CiUnread } from "react-icons/ci";
import { toast } from "sonner";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("admin-credentials", {
        redirect: false,
        username,
        password,
      });

      if (!res?.ok) {
        throw new Error(res?.error || "Login failed");
      }

      toast.success("Logged in successfully");
      router.push("/dashboard/");
      setUsername("");
      setPassword("");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full h-[100vh] flex items-center p-5 flex-col gap-7.5 justify-center 
                 bg-gradient-to-b from-[#dec39a] to-white relative"
    >
      {loading && <Loading />}

      <form
        onSubmit={handleSubmit}
        className="w-[400px] shadow-2xl backdrop-blur-2xl bg-[rgb(255,255,255)] 
                   flex flex-col gap-5 p-5 rounded-lg "
      >
        <h2 className="text-lg font-bold text-black">ورود به پنل ادمین</h2>

        {/* username */}
        <div className="w-full flex items-center gap-2.5 border-gray-500 rounded-lg border-2 p-2.5 text-gray-400 ">
          <CiFaceSmile className="text-lg" />
          <input
            type="text"
            placeholder="نام کاربری"
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 bg-transparent border-none text-gray-400 outline-none h-full"
            required
          />
        </div>

        {/* password */}
        <div className="w-full flex items-center gap-2.5 border-gray-500 rounded-lg border-2 p-2.5 text-gray-400 ">
          <CiLock className="text-lg" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="رمز ورود"
            className="flex-1 bg-transparent border-none text-gray-400 outline-none h-full"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="text-2xl cursor-pointer border-none outline-none bg-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <CiUnread /> : <CiRead />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center gap-2.5 border-white rounded-lg border-2 p-1.5 
                     text-white bg-[#dec39a] cursor-pointer justify-center 
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ورود
        </button>
      </form>

      <Link
        href={"/"}
        className="fixed top-10 left-10 px-5 h-[30px] flex items-center justify-center 
                   rounded-lg shadow-2xl cursor-pointer bg-white"
      >
        بازگشت
      </Link>
    </div>
  );
};

export default Login;
