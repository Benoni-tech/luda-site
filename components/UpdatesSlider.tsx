"use client";

import { useEffect, useRef, useState } from "react";
import UpdateCard from "./UpdateCard";
import { ArrowLeft, ArrowRight } from "./Icons";
import { updates } from "@/lib/data";

const CARD = 340;
const GAP = 20;

export default function UpdatesSlider() {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(updates.length - 1);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  useEffect(() => {
    const measure = () => {
      const w = viewport.current?.offsetWidth ?? 0;
      const visible = Math.max(1, Math.floor((w + GAP) / (CARD + GAP)));
      const max = Math.max(0, updates.length - visible);
      setMaxIndex(max);
      setIndex((i) => Math.min(i, max));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const go = (dir: number) => setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));
  const progress = maxIndex === 0 ? 100 : ((index + 1) / (maxIndex + 1)) * 100;

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-xl text-[clamp(30px,3vw,42px)] leading-tight tracking-[-0.02em]">
          Latest from the ground in Upper Denkyira West.
        </h2>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous update"
            className="flex h-12 w-12 items-center justify-center rounded border-[1.5px] border-ndc-ink transition-colors hover:bg-ndc-ink hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ndc-ink"
          >
            <ArrowLeft className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={index === maxIndex}
            aria-label="Next update"
            className="flex h-12 w-12 items-center justify-center rounded border-[1.5px] border-ndc-ink transition-colors hover:bg-ndc-ink hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ndc-ink"
          >
            <ArrowRight className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      <div
        ref={viewport}
        className="cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, active: true };
        }}
        onPointerUp={(e) => {
          if (!drag.current.active) return;
          const dx = e.clientX - drag.current.x;
          drag.current.active = false;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
        onPointerLeave={() => {
          drag.current.active = false;
        }}
      >
        <div
          className="flex gap-5 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (CARD + GAP)}px)` }}
        >
          {updates.map((u) => (
            <div key={u.slug} className="w-[340px] flex-none select-none" draggable={false}>
              <UpdateCard update={u} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-9 h-0.5 bg-neutral-200">
        <div className="absolute left-0 top-0 h-0.5 bg-ndc-ink transition-[width] duration-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-3 text-sm text-neutral-500">Drag or use the arrows</p>
    </div>
  );
}
