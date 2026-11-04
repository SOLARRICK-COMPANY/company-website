"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center gap-2.5" aria-label="SolarRick Technologies home">
          <Image
            src="/solarrick-logo.jpeg"
            alt=""
            width={56}
            height={56}
            priority
            className="h-11 w-11 object-contain"
          />
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-tight text-[#071D55] sm:text-[22px]">SolarRick</div>
            <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Technologies</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-[11px] font-bold uppercase tracking-[0.06em] text-slate-700 lg:flex xl:gap-5 xl:text-xs">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`whitespace-nowrap transition hover:text-[#087FF5] ${pathname === item.href ? "text-[#075DE5]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#075DE5] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-[#075DE5]/20 transition hover:bg-[#064ec4]">
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-slate-100 py-3 text-sm font-semibold ${pathname === item.href ? "text-[#075DE5]" : "text-slate-700"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-[#075DE5] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
              Let&apos;s Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#071D55] text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image src="/solarrick-logo.jpeg" alt="" width={52} height={52} className="h-12 w-12 object-contain" />
            <div>
              <div className="text-2xl font-black tracking-tight text-white">SolarRick</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-200">Technologies</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Ideas. Software. Next. We engineer software around the problems that matter most to businesses, institutions and ambitious teams.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Navigation</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Services</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li><Link href="/services" className="transition hover:text-white">Custom Software</Link></li>
            <li><Link href="/services" className="transition hover:text-white">Web Development</Link></li>
            <li><Link href="/services" className="transition hover:text-white">Mobile Apps</Link></li>
            <li><Link href="/services" className="transition hover:text-white">Cloud & DevOps</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li><a href="mailto:sollarickke@gmail.com" className="transition hover:text-white">sollarickke@gmail.com</a></li>
            <li><a href="tel:+254741486102" className="transition hover:text-white">0741 486 102</a></li>
            <li>
              <span className="block">WhatsApp</span>
              <a href="https://wa.me/254741486102" target="_blank" rel="noreferrer" className="transition hover:text-white">0741 486 102</a>
              <span aria-hidden="true"> / </span>
              <a href="https://wa.me/254768262962" target="_blank" rel="noreferrer" className="transition hover:text-white">0768 262 962</a>
            </li>
            <li>Kenya</li>
            <li>Business hours: to be confirmed</li>
            <li>Social accounts: to be confirmed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#08C8D8]" />
            <span>© 2026 SolarRick Technologies. All rights reserved.</span>
          </div>
          <div>Ideas. Software. Next.</div>
        </div>
      </div>
    </footer>
  );
}
