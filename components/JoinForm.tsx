"use client";

import { useState, type FormEvent } from "react";
import { Check } from "./Icons";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "rounded border-[1.5px] border-neutral-300 px-3.5 py-3 text-base outline-none transition-colors focus:border-ndc-ink";

export default function JoinForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex animate-fadeUp flex-col gap-3 rounded bg-white p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded bg-ndc-green text-white">
          <Check />
        </span>
        <p className="text-2xl">You&apos;re on the team.</p>
        <p className="leading-relaxed text-neutral-600">
          LUDA&apos;s office will reach you on WhatsApp with updates for your branch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex animate-fadeUp flex-col gap-[18px] rounded bg-white p-8">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold">Full name</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-semibold">Phone or WhatsApp</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="branch" className="text-sm font-semibold">Branch or community</label>
        <input id="branch" name="branch" required className={field} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="help" className="text-sm font-semibold">How would you like to help?</label>
        <select id="help" name="help" className={`${field} bg-white`}>
          <option>Branch mobilisation</option>
          <option>Social media and communication</option>
          <option>Events and logistics</option>
          <option>Any way I can</option>
        </select>
      </div>
      {status === "error" && (
        <p className="text-sm text-ndc-red" role="alert">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded bg-ndc-red py-4 font-semibold text-white transition-colors hover:bg-ndc-redDark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Sign me up"}
      </button>
    </form>
  );
}
