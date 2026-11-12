import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { Section } from "@/components/Section";
import { person } from "@/content/profile";

const repoUrl = `${person.githubUrl}/portfolio-v2`;
const stack = ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Static export", "nginx", "CSP"];

export function Projects() {
  return (
    <Section id="projects" title="My" highlight="projects" backdrop="my work">
      <article className="border-line bg-surface-raised mb-12 grid overflow-hidden rounded-2xl border shadow-sm lg:grid-cols-2">
        <div className="bg-band aspect-[16/10] overflow-hidden lg:aspect-auto">
          <Image
            src="/images/projects/portfolio-v2.webp"
            alt="Screenshot of this portfolio site"
            width={1440}
            height={900}
            className="size-full object-cover object-left-top"
          />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">
            Latest project
          </p>
          <h3 className="mt-1 text-2xl font-semibold">This portfolio</h3>
          <p className="text-ink-muted mt-3 leading-relaxed">
            A rebuild of my 2022 portfolio. It is exported as static files and served by nginx from
            my own hardened VPS, so there is no server-side code to attack. A strict Content
            Security Policy only lets the site&apos;s own scripts run.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li key={item} className="bg-accent-soft rounded-full px-3 py-1 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent focus-visible:outline-accent mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-white shadow transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <GithubIcon className="size-5" />
            View the source
          </a>
        </div>
      </article>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li className="group border-line hover:border-accent rounded-2xl border border-dashed transition">
          <a
            href={person.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:outline-accent flex h-full min-h-56 flex-col items-center justify-center gap-3 p-6 text-center focus-visible:outline-2"
          >
            <GithubIcon className="text-ink-muted group-hover:text-accent size-10 transition" />
            <span className="font-semibold">See more on GitHub</span>
            <span className="text-ink-muted text-sm">{person.githubHandle}</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
