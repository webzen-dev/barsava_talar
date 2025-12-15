import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import LogoSticker from "@/components/LogoSticker";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import "react-loading-skeleton/dist/skeleton.css";
import "keen-slider/keen-slider.min.css";

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
        {children}
        <LogoSticker />
        <Footer />
        <Toaster position="top-right" richColors theme="dark" dir="rtl" />
      </body>
    </html>
  );
}
