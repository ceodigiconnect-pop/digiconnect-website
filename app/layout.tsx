import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DigiConnect Co., Ltd. | Digital Marketing & AI Strategy",
    template: "%s | DigiConnect Co., Ltd.",
  },
  description:
    "DigiConnect เชี่ยวชาญด้าน Digital Marketing, AI Strategy และ MarTech โดยโค้ชป๊อป – Chatchawan Kaewmanee ประสบการณ์กว่า 13 ปี ดูแลลูกค้ากว่า 200 องค์กร",
  keywords: [
    "Digital Marketing",
    "AI Strategy",
    "MarTech",
    "Performance Marketing",
    "AI Visibility",
    "DigiConnect",
    "โค้ชป๊อป",
    "Chatchawan Kaewmanee",
  ],
  openGraph: {
    title: "DigiConnect Co., Ltd. | Digital Marketing & AI Strategy",
    description:
      "ที่ปรึกษาด้าน Digital Marketing, AI Strategy และ MarTech กว่า 13 ปี ดูแลลูกค้ากว่า 200 องค์กร",
    type: "website",
    locale: "th_TH",
    siteName: "DigiConnect Co., Ltd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiConnect Co., Ltd.",
    description: "Digital Marketing | AI Strategy | MarTech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${notoSansThai.variable}`}>
      <body className="font-sans antialiased bg-white text-brand-gray-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
