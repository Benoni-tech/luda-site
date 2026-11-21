import type { Metadata } from "next";
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

// From LUDA's own campaign message: "Diverse Experience, Proactive Leadership, Effective Service"
const values = [
  {
    num: "01",
    title: "Diverse experience",
    text: "Hands-on work across party administration, communication, organisation and grassroots mobilisation.",
  },
  {
    num: "02",
    title: "Proactive leadership",
    text: "Anticipating challenges and taking initiative, instead of waiting for instructions before acting.",
  },
  {
    num: "03",
    title: "Effective service",
    text: "Contributing wherever the party needs him, from the constituency office to every branch.",
  },
];

const areas = ["Party administration", "Communication", "Organisation", "Grassroots mobilisation"];

export default function AboutPage() {
  return (
    <>
      <PageHero image="smock" title="A young voice for the constituency secretariat." link={{ href: "/priorities", label: "See the priorities" }} />

      <section className="px-6">
        <div className="mx-auto grid max-w-site sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 100} className="border-b border-neutral-300 py-8 pr-6 lg:border-b-0">
              <p className="text-sm text-neutral-500">{f.label}</p>
              <p className="mt-2 text-2xl tracking-tight">{f.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="vision" className="scroll-mt-20 px-6 pt-28">
        <div className="mx-auto flex max-w-site flex-col gap-16">
          <Reveal>
            <p className="mb-[18px] text-sm font-medium text-neutral-500">The vision</p>
            <blockquote className="max-w-[980px] text-[clamp(28px,3vw,44px)] leading-[1.2] tracking-[-0.02em]">
              A Deputy Constituency Secretary should be more than someone who waits for instructions before acting.
            </blockquote>
            <p className="mt-6 max-w-2xl text-[19px] leading-relaxed text-neutral-700">
              The position needs a diverse, proactive and versatile person who can contribute to party administration,
              communication, organisation and grassroots mobilisation. LUDA brings experience across all four, and
              believes in anticipating challenges, taking initiative and contributing wherever the party needs him.
            </p>
          </Reveal>

          <div className="grid border-t border-neutral-300 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="flex flex-col gap-4 border-b border-neutral-300 py-10 md:border-b-0 md:pr-10"
              >
                <span className="text-sm font-medium text-ndc-red">{v.num}</span>
                <h3 className="text-[clamp(24px,2.2vw,32px)] leading-tight tracking-[-0.02em]">{v.title}</h3>
                <p className="leading-relaxed text-neutral-700">{v.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="flex flex-col gap-6 bg-ndc-paper p-10">
              <p className="text-sm font-medium text-neutral-500">Where LUDA contributes</p>
              <ul className="grid gap-x-10 gap-y-4 text-[clamp(20px,1.8vw,26px)] tracking-tight sm:grid-cols-2">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <span className="h-2 w-2 flex-none bg-ndc-green" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pt-28">
        <div className="mx-auto grid max-w-site gap-10 border-t border-neutral-300 pt-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(30px,3vw,44px)] leading-tight tracking-[-0.02em]">
              Thank you, {site.constituency}.
            </h2>
          </Reveal>
          <div className="flex min-w-0 flex-col gap-8">
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
