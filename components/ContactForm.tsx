"use client";

import { useState, type FormEvent } from "react";
import { Check } from "./Icons";

const field =
  "rounded border-[1.5px] border-neutral-300 px-3.5 py-3 text-base outline-none transition-colors focus:border-ndc-ink";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Connect to email, SMS or a CRM before launch
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex animate-fadeUp flex-col gap-3 bg-ndc-paper p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded bg-ndc-green text-white">
          <Check />
        </span>
        <p className="text-2xl">Message received.</p>
        <p className="leading-relaxed text-neutral-600">Thank you. LUDA&apos;s office will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[18px] bg-ndc-paper p-8">
      <div className="grid gap-[18px] sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-name" className="text-sm font-semibold">Full name</label>
          <input id="c-name" name="name" required autoComplete="name" className={`${field} bg-white`} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-phone" className="text-sm font-semibold">Phone or WhatsApp</label>
          <input id="c-phone" name="phone" type="tel" required autoComplete="tel" className={`${field} bg-white`} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-branch" className="text-sm font-semibold">Branch or community</label>
        <input id="c-branch" name="branch" className={`${field} bg-white`} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-msg" className="text-sm font-semibold">Your message</label>
        <textarea id="c-msg" name="message" required rows={5} className={`${field} resize-y bg-white`} />
      </div>
      <button
        type="submit"
        className="self-start rounded bg-ndc-ink px-7 py-4 font-semibold text-white transition-colors hover:bg-ndc-red"
      >
        Send message
      </button>
    </form>
  );
}
