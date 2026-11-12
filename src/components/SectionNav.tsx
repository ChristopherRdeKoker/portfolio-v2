"use client";

import { Award, Briefcase, FolderGit2, Home, Mail, User, type LucideIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { focusRingClasses } from "@/components/ui/classes";
import { navItems, type SectionIdType } from "@/content/navigation";
import { useActiveSectionId } from "@/lib/activeSection";
import { cn } from "@/lib/cn";

const navIcons: Record<SectionIdType, LucideIcon> = {
  home: Home,
  about: User,
  achievements: Award,
  experience: Briefcase,
  projects: FolderGit2,
  contact: Mail,
};

export function SectionNav() {
  const activeSectionId = useActiveSectionId();

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
          const Icon = navIcons[id];
          const isActive = activeSectionId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                title={label}
                className={cn(
                  "grid size-12 place-items-center rounded-full transition",
                  focusRingClasses,
                  isActive ? "bg-accent text-white" : "text-ink-muted hover:text-accent",
                )}
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
