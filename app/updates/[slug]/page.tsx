import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoHero from "@/components/PhotoHero";
import Reveal from "@/components/Reveal";
import UpdateCard from "@/components/UpdateCard";
import { updates } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const update = updates.find((u) => u.slug === params.slug);
  if (!update) return {};
  return { title: update.title, description: update.summary };
}

export default function UpdatePage({ params }: Props) {
  const update = updates.find((u) => u.slug === params.slug);
  if (!update) notFound();

  const more = updates.filter((u) => u.slug !== update.slug).slice(0, 3);

  return (
    <>
      <PhotoHero image="students" title={update.title} link={{ href: "/updates", label: "All updates" }} />

      <article className="px-6 py-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <Reveal>
            <p className="text-[clamp(22px,2vw,28px)] leading-snug tracking-tight">{update.summary}</p>
          </Reveal>
          {update.body.map((para, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-[19px] leading-relaxed text-neutral-700">{para}</p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="px-6">
        <div className="mx-auto max-w-site border-t border-neutral-300 pt-16">
          <Reveal>
            <h2 className="mb-10 text-[clamp(26px,2.6vw,36px)] tracking-[-0.02em]">More updates</h2>
          </Reveal>
          <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((u, i) => (
              <Reveal key={u.slug} delay={i * 100}>
                <UpdateCard update={u} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
