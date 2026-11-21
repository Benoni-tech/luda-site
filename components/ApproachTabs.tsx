"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { approach } from "@/lib/data";
import { heroImages } from "@/lib/heroImages";

export default function ApproachTabs() {
  const [tab, setTab] = useState(0);
  const current = approach[tab];

  return (
    <div className="flex flex-wrap items-stretch gap-14">
      <Reveal from="left" className="min-h-[460px] min-w-0 max-w-[560px] flex-[1_1_420px]">
        <div className="relative flex h-full min-h-[460px] items-center justify-center overflow-hidden bg-ndc-ink text-white">
          {approach.map((a, i) => (
            <Image
              key={a.name}
              src={heroImages[a.image].src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className={`object-cover transition-opacity duration-700 ${tab === i ? "opacity-100" : "opacity-0"}`}
              style={{ objectPosition: heroImages[a.image].position }}
            />
          ))}
          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
          <div key={tab} className="relative flex animate-fadeUp flex-col items-center gap-6 p-10 text-center">
            <span className="text-[140px] font-light leading-none tracking-[-0.05em]">{current.big}</span>
            <span className="max-w-[300px] text-lg font-medium leading-snug">{current.caption}</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150} className="flex min-w-0 flex-[1_1_360px] flex-col justify-between gap-12 py-2">
        <div className="flex flex-col gap-7">
          <p className="max-w-[240px] text-sm font-medium leading-snug text-neutral-500">
            How LUDA works for the constituency
          </p>
          <div role="tablist" aria-label="Approach" className="flex flex-col gap-2.5">
            {approach.map((a, i) => (
              <button
                key={a.name}
                type="button"
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={`self-start border-b-2 pb-1 text-left text-[clamp(30px,3vw,44px)] leading-tight tracking-tight transition-colors duration-300 ${
                  tab === i ? "border-ndc-ink text-ndc-ink" : "border-transparent text-neutral-400 hover:text-ndc-ink"
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>
        </div>
        <div key={tab} className="flex max-w-md animate-fadeUp flex-col gap-2.5" role="tabpanel">
          <p className="font-semibold">{current.head}</p>
          <p className="text-[17px] leading-relaxed text-neutral-600">{current.body}</p>
        </div>
      </Reveal>
    </div>
  );
}
