import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart2,
  Bot,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Building2,
  Sparkles,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "บริการ",
  description:
    "Performance Marketing, AI Visibility และ Training & Consulting ครบวงจร โดย DigiConnect Co., Ltd.",
};

/* ─── DATA ─────────────────────────────────────────────────────── */

const services = [
  {
    id: "performance",
    index: "01",
    icon: <BarChart2 size={28} className="text-brand-blue" />,
    label: "Performance & Data-Driven Marketing",
    tagline: "วางกลยุทธ์โฆษณาเชิงประสิทธิภาพบน Meta, Google, LINE, TikTok",
    description:
      "ไม่ใช่แค่การยิงโฆษณา — แต่คือการออกแบบระบบที่ทำให้ทุกบาทที่ใช้ไปมีข้อมูลรองรับ วัดผลได้ตั้งแต่ต้นทางจนถึง Conversion จริง",
    details: [
      {
        title: "ออกแบบโครงสร้าง Funnel ที่วัดผลได้จริง",
        desc: "วาง Funnel ครบทุก Stage ตั้งแต่ Awareness → Consideration → Conversion พร้อม KPI ที่ชัดเจน (CPL, CPA, ROAS)",
      },
      {
        title: "เชื่อมข้อมูลจากหลายแพลตฟอร์ม",
        desc: "รวม Data จาก Meta, Google, LINE, TikTok เพื่อทำ Cross-Platform Budget Optimization และลด Wasted Spend",
      },
    ],
    fitFor: ["SME ที่ต้องการผลลัพธ์ชัดเจน", "Franchise ที่ต้องการ Scalable System", "องค์กรที่ต้องการ ROI วัดได้ทุกเดือน"],
    platforms: ["Meta Ads", "Google Ads", "LINE Ads", "TikTok Ads"],
    metrics: ["CPL", "CPA", "ROAS", "LTV"],
  },
  {
    id: "ai",
    index: "02",
    icon: <Bot size={28} className="text-brand-blue" />,
    label: "AI Marketing & AI Visibility",
    tagline: "ปรับธุรกิจจาก Traditional SEO สู่ AI-Driven Search",
    description:
      "ผู้บริโภคเริ่มค้นหาผ่าน ChatGPT, Gemini และ Claude มากขึ้นทุกวัน — ธุรกิจที่ไม่ปรับตัวจะหายออกจาก AI Answer โดยไม่รู้ตัว",
    details: [
      {
        title: "Framework การวัด AI Visibility",
        desc: "วัดและติดตาม 4 มิติ: AI Presence, Citation Rate, Contextual Relevance และ Share of Voice ใน AI-Generated Answers",
      },
      {
        title: "ยกระดับด้วย AI Tools จริงๆ",
        desc: "นำ AI เข้ามาช่วย Content Creation, Marketing Automation และการตัดสินใจเชิงกลยุทธ์ได้อย่างมีประสิทธิภาพ",
      },
    ],
    fitFor: [
      "แบรนด์ที่ต้องการ Visibility ใน ChatGPT / Gemini / Claude",
      "ธุรกิจที่พึ่งพา Organic Search และต้องการปรับตัว",
      "ทีม Marketing ที่อยากใช้ AI ได้จริงในงานประจำวัน",
    ],
    platforms: ["ChatGPT", "Gemini", "Claude", "Perplexity"],
    metrics: ["AI Presence", "Citation Rate", "Share of Voice", "Context Score"],
  },
  {
    id: "training",
    index: "03",
    icon: <GraduationCap size={28} className="text-brand-blue" />,
    label: "Training, Seminar & Consulting",
    tagline: "บรรยาย อบรม และออกแบบหลักสูตรด้าน AI & Digital Marketing",
    description:
      "ถ่ายทอดประสบการณ์จริงกว่า 13 ปีสู่ทีมของคุณ ไม่ว่าจะเป็น Workshop 1 วัน สัมมนาใหญ่ หรือหลักสูตรที่ออกแบบเฉพาะสำหรับองค์กร",
    details: [
      {
        title: "บรรยายสัมมนาและมหาวิทยาลัย",
        desc: "ประสบการณ์บรรยายในเวทีสาธารณะ, มหาวิทยาลัยชั้นนำ และงาน Corporate Event ทั้งรูปแบบ Keynote และ Workshop",
      },
      {
        title: "ออกแบบหลักสูตรองค์กร",
        desc: "ออกแบบ Curriculum เฉพาะสำหรับทีมของคุณ ครอบคลุม AI Marketing, Digital Transformation และ MarTech ที่ใช้งานได้จริง",
      },
      {
        title: "ให้คำปรึกษาเชิงกลยุทธ์",
        desc: "Consulting ระยะสั้นและระยะยาวสำหรับ SME, Franchise และองค์กรขนาดใหญ่ที่ต้องการ Digital Transformation",
      },
    ],
    fitFor: [
      "SME และ Franchise ที่ต้องการพัฒนาทีม",
      "มหาวิทยาลัยและสถาบันการศึกษา",
      "องค์กรขนาดใหญ่ที่ต้องการ Digital Transformation",
    ],
    platforms: ["In-house Workshop", "Public Seminar", "University Lecture", "Online Training"],
    badge: { icon: <Award size={14} />, text: "LINE Certified Coach (Thailand)" },
  },
] as const;

