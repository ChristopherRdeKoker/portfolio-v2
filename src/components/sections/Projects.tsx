import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { GithubProfileCard } from "@/components/projects/GithubProfileCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/Section";
import { featuredProject, projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" title="My" highlight="projects" backdrop="my work">
      <FeaturedProjectCard project={featuredProject} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
        <GithubProfileCard />
      </ul>
    </Section>
  );
}
