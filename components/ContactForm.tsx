"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Digital Marketing Strategy",
  "AI Strategy & Implementation",
  "MarTech & Data Analytics",
  "Performance Marketing",
  "Training & Workshop",
  "อื่นๆ / ยังไม่แน่ใจ",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">ส่งข้อความเรียบร้อยแล้ว</h3>
        <p className="text-brand-gray-mid max-w-sm">
          ขอบคุณที่ติดต่อเรา เราจะตอบกลับภายใน 1 วันทำการ
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
          }}
          className="mt-6 text-brand-blue text-sm font-medium hover:underline"
        >
          ส่งข้อความอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            ชื่อ–นามสกุล <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="สมชาย ใจดี"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            อีเมล <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="somchai@company.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            บริษัท / องค์กร
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="ชื่อบริษัทของคุณ"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            เบอร์โทรศัพท์
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="08X-XXX-XXXX"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
          บริการที่สนใจ
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm transition-colors bg-white appearance-none"
        >
          <option value="">เลือกบริการ...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
          รายละเอียดเพิ่มเติม <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="เล่าให้เราฟังเกี่ยวกับธุรกิจของคุณ ความท้าทายที่เจออยู่ หรือสิ่งที่ต้องการความช่วยเหลือ..."
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            กำลังส่ง...
          </>
        ) : (
          <>
            <Send size={16} />
            ส่งข้อความ
          </>
        )}
      </button>

      <p className="text-xs text-brand-gray-mid text-center">
        ข้อมูลของคุณจะถูกเก็บเป็นความลับ ไม่มีการขายหรือเปิดเผยต่อบุคคลที่สาม
      </p>
    </form>
  );
}
