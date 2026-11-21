"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import JoinForm from "./JoinForm";
import { ArrowRight } from "./Icons";

export default function JoinCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section id="join" className="px-6">
      <Reveal>
        <div className="mx-auto flex min-h-[560px] max-w-site flex-col justify-between gap-12 bg-gradient-to-br from-[#FCE4E8] via-[#F6B9C3] to-[#DDEFE3] px-6 pb-10 pt-[72px] sm:px-10">
          <div className="flex flex-wrap items-start gap-12">
            <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-8">
              <h2 className="text-[clamp(40px,5vw,72px)] leading-[1.02] tracking-[-0.03em]">
                Ready to build the Ghana we want?
              </h2>
              {!open && (
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="group inline-flex items-center gap-5 rounded bg-white py-2 pl-5 pr-2 text-[15px] font-semibold transition-colors hover:bg-ndc-ink hover:text-white"
                  >
                    Join the team
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ndc-ink text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight />
                    </span>
                  </button>
                </div>
              )}
            </div>
            {open && (
              <div className="min-w-0 flex-[1_1_380px]">
                <JoinForm />
              </div>
            )}
          </div>
          <div className="flex max-w-[460px] flex-col gap-1.5">
            <p className="text-[15px] font-semibold">For every member of Upper Denkyira West.</p>
            <p className="text-[15px] leading-normal text-neutral-700">
              Sign up and get party notices, meeting invitations and branch updates straight from the constituency office.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
