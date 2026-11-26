import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { ArrowDown, ArrowRight } from "@/components/Icons";
import { site } from "@/lib/data";
import { projects } from "@/lib/projects";

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
    title: "Diverse experience",
    text: "Hands-on work across party administration, communication, organisation and grassroots mobilisation.",
  },
  {
    title: "Proactive leadership",
    text: "Anticipating challenges and taking initiative, instead of waiting for instructions before acting.",
  },
  {
    title: "Effective service",
    text: "Contributing wherever the party needs him, from the constituency office to every branch.",
  },
];

const areas = ["Party administration", "Communication", "Organisation", "Grassroots mobilisation"];

const socials = [
  { label: "Facebook", href: site.facebook },
  { label: "TikTok", href: site.tiktok },
  { label: "Instagram", href: site.instagram },
  { label: "WhatsApp", href: site.whatsapp },
];

const sections = [
  { id: "luda", label: `${site.fullName} (LUDA)` },
  { id: "community", label: "In the community" },
];

const portrait = { src: "/images/portrait-3.jpg", width: 720, height: 1280 };

function Chapter({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="flex flex-col gap-5">
      <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ndc-red">{title}</h3>
      {children}
    </Reveal>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-5 text-[19px] leading-relaxed text-neutral-700">{children}</div>;
}

function Figure({ src, alt, caption, width, height }: { src: string; alt: string; caption: string; width: number; height: number }) {
  return (
    <Reveal>
      <figure className="flex flex-col gap-3">
        <div className="overflow-hidden bg-ndc-ink">
          <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 1024px) 100vw, 760px" className="h-auto w-full" />
        </div>
        <figcaption className="text-sm leading-normal text-neutral-500">{caption}</figcaption>
      </figure>
    </Reveal>
  );
}

