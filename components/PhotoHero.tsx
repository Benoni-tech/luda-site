"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ArrowRight } from "./Icons";
import { navLinks } from "@/lib/data";

type Props = {
  title: string;
  titleKey?: React.Key;
  intro?: string;
  link?: { href: string; label: string };
  dots?: React.ReactNode;
  image?: HeroImage;
};

export const heroImages = {
  wave: { src: "/images/hero-wave.jpg", position: "47% 30%" },
  panel: { src: "/images/hero-panel.jpg", position: "32% center" },
  students: { src: "/images/hero-students.jpg", position: "52% 35%" },
  group: { src: "/images/hero-group.jpg", position: "51% center" },
};

export type HeroImage = keyof typeof heroImages;

// Full-bleed photo hero: bold headline low on the left, Scroll + dots footer.
export default function PhotoHero({ title, titleKey, intro, link, dots, image = "wave" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const scrollPast = () => {
    const next = ref.current?.nextElementSibling;
    if (next) next.scrollIntoView({ behavior: "smooth" });
    else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-[calc(100svh-68px)] min-h-[560px] overflow-hidden bg-ndc-ink text-white">
      <Image
        src={heroImages[image].src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-[heroZoom_8s_ease-out_both] object-cover"
        style={{ objectPosition: heroImages[image].position }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/90 md:from-black/30 md:via-transparent md:to-black/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-black/60 via-black/15 to-transparent md:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full max-w-site flex-col justify-end px-6 pb-7 md:pb-9">
        <div className="flex flex-col gap-5 md:gap-6">
          <h1
            key={titleKey}
            aria-live={titleKey !== undefined ? "polite" : undefined}
            className="max-w-5xl animate-fadeUp text-[clamp(38px,11vw,52px)] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[clamp(56px,6.4vw,104px)]"
            style={{ animationDelay: "60ms" }}
          >
            {title}
          </h1>
          {intro && (
            <p
              className="max-w-xl animate-fadeUp text-[15px] leading-relaxed text-white/80 md:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              {intro}
            </p>
          )}
          {link && (
            <Link
              href={link.href}
              className="group flex animate-fadeUp items-center gap-2 self-start py-2 text-[15px] font-semibold md:text-base"
              style={{ animationDelay: "260ms" }}
            >
              {link.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="mt-10 flex items-center justify-between md:mt-8">
          <button
            type="button"
            onClick={scrollPast}
            className="-ml-1 flex h-11 items-center px-1 text-[13px] font-semibold md:text-sm"
          >
            Scroll
          </button>
          {dots ?? (
            <nav aria-label="Pages" className="-mr-2 flex items-center">
              {navLinks.map((l) => {
                const active = pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-label={l.label}
                    aria-current={active ? "page" : undefined}
                    className="flex h-11 w-6 items-center justify-center"
                  >
                    <HeroDot active={active} />
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}

export function HeroDot({ active }: { active: boolean }) {
  return (
    <span
      className={`block rounded-full bg-white transition-all duration-300 ${active ? "h-2.5 w-2.5" : "h-1.5 w-1.5 opacity-70"}`}
    />
  );
}
