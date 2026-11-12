import { SectionNav } from "@/components/SectionNav";
import { SiteFooter } from "@/components/SiteFooter";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

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
      <SiteFooter />
    </div>
  );
}
