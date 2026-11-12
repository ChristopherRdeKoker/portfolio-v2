import { Section } from "@/components/Section";
import { ChipList, ChipSizeEnum } from "@/components/ui/ChipList";
import { cardClasses } from "@/components/ui/classes";
import { about, skills, stats } from "@/content/about";
import { cn } from "@/lib/cn";

export function About() {
  return (
    <Section id="about" title="About" highlight="me" backdrop="my stats" isTinted>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 leading-relaxed">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className={cn(cardClasses, "flex flex-col p-5")}>
              <dt className="text-ink-muted text-sm">{stat.label}</dt>
              <dd className="text-accent order-first text-3xl font-bold md:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="text-ink-muted mt-16 mb-6 text-center text-sm font-semibold tracking-[0.2em] uppercase">
        Skills
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skillGroup) => (
          <div key={skillGroup.label}>
            <p className="mb-2 font-semibold">{skillGroup.label}</p>
            <ChipList items={skillGroup.items} size={ChipSizeEnum.Medium} />
          </div>
        ))}
      </div>
    </Section>
  );
}
