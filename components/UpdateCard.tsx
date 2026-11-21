import Link from "next/link";
import type { Update } from "@/lib/data";

export default function UpdateCard({ update }: { update: Update }) {
  return (
    <Link href={`/updates/${update.slug}`} className="group flex flex-col gap-3.5">
      <div className={`relative flex h-[380px] items-center justify-center overflow-hidden ${update.bg}`}>
        <span
          className={`text-8xl font-light tracking-[-0.04em] transition-transform duration-500 group-hover:scale-110 ${update.fg}`}
        >
          {update.mark}
        </span>
      </div>
      <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ndc-green">{update.tag}</span>
      <span className="text-lg font-semibold leading-snug transition-colors group-hover:text-ndc-red">{update.title}</span>
      <span className="text-[15px] leading-normal text-neutral-500">{update.summary}</span>
    </Link>
  );
}
