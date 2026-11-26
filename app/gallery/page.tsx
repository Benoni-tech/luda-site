import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import { albums, gallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of LUDA at work across Upper Denkyira West: community projects, branch visits and party meetings.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero image="meeting" title="Moments from the work." />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <h2 className="max-w-2xl text-[clamp(30px,3vw,44px)] leading-tight tracking-[-0.02em]">
                Branch visits, community projects and the people of Upper Denkyira West.
              </h2>
              <p className="text-sm text-neutral-500">Tap any photo to view it full screen.</p>
            </div>
          </Reveal>
          <Gallery photos={gallery} albums={albums} />
        </div>
      </section>
    </>
  );
}
