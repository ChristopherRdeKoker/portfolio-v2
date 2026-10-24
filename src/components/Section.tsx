import type { ReactNode } from "react";
import type { SectionId } from "@/content/profile";

type SectionProps = {
  id: SectionId;
  title: string;
  highlight: string;
  backdrop: string;
  tinted?: boolean;
  children: ReactNode;
};

export function Section({ id, title, highlight, backdrop, tinted, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-20 md:py-28 ${tinted ? "bg-band border-line/60 border-y" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:pr-24">
        <div className="relative mb-12 overflow-hidden py-4 text-center">
          <span
            aria-hidden
            className="text-ink/5 pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-4xl font-bold tracking-[0.2em] whitespace-nowrap uppercase select-none sm:text-5xl md:text-7xl"
          >
            {backdrop}
          </span>
          <h2 id={`${id}-title`} className="relative text-3xl font-bold md:text-4xl">
            {title} <span className="text-accent">{highlight}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
