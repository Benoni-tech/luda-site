import Link from "next/link";
import { getImageProps } from "next/image";
import { site } from "@/lib/data";

// Text-first hero: emblem, small spaced caps "welcome" line, the name in large serif caps,
// one pill button, then the photo underneath on white.
// Art-directed photo: the portrait on phones, the wide photo from md up.
// <picture> means each device downloads only its own image.
const alt = `${site.fullName} (LUDA)`;
const common = { alt, sizes: "100vw", priority: true };

const {
  props: { srcSet: desktopSrcSet },
} = getImageProps({ ...common, src: "/images/hero-pair.jpg", width: 1080, height: 811 });

const { props: mobileProps } = getImageProps({ ...common, src: "/images/portrait-3.jpg", width: 720, height: 1280 });

function Emblem() {
  return (
    <svg aria-hidden="true" width="52" height="52" viewBox="0 0 26 26">
      <rect x="0" y="0" width="12" height="26" fill="#C8102E" />
      <rect x="14" y="14" width="12" height="12" fill="#0B7A3B" />
      <rect x="14" y="0" width="12" height="12" fill="#111111" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-site flex-col items-center px-6 pb-12 pt-12 text-center md:pb-16 md:pt-20">
        <div className="animate-fadeUp">
          <Emblem />
        </div>
        <p
          className="mt-7 animate-fadeUp text-[12px] font-bold uppercase tracking-[0.2em] text-ndc-ink md:text-sm"
          style={{ animationDelay: "80ms" }}
        >
          Welcome to the office of
        </p>
        <h1
          className="mt-4 max-w-4xl animate-fadeUp font-serif text-[clamp(34px,10vw,48px)] font-medium uppercase leading-[1.15] tracking-[0.08em] text-ndc-ink md:text-[clamp(56px,6vw,88px)]"
          style={{ animationDelay: "160ms" }}
        >
          {site.fullName}
        </h1>
        <p
          className="mt-4 animate-fadeUp text-[15px] text-neutral-500 md:text-base"
          style={{ animationDelay: "220ms" }}
        >
          LUDA, {site.role}, NDC {site.constituency}
        </p>
        <Link
          href="/about"
          className="mt-8 w-full max-w-[340px] animate-fadeUp rounded-full bg-ndc-red px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-ndc-ink md:w-auto md:text-[13px]"
          style={{ animationDelay: "300ms" }}
        >
          About LUDA
        </Link>
      </div>

      <div className="overflow-hidden bg-ndc-ink">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
          <img
            {...mobileProps}
            className="aspect-[4/5] h-auto w-full animate-[heroZoom_8s_ease-out_both] object-cover object-[50%_12%] md:aspect-auto md:h-[min(78vh,820px)] md:object-[48%_25%]"
          />
        </picture>
      </div>
    </section>
  );
}
