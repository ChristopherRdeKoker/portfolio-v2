import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { ProjectScreenshot } from "@/components/projects/ProjectScreenshot";
import { ProjectStack } from "@/components/projects/ProjectStack";
import { ChipSizeEnum } from "@/components/ui/ChipList";
import { cardClasses, focusRingClasses } from "@/components/ui/classes";
import type { ProjectType } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: ProjectType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li
      className={cn(
        cardClasses,
        "group hover:border-brand flex min-w-0 flex-col overflow-hidden transition",
      )}
    >
      <a href={project.href} className={cn("flex h-full flex-col", focusRingClasses)}>
        <ProjectScreenshot
          image={project.image}
          className="bg-surface"
          imageClassName="object-top transition duration-500 group-hover:scale-105"
        />
        <div className="flex flex-1 flex-col p-5">
          <h4 className="flex items-center justify-between font-semibold">
            <span className="min-w-0 break-words">{project.name}</span>
            <ExternalLinkIcon className="text-ink-muted size-4 shrink-0" aria-hidden />
          </h4>
          <p className="text-ink-muted mt-1 text-sm leading-relaxed break-words">
            {project.description}
          </p>
          <ProjectStack stack={project.stack} size={ChipSizeEnum.Small} className="mt-4" />
        </div>
      </a>
    </li>
  );
}
