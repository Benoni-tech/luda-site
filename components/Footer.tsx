import Link from "next/link";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ndc-ink text-white">
      <div className="flex h-2.5" aria-hidden="true">
        <div className="flex-1 bg-ndc-red" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-ndc-green" />
      </div>

      <div className="mx-auto max-w-site px-6 pb-8 pt-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-10">
            <h2 className="max-w-3xl text-[clamp(36px,5vw,72px)] font-normal leading-[1.02] tracking-[-0.03em]">
              Let&apos;s build the Ghana we want, together.
            </h2>
            <Link
              href="/join"
              className="group inline-flex items-center gap-5 rounded bg-white py-2 pl-5 pr-2 text-[15px] font-semibold text-ndc-ink transition-colors hover:bg-ndc-red hover:text-white"
            >
              Join the team
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ndc-green text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="my-16 h-px origin-left animate-growX bg-white/15" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <Reveal className="flex flex-col gap-5">
            <Logo light />
            <p className="max-w-xs text-[15px] leading-relaxed text-white/70">
              {site.fullName}, {site.role} of the {site.party} in {site.constituency} Constituency.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl tracking-tight underline-offset-4 transition-colors hover:text-ndc-red hover:underline"
            >
              Message on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-2 text-sm">
            <span className="mb-2 font-semibold">Navigation</span>
            <Link href="/" className="text-white/70 transition-colors hover:text-white">Home</Link>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/70 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </Reveal>

          <Reveal delay={200} className="flex flex-col gap-2 text-sm">
            <span className="mb-2 font-semibold">Follow LUDA</span>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">Facebook</a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">TikTok</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">Instagram</a>
          </Reveal>

          <Reveal delay={300} className="flex flex-col gap-2 text-sm">
            <span className="mb-2 font-semibold">Office</span>
            <span className="text-white/70">NDC Constituency Office</span>
            <span className="text-white/70">{site.constituency}</span>
            <span className="text-white/70">{site.region}, Ghana</span>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-[13px] text-white/50">
          <span>
            © {year} LUDA. {site.slogan}.
          </span>
          <span className="flex gap-6">
            <span>Site by Steward Eye</span>
            <a href="#top" className="transition-colors hover:text-white">Back to top</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
