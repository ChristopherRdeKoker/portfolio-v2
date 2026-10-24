import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { achievements } from "@/content/profile";

export function Achievements() {
  return (
    <Section id="achievements" title="Recent" highlight="achievements" backdrop="recent wins">
      <ul className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement) => (
          <li
            key={achievement.title}
            className="border-line bg-surface-raised hover:border-accent flex gap-4 rounded-2xl border p-5 shadow-sm transition"
          >
            <CheckCircle2 className="text-accent mt-0.5 size-6 shrink-0" aria-hidden />
            <div>
              <h3 className="font-semibold">{achievement.title}</h3>
              <p className="text-ink-muted mt-1 text-sm leading-relaxed">{achievement.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
