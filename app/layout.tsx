import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DigiConnect Co., Ltd. | Digital Marketing & AI Strategy",
    template: "%s | DigiConnect Co., Ltd.",
  },
  description:
    "DigiConnect เชี่ยวชาญด้าน Digital Marketing, AI Strategy และ MarTech โดยโค้ชป๊อป – Chatchawan Kaewmanee ประสบการณ์กว่า 13 ปี ดูแลลูกค้ากว่า 200 องค์กร",
  keywords: ["Digital Marketing", "AI Strategy", "MarTech", "DigiConnect", "โค้ชป๊อป"],
  openGraph: {
    title: "DigiConnect Co., Ltd.",
    description: "Digital Marketing, AI Strategy & MarTech Experts",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