/* ─── PAGE ──────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-navy pt-28 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 60% at 80% 50%, #2563EB 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            บริการ
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            3 กลุ่มบริการ
            <br />
            ที่วัดผลได้จริง
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            ออกแบบมาให้ตอบโจทย์ธุรกิจจริงๆ ไม่ใช่แค่ทฤษฎี
            ทุกบริการมี KPI และ Output ที่ชัดเจนก่อนเริ่มงาน
          </p>
        </div>
      </section>

      {/* NAV ANCHORS */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto no-scrollbar">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-5 py-4 text-sm font-medium text-brand-gray-mid hover:text-brand-navy border-b-2 border-transparent hover:border-brand-blue transition-colors whitespace-nowrap"
              >
                {s.index}. {s.label.split(" ")[0]} {s.label.split(" ")[1]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE BLOCKS */}
      <div className="divide-y divide-gray-100">
        {services.map((svc, idx) => (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-20 scroll-mt-28 ${idx % 2 === 0 ? "bg-white" : "bg-brand-gray"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header row */}
              <div className="flex flex-wrap items-start gap-4 mb-10">
                <span className="text-6xl font-bold text-brand-navy/6 leading-none select-none mt-1">
                  {svc.index}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      {svc.icon}
                    </div>
                    {"badge" in svc && svc.badge && (
                      <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {svc.badge.icon}
                        {svc.badge.text}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-snug">
                    {svc.label}
                  </h2>
                  <p className="text-brand-blue font-medium mt-1">{svc.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left col — description + details */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-brand-gray-mid leading-relaxed text-base">
                    {svc.description}
                  </p>

                  <div className="space-y-4">
                    {svc.details.map((d) => (
                      <div
                        key={d.title}
                        className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
                        style={idx % 2 !== 0 ? {} : {}}
                      >
                        <CheckCircle2
                          size={18}
                          className="text-brand-blue shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="font-semibold text-brand-navy text-sm mb-1">
                            {d.title}
                          </p>
                          <p className="text-brand-gray-mid text-sm leading-relaxed">
                            {d.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right col — fit for + tags */}
                <div className="space-y-6">
                  {/* Fit for */}
                  <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-gray-mid uppercase tracking-wider mb-4">
                      <Building2 size={14} />
                      เหมาะสำหรับ
                    </div>
                    <ul className="space-y-2.5">
                      {svc.fitFor.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                          <span className="text-brand-gray-dark text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms / Formats */}
                  <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-gray-mid uppercase tracking-wider mb-4">
                      <Sparkles size={14} />
                      {svc.id === "training" ? "รูปแบบ" : "Platform & Metric"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {svc.platforms.map((p) => (
                        <span
                          key={p}
                          className="bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-lg"
                        >
                          {p}
                        </span>
                      ))}
                      {"metrics" in svc &&
                        svc.metrics.map((m) => (
                          <span
                            key={m}
                            className="bg-brand-gray text-brand-gray-mid text-xs font-medium px-3 py-1.5 rounded-lg"
                          >
                            {m}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="relative py-28 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 55% at 50% 110%, #2563EB 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            สนใจบริการไหน
            <br />
            ทักมาคุยก่อนได้เลย
          </h2>
          <p className="text-white/60 text-lg mb-10">
            ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด — แค่บอกว่าธุรกิจของคุณต้องการอะไร
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
