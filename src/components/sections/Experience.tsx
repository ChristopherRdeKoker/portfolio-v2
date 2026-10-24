import { BookOpen, Briefcase } from "lucide-react";
import { Section } from "@/components/Section";
import { timeline } from "@/content/profile";

export function Experience() {
  return (
    <Section id="experience" title="My" highlight="timeline" backdrop="experience" tinted>
      <ol className="border-line relative mx-auto max-w-3xl border-l-2 pl-8">
        {timeline.map((entry) => {
          const Icon = entry.kind === "work" ? Briefcase : BookOpen;
          return (
            <li key={`${entry.period}-${entry.title}`} className="relative pb-10 last:pb-0">
              <span className="bg-accent absolute top-0 -left-[3.05rem] grid size-10 place-items-center rounded-full text-white shadow">
                <Icon className="size-5" aria-hidden />
              </span>
              <p className="bg-accent-soft inline-block rounded-full px-3 py-0.5 text-xs font-medium">
                {entry.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{entry.title}</h3>
              <p className="text-accent text-sm font-medium">{entry.organisation}</p>
              <p className="text-ink-muted mt-2 leading-relaxed">{entry.summary}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
