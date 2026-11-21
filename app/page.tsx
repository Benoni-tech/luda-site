import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import PrioritiesList from "@/components/PrioritiesList";
import ApproachTabs from "@/components/ApproachTabs";
import UpdatesSlider from "@/components/UpdatesSlider";
import JoinCTA from "@/components/JoinCTA";
import ArrowLink from "@/components/ArrowLink";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section id="intro" className="scroll-mt-20 px-6 pb-[72px] pt-[104px]">
        <div className="mx-auto flex max-w-site flex-wrap items-start justify-between gap-12">
          <Reveal className="min-w-0 max-w-[880px] flex-[999_1_560px]">
            <p className="text-[clamp(28px,3vw,42px)] leading-[1.2] tracking-[-0.02em]">
              Kingsley Ofori Aidoo, known as LUDA, is the new Deputy Secretary of NDC Upper Denkyira West, working for
              stronger branches, clean records and a party office every member can reach.
            </p>
          </Reveal>
          <Reveal from="right" delay={150} className="relative h-[220px] w-full max-w-[260px] flex-[1_1_220px] overflow-hidden bg-ndc-green">
            <Image src="/images/luda.jpg" alt="" fill sizes="260px" className="object-contain object-bottom" />
          </Reveal>
        </div>
      </section>

      {/* Priorities */}
      <section className="px-6 pb-28 pt-6">
        <div className="mx-auto max-w-site">
          <Reveal>
            <p className="mb-[18px] text-sm font-medium text-neutral-500">My priorities as Deputy Secretary</p>
          </Reveal>
          <PrioritiesList />
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 pb-[120px]">
        <div className="mx-auto max-w-site">
          <ApproachTabs />
        </div>
      </section>

      {/* Banner */}
      <section className="px-6">
        <Reveal>
          <div className="relative mx-auto flex min-h-[380px] max-w-site items-end overflow-hidden bg-ndc-ink text-white">
            <div className="absolute right-0 top-0 h-full w-[38%] origin-right animate-growX bg-ndc-red" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-full w-[12%] bg-ndc-green" aria-hidden="true" />
            <div className="relative flex w-full flex-wrap items-end justify-between gap-6 p-10">
              <p className="max-w-[520px] text-[clamp(26px,2.6vw,36px)] leading-[1.15] tracking-[-0.02em]">
                One constituency. Every branch.
                <br />
                One team.
              </p>
              <ArrowLink href="/updates" square="red">See updates</ArrowLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Updates */}
      <section className="px-6 py-[120px]">
        <div className="mx-auto max-w-site">
          <Reveal>
            <UpdatesSlider />
          </Reveal>
        </div>
      </section>

      <JoinCTA />
    </>
  );
}
