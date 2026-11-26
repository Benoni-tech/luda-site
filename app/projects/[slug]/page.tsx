import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoHero from "@/components/PhotoHero";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import ArrowLink from "@/components/ArrowLink";
import { projects } from "@/lib/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: [project.photos[0].src] },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const facts = [
    { label: "Category", value: project.category },
    { label: "Where", value: project.location },
    { label: "When", value: project.when },
    { label: "Status", value: project.status },
  ];

  return (
    <>
      <PhotoHero image={project.image} title={project.title} link={{ href: "/projects", label: "All projects" }} />

      <section className="px-6">
        <div className="mx-auto grid max-w-site sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 100} className="border-b border-neutral-300 py-8 pr-6">
              <p className="text-sm text-neutral-500">{f.label}</p>
              <p className="mt-2 text-xl leading-snug tracking-tight">{f.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pt-20">
        <div className="mx-auto grid max-w-site gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <article className="flex flex-col gap-6">
            <Reveal>
              <p className="text-[clamp(22px,2vw,28px)] leading-snug tracking-tight">{project.summary}</p>
            </Reveal>
            {project.body.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-[19px] leading-relaxed text-neutral-700">{para}</p>
              </Reveal>
            ))}
          </article>

          <aside className="flex flex-col gap-6 self-start lg:sticky lg:top-24">
            <Reveal>
              <div className="bg-ndc-paper p-8">
                <p className="text-sm font-medium text-neutral-500">What was donated</p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[17px]">
                  {project.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 flex-none bg-ndc-green" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[15px] text-neutral-500">And many other items.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-l-2 border-ndc-red pl-6">
                <p className="text-sm font-medium text-neutral-500">Supported by</p>
                <ul className="mt-3 flex flex-col gap-2 text-[17px]">
                  {project.partners.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-site border-t border-neutral-300 pt-16">
          <Reveal>
            <h2 className="mb-10 text-[clamp(26px,2.6vw,36px)] tracking-[-0.02em]">Photos from the day</h2>
          </Reveal>
          <Gallery photos={project.photos.map((p) => ({ ...p, album: "Ayanfuri donation" as const }))} />
        </div>
      </section>

      <section className="px-6 pt-16">
        <Reveal>
          <div className="mx-auto flex max-w-site flex-wrap items-end justify-between gap-8 bg-ndc-ink p-8 text-white sm:p-10">
            <p className="max-w-xl text-[clamp(26px,2.6vw,36px)] leading-tight tracking-[-0.02em]">
              See more moments from the work.
            </p>
            <ArrowLink href="/gallery" square="red">Open the gallery</ArrowLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
