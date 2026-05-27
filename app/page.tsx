import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Brain,
  BarChart3,
  Users,
  Award,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const stats = [
  { value: "13+", label: "ปีประสบการณ์" },
  { value: "200+", label: "องค์กรที่ดูแล" },
  { value: "B2B & B2C", label: "ครอบคลุมทุกธุรกิจ" },
  { value: "ROI", label: "วัดผลได้จริง" },
];

const services = [
  {
    icon: <TrendingUp size={24} className="text-brand-blue" />,
    title: "Digital Marketing Strategy",
    description:
      "วางกลยุทธ์การตลาดดิจิทัลแบบครบวงจร ตั้งแต่การวิเคราะห์ตลาด กำหนด target audience ไปจนถึงการวัดผลและปรับปรุงอย่างต่อเนื่อง",
  },
  {
    icon: <Brain size={24} className="text-brand-blue" />,
    title: "AI Strategy & Implementation",
    description:
      "ออกแบบและนำ AI เข้าสู่กระบวนการทางธุรกิจ ช่วยลดต้นทุน เพิ่มประสิทธิภาพ และสร้างความได้เปรียบในการแข่งขัน",
  },
  {
    icon: <BarChart3 size={24} className="text-brand-blue" />,
    title: "MarTech & Data Analytics",
    description:
      "เลือก ติดตั้ง และบริหาร Marketing Technology Stack ที่เหมาะกับธุรกิจ พร้อม Dashboard วิเคราะห์ข้อมูลเพื่อการตัดสินใจที่แม่นยำ",
  },
];

const testimonials = [
  {
    quote:
      "โค้ชป๊อปช่วยเราวาง Digital Strategy ได้ตรงจุดมาก ผลลัพธ์ออกมาดีกว่าที่คาดไว้ภายใน 3 เดือนแรก",
    name: "คุณสมชาย วงศ์สุวรรณ",
    role: "CEO, บริษัทชั้นนำในอุตสาหกรรมค้าปลีก",
  },
  {
    quote:
      "ทีม DigiConnect ไม่ใช่แค่ที่ปรึกษา แต่เป็น partner ที่เข้าใจธุรกิจของเราจริงๆ ทำให้การนำ AI เข้ามาใช้ราบรื่นมาก",
    name: "คุณปิยะ รัตนาวดี",
    role: "CMO, กลุ่มธุรกิจ B2B Manufacturing",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-blue-900" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 50%, #2563EB 0%, transparent 50%), radial-gradient(circle at 75% 20%, #3B82F6 0%, transparent 40%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white/80 text-sm font-medium">
                พร้อมให้คำปรึกษาแก่องค์กรของคุณ
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Digital Marketing
              <br />
              <span className="text-brand-blue-light">& AI Strategy</span>
              <br />
              ที่วัดผลได้จริง
            </h1>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              DigiConnect ช่วยให้องค์กรของคุณเติบโตอย่างยั่งยืนด้วยกลยุทธ์
              Digital Marketing, AI และ MarTech ที่ออกแบบมาเพื่อธุรกิจของคุณโดยเฉพาะ
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                ปรึกษาฟรี ไม่มีข้อผูกมัด
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                ดูบริการทั้งหมด
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-brand-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-brand-gray-mid text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              บริการหลักของเรา
            </h2>
            <p className="text-brand-gray-mid text-lg max-w-2xl mx-auto">
              ครอบคลุมทุกมิติของการเติบโตดิจิทัล ตั้งแต่กลยุทธ์ไปจนถึงการลงมือทำ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
            >
              ดูบริการทั้งหมด <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold mb-4">
                <Award size={16} />
                Founder & CEO
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
                โค้ชป๊อป
                <br />
                Chatchawan Kaewmanee
              </h2>
              <p className="text-brand-gray-mid leading-relaxed mb-6">
                ผู้เชี่ยวชาญด้าน Digital Marketing, AI Strategy และ MarTech
                ที่มีประสบการณ์กว่า 13 ปี ผ่านการดูแลลูกค้ากว่า 200 องค์กร
                ทั้งธุรกิจ B2B และ B2C ในหลายอุตสาหกรรม
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "ประสบการณ์ตรงกว่า 13 ปีในวงการ Digital Marketing",
                  "ดูแลลูกค้ากว่า 200 องค์กร ทั้ง SME และองค์กรขนาดใหญ่",
                  "เชี่ยวชาญการนำ AI มาประยุกต์ใช้ในธุรกิจจริง",
                  "วิทยากรและที่ปรึกษาที่ได้รับการยอมรับในระดับประเทศ",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-brand-gray-mid text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
              >
                อ่านประวัติเพิ่มเติม <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-brand-navy to-brand-blue rounded-3xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Users size={64} className="mx-auto mb-4 opacity-80" />
                  <div className="text-6xl font-bold mb-2">200+</div>
                  <div className="text-white/70 text-lg">องค์กรที่ไว้วางใจ</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm">ROI วัดได้จริง</div>
                    <div className="text-brand-gray-mid text-xs">ทุกโปรเจกต์มีเป้าหมายชัดเจน</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              เสียงจากลูกค้า
            </h2>
            <p className="text-brand-gray-mid">ความไว้วางใจจากองค์กรชั้นนำ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-brand-gray-dark leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-brand-navy text-sm">{t.name}</div>
                  <div className="text-brand-gray-mid text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            พร้อมยกระดับธุรกิจของคุณ
            <br />
            สู่ยุคดิจิทัลอย่างจริงจัง?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            เริ่มต้นด้วยการปรึกษาฟรี ไม่มีข้อผูกมัด
            เราจะช่วยประเมินสถานการณ์และเสนอแนวทางที่เหมาะสมกับธุรกิจของคุณ
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            นัดปรึกษาฟรีวันนี้
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
