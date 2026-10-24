"use client";

import { Award, Briefcase, FolderGit2, Home, Mail, User, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, type SectionId } from "@/content/profile";

const icons: Record<SectionId, LucideIcon> = {
  home: Home,
  about: User,
  achievements: Award,
  experience: Briefcase,
  projects: FolderGit2,
  contact: Mail,
};

export function SectionNav() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of navItems) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="border-line bg-surface-raised/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur md:inset-x-auto md:top-1/2 md:right-4 md:bottom-auto md:-translate-y-1/2 md:rounded-full md:border md:p-2"
    >
      <ul className="flex justify-around md:flex-col md:gap-2">
        <li className="border-line md:border-b md:pb-2">
          <ThemeToggle />
        </li>
        {navItems.map(({ id, label }) => {
          const Icon = icons[id];
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                title={label}
                className={`focus-visible:outline-accent grid size-12 place-items-center rounded-full transition focus-visible:outline-2 ${
                  isActive ? "bg-accent text-white" : "text-ink-muted hover:text-accent"
                }`}
              >
                <Icon className="size-5" aria-hidden />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
