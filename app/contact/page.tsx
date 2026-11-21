import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with LUDA and the NDC Upper Denkyira West constituency office.",
};

const channels = [
  { label: "WhatsApp", value: "Message LUDA directly", href: site.whatsapp },
  { label: "Facebook", value: "Follow for updates", href: site.facebook },
  { label: "TikTok", value: "Watch on the ground", href: site.tiktok },
];

export default function ContactPage() {
  return (
    <>
      <PageHero image="wave" title="Talk to LUDA." intro="Have a concern from your branch or an idea for the constituency? Send a message and it comes straight to the office." />

      <section className="px-6 py-28">
        <div className="mx-auto flex max-w-site flex-wrap gap-16">
          <div className="min-w-0 flex-[1_1_360px] border-t border-neutral-300">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-neutral-300 px-3 py-6 transition-colors hover:bg-ndc-red hover:text-white"
                >
                  <span className="text-[clamp(24px,2.4vw,32px)] tracking-tight">{c.label}</span>
                  <span className="text-sm text-neutral-500 transition-colors group-hover:text-white/80">{c.value}</span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={300} className="mt-10 flex flex-col gap-1 text-[15px] text-neutral-600">
              <span className="font-semibold text-ndc-ink">Office</span>
              <span>NDC Constituency Office</span>
              <span>
                {site.constituency}, {site.region}
              </span>
            </Reveal>
          </div>

          <Reveal from="right" delay={150} className="min-w-0 flex-[1_1_480px]">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
