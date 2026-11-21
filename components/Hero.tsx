"use client";

import { useEffect, useState } from "react";
import PhotoHero, { HeroDot } from "./PhotoHero";
import { heroSlides } from "@/lib/data";

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <PhotoHero
      title={heroSlides[slide]}
      titleKey={slide}
      link={{ href: "/join", label: "Join the team" }}
      dots={
        <div className="-mr-2 flex items-center" role="group" aria-label="Hero messages">
          {heroSlides.map((text, i) => (
            <button
              key={text}
              type="button"
              aria-label={`Show message ${i + 1}`}
              aria-pressed={slide === i}
              onClick={() => {
                setPaused(true);
                setSlide(i);
              }}
              className="flex h-11 w-6 items-center justify-center"
            >
              <HeroDot active={slide === i} />
            </button>
          ))}
        </div>
      }
    />
  );
}
