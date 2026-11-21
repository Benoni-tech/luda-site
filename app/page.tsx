import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import PrioritiesList from "@/components/PrioritiesList";
import ApproachTabs from "@/components/ApproachTabs";
import UpdatesSlider from "@/components/UpdatesSlider";
import JoinCTA from "@/components/JoinCTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section id="intro" className="scroll-mt-20 px-6 py-[120px] md:py-40">
        <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-10 text-center">
          <ScrollText
            className="text-[clamp(30px,3.6vw,52px)] font-medium leading-[1.15] tracking-[-0.03em]"
            text="Kingsley Ofori Aidoo, known as LUDA, is the new Deputy Secretary of NDC Upper Denkyira West, working for stronger branches, clean records and a party office every member can reach."
          />
          <Reveal>
            <p className="max-w-[300px] text-[13px] leading-snug text-ndc-ink">
              Deputy Secretary, NDC Upper Denkyira West.{" "}
              <span className="text-neutral-400">Diverse experience, proactive leadership, effective service.</span>
            </p>
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
