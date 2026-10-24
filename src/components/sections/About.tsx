import { Section } from "@/components/Section";
import { about, skills, stats } from "@/content/profile";

export function About() {
  return (
    <Section id="about" title="About" highlight="me" backdrop="my stats" tinted>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 leading-relaxed">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-line bg-surface-raised flex flex-col rounded-2xl border p-5 shadow-sm"
            >
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
        {skills.map((group) => (
          <div key={group.label}>
            <p className="mb-2 font-semibold">{group.label}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="bg-accent-soft text-ink rounded-full px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
