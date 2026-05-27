import Link from "next/link";
import { ArrowRight, BarChart2, Bot, GraduationCap } from "lucide-react";

const stats = [
  {
    value: "13+",
    unit: "ปี",
    label: "ประสบการณ์",
  },
  {
    value: "200+",
    unit: "องค์กร",
    label: "ที่ให้คำปรึกษา",
  },
  {
    value: "B2B & B2C",
    unit: "",
    label: "ทุกอุตสาหกรรม",
  },
];

const services = [
  {
    icon: <BarChart2 size={26} className="text-brand-blue" />,
    title: "Performance & Data-Driven Marketing",
    description:
      "วางกลยุทธ์ Meta, Google, LINE, TikTok Ads ที่วัดผลได้จริง ทั้ง CPL, CPA และ ROAS — ไม่ใช่แค่ยิง Ads แต่ทำให้ทุกบาทที่ใช้มีความหมาย",
    tags: ["Meta Ads", "Google Ads", "ROAS", "CPL / CPA"],
  },
  {
    icon: <Bot size={26} className="text-brand-blue" />,
    title: "AI Marketing & AI Visibility",
    description:
      "ปรับธุรกิจสู่ AI-Driven Search, วาง Framework วัด AI Presence และ Share of Voice — รับมือโลกที่ AI เป็นด่านแรกของผู้บริโภค",
    tags: ["AI Search", "Share of Voice", "GEO / AEO", "AI Framework"],
  },
  {
    icon: <GraduationCap size={26} className="text-brand-blue" />,
    title: "Training & Consulting",
    description:
      "อบรมสัมมนา, บรรยายมหาวิทยาลัย, ออกแบบหลักสูตร AI & Digital Marketing สำหรับทีมงานและองค์กรที่ต้องการยกระดับความสามารถจริงๆ",
    tags: ["In-house Training", "Public Seminar", "University Lecture", "Custom Curriculum"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e45] via-brand-navy to-[#0d2351]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(37,99,235,0.18) 0%, transparent 100%), radial-gradient(ellipse 40% 60% at 20% 70%, rgba(59,130,246,0.10) 0%, transparent 100%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 md:pt-40 md:pb-44">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-white/75 text-sm font-medium tracking-wide">
              Founder & CEO — Chatchawan Kaewmanee (โค้ชป๊อป)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6 max-w-3xl">
            ที่ปรึกษา Digital Marketing
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #60a5fa 0%, #93c5fd 100%)",
              }}
            >
              & AI Strategy
            </span>
          </h1>

          <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            ช่วยธุรกิจวัดผลได้จริง ด้วย Performance Marketing,
            AI Visibility และ MarTech ที่ใช้งานได้จริง
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white px-7 py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:gap-3.5"
          >
            ปรึกษาฟรี ไม่มีข้อผูกมัด
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── SOCIAL PROOF BAR ────────────────────────────────────── */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-150">
            {stats.map((s) => (
              <div key={s.label} className="px-6 sm:px-12 text-center first:pl-0 last:pr-0">
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-3xl sm:text-4xl font-bold text-brand-navy">
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="text-brand-blue font-semibold text-base sm:text-lg">
                      {s.unit}
                    </span>
                  )}
                </div>
                <div className="text-brand-gray-mid text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ────────────────────────────────────── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
              บริการ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              สิ่งที่เราทำ
            </h2>
            <p className="text-brand-gray-mid text-lg max-w-xl mx-auto">
              ครบทุกมิติตั้งแต่กลยุทธ์ การลงมือทำ ไปจนถึงการสร้างทีมภายในองค์กร
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-100 transition-all flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  {svc.icon}
                </div>

                {/* Text */}
                <h3 className="text-base font-bold text-brand-navy mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed mb-6 flex-1">
                  {svc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-brand-gray text-brand-gray-mid text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold group-hover:gap-2.5 transition-all"
                >
                  ดูรายละเอียด <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BOTTOM ──────────────────────────────────────────── */}
      <section className="relative py-28 bg-brand-navy overflow-hidden">
        {/* Accent glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 60% at 50% 100%, #2563EB 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            พร้อมพาธุรกิจคุณเติบโต
            <br />
            ด้วย Data และ AI
          </h2>
          <p className="text-white/60 text-lg mb-10">
            เริ่มด้วยบทสนทนา 30 นาที ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:gap-3.5"
          >
            นัดปรึกษา
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
