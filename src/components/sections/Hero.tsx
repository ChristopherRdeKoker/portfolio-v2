import Image from "next/image";
import { ChevronDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { intro, person } from "@/content/profile";

export function Hero() {
  return (
    <header
      id="home"
      className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[2fr_3fr] md:gap-16 md:pr-24 md:pb-28"
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

      <div className="text-center md:text-left">
        <p className="text-accent mb-2 font-medium tracking-wide">Hi, I&apos;m</p>
        <h1 className="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">{person.name}</h1>
        <p className="text-ink-muted mt-3 text-lg font-medium sm:text-xl">{person.role}</p>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed md:mx-0">{intro}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href={person.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent focus-visible:outline-accent inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white shadow transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <GithubIcon className="size-5" />
            GitHub
          </a>
          <a
            href={`mailto:${person.email}`}
            className="border-line bg-surface-raised hover:border-accent hover:text-accent focus-visible:outline-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Mail className="size-5" aria-hidden />
            Email me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="text-ink-muted hover:text-accent absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-1 text-sm transition md:flex"
      >
        <span>Scroll down or use the shortcuts on the right</span>
        <ChevronDown className="size-5 motion-safe:animate-bounce" aria-hidden />
      </a>
    </header>
  );
}
