import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Brain,
  BarChart3,
  Target,
  Megaphone,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "บริการ",
  description:
    "บริการด้าน Digital Marketing, AI Strategy และ MarTech ครบวงจร โดย DigiConnect Co., Ltd.",
};

const mainServices = [
  {
    icon: <TrendingUp size={32} className="text-brand-blue" />,
    title: "Digital Marketing Strategy",
    subtitle: "กลยุทธ์การตลาดดิจิทัลแบบครบวงจร",
    description:
      "เราไม่ได้แค่วางแผน แต่ลงลึกในทุกขั้นตอน ตั้งแต่การวิเคราะห์ตลาดและคู่แข่ง การกำหนด target audience การเลือก channel ที่เหมาะสม ไปจนถึงการสร้าง content strategy และวัดผลอย่างแม่นยำ",
    features: [
      "Digital Audit & Competitive Analysis",
      "Customer Journey Mapping",
      "Multi-Channel Strategy (SEO, SEM, Social, Email)",
      "Content Strategy & Planning",
      "KPI Setting & Performance Dashboard",
      "Monthly Review & Optimization",
    ],
    tag: "Most Popular",
  },
  {
    icon: <Brain size={32} className="text-brand-blue" />,
    title: "AI Strategy & Implementation",
    subtitle: "นำ AI เข้าสู่ธุรกิจอย่างมีแบบแผน",
    description:
      "ออกแบบ AI Roadmap ที่เหมาะกับระดับความพร้อมขององค์กร ตั้งแต่การ identify use case ที่มี ROI สูง การเลือก tools ที่เหมาะสม ไปจนถึงการ implement และ train ทีมให้ใช้ AI ได้จริงในชีวิตประจำวัน",
    features: [
      "AI Readiness Assessment",
      "Use Case Identification & Prioritization",
      "AI Tool Selection & Vendor Evaluation",
      "Prompt Engineering & AI Workflow Design",
      "Team Training & Change Management",
      "AI ROI Measurement Framework",
    ],
    tag: "High Demand",
  },
  {
    icon: <BarChart3 size={32} className="text-brand-blue" />,
    title: "MarTech & Data Analytics",
    subtitle: "ระบบข้อมูลที่ตอบโจทย์การตัดสินใจ",
    description:
      "ช่วยออกแบบและติดตั้ง Marketing Technology Stack ที่เหมาะกับขนาดและงบประมาณขององค์กร พร้อมสร้าง Data Pipeline และ Dashboard ที่ให้ insight ที่ actionable จริงๆ",
    features: [
      "MarTech Stack Design & Implementation",
      "CRM Setup & Integration (HubSpot, Salesforce)",
      "Marketing Automation Workflow",
      "Data Analytics Dashboard (Looker Studio, Power BI)",
      "Attribution Modeling",
      "Customer Data Platform (CDP) Consulting",
    ],
  },
];

const additionalServices = [
  {
    icon: <Target size={24} className="text-brand-blue" />,
    title: "Performance Marketing",
    description: "บริหารงบโฆษณาออนไลน์ (Google Ads, Meta Ads) ให้ได้ ROI สูงสุด",
  },
  {
    icon: <Megaphone size={24} className="text-brand-blue" />,
    title: "Social Media & Content",
    description: "วางกลยุทธ์ content และบริหาร social media ให้เติบโตอย่างมีทิศทาง",
  },
  {
    icon: <BookOpen size={24} className="text-brand-blue" />,
    title: "Training & Workshop",
    description: "อบรมทีม Marketing & Digital ให้มีทักษะที่ทันสมัยและใช้งานได้จริง",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-blue-light text-sm font-semibold uppercase tracking-wider mb-3">
              บริการของเรา
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ครอบคลุมทุกมิติ
              <br />
              ของการเติบโตดิจิทัล
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              ไม่ว่าคุณจะเพิ่งเริ่มต้นหรือต้องการ scale up
              เรามีบริการที่ออกแบบให้เหมาะกับทุกขั้นของการเดินทาง
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {mainServices.map((service, idx) => (
              <div
                key={service.title}
                className={`rounded-2xl border border-gray-100 overflow-hidden ${
                  idx % 2 === 0 ? "bg-white" : "bg-brand-gray"
                }`}
              >
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                          {service.icon}
                        </div>
                        {service.tag && (
                          <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {service.tag}
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-brand-navy mb-1">
                        {service.title}
                      </h2>
                      <p className="text-brand-blue text-sm font-medium mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-brand-gray-mid leading-relaxed">{service.description}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-4">
                        ครอบคลุม
                      </h3>
                      <ul className="space-y-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2
                              size={16}
                              className="text-brand-blue shrink-0 mt-0.5"
                            />
                            <span className="text-brand-gray-mid text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              บริการเสริม
            </h2>
            <p className="text-brand-gray-mid">
              เพิ่มเติมจากบริการหลัก ออกแบบให้ตอบโจทย์ความต้องการเฉพาะ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{service.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              กระบวนการทำงาน
            </h2>
            <p className="text-brand-gray-mid">ชัดเจน โปร่งใส วัดผลได้ในทุกขั้นตอน</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "เข้าใจธุรกิจ เป้าหมาย และความท้าทายของคุณอย่างลึกซึ้ง",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "ออกแบบกลยุทธ์ที่เหมาะกับบริบทและทรัพยากรของคุณ",
              },
              {
                step: "03",
                title: "Execution",
                desc: "ลงมือทำร่วมกับทีมของคุณ พร้อม timeline และ milestone ชัดเจน",
              },
              {
                step: "04",
                title: "Optimize",
                desc: "วัดผล วิเคราะห์ และปรับปรุงอย่างต่อเนื่องเพื่อผลลัพธ์ที่ดีขึ้น",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-brand-blue/10 mb-3">{item.step}</div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ไม่แน่ใจว่าบริการไหนเหมาะกับคุณ?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            คุยกับเราก่อนได้เลย ไม่มีค่าใช้จ่าย เราจะช่วยประเมินและแนะนำแนวทางที่เหมาะสมที่สุด
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
          >
            ปรึกษาฟรี <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
