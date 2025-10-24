"use client";

import { ReactNode, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading/Loader";
import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/layout/DashboardSidebar";
import StoreProvider from "../StoreProvider";

function AuthChecker({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <div
        className="flex w-full h-[100vh] items-center justify-between relative  bg-[rgba(236,236,236,0.8)]      "
        dir="rtl"
      >
        <StoreProvider>
          <DashboardSidebar />
          <div className="flex flex-col justify-between h-full flex-1 ">
            <DashboardHeader />
            <AuthChecker>{children}</AuthChecker>
          </div>
        </StoreProvider>
      </div>
    </SessionProvider>
  );
}
