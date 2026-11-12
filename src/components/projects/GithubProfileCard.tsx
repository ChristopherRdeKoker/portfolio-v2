import { GithubIcon } from "@/components/GithubIcon";
import { focusRingClasses } from "@/components/ui/classes";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";

export function GithubProfileCard() {
  return (
    <li className="group border-edge hover:border-brand min-w-0 rounded-2xl border border-dashed transition">
      <ExternalLink
        href={person.githubUrl}
        className={cn(
          "flex h-full min-h-56 flex-col items-center justify-center gap-3 p-6 text-center",
          focusRingClasses,
        )}
      >
        <GithubIcon className="text-ink-muted group-hover:text-brand size-10 transition" />
        <p className="w-full font-semibold break-words">See more on GitHub</p>
        <p className="text-ink-muted w-full text-sm break-words">{person.githubHandle}</p>
        <span className="sr-only">(opens in a new tab)</span>
      </ExternalLink>
    </li>
  );
}
