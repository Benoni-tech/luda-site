"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "./Icons";
import Reveal from "./Reveal";
import type { GalleryPhoto } from "@/lib/gallery";

type Props = {
  photos: GalleryPhoto[];
  albums?: readonly string[];
};

// Masonry photo grid with optional album filter and a keyboard-friendly lightbox.
export default function Gallery({ photos, albums }: Props) {
  const [album, setAlbum] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const shown = album === "All" ? photos : photos.filter((p) => p.album === album);

  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : shown[open];

  return (
    <>
      {albums && (
        <div role="group" aria-label="Filter photos" className="mb-10 flex flex-wrap gap-2">
          {["All", ...albums].map((a) => {
            const active = a === album;
            const count = a === "All" ? photos.length : photos.filter((p) => p.album === a).length;
            return (
              <button
                key={a}
                type="button"
                aria-pressed={active}
                onClick={() => setAlbum(a)}
                className={`rounded px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active ? "bg-ndc-ink text-white" : "bg-ndc-paper text-ndc-ink hover:bg-neutral-200"
                }`}
              >
                {a} <span className={active ? "text-white/60" : "text-neutral-500"}>{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shown.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 80} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpen(i);
              }}
              className="group relative block w-full overflow-hidden bg-ndc-ink text-left"
              aria-label={`Open photo: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-12 text-[13px] font-semibold uppercase tracking-[0.08em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {p.album}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex animate-fadeUp flex-col bg-black/95 text-white [animation-duration:0.3s]"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="text-sm tabular-nums text-white/70">
              {open + 1} / {shown.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="flex h-11 w-11 items-center justify-center rounded hover:bg-white/10"
            >
              <Close />
            </button>
          </div>

          <div className="relative min-h-0 flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain px-2 sm:px-20"
            />
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded bg-white/10 hover:bg-white/20 sm:left-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded bg-white/10 hover:bg-white/20 sm:right-4"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto w-full max-w-3xl px-6 py-5 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/60">{current.album}</p>
            <p className="mt-1.5 text-[15px] leading-normal">{current.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
