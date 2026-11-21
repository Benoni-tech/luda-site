import ArrowLink from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ndc-red px-6 text-white">
      <div className="mx-auto flex w-full max-w-site flex-col gap-8">
        <h1 className="animate-fadeUp text-[clamp(44px,6vw,88px)] leading-[1.02] tracking-[-0.03em]">
          This page isn&apos;t here.
        </h1>
        <div className="animate-fadeUp" style={{ animationDelay: "150ms" }}>
          <ArrowLink href="/">Back home</ArrowLink>
        </div>
      </div>
    </section>
  );
}
