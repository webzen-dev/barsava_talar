import type { Metadata } from "next";
import { Toaster } from "sonner";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "تالار مجلل بارثاوا",
  description: "آغاز شکوه، در شبی که فراموش نخواهد شد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="font-sans">
      <body dir="rtl" className="bg-[var(--page-background)]">
        <Header />
        <div className="flex flex-col gap-30 pt-25">{children}</div>
        <Footer />
        <Toaster position="top-right" richColors theme="dark" dir="rtl" />
      </body>
    </html>
  );
}
