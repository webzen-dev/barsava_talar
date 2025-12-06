"use client";

import { ReservationData } from "@/lib/redux/Reservation/reservationSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { useEffect, useState } from "react";
import moment from "moment-jalaali";
import axios from "axios";
import { toast } from "sonner";

const ReservationsList = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.ReservationReducer
  );

  const [reservations, setReservations] = useState(data);
  const [loadingIds, setLoadingIds] = useState<number[]>([]);
  const [checkingIds, setCheckingIds] = useState<number[]>([]);

  useEffect(() => {
    dispatch(ReservationData());
  }, [dispatch]);

  useEffect(() => {
    setReservations(data);
  }, [data]);

  async function HandleDelete(id: number) {
    try {
      setLoadingIds((prev) => [...prev, id]);
      await axios.delete(`/api/reservation/${id}`);
      setReservations((prev) => prev.filter((r) => r.id !== id));
      toast.success("رزرو با موفقیت حذف شد!");
    } catch (error: unknown) {
      toast.error("خطا در حذف رزرو. دوباره تلاش کنید.", error);
    } finally {
      setLoadingIds((prev) => prev.filter((loadingId) => loadingId !== id));
    }
  }

  async function HandleCheck(id: number) {
    try {
      setCheckingIds((prev) => [...prev, id]);
      await axios.patch(`/api/reservation/${id}`, { status: "Checked" });
      setReservations((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "Success" } : r))
      );
      toast.success("رزرو با موفقیت بررسی شد!");
    } catch (error: unknown) {
      toast.error("خطا در بررسی رزرو. دوباره تلاش کنید.", error);
    } finally {
      setCheckingIds((prev) => prev.filter((checkingId) => checkingId !== id));
    }
  }

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <div className="h-full w-full bg-[rgba(236,236,236,0.8)] p-5 flex max-h-full overflow-y-auto gap-5 flex-col">
      <b className="text-2xl">لیست رزروها</b>

      {reservations.map((res) => {
        const isDeleting = loadingIds.includes(res.id);
        const isChecking = checkingIds.includes(res.id);
        const isChecked = res.status === "Success";

        return (
          <div
            key={res.id}
            className="w-full py-2.5 px-5 bg-white flex flex-col gap-5 rounded-lg shadow-lg text-[rgba(94,94,94,0.8)] transition-opacity duration-300"
            style={{ opacity: isDeleting || isChecking || isChecked ? 0.5 : 1 }}
          >
            <div className="flex w-full flex-wrap gap-5 max-md:flex-col">
              <div className="flex flex-col gap-2.5 flex-1 min-w-[120px]">
                <div className="flex gap-2.5 items-center max-md:flex-col">
                  <span>نام :</span>
                  <span>{res.first_name}</span>
                </div>
                <div className="flex gap-2.5 items-center max-md:flex-col">
                  <span>نام خانوادگی :</span>
                  <span>{res.last_name}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 flex-1 min-w-[120px]">
                <div className="flex gap-2.5 items-center max-md:flex-col">
                  <span>تاریخ ثبت :</span>
                  <span>
                    {res.createdAt
                      ? moment(res.createdAt).format("jYYYY/jM/jD HH:mm")
                      : "-"}
                  </span>
                </div>
                <div className="flex gap-2.5 items-center max-md:flex-col">
                  <span>تاریخ رزرو :</span>
                  <span>
                    {res.date ? moment(res.date).format("jYYYY/jM/jD") : "-"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 flex-1 min-w-[120px]">
                <div className="flex gap-2.5 items-center max-md:flex-col">
                  <span>تعداد مهمان :</span>
                  <span>{res.guests}</span>
                </div>
                <div className="flex gap-2.5 items-center max-md:flex-col">
                  <span>شماره تلفن :</span>
                  <span>{res.phone_number}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 max-md:w-full min-w-[120px]">
                <button
                  className="px-2.5 py-[4px] text-sm cursor-pointer bg-green-300 rounded-sm text-white w-full max-md:w-full disabled:opacity-50"
                  disabled={isChecking || isChecked}
                  onClick={() => HandleCheck(res.id)}
                >
                  بررسی شد
                </button>
                <button
                  className="px-2.5 py-[4px] text-sm cursor-pointer bg-red-300 rounded-sm text-white w-full max-md:w-full"
                  onClick={() => HandleDelete(res.id)}
                  disabled={isDeleting}
                >
                  حذف
                </button>
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <span>توضیحات :</span>
              <span className="text-sm">{res.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReservationsList;
