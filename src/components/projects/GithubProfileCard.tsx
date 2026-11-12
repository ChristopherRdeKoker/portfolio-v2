import { GithubIcon } from "@/components/GithubIcon";
import { focusRingClasses } from "@/components/ui/classes";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";

export function GithubProfileCard() {
  return (
    <li className="group border-line hover:border-accent rounded-2xl border border-dashed transition">
      <ExternalLink
        href={person.githubUrl}
        className={cn(
          "flex h-full min-h-56 flex-col items-center justify-center gap-3 p-6 text-center",
          focusRingClasses,
        )}
      >
        <GithubIcon className="text-ink-muted group-hover:text-accent size-10 transition" />
        <span className="font-semibold">See more on GitHub</span>
        <span className="text-ink-muted text-sm">{person.githubHandle}</span>
        <span className="sr-only">(opens in a new tab)</span>
      </ExternalLink>
    </li>
  );
}
