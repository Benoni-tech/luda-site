import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./Icons";
import { heroImages } from "@/lib/heroImages";
import type { Project } from "@/lib/projects";

// Wide card: photo on one side, project facts on the other.
export default function ProjectCard({ project }: { project: Project }) {
  const photo = heroImages[project.image];
  return (
    <Link href={`/projects/${project.slug}`} className="group grid bg-ndc-paper lg:grid-cols-[1.25fr_1fr]">
      <div className="relative h-[320px] overflow-hidden bg-ndc-ink sm:h-[440px] lg:h-auto lg:min-h-[520px]">
        <Image
          src={photo.src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: photo.position }}
        />
      </div>
      <div className="flex flex-col justify-between gap-10 p-8 sm:p-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.08em]">
            <span className="text-ndc-green">{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-400" aria-hidden="true" />
            <span className="text-neutral-500">{project.status}</span>
          </div>
          <h3 className="text-[clamp(28px,2.8vw,40px)] leading-[1.08] tracking-[-0.02em] transition-colors group-hover:text-ndc-red">
            {project.title}
          </h3>
          <p className="text-[17px] leading-relaxed text-neutral-700">{project.summary}</p>
        </div>
        <dl className="grid gap-4 border-t border-neutral-300 pt-6 text-[15px] sm:grid-cols-2">
          <div>
            <dt className="text-sm text-neutral-500">Where</dt>
            <dd className="mt-1">{project.location}</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">When</dt>
            <dd className="mt-1">{project.when}</dd>
          </div>
        </dl>
        <span className="flex items-center gap-2 text-[15px] font-semibold">
          See the project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
