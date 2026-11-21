import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Kingsley Ofori Aidoo (LUDA), Deputy Secretary of NDC Upper Denkyira West.",
};

const facts = [
  { label: "Role", value: "Deputy Secretary" },
  { label: "Party", value: "National Democratic Congress" },
  { label: "Constituency", value: "Upper Denkyira West" },
  { label: "Elected", value: "October 2026" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero image="panel" title="A young voice for the constituency secretariat." link={{ href: "/priorities", label: "See the priorities" }} />

      <section className="px-6 py-28">
        <div className="mx-auto flex max-w-site flex-wrap gap-16">
          <Reveal from="left" className="relative aspect-[4/5] w-full min-w-0 max-w-[480px] flex-[1_1_360px] overflow-hidden bg-ndc-red">
            <Image src="/images/luda.jpg" alt="Kingsley Ofori Aidoo" fill sizes="(max-width: 768px) 100vw, 480px" className="object-contain object-bottom" />
            <div className="absolute inset-x-0 bottom-0 h-3 bg-ndc-green" />
          </Reveal>

          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-8">
            <Reveal>
              <h2 className="text-[clamp(30px,3vw,44px)] leading-tight tracking-[-0.02em]">
                Thank you, {site.constituency}.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col gap-5 text-[19px] leading-relaxed text-neutral-700">
                <p>
                  To every branch executive, delegate and party member who stood with me in the constituency elections:
                  this victory belongs to all of us. You trusted a young voice, and I do not take that lightly.
                </p>
                <p>
                  As Deputy Secretary, my job is to support the constituency secretariat, keep our records clean, and make
                  sure information moves quickly from the constituency office to every branch, and back.
                </p>
                <p className="font-semibold text-ndc-ink">The election is over. The work starts now.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg">{site.fullName} (LUDA)</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-site border-t border-neutral-300 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 100} className="border-b border-neutral-300 py-8 pr-6 lg:border-b-0">
              <p className="text-sm text-neutral-500">{f.label}</p>
              <p className="mt-2 text-2xl tracking-tight">{f.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pt-28">
        <Reveal>
          <div className="mx-auto flex max-w-site flex-wrap items-end justify-between gap-8 bg-ndc-ink p-10 text-white">
            <p className="max-w-xl text-[clamp(26px,2.6vw,36px)] leading-tight tracking-[-0.02em]">
              See what LUDA is working on for every branch.
            </p>
            <ArrowLink href="/priorities" square="red">View priorities</ArrowLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
