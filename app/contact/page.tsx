import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "ติดต่อ",
  description:
    "ติดต่อ DigiConnect Co., Ltd. ทาง LINE, Email หรือ Facebook — ทีมงานตอบกลับภายใน 24 ชม.",
};

/* ─── DATA ─────────────────────────────────────────────────────── */

const channels = [
  {
    icon: <MessageCircle size={20} className="text-green-600" />,
    bg: "bg-green-50",
    label: "LINE OA",
    value: "@digiconnect",
    sub: "ตอบเร็วที่สุด",
    href: "https://line.me/R/ti/p/@digiconnect",
  },
  {
    icon: <Mail size={20} className="text-brand-blue" />,
    bg: "bg-blue-50",
    label: "Email",
    value: "sangrat@digiconnect.co.th",
    sub: "ตอบกลับภายใน 24 ชม.",
    href: "mailto:sangrat@digiconnect.co.th",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="#1877F2" aria-hidden="true">
        <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
    bg: "bg-[#F0F5FF]",
    label: "Facebook",
    value: "DigiConnect",
    sub: "Digital Marketing Agency",
    href: "https://facebook.com/digiconnect",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 70% at 85% 50%, #2563EB 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <p className="text-brand-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            ติดต่อ
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            ทักมาคุยก่อน
            <br />
            ได้เลย
          </h1>
          <p className="text-white/65 text-lg max-w-lg leading-relaxed">
            ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด แค่เล่าให้เราฟังว่าธุรกิจของคุณต้องการอะไร
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            {/* ── LEFT — channels + note ─────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-1">
                  ช่องทางติดต่ออื่น
                </h2>
                <p className="text-brand-gray-mid text-sm">
                  เลือกช่องทางที่สะดวกสำหรับคุณ
                </p>
              </div>

              {/* Channel cards */}
              <div className="space-y-3">
                {channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all group"
                  >
                    <div
                      className={`w-11 h-11 ${ch.bg} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      {ch.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-brand-gray-mid font-medium uppercase tracking-wide mb-0.5">
                        {ch.label}
                      </p>
                      <p className="font-semibold text-brand-navy text-sm truncate">
                        {ch.value}
                      </p>
                      <p className="text-brand-gray-mid text-xs">{ch.sub}</p>
                    </div>
                    <ArrowRight
                      size={15}
                      className="text-gray-300 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </a>
                ))}
              </div>

              {/* Response time note */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-gray border border-gray-100">
                <Clock size={16} className="text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-brand-navy mb-0.5">
                    เวลาตอบกลับ
                  </p>
                  <p className="text-brand-gray-mid text-xs leading-relaxed">
                    ทีมงานตอบกลับทุกช่องทางภายใน 24 ชั่วโมง
                    ในวันจันทร์–ศุกร์ 9:00–18:00 น.
                  </p>
                </div>
              </div>

              {/* "ทักมาคุยก่อน" nudge */}
              <div className="rounded-2xl bg-brand-navy p-6 text-white">
                <p className="font-bold text-base mb-1.5">ทักมาคุยก่อนได้เลย</p>
                <p className="text-white/65 text-sm leading-relaxed">
                  ยังไม่รู้ว่าต้องการบริการไหน? ไม่เป็นไร แค่บอกว่าธุรกิจคุณเป็นอะไร
                  เราจะช่วยหาทางออกที่เหมาะสมที่สุดให้
                </p>
              </div>
            </div>

            {/* ── RIGHT — form ──────────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="mb-7">
                <h2 className="text-xl font-bold text-brand-navy mb-1">
                  ส่งข้อมูลมาหาเรา
                </h2>
                <p className="text-brand-gray-mid text-sm">
                  กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชม.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA STRIP ────────────────────────────────────── */}
      <section className="py-14 bg-brand-gray border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-brand-navy text-lg mb-1">
                ยังมีคำถามอีกไหม?
              </p>
              <p className="text-brand-gray-mid text-sm">
                ดูบริการและข้อมูลเพิ่มเติมก่อนตัดสินใจก็ได้
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-brand-navy text-sm font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                ดูบริการทั้งหมด
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-brand-navy text-sm font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                เกี่ยวกับโค้ชป๊อป
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
