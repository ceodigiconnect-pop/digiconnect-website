import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "ติดต่อ",
  description: "ติดต่อ DigiConnect Co., Ltd. เพื่อปรึกษาด้าน Digital Marketing, AI Strategy และ MarTech ฟรี",
};

const contactInfo = [
  {
    icon: <Mail size={20} className="text-brand-blue" />,
    label: "อีเมล",
    value: "hello@digiconnect.co.th",
    href: "mailto:hello@digiconnect.co.th",
  },
  {
    icon: <Phone size={20} className="text-brand-blue" />,
    label: "โทรศัพท์",
    value: "+66 (0) 00-000-0000",
    href: "tel:+66000000000",
  },
  {
    icon: <MessageCircle size={20} className="text-brand-blue" />,
    label: "LINE Official",
    value: "@digiconnect",
    href: "https://line.me",
  },
  {
    icon: <MapPin size={20} className="text-brand-blue" />,
    label: "ที่อยู่",
    value: "กรุงเทพมหานคร, ประเทศไทย",
    href: null,
  },
  {
    icon: <Clock size={20} className="text-brand-blue" />,
    label: "เวลาทำการ",
    value: "จันทร์–ศุกร์ 9:00–18:00",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-blue-light text-sm font-semibold uppercase tracking-wider mb-3">
              ติดต่อเรา
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              เริ่มต้นด้วย
              <br />
              การปรึกษาฟรี
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              ไม่มีข้อผูกมัด ไม่มีค่าใช้จ่าย
              เราจะรับฟังความท้าทายของธุรกิจคุณและเสนอแนวทางเบื้องต้นที่ practical ที่สุด
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-navy mb-8">ช่องทางติดต่อ</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-brand-gray-mid font-medium uppercase tracking-wide mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-navy font-medium hover:text-brand-blue transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-brand-navy font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-brand-gray rounded-2xl">
                <h3 className="font-bold text-brand-navy mb-2">โปรดทราบ</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">
                  เราตอบกลับทุกข้อความภายใน 1 วันทำการ
                  หากมีความเร่งด่วนกรุณาติดต่อทาง LINE หรือโทรศัพท์โดยตรง
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-brand-navy mb-8">ส่งข้อความหาเรา</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-10 text-center">
              คำถามที่พบบ่อย
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "การปรึกษาครั้งแรกฟรีจริงไหม?",
                  a: "ใช่ครับ การปรึกษาครั้งแรก (Discovery Session) ประมาณ 45–60 นาที ไม่มีค่าใช้จ่าย เราจะรับฟังธุรกิจของคุณและแนะนำแนวทางเบื้องต้น",
                },
                {
                  q: "เหมาะกับธุรกิจขนาดไหน?",
                  a: "เราทำงานกับทั้ง SME และองค์กรขนาดใหญ่ ตั้งแต่ธุรกิจที่มีทีมการตลาด 1 คนไปจนถึงองค์กรที่มีทีมดิจิทัลขนาดใหญ่ สำคัญคือความชัดเจนในเป้าหมายและความพร้อมที่จะเปลี่ยนแปลง",
                },
                {
                  q: "ระยะเวลาการทำงานโดยทั่วไปเป็นอย่างไร?",
                  a: "ขึ้นอยู่กับขอบเขตงาน โดยทั่วไปโปรเจกต์เริ่มต้นตั้งแต่ 3 เดือน สำหรับการวาง strategy ครบถ้วน และมีรูปแบบ retainer รายเดือนสำหรับการดูแลระยะยาว",
                },
                {
                  q: "คิดค่าบริการอย่างไร?",
                  a: "ขึ้นอยู่กับขอบเขตและระยะเวลาของงาน เราจะแจ้งราคาที่ชัดเจนหลังจากเข้าใจ requirement ของคุณในการปรึกษาครั้งแรกแล้ว",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
                >
                  <h3 className="font-bold text-brand-navy mb-3">{item.q}</h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
