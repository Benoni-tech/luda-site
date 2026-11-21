import Image from "next/image";
import Link from "next/link";
import { heroImages } from "@/lib/heroImages";
import type { Update } from "@/lib/data";

export default function UpdateCard({ update }: { update: Update }) {
  const photo = heroImages[update.image];
  return (
    <Link href={`/updates/${update.slug}`} className="group flex flex-col gap-3.5">
      <div className="relative h-[380px] overflow-hidden bg-ndc-ink">
        <Image
          src={photo.src}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 440px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: photo.position }}
        />
      </div>
      <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ndc-green">{update.tag}</span>
      <span className="text-lg font-semibold leading-snug transition-colors group-hover:text-ndc-red">{update.title}</span>
      <span className="text-[15px] leading-normal text-neutral-500">{update.summary}</span>
    </Link>
  );
}
