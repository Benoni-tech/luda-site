"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { priorities } from "@/lib/data";

export default function PrioritiesList({ showDetail = false }: { showDetail?: boolean }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="border-t border-neutral-300">
      {priorities.map((p, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={p.num} delay={i * 80} className="border-b border-neutral-300">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`flex w-full items-center gap-3 px-3 py-4 text-left transition-colors duration-200 ${
                isOpen ? "bg-ndc-red text-white" : "hover:bg-[#FBE3E7]"
              }`}
            >
              <span className="w-11 text-[clamp(22px,2.2vw,30px)] sm:w-[22%]">{p.num}</span>
              <span className="flex-1 text-[clamp(22px,2.2vw,30px)] tracking-tight">{p.title}</span>
              <ArrowRight className={`h-6 w-6 flex-none transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-wrap gap-6 px-3 pb-8 pt-6">
                  <div className="hidden w-[22%] sm:block" />
                  <div className="min-w-0 max-w-2xl flex-1">
                    <p className="text-[19px] leading-relaxed text-neutral-600">{p.short}</p>
                    {showDetail && (
                      <ul className="mt-6 flex flex-col gap-3">
                        {p.detail.map((d) => (
                          <li key={d} className="flex gap-3 text-[17px] leading-relaxed text-neutral-700">
                            <span className="mt-[11px] h-px w-5 flex-none bg-ndc-ink" aria-hidden="true" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
