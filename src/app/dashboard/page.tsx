// app/dashboard/page.tsx

// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // const session = await getServerSession(authOptions());
  // console.log(session?.user);
  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <b className="text-3xl">به پنل ادمین خوش آمدید </b>
    </div>
  );
}
