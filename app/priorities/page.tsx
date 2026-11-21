import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PrioritiesList from "@/components/PrioritiesList";
import ApproachTabs from "@/components/ApproachTabs";
import JoinCTA from "@/components/JoinCTA";

export const metadata: Metadata = {
  title: "Priorities",
  description: "LUDA's priorities as Deputy Secretary: stronger branches, clean records, faster communication and youth on board.",
};

export default function PrioritiesPage() {
  return (
    <>
      <PageHero
        image="group"
        title="Four things LUDA is working on."
        intro="Each one is built around the work of the constituency secretariat and what branches have asked for."
        link={{ href: "/join", label: "Join the team" }}
      />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-site">
          <Reveal>
            <p className="mb-[18px] text-sm font-medium text-neutral-500">Tap a priority to see the plan</p>
          </Reveal>
          <PrioritiesList showDetail />
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-site">
          <ApproachTabs />
        </div>
      </section>

      <JoinCTA />
    </>
  );
}
