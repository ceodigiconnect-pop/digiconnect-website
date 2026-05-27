"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services", label: "บริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // set initial state on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(15,42,94,0.08)]"
    : "bg-transparent";

  const linkBase = "relative text-sm font-medium transition-colors duration-200";
  const linkActive = scrolled ? "text-brand-blue" : "text-white";
  const linkIdle = scrolled
    ? "text-brand-gray-dark hover:text-brand-navy"
    : "text-white/80 hover:text-white";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ─────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="DigiConnect หน้าแรก"
            >
              {/* Monogram square */}
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center shrink-0 shadow-md shadow-brand-blue/30 group-hover:bg-brand-blue-dark transition-colors">
                <span className="text-white font-extrabold text-xs tracking-tight">DC</span>
              </div>
              {/* Wordmark */}
              <span
                className={`font-bold text-[1.05rem] tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-brand-navy" : "text-white"
                }`}
              >
                DigiConnect
              </span>
            </Link>

            {/* ── Desktop nav ──────────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${linkBase} px-3 py-2 rounded-lg ${
                      isActive ? linkActive : linkIdle
                    }`}
                  >
                    {link.label}
                    {/* Active underline dot */}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-blue" />
                    )}
                  </Link>
                );
              })}

              {/* CTA */}
              <Link
                href="/contact"
                className="ml-4 bg-brand-blue hover:bg-brand-blue-dark active:scale-95 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md shadow-brand-blue/25 hover:shadow-brand-blue/40"
              >
                ปรึกษาฟรี
              </Link>
            </div>

            {/* ── Hamburger ────────────────────────────────── */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
              aria-expanded={isOpen}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-brand-navy hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 md:hidden transition-all duration-250 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white border-b border-gray-100 shadow-xl shadow-brand-navy/8 mx-0">
          <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-blue-50 text-brand-blue"
                      : "text-brand-gray-dark hover:bg-gray-50 hover:text-brand-navy"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  )}
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
              >
                ปรึกษาฟรี — ไม่มีค่าใช้จ่าย
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
