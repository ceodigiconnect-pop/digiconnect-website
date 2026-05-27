import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

/* ─── Inline SVG social icons ─────────────────────────────────── */

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function IconLinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconLine({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

/* ─── DATA ─────────────────────────────────────────────────────── */

const navLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services", label: "บริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อ" },
];

const socialLinks = [
  {
    href: "https://facebook.com/digiconnect",
    label: "Facebook",
    icon: <IconFacebook size={17} />,
  },
  {
    href: "https://line.me/R/ti/p/@digiconnect",
    label: "LINE OA",
    icon: <IconLine size={17} />,
  },
  {
    href: "https://linkedin.com/company/digiconnect",
    label: "LinkedIn",
    icon: <IconLinkedIn size={17} />,
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* ── Col 1: Brand ─────────────────────────────── */}
          <div className="md:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-blue-dark transition-colors">
                <span className="text-white font-extrabold text-xs">DC</span>
              </div>
              <span className="font-bold text-[1.05rem] tracking-tight">DigiConnect</span>
            </Link>

            {/* Tagline */}
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              Digital Marketing&nbsp;&nbsp;|&nbsp;&nbsp;AI Strategy&nbsp;&nbsp;|&nbsp;&nbsp;MarTech
            </p>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              ที่ปรึกษาและวิทยากรด้าน Digital Marketing, AI Strategy และ MarTech
              โดยโค้ชป๊อป — Chatchawan Kaewmanee
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Menu ──────────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-5">
              เมนู
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ───────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-5">
              ติดต่อ
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://line.me/R/ti/p/@digiconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MessageCircle size={15} className="text-brand-blue-light mt-0.5 shrink-0" />
                  <span className="text-white/60 group-hover:text-white text-sm transition-colors">
                    LINE OA: @digiconnect
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sangrat@digiconnect.co.th"
                  className="flex items-start gap-3 group"
                >
                  <Mail size={15} className="text-brand-blue-light mt-0.5 shrink-0" />
                  <span className="text-white/60 group-hover:text-white text-sm transition-colors break-all">
                    sangrat@digiconnect.co.th
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © 2026 DigiConnect Co., Ltd. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">
            Founder: Chatchawan Kaewmanee (โค้ชป๊อป)
          </p>
        </div>
      </div>
    </footer>
  );
}