function Follow({ title }: { title: string }) {
  return (
    <Reveal className="flex flex-col gap-4 border-t border-neutral-300 pt-8">
      <p className="text-[13px] font-bold uppercase tracking-[0.14em]">{title}</p>
      <ul className="flex flex-wrap gap-2">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded bg-ndc-paper px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-ndc-ink hover:text-white"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function AboutPage() {
  const donation = projects[0];

  return (
    <>
      {/* Page header: plain title + jump list, no photo hero */}
      <section className="px-6 pb-14 pt-16 md:pt-24">
        <div className="mx-auto max-w-site">
          <h1 className="animate-fadeUp text-[clamp(64px,12vw,168px)] font-semibold leading-[0.9] tracking-[-0.05em]">
            About
          </h1>
          <nav
            aria-label="On this page"
            className="mt-10 flex animate-fadeUp flex-col border-t border-neutral-300 sm:flex-row"
            style={{ animationDelay: "120ms" }}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex flex-1 items-center justify-between gap-4 border-b border-neutral-300 py-5 text-lg font-medium transition-colors hover:text-ndc-red sm:border-b-0 sm:pr-8"
              >
                {s.label}
                <ArrowDown className="h-4 w-4 flex-none transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Bio 1: LUDA */}
      <section id="luda" className="scroll-mt-20 px-6">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal from="left" className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-ndc-ink">
                <Image
                  src={portrait.src}
                  alt={`Portrait of ${site.fullName} (LUDA)`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  style={{ objectPosition: "50% 22%" }}
                />
              </div>
              <a
                href={portrait.src}
                download="LUDA-portrait.jpg"
                className="group inline-flex items-center gap-2 self-start py-1 text-sm font-semibold underline-offset-4 hover:text-ndc-red hover:underline"
              >
                Download photo
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="flex min-w-0 flex-col gap-14">
            <Reveal className="flex flex-col gap-6">
              <p className="text-sm font-medium text-neutral-500">{site.role}, NDC {site.constituency}</p>
              <h2 className="text-[clamp(40px,5vw,72px)] font-semibold leading-[1] tracking-[-0.035em]">
                {site.fullName}
              </h2>
              <p className="text-[clamp(22px,2vw,28px)] leading-snug tracking-tight">
                Known across the constituency as LUDA, Kingsley Ofori Aidoo is a young party organiser who believes a
                Deputy Constituency Secretary should be more than someone who waits for instructions before acting.
              </p>
              <dl className="grid grid-cols-2 border-t border-neutral-300">
                {facts.map((f) => (
                  <div key={f.label} className="border-b border-neutral-300 py-5 pr-4">
                    <dt className="text-sm text-neutral-500">{f.label}</dt>
                    <dd className="mt-1 text-lg leading-snug tracking-tight">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Chapter title="A young voice for the secretariat">
              <Body>
                <p>
                  In October 2026, delegates in {site.constituency} elected LUDA Deputy Secretary of the National
                  Democratic Congress. He ran on a simple idea: the position needs a diverse, proactive and versatile
                  person who can contribute to party administration, communication, organisation and grassroots
                  mobilisation.
                </p>
                <p>
                  His job is to support the constituency secretariat, keep the party&apos;s records clean, and make sure
                  information moves quickly from the constituency office to every branch, and back.
                </p>
              </Body>
            </Chapter>

            <Figure
              src="/images/community-seated.jpg"
              width={822}
              height={1280}
              alt="LUDA laughing with party colleagues, seated outside a house"
              caption="LUDA with party colleagues during a branch visit."
            />

            <Chapter title="Diverse experience. Proactive leadership. Effective service.">
              <ul className="flex flex-col border-t border-neutral-300">
                {values.map((v) => (
                  <li key={v.title} className="grid gap-2 border-b border-neutral-300 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                    <span className="text-xl font-semibold tracking-tight">{v.title}</span>
                    <span className="text-[17px] leading-relaxed text-neutral-700">{v.text}</span>
                  </li>
                ))}
              </ul>
            </Chapter>

            <Chapter title="Where LUDA contributes">
              <ul className="grid gap-x-10 gap-y-4 bg-ndc-paper p-8 text-[clamp(20px,1.8vw,24px)] tracking-tight sm:grid-cols-2">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <span className="h-2 w-2 flex-none bg-ndc-green" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </Chapter>

            <Chapter title={`Thank you, ${site.constituency}`}>
              <blockquote className="flex flex-col gap-5 border-l-2 border-ndc-red pl-6 text-[19px] leading-relaxed text-neutral-700">
                <p>
                  &ldquo;To every branch executive, delegate and party member who stood with me in the constituency
                  elections: this victory belongs to all of us. You trusted a young voice, and I do not take that
                  lightly.&rdquo;
                </p>
                <p className="font-semibold text-ndc-ink">&ldquo;The election is over. The work starts now.&rdquo;</p>
                <footer className="text-base text-neutral-500">{site.fullName} (LUDA)</footer>
              </blockquote>
            </Chapter>

            <Follow title="Follow LUDA" />
          </div>
        </div>
      </section>

      <div className="px-6">
        <hr className="mx-auto my-24 max-w-site border-neutral-300" />
      </div>

      {/* Bio 2: community work */}
      <section id="community" className="scroll-mt-20 px-6">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal from="left">
              <h2 className="text-[clamp(40px,5vw,72px)] font-semibold leading-[1] tracking-[-0.035em]">
                In the community
              </h2>
              <p className="mt-6 text-[clamp(20px,1.8vw,24px)] leading-snug tracking-tight text-neutral-700">
                Serving {site.constituency} does not stop at party work.
              </p>
            </Reveal>
          </div>

          <div className="flex min-w-0 flex-col gap-14">
            <Figure
              src={donation.photos[0].src}
              width={donation.photos[0].width}
              height={donation.photos[0].height}
              alt={donation.photos[0].alt}
              caption="LUDA, Constituency Chairman Joseph Mawuli Golomeke and staff of The Church of Pentecost Health Center, Ayanfuri."
            />

            <Chapter title="A birthday spent giving back">
              <Body>
                <p>
                  LUDA marked his birthday at The Church of Pentecost Health Center in Ayanfuri, donating rice, cooking
                  oil, sardines, mackerel, baby diapers, toiletries and many other items for patients, nursing mothers
                  and the staff who care for them.
                </p>
                <p>
                  Constituency Chairman Joseph Mawuli Golomeke stood beside him at the presentation and supported the
                  donation.
                </p>
              </Body>
              <Link
                href={`/projects/${donation.slug}`}
                className="group inline-flex items-center gap-2 self-start py-1 text-[15px] font-semibold hover:text-ndc-red"
              >
                Read about the project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Chapter>

            <Chapter title="Listening on the ground">
              <Body>
                <p>
                  Between meetings at the constituency office, LUDA spends his time in the branches: sitting with
                  executives, hearing concerns from members and taking them back to the secretariat to act on.
                </p>
              </Body>
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 self-start py-1 text-[15px] font-semibold hover:text-ndc-red"
              >
                See the gallery
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Chapter>
          </div>
        </div>
      </section>

      <section className="px-6 pt-28">
        <Reveal>
          <div className="mx-auto flex max-w-site flex-wrap items-end justify-between gap-8 bg-ndc-ink p-8 text-white sm:p-10">
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
