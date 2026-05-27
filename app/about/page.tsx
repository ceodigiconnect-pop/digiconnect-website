import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Calendar, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "Chatchawan Kaewmanee (โค้ชป๊อป) — Founder & CEO DigiConnect Co., Ltd. ที่ปรึกษาด้าน Digital Marketing, MarTech และ AI Strategy กว่า 13 ปี",
};

/* ─── DATA ─────────────────────────────────────────────────────── */

const credentials = [
  {
    icon: <Calendar size={16} className="text-brand-blue" />,
    text: "ประสบการณ์มากกว่า 13 ปี ด้าน Online Marketing & Business Development",
  },
  {
    icon: <Users size={16} className="text-brand-blue" />,
    text: "ให้คำปรึกษากับองค์กรกว่า 200 แห่ง ทั้ง B2B และ B2C",
  },
  {
    icon: <Award size={16} className="text-brand-blue" />,
    text: "LINE Certified Coach (Thailand)",
  },
  {
    icon: <Award size={16} className="text-brand-blue" />,
    text: "บรรยายในสัมมนาและมหาวิทยาลัยชั้นนำทั่วประเทศ",
  },
];

const expertiseTags = [
  { label: "Performance Marketing", color: "blue" },
  { label: "AI Strategy", color: "blue" },
  { label: "MarTech", color: "blue" },
  { label: "Data-Driven", color: "navy" },
  { label: "LINE Marketing", color: "navy" },
  { label: "AI Visibility", color: "navy" },
] as const;

const tagStyles: Record<"blue" | "navy", string> = {
  blue: "bg-blue-50 text-brand-blue border border-blue-100",
  navy: "bg-brand-navy/5 text-brand-navy border border-brand-navy/10",
};

/* ─── PAGE ──────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ─── BIO SECTION — 2-col layout ────────────────────────── */}
      <section className="relative bg-brand-navy overflow-hidden">
        {/* ambient glow */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 70% at 90% 40%, #2563EB 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* ── LEFT — placeholder portrait ─────────────────── */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-72 sm:w-80 lg:w-96">
                {/* Main card */}
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1a3a7a] to-brand-blue flex flex-col items-center justify-center shadow-2xl shadow-black/40">
                  {/* Avatar circle */}
                  <div className="w-28 h-28 rounded-full bg-white/15 border-2 border-white/25 flex items-center justify-center mb-5">
                    <span className="text-5xl select-none">👤</span>
                  </div>
                  <p className="text-white font-bold text-xl mb-0.5">โค้ชป๊อป</p>
                  <p className="text-white/60 text-sm">Chatchawan Kaewmanee</p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-white/20 my-4" />

                  <p className="text-white/50 text-xs tracking-wide">Founder & CEO</p>
                  <p className="text-white/50 text-xs">DigiConnect Co., Ltd.</p>
                </div>

                {/* Floating badge — LINE Certified */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
                    <Award size={15} className="text-white" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] text-brand-gray-mid font-medium uppercase tracking-wide">
                      Certified
                    </p>
                    <p className="text-xs font-bold text-brand-navy">LINE Coach · TH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT — bio content ──────────────────────────── */}
            <div className="order-1 lg:order-2">
              <p className="text-brand-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
                เกี่ยวกับเรา
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2">
                Chatchawan Kaewmanee
              </h1>
              <p className="text-brand-blue-light text-xl font-medium mb-2">
                โค้ชป๊อป
              </p>
              <p className="text-white/50 text-sm mb-8">
                Founder & CEO, DigiConnect Co., Ltd.
              </p>

              <p className="text-white/70 leading-relaxed mb-8 text-base">
                ที่ปรึกษาและวิทยากรด้าน Digital Marketing, MarTech และ AI Strategy
                ที่ช่วยให้ธุรกิจเติบโตด้วยข้อมูลและเทคโนโลยีอย่างเป็นระบบ
              </p>

              {/* Credential list */}
              <ul className="space-y-3.5 mb-10">
                {credentials.map((c) => (
                  <li key={c.text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      {c.icon}
                    </div>
                    <span className="text-white/75 text-sm leading-relaxed">{c.text}</span>
                  </li>
                ))}
              </ul>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { value: "13+", label: "ปีประสบการณ์" },
                  { value: "200+", label: "องค์กร" },
                  { value: "B2B & B2C", label: "ทุกอุตสาหกรรม" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/8 border border-white/12 rounded-xl px-5 py-3 text-center backdrop-blur-sm"
                  >
                    <p className="text-white font-bold text-lg leading-none mb-0.5">{s.value}</p>
                    <p className="text-white/50 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── EXPERTISE TAGS ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              ความเชี่ยวชาญ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              สิ่งที่เราทำได้ดีที่สุด
            </h2>
          </div>

          {/* Tag cloud */}
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseTags.map((t) => (
              <span
                key={t.label}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold ${tagStyles[t.color]}`}
              >
                {t.label}
              </span>
            ))}
          </div>

          {/* Supporting detail row */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                heading: "Performance Marketing",
                body: "Meta · Google · LINE · TikTok Ads ที่วัดผลด้วย CPL, CPA และ ROAS",
              },
              {
                heading: "AI Strategy & Visibility",
                body: "Framework วัด AI Presence, Citation Rate และ Share of Voice ใน AI Search",
              },
              {
                heading: "MarTech & Data",
                body: "ออกแบบ Tech Stack, Marketing Automation และ Dashboard ที่ใช้งานได้จริง",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="p-6 rounded-2xl bg-brand-gray border border-gray-100"
              >
                <h3 className="font-bold text-brand-navy mb-2 text-sm">{item.heading}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION ────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Mission
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              สิ่งที่เราเชื่อ
            </h2>
          </div>

          <div className="relative bg-white rounded-3xl px-8 sm:px-14 py-12 shadow-sm border border-gray-100 text-center">
            {/* Decorative quote mark */}
            <Quote
              size={48}
              className="text-brand-blue/10 absolute top-8 left-8 rotate-180 pointer-events-none"
            />
            <Quote
              size={48}
              className="text-brand-blue/10 absolute bottom-8 right-8 pointer-events-none"
            />

            <p className="relative text-xl sm:text-2xl font-bold text-brand-navy leading-relaxed mb-6">
              DigiConnect เชื่อว่าธุรกิจทุกขนาด
              <br className="hidden sm:block" />
              สามารถเติบโตได้ด้วยข้อมูลและเทคโนโลยี
            </p>
            <p className="relative text-brand-gray-mid text-lg leading-relaxed">
              เราไม่ได้แค่สอน — เราช่วยให้ทำได้จริง
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-10 bg-gray-200" />
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
              <div className="h-px w-10 bg-gray-200" />
            </div>

            <p className="mt-4 text-sm font-semibold text-brand-navy">
              Chatchawan Kaewmanee
            </p>
            <p className="text-xs text-brand-gray-mid">Founder & CEO, DigiConnect Co., Ltd.</p>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 55% at 50% 110%, #2563EB 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            อยากรู้จักเราเพิ่มเติม?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            ทักมาคุยได้เลย ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:gap-3.5"
          >
            ติดต่อเรา
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
