import { GithubIcon } from "@/components/GithubIcon";
import { ProjectScreenshot } from "@/components/projects/ProjectScreenshot";
import { ProjectStack } from "@/components/projects/ProjectStack";
import { ChipSizeEnum } from "@/components/ui/ChipList";
import { cardClasses } from "@/components/ui/classes";
import { LinkButton, LinkButtonVariantEnum } from "@/components/ui/LinkButton";
import type { ProjectType } from "@/content/projects";
import { cn } from "@/lib/cn";

type FeaturedProjectCardProps = {
  project: ProjectType;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className={cn(cardClasses, "mb-12 grid overflow-hidden lg:grid-cols-2")}>
      <ProjectScreenshot
        image={project.image}
        className="bg-band lg:aspect-auto"
        imageClassName="object-left-top"
      />
      <div className="min-w-0 p-6 md:p-8">
        <p className="text-accent text-sm font-semibold tracking-wide break-words uppercase">
          Latest project
        </p>
        <h3 className="mt-1 text-2xl font-semibold break-words">{project.name}</h3>
        <p className="text-ink-muted mt-3 leading-relaxed break-words">{project.description}</p>
        <ProjectStack stack={project.stack} size={ChipSizeEnum.Medium} className="mt-5" />
        <LinkButton
          href={project.href}
          isExternal
          variant={LinkButtonVariantEnum.Primary}
          className="mt-6 px-5 py-2.5"
        >
          <GithubIcon className="size-5" />
          View the source
        </LinkButton>
      </div>
    </article>
  );
}
