"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  litClass?: string;
  dimClass?: string;
};

// Paragraph whose words light up one by one as it scrolls up the screen, so it reads in line by line.
export default function ScrollText({ text, className = "", litClass = "text-ndc-ink", dimClass = "text-neutral-300" }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top enters the lower part of the screen, 1 when the bottom reaches the middle
      const start = vh * 0.85;
      const end = vh * 0.5;
      const total = rect.height + (start - end);
      setProgress(Math.min(1, Math.max(0, (start - rect.top) / total)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const lit = progress * words.length;

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`transition-colors duration-300 ${i < lit ? litClass : dimClass}`}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
