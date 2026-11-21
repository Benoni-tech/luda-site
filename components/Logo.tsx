import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="LUDA home">
      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26">
        <rect x="0" y="0" width="12" height="26" fill="#C8102E" />
        <rect x="14" y="14" width="12" height="12" fill="#0B7A3B" />
        <rect x="14" y="0" width="12" height="12" fill={light ? "#FFFFFF" : "#111111"} />
      </svg>
      <span className={`text-[15px] font-bold leading-[1.05] ${light ? "text-white" : "text-ndc-ink"}`}>
        LUDA
        <br />
        <span className={`font-normal ${light ? "text-white/70" : "text-neutral-500"}`}>Deputy Secretary</span>
      </span>
    </Link>
  );
}
