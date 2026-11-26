import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Community projects led by LUDA in Upper Denkyira West, from health centre donations to branch support.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        image="donationTall"
        title="Service that shows up in the community."
        link={{ href: `/projects/${projects[0].slug}`, label: "See the latest project" }}
      />

      <section className="px-6 pt-28">
        <div className="mx-auto max-w-site">
          <Reveal>
            <p className="mb-[18px] text-sm font-medium text-neutral-500">Projects</p>
            <p className="max-w-[980px] text-[clamp(26px,2.8vw,40px)] leading-[1.2] tracking-[-0.02em]">
              Leadership is more than party work. These are the ways LUDA gives back to the people of Upper Denkyira
              West.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pt-20">
        <div className="mx-auto flex max-w-site flex-col gap-6">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pt-6">
        <Reveal>
          <div className="mx-auto flex max-w-site flex-wrap items-end justify-between gap-8 bg-ndc-ink p-8 text-white sm:p-10">
            <div className="flex max-w-xl flex-col gap-3">
              <p className="text-sm font-medium text-white/60">More on the way</p>
              <p className="text-[clamp(26px,2.6vw,36px)] leading-tight tracking-[-0.02em]">
                Know a school, clinic or branch that needs support?
              </p>
            </div>
            <ArrowLink href="/contact" square="red">Tell LUDA</ArrowLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
