"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Performance Marketing",
  "AI Marketing",
  "Training & Seminar",
  "อื่นๆ",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-brand-gray-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors";

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
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 size={30} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">
          ส่งข้อมูลเรียบร้อยแล้ว
        </h3>
        <p className="text-brand-gray-mid text-sm max-w-xs leading-relaxed">
          ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง ขอบคุณที่ไว้วางใจ DigiConnect
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="mt-6 text-brand-blue text-sm font-medium hover:underline underline-offset-4"
        >
          ส่งข้อมูลอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            ชื่อ–นามสกุล <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="สมชาย ใจดี"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            อีเมล <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="somchai@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Phone + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            เบอร์โทร
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="08X-XXX-XXXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
            ประเภทบริการที่สนใจ
          </label>
          <div className="relative">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} appearance-none pr-10 cursor-pointer`}
            >
              <option value="">เลือกบริการ...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div>
        <label className="block text-sm font-medium text-brand-gray-dark mb-1.5">
          รายละเอียดเพิ่มเติม
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="เล่าให้เราฟังเกี่ยวกับธุรกิจของคุณ สิ่งที่ต้องการความช่วยเหลือ หรือคำถามที่อยากรู้..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/35"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            กำลังส่ง...
          </>
        ) : (
          <>
            <Send size={15} />
            ส่งข้อมูล — ทีมงานจะติดต่อกลับภายใน 24 ชม.
          </>
        )}
      </button>

      <p className="text-xs text-brand-gray-mid text-center pt-1">
        ข้อมูลของคุณจะถูกเก็บเป็นความลับ ไม่มีการเปิดเผยต่อบุคคลที่สาม
      </p>
    </form>
  );
}
