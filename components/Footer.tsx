import Link from "next/link";
import { Mail, Phone, MapPin, Share2, ExternalLink } from "lucide-react";

const footerLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services", label: "บริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อ" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <span className="font-bold text-lg">DigiConnect</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              ที่ปรึกษาด้าน Digital Marketing, AI Strategy และ MarTech
              สำหรับองค์กรที่ต้องการเติบโตอย่างยั่งยืนในยุคดิจิทัล
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Share2 size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              เมนู
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              ติดต่อ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-blue-light mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@digiconnect.co.th"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  hello@digiconnect.co.th
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-blue-light mt-0.5 shrink-0" />
                <a
                  href="tel:+66000000000"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +66 (0) 00-000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-blue-light mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">กรุงเทพมหานคร, ประเทศไทย</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} DigiConnect Co., Ltd. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            โดย Chatchawan Kaewmanee (โค้ชป๊อป)
          </p>
        </div>
      </div>
    </footer>
  );
}
