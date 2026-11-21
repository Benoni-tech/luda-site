"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Close, Menu } from "./Icons";
import { navLinks } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_#ECECEC]" : ""
      }`}
    >
      <div className="mx-auto grid max-w-site grid-cols-[1fr_auto] items-center gap-6 px-6 py-3.5 md:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <Logo />
        </div>

        <nav aria-label="Main" className="hidden justify-center gap-8 text-[15px] font-medium md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-ndc-red ${active ? "text-ndc-red" : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left bg-ndc-red transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <Link
            href="/join"
            className="hidden rounded bg-ndc-ink px-[18px] py-[11px] text-sm font-semibold text-white transition-colors hover:bg-ndc-red sm:inline-block"
          >
            Join the team
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-neutral-200 transition-[max-height] duration-500 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col items-center gap-1 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`py-2.5 text-2xl transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
