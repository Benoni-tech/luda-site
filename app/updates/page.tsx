import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import UpdateCard from "@/components/UpdateCard";
import { updates } from "@/lib/data";

export const metadata: Metadata = {
  title: "Updates",
  description: "News and updates from LUDA and the NDC Upper Denkyira West constituency office.",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHero image="students" title="Latest from the ground." />

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-site gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((u, i) => (
            <Reveal key={u.slug} delay={(i % 3) * 100}>
              <UpdateCard update={u} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
