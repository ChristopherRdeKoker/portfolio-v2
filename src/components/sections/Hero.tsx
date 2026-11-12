import Image from "next/image";
import { ChevronDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { pageContainerClasses } from "@/components/ui/classes";
import { LinkButton, LinkButtonVariantEnum } from "@/components/ui/LinkButton";
import { intro, person } from "@/content/person";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <header
      id="home"
      className={cn(
        pageContainerClasses,
        "relative grid min-h-svh items-center gap-10 py-16 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16 md:pb-28",
      )}
    >
      <div className="relative mx-auto w-56 sm:w-64 md:w-full md:max-w-sm">
        <div aria-hidden className="bg-accent/80 absolute -inset-3 -z-10 rotate-3 rounded-3xl" />
        <Image
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          width={640}
          height={784}
          priority
          className="border-surface-raised rounded-3xl border-4 object-cover shadow-xl"
        />
      </div>

      <div className="min-w-0 text-center md:text-left">
        <p className="text-accent mb-2 font-medium tracking-wide">Hi, I&apos;m</p>
        <h1 className="text-4xl font-bold text-balance break-words sm:text-5xl lg:text-6xl">
          {person.name}
        </h1>
        <p className="text-ink-muted mt-3 text-lg font-medium break-words sm:text-xl">
          {person.role}
        </p>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed break-words md:mx-0">{intro}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <LinkButton
            href={person.githubUrl}
            isExternal
            variant={LinkButtonVariantEnum.Primary}
            className="px-6 py-3"
          >
            <GithubIcon className="size-5" />
            GitHub
          </LinkButton>
          <LinkButton
            href={`mailto:${person.email}`}
            variant={LinkButtonVariantEnum.Secondary}
            className="px-6 py-3"
          >
            <Mail className="size-5" aria-hidden />
            Email me
          </LinkButton>
        </div>
      </div>

      <a
        href="#about"
        className="text-ink-muted hover:text-accent absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-1 text-sm transition md:flex"
      >
        <p>Scroll down or use the shortcuts on the right</p>
        <ChevronDown className="size-5 motion-safe:animate-bounce" aria-hidden />
      </a>
    </header>
  );
}
