"use client";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";
import { toast } from "sonner";

const Password = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleChangePassword = async () => {
    if (!password || password.length < 6) {
      toast.error("رمز عبور باید حداقل 6 کاراکتر باشد");
      return;
    }

    try {
      await axios.post("/api/change-password", { newPassword: password });
      toast.success("رمز عبور با موفقیت تغییر کرد");
      setPassword("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("خطا در تغییر رمز عبور");
    }
  };

  return (
    <div className="w-full h-full flex p-5">
      <div className="flex flex-col gap-5">
        <b className="text-2xl">تغییر رمز ورود</b>
        <div className="flex bg-white w-[200px] h-[40px] items-center justify-center rounded-sm border-b-2 border-b-gray-300 px-2.5">
          <input
            type={showPassword ? "text" : "password"}
            className="flex-1 h-full border-none outline-none text-sm bg-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="bg-none text-gray-500 cursor-pointer border-none outline-none flex items-center justify-center"
            type="button"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <button
          onClick={handleChangePassword}
          className="px-2 py-1.5 cursor-pointer rounded-sm text-white text-sm bg-green-800"
        >
          تغییر رمز
        </button>
      </div>
    </div>
  );
};

export default Password;
