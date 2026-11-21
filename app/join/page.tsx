import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join the team",
  description: "Volunteer with LUDA and the NDC in Upper Denkyira West.",
};

const roles = [
  { num: "01", title: "Branch mobilisation", body: "Help organise members and meetings in your branch." },
  { num: "02", title: "Social media", body: "Share updates and keep members informed online." },
  { num: "03", title: "Events and logistics", body: "Support rallies, meetings and community outreach." },
];

export default function JoinPage() {
  return (
    <>
      <PageHero image="group" title="Ready to build the Ghana we want?" />

      <section className="px-6 py-28">
        <div className="mx-auto flex max-w-site flex-wrap gap-16">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-10">
            <Reveal>
              <p className="max-w-xl text-[clamp(24px,2.4vw,32px)] leading-snug tracking-tight">
                Leave your details and we will add you to the team for your branch.
              </p>
            </Reveal>
            <div className="border-t border-neutral-300">
              {roles.map((r, i) => (
                <Reveal key={r.num} delay={i * 100} className="flex gap-6 border-b border-neutral-300 py-6">
                  <span className="w-10 text-xl text-ndc-red">{r.num}</span>
                  <div>
                    <p className="text-xl tracking-tight">{r.title}</p>
                    <p className="mt-1 text-neutral-600">{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal from="right" delay={150} className="min-w-0 flex-[1_1_380px]">
            <div className="bg-gradient-to-br from-[#FCE4E8] via-[#F6B9C3] to-[#DDEFE3] p-6 sm:p-10">
              <JoinForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
