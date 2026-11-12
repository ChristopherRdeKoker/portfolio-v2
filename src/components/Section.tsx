import type { ReactNode } from "react";
import { pageContainerClasses } from "@/components/ui/classes";
import type { SectionIdType } from "@/content/navigation";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: SectionIdType;
  title: string;
  highlight: string;
  backdrop: string;
  isTinted?: boolean;
  children: ReactNode;
};

export function Section({ id, title, highlight, backdrop, isTinted, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 md:py-28", isTinted && "border-line/60 bg-band border-y")}
    >
      <div className={pageContainerClasses}>
        <div className="relative mb-12 overflow-hidden py-4 text-center">
          <span
            aria-hidden
            className="text-ink/5 pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-4xl font-bold tracking-[0.2em] whitespace-nowrap uppercase select-none sm:text-5xl md:text-7xl"
          >
            {backdrop}
          </span>
          <h2 id={headingId} className="relative text-3xl font-bold md:text-4xl">
            {title} <span className="text-accent">{highlight}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
