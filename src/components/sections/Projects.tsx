import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { Section } from "@/components/Section";
import { person, starterProjects } from "@/content/profile";

const repoUrl = `${person.githubUrl}/portfolio-v2`;
const stack = ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Static export", "nginx", "CSP"];

export function Projects() {
  return (
    <Section id="projects" title="My" highlight="projects" backdrop="my work">
      <article className="border-line bg-surface-raised mb-20 grid overflow-hidden rounded-2xl border shadow-sm lg:grid-cols-2">
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

      <h3 className="text-xl font-semibold">Where I started (2022)</h3>
      <p className="text-ink-muted mt-2 max-w-3xl leading-relaxed">
        My first JavaScript projects, built while following Jonas Schmedtmann&apos;s course on
        Udemy.
      </p>
      <p className="border-accent bg-accent-soft mt-4 mb-8 max-w-3xl rounded-r-xl border-l-4 px-4 py-3 leading-relaxed">
        <strong>
          Please note: these are beginner apps from before my professional software development
          career. Today I work in private repositories every day, as my GitHub activity shows.
        </strong>
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {starterProjects.map((project) => (
          <li
            key={project.name}
            className="group border-line bg-surface-raised hover:border-accent overflow-hidden rounded-2xl border shadow-sm transition"
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline-accent block focus-visible:outline-2"
            >
              <div className="bg-surface aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  width={1200}
                  height={750}
                  className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="flex items-center justify-between font-semibold">
                  {project.name}
                  <ExternalLink className="text-ink-muted size-4" aria-hidden />
                </h4>
                <p className="text-ink-muted mt-1 text-sm leading-relaxed">{project.description}</p>
                <span className="sr-only">(opens live demo in a new tab)</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
