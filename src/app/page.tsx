import { SectionNav } from "@/components/SectionNav";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { person } from "@/content/profile";

export default function Home() {
  return (
    <div className="pb-20 md:pb-0">
      <SectionNav />
      <Hero />
      <main>
        <About />
        <Achievements />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-line text-ink-muted mx-auto max-w-6xl border-t px-5 py-8 text-center text-sm sm:px-8 md:pr-24">
        © {new Date().getFullYear()} {person.name} · Built with Next.js, TypeScript and Tailwind CSS
      </footer>
    </div>
  );
}
