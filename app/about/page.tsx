import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Users,
  TrendingUp,
  Brain,
  Globe,
  Mic,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "Chatchawan Kaewmanee (โค้ชป๊อป) — Founder & CEO DigiConnect Co., Ltd. ผู้เชี่ยวชาญ Digital Marketing, AI Strategy และ MarTech กว่า 13 ปี",
};

const timeline = [
  {
    year: "2011–2015",
    title: "เริ่มต้นในวงการ Digital Marketing",
    desc: "เริ่มต้นการทำงานในด้าน Digital Marketing ตั้งแต่ยุคแรกๆ ของโซเชียลมีเดียในไทย สั่งสมประสบการณ์จาก Agency ชั้นนำ",
  },
  {
    year: "2015–2018",
    title: "ขยายความเชี่ยวชาญสู่ MarTech",
    desc: "พัฒนาความรู้ด้าน Marketing Technology ทั้ง CRM, Marketing Automation และ Data Analytics ดูแลลูกค้าองค์กรขนาดใหญ่",
  },
  {
    year: "2018–2021",
    title: "นำ AI เข้าสู่โลก Marketing",
    desc: "บุกเบิกการนำ AI มาประยุกต์ใช้ใน Digital Marketing ทั้งด้าน Personalization, Predictive Analytics และ Content Generation",
  },
  {
    year: "2021–ปัจจุบัน",
    title: "ก่อตั้ง DigiConnect Co., Ltd.",
    desc: "รวบรวมประสบการณ์กว่า 10 ปีก่อตั้งบริษัทที่ปรึกษา ดูแลลูกค้ากว่า 200 องค์กร ทั้ง B2B และ B2C ในหลากหลายอุตสาหกรรม",
  },
];

const expertise = [
  {
    icon: <TrendingUp size={20} className="text-brand-blue" />,
    label: "Digital Marketing Strategy",
  },
  {
    icon: <Brain size={20} className="text-brand-blue" />,
    label: "AI Strategy & Implementation",
  },
  {
    icon: <Globe size={20} className="text-brand-blue" />,
    label: "MarTech Stack Design",
  },
  {
    icon: <Users size={20} className="text-brand-blue" />,
    label: "B2B & B2C Marketing",
  },
  {
    icon: <Mic size={20} className="text-brand-blue" />,
    label: "Corporate Training & Workshop",
  },
  {
    icon: <Award size={20} className="text-brand-blue" />,
    label: "Business Growth Consulting",
  },
];

const values = [
  {
    title: "ตรงไปตรงมา",
    desc: "บอกตามจริง ไม่ขายฝัน ไม่สัญญาผลลัพธ์ที่เกินจริง",
  },
  {
    title: "วัดผลได้",
    desc: "ทุกกลยุทธ์ต้องมี KPI ที่ชัดเจนและวัดผลได้ในโลกจริง",
  },
  {
    title: "เข้าใจธุรกิจ",
    desc: "ลงลึกในบริบทของลูกค้าก่อนเสนอแนวทางใดๆ เสมอ",
  },
  {
    title: "พัฒนาต่อเนื่อง",
    desc: "ติดตามและนำเสนอสิ่งใหม่ที่เหมาะสมกับธุรกิจอยู่เสมอ",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-brand-blue-light text-sm font-semibold uppercase tracking-wider mb-3">
                เกี่ยวกับเรา
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                โค้ชป๊อป
                <br />
                <span className="text-brand-blue-light text-3xl sm:text-4xl">
                  Chatchawan Kaewmanee
                </span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Founder & CEO ของ DigiConnect Co., Ltd. ผู้เชี่ยวชาญด้าน Digital Marketing,
                AI Strategy และ MarTech ที่มีประสบการณ์ตรงกว่า 13 ปีในการช่วยองค์กรเติบโต
                ในยุคดิจิทัลอย่างยั่งยืน
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "13+", label: "ปี" },
                  { value: "200+", label: "องค์กร" },
                  { value: "B2B+B2C", label: "ทุกรูปแบบ" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-white">{s.value}</div>
                    <div className="text-white/50 text-sm mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl mb-2">👨‍💼</div>
                  <div className="font-semibold text-lg">โค้ชป๊อป</div>
                  <div className="text-white/60 text-sm">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 text-center">
              เส้นทางและประสบการณ์
            </h2>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-brand-blue shrink-0 mt-1" />
                    {idx < timeline.length - 1 && (
                      <div className="w-0.5 bg-gray-200 flex-1 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-brand-blue text-sm font-semibold">{item.year}</span>
                    <h3 className="font-bold text-brand-navy mt-1 mb-2">{item.title}</h3>
                    <p className="text-brand-gray-mid text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              ความเชี่ยวชาญ
            </h2>
            <p className="text-brand-gray-mid">
              13+ ปีในหลากหลายด้านของ Digital Marketing และ Technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {expertise.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium text-brand-navy text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              แนวทางการทำงาน
            </h2>
            <p className="text-brand-gray-mid">สิ่งที่ยึดมั่นในทุกโปรเจกต์</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={v.title} className="relative p-6 rounded-2xl bg-brand-gray">
                <div className="text-5xl font-bold text-brand-navy/5 absolute top-4 right-4">
                  0{idx + 1}
                </div>
                <CheckCircle2 size={22} className="text-brand-blue mb-4" />
                <h3 className="font-bold text-brand-navy mb-2">{v.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DigiConnect Story */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              ทำไมต้อง DigiConnect?
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              DigiConnect ก่อตั้งขึ้นจากความเชื่อว่า การตลาดดิจิทัลที่ดีไม่ใช่การทำตาม trend
              แต่คือการเข้าใจธุรกิจอย่างลึกซึ้งแล้วออกแบบกลยุทธ์ที่เหมาะสม
              โดยใช้เทคโนโลยีเป็นเครื่องมือ ไม่ใช่เป้าหมาย
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              ในช่วง 13 ปีที่ผ่านมา เราได้เห็นองค์กรหลายแห่งเสียเงินและเวลาไปกับ
              digital initiative ที่ไม่ตอบโจทย์ธุรกิจจริง นั่นคือสิ่งที่เราอยากเปลี่ยน
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
            >
              คุยกับเรา <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
