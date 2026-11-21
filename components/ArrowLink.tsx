import Link from "next/link";
import { ArrowRight } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  tone?: "white" | "dark";
  square?: "green" | "red" | "ink";
};

const squareBg = { green: "bg-ndc-green", red: "bg-ndc-red", ink: "bg-ndc-ink" };

export default function ArrowLink({ href, children, tone = "white", square = "green" }: Props) {
  const base =
    tone === "white"
      ? "bg-white text-ndc-ink hover:bg-ndc-ink hover:text-white"
      : "bg-ndc-ink text-white hover:bg-ndc-red";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-5 rounded py-2 pl-5 pr-2 text-[15px] font-semibold transition-colors duration-300 ${base}`}
    >
      {children}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-sm text-white transition-transform duration-300 group-hover:translate-x-1 ${squareBg[square]}`}
      >
        <ArrowRight />
      </span>
    </Link>
  );
}
