"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "fade";
};

const hidden: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  fade: "",
};

export default function Reveal({ children, className = "", delay = 0, from = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hidden[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
